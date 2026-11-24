# Blackbox Protocol Dice Tray

The dice tray from Catalyst, as a standalone Windows and Android app for Blackbox Protocol.

It is the same tray, with the same look and behaviour: 3D physics dice (Dice Box),
d4 through d20 plus the percentile d100, advantage and disadvantage, modifiers,
typed expressions such as `1d100` or `2d20kh1`, roll history, sound, dice colours
and tray surfaces, and compact and expanded modes. Blackbox Protocol uses the
**D100** for competency rolls and the **D20** for circumstance rolls; both are
one tap away with the D100 and D20 quick-roll buttons.

## What changed from Catalyst

- The tray opens when the app starts. Closing it shows an "Open dice tray" button.
- The Catalyst mark printed into the mat is replaced by the Blackbox Protocol mark.
- Settings and tray position are saved under `blackbox-protocol:` keys.
- The expanded tray fills the whole window (Windows) or screen (Android); on a phone
  in portrait its side rails become rows above and below the mat (`src/styles/standalone.css`).
- **D100** and **D20** quick-roll buttons (above Roll) roll exactly one of that die and
  nothing else. The d100 die is labelled "100" instead of "%".
- **The D100 is a real 100-faced die.** Dice Box only has a tens die plus a ones die, so a
  single D100 roll uses a new die built like Dice Box's d20 (a mesh, a collider, a face-to-number
  map and a number atlas) in `static/assets/dice-box/themes/blackbox/`. It tumbles under the same
  physics, and the number on top is the result. Underlined numbers (6, 9, 16, 18, 19, 61, 66, 68,
  81, 86, 89, 91, 98, 99) can't be mistaken upside down. Every D100 is this die, alone or rolled
  together with other dice (Dice Box lets each group of a roll pick its theme). Regenerate the die with `python3 scripts/build_d100_theme.py`
  (needs numpy and Pillow); the tests check that all 100 faces and numbers line up.
- Campaign roll logs are not wired up: they write into Catalyst project folders,
  which this app does not open. The code is kept as-is in `src/lib/dice/integration`.

The dice code in `src/lib/dice` is otherwise copied unchanged from Catalyst, tests included.

## Develop

```bash
npm install
npm test          # unit tests (Vitest)
npm run check     # Svelte and TypeScript
npm run tauri dev # run the desktop app
```

Building the desktop app needs the [Tauri prerequisites](https://tauri.app/start/prerequisites/)
(Rust, and on Windows the WebView2 runtime, which Windows 10 and 11 already have).

## Windows

```bash
npm run tauri build
```

The portable exe is `src-tauri/target/release/blackbox-protocol-dice-tray.exe`, and the
installers are under `src-tauri/target/release/bundle/` (`nsis/` and `msi/`).

GitHub Actions builds these on every push that touches `dice-tray/`
(workflow "Dice Tray Windows build"); download them from the run's Artifacts.

## Android

GitHub Actions builds an APK on every push that touches `dice-tray/`
(workflow "Dice Tray Android build"). Download `BlackboxProtocolDiceTray.apk` from the
run's Artifacts, copy it to the phone and open it to install (allow installs from
that source when Android asks).

By default each build is signed with a one-off key, so installing a newer build
means uninstalling the old one first. To sign every build with the same key, add
these repository secrets: `ANDROID_KEYSTORE_BASE64` (the .jks file, base64-encoded),
`ANDROID_KEYSTORE_PASSWORD` and `ANDROID_KEY_ALIAS`.

To build locally, install Android Studio with the SDK and NDK, set `ANDROID_HOME`
and `NDK_HOME`, then:

```bash
npx tauri android init
npx tauri icon app-icon.png
npx tauri android build --apk
```
