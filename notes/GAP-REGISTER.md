# Manual drafting gap register (remaining design backlog)

Status: this is the remaining design backlog before manual production. Each item shows Jason's ruling and, where work remains, a proposal for him to approve. **Only text under an "Approved" ruling may be used by manuscript drafters.** Proposals are not rules. When an item is approved, its text moves into its owning section of [DESIGN-NOTES.md](DESIGN-NOTES.md) or the owning F-doc, and a Decision log entry is added.

Ground rules from Jason's review (2026-11-25):
- Preserve the mechanics already established in F11–F24, Sections 3–5 and R01–R06. No second difficulty system: every modifier uses the R03 universal ladder.
- No new comprehensive foundation audit. Resolve these items, then write the manuals.
- Licensing stays deferred until pre-release.
- The alternative-skill rule and "points start at level 2" question belong to the occupation review and are out of scope here.

Completion order: A (equipment and economy) → B (survival and crafting) → C1–C2 → C3–C4 → D1–D2 → E → manual production, Core Rulebook first.

| Item | Topic | Ruling | Next step |
|---|---|---|---|
| A1 | Item records | Revise (direction given) | Proposal below, awaiting approval |
| A2 | Currency and prices | Revise (direction given) | Proposal below, awaiting approval |
| A3 | SL and DZ economy | Revise (direction given) | Proposal below, awaiting approval |
| B1 | Consumption and deprivation | Revise (direction given) | Proposal below, awaiting approval |
| B2 | Crafting and construction | Revise (direction given) | Proposal below, awaiting approval |
| C1 | Era thresholds | Approved in principle | Confirm corrected numbers |
| C2 | Dead Zone timeframe | Approved as revised | Recorded in DESIGN-NOTES 8.2 |
| C3 | Collapse scenarios and canon | Develop | Three independent scenarios to draft |
| C4 | Settlements and factions | Revise (direction given) | Proposal to draft |
| D1 | Zero Day | Direction given | Premise and clue graph to draft |
| D2 | Anomalies | Direction given | Twelve concepts to draft |
| E1 | Software capitalization | Approved | Apply in manuscripts |
| E2 | Era terminology | Approved | Apply in manuscripts |
| E3 | Dice tray status | Verify | Check against the dice-tray branch and PR #1 |
| E4 | Glossary and rules index | Last | Build after A–D |

---

## A. Equipment and economy

### A1 Item records
**Jason's direction.** Keep actual weight, quantity, condition, bulk, ownership and compatibility. Bulk slots may be optional.

**Proposal (awaiting approval).** Every item definition carries the F17 fields unchanged, plus the game statistics the manuals need:
- *Identity:* stable ID, name, category, description, rules references.
- *Physical:* actual mass in kg per unit, unit and quantity, compatibility (ammunition, power, parts). Optional **bulk** 0–3 for awkward items whose difficulty to carry is not captured by mass (0 normal, 1 awkward, 2 two-handed or large, 3 needs a vehicle or team). Bulk is off by default and used only in Advanced or Simulation play; Standard uses mass against the F17 load bands.
- *Records (F17, unchanged):* instance or lot ID, owner, custodian, location, access, condition (usable / degraded / unusable), maintenance state.
- *Use:* required skill or competency, power or consumable needs, uses per unit where relevant.
- *Harm and protection (Section 4.2, unchanged):* harm profile by generic category (unarmed or improvised D4, light hand weapons D6, heavy hand weapons, bows and handguns D8, long guns D10), feasible range bands with inherent R03 difficulty per band, armor rating 0–3 and the harm types it covers. No real-world model statistics.
- *Tools:* normal difficulty assumes suitable tools. Improvised tools are a −10 situational modifier, no tools −20 or infeasible, using the R03 ladder. A good kit removes the penalty but never adds a bonus.
- *Condition effect:* degraded is a −10 situational modifier to tasks that rely on the item; unusable means it cannot provide its function. Wear events stay explicit (F17).
- *Economy:* reference price in actual currency (A2), optional price tier, availability per era (Common / Restricted / Rare / Unavailable for Blackbox Protocol, Signal Lost and Dead Zone).

### A2 Currency and prices
**Jason's direction.** Actual currency in contemporary campaigns; abstract wealth tiers only as an optional simplified mechanic. Starting wealth must come from character history, not occupation family. A physician can be bankrupt and a civilian wealthy.

**Proposal (awaiting approval).**
- *Default (contemporary):* prices and funds in actual currency. The US baseline is 2026 US dollars; campaigns elsewhere use local currency at the GM's local prices (F18 quotes, integer smallest units). The Equipment Compendium gives each item a researched reference price; the GM may override it locally.
- *Starting funds from history.* At creation, player and GM record from the character's history: liquid funds, regular income (if employed), significant assets (vehicle, home, savings), and debts or obligations. Occupation informs what is plausible, but it never sets the amount. The campaign resource tier from Section 2.6 (constrained / ordinary / well-supported) is a guide for the whole group, not a per-occupation allowance. The existing 2.6 occupational kit stays separate.
- *Optional simplified wealth (Means).* Groups that don't want to track money can give each character a **Means** rating 0–6 set from history, and give each item the matching price tier:

| Tier / Means | Label | Reference (2026 USD) |
|---:|---|---|
| 0 | Destitute / trivial | under $10 |
| 1 | Struggling / cheap | $10–50 |
| 2 | Getting by / moderate | $50–250 |
| 3 | Comfortable / expensive | $250–1,000 |
| 4 | Prosperous / major | $1,000–5,000 |
| 5 | Wealthy / asset | $5,000–50,000 |
| 6 | Rich / institutional | over $50,000 |

  An item below your Means is routine. An item at your Means can be bought about once a month without strain. An item above your Means needs savings, credit, a sale or a GM-approved arrangement. Means changes only through recorded events such as job loss, windfall or debt, not by spending small amounts. Means and actual currency are never used together for the same character.

### A3 Signal Lost and Dead Zone economy
**Jason's direction.** Keep local currencies, barter, scarcity and regional market conditions. No universal exchange values.

**Proposal (awaiting approval).**
- Every market is an F18 market record: accepted currencies and goods, and a scarcity state per item category set by the GM from local conditions: plentiful, short, scarce or unavailable.
- *Signal Lost:* currency persists where the market accepts it. Suggested ranges for the GM's local multiplier on the reference price: plentiful ×1, short ×2–5, scarce ×5–20, unavailable means no sale. Different markets in the same campaign can differ.
- *Dead Zone:* default is barter and local accounting (scrip, ledgers, labor credit), set per settlement. Barter records both legs per F18; values come from local need, with no forced equal value. As a GM aid only, the book may suggest pricing goods by how many days of food they would fetch in that market. This is a local reasoning tool, not a currency or a fixed rate.
- *Starting resources* in SL and DZ come from history and what actually survived: possessions, stores, skills that can be traded for labor, relationships and debts. There are no free replacement goods (F02.05).
- *Labor as value:* employment and labor exchange use the F18 employment record. The book gives example local rates as illustrations only.

---

## B. Survival and crafting

### B1 Consumption and deprivation
**Jason's direction.** Keep separate food and water requirements. Reconcile deprivation with the existing stamina (Section 4.3, F20), injury (4.3) and stress (4.4) mechanics.

**Proposal (awaiting approval).** Adds a shortage counter on top of F20 and expresses every effect through the existing Section 4.3 condition penalties and 4.4 pressure events. No HP loss, no new dice, no mortality timetable.
- *Demand (F20, unchanged).* 1 food and 1 water ration unit per character per day. The GM declares altered demand before the interval (for example heat or heavy exertion doubles water; cold without adequate shelter doubles food).
- *Daily review (F20, unchanged).* Each unmet category costs 5 stamina, capped at current stamina. A half ration counts as unmet for the counter below but costs only 2 stamina.
- *Shortage counter.* One counter per category: +1 for each day that category is unmet, −1 for each day it is fully met (minimum 0).

| Condition | Water counter | Food counter | Effect (4.3 scale) |
|---|---:|---:|---|
| Deprived | 2+ | 4+ | Moderate: −10 to physical tasks. No HP recovery. |
| Severely deprived | 3+ | 7+ | Severe: −20 to physical tasks and to tasks needing sustained concentration. No HP recovery. Sleep restores no stamina and does not count as adequate sleep for 4.4 stress recovery. The first time a character reaches this condition in an episode it is a moderate (10) pressure event under 4.4. |
| Critical deprivation | 5+ | 21+ | Critical: −30 or infeasible, as for a critical injury. The GM **may** declare a life-threatening condition, resolved through 4.3 instability with a recorded reason. This is the only route to death. |

- *No double counting.* Deprivation conditions are injury-type conditions for 4.3's "highest applicable penalty once" rule, so they never stack with an injury penalty on the same task. Stress band penalties stay separate, as in 4.4.
- *Recovery.* Conditions fall away as the counter drops below each threshold. Stamina, HP and stress then recover at the normal 4.3 and 4.4 rates.
- *Other supplies (replaces the four-slot prototype).* Ammunition in Standard mode is tracked as uses, with one use spent per encounter in which a ranged weapon is fired; Advanced counts individual loads. Medical supplies: one use per stabilization attempt or daily care assessment (4.3). Repair supplies: one use per repair project (B2).
- *Shelter, sanitation and energy* stay as declared conditions and feasibility limits (F20), with exposure harm under F19 and 4.2 environmental harm.

### B2 Crafting and construction
**Jason's direction.** Keep F21's labor hours, elapsed time, materials and assessment system. Use the universal R03 difficulty ladder, with no separate crafting difficulty scale. No automatic material destruction on a critical failure; consequences depend on the project and circumstances.

**Proposal (awaiting approval).** Keeps the F21 contract as written: progress = min(1, credited labor ÷ required labor), an elapsed minimum, and **one** D100 at the point of meaningful uncertain completion (no roll per hour or per interval). What this adds is the numbers a recipe needs.
- *Labor and crew by project scale* (reuses the CCDD complexity numbering, so recipes and competencies speak the same language):

| Scale | Example | Labor hours | Max workers | Required competency level |
|---:|---|---:|---:|---|
| 1 | simple mend, small preserve batch | 2 | 1 | none |
| 2 | simple tool, clothing repair | 6 | 1 | I |
| 3 | furniture, engine part field repair | 16 | 2 | II |
| 4 | forged tool, radio repair | 40 | 2 | III |
| 5 | small machine, custom part | 120 | 3 | III |
| 6 | complex device, vehicle rebuild | 400 | 4 | IV |
| 7 | precision instrument, production line | 1,200 | 6 | V |

- *Elapsed minimum* = labor hours ÷ workers actually assigned (up to the maximum), plus any curing, drying or growing wait the recipe declares. This matches the F21 worked example.
- *Stages.* A recipe of scale 5 or above may declare stages, each with its own completion check, so long projects have more than one point of uncertainty. Stages are declared before work begins.
- *Difficulty.* The GM chooses one R03 difficulty for the inherent task: standard for normal work in the lead's field, harder steps for unusual tolerances, poor workspace or time pressure. Workable but inferior substitute materials are a −10 situational modifier, declared when the substitution is validated (F21). The CCDD-20 competency modifier applies as usual. Nothing outside the R03 ladder is used.
- *Competency gate.* The required level is a prerequisite under the CCDD access rules. One level short is allowed only under supervision by someone who meets it, at a −10 situational modifier; otherwise the project is blocked (F21: a missing prerequisite blocks the start).
- *Materials.* Recipes list actual inputs and quantities. As a GM pricing aid only, materials are worth about half the item's reference price.
- *Outcomes (F21 qualitative rules, given concrete effects).* Success meets the specification. Strong or better improves one quality criterion declared before work, for example **Fine**: the item ignores its first wear event in each maintenance interval. On failure the player chooses rework (the GM declares the extra labor, by default a quarter of the project's labor hours, plus any materials that genuinely need replacing) or accepting an imperfect item (starts degraded). On critical failure the GM applies the setback declared for this project when it started, chosen to fit it: for example extra time, loss of one declared input, a degraded tool, or a flaw that shows up later. Total loss of materials, or injury, happens only when that project's declared setback says so.
- *Repairs.* Degraded to usable: a quarter of the item's making labor (minimum 1 hour) and one repair-supply use. Unusable to usable: half the making labor plus the needed parts.
- *Construction (F22).* Same contract, with size classes: Small (shed, latrine) 40 labor hours, max crew 2; Medium (cabin, workshop) 400 h, crew 6; Large (clinic, barn) 2,000 h, crew 12; Major (water system, defensive wall) 8,000+ h, crew 30. Large and Major projects use stages (for example foundation, structure, systems, finish). Elapsed minimum = labor hours ÷ (crew × hours worked per day, default 8). Completion creates a facility record, and service depends on staffing and inputs as F22 says.

---

## C. World state and canon

### C1 Era thresholds
**Ruling.** Approved in principle (2026-11-25): regional indicators inform eligibility; the GM decides; thresholds are guidance.

**Correction needed before recording.** The approved draft's numbers (mean 0–2 = Blackbox Protocol, 5–6 = Dead Zone) run backwards against the F02.07 scale, where 6 is operational and 0 is nonfunctional, and F02.07 also says not to average away local conditions. Corrected guidance with the same intent, for confirmation:
- **Signal Lost eligible** when, in the region, at least 4 of the 12 indicators are at 3 (severely degraded) or lower for 14 consecutive days, or any two of electricity, communications, water and government are at 2 or lower for 7 days.
- **Dead Zone eligible** when at least 8 indicators are at 2 (critical) or lower for 365 days and no outside restoration is expected.
- One region can be Signal Lost while another stays Blackbox Protocol. Recovery raises local indicators but never moves a campaign back an era.

### C2 Dead Zone timeframe
**Ruling.** Approved as revised (2026-11-25). Default Dead Zone is 2–15 years after onset. Adults raised during the collapse are distinct from children born after it. Recorded in DESIGN-NOTES 8.2:
- *Early (2–4 years):* most adults are transitional survivors; Refugee and Retired Specialist are natural; stores are still partly usable.
- *Mid (5–9 years):* native trades emerge among people who were teenagers or young adults at onset; scarcity settles.
- *Late (10–15 years):* adults raised during the collapse, who were children or teenagers at onset, have learned their trades entirely afterwards. Anyone born after onset is at most 15, a child or teenager, and not a default adult character. Settlements are rebuilding and old consumables are rare.
- *Beyond 15 years:* GM variant. Adult characters born after onset become possible from about 18 years.

### C3 Official collapse scenarios and canon
**Ruling.** Develop three official collapse scenarios as independent alternatives. None is the mandatory explanation for every campaign. Recurring organizations, regions and the CindrixOps decision are developed together with them.

**Next step.** Draft three scenario dossiers (onset, signs by stage, which indicators fail first, what survives, recovery hooks) for Jason to edit.

### C4 Settlements and factions
**Ruling.** Revise: integrate settlement and faction ratings with the existing resource ledgers (F17/F20), actual labor capacity (F21/F22) and persistent world time (F11/F24).

**Next step.** Proposal to draft. Any rating must be derived from ledger, capacity and clock records, not tracked as a separate parallel number.

---

## D. Original creative content

### D1 Zero Day
**Direction.** A grounded contemporary investigative thriller that teaches the system through an escalating incident: investigation, social interaction, competency use, equipment, uncertainty and optional combat. Combat is never required to finish. It may show subtle warning signs of a possible Signal Lost campaign without forcing the transition. Follows the F26 teaching sequence and F15 clue redundancy.

**Next step.** Draft premise, NPCs and clue graph for approval.

### D2 Anomalies
**Direction.** Twelve original anomalies, two in each of six categories (psychological, technological, biological, environmental, paranormal, cosmic). Each has a grounded explanation, an ambiguous interpretation and an optional supernatural explanation. Uses the F25 dossier and existing rules only.

**Next step.** Draft the twelve concepts for approval.

---

## E. Terminology and housekeeping
- **E1 Software capitalization — Approved.** "BlackBox" for all software (BlackBox GM Command, BlackBox OS, BlackBox Player Display); "Blackbox" for the game.
- **E2 Era terminology — Approved.** In rules text the contemporary era is "the Blackbox Protocol era"; "Blackbox Protocol" alone means the game.
- **E3 Dice tray — Verify** actual repository and implementation status against the dice-tray branch.
- **E4 Glossary and rules index** — complete after the remaining decisions.
