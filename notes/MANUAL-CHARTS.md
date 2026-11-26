> **Current approved rule (2026-11-26):** No global CDR eligibility gates individual competency training. CDR still awards extra concurrent slots. Any retired CDR threshold figures retained below are historical only and must not be typeset as active eligibility mechanics. Refer to DESIGN-NOTES.md and SKILL-NOTES.md for current tables.

# Manual chart register

Publication production reference; not a second rules authority. DESIGN-NOTES.md owns mechanics, SKILL-NOTES.md owns competency records. Refresh tables from authoritative sources before typesetting. Working numerical defaults require playtest. Charts below are Markdown source data and layout briefs, not final artwork.

## MC-01 Catalogue coverage (Core, Signal Lost, Dead Zone)
| Publication | New general | New occupational | New total | Cumulative total |
|---|---:|---:|---:|---:|
| Core | 200 | 150 | 350 | 350 |
| Signal Lost | 35 | 15 | 50 | 400 |
| Dead Zone | 120 | 30 | 150 | 550 |
| Total | 355 | 195 | 550 | 550 |

Visual: stacked horizontal bars by publication introduction, distinguish categories with labels/patterns, not color alone. 2750 proficiency stages.

## MC-02 Progression and proficiency (Core)
| Level | Meaning | Bonus | PCP multiplier | Incremental hour multiplier | Cumulative CDR multiplier |
|---|---|---:|---:|---:|---:|
| I | Fundamentals | 0 | 1 | 1 | 1 |
| II | Basic practical | +5 | 2 | 2 | 3 |
| III | Independent | +10 | 4 | 4 | 7 |
| IV | Advanced | +15 | 8 | 8 | 15 |
| V | Mastery | +20 | 16 | 16 | 31 |

## MC-03 Training hours by complexity (Core)
| Complexity | I | II | III | IV | V | Total |
|---|---:|---:|---:|---:|---:|---:|
| 1 | 4 | 8 | 16 | 32 | 64 | 124 |
| 2 | 8 | 16 | 32 | 64 | 128 | 248 |
| 3 | 16 | 32 | 64 | 128 | 256 | 496 |
| 4 | 40 | 80 | 160 | 320 | 640 | 1240 |
| 5 | 80 | 160 | 320 | 640 | 1280 | 2480 |
| 6 | 160 | 320 | 640 | 1280 | 2560 | 4960 |
| 7 | 320 | 640 | 1280 | 2560 | 5120 | 9920 |

Visual: stepped bars for incremental hours; distinguish cumulative total. Daily training calculator: ceil(incremental hours / allocated daily hours), excluding additional requirements; use 1,2,4,8 hours/day examples. Do not imply elapsed real-world time.

## MC-04 Complexity 4 worked example (Core)
| Level | Hours | PCP total | CDR gain | Competency CDR total | Bonus |
|---|---:|---:|---:|---:|---:|
| I | 40 | 4 | 400 | 400 | +0 |
| II | 80 | 8 | 800 | 1200 | +5 |
| III | 160 | 16 | 1600 | 2800 | +10 |
| IV | 320 | 32 | 3200 | 6000 | +15 |
| V | 640 | 64 | 6400 | 12400 | +20 |

Visual: five-step progression showing training hours and earned CDR separately. 1240 hours and 12400 CDR earned in this competency; no character-wide CDR gate applies before V. Blacksmithing example subject to actual catalogue rating verification.

## MC-05 Learning capacity by setting (Core/Transition)
| Setting | Personal creation PCP | Base slots | Maximum slots | Career retraining subset |
|---|---:|---:|---:|---:|
| Core | 10 | 2 | 8 | 1 |
| Signal Lost | 15 | 3 | 9 | 1 |
| Dead Zone | 20 | 4 | 10 | 2 |

## MC-06 Learning queue and eligibility flow (Core/GM Handbook)
Planned → check prior level, prerequisites or scoped equivalency, access, resources, supervision → locked if unmet; otherwise ready → active when slot and time available → assessment pending after hours → completed after assessment and GM approval → award CDR and recalculate capacity. Pause/resume preserves hours. Illustrative queue: 18400 CDR, Core 3 slots; complexity-4 project III 104/160 hours (65%), complexity-2 project II 24/16 is invalid; use 12/16 (75%), complexity-3 project II 8/32 (25%). Queued projects have no credit until active. Use progress bars with numeric labels. No automatic acquisition or spending.

## MC-07 Leadership transition example (Transition Handbook)
| Stage | Underlying skill | Context penalty | Effective before other modifiers |
|---|---:|---:|---:|
| Core | 75 | 0 | 75 |
| Signal Lost | 75 | -5 | 70 |
| Dead Zone | 75 | -10 | 65 |
| First adaptation milestone | 75 | -5 | 70 |
| Second adaptation milestone | 75 | 0 | 75 |

Adaptation mechanics remain subject to outstanding audit. Visual: line graph showing underlying constant and effective contextual recovery.

## MC-08 Existing design-note numerical tables
### Source table 1: Transitional Skill Deficit System — delegated extension to 1.7

| Skill | Default governing attribute | BP to SL | SL to DZ |
|---|---|---:|---:|
| Athletics | STR | 0 | 0 |
| Endurance | CON | -5 | -10 |
| Close Combat | DEX | 0 | 0 |
| Firearms | DEX | 0 | 0 |
| Archery | DEX | 0 | 0 |
| Stealth | DEX | 0 | 0 |
| Vehicle Operation | DEX | -5 | -10 |
| Search | PER | 0 | 0 |
| Surveillance | PER | -10 | -15 |
| Forensics | INT | -15 | -20 |
| Research | INT | -15 | -20 |
| Streetwise | PER | -10 | -15 |
| Electronics | INT | -10 | -15 |
| Mechanics | INT | -5 | -10 |
| Computing | INT | -15 | -25 |
| Science | INT | -10 | -15 |
| Communications | INT | -15 | -20 |
| Medicine | INT | -10 | -20 |
| Crafting | DEX | -5 | -10 |
| Construction | INT | -5 | -10 |
| Agriculture | INT | -10 | -15 |
| Animal Husbandry | INT | -5 | -10 |
| Survival | CON | -10 | -15 |
| Navigation | PER | -10 | -15 |
| Scavenging | PER | -5 | -10 |
| Resource Management | INT | -10 | -15 |
| Persuasion | PRE | 0 | 0 |
| Intimidation | PRE | 0 | 0 |
| Leadership | PRE | -5 | -10 |
| Deception | PRE | 0 | 0 |

### Source table 2: Occupational career examples — manuscript reference

| Family | Blackbox Protocol | Signal Lost | Dead Zone |
|---|---|---|---|
| Investigator | Criminal Detective | Crisis Investigator | Settlement Investigator |
| Law Enforcement | Sheriff's Deputy | Crisis Sheriff | Settlement Marshal |
| Military | Military Officer | Military Crisis Coordinator | Militia Officer |
| Medical | Physician | Triage Physician | Settlement Physician |
| Scientist | Environmental Scientist | Water Quality Scientist | Water Scientist |
| Technology Specialist | Radio Communications Specialist | Emergency Communications Technician | Signal Keeper |
| Engineer | Civil Engineer | Infrastructure Engineer | Reconstruction Engineer |
| Tradesperson | Welder | Emergency Fabricator | Fabricator |
| Outdoorsman | Wilderness Guide | Evacuation Guide | Pathfinder |
| Agriculturalist | Crop Farmer | Emergency Food Producer | Agricultural Cooperative Manager |
| Emergency Responder | Firefighter | Disaster Response Coordinator | Community Fire Warden |
| Criminal | Smuggler | Black Market Trader | Merchant |
| Academic & Researcher | Librarian | Knowledge Preservation Specialist | Knowledge Keeper |
| Civilian | Chef | Emergency Kitchen Manager | Settlement Cook |

### Source table 3: R06 Probability reference

| T | Critical success | Exceptional | Strong | Standard | Failure | Critical failure |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 1 | 0 | 0 | 0 | 98 | 1 |
| 10 | 1 | 1 | 3 | 5 | 89 | 1 |
| 20 | 1 | 3 | 6 | 10 | 79 | 1 |
| 30 | 1 | 5 | 9 | 15 | 69 | 1 |
| 40 | 1 | 7 | 12 | 20 | 59 | 1 |
| 50 | 1 | 9 | 15 | 25 | 49 | 1 |
| 60 | 1 | 11 | 18 | 30 | 39 | 1 |
| 70 | 1 | 13 | 21 | 35 | 29 | 1 |
| 80 | 1 | 15 | 24 | 40 | 19 | 1 |
| 90 | 1 | 17 | 27 | 45 | 9 | 1 |
| 99 | 1 | 18 | 30 | 50 | 0 | 1 |

### Source table 4: R06 Probability reference

| A target | B target | A wins % | B wins % | Successful tie % | Both fail % |
|---:|---:|---:|---:|---:|---:|
| 30 | 30 | 25.35 | 25.35 | 0.30 | 49.00 |
| 30 | 60 | 18.74 | 53.11 | 0.15 | 28.00 |
| 50 | 50 | 37.25 | 37.25 | 0.50 | 25.00 |
| 60 | 40 | 50.32 | 25.46 | 0.22 | 24.00 |
| 75 | 75 | 46.50 | 46.50 | 0.75 | 6.25 |
| 90 | 50 | 72.63 | 22.12 | 0.25 | 5.00 |

### Source table 5: Variables and lookup tables

| c | Classification | H(c) hours | CDR base |
|---:|---|---:|---:|
| 1 | Basic | 4 | 100 |
| 2 | Elementary | 8 | 200 |
| 3 | Intermediate | 16 | 300 |
| 4 | Technical | 40 | 400 |
| 5 | Advanced | 80 | 500 |
| 6 | Professional | 160 | 600 |
| 7 | Specialist | 320 | 700 |
| L | Meaning | Bonus B(L) | Creation multiplier M(L) | CDR multiplier Q(L) | Incremental hour multiplier |
|---:|---|---:|---:|---:|---:|
| 0 | Unlearned | 0 | 0 | 0 | — |
| 1 | Fundamentals | 0 | 1 | 1 | 1 |
| 2 | Basic practical | 5 | 2 | 3 | 2 |
| 3 | Independent | 10 | 4 | 7 | 4 |
| 4 | Advanced | 15 | 8 | 15 | 8 |
| 5 | Mastery | 20 | 16 | 31 | 16 |

### Source table 6: CDR and capacity

| Threshold inclusive | Extra slots |
|---:|---:|
| 0 | 0 |
| 10000 | 1 |
| 25000 | 2 |
| 50000 | 3 |
| 100000 | 4 |
| 200000 | 5 |
| 400000 | 6 |

### Source table 7: CDR and capacity

| Competency | c | L | CDR |
|---|---:|---:|---:|
| Patrol Procedures | 3 | III | 2100 |
| Criminal Law | 4 | III | 2800 |
| Report Writing | 2 | III | 1400 |
| Evidence Handling | 3 | II | 900 |
| Investigative Interviewing | 4 | II | 1200 |
| Criminal Investigation | 4 | II | 1200 |
| Conflict De-escalation | 3 | III | 2100 |
| Police Communications | 2 | III | 1400 |
| First Aid | 2 | II | 600 |

### Source table 8: Eligibility and prerequisite efficiency

| Criminal Investigation target | Criminal Law | Evidence Handling | Interviewing |
|---|---:|---:|---:|
| I | II | I | I |
| II | II | II | II |
| III | III | II | II |
| IV | III | III | III |
| V | IV | IV | IV |

### Source table 9: RETIRED CCDD-19 global eligibility matrix (historical only; not applicable)

| Complexity | I | II | III | IV | V |
|---|---:|---:|---:|---:|---:|
| 1 | 0 | 100 | 500 | 1500 | 3000 |
| 2 | 0 | 200 | 1000 | 3000 | 6000 |
| 3 | 0 | 500 | 2500 | 7500 | 15000 |
| 4 | 0 | 1000 | 5000 | 15000 | 30000 |
| 5 | 2500 | 5000 | 10000 | 30000 | 60000 |
| 6 | 5000 | 10000 | 25000 | 60000 | 120000 |
| 7 | 10000 | 25000 | 50000 | 120000 | 250000 |


## MC-09 Occupation reference tables
The 42 occupation/specialization tables remain in DESIGN-NOTES.md, Section 2, organized by 14 families and three settings. Use directly from source for manuals; do not reproduce obsolete specialization count rules. Skill-level tables (550) are in SKILL-NOTES.md. No separate copy here.

## MC-10 Other illustration briefs
- Core: seven attribute allocation chart (350 total, 30 baseline each, 15–80 creation limits); derived stat formula reference; D100 difficulty ladder (+30,+20,+10,0,-10,-20,-30,-40); D20 independent context distribution (15/20/50/15 percent); occupational access gate diagram; two learning trees sharing canonical IDs; career history versus qualification versus authority.
- GM Handbook: extended task progress (3/6/10), assistance (+5 each max +10), opposed check outcome flow; four campaign scales (individual/group/operational/strategic).
- Transition Handbook: forward-only optional setting timeline, regional infrastructure indicators and transition checklist (pending audit), adaptation record and training plan.
- All: distinguish proposed/unresolved charts from approved rules; use accessible grayscale-friendly labels, preserve source values and verify examples before layout.

## MC-11 Universal competency modifier (Core)
User-approved competency modifier: B(L)=5×max(0,L−1), for integer L=0–5. Level I grants no D100 bonus but retains CDR, training and prerequisite value. Each level II–V adds +5 percentage points to the same competency's total (0/5/10/15/20 for I–V). Apply only the highest relevant competency total once per check; never sum separate competencies or previous level totals, never permanently increase underlying general skill. Final possible D100 target remains capped at 99. All other learning mechanics unchanged.

| Level | Increment | Total modifier | Example underlying 60 |
|---|---:|---:|---:|
| I | 0 | 0 | 60 |
| II | +5 | +5 | 65 |
| III | +5 | +10 | 70 |
| IV | +5 | +15 | 75 |
| V | +5 | +20 | 80 |

Visual: stacked base and contextual modifier bars; label both values. No other modifiers in example.


### Section 3 reference — attributes, language and derived statistics

Authoritative working specification: DESIGN-NOTES.md Section 3. Retain 30 general skills and default governing attributes. Alternative attribute adjustment follows R03/Section 3.1; no stacking.

| Derived statistic | Formula |
|---|---|
| Health | max(1,floor((STR+CON)/10)) for living characters |
| Stamina | floor((CON+WIL)/2) |
| Psychological resilience | floor((WIL+CON)/2) |
| Initiative | floor((DEX+PER)/2) |
| Movement index | floor((STR+DEX+CON)/3) |
| Carry reference (kg) | STR×0.5 |
| Recovery index | floor((2×CON+WIL)/3) |

Movement: max(1,floor(M/5)) metres per 6-second unobstructed walking interval, zero if unable to move. Eligible stable rest: 1 HP per 24 hours if R<60, otherwise 2; injury rules govern eligibility. No free restoration on maximum increases. Health creation range 3–16; natural maximum 20. Zero HP invokes Section 4 injury resolution.

| Language modality level | Check ceiling | Incremental active hours |
|---|---:|---:|
| 0 | unavailable without aid | — |
| I | 20 | 20 |
| II | 40 | 60 |
| III | 60 | 120 |
| IV | 80 | 240 |
| V | 99 | 480 |

Language records separate from competency CDR/PCP. Use lowest required modality; routine communication needs no check. Professional interpretation requires modality 4 in both languages for independent assessment. These are provisional gameplay defaults, not empirical qualification standards.


### Section 4 reference — encounter and condition rules

DESIGN-NOTES.md Section 4 is authoritative. Six-second round; one main action, movement allowance and reaction. Opposed defense uses existing D100 resolution; ties preserve status quo. Abstract harm dice D4/D6/D8/D10, degree bonus 0/1/2/3, applicable armor 0–3; loss=max(0,die+bonus−armor). HP clamps at zero. Injury severity uses post-protection harm 1/2–3/4–6/7+ and affected-task penalties 0/−10/−20/−30. Zero HP incapacitates; instability and care follow Section 4.3. Stable eligible daily recovery 1 or 2 HP by recovery index, at most 3 with qualified care. Stamina and stress are separate records. Stress 0–100; pressure intensity 5/10/20; highest applicable threshold ceil(P/2), P, min(100,P+25), minimum1; penalties −5/−10/−20. No duplicate penalties or automatic trauma diagnosis.

Arithmetic boundary verification: 1792 harm/armor/HP combinations and 10201 resilience/stress combinations checked; 0 bound/order failures. This is arithmetic verification only, not encounter balance or clinical validation.


### Section 5 reference — creation, adaptation and advancement

DESIGN-NOTES.md Section 5 is authoritative. Origin-era creation once; personal competency budgets BP10/SL15/DZ20, no transition grants. Adaptation magnitude max(0,baseline−5×accepted relevant milestones); distinct evidence, normally eight active hours per milestone, repeatable evidence types, no surplus. BP-trained SL/DZ reference penalties are totals, not additive. SL-trained reference difference applies only with documented corresponding SL methods. General advancement: one mark per meaningful scenario or distinct 40 active practice hours, D100 above underlying grants +1D4 capped99; no duplicate time/evidence. Shared development ledger and CCDD slots; competency, language, adaptation and general practice outcomes distinct. Historical fixed specialization counts and stage bonuses superseded by CCDD-12/20. Natural100 critical failure on task checks, not an advancement failure rule. Arithmetic boundary checks: 40192 cases, 0 failures; not integrated software or playtesting.

## MC-2026-11-26 publication correction
Remove the retired CDR gate column entirely when typesetting competency examples; show level, hours, PCP, CDR award, competency CDR total and bonus. Keep CDR slot-threshold charts. Supporting prerequisites may be met by approved target-specific equivalency. Do not use historical source table 9 as an eligibility lookup.
