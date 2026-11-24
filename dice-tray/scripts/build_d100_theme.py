#!/usr/bin/env python3
"""Build the Blackbox Protocol d100 theme for Dice Box.

Dice Box's own d100 is a tens die plus a ones die. This script makes a real
single 100-faced die in the same format as Dice Box's d20 (a visual mesh, a
low-poly collider, a face-to-value map and a number atlas), so it rolls through
the same physics and result code as every other die:

    static/assets/dice-box/themes/blackbox/
        theme.config.json   the theme (one die: d100)
        blackbox.json       d100 mesh, d100_collider and colliderFaceMap
        diffuse-light.png   numbers 1-100, white (for dark dice colours)
        diffuse-dark.png    numbers 1-100, black (for light dice colours)

The shape: 100 points spread evenly over a sphere (Fibonacci spiral); the die is
the intersection of the 100 planes tangent to the sphere at those points, so it
has exactly 100 flat faces. Each face carries one number, 1..100.

Run from dice-tray/:   python3 scripts/build_d100_theme.py
Needs: Python 3, numpy, Pillow, and the Inter font (any bold sans font works;
set FONT_PATH below). The output is committed; this script only needs to run
again if the shape or the numbers change.
"""
import itertools
import json
import math
import os
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFont

FACES = 100
RADIUS = 0.17  # centre to farthest corner. Dice Box's d20 is 0.116; 100 numbers need a bigger die
ATLAS = 2048
GRID = 10  # 10 x 10 cells, one per number
FONT_PATH = os.environ.get(
    "D100_FONT",
    "/usr/share/fonts/opentype/inter/Inter-Bold.otf",
)
OUT = os.path.join(os.path.dirname(__file__), "..", "static", "assets", "dice-box", "themes", "blackbox")


def fibonacci_normals(n):
    golden = math.pi * (3 - math.sqrt(5))
    pts = []
    for i in range(n):
        y = 1 - 2 * (i + 0.5) / n
        r = math.sqrt(1 - y * y)
        t = golden * i
        pts.append((math.cos(t) * r, y, math.sin(t) * r))
    return np.array(pts)


def hull_triangles(points):
    """Triangles of the convex hull of points on a sphere (brute force, exact for general position)."""
    n = len(points)
    triples = np.array(list(itertools.combinations(range(n), 3)))
    result = []
    for start in range(0, len(triples), 20000):
        chunk = triples[start : start + 20000]
        a, b, c = points[chunk[:, 0]], points[chunk[:, 1]], points[chunk[:, 2]]
        m = np.cross(b - a, c - a)
        d = np.einsum("ij,ij->i", m, a)
        side = points @ m.T - d  # (n, chunk)
        for k in range(len(chunk)):
            col = side[:, k]
            if np.all(col <= 1e-9) or np.all(col >= -1e-9):
                result.append(tuple(chunk[k]))
    return result


def build_polyhedron():
    normals = fibonacci_normals(FACES)
    tris = hull_triangles(normals)
    corners = [[] for _ in range(FACES)]
    for tri in tris:
        m = normals[list(tri)]
        v = np.linalg.solve(m, np.ones(3))  # where the three face planes (n.x = 1) meet
        for i in tri:
            corners[i].append(v)
    faces = []
    for i, normal in enumerate(normals):
        ref = np.array([0.0, 0.0, -1.0]) if abs(normal[1]) > 0.95 else np.array([0.0, 1.0, 0.0])
        up = ref - normal * (ref @ normal)
        up /= np.linalg.norm(up)
        right = np.cross(up, normal)
        right /= np.linalg.norm(right)
        pts = corners[i]
        pts.sort(key=lambda p: math.atan2(p @ up, p @ right))  # counter-clockwise seen from outside
        faces.append({"value": i + 1, "normal": normal, "up": up, "right": right, "corners": np.array(pts)})
    scale = RADIUS / max(np.linalg.norm(c) for f in faces for c in f["corners"])
    for f in faces:
        f["corners"] = f["corners"] * scale
    return faces, scale


def inradius(face):
    pts, centre = face["corners"], face["corners"].mean(axis=0)
    best = float("inf")
    for i in range(len(pts)):
        a, b = pts[i], pts[(i + 1) % len(pts)]
        e = b - a
        t = np.cross(e, face["normal"])
        t /= np.linalg.norm(t)
        best = min(best, abs((centre - a) @ t))
    return best


def underline(value):
    """Numbers that read as another number upside down (6/9, 16/91, 68/89 ...) get an underline."""
    flip = {"0": "0", "1": "1", "6": "9", "8": "8", "9": "6"}
    s = str(value)
    if any(ch not in flip for ch in s):
        return False
    r = "".join(flip[ch] for ch in reversed(s))
    return r != s and not r.startswith("0") and 1 <= int(r) <= FACES


def layout(faces):
    """Texture scale: pixels per metre of face, so every vertex stays inside its atlas cell."""
    cell = ATLAS / GRID
    max_off = max(np.linalg.norm(c - f["corners"].mean(axis=0)) for f in faces for c in f["corners"])
    return cell, (cell / 2 - 6) / max_off


def uv_of(face, point, cell, px_per_m):
    idx = face["value"] - 1
    col, row = idx % GRID, idx // GRID
    centre = face["corners"].mean(axis=0)
    du = (point - centre) @ face["right"] * px_per_m
    dv = (point - centre) @ face["up"] * px_per_m
    x = (col + 0.5) * cell - du  # minus: seen from outside the text reads left to right
    y = (row + 0.5) * cell - dv  # image y grows downward
    return x / ATLAS, 1 - y / ATLAS


def mesh_json(faces):
    cell, k = layout(faces)
    pos, nor, uvs, idx = [], [], [], []
    cpos, cnor, cidx, face_map = [], [], [], {}
    for f in faces:
        n, pts = f["normal"], f["corners"]
        base = len(pos) // 3
        for p in pts:
            pos += [round(float(x), 5) for x in p]
            nor += [round(float(x), 4) for x in n]
            u, v = uv_of(f, p, cell, k)
            uvs += [round(u, 5), round(v, 5)]
        for j in range(1, len(pts) - 1):
            # Dice Box's winding: (b-a)x(c-a) points toward the centre.
            idx += [base, base + j + 1, base + j]
            cbase = len(cpos) // 3
            for p in (pts[0], pts[j + 1], pts[j]):
                cpos += [round(float(x), 5) for x in p]
                cnor += [round(float(x), 4) for x in n]
            cidx += [cbase, cbase + 1, cbase + 2]
            face_map[str(len(cidx) // 3 - 1)] = f["value"]
    common = {
        "billboardMode": 0,
        "rotationQuaternion": [0, 0, 0, -1],
        "scaling": [1, 1, 1],
        "isVisible": True,
        "isEnabled": True,
        "pickable": False,
    }
    visual = {"name": "d100", "id": "d100", "position": [0.9, 0, 0], **common, "positions": pos, "normals": nor, "uvs": uvs, "indices": idx}
    collider = {
        "name": "d100_collider",
        "id": "d100_collider",
        "position": [0.9, 0, 0],
        **common,
        "physicsImpostor": 8,
        "physicsMass": 0.1,
        "physicsFriction": 0.5,
        "physicsRestitution": 0,
        "positions": cpos,
        "normals": cnor,
        "indices": cidx,
    }
    return {
        "producer": {"name": "Blackbox Protocol build_d100_theme.py"},
        "gravity": [0, -9.81, 0],
        "meshes": [visual, collider],
        "colliderFaceMap": {"d100": face_map},
    }


def atlas(faces, ink):
    cell, k = layout(faces)
    img = Image.new("RGBA", (ATLAS, ATLAS), (0, 0, 0, 0))
    rho = sorted(inradius(f) for f in faces)
    typical = rho[len(rho) // 2]
    for f in faces:
        text = str(f["value"])
        # Digit height: the same on every face where it fits, smaller where the face is small.
        cap = typical * k * 1.6
        size = cap
        while True:
            font = ImageFont.truetype(FONT_PATH, int(size))
            l, t, r, b = font.getbbox(text)
            w, h = r - l, b - t
            if math.hypot(w, h) / 2 <= inradius(f) * k * 0.95 or size < 12:
                break
            size *= 0.96
        idx = f["value"] - 1
        cx, cy = (idx % GRID + 0.5) * cell, (idx // GRID + 0.5) * cell
        # The text is centred on the face's centroid, which is the cell centre.
        layer = Image.new("L", (ATLAS, ATLAS), 0)
        d = ImageDraw.Draw(layer)
        d.text((cx - w / 2 - l, cy - h / 2 - t), text, font=font, fill=255)
        if underline(f["value"]):
            y = cy + h / 2 + max(3, size * 0.1)
            d.rectangle([cx - w / 2, y, cx + w / 2, y + max(3, size * 0.07)], fill=255)
        img.paste(Image.new("RGBA", (ATLAS, ATLAS), ink + (255,)), mask=layer)
    return img


def main():
    faces, _ = build_polyhedron()
    assert len(faces) == FACES
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, "blackbox.json"), "w") as fh:
        json.dump(mesh_json(faces), fh, separators=(",", ":"))
    atlas(faces, (255, 255, 255)).save(os.path.join(OUT, "diffuse-light.png"), optimize=True)
    atlas(faces, (0, 0, 0)).save(os.path.join(OUT, "diffuse-dark.png"), optimize=True)
    with open(os.path.join(OUT, "theme.config.json"), "w") as fh:
        json.dump(
            {
                "name": "Blackbox Protocol D100",
                "systemName": "blackbox",
                "author": "Blackbox Protocol",
                "version": 0.1,
                "meshFile": "blackbox.json",
                "material": {
                    "type": "color",
                    "diffuseTexture": {"light": "diffuse-light.png", "dark": "diffuse-dark.png"},
                    "diffuseLevel": 1,
                },
                "diceAvailable": ["d100"],
            },
            fh,
            indent=2,
        )
        fh.write("\n")
    sizes = sorted({len(f["corners"]) for f in faces})
    print(f"{len(faces)} faces, polygon sizes {sizes}, written to {os.path.normpath(OUT)}")


if __name__ == "__main__":
    sys.exit(main())
