// Vitest setup file
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/svelte";

// Vitest globals are disabled, so @testing-library/svelte cannot register its
// automatic cleanup. Unmount rendered components after every test.
afterEach(() => {
  cleanup();
});

vi.mock("@tauri-apps/api/core", () => ({
  invoke: vi.fn(),
}));
