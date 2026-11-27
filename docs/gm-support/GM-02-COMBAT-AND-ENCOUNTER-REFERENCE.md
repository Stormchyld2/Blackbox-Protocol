# GM-02 — Combat and Encounter Quick Reference
**Status:** Canonical-source-derived printable GM aid; no new mechanics. **Sources:** `docs/F12-Combat.md`; `notes/DESIGN-NOTES.md` R01–R06; F11, F13, F14, F17. Fictional tabletop abstraction only.

## Encounter flow
| Step | GM reference |
|---|---|
| Establish stakes | Participants, awareness, intent, position, feasible actions, consequences |
| Round | **6 seconds** (F11/F12) |
| Turn resources | **One main action, movement and reaction**; main may convert to movement |
| Surprise | **No free surprise round** |
| Position | Engaged / near / far / out of reach (abstract bands) |
| Reaction defense | Aware, eligible defender declares **before dice**; DEX evasion or applicable Close Combat defense |
| Attack vs defense | D100 category then signed margin; attacker must **succeed and strictly win**; ties and both-fail cause no hit |
| No reaction available | Resolve ordinary attack check |
| End | Stakes resolved, withdrawal/disengagement, or meaningful opposition ends |

## Cover and attack modifiers
| Situation | Modifier / outcome |
|---|---|
| Partial cover | −10 to attack **if not already in difficulty** |
| Substantial cover | −20 to attack **if not already in difficulty** |
| Complete obstruction | Direct attack infeasible |
| Equipment out of reach | Attack infeasible |
| Retreat | No automatic extra attacks |
| Multiple opponents | No universal numerical bonus |
| Advanced fictional functional objective | Existing −20 option and temporary condition **instead of additional harm**, where feasible |

## Abstract harm and protection
| Harm profile | Severity die |
|---|---|
| Low | D4 |
| Moderate | D6 |
| High | D8 |
| Extreme | D10 |

| Successful degree | Harm bonus |
|---|---:|
| Standard | +0 |
| Strong | +1 |
| Exceptional | +2 |
| Critical | +3 |

**Loss = max(0, severity die result + degree bonus − applicable armor).** Armor rating is **0–3**, subtracted **once**. No extra armor roll, minimum penetrating harm or extra harm die. F13 controls HP changes, injuries and stabilization; do not invent injury thresholds from this reference. Noninjurious feasible actions may affect stamina instead of HP, subject to F12.

## Example
A successful strong attack uses a moderate **D6** profile, rolling **4**, against armor **2**: **max(0, 4+1−2) = 3** abstract loss before F13 HP/condition application. This illustrates arithmetic, **not** a specific weapon's real-world performance.

## Encounter record (one line per participant)
| Participant | Initiative | Awareness | Range band | Main used? | Move used? | Reaction used? | Current condition / resources |
|---|---|---|---|---|---|---|---|
| __________ | ____ | ____ | ____ | □ | □ | □ | __________ |
| __________ | ____ | ____ | ____ | □ | □ | □ | __________ |
| __________ | ____ | ____ | ____ | □ | □ | □ | __________ |
| __________ | ____ | ____ | ____ | □ | □ | □ | __________ |

**Boundary:** F13 owns injury, recovery and mortality. F14 owns stress and psychological consequences. No automatic morale roll or D&D-style challenge rating. Do not double-count cover, armor or impairment.
