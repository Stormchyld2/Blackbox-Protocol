# GM-03 — Injury, Dying and Recovery Reference
**Source:** `notes/DESIGN-NOTES.md` §§3.4, 4.3; F12–F13. **Status:** Working canonical quick reference; numeric calibration remains provisional pending playtest.

## Injury from actual HP loss
| Post-armor HP loss in one event | Injury severity | Directly affected task penalty |
|---|---|---|
| 0 | No automatic wound | None |
| 1 | Minor | No automatic penalty |
| 2–3 | Moderate | −10 |
| 4–6 | Severe | −20 |
| 7+ | Critical | −30 or infeasible where justified |

Classify by **actual post-protection loss**, not raw damage or current HP. Use only the **highest applicable injury penalty once** on a task; do not duplicate it through attribute impairment. HP stays between 0 and maximum.

## At zero HP
| Condition | Procedure |
|---|---|
| Zero HP, no severe/critical harm or ongoing life-threatening cause | Stable incapacitated; no ordinary actions |
| Zero HP following severe/critical harm or established life-threatening cause | Unstable; start with three empty deterioration boxes |
| End of each **subsequent** round while unstable | Mark one box; **do not tick in the initial depletion round** |
| Three marked boxes | Death |
| Eligible stabilization attempt | Helper spends main action, appropriate care resources and Medicine check |
| Stabilization success | Stop deterioration |
| Stabilization failure | Action and declared resources consumed |
| Stabilization critical failure | Mark one deterioration box (death at three) |
| Stable at zero | Still incapacitated until eligible HP recovery; consciousness is separate |
| New harm | May reopen instability; no reset of old boxes until definitive care resolves episode |

Deterioration: □ □ □  — Mark at the end of each subsequent unresolved round. No real-world medical timetable is implied.

## Recovery
| Recovery circumstance | Canonical rate / limit |
|---|---|
| Stable, eligible rest, recovery index below 60 | +1 HP per 24 hours |
| Stable, eligible rest, recovery index 60 or above | +2 HP per 24 hours |
| Qualified Medicine care, strong or better, adequate resources | +1 additional HP for that 24-hour interval |
| Medicine standard success | Normal rest recovery only |
| Medicine failure | No care bonus |
| Medicine critical failure | Declared fictional setback; no automatic additional injury |
| Total HP recovery | Maximum **3 HP per day** |
| Unstable or deteriorating | No HP recovery |
| Eligible quiet rest | Restore floor(max stamina / 4), minimum 1, per hour |
| Adequate 8-hour sleep | Restore remaining stamina if no ongoing condition prevents it; **do not double count rest hours** |

Recovery index = floor((2×CON + WIL)/3). One qualified care assessment per 24-hour recovery interval; no repeated bonus farming.

## Injury reassessment
| Injury | Provisional minimum eligible rest before reassessment |
|---|---:|
| Minor | 1 day |
| Moderate | 3 days |
| Severe | 7 days |
| Critical | 14 days |

These are **not automatic cures**. Conditions may persist; record function, care, resources and reassessment. Same rates across all eras, but care availability changes.

## Worked case
A character with recovery index **65**, stable and eligible to rest, gains **2 HP** after 24 hours. A qualified Medicine check at **strong** success with supplies adds **1 HP**, totaling **3 HP** that day. A second helper cannot add another recovery bonus.

**GM fields:** Character ____ | HP ____/____ | Injury severity ____ | Stability ____ | Boxes □□□ | Care/resource ____ | Next recovery review ____ | Next injury reassessment ____.
