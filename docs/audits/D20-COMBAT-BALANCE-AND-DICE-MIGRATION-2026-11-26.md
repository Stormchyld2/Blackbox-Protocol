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

## Exact three-attack encounter probability model
Enumerated each pair of D100 attack/defense results (10,000 pairs), each D20 harm result (20), and success-degree bonus. Each independent attack has a fresh eligible defense reaction; no fatigue, movement, cover, healing, action denial or resource loss between attacks. Convolved the per-attack HP-loss distribution across **three independent attack opportunities**; once cumulative loss reaches starting HP, counted as incapacitation. These are **conditional mathematical scenarios**, not three-round combat predictions when the defender has only one reaction per round or other actions intervene.

| Attack / defense target | Profile | Armor | HP | Expected HP loss per attempt | Incapacitated after 1 attack | After 3 attacks |
|---|---|---:|---:|---:|---:|---:|
| 30 / 30 | Moderate | 0 | 8 | 1.09 | 0.2% | 12.1% |
| 50 / 50 | Moderate | 0 | 8 | 1.63 | 0.2% | 24.3% |
| 70 / 70 | Moderate | 0 | 8 | 2.01 | 0.2% | 34.5% |
| 50 / 50 | High | 2 | 8 | 1.25 | 0% | 13.5% |
| 50 / 50 | Extreme | 0 | 8 | 2.37 | 8.0% | 40.8% |
| 70 / 70 | Extreme | 0 | 8 | 2.91 | 10.7% | 52.4% |
| 50 / 50 | Extreme | 2 | 16 | 1.63 | 0% | 0.9% |
| 50 / 50 | Low | 0 | 3 | 1.25 | 26.4% | 62.2% |

**Interpretation:** The attack/defense system and armor materially reduce effective damage, but **HP 3 characters remain extremely vulnerable**, even to Low harm. At HP 8, Extreme attacks are still consequential. At HP 16 with armor 2, three independent Extreme attacks rarely incapacitate. Keep this spread under review; it is not sufficient evidence to retune dice, armor or HP. Further human sessions must examine reaction eligibility, multi-attacker pacing, cover, injury penalties, stabilization and retreat.

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

## Repository-wide textual scan — completed
The recursive GitHub tree listed **355 blobs**, with `truncated=false`. Read and searched the eligible text source files across `docs/`, `notes/`, `manuals/`, `tests/`, `scripts/`, `lore/`, `dice-tray/`, root Markdown and GitHub workflows. Scan patterns included D4/D6/D8/D10/D12 and common notation (e.g. 1d4), plus “severity die”, “damage die” and “harm die”. Excluded binary assets, fonts, generated locks and non-source blobs. GitHub code search was incomplete, so this audit used full-file connector reads rather than relying on code-search results.

**Findings and disposition:**
- **Active tabletop rules:** Replaced identified obsolete damage-die requirements in F12, Design Notes, GM-02, equipment, NPCs, hazards, supporting content, gap register, GM chart references and SRD. Replaced identified D4 advancement increments with D20 quarter-band 1–4 increments in Design Notes, F10 and manual charts. This preserves the uniform 1–4 advancement distribution.
- **Historical text:** Some superseded dice references remain in the decision history and comparative balance commentary. They are clearly historical and **not** current instructions.
- **Generic dice-tray application:** The standalone `dice-tray/` UI, engine, notation and tests support other polyhedral dice (D4, D6, D8, D10, D12). Those are **real code references**, not tabletop rule requirements. No destructive engine change was made because the generic tray may be reused outside the Blackbox rules preset. **Digital parity remains open:** Blackbox-specific controls should present D100/D20 only or clearly separate generic/custom rolling.
- **Non-dice lookalikes:** Terms such as `d10%` in training calculations are *discount percentages*, not D10 dice; do not rewrite them as dice.

**Verification boundary:** This is a completed textual **reference scan** of the current repository tree, not an assertion that all digital interfaces enforce the dice restriction. Full Node CI, dice-tray tests, device verification and human tabletop sessions remain open. A follow-up automated grep and CI rule should prevent reintroduction of obsolete active tabletop dice notation.

**Outstanding balance:** Run complete opposed-attack encounter simulations, verify low-HP survivability and high-end injury rates, calibrate equipment profiles, and perform human tabletop playtests. Core Rulebook manuscript remains paused and was not edited.
