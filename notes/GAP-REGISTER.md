# Manual drafting gap register

Status: **Proposed — every item awaits Jason's ruling except G-01 (approved 2026-11-25).** Nothing in this file is an approved rule. When an item is approved, changed or rejected, record the ruling in the item's *Ruling* line, move the approved text into its owning section of [DESIGN-NOTES.md](DESIGN-NOTES.md) (or the owning F-doc), and add a Decision log entry. Manuscript drafters must not use any item below until its Ruling line says Approved.

Purpose: list every piece of content the twelve manuals need that the repo does not yet define, so a drafter never has to invent it. Each item is a question with a recommended default built from rules already in the repo (R01–R06, Sections 3–5, F17–F26, CCDD). Numbers are provisional calibration and still need F36 playtesting.

Scope note: the alternative-skill rule and the "points should start at level 2" question are handled in the occupation review and are deliberately left out.

How to answer: reply with the item number and "approve", "change to …" or "reject". Items are ordered so that earlier answers feed later ones.

| # | Question | Outstanding-work ref | Owning book | Blocks |
|---|---|---|---|---|
| G-01 | When is Dead Zone set? | 8.2 | Dead Zone | G-02, G-05, G-06, roster examples |
| G-02 | When is Signal Lost set, and what triggers each era? | 8.1, 1.3 | GM Handbook / Transition | Transition, SL, DZ |
| G-03 | Official collapse scenarios, recurring organizations, CindrixOps | 8.3 | GM Handbook / SL | SL, DZ, Zero Day |
| G-04 | Equipment item statistics | 7.1 | Equipment Compendium | Core, Quick-Start, Equipment |
| G-05 | Currency, price tiers and starting allowance | 7.2 | Core / Equipment | Core, SL, DZ |
| G-06 | Survival consumption and deprivation | 7.3 | Survival Handbook | Survival, SL, DZ |
| G-07 | Travel speed and exertion | F19 calibration | Core / Survival | Survival, SL, DZ |
| G-08 | Crafting and repair math | 7.4 | Survival / Equipment | Survival, DZ |
| G-09 | Construction and settlement numbers | 7.4, 8.4 | Dead Zone | DZ, GM |
| G-10 | Faction action numbers | 8.4 | GM Handbook | GM, SL, DZ |
| G-11 | Anomaly catalogue definitions | 10, F25 | Anomaly Compendium | Anomaly |
| G-12 | Zero Day plot, NPCs and clue graph | 10, F26 | Zero Day | Zero Day, Quick-Start pregens |
| G-13 | Era label and software capitalization | 9.1, 9.2 | All | All |

---

## G-01 Dead Zone default timeframe
**Question.** How many years after collapse onset does a default Dead Zone campaign take place?

**What the repo already implies.** Native DZ tradespeople (Blacksmith O-166, Seed Keeper O-226, Signal Keeper O-119) trained after the collapse, which needs roughly a decade. Refugee O-350 and Retired Specialist O-352 imply many people still remember the old world. F02.09 says recovery can be under way.

**Recommended default.** Default DZ campaign starts **10–15 years after onset**. Guidance bands:
- *Early Dead Zone* (2–9 years): most adults are transitional survivors; Refugee common; native-trained occupations limited to young characters or apprentices.
- *Default Dead Zone* (10–15 years): natives trained after collapse are adults; pre-collapse specialists are middle-aged or older; settlements and local trade are established but fragile.
- *Late Dead Zone* (16+ years): natives dominate; pre-collapse expertise is rare and valued; Retired Specialist becomes an elder role.

Setting books and pregens assume the default band unless they say otherwise. The GM may pick any band (F02.05: no mandatory dates).

**Alternatives.** 2–9 years; 20–30 years; no default.

**Ruling.** Approved by Jason 2026-11-25: default 10–15 years after onset, with early (2–9) and late (16+) bands as GM variants. Recorded in DESIGN-NOTES Outstanding work 8.2.

## G-02 Signal Lost window and era eligibility thresholds
**Question.** (a) Confirm the twelve world-state indicators, the 0–6 scale and the transition procedure (Outstanding 1.3, currently "proposed"). (b) What indicator levels make a campaign eligible for Signal Lost and for Dead Zone?

**Recommended default.**
(a) Confirm F02.07 as written: twelve indicators (electricity, communications, water, food distribution, healthcare, transportation, government, public order, economy, industrial production, population stability, emergency services), each 0–6 (0 nonfunctional, 1 near failure, 2 critical, 3 severely degraded, 4 disrupted, 5 strained, 6 operational), tracked for the campaign's home region.

(b) Eligibility (GM still authorizes; F02.05):
- **Signal Lost eligible** when, in the home region, at least **4 indicators are at 3 or lower** and that has lasted **14 consecutive days**, or any **two of electricity, communications, water and government are at 2 or lower for 7 days**. A crisis that recovers inside these windows stays a Blackbox Protocol incident.
- **Dead Zone eligible** when at least **8 indicators are at 2 or lower** and that has lasted **365 days**, and no outside restoration is expected within the campaign's planning horizon.
- Recovery never moves a campaign back an era (F02.01). A DZ settlement that restores services raises its local indicators, not the era.
- Default Signal Lost window: from onset to the DZ threshold, usually **the first 1–2 years**.

**Why these numbers.** 4 of 12 means a third of society's systems are badly hurt, which matches "crisis", while 8 of 12 at critical means most systems have failed. The 14-day and 365-day windows put F02.05's "duration distinguishes temporary from sustained collapse" into numbers, and keep the gap between SL and DZ consistent with G-01's 2–9 year early-DZ band.

**Ruling.** Pending.

## G-03 Official collapse scenarios, recurring organizations and CindrixOps
**Question.** F02.04 approves official scenarios but none are named. Which scenarios ship in the initial books, which recurring fictional organizations exist, and is CindrixOps in or out?

**Recommended default.** Four official scenarios, each documented with onset speed, which indicators fail first, regional spread and recovery hooks. Working names only, all original:
1. *Cascade* — a long multi-region grid and communications failure (fast onset; electricity and communications fail first).
2. *Quiet Spread* — a severe disease outbreak that overwhelms healthcare and then supply chains (gradual onset).
3. *Insolvency* — financial and state failure: currency collapse, unpaid services, withdrawal of government (gradual).
4. *Compound Season* — a run of climate and natural disasters that outruns recovery (stepped onset).

Each can be combined or replaced by the GM. An optional anomalous fifth cause belongs to the Anomaly Compendium (G-11), not the core set.

Recurring organizations: three original fictional bodies are enough for the initial books, for example a regional utility and infrastructure contractor, a private security and logistics firm, and a civic emergency-volunteer network. Each needs a faction sheet (F23) for BP, SL and DZ states. CindrixOps: **in, as one optional recurring organization** (the utility/infrastructure contractor slot), with lore limited to what Jason writes or approves.

**Needs from Jason.** Approve or rename the four scenarios; say whether CindrixOps fills the contractor slot; supply any lore you already have for it.

**Ruling.** Pending.

## G-04 Equipment item statistics
**Question.** What statistics does an equipment entry carry, and how do item categories map to the existing harm, armor, range and difficulty rules?

**What already exists.** F17 item record fields; Section 4.2 harm dice D4/D6/D8/D10, armor 0–3, range bands engaged/near/far/out of reach; R03 difficulty ladder; condition labels usable/degraded/unusable.

**Recommended default.**
- *Entry fields.* ID, name, category, description, harm profile (if any), feasible range bands with inherent difficulty per band, armor rating and covered harm types (if protective), mass (kg), uses/capacity, power or consumable needs, required skill/competency, price tier (G-05), availability by era, rules references.
- *Harm profiles by generic category* (not real-world models, per 4.2): unarmed or improvised = low D4; light hand weapons and tools used as weapons = moderate D6; heavy hand weapons, bows and handguns = high D8; long guns = extreme D10. Explosive and vehicle harm uses extreme D10 with GM-declared area, never extra dice.
- *Range.* Hand weapons engaged only; thrown near (far at −20); bows and handguns near (far at −20); long guns near and far (out of reach beyond).
- *Armor.* 1 = heavy work clothing or light protective gear; 2 = purpose-built protective vest or riot gear against the harm types it covers; 3 = heavy rigid protection. Armor never covers harm types its description excludes.
- *Tools.* Normal difficulty assumes appropriate tools. Improvised tools −10; no tools −20, or infeasible if the task cannot be done by hand. Specialist kits do not add a bonus (competency already represents expertise), they only remove the penalty. No stacking with the task's difficulty choice.
- *Condition.* Degraded = −10 to tasks that rely on the item; unusable = item cannot provide its function. Wear events remain explicit (F17).
- *Availability by era.* Each item gets Common / Restricted / Rare / Unavailable for BP, SL and DZ. Restricted needs a licence, credential or contact in BP; in SL/DZ it needs a seller or salvage source.

**Ruling.** Pending.

## G-05 Currency, price tiers and starting allowance
**Question.** How are prices expressed in each era, and what does a new character get to spend?

**Recommended default.**
- *Price tiers* used across all books, so items never need era-specific price lists:

| Tier | Label | BP reference (2026 USD) | DZ reference (trade units) |
|---:|---|---|---|
| 0 | Trivial | under $10 | 1 |
| 1 | Cheap | $10–50 | 2–5 |
| 2 | Moderate | $50–250 | 5–20 |
| 3 | Expensive | $250–1,000 | 20–80 |
| 4 | Major | $1,000–5,000 | 80–300 |
| 5 | Asset | $5,000–50,000 | 300–1,500 |
| 6 | Institutional | over $50,000 | not normally tradeable |

- *BP.* Items carry a single reference price inside their tier band; GMs quote local prices per F18. 
- *SL.* Currency still exists but each market sets its own acceptance. Default scarcity multipliers on the BP price: plentiful ×1, short ×3, scarce ×10, unavailable. Barter allowed at any market.
- *DZ.* A **trade unit (TU)** is a reference yardstick equal to **one F20 ration-day of food**, so prices tie back to survival. Default rates: unskilled day's labor 2 TU, skilled day's labor 4 TU, competency level III+ specialist day 8 TU. Markets may rate TU differently; TU is an accounting aid, not a universal currency (F18).
- *Starting discretionary allowance* (on top of the 2.6 occupational kit), by campaign resource tier constrained / ordinary / well-supported: BP $500 / $1,500 / $5,000; SL same nominal cash at the market's multiplier plus 5 / 10 / 20 TU of goods; DZ 10 / 25 / 50 TU of goods. Allowance cannot buy tier 5+ items without debt, shared ownership or GM approval (matches 2.6).

**Ruling.** Pending.

## G-06 Survival consumption and deprivation
**Question.** What happens as food and water shortages continue, and how are ammunition and medical/repair supplies counted?

**What already exists.** F20: 1 food and 1 water ration unit per character per day; each unmet category costs 5 stamina at the daily review; no automatic HP loss or mortality timetable. The four-slot model is not adopted.

**Recommended default.**
- *Altered demand.* Heavy exertion or heat: water ×2. Cold exposure without adequate shelter: food ×2. GM declares before the interval.
- *Half rations.* Half a unit counts as a shortage day for the counter below but costs only 2 stamina.
- *Shortage counter* per category, +1 per shortage day, −1 per full day with demand met (minimum 0):
  - Water counter 2+ or food counter 4+: **Deprived** condition, −10 to physical tasks, no HP recovery.
  - Water counter 3+ or food counter 7+: **Severely deprived**, −20 to physical and mental tasks, no stamina recovery from sleep.
  - Water counter 5+ or food counter 21+: the GM **may** declare a life-threatening condition, resolved through Section 4.3 instability. This is the only route to mortality and needs a declared GM reason, keeping F20's "no automatic mortality" principle.
  Use only the worst applicable penalty, per 4.3's no-double-counting rule.
- *Ammunition* (Standard mode): tracked as uses. One use is spent per encounter in which a ranged weapon is fired; Advanced mode counts individual loads.
- *Medical supplies:* one use per stabilization attempt or daily care assessment (4.3). *Repair supplies:* one use per F21 repair interval.

**Ruling.** Pending. Note this adds an escalation that F20 currently says should not exist; reject it if you want to keep stamina loss as the only automatic effect.

## G-07 Travel speed and exertion
**Question.** F19 needs default speeds and stamina costs.

**Recommended default** (game references, not real-world advice):

| Mode | Good route km/h | Rough or degraded km/h | Max hours/day before exertion doubles |
|---|---:|---:|---:|
| On foot | 4 | 2 | 8 |
| Bicycle | 12 | 5 | 8 |
| Animal-drawn cart | 5 | 3 | 8 |
| Motor vehicle | 60 | 20 | 10 |

Exertion: 5 stamina per 4 hours of foot travel (×1.5 burdened, ×2 heavily burdened, rounding down); 2 stamina per 4 hours by bicycle; no stamina cost for passengers. Beyond the daily maximum, cost doubles. F19's load speed factors (×0.75 / ×0.5) stay as written.

**Ruling.** Pending.

## G-08 Crafting and repair math
**Question.** F21 has the project procedure but no labor hours, difficulty or quality numbers.

**Recommended default.** Reuse the CCDD complexity scale 1–7 and R02 extended tasks so no new engine is needed.

| Project complexity | Example | Labor hours | Progress target (R02) | Competency level needed for no penalty |
|---:|---|---:|---:|---|
| 1 | simple mend, basic preserve batch | 2 | 3 | none |
| 2 | simple tool, clothing repair | 6 | 3 | I |
| 3 | furniture, field repair of an engine part | 16 | 6 | II |
| 4 | forged tool, radio repair | 40 | 6 | III |
| 5 | small machine, custom part | 120 | 10 | III |
| 6 | complex device, vehicle rebuild | 400 | 10 | IV |
| 7 | precision instrument, production line | 1,200 | 10 | V |

- *Interval* = labor hours ÷ progress target, rounded up. Each interval is one R02 check with the R02 progress awards.
- *Difficulty.* Lead has the needed competency level: standard (0). One level short: −10. Two short: −20. No relevant competency: −30, and complexity 5+ is infeasible without one.
- *Materials* cost half the item's price tier value; a repair costs a quarter and half the labor hours.
- *Quality.* Ordinary completion = Standard. If the final interval roll is strong or better, the item is **Fine** (ignores the first wear event in each maintenance interval). If the project ends on a failure and the player accepts imperfect output instead of rework, the item is **Crude** (−10 to tasks using it; its first wear event makes it unusable). Quality never adds a bonus above Standard to task rolls.

**Ruling.** Pending.

## G-09 Construction and settlement numbers
**Question.** F22 needs construction sizes, crew limits and what a "service unit" means.

**Recommended default.**
- *Construction* uses G-08 with size classes: Small (shed, latrine) 40 labor hours, max crew 2; Medium (cabin, workshop) 400 h, crew 6; Large (clinic, barn) 2,000 h, crew 12; Major (water system, wall) 8,000+ h, crew 30. Elapsed minimum = labor hours ÷ max crew ÷ 8 hours per day.
- *Service units.* One unit meets one day's need of: 10 people for water, sanitation or food distribution; 1 patient under care for healthcare; 5 students for education; 1 workshop worker-station for workshops.
- *Settlement indicators* reuse the F02.07 0–6 scale for each settlement service, plus morale (0–6) so GMs learn one scale.
- *Upkeep* per facility: 10% of construction labor hours per month for Medium and larger, recorded as a F21 maintenance project.

**Ruling.** Pending.

## G-10 Faction action numbers
**Question.** F23 has an optional progress clock but no targets or review rhythm.

**Recommended default.** Clock targets 4 (minor aim), 6 (significant), 8 (major), 12 (regional). Default review interval: monthly in Blackbox Protocol, weekly in Signal Lost, monthly in Dead Zone, plus any time a player action touches the faction. Each review a faction advances at most one clock by 1 (2 on an exceptional or critical result where a check is warranted).

**Ruling.** Pending.

## G-11 Anomaly catalogue definitions
**Question.** How many anomalies ship in the Anomaly Compendium, and what mechanical template does each use?

**Recommended default.** Twelve original anomalies, two per F25 category (psychological, technological, biological, environmental, paranormal, cosmic). Each uses the F25 dossier and existing rules only: exposure triggers Section 4.4 pressure checks at low/moderate/high intensity; effects are conditions with the 4.3 penalty scale (−10/−20/−30); physical harm uses 4.2 profiles; every essential discovery has two independent routes (F15). Every anomaly also has a mundane explanation the GM can choose instead. No new dice, no sanity track.

**Needs from Jason.** Approve the count and template. Concepts for the twelve are creative content: Jason supplies them, or asks for a pitch list to pick from.

**Ruling.** Pending.

## G-12 Zero Day plot, NPCs and clue graph
**Question.** What is Zero Day about?

**Fixed by existing notes.** Contemporary 2026, teaching sequence briefing → evidence → interview → location → optional D20 → deduction → danger → debrief (F26); no mandatory collapse or metaplot; essential clues have two independent routes.

**Recommended structure** (plot still Jason's): one session of 3–4 hours for 3–5 characters; three essential conclusions, each reachable by at least two clues; 5–7 NPCs (one victim or missing person, three suspects or witnesses, one ally, one antagonist); four locations; one optional combat or chase that can be avoided.

**Premise pitches, for Jason to pick or replace** (original, working titles):
- *Dead Air* — a regional emergency-radio technician disappears the night a false emergency alert goes out. The trail leads to a contractor hiding a fault that could black out the county. Seeds Signal Lost without forcing a collapse. **Recommended**, because it introduces the game's themes of signals, infrastructure and investigation.
- *Cold Storage* — a night guard dies in a fire at a county records warehouse. Was it insurance fraud or someone destroying evidence?
- *Block Party* — a missing teenager during a neighborhood-wide power outage; the outage was not an accident.

**Ruling.** Pending.

## G-13 Era label and software capitalization
**Question.** "Blackbox Protocol" is both the game and the contemporary era; the software is spelled "BlackBox" and "Blackbox".

**Recommended default.** In rules text call the eras **Contemporary**, **Signal Lost** and **Dead Zone**; keep "Blackbox Protocol" as the game and Core book name. Software products use **BlackBox** (BlackBox GM Command, BlackBox OS); the game uses **Blackbox**.

**Ruling.** Pending.
