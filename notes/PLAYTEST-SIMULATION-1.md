# Playtest simulation 1 — findings (2026-11-25)

**This is a simulation, not a playtest.** No people played. Scripts rolled the approved rules thousands of times, and two sample sessions were run by a scripted GM with logged dice. It can find contradictions, gaps and arithmetic that looks off. It cannot tell you whether the game is fun, whether players understand the rules, or how long things take at a real table. F36 human playtesting is still required.

Nothing here changes the design. Where the rules could be read two ways, the simulation picked one reading and says so. Every issue below is a finding for Jason to rule on, not a proposed rule.

**Sources simulated:** `main` plus the PR 3, PR 4 and PR 5 branches (PR 5 contains PR 4). Rules used: R01–R06 and the Chapter 2 manuscript draft, Sections 3.4, 4.1–4.4, 5.1–5.6, 7.1–7.4, CCDD-11/12/19/20, the transitional deficit table, the six pregens, the NPC archetypes, hazards and animals, the equipment catalogue, the Dead Air brief and mission board S-05. The scripts are in [tools/playtest_sim/](../tools/playtest_sim/README.md), so every number can be re-run.

## Summary

The core D100 roll works. Degrees, the single difficulty ladder, assistance and the probability table all behave as documented, and the investigation half of Dead Air plays smoothly: clue routes absorbed every failed roll and nothing stalled. The problems cluster in four places:

1. **Fighting between ordinary people.** Defense uses the full DEX attribute (45–65), while attack skills sit at half an attribute (22–35 for every pregen and most NPCs). Hits are rare, fights drag on (median 9 rounds), and then the first solid hit usually puts someone on a three-round death clock.
2. **Injury severity ignores who is hit.** A punch causes a severe injury 43% of the time it lands, and about 85% of knockdowns leave the character dying rather than stably down.
3. **Survival counters can be gamed.** Drinking full rations every other day never causes deprivation, but steady half rations are treated exactly like no water at all. The daily stamina loss is wiped out by each night's sleep.
4. **Long-term progression gates.** The nurse pregen's career target needs CDR 60,000 when he has 8,800. Simple competencies earn CDR 7–11 times faster per hour than complex ones, so the best way to unlock learning slots and gates is to collect cheap competencies.

Missing subsystems that came up in play: grappling, chases, reloading and rapid fire, falling distances, poison and illness, travel speeds and exertion costs, NPC morale, social opposition skills, and first aid during a scene.

## Prioritized issue list

**Priority 1** means the numbers look off or rules contradict each other in a way that changes play. **Priority 2** means GMs will hit the ambiguity in the first session. **Priority 3** means a subsystem is missing.

### Priority 1 — numbers look off or rules contradict

> **Update 2026-11-25:** findings #1 and #2 have an approved provisional fix (half-DEX evasion; only a critical depleting hit makes a character unstable). See [COMBAT-BALANCE-OPTIONS.md](COMBAT-BALANCE-OPTIONS.md) and DESIGN-NOTES 4.1/4.3. The figures below describe the rules as they stood before that change.

| # | Issue | Evidence | Where |
|---|---|---|---|
| 1 | **Defense outclasses attack.** Evasion uses full DEX (R01), while attacks use skills of about half an attribute. An untrained shooter (Firearms 22–30) hits an aware defender 14–22% of the time. A competent NPC (35) hits 21–25%. Pregen against competent raider: median 9 rounds to a knockdown. The gap also invites players to argue for raw attribute checks instead of skills (untrained skills run 20–30 points below the matching attribute for every pregen). | sim_combat: hit table and duels; sim_resolution: attribute vs skill | 4.1, R01, 3.4 |
| 2 | **Injury severity uses absolute HP loss, independent of the target's HP.** An unarmed D4 hit at target 50 is severe (−20, 7-day clearance) 43% of the time it lands. A D8 hit is severe 71% and critical 34%. Because unstable status depends on the severity of the depleting hit, about 85% of knockdowns become dying characters, and stable incapacitation almost never happens. | sim_combat: single hit table; duels column "loser unstable" 62–88% | 4.2, 4.3, 3.5 |
| 3 | **The dying clock is very short without a trained medic.** If help arrives the next round, a helper with Medicine 22–32 still loses the patient 32–48% of the time. If help is 2 rounds late it is 68–78%. Only Samuel (72) and Elena (67) make it survivable, which ties survival to party makeup. This may be intended; flagging it for an explicit ruling. | sim_combat: dying table | 4.3 |
| 4 | **Nonlethal strain barely does anything.** Stamina is 47–57 while HP is 8–12, so exhausting someone takes 12–18 successful D4/D6 strain hits (24–36 rounds) against 2–3 hits to drop them. Which harm die strain uses is also unstated. | sim_combat: strain | 4.2, 3.4 |
| 5 | **The deprivation counter can be gamed one way and punishes the other.** (a) A half ration counts as unmet, so half water for 5 days reaches critical on day 5, the same as no water. (b) Full rations every other day keep the counter between 0 and 1 forever, so a character drinking on alternate days, or eating every other day for 60 days, is never deprived. (c) The 5 stamina per day loss is undone by 8 hours of sleep (4.3) until "severely deprived", so stamina is untouched through the first days of no water. Whether "deprived" blocks sleep stamina recovery is unstated. | sim_attrition: deprivation | 7.3, 4.3 |
| 6 | **CDR gates against career targets.** Samuel's package lists Nursing practice IV as a career target, but CCDD-19 gates c6 level IV at CDR 60,000 (he has 8,800; Elena's P-071 IV needs 15,000, she has 5,600). Dana, Tomas and Priya (CDR under 5,000) cannot start any complexity 6–7 competency, even at level I. CDR per training hour is 100·c ÷ H(c): 25 for c1–c2, 10 for c4, 3.75 for c6 and 2.2 for c7, at every level. The fastest way to earn slots and gates is to collect many simple competencies (about 26 new c1 competencies takes Dana to her first extra slot). CCDD-11 already asks for this to be tested; the simulation confirms the incentive. | sim_progression | CCDD-11/12/19 |
| 7 | **The recovery tiers barely differ in practice.** The 2 HP/day tier needs Recovery 60 or higher, and no pregen or NPC archetype reaches it (highest 58). Because the rate is a flat 1 HP/day, tougher characters take longer to heal: Elena (HP 12) needs 12 days, Marcus (HP 8) needs 8. | sim_attrition: recovery | 3.4, 4.3 |
| 8 | **Superseded learning rules still read as approved and conflict.** 2.4 keeps "3/5/7 slots, +0/+5/+10/+15 stages". The Approved Progressive Learning section grants +5 at 25–99% of training. CCDD-11/12/20 allows no partial credit and gives B(L) = 0/5/10/15/20 by completed level. A GM reading the earlier sections will give a +5 bonus partway through training. This is known under outstanding item 1.4, but it changes in-play bonuses. | text comparison | 2.4, Approved Progressive Learning, CCDD-20 |
| 9 | **NPC numbers fall below the player rules.** Novice supporting skills are set at 15, below the untrained base of half an attribute (a raider with DEX 55 has base Close Combat 27 but is listed at 15). Armed archetypes (guard, raider) list "D8 per kit" but have no Firearms value, and no default is given for an unlisted NPC skill. Animals have harm dice but no attack skill at all. | NPC-ARCHETYPES, HAZARDS-AND-ANIMALS | F1, F2 |

### Priority 2 — ambiguities hit at the table

| # | Issue | Hit in |
|---|---|---|
| 10 | **Everyone rolls.** Nothing stops all six characters rolling Search separately. Party success becomes 94% at difficult and 69% at extreme, which bypasses the +10 assistance cap. The retry rule covers repeat rolls by one character only. | sim_resolution |
| 11 | **Social opposition is undefined.** What resists Persuasion, Intimidation or Leadership? 3.2 only covers Deception. Session 1 (calming the intimidator) and Session 2 (talking down scavengers) both needed a GM ruling. | both sessions |
| 12 | **Defense details.** Can DEX evasion apply against gunfire and arrows? After a defended attack wins, which degree sets the harm bonus: the attacker's own roll? Can a character who used their reaction to defend still defend against a second attacker? (No; but GMs ask.) | Session 2 fight |
| 13 | **Initiative ties are common.** Initiative is a fixed index that clusters at 50–55 (Dana, Marcus, Priya and both raiders are all at 52). Ties on PER as well lead to "simultaneous", which then needs adjudication most rounds. | Session 2 |
| 14 | **Crafting completion.** (a) Which competency meets "required level III" is not tied to the recipe, and mission S-05 and D-01 give a scale but no competency (Priya has Mechanical troubleshooting II, Marcus Electrical fundamentals III). (b) After rework, roll again or succeed automatically? The answer changes expected labor by up to 25% (scale 4 at target 35: 58.7 h against 46.5 h). (c) R02 extended tasks and the 7.4 single completion roll both claim projects; which governs what? | Session 2, sim_progression |
| 15 | **First aid during a scene.** 4.3 covers stabilization at 0 HP and a daily care assessment, but nothing for patching up a conscious, injured character mid-scene (Tomas after the electrical arc). Players will expect it. | Session 1 |
| 16 | **Modifiers that may overlap.** Do darkness (H-22, −10/−20) and a "difficult" search of a dark, looted depot count twice? Does a Signal Lost deficit apply to Endurance on an ordinary climb ("unfamiliar sustained work")? | Session 2 |
| 17 | **Ammunition uses.** One use is spent per encounter with firing, but no item says how many uses a box holds (EQ-105). | catalogue, 7.3 |
| 18 | **Hazard timing and thresholds.** Heat and cold deal "D6 over time" with no interval. Falls are "D6 to D10 by height" with no heights. Contaminated water and unsafe food cause harm "as illness, plus condition" with the condition undefined. Disease is "per scenario". | HAZARDS-AND-ANIMALS |
| 19 | **Weapon harm table against the catalogue.** 7.1: unarmed or improvised D4, light hand weapons D6. The catalogue gives claw hammer "improvised harm D6", improvised weapon D4–D6, and machete D8. Bow and crossbow "near and far at −20" can be read as −20 at both bands. No ranged weapon states the engaged band. Protective vest armor 2 "against the harm types it covers" names none. | EQUIPMENT-CATALOGUE |
| 20 | **Consciousness** is called "a separate condition" in 4.3 but never defined. | 4.3 |

### Priority 3 — missing subsystems (confirmed in play or simulation)

Grappling and restraint; chases and pursuit (only "contested escape uses opposed resolution"); reloading, rapid and automatic fire, aiming, suppression; explosives and area harm; falling distance to harm; poison, drugs and toxins (H-08 fumes is the only touchpoint); drowning and suffocation procedure; fire spread; mounted and vehicle combat; **travel speeds and exertion stamina costs** (F19 leaves both to the GM, so the 18 km trek in Session 2 had no numbers, and Stamina has almost no inputs besides deprivation and strain); **NPC morale and withdrawal** (Session 2's fight stalled after two rounds of misses with no rule for raiders backing off).

### Observations (not defects)

- General skill advancement compresses quickly: a 22 skill reaches about 59 after 25 marks, while a 72 reaches 85. This is similar to classic percentile games and may be intended.
- Stress behaves sensibly. A Dead Air session leaves a WIL 50 character "strained" about two-thirds of the time. A hard Signal Lost week sends them to "overwhelmed" 35% of the time (8% for WIL 60). Losing adequate sleep to severe deprivation is what tips characters over, which fits the design intent.
- No pregen has a raised combat skill (all at base, 22–30), and the "competent intimidator" (Close Combat 35) beats all of them. That suits Dead Air, where combat is optional, but every Quick-Start fight will be decided by who defends.

## Key numbers

**Hit chance per attack (%)**, defender spends their reaction on DEX evasion:

| Attack target | No defense | vs DEX 45 | vs DEX 55 | vs DEX 65 |
|---:|---:|---:|---:|---:|
| 22 | 22 | 16 | 14 | 13 |
| 35 | 35 | 25 | 23 | 21 |
| 50 | 50 | 40 | 35 | 31 |
| 70 | 70 | 58 | 54 | 48 |

**One successful hit at target 50, no armor:** D4 averages 3.2 HP (43% severe); D6 averages 4.2 (62% severe, 12% critical); D8 averages 5.2 (71% severe, 34% critical, 22% drops an HP-8 character in one hit); D10 averages 6.2 (47% critical). Armor 2 against D8 cuts the average to 3.3.

**Dying, P(death) with 3 boxes:** no helper 100%; helper with Medicine 32 arriving next round 32%; Medicine 57 8%; Medicine 72 3%. Two rounds late: 68%, 43% and 28%.

**Deprivation:** no water gives deprived on day 2, severe day 3, critical day 5. No food gives day 4, 7 and 21. Half rations of both also give day 2, 3 and 5. Water every other day: never deprived.

**Training (Standard mode):** Marcus Radio fundamentals III→IV takes 64 h (32 days at 2 h/day alongside work). Priya Mechanical troubleshooting II→III takes 160 h (80 days). Samuel Nursing practice III→IV takes 1,280 h (640 days) and is gated at CDR 60,000. Clearing Signal Lost deficits needs 7–16 milestones per pregen, at least 56–128 active hours plus a distinct demonstration for each.

Full tables: `tools/playtest_sim/out_*.md`.

## Sample session 1 — Dead Air (Blackbox Protocol era)

Party: Dana (investigator), Marcus (radio specialist), Elena (firefighter), Tomas (chef). Raw dice: `tools/playtest_sim/session_log_seed25.txt`.

- **Briefing.** Dana interviews the emergency manager (Persuasion 50 + General interviewing +10 = 60, rolled 49, standard) and gets the timeline and access to the EOC.
- **Alert log.** Marcus reads the controller log: Computing 57, challenging, with no competency that fits (47). He rolls 99 and fails. The GM had declared a circumstance die (the IT lead might walk in) and it came up 1, a major complication: the IT lead arrives and access is cut short. The changed circumstance allows a retry with Dana helping (+5, target 52); rolled 28, standard. Clue C1 found. *Rules note:* Dana also wanted her own Research roll on the same log; R02 says bonus or separate roll, not both. Clear.
- **Technician's home.** Elena finds the empty go-bag hook (Search 65, rolled 40). Dana misses the copied inspection photos (rolled 82). Tomas, who knows the sister from the restaurant, talks to her (Persuasion 60, favorable, 70; rolled 61) and learns the technician "had something to report". C2 found by two routes. The clue structure absorbed the failed Search as designed.
- **Contractor depot.** Dana's cover story (Deception 35) against the manager's PER 55 succeeds narrowly. Tomas tries to win over the scared junior employee (Persuasion 60, difficult, 40; rolled 33) and gets a hesitant yes, then pushes by promising protection he may not be able to give (rolled 05, exceptional). The records for C3 are handed over, with a declared cost now hanging over the party. *Rules note:* the push worked cleanly. The question was which skill the manager uses to resist; 3.2 answered it for Deception only.
- **Radio site.** Marcus reads the warning signs (Electronics 72 + 5 = 77, rolled 40) and Elena smells the overheating cabinet (85, rolled 73). Tomas, inside the shelter, fails his DEX reflex (50, rolled 55) and takes D6 environmental harm: 1 HP, minor. He takes 10 stress (WIL check failed); Dana takes none. Elena tries first aid (Medicine 67, rolled 74). *Rules note:* there is no rule for in-scene first aid on a conscious character, so the roll had no defined effect.
- **Car park.** The contractor's intimidator confronts the party. Elena tries to calm him (Leadership 45 against Intimidation 50): both fail, which means no change. He swings at Dana (Close Combat 35 against her DEX 45 evasion), wins, and a punch costs her 3 HP, a moderate injury (−10, 3 days to clear). Marcus calls the sheriff (routine, no roll) and the scene ends.
- **Debrief.** Advancement marks: Marcus +3 Computing, Tomas +4 Persuasion, Elena +1 Search, Dana no gain. All three conclusions were reached despite four failed key rolls.

## Sample session 2 — Signal Lost, mission S-05 (Hollis Gap, day 16 after Cascade onset)

Party: Priya, Marcus, Samuel, Elena, all Blackbox Protocol-trained, so Signal Lost deficits apply to unfamiliar uses.

- **Travel, 18 km on foot.** F19 has no default speed or exertion cost, so the GM had to invent both (Priority 3). Priya navigates (Navigation 35 − 10 deficit = 25, rolled 82, failure: a detour). Elena's Endurance check for the climb fails. Whether the −5 Endurance deficit applies was unclear (#16), so it was left off.
- **Rations.** Day 2 is a half-ration day, which counts as unmet: both counters go to 1. It is erased the next day, and the stamina loss was already restored by sleep. The counters had no effect (#5).
- **Depot.** Priya searches with Marcus helping (55 − 20 + 5 = 40, rolled 13, strong) and finds a cracked relay. The circumstance die rolls 20 (opportunity): a usable spare housing. Samuel then tries to talk two scavengers into sharing (Persuasion 62 against an undefined resisting skill; the GM used Search 30). Both fail, so the GM resolved it as status quo (#11).
- **Jury-rig (B2 scale 4: 40 h, 2 workers, level III required).** No recipe says which competency is required (#14). The GM accepted Marcus's Electrical fundamentals III. Target: Electronics 72 + 10 − 10 deficit − 10 substitute parts = 62. Rolled 54, standard: a working relay after 20 elapsed hours with both working.
- **Raiders at night.** Elena tries to face down two competent raiders (Leadership 45 − 5 deficit against Intimidation 50) and loses. Initiative: Priya and both raiders all at 52 with equal PER, so the round is simultaneous (#13). Over two rounds every attack misses or is evaded (raider Close Combat 35 against DEX 50–55; Priya's wrench at 27). The GM has no morale rule to end the stalemate and rules that the raiders back off when Samuel produces a flare (Priority 3, #1).
- **Camp.** Priya takes 20 stress (high intensity, failed WIL 45); Marcus takes none.

## What to rule on first

1. Defense against attack balance and the severity/unstable link (#1, #2, #3). These decide whether Quick-Start fights feel right.
2. The deprivation counter's half-ration and alternate-day behavior, and stamina recovery while deprived (#5).
3. Social opposition, everyone-rolls and in-scene first aid (#10, #11, #15). These are the rulings Dead Air needs.
4. The CDR gate and career-target mismatch and the cheap-competency incentive (#6) before the catalogue is used for advancement.
5. Missing subsystems by need: travel speeds and exertion, NPC morale, grappling, chases, reloading, falling and poison.

A real table test of Dead Air with the pregens would answer the questions this simulation cannot: pacing, clarity and fun.
