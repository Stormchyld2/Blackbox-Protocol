# GM-04 — Stress and Psychological Pressure Reference
**Source:** `notes/DESIGN-NOTES.md` §§3.4, 4.4 and R01–R05; F14. **Status:** Working canonical quick reference; no new stress mechanics.

## One pressure event
| Event intensity | Value |
|---|---:|
| Low | 5 |
| Moderate | 10 |
| High | 20 |

Declare meaningful event, intensity and stakes **before** one WIL check. Do not roll repeatedly for the same unchanged stimulus. Stress is integer **0–100**, starting at 0 unless character history establishes otherwise. Resilience **P = floor((WIL + CON)/2)** is a threshold reference, **not** a spendable pool.

| WIL check outcome | Stress added |
|---|---|
| Strong, exceptional or critical success | 0 |
| Standard success | floor(intensity / 2) |
| Failure | Full intensity |
| Critical failure | Intensity + 5 |

Clamp stress at 100. **No independent D20 pressure die.**

## Stress bands (use highest applicable band)
| Band | Threshold relative to resilience P | Penalty when pressure materially affects the task |
|---|---|---:|
| Composed | Below ceil(P/2) | 0 |
| Strained | At least ceil(P/2), below P | −5 |
| Pressured | At least P, below min(100,P+25) | −10 |
| Overwhelmed | At least min(100,P+25) | −20 |

Thresholds use minimum 1 for living characters. Do not apply pressure penalties to unrelated tasks or duplicate an existing WIL impairment. At overwhelmed, **player chooses** plausible response: pause, seek support, withdraw or continue with penalty; no compulsory violent behavior or arbitrary loss of control.

## Recovery
| Safe circumstance | Stress reduction |
|---|---:|
| Quiet hour | −5 |
| Adequate 8-hour sleep | −20 **instead of** hourly stress recovery during same interval |
| Supportive interaction with consent and suitable skill, success | Additional −5, **once per day** |
| Ongoing acute threat | No recovery |

## Worked case
Resilience **P=50**: composed stress **0–24**, strained **25–49**, pressured **50–74**, overwhelmed **75–100**. A moderate event (10) and ordinary WIL success adds **5** stress; strong success adds **0**. A safe quiet hour removes **5** stress, to a minimum of zero.

Persistent trauma is an **optional player/GM-agreed fictional condition** with triggers and review dates, not an automatic diagnosis. Safety boundaries override depiction.

**GM fields:** Character ____ | P ____ | Stress ____/100 | Band ____ | Event/intensity ____ | Check result ____ | Recovery eligibility ____ | Next review ____.
