import { defineConfig } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { diceBoxD100Ray } from "./build/diceBoxD100Ray";

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;

export default defineConfig(({ mode }) => ({
  plugins: [diceBoxD100Ray(), svelte(), tailwindcss()],
  // Dice Box is patched at build time (see build/diceBoxD100Ray.ts), so it must not be pre-bundled.
  optimizeDeps: { exclude: ["@3d-dice/dice-box"] },
  // static/ holds the offline Dice Box assets and fonts, served from /.
  publicDir: "static",
  resolve: {
    conditions: mode === "test" ? ["browser"] : undefined,
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
  clearScreen: false,
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host ? { protocol: "ws", host, port: 1421 } : undefined,
    watch: { ignored: ["**/src-tauri/**"] },
  },
}));
