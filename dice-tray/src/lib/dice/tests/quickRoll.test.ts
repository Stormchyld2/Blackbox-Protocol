// Blackbox Protocol quick rolls: one D100 or one D20, and nothing else.
import { beforeEach, describe, expect, it } from "vitest";
import { DiceEngine } from "../engine/diceEngine";
import { DiceTrayStore } from "../stores/diceTray.svelte";

function deterministicEngine() {
  let n = 0;
  return new DiceEngine({ random: () => n++, newId: () => `roll-${n}` });
}

beforeEach(() => {
  localStorage.clear();
});

describe("quickRoll", () => {
  it("rolls a single d100 even when other dice are in the tray, and applies the modifier", async () => {
    const tray = new DiceTrayStore(deterministicEngine());
    tray.open("compact");
    tray.adjustCount(1, "d6");
    tray.adjustModifier(3);
    tray.setRollMode("advantage");
    const record = await tray.quickRoll("d100");
    expect(record?.expression).toBe("1d100+3");
    expect(record?.dice).toHaveLength(1);
    expect(record?.dice[0].type).toBe("d100");
    expect(record?.modifier).toBe(3);
    expect(record?.total).toBe(record!.dice[0].value + 3);
    expect(tray.selection).toBe("1d100+3");
  });

  it("rolls a single d20 and leaves the tray set to it", async () => {
    const tray = new DiceTrayStore(deterministicEngine());
    tray.open("compact");
    const record = await tray.quickRoll("d20");
    expect(record?.expression).toBe("1d20");
    expect(record?.dice).toHaveLength(1);
    expect(tray.selectedType).toBe("d20");
    expect(tray.selection).toBe("1d20");
  });
});
