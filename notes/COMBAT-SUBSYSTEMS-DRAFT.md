# Combat subsystems — draft (2026-11-25)

**Status: DRAFT for Jason's review. Nothing here is approved.** Every number is provisional and comes from simulation only ([tools/playtest_sim/sim_missing_combat.py](../tools/playtest_sim/sim_missing_combat.py), output in [out_sim_missing_combat.md](../tools/playtest_sim/out_sim_missing_combat.md)). No approved section of DESIGN-NOTES, F12, F13 or the SRD is changed. Once a ruling is made, the approved wording goes into DESIGN-NOTES 4.x and F12/F13 as the single authoritative source and this file becomes history.

Fills the six Priority 3 gaps from [PLAYTEST-SIMULATION-1.md](PLAYTEST-SIMULATION-1.md): grappling, chases, reloading, rapid fire, falling and poison.

## Ground rules every draft follows

- **One roll, one ladder.** One D100 per uncertainty, R01–R03, the single difficulty ladder (+30 … −40) and the R06 degrees. Every modifier below is a step on that ladder (−10, −20, +10). No new dice, pools or ladders.
- **Combat as approved on PR 7.** Six-second rounds, one main action, one movement allowance, one reaction (4.1). Evasion is floor(DEX/2); Close Combat defends at close range. Attacker must succeed and strictly win; ties and double failures keep the status quo.
- **Harm and injury unchanged.** 4.2 severity dice, degree bonus only for attacks, armor once. 4.3 severity bands (1 / 2–3 / 4–6 / 7+), injury penalties applied once, and **only a critical depleting hit (or a declared life-threatening condition) makes a character unstable**.
- **Stamina and stress unchanged.** Stamina only for genuinely noninjurious effects and exertion; zero stamina blocks strenuous actions. Stress through 4.4 pressure events, once per distinct event.
- **Supplies as approved in 7.3.** Standard mode: ammunition is uses, one spent per encounter with firing. Advanced counts loads. Medical supplies: one use per stabilization or care attempt.
- **Hazards reconciled, not duplicated.** Falling refines H-17. Poison is the procedure H-07, H-08, H-20, H-21 and AN-12 point to. Their harm dice stay as listed.
- **F21.** Making ammunition, restraints or antidotes is an ordinary F21/7.4 recipe. No crafting rule is added here.
- **No real-world instruction.** All of this is abstract game procedure: no techniques, no weapon performance, no medical or toxicology claims.

## Decisions needed (summary)

| # | Question | Recommendation |
|---|---|---|
| G1 | What does a held character lose? | No movement, no evasion (Close Combat defense only), −10 to tasks other than escaping |
| G2 | Does a tie keep a hold? | Yes, status quo, as 4.1 already says for ties |
| C1 | Does speed (movement index) modify chase rolls? | Yes: +10 to the side whose movement index is 10 or more higher |
| C2 | Do chases cost stamina? | No in Standard. Advanced: 5 stamina per leg after the fifth |
| R1 | What does reloading cost (Advanced)? | Movement allowance with a prepared reload; main action for loose loading and single-load weapons |
| R2 | How many encounter uses in one ammunition box (EQ-105)? | 3 uses per box (options 1, 3 or 5) |
| R3 | How many loads is one Standard use worth (Advanced conversion)? | 6 loads per use |
| F1 | Rapid fire bonus and cost? | +10 for 3 loads (Standard: one extra use that encounter) |
| F2 | Suppression as a rapid-fire option? | Yes, as drafted below |
| L1 | Falls over 20 m? | Option B: always drops to 0 HP and counts as life-threatening (dying, not dead) |
| P1 | When is a toxin life-threatening? | Extreme potency by default; others only when the scenario declares it |
| P2 | Does a standard success against a toxin halve harm? | Yes, mirroring 4.4 stress (strong+ none, standard half, failure full) |

---

## 1. Grappling and restraint

**Grab** (main action, engaged band). Close Combat check; the alternative-attribute adjustment for STR (3.1) applies when force dominates. The defender may react with Close Combat or evasion. On a win the target is **held**. Up to two helpers add +5 each (R02); there is no separate roll per helper.

**Held** (a temporary functional condition, 4.2):
- cannot use movement to leave, and is moved with the holder if dragged;
- can defend only with Close Combat (no evasion), against the holder or anyone else;
- takes −10 (challenging) on tasks other than escaping (G1 options: −10 recommended, −20, or none);
- the holder can keep the hold without a roll each round but has one hand or equivalent occupied, cannot use their own movement except to drag (half movement distance), and loses the hold if incapacitated or if they choose to let go.

**While holding, the holder's main action can:**
- strike the held target (normal attack and harm; nonlethal intent uses stamina only where genuinely noninjurious, 4.2);
- **restrain**: a second opposed Close Combat check; on a win the target is **restrained**: no reactions, no main action except escaping, and escape attempts at −20;
- take or deny a held item: opposed Close Combat; on a win the item changes hands;
- drag the target (uses the movement allowance as above).

**Escape** (held or restrained character's main action). Close Combat or Athletics, the better applicable one, opposed by the holder's Close Combat. A win breaks the hold. A tie keeps the status quo (G2). Restrained characters roll at −20.

**Tools.** Applying a restraint item (rope EQ-045, purpose-made restraints) to a restrained, unconscious or compliant person is routine (no roll) and takes a main action. Escaping a tool restraint is an R02 extended task (Athletics, or Mechanics for a lock), progress target 3 for improvised ties or 6 for purpose-made restraints, interval one minute, with time and noise as the declared costs. A failed push makes noise or tightens the restraint (declared).

**Stress.** Being restrained by a hostile captor can be a 4.4 pressure event (moderate 10), once per distinct event.

**What the simulation shows** (raider Close Combat 35 against the pregens):
- A grab lands 30–32% of the time. A held pregen escapes 18% (Dana) to 43% (Elena) per attempt, 2–24% when restrained.
- Grappling is slow as a way to cause harm: grab-then-strike fights take 17–23 rounds against 9–10 for plain striking, and the held penalty barely matters because held characters still defend with Close Combat. That is acceptable because grappling is meant for control (capture, disarm, hold for others), not damage.
- Capture (restrained) takes a median 7–10 rounds, 25–41% within five rounds. Helpers (+5 each) and unaware targets (no reaction, so an ordinary check) are the levers that shorten it.

## 2. Chases

Uses the existing range bands: engaged, near, far, out of reach (4.1).

1. **Set up.** The GM declares the start band from the fiction (usually near), the mode (on foot, vehicle, mount), and the terrain's inherent difficulty if any.
2. **Legs.** Each leg is one round at encounter scale. Quarry and pursuer each make one check and compare them as an opposed contest: Athletics on foot, Vehicle Operation for vehicles, Animal Husbandry or Athletics for a mount (whichever governs, declared before the roll).
   - Quarry wins: one band further. Pursuer wins: one band closer. Tie or both fail: no change.
   - **Out of reach = escaped** for now. **Engaged = caught**: the pursuer may grab or attack in the next round using normal combat.
3. **Speed (C1).** The side whose movement index is 10 or more higher gets +10. When one side is so much faster that the outcome is not in doubt (a car against a runner on open road), the result is routine or impossible as R01–R03 already say, and no chase is rolled.
4. **Obstacles and complications.** The GM may use the optional R04 circumstance D20 for an obstacle, crowd or shortcut. A character who spends the leg on something else (shooting, hiding, opening a door) does not make the chase check and automatically counts as failing that leg.
5. **Groups.** A group moves at its slowest member. One lead rolls, helpers add +5 each up to +10 (R02).
6. **Breaking contact.** A quarry at far who breaks line of sight may switch to Stealth against the pursuer's Search or PER (one opposed check) instead of the chase check.
7. **Stamina (C2).** No stamina cost in Standard; chases end too quickly for it to matter. Advanced: each leg after the fifth costs 5 stamina (as 7.3's daily cost), and a character at 0 stamina drops out.

**What the simulation shows:**
- Chases are quick: a median of 2–3 legs, 90th percentile 6–9.
- The start band matters more than any modifier. Equal runners starting at near: the quarry escapes 34%; starting at far: 67%. Dana (Athletics 22) escapes a raider 16% from near and 46% from far; Elena (50) 54% and 82%.
- A per-leg stamina cost changed escape rates by 0–2 points, which is why C2 recommends leaving it out of Standard.
- The +10 speed rule did not trigger for any pregen pairing (movement indexes all within 9 points), so it only matters for animals, vehicles or unusual characters.

## 3. Reloading

**Standard mode.** No reload tracking inside an encounter; 7.3 already spends one use per encounter with firing. A **critical failure (100) on a ranged attack** means the weapon is empty or jammed: it cannot fire again until its user spends a main action to reload or clear it. If the character has no uses left, it stays empty.

**Advanced mode** (7.3 counts loads). Each ranged weapon entry gains two fields, both abstract and not tied to any real-world model:
- **Capacity**: single (1), low (3), standard (6) or high (12) loads before reloading.
- **Reload**: *prepared* (movement allowance, R1 recommendation) for weapons fed from a prepared reload, or *loose* (main action) for single-load and loose-loaded weapons. Bows reload as part of the attack. Crossbows are single, loose.

Each attack spends one load. One Standard use equals **6 loads** (R3). An ammunition box holds **3 uses** (R2; options 1, 3 or 5).

Suggested catalogue defaults (provisional): handgun standard capacity, prepared; long gun low capacity, loose; crossbow single, loose; bow no reload.

**What the simulation shows** (Tomas, Firearms 30, D8 handgun, against a raider closing to melee):
- A shooter fires a median of 6 loads per fight (90th percentile 12). That supports 6 loads per use: one use roughly covers one encounter, matching 7.3.
- Capacity 6 with a movement-cost reload plays the same as Standard (42% vs 41% win, 6 rounds).
- A main-action reload costs about 4 points of win rate at capacity 6, 10 at capacity 3, and 23 for a single-shot weapon (18% win). Single-shot weapons are meant to be slow, so that is the intended cost.

## 4. Rapid fire

Only for weapons whose entry carries a **rapid** tag. Declared before rolling. Still one attack roll, one harm die, one reaction to defend (4.1/4.2 forbid extra attack rolls and extra dice). Choose one:

- **Press (F1).** +10 to the attack. Costs 3 loads in Advanced; in Standard the encounter costs one extra use.
- **Suppress (F2).** Choose an area within the weapon's band. One Firearms check against the inherent difficulty, no target defense. On success, until the shooter's next turn, anyone in the area who is not in cover takes −10 on attacks, and anyone who moves through or out of cover in the area is attacked once by an ordinary Firearms check at the shooter's original target (no reaction, since a reaction can't be prepared against covering fire). Costs 6 loads in Advanced, one extra use in Standard. The first time a character is suppressed in an encounter it is a low (5) pressure event under 4.4; repeats in the same encounter are not new events.

Critical failure with rapid fire: weapon empty or jammed, as in Section 3.

**What the simulation shows:** Press +10 for 3 loads raises Tomas's win rate from 41% to 56% at the same 6 rounds, while tripling ammunition (18 loads median). +20 pushes it to 67% and shortens fights to 5 rounds, which looks too strong, so +10 is recommended. Suppression is a positioning tool and was not simulated.

## 5. Falling (refines H-17)

H-17 stays "moderate D6 to extreme D10 by height". This fills in the heights. Falling is environmental harm: no degree bonus except where the table explicitly adds one (4.2 permits that), and armor does not apply.

| Height (abstract) | Harm |
|---|---|
| under 2 m | none; an awkward landing may be H-16 low D4 at GM discretion |
| 2–4 m (about one storey) | moderate D6 |
| 4–8 m | high D8 |
| 8–12 m | extreme D10 |
| 12–20 m | extreme D10 +2 |
| over 20 m | L1 options below |

- **Landing.** An aware character who can act may make an Athletics check as a reaction: success moves one row up the table (less harm), critical failure one row down. Soft surfaces (deep water, snow, a net) move one row up as a declared circumstance. Fall protection or a rope line prevents the fall (H-17 mitigation).
- **Deliberate jumps.** Routine for drops under 2 m; otherwise the same table with the Athletics check.
- **Stress.** A fall from 8 m or more that a character survives can be a moderate (10) pressure event.

**L1: falls over 20 m.**
- *Option A:* extreme D10 +3. In simulation an HP 12 character is downed only 20% of the time and an HP 16 character never is.
- *Option B (recommended):* the character is always reduced to 0 HP and the fall counts as a life-threatening condition, so they are dying (4.3), not dead. Without an Athletics save every HP 12 character is dying; with an untrained helper about 35% die (24% with an Athletics 35 save softening the fall to the 12–20 m row).
- *Option C:* no roll; the GM treats it as fatal unless the fiction gives a way out. Not recommended: 4.3 avoids automatic death.

**What the simulation shows:** Up to 12 m nobody with HP 12 or more is dropped (an HP 8 character is dropped 8–30% of the time from 4–12 m). A one-storey fall is a severe injury 51% of the time (32% with an Athletics save) because severity uses the absolute bands (finding #2 option 3a was not adopted). That is consistent with the approved rules but worth knowing: falls are injurious but rarely fatal below 12 m.

## 6. Poison, toxins and illness (procedure for H-07, H-08, H-20, H-21, AN-12)

A **toxin record** has: route (ingested, inhaled, contact, sting or bite), potency (a hazard harm die), onset (immediate, minutes, hours), intervals (how many times it can harm) and interval length, effect (HP harm, a functional condition, or stamina for genuinely noninjurious agents), and treatment.

| Potency | Harm die | Default intervals | Examples already in the hazards list |
|---|---|---:|---|
| low | D4 | 1 | H-07, H-20 mild, AN-12 swarm |
| moderate | D6 | 2 | H-07, H-08, H-20 |
| high | D8 | 3 | H-08 |
| extreme | D10 | 3 | none listed; scenario-specific |

1. **Notice.** As every hazard: a warning clue first (Search, PER, Science, Survival) so players can avoid it (HAZARDS-AND-ANIMALS).
2. **Each interval** after onset: one CON check (R01, "CON resisting physical strain"). **Strong or better: no harm. Standard: half the rolled harm, rounded down. Failure: full harm. Critical failure: full harm and one extra interval** (P2, mirrors 4.4 stress). Harm is environmental (no degree bonus, no armor) and causes injury severity as normal.
3. **Treatment.** One Medicine check, using one medical-supply use (7.3), after the first interval: success ends the remaining intervals; failure uses the action and supply; critical failure adds one interval. A specific antidote or proper decontamination makes treatment favorable (+10) or routine when the fiction makes the outcome certain (R03).
4. **Life-threatening (P1).** Extreme toxins are life-threatening by default, so reaching 0 HP from one makes the character unstable even if the interval's loss wasn't critical. Lower potencies only when the scenario says so.
5. **Illness condition (closes finding #18 for H-07/H-20).** After the last interval, the character has an illness condition at the severity of the **total** harm taken from that exposure (4.3 bands and penalties, injury-type for "highest penalty once"). It clears on the 4.3 clearance intervals.
6. **Disease (H-21)** uses the same record with interval lengths in days, set by the scenario.
7. **Sedatives and incapacitating agents** apply a functional condition (−10, −20, or unable to act) for a declared duration rather than stamina harm, because stamina pools are too large for dice to matter (finding #4).
8. **Stress.** Knowingly being poisoned can be a moderate (10) pressure event, once.

**What the simulation shows** (CON 50, HP 12 unless stated):
- Low and moderate toxins almost never drop a healthy character (moderate drops an HP 8 character 14% untreated, 5% with Medicine 60).
- High: 24% downed untreated, 4% death with an untrained helper; treatment with Medicine 60 halves that.
- Extreme (life-threatening): 39% dying untreated, 14% death; 16% and 5% with a Medicine 60 treater.
- The halving rule is harsher than plain pass/fail (moderate ×2: 4.3 vs 3.5 HP mean) because a standard success still hurts. If that feels too punishing, P2's alternative is pass/fail.

## Not covered here

Explosives and area harm, drowning and suffocation procedure, fire spread, mounted and vehicle combat, heat and cold intervals (H-05/H-06), NPC morale, and in-scene first aid stay open in the gap list.


## Follow-up validation: suppression and ammunition (2026-11-25)

**Status:** editorial/test findings, not a canon ruling. Owner approved the direction of revising these two topics, not their numeric defaults. The D100 core and the existing optional R04 D20 circumstance die must both be respected.

### F2 suppression: rules interaction test

R04 is **not** a D20 hit-resolution subsystem. It is an optional, independent circumstance die declared before the D100 when there is a distinct uncertainty. Its faces are 1–3 major complication (15%), 4–7 minor complication (20%), 8–17 neutral (50%), 18–20 opportunity (15%). It cannot reverse the primary D100 success/failure, invent arbitrary harm or automatically impose a second attack. Therefore converting suppression to a D20-only attack would contradict R04; retaining the draft's automatic extra Firearms attack on movement would also introduce a second offensive resolution.

**Recommended replacement for playtest (F2, pending approval):** A character with a weapon tagged *rapid* spends a main action and the stated ammunition cost to suppress a declared area within range. Make **one** Firearms D100 check against the GM-declared inherent difficulty. On success, until the suppressor's next turn, exposed characters in the area suffer the draft's −10 attack penalty; movement across the area is hazardous in the fiction but causes **no automatic attack or harm roll**. On failure, the ammunition is still spent but no mechanical suppression penalty applies. The R04 D20 may be rolled **only if** the GM declared a separate plausible uncertainty such as interrupted visibility, collateral resource loss or an unexpected opening; apply R04's existing bands without changing the Firearms result. Cover, retreat, waiting, flanking and negotiation remain available. Whether the penalty should affect attacks alone or also exposed movement is an open playtest question. Do not count an R04 result as a second attack.

**Deterministic checks:** R04's 20 equally likely faces produce 3 major + 4 minor + 10 neutral + 3 opportunity = 20; 35% complication, 50% neutral, 15% opportunity. For a Firearms effective target of 40 (illustrative, not an equipment stat), a standard success rate is approximately 40% before degree/critical handling; optional R04 does not alter that rate. An extra attack is not generated by any D20 face. Edge cases to test at the table: target already in cover; target enters and leaves within one round; multiple suppressors; failed initial check; ammunition exhaustion; suppression with no separate circumstance uncertainty.

### R2/R3 ammunition: consistency test

The current draft proposes **3 Standard uses per EQ-105 box** and **6 Advanced loads per Standard use**, which implies **18 Advanced loads per box**. This arithmetic is internally consistent, but it does **not** establish that EQ-105's approved description, item weight, or price supports either number. The draft's six-load median per encounter is a model result, not evidence of a universal ammunition package. A Standard use is an abstract encounter expenditure, so an Advanced conversion should be explicitly an optional accounting convention, not a claim that all weapons or ammunition types physically share the same cartridge count.

**Recommended interim ruling (R2/R3 pending):** Preserve the approved 7.3 Standard rule: one ammunition use per encounter in which firing occurs. Do not assign a universal number of uses to EQ-105, or a universal physical cartridge/load count to a Standard use, until the authoritative equipment record is reconciled. In Advanced mode, record actual loads and weapon-specific capacity where catalogue entries support them; otherwise mark the capacity or conversion *not yet specified* rather than silently treating 6 or 18 as approved. An abstract box may be a supply unit without implying identical contents across ammunition categories.

**Test matrix before approval:** (1) standard encounter with one shot versus repeated shots: both consume one Standard use under current 7.3; (2) encounter with rapid fire: check the proposed extra Standard use against the stock and restock rules; (3) Advanced single-load versus high-capacity weapons: ensure capacities and reload actions follow each item's entry; (4) conversion to and from Standard: avoid creating or destroying inventory through rounding; (5) pregen starting inventories and EQ-105 stock: reconcile actual quantities, mass and cost; (6) mixed ammunition categories: never allow an abstract box to become universally interchangeable. The proposed 3-use and 6-load numbers are **unverified**, not adopted.

**Remaining work:** Locate the authoritative equipment catalogue entry and inventory records on the applicable branch, then run the existing simulation with the revised suppression behavior and representative equipment-specific capacities. No claim is made here that the simulation was rerun. Neither F2 nor R2/R3 is approved by this editorial check.
