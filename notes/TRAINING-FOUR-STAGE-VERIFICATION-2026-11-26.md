> **Reconciliation update (2026-11-26):** This report records an earlier, pre-migration verification state. The catalogue migration blocker described below was resolved by commits `48b82516459f31693b9fe41972632db57e8d250f` and `53799b68b4b46db5d962f2e7f216ada9ad430082`. All 550 records and 2,750 level rows now contain the approved training-hour targets and cumulative active-day figures. The uploaded repository ZIP passed its 11 existing reference test suites; that does **not** constitute a complete dataset-level cross-source regression or human playtest. Retain the earlier measurements below as dated historical evidence, not current status.

# Four-stage training verification — 2026-11-26

**Status: partial verification, not end-to-end acceptance.** Approved rules frozen. No mechanical revisions authorized by this report.

## 1. Catalogue migration — HISTORICAL BLOCKER (RESOLVED)
The canonical `notes/SKILL-NOTES.md` exists on main and is approximately 1,249,504 bytes, but the connected GitHub file reader returned empty content even for lines 1–80. Do not claim it is missing. The 550-record / 2750-row catalogue has **not** been migrated. `scripts/migrate-training-hours.mjs` is a conservative JSON utility and cannot yet parse the markdown source; schema discovery and a tested conversion are required. No original record IDs, assessments, prerequisites, governing skills, CDR awards or occupation ties were modified.

## 2. Regression — PARTIAL PASS
The revised `tests/f09-reference.test.mjs` returned 82 assertions passed in an isolated JS execution in the previous step; this is a reference test, not a dataset regression. A separate deterministic analytical check returned 49 assertions over 35 level targets, 10 parity cases and four milestones. No complete negative/prerequisite/CDR suite was run against migrated records, because none were available.

## 3. Open-learning parity — REFERENCE PASS / INTEGRATION OPEN
Same universal mode rates for open and occupation routes: 1.0 study, 1.25 supervised, 1.5 field, 1.75 mentored, 2.0 intensive. Both routes require the same prerequisites and assessment gates. Parity of the numerical model passed; per-competency access and assessment constraints remain unverified against the source catalogue.

## 4. Three-era multi-skill calendar simulation — ILLUSTRATIVE, NOT EMPIRICAL
Assumptions (actual qualifying hours per **calendar day**, averaged across mission days and downtime): BP 1.5 study + 1.5 field + 0.5 intensive = 4.75 effective hours/day; SL 0.8 + 1.5 + 0.25 = 3.55; DZ 0.4 + 1.0 + 0.1 = 2.10. No overlap or double credit. The three-skill portfolio is one c7 (4230 effective hours), one c6 (2350), one c3 (496), sequential allocation of a fixed daily pool. This models resource scarcity by assumed reduced training availability; it does not model actual catalogue resource gates, injury incidence or occupational assignments.

| Era | C7 through III (630h) | C7 through V (4230h) | Three-skill portfolio (7076h) |
|---|---:|---:|---:|
| BP | 133 calendar days | 891 | 1490 |
| SL | 178 | 1192 | 1994 |
| DZ | 300 | 2015 | 3370 |

The advertised **40 days through III** and **265 days through V** require eight qualifying intensive hours every active day, not ordinary operational calendar time. At those rates, progression in survival-era campaigns is substantially slower. This is a **pacing concern**, not a mathematical contradiction. Resource interruptions and hazards would make timelines longer.

## Open issues
1. **RESOLVED** Catalogue obtained and migrated; 550 records and 2,750 level rows structurally checked in the updated file.
2. **OPEN** Run full cross-source numerical and occupation-index regressions after migration; the existing 11 reference test suites pass but are not exhaustive.
3. **MAJOR** Verify milestone feasibility under realistic playtime budgets and decide whether high mastery is intended as multi-year campaign advancement.
4. **MAJOR** Model instructor scarcity, assessment failure, downtime fragmentation, resource access and hazard exposure from canonical rules instead of illustrative rates.
5. **MINOR** Consolidate superseded training tables into single canonical reference after the catalogue passes.

No human campaign playtest performed. Do not mark the full pipeline passed.
