# GM-05 — NPC Quick-Build and Archetype Reference
**Source:** `notes/NPC-ARCHETYPES.md` (36 provisional profiles), `notes/DESIGN-NOTES.md` §§3.4, 4.1–4.4, F07–F09. **Status:** Working GM aid; archetype numeric balance remains untested by independent human play.

## Fast NPC preparation — use existing archetypes
1. Pick a **role, motive, disposition and desired outcome**; hostility is not mandatory.
2. Select the matching archetype from the **12 existing NPC families** in `notes/NPC-ARCHETYPES.md`.
3. Select **Novice / Competent / Expert** skill tier; use the actual archetype's listed attributes, derived values and skill targets.
4. Give only fictionally available equipment, harm profile and armor. Record a nonviolent resolution or withdrawal option.
5. If a BP-trained NPC uses unfamiliar SL/DZ methods, apply the **archetype's existing contextual deficit**, never a blanket penalty to native-era NPCs.

## Existing tier reference (not a new NPC level system)
| Tier | Lead skill final target | Four supporting skill targets |
|---|---:|---:|
| Novice | 30 | 15 |
| Competent | 50 | 35 |
| Expert | 70 | 55 |

All archetype attributes total **350**; tier changes skill effectiveness, **not toughness**. Use the existing full archetype records when derived stats or skill names matter.

## Archetype index
| ID | Archetype | Typical lead skill | Usual initial disposition |
|---|---|---|---|
| NPC-01 | Civilian | Persuasion | Nonhostile |
| NPC-02 | Emergency volunteer | Communications | Nonhostile ally |
| NPC-03 | Security guard | Search | Variable |
| NPC-04 | Law enforcement officer | Search | Variable |
| NPC-05 | Technician | Electronics | Nonhostile expert |
| NPC-06 | Tradesperson | Mechanics | Nonhostile ally |
| NPC-07 | Medic | Medicine | Nonhostile ally |
| NPC-08 | Community leader | Leadership | Variable |
| NPC-09 | Informant or fixer | Streetwise | Variable |
| NPC-10 | Scavenger | Scavenging | Variable |
| NPC-11 | Raider | Intimidation | Hostile or variable |
| NPC-12 | Researcher | Research | Nonhostile expert |

## Derived stats — when a full NPC record is required
| Stat | Formula |
|---|---|
| Health | max(1, floor((STR+CON)/10)) |
| Stamina | floor((CON+WIL)/2) |
| Resilience | floor((WIL+CON)/2) |
| Initiative | floor((DEX+PER)/2) |
| Movement index | floor((STR+DEX+CON)/3) |
| Walk per 6-second movement interval | max(1, floor(movement index/5)) metres if mobile |
| Reference carry | STR × 0.5 kg |
| Recovery index | floor((2×CON+WIL)/3) |

## Ready example — NPC-03 security guard
Use the **existing** NPC-03 record: STR55 CON55 DEX50 INT40 PER55 WIL50 PRE45; Health11, Stamina52, Resilience52, Initiative52, Movement index53 (walk10m/round), Carry27.5kg, Recovery53. **Competent** lead Search50; Surveillance, Close Combat, Persuasion and Communications each35. Variable disposition; wants to keep employment and avoid trouble. Armor0–1 only when supplied by actual kit. May negotiate or withdraw. These are existing archetype values, **not** a newly generated opponent.

## Printable NPC card
| Field | Entry |
|---|---|
| Name / ID / archetype / tier | __________________________ |
| Era / role / location | __________________________ |
| Motive / boundary / leverage | __________________________ |
| Disposition / likely reaction | __________________________ |
| Lead and support skill targets | __________________________ |
| HP / Stamina / Resilience / Initiative | __________________________ |
| Equipment / armor / harm profile | __________________________ |
| Awareness / range / condition | __________________________ |
| Negotiation, exit or surrender option | __________________________ |
| Consequence / follow-up | __________________________ |

**GM boundary:** No challenge rating, encounter-level math, automatic aggression or separate NPC progression. Use F11–F14 for actions, harm, conditions and stress. Existing archetypes are a prep aid, not a restriction on character concepts.
