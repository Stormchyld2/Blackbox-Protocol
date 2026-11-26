> **Current-rule reconciliation (2026-11-26):** Archival pre-approval candidate test. Removal of the global CDR eligibility gate is now approved. The c6/c7 figures in the original test below are superseded: c6 I–V = **50/100/200/400/1600** (2,350 total), c7 = **90/180/360/720/2880** (4,230 total). Complexity 6 IV alone requires 400 effective hours; complexity 7 V alone requires 2,880. Historical CDR/hour comparisons, pacing estimates, and candidate-status statements are not current findings. Do not treat this historical test as rerun against the final rules.

# Playtest issue 6 — EVE-inspired simplified competency eligibility test
Date: 2026-11-25. Analytical regression test; not a human playtest.

## Variant under test
Remove the CCDD-19 *global CDR threshold as an individual competency learning gate*. Keep five levels, complexity 1–7, direct level-specific prerequisites, preceding level, access, supervision, resources, time, active learning slots, practice and assessment. Preserve cumulative CDR awards, CDR-based extra learning slots, creation budgets and occupational history. No new discipline currency or occupation-specific exception. CDR is a development record, **not** a permission threshold for an individual competency. Training still occurs in-world; no passive real-time accrual.

## Quantitative tests
Existing base H(c) = 4,8,16,40,80,160,320 hours. Incremental hours at levels I–V multiply by 1,2,4,8,16. No training-efficiency discounts or catalogue overrides applied in baseline.

| Complexity | I incremental h | III cumulative h | IV cumulative h | V cumulative h | CDR at V |
|---:|---:|---:|---:|---:|---:|
| 1 | 4 | 28 | 60 | 124 | 3,100 |
| 2 | 8 | 56 | 120 | 248 | 6,200 |
| 3 | 16 | 112 | 240 | 496 | 9,300 |
| 4 | 40 | 280 | 600 | 1,240 | 12,400 |
| 5 | 80 | 560 | 1,200 | 2,480 | 15,500 |
| 6 | 160 | 1,120 | 2,400 | 4,960 | 18,600 |
| 7 | 320 | 2,240 | 4,800 | 9,920 | 21,700 |

**Career reachability:** Samuel's c6 Nursing IV can be started after completing III and prerequisites without needing to grow global CDR from 8,800 to 60,000; its incremental IV duration remains 1,280h (2,400 cumulative through IV). Elena's reported c4 IV target similarly requires 320h incremental (600 cumulative). Both still require prerequisites, facilities/supervision as applicable, a free slot, and assessment; the test does not assert that either pregen already has all prerequisites.

**Entry access:** A character with zero CDR can attempt to qualify for c6 I (160h) or c7 I (320h), provided catalogue-specific prerequisites, resources and assessment permit it. This is intentional: complexity and prerequisites, not a global total, govern feasibility.

**Farming incentive:** Removing the individual gate eliminates the need to collect unrelated c1 competencies to unlock a c6 target. However c1/c2 still yield 25 CDR/hour while c7 yields 2.1875, so low-complexity farming **still accelerates extra learning slots**. This variant does not solve that secondary imbalance. Do not claim full exploit removal.

**Progression curve:** For a c6 competency, I 160h, II 320h, III 640h, IV 1,280h, V 2,560h. At a hypothetical 4 training hours per available day, IV alone takes 320 days and all I–IV takes 600 days, excluding prerequisites, interruptions and assessments. This may be too slow for some campaigns; test pacing with actual session downtime before changing hours. Complexity-7 V alone requires 5,120h.

## Regression checklist
PASS (mechanical logic): all seven complexities and five levels remain reachable through their direct prerequisites and required training, without a global CDR hard lock; cumulative hours and CDR arithmetic unchanged; prior levels, prerequisites and assessments still gate advancement; no discipline currency introduced.
PASS (mechanical logic): career changing and self-directed learning use the same rules, with no occupation lock or free grants.
OPEN: audit the 2,750 catalogue entries for circular/impossible prerequisite chains, qualification requirements, and hours overrides.
OPEN: re-run all six pregen builds and scripted sessions using actual starting competency levels and catalogue records.
OPEN: quantify extra-slot farming and evaluate whether CDR slot thresholds should be adjusted independently.
OPEN: human-playtest downtime pacing and professional V feasibility.
No production rule has been changed by this test.

## Recommendation
**Conditionally favorable.** Use this simple variant as the next playtest candidate. Preserve CDR for capacity initially, avoid a second currency, and defer changing training hours until campaign pacing data exist. Do not describe the full system as balance-validated before catalogue and human testing.
