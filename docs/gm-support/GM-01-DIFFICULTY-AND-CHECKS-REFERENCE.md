# GM-01 — Difficulty and Checks Quick Reference
**Status:** Canonical-source-derived printable GM aid; no new mechanics. **Sources:** `notes/DESIGN-NOTES.md` R01–R06; F11, F15–F16. Use alongside the complete rules.

## Before the roll
1. Is the attempt feasible? If impossible, explain the barrier; if routine and uncontested, resolve without rolling.
2. Establish intent, stakes, time and consequences. Choose a **skill** if learned technique matters; otherwise a **full effective attribute** for raw capacity (R01).
3. Select one inherent difficulty, then distinct situational modifiers and eligible assistance. Apply each source once; clamp final D100 target to **1–99** after summing.
4. Roll D100. Natural **01** is critical success; **100** is critical failure. A successful opposed action must strictly win the opposition (category, then signed margin); a tie preserves status quo.

## Difficulty ladder (R03)
| Task difficulty | Target modifier |
|---|---:|
| Very easy | +30 |
| Easy | +20 |
| Favorable | +10 |
| Standard | 0 |
| Challenging | −10 |
| Difficult | −20 |
| Severe | −30 |
| Extreme | −40 |

**Example:** base skill 60 gives targets **90 / 80 / 70 / 60 / 50 / 40 / 30 / 20** across the ladder, before other distinct modifiers.

## D100 outcome bands (R06)
For final target **T**, after clamp: 01 critical success; rolls **02 through floor(T/5)** exceptional; rolls **floor(T/5)+1 through floor(T/2)** strong; remaining rolls through **T** standard; rolls above T through **99** failure; 100 critical failure. Empty ranges do not apply. A higher degree always takes precedence.

| Final target | Critical | Exceptional | Strong | Standard | Failure | Critical failure |
|---:|---:|---:|---:|---:|---:|---:|
| 10 | 1% | 1% | 3% | 5% | 89% | 1% |
| 30 | 1% | 5% | 9% | 15% | 69% | 1% |
| 50 | 1% | 9% | 15% | 25% | 49% | 1% |
| 70 | 1% | 13% | 21% | 35% | 29% | 1% |
| 90 | 1% | 17% | 27% | 45% | 9% | 1% |

## Assistance and retry (R02)
| Situation | Canonical handling |
|---|---|
| One eligible helper | +5 to lead's target |
| Two eligible helpers | +10 total; **maximum two** |
| Helper cannot contribute | No bonus |
| Repeating unchanged failed attempt | Not allowed |
| Retry with changed circumstances or meaningful cost | May be attempted |
| Optional push after noncritical failure | Once if plausible; announce additional risk; second failure incurs declared consequence |
| Critical failure, irreversible action, unchanged opposed contest | No ordinary push |

## Extended tasks (R02)
| Complexity | Default progress target |
|---|---:|
| Simple | 3 |
| Substantial | 6 |
| Complex | 10 |

| Result | Progress this interval |
|---|---:|
| Critical success | +4 |
| Exceptional | +3 |
| Strong | +2 |
| Standard | +1 |
| Failure | 0 |
| Critical failure | 0, plus declared setback (normally −1 accumulated progress, minimum 0, **or** equivalent cost) |

GM declares interval, deadline, prerequisites and costs before work. Each interval consumes time/resources. No extra roll for the same work interval. Routine work may earn +1 progress per interval without a roll.

## Optional independent circumstance D20 (R04)
Use only when a **separate** uncertain consequence matters and its categories are declared before rolling; it never overrides the D100 result.

| D20 | Independent outcome |
|---|---|
| 1–3 | Major complication |
| 4–7 | Minor complication |
| 8–17 | Neutral |
| 18–20 | Opportunity |

R05: Psychological pressure uses existing D100/stress rules, **not** a separate pressure die.

## Source-checked worked examples
1. **Raw strength:** STR 65, challenging −10 → target **55**; D100 22 is **strong** (floor(55/2)=27).
2. **Two helpers:** skill 55, two eligible helpers +10, difficult −20 → target **45**.
3. **Difficulty only:** skill 60, severe −30 → target **30**; roll 26 is **standard** (strong threshold 15).
4. **Extended task:** substantial target 6; strong +2, failure 0, exceptional +3, standard +1 → **6** progress in four intervals.
5. **Target clamp:** raw attribute 95, very easy +30 → target **99**, not 125; natural 100 still critical failure.
6. **Independent consequence:** repair check succeeds, optional D20 result 5 gives minor complication such as extra spare part consumed; **repair remains successful**.

**Investigation caution (F15):** obvious essential evidence is not withheld by a failed roll. Roll for uncertain interpretation, reliability, timing or additional detail, not whether the plot can proceed.
