# Psychology mechanics — tabletop usability review
**Status:** Review and proposed decisions only. **No approved mechanic changed.**
**Sources:** `notes/DESIGN-NOTES.md` §§3.4, 4.4, R01–R05; `docs/gm-support/GM-04-STRESS-AND-PSYCHOLOGICAL-PRESSURE-REFERENCE.md`.

## What works
- One existing D100/WIL check for meaningful pressure; no second pressure die.
- Stress 0–100 is distinct from Health/Stamina; Resilience P is a threshold, not another spendable pool.
- Affected-task-only penalties; no mandatory fear behavior, psychiatric diagnosis or loss of player agency.
- No repeated checks for identical unchanged stimulus, and no recovery during acute threat.

## Findings for owner review
| Priority | Issue | Why it matters | Smallest compatible remedy to consider |
|---|---|---|---|
| High | Event frequency and intensity lack concrete examples | GM may call too many WIL checks or inconsistently classify low/moderate/high pressure | Add a short event eligibility/intensity table with examples; explicitly skip routine tension |
| High | Threshold arithmetic is hard to scan during scenes | GM must compare stress to ceil(P/2), P and P+25 repeatedly | Precompute **three thresholds** on character sheet at creation/change; GM looks up current band |
| Medium | Strong success eliminates all stress while standard success adds half | Big result discontinuity; potentially fine, but needs table playtest | Keep as-is until pacing evidence; test frequent low/moderate events |
| Medium | Quiet-hour recovery vs sleep can encourage time slicing | Rule forbids double counting sleep hours, but play examples may be unclear | Add a simple recovery decision table: hourly rest **or** eight-hour sleep, not both for same time |
| Medium | Overwhelmed threshold at min(100,P+25) | Very high P may make overwhelmed rare; intended resilience advantage may be reasonable | Test P values 30, 50, 75, 90 under repeated events before adjusting |
| Medium | Stress penalty overlap with injury/other modifiers | Risk of double-counting WIL impairment or applying stress to every roll | Add 'does pressure materially affect this action?' yes/no field |
| Low | Persistent trauma guidance is narrative but underspecified | Some GMs may apply punitive conditions without consent | Require agreed triggers, functional scope, review date and player consent as already intended |

## Recommended design direction (NOT YET CANON)
**Prefer presentation simplification over new mechanics:** retain existing 0–100 stress and WIL checks; record the three band thresholds directly on the character sheet; create one event example table and one recovery chart; reserve pressure checks for distinct consequential events. Do **not** add new psychological attributes, mental hit points, trauma dice, diagnosis charts or mandatory behavior tables.

If playtesting still shows interruptions, evaluate a narrower change to event frequency **before** modifying stress values, threshold formulas or recovery rates. Any substantive changes require owner approval and targeted regression.

## Targeted playtest cases
1. P=30, 50, 75 and 90: compare bands for stress 0, 20, 40, 60, 80, 100.
2. A character experiences three distinct low/moderate/high events; record number of checks, stress accumulation and time cost.
3. Repeated exposure to the *same* unchanged threat: verify no repeated WIL checks.
4. Eight hours sleep vs quiet rest: verify no overlapping stress recovery.
5. Stress penalty applies to a materially pressured task but not an unrelated task.
6. Overwhelmed player retains control over chosen response and access to nonviolent options.

## Decision gate
**Owner decision needed:** accept presentation-only simplification first, or authorize a targeted mechanical change after the above tests. Until then `GM-04` and Design Notes §4.4 remain the working rules; do not represent this review as a rules revision.
