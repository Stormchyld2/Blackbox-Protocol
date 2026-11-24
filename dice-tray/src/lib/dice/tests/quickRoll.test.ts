// Blackbox Protocol quick rolls: one D100 or one D20, and nothing else.
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { DiceRenderer } from "../engine/diceRenderer";
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
  it("rolls a single d100 even when other dice and a modifier are in the tray", async () => {
    const tray = new DiceTrayStore(deterministicEngine());
    tray.open("compact");
    tray.adjustCount(1, "d6");
    tray.adjustModifier(3);
    tray.setRollMode("advantage");
    const record = await tray.quickRoll("d100");
    expect(record?.expression).toBe("1d100");
    expect(record?.dice).toHaveLength(1);
    expect(record?.dice[0].type).toBe("d100");
    expect(record?.modifier).toBe(0);
    expect(tray.selection).toBe("1d100");
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

function fakeRenderer(): DiceRenderer {
  return {
    kind: "physics",
    init: vi.fn(async () => {}),
    roll: vi.fn(async () => []),
    clear: vi.fn(),
    resize: vi.fn(),
    dispose: vi.fn(),
  };
}

describe("single D100 die", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows one rolling d100 instead of Dice Box's tens and ones pair", async () => {
    vi.useFakeTimers();
    const tray = new DiceTrayStore(deterministicEngine());
    const renderer = fakeRenderer();
    tray.open("expanded");
    tray.updateSettings({ animate: true, speed: "normal" });
    tray.attachRenderer(renderer);
    const roll = tray.quickRoll("d100");
    await vi.advanceTimersByTimeAsync(0);
    expect(tray.status).toBe("rolling");
    expect(tray.singleD100?.settled).toBe(false);
    expect(tray.current).toBeNull();
    await vi.advanceTimersByTimeAsync(2000);
    const record = await roll;
    expect(renderer.roll).not.toHaveBeenCalled();
    expect(record?.dice).toEqual([{ type: "d100", value: 1 }]);
    expect(record?.resolution).toBe("random");
    expect(tray.singleD100).toEqual({ id: expect.any(Number), value: 1, settled: true });
    expect(tray.current).toBe(record);
    expect(tray.history.all).toHaveLength(1);
  });

  it("records nothing when the tray is cleared mid-roll", async () => {
    vi.useFakeTimers();
    const tray = new DiceTrayStore(deterministicEngine());
    tray.open("expanded");
    tray.updateSettings({ animate: true });
    tray.attachRenderer(fakeRenderer());
    const roll = tray.quickRoll("d100");
    await vi.advanceTimersByTimeAsync(100);
    tray.clearTray();
    await vi.advanceTimersByTimeAsync(3000);
    expect(await roll).toBeNull();
    expect(tray.singleD100).toBeNull();
    expect(tray.history.all).toHaveLength(0);
  });

  it("still rolls d100 with other dice through Dice Box", async () => {
    const tray = new DiceTrayStore(deterministicEngine());
    const renderer = fakeRenderer();
    tray.open("expanded");
    tray.updateSettings({ animate: true });
    tray.attachRenderer(renderer);
    void tray.roll({ expression: "1d100+1d20" });
    expect(renderer.roll).toHaveBeenCalled();
    expect(tray.singleD100).toBeNull();
  });
});
