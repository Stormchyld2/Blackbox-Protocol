/**
 * Make Dice Box read a d100 the way the player sees it.
 *
 * Dice Box reads a settled die by shooting a ray from the die's centre straight
 * up (+y). The camera is a near-orthographic view from above, but a die away
 * from the middle of the tray is still seen at an angle of a few degrees. A d20
 * has big faces, so that never matters. The d100's faces are only ~13 degrees
 * wide, so the face that looks "up" is often the neighbour of the face a
 * straight-up ray hits. For a d100 we shoot the ray from the die towards the
 * camera instead, so the counted face is the one facing the player.
 *
 * Dice Box ships this code twice: as plain text in Dice.js and inside a base64
 * worker in world.offscreen.js. Both are patched at build time.
 */
import type { Plugin } from "vite";

export const CAMERA_HEIGHT = 36.5; // Dice Box's camera is at (0, 36.5, 0)

const MARKER = "/*blackbox-d100-ray*/";
const PATTERN = /(static\s+async\s+getRollResult\s*\(\s*(\w+)\s*,\s*\w+\s*\)\s*\{[\s\S]*?let\s+(\w+)\s*=\s*(\w+)\.setVector3\(\s*0\s*,\s*1\s*,\s*0\s*\)\s*;)/;

/** Patch plain Dice Box source. Returns null when there is nothing to patch. */
export function patchDiceBoxSource(code: string): string | null {
  if (code.includes(MARKER) || !code.includes("getRollResult")) return null;
  const match = PATTERN.exec(code);
  if (!match) return null;
  const [whole, , die, dir, owner] = match;
  const aim =
    `${MARKER}${die}.dieType==="d100"&&(${dir}=${owner}.setVector3(` +
    `-${die}.mesh.position.x,${CAMERA_HEIGHT}-${die}.mesh.position.y,-${die}.mesh.position.z).normalize());`;
  return code.replace(whole, whole + aim);
}

/** Patch Dice Box source, including any base64 worker embedded in it. */
export function patchDiceBox(code: string): string | null {
  let out = patchDiceBoxSource(code);
  const base = out ?? code;
  const patchedWorker = base.replace(/"([A-Za-z0-9+/=]{20000,})"/g, (literal, b64: string) => {
    const decoded = Buffer.from(b64, "base64").toString("utf8");
    const patched = patchDiceBoxSource(decoded);
    return patched ? `"${Buffer.from(patched, "utf8").toString("base64")}"` : literal;
  });
  if (patchedWorker !== base) out = patchedWorker;
  return out;
}

export function diceBoxD100Ray(): Plugin {
  return {
    name: "blackbox-dice-box-d100-ray",
    enforce: "pre",
    transform(code, id) {
      if (!id.includes("@3d-dice/dice-box/dist/") || id.includes(".min.") || id.endsWith(".map")) return null;
      const patched = patchDiceBox(code);
      return patched ? { code: patched, map: null } : null;
    },
  };
}
