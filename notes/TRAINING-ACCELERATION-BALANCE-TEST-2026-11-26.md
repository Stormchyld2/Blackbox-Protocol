# Accelerated training balance test — 2026-11-26

## Scope and execution
Analytical deterministic reference test, **not** human playtest or full catalogue integration. The updated `tests/f09-reference.test.mjs` passed **81 assertions** when executed against its current GitHub contents using an isolated JavaScript runner. Covers hour matrix, credit multipliers, ledger duplicates, one-project-per-interval, qualified work, assessment gate, prerequisite gate, project capacity, pause behavior, and top-tier target. No full application runtime or all-550 catalogue regression was executed.

## Training-day comparison (level V alone)
Assumes eight actual qualifying hours per active day; rounded up.

| Complexity | Effective hours | Study 1.0 | Field 1.5 | Exceptional 2.0 |
|---:|---:|---:|---:|---:|
| 1 | 64 | 8 | 6 | 4 |
| 2 | 128 | 16 | 11 | 8 |
| 3 | 256 | 32 | 22 | 16 |
| 4 | 640 | 80 | 54 | 40 |
| 5 | 1280 | 160 | 107 | 80 |
| 6 | 1600 | 200 | 134 | 100 |
| 7 | 2880 | 360 | 240 | 180 |

At six active hours/day, c7 V with exceptional 2.0 credit takes 240 active days; at eight hours/day, 180. These are active days, not calendar days. C7 level V is 43.75% fewer effective-hour requirements than the prior 5120h; c6 level IV is 800h vs prior 1280h. C7 total I–V is 5580 effective hours (vs 9920), so the 180–240-day figure applies **only to the final level V increment**, not the entire path from zero.

## Findings
- **PASS — arithmetic and basic ledger:** all 81 reference assertions pass; no automatic mastery without assessment.
- **PASS — target ceiling as scoped:** c7 V reaches 180–240 active days at 2x credit and 6–8 actual hours/day.
- **CONCERN — full mastery:** from level 0 through V c7 takes 349 active days at 8h/day with 2x credit, or 465 at 6h/day; resource/prerequisite delays add more. If user intended 180–240 days for I–V total, current rule does not satisfy that goal.
- **CONCERN — low-complexity efficiency:** unchanged CDR awards with lower c6/c7 hours alter relative reward/hour; old c1/c7 efficiency disparity remains substantial. Field-credit accessibility may vary by occupation.
- **OPEN — catalogue integration:** 550 competency records, occupation packages, manuscript tables and any runtime consumers require migration and regression. Current repo tree exposes no standalone competency JSON catalogue; cannot claim all 2750 level rows updated.
- **OPEN — campaign calendars:** realistic 1–3 month, 6–12 month and multi-year pacing with rest, travel, instructor scarcity and downtime availability remains unverified.
- **OPEN — professional validity:** competency-specific mandatory practice and assessments need per-record review.

## Next verification gate
Locate or restore authoritative catalogue (not a substitute synthesized from occupation index), update all derived hour rows, run cross-source tests and multi-era calendar simulations, then log findings in playtest issue register. Do not mark end-to-end synchronization complete yet.
