// The single 100-faced die (static/assets/dice-box/themes/blackbox, built by
// scripts/build_d100_theme.py) must be a consistent Dice Box theme: 100 faces,
// every number once, and a collider whose faces map to the same numbers the
// atlas prints on the visual mesh. Dice Box reads a roll by casting a ray up
// from the die and looking up the collider triangle it hits in colliderFaceMap.
import { describe, expect, it } from "vitest";

interface NodeFs {
  readFileSync(path: string, encoding: string): string;
}
const fsModule = "node:fs";
const pathModule = "node:path";
const fs: NodeFs = await import(/* @vite-ignore */ fsModule);
const { join } = (await import(/* @vite-ignore */ pathModule)) as { join(...parts: string[]): string };
const root = (globalThis as unknown as { process: { cwd(): string } }).process.cwd();
const dir = join(root, "static/assets/dice-box/themes/blackbox");

interface Mesh {
  name: string;
  id: string;
  positions: number[];
  normals: number[];
  uvs?: number[];
  indices: number[];
}
const theme = JSON.parse(fs.readFileSync(join(dir, "theme.config.json"), "utf8"));
const file = JSON.parse(fs.readFileSync(join(dir, "blackbox.json"), "utf8")) as {
  meshes: Mesh[];
  colliderFaceMap: { d100: Record<string, number> };
};
const visual = file.meshes.find((mesh) => mesh.name === "d100")!;
const collider = file.meshes.find((mesh) => mesh.name === "d100_collider")!;
const faceMap = file.colliderFaceMap.d100;

type Vec = [number, number, number];
const point = (mesh: Mesh, i: number): Vec => [mesh.positions[3 * i], mesh.positions[3 * i + 1], mesh.positions[3 * i + 2]];
const sub = (a: Vec, b: Vec): Vec => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a: Vec, b: Vec): Vec => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a: Vec, b: Vec) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const norm = (a: Vec) => Math.hypot(...a);

function triangles(mesh: Mesh) {
  const out: Array<{ a: Vec; b: Vec; c: Vec; centre: Vec; normal: Vec; area: number }> = [];
  for (let t = 0; t < mesh.indices.length; t += 3) {
    const [a, b, c] = [0, 1, 2].map((k) => point(mesh, mesh.indices[t + k])) as [Vec, Vec, Vec];
    const n = cross(sub(b, a), sub(c, a));
    out.push({
      a,
      b,
      c,
      centre: [(a[0] + b[0] + c[0]) / 3, (a[1] + b[1] + c[1]) / 3, (a[2] + b[2] + c[2]) / 3],
      normal: n,
      area: norm(n) / 2,
    });
  }
  return out;
}

describe("Blackbox Protocol d100 theme", () => {
  it("is a one-die theme that Dice Box can load", () => {
    expect(theme.systemName).toBe("blackbox");
    expect(theme.diceAvailable).toEqual(["d100"]);
    expect(theme.meshFile).toBe("blackbox.json");
    expect(theme.material.type).toBe("color");
    expect(visual.id).toBe("d100");
    expect(collider.id).toBe("d100_collider");
  });

  it("has exactly 100 faces, numbered 1 to 100 once each", () => {
    const values = Object.values(faceMap);
    expect(new Set(values).size).toBe(100);
    expect(Math.min(...values)).toBe(1);
    expect(Math.max(...values)).toBe(100);
    expect(Object.keys(faceMap)).toHaveLength(collider.indices.length / 3);
  });

  it("maps every collider triangle to the number on the visual face in the same place", () => {
    const visualTris = triangles(visual);
    const colliderTris = triangles(collider);
    colliderTris.forEach((tri, index) => {
      const value = faceMap[String(index)];
      // The visual triangle sitting at the same spot (same centre) carries that number in the atlas.
      const twin = visualTris.find((v) => norm(sub(v.centre, tri.centre)) < 1e-4);
      expect(twin, `collider triangle ${index}`).toBeDefined();
      const vi = visualTris.indexOf(twin!);
      const uv = [0, 1, 2].map((k) => {
        const vertex = visual.indices[3 * vi + k];
        return [visual.uvs![2 * vertex], visual.uvs![2 * vertex + 1]];
      });
      const u = uv.reduce((sum, p) => sum + p[0], 0) / 3;
      const v = 1 - uv.reduce((sum, p) => sum + p[1], 0) / 3; // image y grows downward
      const cell = (Math.floor(v * 10) * 10) + Math.floor(u * 10) + 1;
      expect(cell, `face ${value}`).toBe(value);
    });
  });

  it("reads the face that points up: a ray from the centre along a face normal hits that face", () => {
    // Dice Box casts the ray straight up from the die's centre; whichever face is on top is read.
    // Rotating the die so face F points up is the same as casting along F's normal.
    const tris = triangles(collider);
    const byValue = new Map<number, typeof tris>();
    tris.forEach((tri, i) => {
      const v = faceMap[String(i)];
      byValue.set(v, [...(byValue.get(v) ?? []), tri]);
    });
    for (const [value, faceTris] of byValue) {
      const n = faceTris[0].normal; // points toward the centre (Dice Box's winding)
      const dir = n.map((x) => -x / norm(n)) as Vec;
      // Moller-Trumbore from the origin along dir against every triangle.
      const hits = tris.filter((t) => {
        const e1 = sub(t.b, t.a);
        const e2 = sub(t.c, t.a);
        const p = cross(dir, e2);
        const det = dot(e1, p);
        if (Math.abs(det) < 1e-12) return false;
        const s: Vec = [-t.a[0], -t.a[1], -t.a[2]];
        const u = dot(s, p) / det;
        const q = cross(s, e1);
        const w = dot(dir, q) / det;
        const dist = dot(e2, q) / det;
        return u >= -1e-6 && w >= -1e-6 && u + w <= 1 + 1e-6 && dist > 0;
      });
      const hitValues = new Set(hits.map((t) => faceMap[String(tris.indexOf(t))]));
      // The face's own plane is struck first; the far side of the die is struck too, but no
      // other face can be nearer along its own normal.
      expect(hitValues.has(value), `face ${value}`).toBe(true);
    }
  });

  it("is a convex die with outward normals and Dice Box's winding", () => {
    for (const mesh of [visual, collider]) {
      for (const tri of triangles(mesh)) {
        // Same convention as Dice Box's d20: (b-a)x(c-a) points toward the centre.
        expect(dot(tri.normal, tri.centre)).toBeLessThan(0);
      }
      for (let i = 0; i < mesh.normals.length; i += 3) {
        const p = point(mesh, i / 3);
        expect(dot([mesh.normals[i], mesh.normals[i + 1], mesh.normals[i + 2]], p)).toBeGreaterThan(0);
      }
    }
    const radius = Math.max(...Array.from({ length: collider.positions.length / 3 }, (_, i) => norm(point(collider, i))));
    expect(radius).toBeGreaterThan(0.1);
    expect(radius).toBeLessThan(0.25);
  });

  it("keeps every texture coordinate inside the atlas", () => {
    for (const value of visual.uvs!) {
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(1);
    }
  });
});
