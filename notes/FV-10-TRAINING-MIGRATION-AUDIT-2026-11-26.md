# FV-10 — Training-rule migration audit (targeted source review)
**Date:** 2026-11-26  
**Status:** PARTIAL / open pending complete active-file scan and current catalogue/occupation JSON verification. No rule changes authorized.

## Current authority
- `docs/F09-Skills-and-Specializations.md` final approved CDR addendum: **no global cumulative CDR minimum for individual competency training**; retain CDR awards and extra concurrent learning slots.
- `docs/F10-Advancement-and-Career-Evolution.md` final approved addendum: same; scoped prerequisite equivalency does not award missing competency levels, CDR or training hours.
- `notes/TRAINING-PROGRESSION-REVISION-2026-11-26.md` and `notes/OPEN-LEARNING-TRAINING-RULES-2026-11-26.md`: training measured in effective hours; mode credit 1.00×–2.00× with eligibility conditions; assessments, actual mandatory supervised hours and professional authorization remain.
- `notes/F36-TRAINING-VERIFICATION-EXECUTION-MATRIX-2026-11-26.md`: complexity 6 I–V 50/100/200/400/1600 (total 2350), complexity 7 I–V 90/180/360/720/2880 (total 4230).

## Examined files and classification
| Source | Finding | Classification / action |
|---|---|---|
| `docs/F09-Skills-and-Specializations.md` | Current approved no-global-CDR rule; older catalogue snapshot clearly marked historical | Current, consistent |
| `docs/F10-Advancement-and-Career-Evolution.md` | Final addendum approves CDR removal; preceding equivalency section still says independent simplified-CDR proposal not approved | Historical sentence superseded **within same active reference**; editorial ambiguity to clarify, not rule change |
| `docs/F09-Training-Mechanical-Audit.md` | Historical 4960/9920-hour totals, complexity-7 10000 prior CDR, and prerequisite-surplus discount | Explicitly marked historical at beginning and end; **not current**; do not use in play |
| `notes/MANUAL-CHARTS.md` | Current 2350/4230 values; source table 9 retains 60,000+ retired global gate values | Clearly titled **RETIRED** and labeled historical; ensure not typeset as active table |
| `notes/TRAINING-TIME-BALANCE-REVIEW-2026-11-26.md` | Current summary correct; old section below 'Historical pre-revision analysis' still headed 'Current time economy', quotes 4960/9920 and old efficiency figures | Archival numbers, but **misleading inner heading**; explicitly rename to historical to prevent extraction error |
| `notes/PLAYTEST-SIMPLIFIED-LEARNING-FULL-REGRESSION-2026-11-26.md` | 60,000 gate and 9920 total describe earlier candidate | Historical scenario; not current rule |
| `notes/OPEN-LEARNING-TRAINING-RULES-2026-11-26.md` | No contradictory CDR gate or obsolete totals in reviewed text | Current, consistent |
| `notes/TRAINING-PROGRESSION-REVISION-2026-11-26.md` | No contradictory CDR gate or obsolete totals in reviewed text | Current, consistent |
| `notes/GLOSSARY-AND-RULES-INDEX.md` | Explicitly retires global gate | Current, consistent |
| `docs/F08-Occupational-Framework.md`, `docs/F08-Allocation-Career-Balance-Audit.md`, `docs/F08-Prerequisite-Closure-Audit.md` | No exact obsolete figures/gate wording in reviewed text | No targeted-string conflict observed |
| `docs/F07.2-F07.12-Character-Creation-Requirements.md`, `docs/manuscripts/core-rulebook/02-resolution.md`, `docs/publications/CORE-RULEBOOK.md`, `docs/publications/QUICK-START-RULES.md` | No targeted-string conflict observed | Not a full semantic/manual audit |
| `notes/STARTING-INVENTORIES.md`, `notes/OCCUPATION-PACKAGES.md` | No targeted-string conflict observed | Not a full occupational baseline audit |

## Remaining FV-10 acceptance
1. Programmatically scan **every** active Markdown manuscript, publication, chart and rules reference for retired gate language, old c6/c7 hours and obsolete discount instructions, with archival section classification.
2. Parse the actual `notes/SKILL-NOTES.md` (550 records / 2750 rows) and `notes/OCCUPATION-INDEX.json` (352 profiles) against approved training hours, absence of retired gate columns, current prerequisites, and active occupational grants. The large files were **not parsed** in this targeted review.
3. Search `dice-tray/src` and any other production code for old training constants; dice tray is not an authoritative training engine, so absence there does not establish future software parity.
4. Record exact file/line, source revision, classification, fix commit and independent retest. Keep PT-009 and FR-006 open until all steps complete.

## Rules integrity
No training durations, CDR rewards, learning slot thresholds, prerequisite levels, qualification requirements or approved mechanics changed in this audit. Historical figures are retained for provenance; no human playtest or software acceptance is claimed.

## Editorial corrections applied
- `notes/TRAINING-TIME-BALANCE-REVIEW-2026-11-26.md`: renamed the obsolete subsection to **Historical time economy (superseded; do not use for current training)**, commit `9010d387`.
- `docs/F10-Advancement-and-Career-Evolution.md`: clarified that the old 'not approved' sentence predates the later approved CDR revision, commit `9505fafc`.
These are provenance/clarity edits only; the complete FV-10 scan and PT-009 acceptance remain open.

## Repository-wide scan automation prepared (2026-11-26)

Added `scripts/fv10-training-migration-scan.mjs` (commit `97328a9f`) and `.github/workflows/fv10-training-migration-scan.yml` (commit `1940a89b`). On checkout, the Node 22 scanner traverses `docs/`, `notes/`, `manuals/` and `dice-tray/src/`, flags retired CDR gates/obsolete hours/discount references with file/line and heuristic archival classification, parses `OCCUPATION-INDEX.json`, and reads the full `SKILL-NOTES.md` for distinct competency ID coverage. The workflow uploads `audit-output/fv10-machine-scan.json` even on failure. **This is a pattern and presence audit, not the full 550×5 level-row arithmetic or occupation-grant/prerequisite validation.** It has not yet produced a verified successful Actions run in this audit. All findings require classification and manual review; PT-009/FR-006 remain open.
