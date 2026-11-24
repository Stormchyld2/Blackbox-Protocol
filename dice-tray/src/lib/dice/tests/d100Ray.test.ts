import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { patchDiceBox } from "../../../../build/diceBoxD100Ray";

const dist = "node_modules/@3d-dice/dice-box/dist/";

describe("d100 result ray", () => {
  it("patches Dice.js so a d100 is read towards the camera", () => {
    const out = patchDiceBox(readFileSync(dist + "Dice.js", "utf8"));
    expect(out).toContain('dieType==="d100"');
    expect(out).toContain("36.5-");
    expect(patchDiceBox(out!)).toBeNull(); // not patched twice
  });

  it("patches the worker embedded in world.offscreen.js", () => {
    const out = patchDiceBox(readFileSync(dist + "world.offscreen.js", "utf8"))!;
    const b64 = /"([A-Za-z0-9+/=]{20000,})"/.exec(out)![1];
    expect(Buffer.from(b64, "base64").toString()).toContain('dieType==="d100"');
  });
});
