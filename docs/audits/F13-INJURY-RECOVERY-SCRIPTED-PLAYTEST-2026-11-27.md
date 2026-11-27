# F13 scripted playtest — injury penalties and multiday recovery (2026-11-27)

## Scope and status
60,000 reproducible randomized state sequences; seed 2026112707. Harness-only validation against F13, not a human playtest or end-to-end game certification. Source: docs/F13-Damage-Injuries-and-Recovery.md. No rules changed.

## Verified checks
- Penetrating harm severity: 0 none, 1 minor, 2–3 moderate, 4–6 severe, 7+ critical.
- For directly affected tasks, highest relevant injury penalty once: minor 0, moderate -10, severe -20, critical -30. Unaffected tasks are not penalized.
- Recovery only for stable characters and eligible 24-hour rest intervals: 1 HP if R<60, else 2 HP, with at most one +1 qualified strong-or-better care bonus per interval; cap at maximum HP.
- Interrupted/ineligible days do not generate recovery; minimum eligible intervals before injury reassessment: minor 1, moderate 3, severe 7, critical 14. Eligibility is not automatic clearance.
- 60,000 generated scenarios, zero violations in tracked HP, stability, penalty and reassessment invariants.

## Playtest issue register
| ID | Classification | Finding | Disposition |
|---|---|---|---|
| F13-PT-01 | Test harness corrected | Earlier encounter scripts assumed stamina costs, stabilization odds, and noncombat probabilities not established by rules. | Exclude those probabilities from balance certification; verified F13 state tests supersede assumptions. |
| F13-PT-02 | No defect detected | Injury penalty applicability and non-stacking preserved in randomized checks. | Closed for tested invariants; real-session usability still open. |
| F13-PT-03 | No defect detected | Eligible-rest recovery, strong care bonus and HP caps preserved. | Closed for tested invariants; multi-character supply logistics not tested. |
| F13-PT-04 | Open coverage gap | Full turn-by-turn combat, teammate Medicine checks, injury penalties and resource availability have not all been tested together in a canonical engine. | Run integrated encounter + downtime harness; do not infer full balance. |
| F13-PT-05 | Open human-playtest gate | Actual table pacing, 14-day critical reassessment, care access and long-term participation are unverified. | Defer human tabletop playtest until sourcebook and GM aids are complete. |

## Interpretation
Reassessment eligibility in the simulation is not a probability of healing or injury clearance. These tests validate selected mathematical and procedural invariants only. Maintain locked D100/D20 combat and F13 defaults unless a reproducible defect is found.
