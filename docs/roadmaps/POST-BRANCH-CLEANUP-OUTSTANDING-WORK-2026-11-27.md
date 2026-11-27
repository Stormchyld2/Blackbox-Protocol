# Blackbox Protocol — post-cleanup outstanding-work register (2026-11-27)

Status: initial source-backed audit, **not** a certified exhaustive repository scan. Main is canonical. The players-handbook branch is editorial; dice-tray remains a separate multi-system application.

## Confirmed open work (priority order)

| ID | Priority | Work | Acceptance condition |
|---|---|---|---|
| BB-01 | P1 | **Verify prior work**, not redesign six systems: grappling, chases, reloading, rapid fire, falling, poison | All six have archived draft procedures. Grappling was recently integrated into F12; the other five require source-of-truth checks, current-dice compatibility and only necessary integration. Preserve prior simulations, but do not treat legacy results as current validation. |
| BB-02 | P1 | Reassess suppression and ammunition accounting | No contradictory Standard/Advanced inventory usage; test before any numeric adoption |
| BB-03 | P1 | Integrated combat balance | Execute full opposed-attack and encounter simulations, low-HP (3), average (8), high-HP (16/20), cover, armor, retreat, injury and medical rescue |
| BB-04 | P1 | Automated regression | Run complete Node tests/CI, search active rule references for obsolete dice, distinguish dice-tray multi-dice support from Blackbox game rules |
| BB-05 | P2 | Rebuild character sheet and five GM trackers from archived generator | Match latest rules, eliminate obsolete fields, print-test PDFs, maintain simple at-table bookkeeping |
| BB-06 | P2 | GM reference completeness | Reconcile charts/tables for encounter, injury, psychology, recovery, resources, money and training against canonical sources |
| BB-07 | P2 | Training/occupation/inventory integration | Review remaining playtest register, CDR/training time, occupation entitlements, proposed inventory candidates and reusable packages; do not grant draft packages automatically |
| BB-08 | P2 | Equipment profile calibration | Compare D20 harm/armor abstractions with equipment catalogue; distinguish sourced real-world values from design estimates |
| BB-09 | P2 | Human tabletop playtest | Run actual sessions; log friction, pacing, survivability, medical stabilization and GM workload; simulations alone do not qualify |
| BB-10 | P3 | Player's Handbook manuscript | Reconcile archived outline/chapter 3 and current draft chapters against main; complete remaining chapters only after rules decisions; resolve PR #9 separately |

## Verified source anchors

- `docs/archive/CRJSWX-COMBAT-SUBSYSTEMS-DRAFT.md`: six proposals are noncanonical and depend on superseded mechanics; includes separate suppression/ammunition follow-up.
- `docs/archive/wwa672/docs/sheets/README.md`: three-page character sheet, five trackers, generator; PDFs require regeneration and print verification.
- `docs/audits/D20-COMBAT-BALANCE-AND-DICE-MIGRATION-2026-11-26.md`: exhaustive D20 outcome enumeration completed; full Node CI, runtime integration, encounter simulations and human sessions not certified complete.
- `docs/manuscripts/core-rulebook/00-OUTLINE.md`: manuscript source map and unfinished chapters.
- `docs/archive/core-rulebook-manuscript-2026-11-27/`: six preserved manuscript/reference versions.

## Working rules

Use D100 for Blackbox checks and D20 for Blackbox harm. Do not strip other dice from standalone dice-tray. Prefer no new rolls, no new tracking pools and no arithmetic beyond current rules. Archive proposals are not automatically canon. Record every decision in its owning rules file, update GM aids, then retest.

## Audit limitation and next action

This register is based on direct inspection of named repository documents and open-issue search (which returned no open issues). It does **not** claim that every repository TODO, test or manuscript reference has been scanned. Current F12/F13 and all six archived sections inspected. Grappling was integrated into F12 on 2026-11-27. Next: locate any other existing canonical or manuscript implementations of the five remaining systems before changing rules; do not rewrite already-completed design. GitHub code search returned no results for the six terms, so absence elsewhere is not certified. Re-run simulations only where mechanics changed or old dice invalidate findings.
