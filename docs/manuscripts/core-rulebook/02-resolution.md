# Chapter 2 — Resolution

*Sources: DESIGN-NOTES R01–R06 and "Remaining resolution defaults", 1.4. Numerical defaults are provisional pending playtesting.*

## 2.1 The core roll
When the outcome is uncertain, meaningful and possible, roll one **D100** against a **target** (also called effective skill). Roll equal to or under the target to succeed. Natural 01 is a critical success and natural 100 is a critical failure. Before rolling, the GM decides whether the action is routine (it succeeds, no roll), impossible (it cannot be rolled), or uncertain, and states the stakes.

Final targets for an uncertain roll are clamped to 1–99, after all modifiers are added.

## 2.2 Degrees of success
Compare the roll with the target T. The highest category that applies wins.

| Result | Roll |
|---|---|
| Critical success | natural 01 |
| Exceptional | up to floor(T/5) |
| Strong | up to floor(T/2) |
| Standard | up to T |
| Failure | above T |
| Critical failure | natural 100 |

## 2.3 Targets: skills and attributes
- **Skill.** A skill's target is half its governing attribute (rounded down), plus occupational and personal bonuses and any competency modifier, then situational modifiers (Chapters 3–4).
- **Direct attribute check (R01).** For uncertain raw capacity, use the full effective attribute: STR for lifting within plausible limits, CON for resisting physical strain, WIL for composure, PER for noticing an immediate stimulus, DEX for reflexes, INT for reasoning, PRE for raw social presence. Use a skill instead when learned technique decides the outcome. Never switch just to get a higher target. Example: STR 65, challenging (−10) gives target 55; a roll of 22 is a strong success.
- **Alternative attribute.** When learned technique decides but another attribute materially drives execution, the GM may declare it before the roll. Adjustment = floor(effective alternative attribute ÷ 2) − floor(underlying default attribute ÷ 2), applied once. Never choose it only for advantage.

## 2.4 Difficulty and modifiers (R03)
The GM picks one difficulty for the task itself. Add distinct situational modifiers (assistance, adaptation deficits, injury, stress, equipment, and so on) without counting the same factor twice.

| Difficulty | Modifier |
|---|---:|
| Very easy | +30 |
| Easy | +20 |
| Favorable | +10 |
| Standard | 0 |
| Challenging | −10 |
| Difficult | −20 |
| Severe | −30 |
| Extreme | −40 |

This is the only difficulty ladder in the game. Every other chapter expresses penalties and bonuses in these steps.

## 2.5 Helping, retrying and extended tasks (R02)
- **Assistance.** One lead rolls. Up to two helpers who can truly contribute each add +5, for a total of +10. Helpers share the consequences. A helper's contribution is either a bonus or a separate roll, never both. Example: skill 55, two helpers, difficult (−20) gives 45.
- **Retries.** Only when circumstances change, new information or resources arrive, or meaningful time passes at a declared cost. No repeated identical rolls.
- **Pushing.** Once per failed noncritical check, if plausible, declare an extra risk and cost, then roll again at the same target. A second failure brings the declared consequence. A critical failure cannot be pushed. No pushing for instant irreversible events or opposed checks.
- **No essential clue behind a retry.** Essential information is never locked behind a repeated roll.
- **Extended tasks.** The GM sets the goal, prerequisites, lead skill, interval, progress target (3 simple, 6 substantial, 10 complex by default), deadline and consequences before work begins. Each interval uses real time and resources. Progress: critical success +4, exceptional +3, strong +2, standard +1, failure 0. Critical failure adds a declared setback, normally losing 1 progress (minimum 0) or an equivalent cost. Routine work may give 1 progress per interval without a roll. Example: target 6 with strong 2, failure 0, exceptional 3, standard 1 finishes after four intervals.
- **Combined skills.** Use the dominant skill as lead. Separate prerequisites need separate checks only when each has real stakes. Parallel contributors use assistance. If two inseparable competencies are equally essential, use the lower target in one roll. Never average skills to bypass a prerequisite.

## 2.6 Opposed checks
Both sides roll. Compare category first, then margin (target minus roll, larger is better). A tie keeps the status quo. If both fail, neither achieves their intended action. A contest that needs a relative winner may compare failed rolls only to settle relative position, not to count as success.

## 2.7 The optional circumstance die (R04)
The GM may declare a **D20** before the D100, only when an independent uncertainty matters (time, outside interruption, a collateral resource cost), never on routine checks or every attack. Roll it with the D100 or right after. The GM states the plausible consequence categories before rolling.

| D20 | Outcome | Chance |
|---|---|---:|
| 1–3 | Major complication | 15% |
| 4–7 | Minor complication | 20% |
| 8–17 | Neutral | 50% |
| 18–20 | Opportunity | 15% |

It never reverses the D100 result and never causes arbitrary injury. On a failed check an opportunity can offer new information or an alternative path, not a retroactive success. Example: a repair succeeds and a minor complication uses one extra spare part. The GM may leave the die out of the whole campaign. There is no separate pressure die; stress uses the D100 (Chapter 6).

## 2.8 Probability reference (R06)
For target T from 1 to 99: critical success 1%, exceptional max(0, floor(T/5) − 1)%, strong max(0, floor(T/2) − max(1, floor(T/5)))%, standard T − max(1, floor(T/2))%, failure 99 − T%, critical failure 1%.

| T | Crit | Exceptional | Strong | Standard | Failure | Crit fail |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 1 | 0 | 0 | 0 | 98 | 1 |
| 10 | 1 | 1 | 3 | 5 | 89 | 1 |
| 20 | 1 | 3 | 6 | 10 | 79 | 1 |
| 30 | 1 | 5 | 9 | 15 | 69 | 1 |
| 40 | 1 | 7 | 12 | 20 | 59 | 1 |
| 50 | 1 | 9 | 15 | 25 | 49 | 1 |
| 60 | 1 | 11 | 18 | 30 | 39 | 1 |
| 70 | 1 | 13 | 21 | 35 | 29 | 1 |
| 80 | 1 | 15 | 24 | 40 | 19 | 1 |
| 90 | 1 | 17 | 27 | 45 | 9 | 1 |
| 99 | 1 | 18 | 30 | 50 | 0 | 1 |

Opposed contests (all 10,000 D100 pairs):

| A target | B target | A wins % | B wins % | Tie % | Both fail % |
|---:|---:|---:|---:|---:|---:|
| 30 | 30 | 25.35 | 25.35 | 0.30 | 49.00 |
| 30 | 60 | 18.74 | 53.11 | 0.15 | 28.00 |
| 50 | 50 | 37.25 | 37.25 | 0.50 | 25.00 |
| 60 | 40 | 50.32 | 25.46 | 0.22 | 24.00 |
| 75 | 75 | 46.50 | 46.50 | 0.75 | 6.25 |
| 90 | 50 | 72.63 | 22.12 | 0.25 | 5.00 |

Joint chances multiply: target 60 success with a major complication is 0.60 × 0.15 = 9%.
