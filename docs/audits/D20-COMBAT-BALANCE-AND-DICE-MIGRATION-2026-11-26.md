# D100/D20-only combat conversion — mathematical balance and migration audit (2026-11-26)

**Owner-approved decision:** D100 and D20 are the only *required* dice in Blackbox Protocol. D100 resolves actions; D20 supplies optional independent circumstances, harm, and quarter-band 1–4 advancement increments. This audit is an analytical verification, **not** a human tabletop playtest or a complete digital integration certification.

## Exact D20 harm model
One D20 produces base harm 1/2/3/4 on faces 1–5/6–10/11–15/16–20. Low/Moderate/High/Extreme profiles add 0/1/2/3; success degree Standard/Strong/Exceptional/Critical adds 0/1/2/3; subtract armor 0–3 once; clamp at zero. F13 injury bands remain 1 minor, 2–3 moderate, 4–6 severe, 7+ critical.

## Exhaustive probability enumeration
Enumerated 20 D20 outcomes for each of four profiles, four degree bonuses, four armor ratings and HP 3/8/16/20: **5,120 outcome/HP combinations**. A separate exhaustive attack/defense reference fixture already enumerates D100 opposed checks. The repository's `tests/f12-reference.test.mjs` has been migrated to the new D20 formula, but **a full Node test runner execution was not performed here**.

| Profile | Old unarmored standard mean | D20 unarmored standard mean | D20 mean armor 2 | D20 mean armor 3 | D20 chance ≥7 loss, no armor, standard |
|---|---:|---:|---:|---:|---:|
| Low | 2.5 | 2.5 | 0.75 | 0.25 | 0% |
| Moderate | 3.5 | 3.5 | 1.5 | 0.75 | 0% |
| High | 4.5 | 4.5 | 2.5 | 1.5 | 0% |
| Extreme | 5.5 | 5.5 | 3.5 | 2.5 | 25% |

Former standard unarmored ≥7 injury chance: Low 0%, Moderate 0%, High 25%, Extreme 40%. D20 replacement reduces high-end injury spikes, although success degree bonuses can still produce critical injury.

**Single-hit incapacity at HP 3 (standard, unarmored):** Low 50%, Moderate 75%, High 100%, Extreme 100%. **At HP 8 (standard, unarmored):** all four profiles 0%; strong/exceptional/critical bonuses alter this. These are *conditional on a hit*, not encounter probabilities. Defensive opposition and armor reduce actual hit/penetration rates. This exposes high vulnerability at HP 3; retain as **balance watch item** until encounter pacing and human tests.

**Observed changes:** Unarmored mean harm preserved; armored Moderate/High/Extreme mean harm somewhat reduced; High and Extreme standard-hit critical injury probability reduced. Neither is a proof of appropriate weapon or armor calibration. Do not quietly retune without owner decision.

## Repository migration: verified changed files
- `notes/DESIGN-NOTES.md` (dice lock, §4.2 combat, advancement references)
- `docs/F12-Combat.md`, `docs/gm-support/GM-02-COMBAT-AND-ENCOUNTER-REFERENCE.md`
- `tests/f12-reference.test.mjs` (D20 harm fixtures)
- `notes/EQUIPMENT-CATALOGUE.md`, `manuals/CORE-EQUIPMENT-DRAFT.md`
- `notes/HAZARDS-AND-ANIMALS.md`, `notes/NPC-ARCHETYPES.md`
- `notes/MANUAL-CHARTS.md`, `notes/GLOSSARY-AND-RULES-INDEX.md`
- `docs/F10-Advancement-and-Career-Evolution.md`
- `docs/licensing/BLACKBOX-SRD.md`

**Distinguish obsolete active instructions from history:** Historical superseded proposals may mention old dice as historical evidence. Generic `dice-tray/` software currently supports additional polyhedral dice, e.g. `dice-tray/src/lib/dice/types/dice.ts` and notation/UI/tests. This is a **digital product parity decision still open**: the tabletop rules only *require* D100/D20, but the dice tray currently offers other dice. Do not break generic dice functionality or its tests by blindly removing die types. Decide whether to restrict the Blackbox rules preset while retaining a general-purpose tray.

## Coverage and outstanding gates
The GitHub recursive tree listed **355 blobs** (complete tree, not truncated). Targeted full-file inspections identified and corrected the major combat, equipment, hazard, NPC, advancement and SRD references listed above. GitHub code search returned incomplete/empty results and **cannot certify a repository-wide zero-match scan**. A byte-level scan of every eligible source file has **not** been completed; do not describe the migration as repository-wide clean.

**Open tasks:** full source scan including data/test/UI strings, distinguish historical text from active mechanics, confirm no remaining +1D4 advancement references, run actual Node CI and dice-tray tests, review weapon profile assignments, run 3/8/16/20 HP encounter-level scenarios and human sessions. Core Rulebook manuscript remains paused and was not edited.
