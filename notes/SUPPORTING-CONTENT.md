# Supporting content: adventure seeds, vehicle format, event tables, homebrew data formats, art briefs

Status: **Approved by Jason 2026-11-25 (proceed with adventure seeds, vehicle records, event tables, homebrew data formats and artwork briefs, reusing existing record formats); content drafted as the working basis, provisional.** Everything reuses existing mechanics: Chapter 2 resolution, Section 4, F17–F26 records and the B2/C4 rules. Nothing here creates a new system. Pregenerated characters are not drafted yet: they wait for the character creation chapter.

## 1. Adventure seeds (F26 template, abbreviated)
Each seed gives premise, date and era, audience, duration, tone, entry hook, core conflict, two or more approaches, consequences and the F24 world update. Not full adventures.

| ID | Era | Seed | Premise and hook | Core conflict and approaches | Consequence |
|---|---|---|---|---|---|
| S-01 | Blackbox Protocol | The Missing Manifest | A port inspector finds container records that do not match. Hook: ORG-02 asks for quiet help. | Records vs. a smuggling ring. Approaches: audit, interviews, surveillance, negotiating with the shipper. | Port security tightens or a ring moves on. |
| S-02 | Blackbox Protocol | Ice Storm Week | A severe storm threatens Hollis Gap's only road. Hook: mountain rescue needs more hands. | Rescue and logistics under time pressure. Approaches: rescue, supply run, negotiating with the road crew. | A strong or weak showing changes trust in ORG-03. |
| S-03 | Signal Lost | The Fuel Convoy | Fenwick's hospital generator is running down. Hook: ORG-02 will move fuel if someone escorts it. | Escort, bribe, reroute or negotiate with a roadblock. | Hospital holds or drops to degraded care. |
| S-04 | Signal Lost | Shelter Ledger | Alder Crossing's shelter has more people than stock. Hook: ORG-03 coordinator asks for an audit. | Rationing disputes. Approaches: count and verify, mediate, find supplies. | Fair distribution or lasting resentment. |
| S-05 | Dead Zone | The Dam Keepers | Hollis Gap's dam crew needs a rare part. Hook: a salvage trader claims to have one. | Verify the part, bargain or build a substitute (B2). | The dam keeps running or loses capacity. |
| S-06 | Dead Zone | Winter Stores | Kestrel Bay's salting sheds fail during a bad catch. Hook: a neighbour community offers grain for fish. | Trade terms, security of the route, spoilage. | Winter hunger or a stronger trade tie. |

## 2. Vehicle record format
Vehicles are equipment (A1) with extra fields. Mass, price and capacity values come from the research layer in EQUIPMENT-CATALOGUE.md (still TBR); the gameplay layer below is fictional.
- Fields: ID, name, category, passengers, cargo mass, **speed band** (slow, ordinary, fast), terrain suitability (road, rough, off-road, water), fuel or power use (units per day of travel, tracked as uses, F20), required skill (Vehicle Operation, or Animal Husbandry for animals), repair scale (B2 project scale), harm profile for collisions (Section 4.2 environmental, die by speed band: slow D4, ordinary D6, fast D8 to D10), armor, condition (usable, degraded, unusable).
- Travel uses F19 as written: the GM declares segment speed before departure. No default speeds are approved yet, so none are given here, and no new travel rules are introduced.
- Initial vehicles are the EQ-001+ transport entries (bicycle through riding horse).

## 3. Event tables (F24, optional)
Roll a D20 or choose. Each entry lists an indicator effect (F02.07, 0–6). The GM applies it only if it fits the region's state (DESIGN-NOTES 8.1) and records the event (F24). Effects are one step unless stated.

**Blackbox Protocol era**
1 Local power outage (grid −1 for a day) · 2 Heavy storm warning · 3 Road closure for repairs · 4 Hospital capacity alert (healthcare −1) · 5 Phone or network outage (communications −1) · 6 Water main break (water −1) · 7 Contract dispute at a utility · 8 Election or council fight · 9 Factory layoff (economy −1) · 10 Rumor of a data breach · 11 Fire at a warehouse · 12 Volunteer drive · 13 Fuel price spike · 14 Freight delay (food distribution −1) · 15 Missing person report · 16 Public safety campaign · 17 Heat wave or cold snap · 18 Opportunity: a new training grant · 19 Local festival boosts trade · 20 Quiet week.

**Signal Lost**
1 Rolling blackout (grid −1) · 2 Fuel convoy delayed (transport −1) · 3 Water pressure drops (water −1) · 4 Clinic runs out of a key supply (healthcare −1) · 5 Radio net restored (communications +1) · 6 Evacuee arrival (population stability −1 locally) · 7 Looting rumor (public order −1) · 8 Shared shelter formed (population stability +1) · 9 Market opens on barter · 10 Rumor of outside aid · 11 Official orders conflict · 12 Generator breaks down · 13 Food hoarding dispute · 14 Volunteer team formed (emergency services +1) · 15 Bridge or road washed out · 16 Insurance or bank limit announced (economy −1) · 17 Neighbor town asks for help · 18 Opportunity: a depot with spare parts · 19 Quiet, tense night · 20 Short-lived return of power.

**Dead Zone**
1 Harvest comes in light (food −1) · 2 Harvest comes in strong (food +1) · 3 Water source fouled (water −1) · 4 Source repaired (water +1) · 5 Salvage find: a warehouse · 6 Trader caravan arrives (economy +1) · 7 Disease cluster (healthcare strain) · 8 Raider sighting on the road (public order −1) · 9 Settlement dispute over labor hours · 10 Tool or part failure in a key workshop · 11 New arrivals ask to join (population stability ±) · 12 Council election or leadership change · 13 Winter stores run short · 14 School or clinic opens (relevant service +1) · 15 Radio contact with another settlement (communications +1) · 16 Fire in the settlement · 17 Animal sickness · 18 Opportunity: a skilled stranger offers training · 19 Quiet season · 20 Old-world cache discovered (GM decides content).

## 4. Homebrew data formats (F27)
Package metadata (F27): ID, name, author, version, compatible rules version, dependencies, content, assets, license, conflicts, configuration. Content-type records reuse existing fields so there is one schema per type and no second rules engine. Field lists (JSON key names, in order); required fields marked *.

- **item**: id*, name*, category*, description*, massKg, unit, quantity, bulk (0–3), condition, requiredSkill, harm (low|moderate|high|extreme), rangeBands, armor (0–3, covers), priceReference, availability {bp, sl, dz}, refs.
- **occupation**: id*, name*, family*, setting, orderedSkills* (five, with points), alternatives, grants, qualification, advantage, equipment, notes. Follows the OCCUPATION-INDEX structure.
- **npc**: id*, name*, archetypeRef, attributes* (seven), skills* (name, target), harm, armor, disposition, era notes.
- **hazard**: id*, name*, harm, signs, check, mitigation.
- **anomaly**: id*, name*, category*, signs, triggers, effects, limits, discoveryRoutes* (two or more), counterplay, groundedReading*, ambiguousReading, supernaturalReading.
- **faction**: id*, purpose*, leadership, membership, assets, territory, influence, relationships, objectives, clocks, known, hidden.
- **settlement**: id*, region, population, services (rating 0–6 per service), facilities, labor, stores ref, organizations, hooks.
- **adventure**: id*, version, era, premise*, audience, duration, tone, clues (essential clues need two routes), npcs, locations, events, consequences.

Validation (from F27): resolve all references, check dependencies and conflicts, preview changes, never overwrite campaign history silently, offline import/export. Licensing text is deferred until pre-release (F13).

## 5. Artwork briefs (F29)
Rules from DESIGN-NOTES 2.9: original art only, no imitation of real agency seals or copyrighted game art, grayscale and high-contrast printable, text labels not color alone, source art provenance and license recorded.

| Book | Brief |
|---|---|
| Core Rulebook | Cover: contemporary classified-document motif with a radio-tower silhouette; fourteen occupation family emblems; chapter spot art; ten icons for conditions. |
| Quick-Start | Simplified cover; six pregen portraits; condition cards. |
| GM Handbook | Faction relationship maps; world-state tracker layout; regional maps (R1–R3). |
| Signal Lost | Emergency-broadcast look: bulletin layouts, rationing cards, convoy map. |
| Dead Zone | Weathered reconstruction look: settlement maps, workshop cards, trade ledger sheets. |
| Transition Handbook | Era-change diagrams; worked-example worksheets. |
| Equipment Compendium | Item silhouette icons by category; vehicle plates. |
| Investigation Handbook | Evidence cards, case board, suspect sheets. |
| Survival Handbook | Resource tracker, seasonal calendar, hazard icons, animal profile cards. |
| Anomaly Compendium | Twelve dossier plates, one per anomaly, ambiguity-first style (grounded reading visible, others hidden by fold or overlay). |
| Homebrew Creator's Guide | Template sheets, package diagram. |
| Zero Day | Handouts: alert log, inspection records, invoices, county map, timeline board, technician's notes. |

Each brief needs a rights record (creator, license, date) before production.
