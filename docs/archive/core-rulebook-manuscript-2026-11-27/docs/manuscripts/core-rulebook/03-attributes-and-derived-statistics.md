# Chapter 3 — Attributes and derived statistics

*Status: working manuscript draft. Sources: `notes/DESIGN-NOTES.md` (“Approved character foundation”, Sections 1.1–1.2, 3.1 and 3.4–3.5), `notes/GLOSSARY-AND-RULES-INDEX.md`, and `docs/manuscripts/core-rulebook/02-resolution.md`. The numeric conversions are approved working specifications but **provisional pending human playtesting**. This chapter introduces no new character statistics, difficulty scale, or creation budget.*

## 3.1 What attributes measure

Every character has seven attributes. They describe the character's general capacities, not their occupation or everything they have learned. A high attribute does not grant a professional qualification, and a low attribute does not prevent a character from pursuing an occupation.

| Attribute | Abbreviation | What it represents |
|---|---|---|
| Strength | STR | Raw physical force and capacity to carry a load |
| Constitution | CON | Physical endurance and resistance to strain |
| Dexterity | DEX | Coordination, manual control and reflexes |
| Intelligence | INT | Reasoning and the capacity to apply learned technical knowledge |
| Perception | PER | Awareness and observation |
| Willpower | WIL | Composure, resolve and sustained concentration under pressure |
| Presence | PRE | Personal bearing and social influence |

Attributes matter in two distinct ways. An uncertain action that principally tests raw capacity can use a **direct attribute check**, as explained in Chapter 2. An action that depends on learned technique normally uses the applicable **general skill**, whose underlying base begins at half its default governing attribute, rounded down. The same uncertain action is not rolled twice—once as an attribute and again as a skill.

The thirty general skills do not give every attribute an equal number of governing roles. That distribution is intentional: attributes such as STR and WIL also affect direct checks and derived statistics. Whether the distribution produces satisfactory balance remains a playtesting question.

## 3.2 Underlying and effective attributes

Write the character's **underlying** score separately from any current modifier. A temporary or permanent condition can change an **effective** attribute without rewriting the underlying score. Use the effective value for direct checks and derived statistics when the modifier applies. A change to a derived maximum does not automatically restore a spent resource or heal an injury.

**Source example.** A character has underlying STR 60 and a permanent −10 condition modifier that applies to STR. The effective STR is 50. The underlying score remains 60. The condition does not refund attribute points, erase learned skills, or change previously earned competencies.

When a learned technique clearly governs the action but another attribute materially affects its execution, the GM can declare the **alternative-attribute adjustment** before the roll:

`floor(effective alternative attribute / 2) − floor(underlying default governing attribute / 2)`

Apply that adjustment **once** within the normal Chapter 2 target calculation. It does not permanently alter the underlying skill. For example, the existing rules allow a force-dominant Close Combat task to use STR in this way, or a Leadership task requiring resolve rather than social presence to use WIL. The player and GM do not select the highest attribute merely to improve the roll.

Chapter 4 provides the complete skill list and explains how occupational training, personal points, and competencies relate to an underlying skill.

## 3.3 Attribute allocation during character creation

The same allocation procedure applies to a new character in the Blackbox Protocol era, Signal Lost or Dead Zone. Complete it during character creation (Chapter 12):

1. Begin with **30 in each of the seven attributes**, a baseline total of 210.
2. Distribute **140 additional points** among the seven scores.
3. Optionally reclaim up to **15 points from any individual baseline**, bringing that attribute no lower than **15**. Every reclaimed point becomes one additional point to allocate.
4. Keep each starting attribute between **15 and 80**, inclusive.
5. Check that the **final total is exactly 350**. The 350 is the combined total, not 350 points added to the baseline.

No occupation imposes a mandatory attribute minimum. Injuries or medical conditions do not award extra creation points. The natural human ceiling is 100 through later development; the creation ceiling remains 80. These limits are working game values, not empirical assessments of human capability.

**Source example (approved allocation):**

| STR | CON | DEX | INT | PER | WIL | PRE | Total |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 20 | 25 | 50 | 80 | 70 | 60 | 45 | **350** |

This example shows an uneven allocation within the approved limits; it does not imply an occupation or a mandatory character archetype.

## 3.4 Derived statistics

Derived statistics turn the **effective** attributes into health and other usable game references. Calculate them using the following authoritative working formulas. Round down to the nearest integer except for the carrying reference, which retains its measured value.

| Derived statistic | Calculation | Use |
|---|---|---|
| Maximum Health (HP) | `max(1, floor((STR + CON) / 10))` for a living character | Health depletion and injury |
| Maximum Stamina | `floor((CON + WIL) / 2)` | Spendable physical reserve |
| Resilience | `floor((WIL + CON) / 2)` | Psychological pressure reference |
| Initiative | `floor((DEX + PER) / 2)` | Order of action in an encounter |
| Movement index | `floor((STR + DEX + CON) / 3)` | Short-interval movement reference |
| Carrying reference | `STR × 0.5 kg` | Comparison point for carried mass |
| Recovery index | `floor((2 × CON + WIL) / 3)` | Eligible stable-rest recovery |

The calculations use effective attributes where a relevant modifier applies. The **current** value of Health or Stamina is tracked separately from its maximum. If a maximum falls, clamp its current pool to the new maximum; never make the pool negative. If a maximum rises, the current pool does not increase merely because the maximum has risen. A recalculation is not a healing or stamina-restoration event.

Stamina and Resilience can have the same numerical value because their formulas use the same two attributes. They are nevertheless **different things**: Stamina is a spendable physical reserve; Resilience helps determine the effects of psychological pressure. Resilience is not an additional stamina pool.

### Worked calculation from the approved allocation example

Using STR 20, CON 25, DEX 50, INT 80, PER 70, WIL 60, and PRE 45, with no applicable effective-attribute modifiers:

| Statistic | Calculation | Result |
|---|---|---:|
| Health | floor((20 + 25) / 10) | **4 HP** |
| Stamina | floor((25 + 60) / 2) | **42** |
| Resilience | floor((60 + 25) / 2) | **42** |
| Initiative | floor((50 + 70) / 2) | **60** |
| Movement index | floor((20 + 50 + 25) / 3) | **31** |
| Carrying reference | 20 × 0.5 kg | **10 kg** |
| Recovery index | floor((2 × 25 + 60) / 3) | **36** |

These are arithmetic consequences of the published example, not newly assigned character statistics or evidence of balance.

## 3.5 Movement and carrying load

The **Movement index** supplies the approved short-interval conversion. On level, unobstructed ground, a mobile character can walk:

`max(1, floor(Movement index / 5)) metres per six-second movement interval`

A character unable to move has movement **0** instead. The example above has Movement index 31 and therefore a walking allowance of **6 metres** per such interval under those conditions.

This is not an automatic overland travel speed. The action economy for six-second rounds is explained in Chapter 5. Longer journeys use the travel procedure in Chapter 9; terrain, duration, load, interruptions and other circumstances belong to those procedures, not to a second movement statistic.

**Carrying reference** is STR × 0.5 kg. It is **not** a hard carrying limit. The equipment and travel rules compare the actual mass carried with this reference and adjudicate encumbrance and feasibility; this chapter does not assign extra penalties.

## 3.6 Health is not the same as injury

Maximum Health is a deliberately small integer pool. With the approved creation attribute limits, initial maximum Health lies between **3 and 16 HP**; at the natural attribute ceiling of 100, maximum Health can reach **20 HP**. These are working values requiring harm-and-armor playtests.

A character at **0 HP** is incapacitated and requires the Chapter 6 injury procedure. Zero HP does **not** automatically mean death. Health never becomes negative.

**Source examples.** A 3-HP character who loses 3 HP reaches zero; a 16-HP character who loses 3 HP has 13 HP remaining. The same event can also create an injury according to the **post-protection** loss. Chapter 5 explains harm and armor, and Chapter 6 determines injury severity, stabilization, deterioration, and healing. No automatic wound clearance follows from merely restoring HP.

The **Recovery index** does not grant healing by itself. The approved provisional stable-rest rule is **1 HP per eligible 24 hours** when the index is below 60, and **2 HP per eligible 24 hours** when it is 60 or more. Care, stability, ongoing deterioration and the conditions required for recovery are governed by Chapter 6. The example character's Recovery index is 36, so the applicable *rate, if recovery is eligible*, is 1 HP per 24 hours.

## 3.7 Keeping the record consistent

Use these distinctions throughout play:

- **Underlying attribute:** the character's recorded developed capacity.
- **Effective attribute:** underlying capacity after applicable current modifiers.
- **Derived maximum:** recalculated from effective attributes when relevant.
- **Current pool:** actual remaining Health or Stamina; never silently reset it.
- **Earned learning:** occupational bonuses, general-skill development and competencies; these are preserved separately from temporary attribute effects.

A transition between eras does not create a new attribute budget, erase acquired training, or automatically restore missing Health or Stamina. The character carries forward their history and records; the Transition Handbook owns the detailed transition procedure.

### Reference and provisional status

**Authoritative material used:** the approved seven-attribute creation foundation and its published allocation example; the accepted Section 3 corrections to Resilience and Recovery; the Section 3 derived-stat formulas and health scale; Chapter 2's existing direct and alternative-attribute check procedures; and the rules index locating combat, injury, recovery, equipment and travel in their respective chapters.

**Not added here:** new difficulty modifiers, occupation restrictions, language advancement, revised general skills, new health thresholds or new setting lore. Language capability and its interaction with skills are addressed in Chapter 4. All numeric balance, particularly low-end Health and harm compatibility, remains **untested in human play**.
