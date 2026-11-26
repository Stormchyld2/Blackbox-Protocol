# Blackbox Protocol — Design Notes and Decision Register
Updated 2026-11-24. Single combined working reference: the former DECISION-REGISTER.md is merged into this file. Working ideas only unless explicitly recorded as approved here (see the Decision log and the Approved/Delegated sections). Keep separate from formal rules. No third-party copyrighted source material in public repository.
Statuses: Approved, Proposed, Deferred, Research Required, Playtest Required, Superseded, Rejected. Outstanding work is listed under "Outstanding work" and CCDD-09. The approved CCDD architecture at the end supersedes conflicting earlier specialization and access rules.

## Immediate discussion: starting occupations (F08)
Fourteen main occupational families approved; roster and specialization counts remain open. Review category by category before fixing numbers. Occupations provide prior experience, not classes; later roles and skills unrestricted. Consider shared civilian occupations with setting-specific applications and crisis/post-collapse backgrounds for characters created in those settings. Distinguish occupation, specialization, qualification and current role. Do not assign skill percentages until attributes, skills and creation budgets are defined.
Historical candidate roster (60; superseded as a main occupation count, retained as background ideas):
- Investigation: police detective, private investigator, forensic scientist, intelligence analyst, investigative journalist, crime scene technician.
- Law/security: police officer, federal agent, security guard, corrections officer, attorney, security consultant.
- Military: infantry veteran, military medic, military engineer, military intelligence specialist, military communications specialist, military logistics specialist.
- Medical: physician, registered nurse, paramedic, pharmacist, veterinarian, psychologist.
- Technology: software developer, cybersecurity specialist, network administrator, electronics technician, data analyst, telecommunications technician.
- Science/education: biologist, chemist, physicist, archaeologist, historian, teacher.
- Trades: mechanic, electrician, plumber, carpenter, welder, construction worker.
- Agriculture/outdoors: farmer, rancher, park ranger, wilderness guide, commercial fisher, forestry worker.
- Civilian/commercial: chef, truck driver, business owner, retail worker, warehouse worker, accountant.
- Community/independent: clergy, social worker, emergency management specialist, firefighter, student, independent content creator.
Signal Lost candidates: relief coordinator, search and rescue specialist, infrastructure recovery technician, emergency communications operator, evacuation coordinator, disaster volunteer, supply distribution officer, field medical worker, shelter administrator, courier, utility restoration specialist, crisis negotiator, community organizer, humanitarian aid worker, field reporter.
Dead Zone candidates: homesteader, scavenger, settlement administrator, field healer, salvage technician, off-grid power technician, blacksmith, herbalist, hunter-trapper, caravan trader, radio operator, water systems specialist, preservation specialist, frontier scout, community defender. Raider may be emergent role rather than mandatory occupation. Consider overlap with core professions; no fixed count.

## Historical mechanics proposals (superseded)
D100 roll-under competency; D20 circumstance concept approved, illustrative thresholds only: 1–3 major complication, 4–7 minor, 8–17 normal, 18–20 benefit. Not every roll needs both dice. Other dice may support damage/quantities. Determine success degrees, modifiers, attributes, skills, creation and advancement math. Stress/resolve/trauma/stability/corruption are candidate concepts, not finalized statistics. World-state metrics, event clocks, resource simulation and information permissions need detailed procedures.

## Setting allocation to refine
Shared core character/dice/combat/injury/advancement/investigation/social/equipment rules. BP emphasizes modern institutions, finance, infrastructure and investigations; SL expands disruption, disaster response, migration, shortages, crisis medicine and temporary settlements; DZ expands agriculture, livestock, preservation, off-grid power, water, manufacturing, blacksmithing, construction, trade, resource depletion and reconstruction. Determine which systems belong only in expansions and which have core foundations. No duplicate mechanics. Optional zombies, anomalies and supernatural content.

## Publication ideas
Quick-Start Rules and Core Rulebook approved; proposed lengths 40–60 and 250–400 pages, not locked. Free quickstart distribution proposed, not approved. Zero Day starter adventure teaches through play; detailed sequence and group-size guidance need testing. GM Handbook, Signal Lost, Dead Zone, Equipment Compendium, Investigation Handbook, Survival Handbook, Anomaly Compendium, Homebrew Creator's Guide. Adventure types: starter, case file, operation, incident, crisis, expedition, survival scenario, campaign module, sandbox region, chronicle, scenario toolkit. Potential supplements (working names only): The Infected, First Contact, Dark Technology, Beyond the Veil, Fractured Reality, The Dying Earth, Fallout Protocol, The Shadow State, Cold Case, Cryptic Files, Homestead, New Civilization. Tagline proposal: Investigate. Endure. Adapt.
Creator guide topics: core mechanics, occupations, skills, equipment/vehicles, NPCs/adversaries, hazards, mysteries, puzzles/evidence, encounters/adventures, factions, settlements, resources/production, events, anomalies/genres, settings, rule modifications, probability/balance, playtesting, packaging/sharing.

## Software and research
Audit CindrixOps before reuse: local sharing server, mapping, dashboards, offline library, resource management, communications, local storage and related components. Candidate modules only; source compatibility not verified. GM host authoritative; phone browser OS; shared read-only display with casting/HDMI fallback; actual connectivity independent of fictional service. Test network and casting compatibility. GM suggestions via structured offline rules/templates. CindrixOps fictional adventure appearance approved as possibility, lore undecided. Research library to be indexed and verified, including CindrixOps survival research. No mandatory internet or external AI.

## Licensing and naming
Research Required: independent commercial title/trademark clearance, BRP/ORC terms if any third-party material used, original IP and community/commercial licensing. Prior Gemini naming and licensing claims unverified. Public repo: do not upload restricted copyrighted material. No license selection yet.

## Foundation roadmap
F01 Game identity and design philosophy (approved); F02 setting structure/timeline; F03 player agency/GM authority; F04 core dice; F05 difficulty/degrees of success; F06 attributes/derived stats; F07 character creation; F08 occupations (discussion brought forward); F09 skills/specializations; F10 advancement/career evolution; F11 time/action economy; F12 combat; F13 injuries/recovery; F14 psychology; F15 investigation/evidence; F16 social/reputation; F17 equipment/inventory; F18 economics/trade; F19 travel/environment; F20 survival/resources; F21 crafting/manufacturing; F22 construction/settlements; F23 factions; F24 persistent world; F25 anomalies/horror; F26 adventures/campaigns; F27 homebrew; F28 optional rules/complexity; F29 publications; F30 licensing/IP; F31 digital architecture; F32 GM Command; F33 BlackBox OS; F34 Player Display; F35 networking/sync; F36 playtesting/balance; F37 guardrails/governance.
Formal documentation still to be created separately. These notes are condensed records, not verbatim transcripts or complete rulebooks.

## Artwork and visual identity
User explicitly requires artwork throughout the game. Plan artwork alongside content development. Proposed asset scope: game and setting logos, occupation emblems and category icons, rulebook covers and chapter illustrations, pregen/NPC portraits, monsters and anomalies, equipment and vehicles, conditions, factions, evidence, maps, locations, resources, missions, software assets and printable cards. Proposed direction: contemporary investigative/classified-document aesthetic for BP; emergency broadcasts and infrastructure deterioration for SL; weathered materials, resourcefulness and reconstruction for DZ. Maintain shared visual identity. Finalize occupation rosters before producing their emblems. Exact style, asset specifications and production sequence remain proposed.

## Foundation review and standalone dice roller
- User accepts consolidated sections I, III, V and VI; section IV accepted in direction, with publication content subject to user reading and feedback. Section II remains the focus of joint mechanical design (F04–F10).
- User is having Claude reuse the Catalyst dice tray as a standalone Windows and Android dice roller, allowing tabletop play without immediately purchasing physical dice. This is an early utility, not a requirement for play or a change to tabletop-first development. Implementation status not verified; audit reuse compatibility and licensing. Physical dice remain supported.
- Fourteen occupational families approved in count, not final roster. Half governing attribute base approved; exact rounding, attributes, skill lists, dice thresholds, creation and advancement remain open.


# Decision log

2026-11-24 — Audit resolutions 1.1–1.4 and 2.1–2.6: user delegates detailed development, retains final authority; existing defaults retained except explicit audit corrections. 1.3 deferred to world/campaign sections. R01–R06 adopted as working defaults under delegation, not individually reviewed or playtested. Historical proposals do not govern. See core resolution specification below.
2026-11-25 — Gap register review: 8.2 Dead Zone default set to 2–15 years after onset with early/mid/late bands, distinguishing adults raised during the collapse from children born after it (supersedes the same-day 10–15 choice). Era thresholds approved in principle with numbers pending confirmation; software capitalization BlackBox/Blackbox and era label "Blackbox Protocol era" approved. Remaining items tracked in notes/GAP-REGISTER.md.
2026-11-25 — User approved and directed recording of gap register items A1 item records, A2 contemporary currency and optional Means, A3 Signal Lost/Dead Zone local economy, B1 deprivation counter, B2 crafting and construction numbers, and C1 era thresholds (corrected to the F02.07 scale direction; twelve indicators and 0–6 scale confirmed, closing that part of Outstanding 1.3). Text in Outstanding work 7.1–7.4 and 8.1. Numbers are provisional calibration requiring F36 playtesting.
2026-11-25 — User approved all directions in the gap register review: three independent official collapse scenarios (8.3), ledger-integrated settlements and factions (8.4), Zero Day and anomaly creative directions (10), era label and software capitalization (9.1, 9.2), dice tray verification (9.7), glossary/rules index last (9.3), completion order and licensing deferral.
2026-11-25 — User approved gap register C3 (three scenarios Cascade, Quiet Spread, Insolvency; three recurring organizations; CindrixOps as the optional infrastructure contractor name) and C4 (ledger-derived settlement and faction ratings, service units, upkeep, review intervals). Recorded in Outstanding work 8.3 and 8.4.
2026-11-25 — User approved Zero Day brief (ZERO-DAY-BRIEF.md), anomaly catalogue (ANOMALY-CATALOGUE.md), glossary and rules index (GLOSSARY-AND-RULES-INDEX.md), and the dice tray status check. The Core Rulebook manuscript in docs/manuscripts/core-rulebook is paused at outline plus chapters 1–2 and is not to be built on in this thread.
2026-11-25 — User approved the content development plan for group F: twelve NPC archetypes at three tiers (36 baseline profiles, notes/NPC-ARCHETYPES.md, no separate NPC system), a researched equipment catalogue (about 150 items, real specifications distinguished from fictional gameplay statistics), nine organization records and four faction templates, three regions and five settlements, about twenty hazards and real-world animal profiles, six pregens after the creation chapter, supporting content, and Session Zero as a recommended procedure. Canon principles await confirmation (CANON-AND-SESSION-ZERO.md).
2026-11-25 — Group F content drafted under the approved plan: NPC-ARCHETYPES.md, EQUIPMENT-CATALOGUE.md (145-item list; researched masses and prices not yet filled), ORGANIZATIONS.md, REGIONS-AND-SETTLEMENTS.md, HAZARDS-AND-ANIMALS.md, SUPPORTING-CONTENT.md, CANON-AND-SESSION-ZERO.md. Pregenerated characters, mission board content (F11) and the equipment research pass remain open. All numbers provisional; no human playtesting has occurred.
Dated decision entries formerly kept in DECISION-REGISTER.md. Detailed decisions for F01–F02, the character foundation, the occupational roster, progressive learning and delegated Sections 2.3–2.9 appear in their own sections below and are not repeated here.

## Register merge — 2026-11-24
User directed that DECISION-REGISTER.md be merged into this file, because the register had become a near-verbatim mirror of the design notes. This file is now the single design reference and decision register. This amends the F37 wording "keep decision register concise and design notes comprehensive": the Decision log section now serves as the concise register. No rules were changed by the merge.

## Cross-cutting approved directions
- D100 competency and D20 circumstances/uncertainty; optional contextual secondary roll and GM suggestions. Exact thresholds not approved.
- BlackBox GM Command, BlackBox OS (local browser served by GM host), BlackBox Player Display (shared screen). Local authoritative server, QR join, private/public/GM-only information, fictional outages separate from actual connectivity, browser display, compatible casting and HDMI extended desktop fallback. GM preview/publish, mission board, maps, evidence, bulletins. No required map creator or AI character art; occupation logos later.
- CindrixOps research for Dead Zone and reusable technology for GM/phone software; audit existing modules before reuse. CindrixOps may appear in official adventures; no mandatory fictional history.
- Investigation inspiration: unsolved case files, murder mystery parties, Hunt a Killer and cryptic puzzles; original content, multiple clue paths, player deduction.
- Historical status (superseded by consolidated authorization below): F01 complete in discussion. F02–F37 not yet completed; occupation roster/counts, skill allocations, dice formulas and advancement calculations remain open.

## Preliminary F02/F06/F08–F10 decisions — 2026-11-24
- Approved: three settings form a forward-only campaign timeline (Blackbox Protocol → Signal Lost → Dead Zone); new campaigns may start in any setting; collapse remains optional for contemporary campaigns. Reconstruction does not reverse the timeline.
- Approved: transitioning characters face meaningful deficits in skills and abilities required by unfamiliar circumstances. Prior experience is not automatically equivalent to new competencies. Dead Zone must provide broader opportunities to learn diverse survival, production and reconstruction skills. Distinguish native starting characters from transitioning survivors. Exact deficit, retraining, transfer and advancement mechanics pending.
- Approved: starting skill percentage equals half governing attribute before occupational bonuses and personal skill points. Exact rounding, attribute allocation and caps pending.
- Approved: flexible career paths, grounded professional advantages, D20 secondary circumstance system, deterioration and reconstruction as meaningful gameplay. GM tracks world state with printable tabletop trackers and eventual GM Command automation.
- User proposes separate Dead Zone starting rules and a cross-setting transition guide; working title Transition Handbook proposed, final scope/name pending.
- Fourteen main occupations requested earlier; specific roster, backgrounds, universal skill list, signature perk rules, pressure and injury mechanics remain unresolved. Return to F02 before continuing F08.

## Consolidated foundation authorization — 2026-11-24
User authorizes recommended options and supporting principles consistent with established direction, subject to review of the consolidated summary. This approves design direction, not untested mechanics.
- F02.06: Option D persistent characters with adaptive development and all 30 previously proposed principles; native/transitional paths, retained knowledge, competency deficits, transferable learning, voluntary career evolution, multiple learning methods, expanded Dead Zone competencies, optional skill degradation, manual and digital tracking.
- F02.07–10: independent regional world-state indicators, cascading deterioration and recovery; persistent calendar and flexible time scales; sustainable reconstruction; independent and forward-only transitional campaigns.
- F03: player agency, GM sovereignty, software advisory only.
- F04–10: reserved for joint development of exact dice, difficulty, attributes, creation, fourteen occupational families, skills/specializations and advancement. Prior approved decisions retained.
- F11: flexible time/action economy; track detail only when relevant.
- F12: consequential combat, firearms/melee/ranged, movement, cover, defense, nonlethal options.
- F13: contextual injury, illness, treatment, recovery, adjustable complexity.
- F14: stress, fear, fatigue, trauma, resilience, recovery; no mandatory supernatural sanity.
- F15: evidence, interviews, forensics, deduction, puzzles, case boards, multiple essential clue routes.
- F16: relationships, negotiation, reputation, authority, preserve agency.
- F17: inventory, accessibility, condition, capacity, maintenance, consumables.
- F18: currency, employment, shortages, inflation, barter, emerging economies.
- F19: travel, terrain, weather, navigation, fuel, exposure.
- F20: food, water, shelter, sanitation, agriculture, livestock, preservation, energy, sustainable resources.
- F21: tools, materials, knowledge, time, repairs, fabrication, manufacturing.
- F22: construction, settlements, infrastructure, population, labor.
- F23: factions with goals, resources, leadership, relationships, territory and influence.
- F24: persistent independent events, NPCs, infrastructure, resources, migration, factions and reconstruction.
- F25: optional original anomalies and horror; zombies supplemental only.
- F26: one-shots, cases, operations, branching, sandbox, persistent and generational campaigns.
- F27: native homebrew, preserve official sources, explicit overrides, versioned content.
- F28: independently configurable Standard/Advanced/Simulation and introductory/custom presets.
- F29: twelve initial publications only; defer expansions until completed.
- F30: original IP, verify third-party rights; commercial homebrew licensing unresolved.
- F31: offline-first local-authoritative modular software; audit CindrixOps reuse candidates.
- F32: GM Command comprehensive campaign, evidence, map, NPC, world, resource and homebrew management.
- F33: OS player browser/phone, sheets, dice, inventory, evidence, messages, missions, notes; separate fictional communications from actual connectivity.
- F34: GM-controlled shared display, maps, evidence, mission boards, bulletins, multimedia; browser display and compatible casting.
- F35: local Wi-Fi, QR join, synchronization, reconnection, permissions, no mandatory internet.
- F36: probability analysis, scenario testing, diverse groups, tabletop first, integrated digital testing later.
- F37: all twenty approved guardrails; authoritative mechanics, dependencies, research, versioning, no duplication or silent changes.
Exact procedures, numerical balance, research, software implementation and publication manuscripts remain unfinished. No new specialized publications authorized.

## Delegated Sections 1.2–1.7 — working mechanical defaults
User authorizes recommendations. Adopt derived-stat model, 30 shared skills plus learnable specialized competencies, D100 graduated resolution and difficulty, optional D20 contextual outcomes, unified creation with provisional 100 personal points/max20 per skill, competency-based advancement without traditional levels, and persistent transitional characters with genuine learning deficits. Detailed formulas, roster, thresholds, procedures and safeguards recorded in DESIGN-NOTES.md under Delegated character mechanics. Numerical defaults are provisional pending integrated balance; exact governing attribute mapping, occupation/specialization bonuses, effective bounds, training/checkpoint timing and detailed sourcebook procedures remain open. Section 2 next; do not reopen approved 14 families or Section 1.1.

## User confirmation and delegated transition deficits
User explicitly agrees with Sections 1.2–1.7 and authorizes realistic skill-specific deficits between eras. Adopt conditional application-specific adaptation penalties, not underlying skill loss or automatic cumulative era penalties. Working 30-skill matrix, governing attributes, 0 to -25 point bands, 5-point learning milestones, safeguards, example and printable/digital tracking recorded in DESIGN-NOTES.md. Values are provisional game-design defaults requiring playtest; relevant prior experience can reduce/waive them. Section 2 remaining.

## Delegated completion of character and occupational design
User explicitly delegates remaining decisions and additional recommendations without individual approval. Detailed authoritative working defaults in DESIGN-NOTES.md under "Delegated completion — Sections 2.3–2.9 and remaining character implementation defaults". Equal 100 occupational points across settings, primary 100/80/60 plus 0/1/2 secondary backgrounds at 20 each; primary distributions 30/25/20/15/10, 25/20/15/10/10, 20/15/10/10/5; secondary 10/5/5; combined occupational cap30 per skill, creation underlying85, personal100 max20 each. Family skill menus and universal allocation procedure cover all 352 roster entries; individual fixed profiles deferred to manuscript. Starting two primary specializations qualified +10, additional 1/3/5 foundational +5, no stacking. One grounded primary advantage; modest kit, actual access, campaign resource tier, no automatic ownership or replacement. Same mechanics across settings, persistent career/credentials, no reapplication of starting bonuses. Advancement one mark per skill per meaningful scenario/downtime checkpoint, D100 above underlying +1D4 cap99; attribute monthly eligible checkpoint +1 on roll above underlying, cap100; optional contextual disuse after six months. Effective possible check clamp1–99, opposed and attribute modifier clarifications, no free healing. Original family emblems and accessible shared artwork system. All delegated defaults subject to playtesting, roster remains revisable. Foundation design complete at working-reference level; Core Rulebook manuscript next. Individual profiles, price tables, movement/recovery conversions, research, artwork and playtests remain production tasks, not approval gates.

# Comprehensive foundation working notes

These notes are the source material for the twelve manuscripts, not published rules. The Decision log and the Approved/Delegated sections in this file control approval status. F01–03 and F11–37 are authorized design directions; detailed implementation proposals below are newly elaborated under delegated authority, not claims of separate user approval or tested mechanics. F04–10 initial proposals below are historical; later approved/delegated rules and audit resolutions control. Preserve earlier candidates as history rather than treating them as current rules.

## F01 — Identity and design philosophy
### F01.01 — C: Modern investigation and survival RPG (Approved)
One original classless, skill-based modern RPG: investigation, mystery, human conflict, survival and adaptation in a living world. Three environments: Blackbox Protocol (contemporary, starting 2026), Signal Lost (transition/crisis), Dead Zone (post-collapse). Zero Day is the starter adventure. Collapse is not inevitable; alternate timelines and recovery are possible. Ordinary people in extraordinary circumstances; grounded human advancement; linear, branching, sandbox, episodic, persistent, generational, one-shot and optional solo/GM-less campaigns; no mandatory party composition; character continuity across settings; meaningful failure; player-defined success; hope and reconstruction; no mandatory metaplot; relevant scales from individual to global; supernatural optional. Original mythology, not required Lovecraft lore.

## F01.02 — D: Adaptive modular realism (Approved)
Standard, Advanced and Simulation levels independently configurable per system. Realistic consequences at every level; no unnecessary routine rolls; meaningful detail; optional software automation; manual compatibility; GM override; consistent mechanics; customizable setting presets; midcampaign adjustment with data continuity; research-informed abstraction. Default presets (BP/SL/DZ): investigation A/S/S; psychology A/A/A; combat S/S/S; medical S/A/A; survival S/A/A; infrastructure S/A/A; agriculture S/S/A; settlements S/A/A; economy S/A/A; crafting S/S/A. Simulation available, not mandatory.

## F01.03 — D: Independent tabletop, digitally enhanced (Approved)
Traditional, hybrid and digital play independently viable; mix participants and physical/digital dice. No required internet, cloud, external AI, account or subscription verification. Manual procedures, printable/exportable and digital equivalents, no digital advantage, GM override, rules-authoritative automation, version compatibility and migrations; software reduces workload rather than dictating rules. Development order: foundation, core tabletop, settings, physical materials, Zero Day, playtest/refine, tabletop release candidate, digital development, integrated testing, expansion. Materials: character sheets, occupation cards/logos, GM screen, campaign/NPC worksheets, evidence cards, case folders, suspect profiles, mission/condition/equipment cards, resource/settlement/faction/world trackers, event tables, journals, homebrew worksheets, pregens and quickstart. Offline outcome interpretation distinguishes mandatory rules from optional complications, opportunities, narrative suggestions, references and proposed state changes; no silent invented rules or state changes.

## F01.04 — C: Occupation foundation with unrestricted evolution (Approved)
Occupations are starting backgrounds, not classes. Preserve starting occupation and history while allowing current/multiple roles, qualifications, specialization, education, leadership, reputation, financial/social/personal/community/knowledge growth. Identity includes attributes, skills, traits, relationships, beliefs, motivations, goals, affiliations, conditions, assets and responsibilities; not all numeric. No occupation skill locks or mandatory alignment; custom occupations/backgrounds and unemployment supported. Personal goals coexist with group goals; player controls personality and may revise beliefs, goals and affiliations. Grounded capabilities, weaknesses as roleplay not punishment; record achievements and failures. Retirement, succession and generational play; successors may inherit assets, relationships and duties, not skills. Active/inactive/retired/NPC by agreement/missing/deceased/successor states. No mandatory archetype.

## F01.05 — C: Modular genre integration (Approved)
Grounded core: crime, mystery, conspiracy, espionage, psychological/action/political thriller, disaster, survival, post-apocalypse, reconstruction, exploration, social drama, trade/economics, military fiction. Optional: psychological/cosmic/paranormal/technological/biological/environmental/folk horror, cryptids, speculative SF, dystopia. Zombies supplemental only, never inherent. Other possible supplements: extraterrestrial contact, AI catastrophe, occult, alternate dimensions, extreme climate, nuclear aftermath, advanced dystopia. Genres coexist across settings; tone independent (grounded, cinematic, gritty, suspenseful, dark, bleak, hopeful, heroic, procedural, atmospheric). Unified mechanics, no conversion; midcampaign introduction; explicit dependencies; homebrew; disabled mechanics have no effect; GM overrides lore; content boundaries; non-supernatural horror; natural tone shifts; hope/recovery; no mandatory antagonist; supplements do not invalidate campaigns; tabletop compatibility. BP emphasizes investigation/mystery; SL crisis, disaster, conspiracy and political intrigue; DZ survival, exploration, reconstruction and trade; social drama all.

## F01.06 — D: Unified modular mechanics (Approved)
Four layers: universal dice/attributes/skills/difficulty; core combat/investigation/health/advancement/social/inventory; specialized agriculture/infrastructure/manufacturing/settlements/economics/factions; optional expansions/homebrew. Presets Quick Start, Casual, Standard, Advanced, Simulation, Custom; independently adjustable. Rule format: purpose, applicability, inputs, procedure, modifiers, outcomes, example, complexity variants, GM guidance, related rules. Reuse universal mechanics; no duplication; accessible Standard; higher levels extend; independent toggles; explicit dependencies/prerequisites; essential rules need alternatives before disabling; customizable presets; avoid routine rolls and needless bookkeeping; quick references/examples; consistent terminology and conflict resolution; manual calculations; software follows tabletop; continuity on changes; disabled modules inert; clear gameplay purpose; integrate existing attributes/skills; GM fallback; versioned references; playtest complexity.

## F01.07 — D: Narrative and simulation integration (Approved)
Neither narrative nor simulation automatically prevails. Independent NPC/faction objectives and world developments, persistent consequences, failure creates opportunities, no predetermined outcomes, structured and sandbox play, relevant simulation scales. GM-directed, event-driven, time-driven and integrated progression (recommended default). Seconds through years, downtime activities, positive and negative developments. Separate objective truth, GM knowledge, individual character knowledge and public knowledge; misinformation and incomplete information supported; no automatic sharing. Respect valid rolls normally, GM final authority, adventures accommodate failure; simulation must not interrupt story unnecessarily; narrative respects world conditions unless overridden; independent player goals; optional GM-controlled offline suggestions; all manually playable.

## F01.08 — D: Progressive accessibility (Approved)
No prior RPG experience or specialized real-world knowledge required; same core for novice and expert; optional depth; progressive learning: introduction, Zero Day, independent play, expanded play, mastery/customization (not mandatory gates). Pregens/custom characters; teach through gameplay; comprehensive new-GM guidance and expert freedom. Support solo and cooperative GM-less optional rules, 1+GM, recommended 3–5+GM, larger groups with guidance; no required occupations. Short sessions to generational campaigns; adventures identify audience/difficulty and scaling. Configurable content boundaries, no mandatory graphic content, accessibility throughout; alternative puzzle routes/hints, character knowledge supplements player knowledge; consistent print/digital terminology; no disadvantage for offline/physical play; no mandatory purchases of all supplements; essential core rules; offline learning; diverse playtesters; accessibility without removing depth. Group sizes/durations and tutorial sequence require playtesting.

## F01.09 — D: Official foundation with native homebrew (Approved)
"This is their campaign in our world." Official core -> settings -> supplements -> homebrew -> campaign overrides. Official canon, official optional, campaign canon, homebrew distinct. GM can create or modify all content including monsters, NPCs, scenarios, occupations, skills, settings and rules. Complete official foundation; coexistence; no mandatory lore outcomes; preserve official sources; explicit overrides, dependencies, independent versions, conflict warnings; no programming required; templates and balance guidance; independent toggles; modify adventures; all settings and traditional tabletop; offline creation/import/export; authorship and attribution; respect third-party IP; no forced updates; reuse/share packages separately from campaign records; basic creator guidance in core, standalone Creator's Guide; consider community/commercial licensing in F30. Homebrew types cosmetic, narrative, addition, extension, modification, replacement, total conversion.

## F01.10 — D: Living game with stable foundation (Approved)
Long-term IP; stable versioned core; expansion rather than replacement; existing campaigns supported; independent rules/content versions; justified changes; backward compatibility and migration; experimental rules labeled; structured playtesting; feedback informs but does not automatically override design; documented credible research; gameplay value over realism; contributor guardrails; decision register; single authoritative mechanic; consistent terminology; multiple campaign styles; independent adventures/supplements; ongoing homebrew; tabletop before software; reuse audited technology; offline digital ecosystem; original IP; optional cross-project fictional references; no forced updates; quality and sustainability over frequency.
Quick-Start Rules and comprehensive Core Rulebook approved; same rules and transferable characters. Publication families: core/setting rules, GM/player handbooks, field manuals, case files, operations, campaigns, regional sourcebooks, scenario collections, anomaly/equipment compendiums, expansions, starter sets, creator resources, digital packs. Semantic versioning strategy; errata, clarifications, balance adjustments, optional extensions, content expansions, revisions and editions distinguished. Lifecycle: propose, research, design, review, prototype, playtest, refine, approve, publish, maintain.
Research library: investigation, forensics, psychology, medicine, law, economics, agriculture, livestock, food science, engineering, communications, emergency management, sociology, politics, weather, geography, manufacturing, survival, history, mathematics. Research informs gameplay, not professional training.

### Approved development guardrails
G01 consult existing rules; G02 no duplicate systems; G03 identify dependencies; G04 preserve approved decisions unless explicitly revised; G05 document reasoning; G06 evaluate probability/balance; G07 worked examples; G08 playtest significant changes; G09 preserve compatibility; G10 migration guidance; G11 distinguish official/optional/experimental; G12 verify research; G13 original IP and attribution; G14 tabletop independent; G15 reuse proven technology; G16 audit compatibility/security/licensing; G17 no mandatory internet; G18 consistent terminology; G19 no silent changes; G20 single authoritative mechanic.


### Practical design implications
A detective campaign can remain contemporary indefinitely; a community campaign can begin after collapse without ever playing the earlier eras. Neither requires an anomaly. A chef, mechanic or teacher can become a central character without becoming a combat specialist. The game rewards meaningful decisions rather than requiring a particular plot or party composition. Failure may cost time, access, trust or resources rather than ending a story. At every complexity level the same fictional action should have compatible consequences. Use the default subsystem presets recorded above as starting points, not hard restrictions. Physical materials and digital equivalents must expose the same actionable information. The standalone Catalyst-derived Windows/Android dice utility is an early exception to the software development sequence, not a dependency.

## F02 — Setting structure and chronology
### F02.01 — Three environments
Blackbox Protocol is the contemporary setting and system name; Signal Lost is crisis and infrastructure deterioration; Dead Zone is sustained collapse, adaptation and reconstruction. Zero Day is the contemporary starter adventure. Forward-only within a continuous campaign; independent starts in any environment; no compulsory collapse. Recovery is progress within an era, not a reversal. Proposed bridge adventure names The Catalyst Event and The Long Quiet are working ideas only and deferred beyond the twelve initial publications. A regional crisis can coexist with functioning institutions elsewhere.
### F02.02 — Official world history and canon
- Approved Option D: real-world foundation with flexible fictional canon. Default starting year 2026, recognizable real geography, maps, infrastructure, technology and historical context. GM may change the year, including earlier playable prequels or Session Zero. Fictional campaign events and organizations need not bind other campaigns.
- Confirmed separate native-start and transitional character experiences, with mechanics appropriate to the character's timeline entry and adaptation; detailed mechanics pending. User agrees to additional publications including a transition guide.
- Proposed distinction between Session Zero, playable prequel and opening adventure; prequel outcomes may carry forward into campaign history. Detailed implementation pending.
- Fifteen proposed canon principles from F02.02 retained for confirmation: flexible starting year; real history as context; distinguish fiction from fact; no mandatory ideology, political outcome or global conspiracy; GM selects official events; divergent campaign timelines; regional/national/global collapse; recurring fictional organizations that may evolve or disappear; optional fictional CindrixOps; optional supernatural explanations; original alternate histories; supplements do not invalidate campaigns; campaign history is authoritative for that campaign.

## F02.03 — Geographic scope
- Approved Option D: global framework with phased regional development; US baseline for initial core book and research, worldwide play using local geography, institutions, laws and infrastructure. International events affect domestic campaigns; international operations, intelligence and security contractor arcs, one-offs and regional supplements supported.
- Approved five map types: strategic, regional/county, community, location, settlement. Printed and offline digital support; imported maps, annotations and overlays.
- Approved twenty geographic principles: worldwide rules; US initial research; real or fictional locations; 2026 baseline; historical adjustments; geographic continuity; evolving infrastructure; climate/terrain effects; regional agriculture; uneven resources; uneven collapse; functional local communities; regional travel differences; evolving boundaries/authority; fictional regions; multiple map scales; adventure geographic requirements; public/private/GM-only information; printable maps/trackers; offline mapping.
- Firefights and armed conflict are supported across settings, particularly Signal Lost and Dead Zone; no mandatory combat-centric campaign. Lawlessness may vary regionally.
- User authorized Markdown files for approved publications. Twelve initial publication outlines created in docs/publications/ (including Zero Day and provisional Transition Handbook). These are not completed rulebooks.

## F02.04 — Collapse causes and initiating events
- Approved Option D: modular collapse framework, with official scenarios and GM-created or combined initiating events.
- All twenty principles approved: no mandatory collapse event; selectable/combinable/custom causes; contemporary campaigns need not collapse; sudden or gradual onset; independent infrastructure failures; cascading secondary disasters; regional variation; institutional response may succeed or fail; player mitigation; no automatic character knowledge; GM concealment; international consequences; recovery possible at every stage; armed conflict possible but not inevitable; variable lawlessness; functioning communities coexist with collapsed regions; optional supernatural causes; scenario assumptions and dependencies documented; printable trackers; GM Command tracking and suggestions subject to GM approval.
- Proposed supporting classifications, configuration parameters and awareness levels remain design material pending detailed implementation.
- Publication scope locked to the twelve existing initial publication files (including Zero Day). Defer specialized books and additional publication development until these twelve are completed; retain future ideas in design notes.

## F02.05 — Setting transition requirements
- Approved Option D: conditional progression with GM authorization. World conditions inform eligibility; no automatic transitions.
- All 25 principles approved: GM authorization; world-state eligibility; no mandatory dates; independent infrastructure deterioration; duration distinguishes temporary and sustained collapse; regional variation; localized disasters do not automatically transition campaigns; preserve character records and knowledge; new competencies require learning; no replacement starting gear; wealth/resources may lose value; authority may diminish; relationships and affiliations evolve; introduce mechanics as relevant; native setting creation; dedicated transitional adaptation; reconstruction never reverses timeline; manual tracking; software recommendations only; record transitions; GM may postpone; preparation through gameplay; individual/group/community transitions; Transition Handbook worked examples for both transitions.
- Twelve indicators, 0–6 scale and twelve-step transition procedure remain proposed implementation details; numerical thresholds experimental and require playtesting.


### F02.06 — Adaptation and continuity
Preserve identity, attributes, knowledge, starting occupation, qualifications, relationships, history, possessions, injuries and psychological state. Do not rename unrelated skills into new skills: digital investigation is not radio operation, and forensic analysis is not wilderness fieldcraft. Prior related experience may improve learning; unfamiliar demands create real deficits. Native Dead Zone characters have backgrounds appropriate to their upbringing; transitioning survivors have prior experience but must adapt. Neither path is inherently superior. Expanded Dead Zone competencies may be learned before collapse when opportunities exist. Careers are voluntary and multiple roles coexist; institutional authority and equipment access depend on actual conditions. Learning can occur through formal training, self-study, apprenticeship, practice, mentorship, experimentation, organized instruction and research. Characters can teach each other; NPC mentors and manuals matter. Time, tools, resources and opportunities constrain learning. Failed attempts can provide experience without guaranteeing improvement. Optional skill degradation requires explicit rules and must not erase history. Candidate competency labels: unfamiliar, familiar, practiced, proficient, expert; thresholds pending. Track training manually and eventually in GM Command and OS. Transition Handbook must provide native-versus-transitional examples and avoid forced character rebuilding.
### F02.07 — Infrastructure progression
Track electricity, communications, water, food distribution, healthcare, transportation, government, public order, economy, industrial production, population stability and emergency services independently at relevant geographic scales. Proposed 0–6 scale: nonfunctional, near failure, critical, severely degraded, disrupted, strained, operational. Track trend, last update, cause, local exceptions, dependencies, recovery projects and information visibility. Example: local power failure affects refrigeration and communications, but a clinic with independent power may remain functional. Do not automatically propagate every failure or average away local conditions. GM decides when events occur and whether mitigation works. Printable tracker and digital equivalent; no automatic setting transition. Earlier illustrative averages and thresholds remain experimental.
### F02.08 — Chronology
Maintain campaign date, elapsed time, event history, scheduled developments, deadlines, downtime and parallel activities. Use seconds/minutes for urgent scenes, hours/days for travel and recovery, weeks/months for training and production, seasons/years for reconstruction. GM-directed, event-driven, time-driven or integrated progression. Time advances when fiction warrants, not simply because players discuss a decision. Record prequel events separately from Session Zero agreements. Preserve historical snapshots and distinguish actual events from rumors.
### F02.09 — Recovery and reconstruction
Recovery can begin during Signal Lost and continue through Dead Zone. Track temporary stabilization separately from durable production and institutional recovery. Projects need people, knowledge, materials, time, maintenance and governance. Examples: restoring a water service, establishing a clinic, creating a school or reopening a market. Progress can be uneven, reversible and locally successful. Players may pursue survival, trade, humanitarian work, exploration or rebuilding without a prescribed moral alignment. No mandatory antagonist or inevitable lawlessness.
### F02.10 — Independent and transitional support
Native starts use setting-appropriate backgrounds, equipment and world conditions. Transitional play retains the character record, identifies lost services and new demands, evaluates existing competencies, introduces relevant modules, records changed resources/authority/relationships and establishes learning goals. Proposed transition checklist: date, world state, infrastructure, resources, occupational relevance, deficits, learning opportunities, relationships, enabled mechanics, objectives, history, resume play. No free replacement gear, no automatic skill conversion, no mandatory elapsed time. Transition Handbook owns the procedure; setting books reference it.

## F03 — Player agency and GM authority
Recommended model: player ownership of character choices, GM ownership of world adjudication, shared rules as predictable framework. Players declare intent and approach; GM describes known conditions, determines whether a roll is warranted, states foreseeable stakes, resolves using rules and narrates consequences. Players may decline risky actions, propose alternatives and pursue personal objectives. Social rolls influence NPC responses, not dictate player beliefs or actions. GM may override rules explicitly, record house rules and explain material changes; avoid retroactively invalidating legitimate outcomes merely to preserve a plot. Separate objective truth, GM knowledge, individual knowledge and public information. Safety boundaries, consent, accessibility and tone agreed in Session Zero; revisit as needed. Software proposes, never silently imposes narrative or state changes. Example: players refuse a mission board offer; the faction may act independently, but the adventure does not force acceptance. Deliverables: GM adjudication flow, Session Zero worksheet, campaign agreement, information visibility guidance. Dependencies F04–05, F15–16, F24, F26–28, F32–34.

## F04–F10 — Historical initial proposals (superseded by later approved/delegated mechanics)
F04: D100 roll-under competency approved; D20 contextual secondary outcomes approved, not mandatory every roll. Candidate 1–3 major complication, 4–7 minor, 8–17 normal, 18–20 benefit is illustrative. Other dice may represent damage or quantities. Reject universal escalating condition die that conflates injury, stress and unrelated complications. Distinguish primary outcome, pressure, physical condition and contextual circumstance. Software should explain mandatory outcomes and offer relevant optional GM suggestions.
F05: degrees of success, difficulty, opposed checks, assistance, retries, criticals, caps and modifiers pending. Earlier half/fifth and fixed 01–05/96–00 concepts are candidates, not adopted. Test probability and edge cases.
F06: candidate five attributes PHY, AGI, INT, PER, WIL; candidate 250-point allocation with 30–80 bounds; neither final. Approved base skill = half governing attribute before occupational/personal bonuses. Rounding, derived statistics, attribute changes and caps pending.
F07: native versus transitional creation; identity, background, occupation, skills, specializations, qualifications, relationships, goals, assets, conditions and responsibilities. Candidate point allocation, random alternative, starting gear and resources pending. No mandatory party roles or alignment.
F08: fourteen main families approved in count. Candidate roster: Investigator, Law Enforcement, Military, Medical, Scientist, Technology Specialist, Engineer, Tradesperson, Outdoorsman, Agriculturalist, Emergency Responder, Criminal, Academic & Researcher, Civilian. Not final. Earlier 60 and 25 main counts superseded. Occupational templates may include skill bonuses, tags, grounded professional advantages, equipment, resources and contacts. No automatic guaranteed success or exclusive skill locks. Example careers detective/crisis investigator/tracker; physician/triage medic/settlement medic; chef/emergency kitchen/settlement food specialist; mechanic/emergency repair/fabricator. Paths illustrative, not mandatory. Preserve starting background while current roles evolve.
F09: candidate 25 umbrella skills: PHY Athletics, Close Combat, Endurance; AGI Firearms, Archery, Stealth, Vehicle Operation; INT Forensics, Research, Electronics, Mechanics, Medicine, Science, Communications, Crafting, Construction, Agriculture; PER Search, Surveillance, Streetwise, Scavenging, Survival; WIL Persuasion, Intimidation, Leadership. Candidate tags include crops/livestock, digital/GMRS/HF, trauma/surgery, navigation/tracking, smithing/preservation, carpentry/masonry, OSINT/history, negotiation/barter and vehicle types. Earlier 16/20/24-skill drafts are alternatives, not final. Expanded Dead Zone learning required; avoid unrelated skill replacement. Candidate +15 percentage-point nonstacking tag bonus requires testing. Decide whether broad skills adequately distinguish expertise.
F10: classless advancement through use, training, education, mentoring, career evolution, leadership, relationships, reputation and community achievements. Retirement/succession/generational play; successors inherit appropriate assets and duties, not skill percentages. Advancement rates, costs, caps, experience tracking and any levels remain open. No forced level/class progression.

## F11 — Time and action economy
Use a shared campaign clock with scene, encounter, travel, downtime and project scales. Standard tracks meaningful actions and elapsed blocks; Advanced adds interruptions, concurrent work and deadlines; Simulation adds schedules and resource consumption when relevant. Proposed procedure: establish time scale, declare intent, determine duration, resolve uncertainty, advance clock, update dependent events and record consequences. Do not charge time twice for simultaneous activities. Combat turn structure, initiative and action budgets depend on F04–05 and F12. Example: research and equipment repair occur in parallel during a day, while a scheduled NPC meeting still happens. Materials: calendar, encounter tracker, downtime/project sheet. Books: Core, GM, Transition.

## F12 — Combat
Consequential, grounded conflict across all settings; no mandatory combat focus. Support melee, ranged, firearms, movement, defense, cover, retreat, surrender, nonlethal outcomes and environmental hazards at abstract game-mechanical level. Standard prioritizes clear turn order and resolution; Advanced adds situational conditions and equipment effects; Simulation adds optional detailed injury and resource accounting without requiring real-world tactical instruction. Proposed flow: establish stakes and positions, determine initiative, declare actions, resolve with shared dice, apply contextual damage/conditions, update morale and encounter state, end when conflict resolves. Avoid separate unrelated dice engines. Exact initiative, action counts, damage, armor, range and recovery pending F04–06/F13/F17. Example: a confrontation ends through surrender rather than eliminating every opponent. Deliverables encounter sheet, condition cards, equipment references; Core and GM.

## F13 — Damage, injuries and recovery
Separate physical harm, illness, exposure, fatigue and psychological pressure; do not randomly assign unrelated conditions. Standard uses accessible damage/condition abstraction; Advanced distinguishes injury severity, location and treatment; Simulation optionally tracks longer recovery, complications and care resources. Proposed flow: identify actual cause, resolve severity, record functional effects, assess available care, advance recovery time and reevaluate. Medical access changes across eras; treatment is not automatic cure. Persistent injury can affect capabilities without erasing learned skills. Exact health pools, mortality, treatment checks and recovery intervals pending. Game rules are not medical instructions. Example: an injured character can contribute through research while recovering. Materials injury record, care tracker, condition cards; Core, Survival, GM.

## F14 — Psychological mechanics
Grounded stress, fear, fatigue, trauma, resilience and recovery; no mandatory sanity loss or supernatural corruption. Separate immediate pressure from longer-term effects; avoid portraying mental illness as inevitable violence or removing player control without agreed rules. Standard uses manageable conditions; Advanced adds triggers, coping, support and recovery; Simulation optional longitudinal detail. Separate D20 pressure concept rejected by R05; use D100 and dedicated stress/resilience records; exact stress procedure pending 4.4. GM and player agree on narrative expression, with safety boundaries. Example: a stressful interview may impose a temporary concentration penalty rather than arbitrary physical injury. Materials pressure/recovery tracker; Core, GM, Anomaly.

## F15 — Investigation and evidence
Design mysteries around objective truth, clue graph, suspects, motives, timelines, locations and evidence provenance. Essential clues have multiple discovery routes; obvious evidence should not be withheld by arbitrary failed rolls. Skills reveal detail, reliability or interpretation; players perform deduction, with character knowledge and hints available. Distinguish observation, inference, rumor, misinformation and verified fact. Evidence may be private, shared or GM-only; record source, time, relevance, reliability and links. Standard clue cards and checks; Advanced chain of custody, forensic limitations and competing hypotheses; Simulation optional procedural detail. Failure can cost time or produce incomplete information without dead-ending the case. Original murder mysteries, unsolved-case-style dossiers, cryptic puzzles and case boards; no copying commercial games. Example: a witness, receipt and public record independently establish a meeting. Deliverables evidence cards, case folder, suspect sheets, timeline, clue matrix, accessible puzzle alternatives. Books Core, Investigation, Zero Day, GM.

## F16 — Social interaction and reputation
Track relationships, trust, obligations, affiliation, reputation and institutional authority separately. Reputation is contextual to people/groups/regions, not global morality. NPCs have goals and boundaries; persuasion does not guarantee impossible concessions. Standard qualitative attitudes; Advanced relationship and faction records; Simulation optional evolving networks and obligations. Resolve intent, leverage, NPC interests, uncertainty and consequences; respect player control. Authority can disappear when institutions fail while expertise remains. Example: a former officer has local trust but no automatic legal authority in a new settlement. Deliverables NPC/relationship/faction sheets; Core, GM, Transition.

## F17 — Equipment and inventory
Separate ownership, location, accessibility, condition, quantity, compatibility and availability. Standard simple carrying and consumable tracking; Advanced weight/bulk, durability, maintenance and supply; Simulation optional component and logistics accounting. Equipment changes capability only when available and usable; avoid magical replenishment at transitions. Track shared party/settlement stores without double counting. Items have stable IDs, category, description, setting availability, cost basis, requirements and rules references. Exact statistics pending balance and research. Example: a device remains owned but unusable when its power source is depleted. Deliverables inventory, equipment cards, maintenance and shared stores; Equipment, Core, Survival.

## F18 — Economics and trade
Support employment, income, conventional currency, purchasing, scarcity, inflation, barter, credit, obligations and local exchange. Standard abstract affordability and trade; Advanced quantities, regional prices and supply; Simulation production, labor, transport and market trends. Currency and wealth may lose practical value without deleting ownership records. Prices depend on location, availability and demand; no universal post-collapse exchange rate. Example: a functioning town accepts currency while a nearby isolated settlement trades supplies. GM tracks market state and consequences, not every transaction unless relevant. Deliverables market and trade ledgers; Core, Signal Lost, Dead Zone, GM.

## F19 — Travel and environment
Use strategic, regional, community, location and settlement maps. Track route, distance, terrain, weather, travel mode, access, fuel, fatigue, exposure and destination knowledge as relevant. Standard narrative travel blocks; Advanced route and supply planning; Simulation detailed weather, load and maintenance. Separate actual geography from character knowledge; changing roads and infrastructure affect access. Resolve meaningful hazards using core checks, not mandatory rolls for every mile. Example: a closed bridge adds travel time and supply consumption. Deliverables route worksheet, map annotations, travel log; Core, Survival, GM.

## F20 — Survival and resources
Cover food, water, shelter, sanitation, agriculture, livestock, preservation, energy and sustainable production. Standard simple rations/uses and conditions; Advanced quantities, spoilage, contamination, yields and seasonal needs; Simulation optional nutrition, soil, pests, labor and detailed supply balances. Candidate four-slot model water, food, ammunition and medical/repair supplies is a prototype only; do not lock its limits or deprivation intervals. Distinguish finite, renewable, recoverable, manufacturable and environmental resources. Track source, stock, consumption, production, losses and replenishment; avoid double counting with F17/F22. CindrixOps research is a starting point requiring verification. Example: stored food buys time until a garden produces, but production has seasonal delays. Gameplay abstraction, not real-world survival instruction. Deliverables resource tracker, seasonal calendar, production ledger; Survival, Signal Lost, Dead Zone.

## F21 — Crafting and manufacturing
Shared project model: desired output, knowledge, tools, materials, workspace, labor, time, uncertainty, quality and maintenance. Standard simple requirements and completion; Advanced components, substitutions and repair quality; Simulation production chains and workshop capacity. Include repairs, carpentry, textiles, preservation, blacksmithing and manufacturing as fictional game systems; no need for separate resolution engines. Failure can consume time/materials or produce imperfect output; avoid arbitrary catastrophic results. Example: a workshop repairs a farm tool using available parts, with delay if a required component is absent. Deliverables recipe/project cards and workshop ledger; Survival, Equipment, Dead Zone.

## F22 — Construction and settlements
Settlement record: location, population, leadership, housing, water, sanitation, food, energy, healthcare, workshops, storage, education, trade, labor, morale and infrastructure. Standard project and resource summaries; Advanced capacity, labor allocation and upkeep; Simulation interconnected production and population trends. Construction requires appropriate land/access, knowledge, materials, tools, labor and time. Settlement development can be cooperative, commercial or independently governed; no prescribed political outcome. Example: a clinic project improves care capacity but requires staffing and supplies after completion. Use F20/F21 resource/project records, not duplicate inventories. Deliverables settlement sheet, project queue, map, population and infrastructure tracker; Dead Zone, GM, Survival.

## F23 — Factions and organizations
Faction records include identity, purpose, leadership, membership, assets, territory, influence, relationships, objectives, current projects and known/hidden information. Standard attitudes and goals; Advanced resources, influence and event clocks; Simulation optional internal divisions and regional competition. Factions act independently but respond to player choices and world conditions; may cooperate, split, disappear or rebuild. No mandatory hostile faction. Example: two communities negotiate shared access to a service while pursuing different goals. Deliverables faction sheet, relationship map, event tracker; GM, settings.

## F24 — Persistent world simulation
Integrated default combines GM-directed, scheduled and triggered events. Track actual state, trends, dependencies, event history, NPC/faction objectives, resource changes, migration and reconstruction at relevant scales. Proposed update cycle: advance clock, identify due events, evaluate prerequisites, resolve uncertain outcomes, update affected records, present observable consequences, record history. GM approves consequential suggestions; no hidden automatic transition. Standard event list; Advanced clocks and regional indicators; Simulation optional linked resource flows. Example: a market reopens after transport improves, changing local availability. Avoid simulation of irrelevant regions and duplicate F02/F20/F23 records. Deliverables world-state dashboard/printable tracker, event queue, history; GM, Transition, settings.

## F25 — Anomalies and optional horror
Grounded core remains complete. Optional original anomalies may be psychological, technological, biological, environmental, paranormal or cosmic; GM controls truth and ambiguity. Define phenomenon, observable signs, triggers, effects, limits, discovery routes, counterplay, dependencies and tone. Standard narrative/condition effects; Advanced investigation and exposure; Simulation optional detailed tracking. No compulsory Lovecraft mythology, zombie outbreak or global conspiracy. Zombies reserved for a future optional supplement after initial twelve. Example: unexplained radio interference may have mundane or anomalous cause depending on campaign canon. Deliverables anomaly dossier, encounter/evidence cards; Anomaly, GM.

## F26 — Adventures and campaign design
Support starter, case file, operation, incident, crisis, expedition, survival scenario, campaign, sandbox, chronicle and toolkit. Adventure template: premise, setting/date, audience, duration, tone/boundaries, dependencies, briefing, locations, NPCs/factions, objectives, clues, events, obstacles, alternative approaches, consequences, scaling, handouts and continuation. No required plot outcome; distinguish essential clues from optional discoveries. Mission board offers choices, not forced quests. Zero Day teaches briefing, evidence, interviews, location investigation, secondary dice, deduction, danger, resolution and advancement; exact plot pending. Provide pregen/custom compatibility and printable/digital assets. Solo/GM-less optional future mechanics not required for initial play. Books GM, Zero Day, settings.

## F27 — Homebrew and extensibility
Five layers core, settings, supplements, homebrew, campaign overrides. Preserve official source; explicit precedence and conflict warnings; campaign canon authoritative for that campaign. Support cosmetic, narrative, additive, extension, modification, replacement and total conversion. Package metadata: ID, name, author, version, compatible rules, dependencies, content, assets, license, conflicts and configuration. No programming required for ordinary content creation. Validate references and dependencies, preview changes, enable/disable safely, export/import offline; never overwrite campaign history silently. Creator guide covers occupations, skills, equipment, NPCs, adversaries, conditions, investigations, puzzles, adventures, factions, settlements, resources, events, anomalies, settings, math, playtesting and packaging. Commercial terms pending F30. Example: GM adds a local occupation without editing official templates.

## F28 — Complexity and optional rules
Quick Start, Casual, Standard, Advanced, Simulation and Custom presets; independently configure subsystems. Higher detail extends shared core rather than replacing character records. Explicit dependencies; essential rules cannot be disabled without alternative. Disabled modules have no effects. Midcampaign changes require continuity and conversion guidance, with GM approval. Examples: injury conditions to location/severity to detailed trauma; food rations to quantities/spoilage to nutrition; agriculture harvest to yields to soil/pests; equipment condition to durability to components; investigation clue checks to reliability to procedure; settlement stocks to labor/production to infrastructure. Rule template purpose, applicability, inputs, procedure, modifiers, outcomes, worked example, variants, GM guidance, references. Test workload and accessibility. Books Core, GM, relevant specialist manuals.

## F29 — Publication structure
Initial twelve only: Quick-Start Rules (introductory playable rules); Core Rulebook (authoritative universal rules); GM Handbook (adjudication/world/campaign tools); Signal Lost (crisis); Dead Zone (native post-collapse and reconstruction); Transition Handbook (both forward bridges); Equipment Compendium (items and equipment); Investigation Handbook (cases/evidence); Survival Handbook (survival/production); Anomaly Compendium (optional threats); Homebrew Creator's Guide (creation/extension); Zero Day (starter adventure). Each manuscript draws from this combined notes and decision file, references authoritative rules instead of duplicating them. Quickstart same rules and transferable characters; candidate 40–60/250–400 page lengths and free quickstart not locked. Specialized supplements deferred. Artwork across all books: logos, occupation emblems, chapter art, portraits, evidence, maps, equipment, factions, conditions, resources, printable cards. Shared visual identity with contemporary classified, crisis bulletin and weathered reconstruction motifs as proposals. Finalize occupations before emblems. Publication acceptance requires complete procedures, examples, cross-references, editorial review, art rights and playtest.

## F30 — Licensing and IP
Original expression, terminology, mythology, adventures and artwork. BRP inspiration is not permission to copy text, art or proprietary content. Verify applicable licenses, attribution, title/trademark clearance, asset rights and distribution terms independently; Gemini claims unverified. Public repository excludes restricted copyrighted material. Track source, author, license, version, permissions and attribution for research and reused assets/code. Community and commercial homebrew policy unresolved; no ORC/CC commitment. Fictional CindrixOps appearance optional; exact lore pending. Deliverables rights register, attribution list, license review and naming clearance before release.

## F31 — Digital ecosystem architecture
Tabletop authoritative; offline-first local GM host, browser clients, modular rules/content/campaign separation. Candidate reuse CindrixOps sharing server, mapping, local storage, dashboards, library, resources, communications and research; audit before adopting, not a reskin. Separate rules engine, campaign state, permissions, content packages, UI and transport; exact stack pending audit. Version records, backups, migrations, import/export and manual fallback. No mandatory cloud, internet, external AI or accounts. Offline suggestions from structured rules/tables/templates; distinguish mandatory effects, optional suggestions and proposed changes. Standalone Catalyst dice tray Windows/Android is early utility, implementation unverified. No required map creator or AI character generator.

## F32 — BlackBox GM Command
Private GM workstation: dashboard, campaign/chronology, characters, NPCs, investigation/evidence designer, mission board, imported maps/markers/overlays, encounters, factions, world state, resources, settlements, rules/homebrew, communications, journal, content library, display controller and player connections. Workflow prepare content, preview visibility, publish selected information, resolve actions, approve state changes, log history. Track printable equivalents and export. GM can manually enter physical rolls, override with recorded reason, pause/resume, correct mistakes and restore backups. Contextual secondary outcomes relevant to action; never silently invent rules. No map creation or AI art required. Example: GM privately prepares a clue and publishes it to one player or shared display. Dependencies F31/F35 and tabletop rules.

## F33 — BlackBox OS
Player phone/browser served locally by GM host; QR join, character sheet, dice, inventory, messages, evidence, missions, maps, contacts, notes, news and status. Separate in-character phone interface from out-of-character sheet and rules access. Fictional battery/service outages affect fictional messages only, never actual character access. Player sees authorized data, can submit actions and notes, receive private clues, reconnect and resume. Manual/physical players remain equivalent. Responsive accessible interface, no external account required. Example: GM sends private evidence to one character while other players see only public bulletin. Exact UI and permissions schema pending.

## F34 — BlackBox Player Display
Read-only shared screen controlled by GM; maps, evidence, case boards, mission/quest board, news, bulletins, multimedia, encounters, environmental/settlement status, intermission and custom scenes. GM preview before publish, clear/blank display, never mirror private workstation by default. Browser display route first; compatible casting and HDMI extended desktop fallback; device compatibility testing required. No player private data unless deliberately authorized. Example: GM publishes available missions and updates board after group choice. Printable board equivalents.

## F35 — Local networking and synchronization
Local Wi-Fi host authoritative, QR join, session identity, role permissions (GM/private/public), reconnect and resync. Proposed transport WebSockets with snapshot plus ordered updates; exact implementation pending audit. Validate client requests server-side; prevent unauthorized reads and duplicate actions; handle stale clients, disconnects, host restart and backup recovery. No internet dependency; local network setup guidance and manual fallback. Test multiple phones, Windows/Android browsers, display clients, router isolation and casting. Keep fictional communication state separate from network health. Security review required before distribution.

## F36 — Playtesting and balancing
Lifecycle prototype, probability analysis, scenario tests, tabletop sessions, feedback, revision, regression, release candidate, digital parity and integration. Test novice/experienced groups, different occupations, native and transitional starts, all settings, noncombat and combat, complexity presets, failure paths, accessibility and offline use. Measure resolution time, bookkeeping, player agency, clue availability, resource pressure, advancement and unintended dominant choices. Record rules version, scenario, expected/observed outcomes, issue severity and proposed fix. No balance claims without evidence. Test physical and standalone digital dice equivalence; later GM Command/OS/display synchronization. Release criteria: complete procedures, worked examples, no unresolved critical defects, documented changes and manual fallback.

## F37 — Governance
Apply all twenty guardrails in F01.10. Consult existing mechanics before adding; identify dependencies and authoritative owner; record rationale, alternatives, probabilities, examples, tests, research, rights and migrations. Approved decisions change only explicitly; experimental proposals labeled. Version rules, content and software independently; distinguish errata, clarification, balance, optional extensions, content, revisions and editions. Candidate semantic versions 0.1 development, 0.5 prototype, 0.9 prerelease, 1.0 release, 1.0.1 errata, 1.1 compatible, 2.0 breaking are illustrative. Keep decision register concise and design notes comprehensive; manuscripts derive from both. Research index covers investigation, forensics, psychology, medicine, law, economics, agriculture, livestock, food science, engineering, communications, emergency management, sociology, politics, weather, geography, manufacturing, survival, history and mathematics. Verify credible sources; gameplay not professional training. Preserve original notes and rejected alternatives; no silent overwrites of approved direction. No new specialized publications until initial twelve complete.

## Manuscript handoff and outstanding work
For each rule, identify authoritative publication, dependencies, inputs, procedure, outputs, variants, worked example, printable tracker, digital parity and playtest criteria. F04–10 joint decisions precede numerical implementation of dependent systems. Detailed mechanics in other sections remain design requirements and proposals, not finished rules. Research, licensing, naming, CindrixOps/Catalyst audits, artwork and playtesting remain outstanding. Maintain this file as the comprehensive working reference; do not substitute a short roadmap for detailed notes.

## Approved character foundation — 2026-11-24
F06 / Section 1.1: Seven primary attributes: Strength (STR), Constitution (CON), Dexterity (DEX), Intelligence (INT), Perception (PER), Willpower (WIL), Presence (PRE). Standard creation: baseline 30 each (210 total), 140 additional customization points, final total exactly 350. Reclaim up to 15 points from each baseline at 1:1, minimum 15, maximum 80 at creation; no additional restriction on number of reduced attributes. Natural human ceiling 100; no superhuman progression. Base governing skill is half underlying governing attribute, rounded down, before occupational and personal bonuses. Temporary and permanent modifiers remain separate from underlying scores; effective attributes reflect applicable modifiers. Earned development is separate and slower than skill advancement; exact rates pending. Injuries and medical conditions do not grant creation points. Occupations do not impose mandatory attribute minimums. Same system across all three settings. Numerical balance subject to playtesting. This supersedes earlier five-attribute, 250/300-point and minimum-30/20 proposals.
F08: User approved the fourteen occupational families: Investigator, Law Enforcement, Military, Medical, Scientist, Technology Specialist, Engineer, Tradesperson, Outdoorsman, Agriculturalist, Emergency Responder, Criminal, Academic & Researcher, Civilian. Specialization mechanics and exact roster below family level remain open; do not reopen approved family roster unnecessarily.

### Allocation procedure and rationale
Start all seven at 30; spend 140 points, optionally reclaiming points from any attribute down to 15. Every reclaimed point increases the spendable pool by one. Validate each score and final sum of 350. Example STR 20, CON 25, DEX 50, INT 80, PER 70, WIL 60, PRE 45 totals 350. Lowering STR alone to 15 would make 155 points available before other adjustments. The 350 total is not 350 extra points. Earlier 250 budget would leave only 40 discretionary points at baseline; 300 would leave 90. The chosen budget supports differentiation while occupational bonuses establish professional competence. Low attributes should retain meaningful consequences even with occupational training. Descriptive bands proposed: 15–19 severely limited, 20–29 below average, 30–39 modest, 40–59 average, 60–69 above average, 70–79 exceptional, 80–89 outstanding, 90–100 exceptional human potential; labels are not mechanical modifiers. Example underlying STR 60 with permanent −10 injury modifier yields effective STR 50, without changing underlying 60. Exact modifier stacking, effective bounds, derived-stat formulas and skill-check interaction remain pending. Next: Section 1.2 derived statistics.

## Delegated character mechanics — Sections 1.2–1.7
User authorized recommended approaches. These are working mechanical defaults pending playtest, not individually reviewed or validated final formulas. Preserve Section 1.1 and approved 14 families.
### 1.2 Derived statistics [Approved — retain defaults except documented audit corrections]
Round down: Health=(STR+CON)/10; Stamina=(CON+WIL)/2; psychological resilience=(WIL+CON+PRE)/3; initiative=(DEX+PER)/2; movement rating=(STR+DEX+CON)/3; reference carrying load=STR*0.5 kg; recovery rating=(CON+WIL)/2. Separate maximum/current condition; modifiers separate from underlying attributes; recalculate affected effective capacities, without silently healing damage or restoring spent resources. Health depletion serious deterioration; no mandatory supernatural sanity. Reference load affected by terrain/duration/encumbrance; movement/recovery ratings need conversion procedures. Advanced/Simulation extend records. Validate formulas, particularly duplicate stamina/recovery and whether Presence belongs in resilience.
### 1.3 Skills [Deferred — resolve with section 8 and campaign design]
30 general skills: Athletics, Endurance, Close Combat; Firearms, Archery, Stealth, Vehicle Operation; Search, Surveillance, Forensics, Research, Streetwise; Electronics, Mechanics, Computing, Science, Communications; Medicine; Crafting, Construction, Agriculture, Animal Husbandry; Survival, Navigation, Scavenging, Resource Management; Persuasion, Intimidation, Leadership, Deception. Default governing attribute per skill to be mapped; GM may authorize alternative for specific application without changing learned rating. Base half underlying governing attribute rounded down, occupational/personal/specialization additions. Competency bands 0–19 unfamiliar,20–39 familiar,40–59 practiced,60–79 proficient,80–89 expert,90–99 master; descriptive only. Starting ceiling 85, learned ceiling 99, situational modifiers separate. Specialized competencies include blacksmithing/welding/fabrication, carpentry/masonry, crops/livestock/bees, preservation/community food, water/sanitation, off-grid power/radio, hunting/fishing/tracking/navigation, herbal knowledge/field medicine/healthcare, salvage/repair/restoration, logistics/settlement/resource distribution. Available in any era with opportunity. Professional procedures may require training, tools and prerequisites; base rating alone not sufficient. Exact competency roster, attribute mapping and bonus mechanics in Section 2.
### 1.4 Dice [Approved — historical material labeled; precedence clarified]
D100 roll <= effective skill; routine no roll, impossible no roll. Difficulty +30 very easy,+20 easy,+10 favorable,0 standard,-10 challenging,-20 difficult,-30 severe,-40 extreme. Highest applicable outcome: natural 01 critical success on possible check; <=floor(skill/5) exceptional; <=floor(skill/2) strong; <=skill standard; above failure; natural 100 critical failure. Opposed compare categories then success margins; exact tie preserves situation unless GM adjudicates. Effective bounds and opposed failure cases require explicit testing. D20 optional contextual secondary: 1–3 major complication,4–7 minor,8–17 none,18–20 favorable opportunity; does not automatically invalidate primary success. Example successful generator repair may have extra time/maintenance/discovery. GM Command explains applicable rules and suggests relevant circumstances, GM final. D4/6/8/10/12 for damage, quantities, durations and tables. Separate pressure/physical condition from circumstances.
### 1.5 Creation
Choose setting/concept, identity/age/background, allocate 350 attributes, derive statistics, choose occupation/specialization, base skills plus occupational training, personal points, advantages/competencies, relationships/motivations/responsibilities/goals, setting-appropriate equipment/finances/contacts/resources, conditions/modifiers, GM review. Provisional 100 personal points, max20 per skill from personal pool; occupational budgets pending. No alignment, mandatory party composition, future skill locks or injury point awards. History/qualifications consistent, pregens same rules, native resources era-appropriate.
### 1.6 Advancement
Competency-based, no traditional levels. Meaningful use, education, apprenticeship, self-study, mentorship, conditioning, leadership and career development. At appropriate checkpoint mark meaningful use/training; D100 above underlying skill earns 1D4 increase capped at ceiling; prevent repeated attempts from same activity, structured training separate documented opportunities. Exact checkpoint frequency, training costs, high-skill progression and attribute advancement rates pending balance. Sustained development and GM approval for attributes, slower than skills; no automatic health/attribute gain per adventure. Qualifications, business, career, leadership, retirement and succession supported; achievements not superhuman powers.
### 1.7 Transition
Retain identity, underlying attributes, skills, specializations, original occupation/history, actual surviving possessions, injuries/conditions. Current role, practical wealth, institutional authority and relationships evolve. New competencies learned, no unrelated skill swaps or arbitrary reductions. Detective retains investigation but may lack agriculture, preservation, livestock, off-grid knowledge. Track unfamiliar competencies, transferable experience, prerequisites, instructors/resources, training time/practice and demonstrated competency. Native and transitional paths same underlying mechanics, distinct backgrounds/opportunities. Transition Handbook details both forward bridges; no restart. 
### Remaining work
Section 2 specialization roster, governing attribute mapping, occupational and specialization bonuses, professional advantages, starting equipment/resources, era variants, career/qualification mechanics and artwork. Numerical defaults above require integrated balance; no claim of completed playtest. Sourcebooks develop full procedures and examples after Section 2.

## Transitional Skill Deficit System — delegated extension to 1.7
User explicitly agrees with Sections 1.2–1.7 and authorizes realistic skill-specific transition deficits. Defaults below are game-design estimates, not empirically validated penalties. All values are percentage points, conditional on unfamiliar methods and environments, not automatic era-wide skill losses. Governing attribute mapping is a delegated working recommendation.

| Skill | Default governing attribute | BP-trained unfamiliar SL | BP-trained unfamiliar DZ |
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

Deficit bands: 0 none, -5 minor, -10 moderate, -15 significant, -20 severe, -25 critical. Assess actual unfamiliarity, occupational background, relevant specialization, preparation and local conditions; reduce or waive defaults where justified. Do not change underlying attributes or learned skill. Successive era defaults do not automatically stack: reassess each specific unfamiliar application and retain relevant completed adaptation. Missing equipment/infrastructure is separate; unavailable prerequisites can make actions impossible. Avoid double-counting the same disadvantage. Native characters have no automatic transitional deficit; unfamiliar tasks still follow ordinary competency rules. Preparation before transition is allowed and valuable. A radio specialist may have no deficit when cellular service fails; a professional unfamiliar with independent radio methods may have one. Deficits to endurance or survival apply only to unfamiliar sustained work or methods, not mere era membership; fatigue/exposure handled separately. A modern agricultural specialist with relevant low-input experience may waive agriculture deficit. 
Adaptation milestones: demonstrated familiarization, relevant practical training, independent competency, and advanced/specialized training each remove 5 points per distinct qualifying milestone, capped at outstanding deficit. GM validates meaningful development, no repeated-roll farming; retain learning across eras where applicable. Removing a deficit restores existing competency, while new competencies follow advancement rules. Example Medicine 75: unfamiliar SL practice -10 gives 65; unfamiliar DZ practice -20 gives 55 (not -30); two relevant milestones give 65; full adaptation restores 75, but unavailable facilities still constrain actions. 
Printable and digital adaptation records: skill, underlying percentage, application/context, deficit, reason, relevant experience/specialization, training requirements, completed milestones, remaining deficit, effective competency. Transition Handbook owns full procedure; Core explains modifiers and references it; GM Command recommends context-specific adjustments subject to GM approval. Numerical defaults require scenario playtests; exact training duration and prerequisites developed with occupation and sourcebook procedures. 

### Approved manuscript example — Leadership across transitions
User requests this example in the manual to explain adaptation. Include in Transition Handbook and reference or summarize in Core Rulebook. A leader with underlying Leadership 75% manages employees, established policies, reliable communications and institutional authority in Blackbox Protocol. Signal Lost introduces displaced people, emergency decisions, disrupted communications, deteriorating authority and shortages: unfamiliar application incurs -5, effective 70%. Dead Zone introduces settlement governance, new policies, independent communications, earned legitimacy, sustainable resource allocation and reconstruction: unfamiliar application incurs -10, effective 65%, not 60% (defaults do not stack). One qualifying adaptation milestone removes 5 points, effective 70%; a second restores 75%. Underlying skill remains 75% throughout. Relevant prior emergency/community leadership experience may reduce or waive deficits; actual missing resources remain separate constraints. Adaptation restores existing competency under new conditions; advancement can subsequently raise underlying skill above 75%. This illustrates why preparation and learning matter without erasing experience. Values remain subject to playtesting.

## Occupational learning — approved direction and proposed training procedure
User likes prior learning recommendations and requires declared new learning objectives at transitions. Adopt working native allowances BP/SL/DZ: primary occupation 1 each, additional backgrounds 0/1/2 (limited cross-training, not full occupation packages), primary specializations 2 each, additional 1/3/5, totals 3/5/7; personal points 100 and attributes 350 unchanged. Concurrent specialization tracks 2/3/4, occupational retraining 1/1/2, GM adjusts for actual downtime; no lifetime cap. Specialization stages familiarization +0, foundational +5, qualified +10, advanced +15 percentage points on relevant tasks only, no overlapping bonus stacking; credentials separate. No free transition knowledge. Related experience, manuals, mentors, practice and prerequisites matter; suspend/resume, optional disuse deterioration Advanced/Simulation, no duplicate rewards for adaptation and advancement. Chef example: culinary arts/food safety/kitchen management, then mass feeding/preservation, then crop production/sustainable cooking; actual learning required. 
Proposed for review: mandatory Character Development Plan at transitions, declaring skills/specializations, deficit recovery, occupation goals, resources/instructors, equipment, estimated time and progress. Declare before structured credit; incidental meaningful experience still qualifies for normal advancement. Use in-world active learning time rather than session count. Indicative ranges: familiarization 2–8h, basic practical 10–40h, intermediate 40–120h, technical 120–400h, skilled occupational 400–2000+h, advanced professional multiple years. Not guarantees; seasonal experience, supervised practice and qualifications may be required. Standard milestones/approximate time; Advanced hours/resources/instruction/assessment; Simulation detailed schedules/prerequisites/materials/supervision. Require knowledge, practice and demonstration; failed assessment retains progress. Shared finite time budget across tracks and other responsibilities. Example illustrative targets food preservation 40h, gardening 120h, independent radio 40h, blacksmithing fundamentals 200h. Printable plan and GM Command/OS tracking, GM approval. Exact ranges, specialization budgets and assessment rules provisional, not empirically validated or playtested. User has not yet explicitly approved new time procedure.

## Approved Progressive Learning and Competency System
User explicitly approves all preceding occupational learning, declared development plans, training time, session review and progressive competency recommendations. This supersedes their pending-review status; numerical values remain subject to playtesting.
Native starting allowances BP/SL/DZ: one primary occupation each, additional backgrounds 0/1/2 (limited cross-training), two primary specializations each plus 1/3/5 additional, totals 3/5/7. Attributes 350 and personal skill points 100 unchanged. Concurrent specialization tracks 2/3/4 and occupational retraining tracks 1/1/2; GM may adjust for downtime. Unlimited lifetime learning. No free competencies on transition.
At transition require Character Development Plan: declared new skills/specializations, deficits to overcome, occupations pursued, instructors/manuals/resources, equipment/materials, estimated training time and progress. Declare before structured training credit; incidental meaningful experience may qualify for normal advancement. Objectives may change; suspend/resume with progress retained.
Use actual in-world active training time, not real-world time or fixed session counts. Indicative ranges: familiarization 2–8 hours, basic practical 10–40, intermediate 40–120, technical 120–400, skilled occupation 400–2,000+, advanced profession multiple years. Seasonal experience, supervision, qualifications and prerequisites may apply. Standard tracks milestones and approximate time; Advanced tracks hours/resources/instruction/assessment; Simulation tracks detailed schedules/materials/prerequisites/supervision/credentials. Shared finite time budget; no double counting unrelated training hours. Related experience can reduce requirements; manuals, mentors and practical experience matter. Knowledge, practice and demonstration required; failed assessment retains progress. GM may assess via appropriate check or documented performance. Complex/dangerous procedures may require completed training or supervision.
Progressive specialization milestones: 0–24% training familiarization +0; 25–99% foundational +5 once demonstrated; 100% qualified +10 once assessed; additional advanced training +15. Bonuses are percentage points on relevant tasks only, overlapping specialization bonuses do not stack, credentials separate. Partial competency usable when appropriate. Two-week example: session 1 declaration +0, session 2 after first in-world training week (50%) +5, session 3 after second week (100%) +10 following assessment. Real-world weekly sessions alone confer nothing; GM authorizes elapsed downtime and actual training. One session may cover hours or months.
Leadership example: underlying 75, DZ deficit -10, effective 65; after first qualifying week/milestone deficit -5 effective 70; after second qualifying week/milestone deficit 0 effective 75. Underlying unchanged. Adaptation and new learning may occur together when justified, no duplicate rewards. Optional disuse deterioration Advanced/Simulation. No requirement to abandon original profession.
Session-end (or next session opening) review: confirm completed training, update progress, approve assessments, reduce deficits, declare new objectives. Printable Character Development Plan and GM Command/BlackBox OS declaration, progress submission and GM approval. Example four DZ tracks: food preservation 30/40h, gardening 40/120h, independent radio 12/40h, blacksmithing fundamentals 25/200h; illustrative targets only. Chef career example: initial culinary arts, food safety, kitchen management; then mass feeding and preservation; then crop production and sustainable cooking, with actual learning required. Seven is native starting allowance, not lifetime ceiling.
All numerical thresholds and time estimates are working gameplay defaults, not validated professional standards. Occupational bonus budgets and exact assessments remain to be balanced.

## Section 2.2 — Provisionally approved occupational roster

User approved roster for now, explicitly reserving later revision. Three layers: family, occupation, specialization. Setting placement is recommended starting availability, not exclusivity. Anomaly Researcher only relevant with enabled anomalous content. Criminal status varies by jurisdiction and does not dictate morality.

### Investigator


#### Blackbox Protocol

| Occupation | Specializations |
|---|---|
| Private Investigator | Missing persons, surveillance, background investigations |
| Criminal Detective | Homicide, organized crime, cold cases |
| Intelligence Analyst | Threat assessment, intelligence research, information analysis |
| Forensic Investigator | Crime scene examination, evidence recovery, reconstruction |
| Investigative Journalist | Corporate investigations, public records, source development |
| Fraud Investigator | Financial crimes, insurance fraud, document analysis |
| Corporate Investigator | Internal investigations, misconduct, corporate intelligence |


#### Signal Lost

| Occupation | Specializations |
|---|---|
| Crisis Investigator | Missing persons, disaster investigations, incident reconstruction |
| Intelligence Coordinator | Information verification, regional intelligence, threat assessment |
| Independent Correspondent | Crisis reporting, eyewitness interviews, documentation |
| Supply Investigator | Theft investigations, inventory discrepancies, resource accountability |
| Missing Persons Specialist | Displacement records, witness interviews, search coordination |


#### Dead Zone

| Occupation | Specializations |
|---|---|
| Settlement Investigator | Criminal investigations, dispute investigation, evidence analysis |
| Independent Investigator | Missing persons, regional mysteries, witness interviews |
| Intelligence Gatherer | Regional information, faction assessment, information verification |
| Historical Investigator | Abandoned records, historical mysteries, artifact identification |
| Community Chronicler | Oral histories, event documentation, regional reporting |


### Law Enforcement


#### Blackbox Protocol

| Occupation | Specializations |
|---|---|
| Police Officer | Patrol, traffic enforcement, community policing |
| Sheriff's Deputy | Rural policing, county operations, court security |
| Federal Agent | Criminal investigations, federal enforcement, intelligence liaison |
| Tactical Police Officer | Crisis response, high-risk incident management, protective operations |
| Corrections Officer | Facility security, inmate management, conflict resolution |
| Conservation Officer | Wildlife enforcement, wilderness patrol, environmental law |
| Probation Officer | Case management, rehabilitation, community supervision |


#### Signal Lost

| Occupation | Specializations |
|---|---|
| Crisis Sheriff | Emergency law enforcement, rural security, community coordination |
| Emergency Peace Officer | Public order, conflict resolution, emergency response |
| Protective Services Officer | Facility protection, civilian protection, evacuation security |
| Community Patrol Officer | Neighborhood safety, incident reporting, dispute intervention |
| Detention Officer | Temporary detention, facility management, detainee welfare |


#### Dead Zone

| Occupation | Specializations |
|---|---|
| Settlement Marshal | Local law enforcement, investigations, public order |
| Community Constable | Community patrol, dispute resolution, public safety |
| Regional Peacekeeper | Intersettlement disputes, regional law, mediation |
| Settlement Warden | Facility management, access control, community safety |
| Frontier Law Officer | Rural justice, wilderness law, regional investigations |


### Military


#### Blackbox Protocol

| Occupation | Specializations |
|---|---|
| Infantry Service Member | Fieldcraft, military operations, unit coordination |
| Military Officer | Leadership, operational planning, administration |
| Special Operations Veteran | Specialized field operations, reconnaissance, adaptability |
| Military Intelligence Specialist | Intelligence analysis, reconnaissance reporting, information assessment |
| Military Engineer | Infrastructure, field engineering, construction |
| Military Communications Specialist | Radio systems, communications maintenance, network coordination |
| Military Logistics Specialist | Supply management, transportation, equipment accountability |
| Military Medic | Emergency medicine, casualty care, medical coordination |
| Military Aviation Specialist | Aviation operations, aircraft systems, aircrew coordination |


#### Signal Lost

| Occupation | Specializations |
|---|---|
| National Guard Service Member | Disaster response, logistics, civilian assistance |
| Military Crisis Coordinator | Emergency planning, personnel management, interagency coordination |
| Independent Security Contractor | Protective services, risk assessment, security coordination |
| Military Support Specialist | Equipment maintenance, emergency logistics, infrastructure support |
| Civil Defense Coordinator | Community protection, evacuation planning, emergency organization |


#### Dead Zone

| Occupation | Specializations |
|---|---|
| Community Defender | Settlement protection, readiness, community organization |
| Militia Officer | Personnel leadership, training, organizational management |
| Frontier Scout | Observation, wilderness travel, regional reconnaissance |
| Independent Mercenary | Contract security, protective services, field operations |
| Defense Logistics Specialist | Equipment accountability, supply coordination, maintenance |
| Veteran Instructor | Training, discipline, leadership development |


### Medical


#### Blackbox Protocol

| Occupation | Specializations |
|---|---|
| Physician | General practice, internal medicine, infectious disease |
| Surgeon | General surgery, trauma surgery, orthopedic surgery |
| Nurse | Emergency care, intensive care, community nursing |
| Paramedic | Emergency treatment, patient assessment, medical transport |
| Pharmacist | Pharmacology, medication management, pharmaceutical preparation |
| Psychologist | Trauma, behavioral assessment, counseling |
| Psychiatrist | Mental health treatment, psychiatric assessment, medication management |
| Medical Examiner | Pathology, postmortem examination, forensic medicine |
| Dentist | Dental treatment, oral health, dental surgery |
| Veterinary Physician | Companion animals, livestock, animal surgery |
| Medical Laboratory Technician | Diagnostics, specimen analysis, laboratory procedures |


#### Signal Lost

| Occupation | Specializations |
|---|---|
| Field Medic | Emergency care, patient stabilization, medical transport |
| Triage Physician | Casualty assessment, emergency medicine, resource allocation |
| Emergency Nurse | Crisis healthcare, infection control, patient management |
| Mobile Healthcare Provider | Community medicine, remote treatment, basic diagnostics |
| Crisis Counselor | Psychological trauma, grief support, crisis intervention |
| Public Health Specialist | Disease prevention, sanitation, outbreak monitoring |
| Emergency Pharmacist | Medication inventory, pharmaceutical knowledge, supply management |


#### Dead Zone

| Occupation | Specializations |
|---|---|
| Settlement Physician | Community healthcare, diagnosis, preventive medicine |
| Frontier Medic | Remote medicine, emergency care, patient stabilization |
| Settlement Nurse | Patient care, hygiene, recovery support |
| Midwife | Maternal care, childbirth support, newborn care |
| Apothecary | Medicinal plant identification, pharmaceutical knowledge, preparation safety |
| Community Mental Health Practitioner | Trauma recovery, counseling, psychological support |
| Community Dentist | Oral healthcare, dental assessment, preventive care |
| Livestock Healthcare Practitioner | Animal health, livestock disease, veterinary care |
| Sanitation Specialist | Public hygiene, disease prevention, sanitation systems |


### Scientist


#### Blackbox Protocol

| Occupation | Specializations |
|---|---|
| Biologist | Ecology, microbiology, zoology |
| Chemist | Analytical chemistry, materials chemistry, environmental chemistry |
| Physicist | Applied physics, energy systems, instrumentation |
| Geologist | Geology, mineralogy, geological hazards |
| Environmental Scientist | Pollution, ecosystems, environmental monitoring |
| Meteorologist | Weather forecasting, atmospheric science, climate analysis |
| Epidemiologist | Disease patterns, population health, outbreak research |
| Botanist | Plant identification, plant ecology, plant biology |
| Food Scientist | Food safety, preservation science, food production |
| Laboratory Scientist | Laboratory analysis, experimentation, instrumentation |


#### Signal Lost

| Occupation | Specializations |
|---|---|
| Disaster Scientist | Hazard assessment, environmental monitoring, crisis analysis |
| Water Quality Scientist | Water testing, contamination assessment, environmental health |
| Emergency Epidemiologist | Disease surveillance, outbreak analysis, public health research |
| Applied Agricultural Scientist | Crop adaptation, soil analysis, food security |
| Environmental Hazard Specialist | Pollution assessment, environmental changes, contamination monitoring |
| Independent Research Scientist | Field research, improvised laboratory work, documentation |


#### Dead Zone

| Occupation | Specializations |
|---|---|
| Applied Scientist | Practical experimentation, materials analysis, problem-solving |
| Naturalist | Plant identification, wildlife, ecology |
| Agricultural Scientist | Soil fertility, crop improvement, plant disease |
| Water Scientist | Water quality, watershed assessment, environmental monitoring |
| Weather Observer | Local forecasting, weather records, seasonal patterns |
| Settlement Researcher | Applied research, knowledge preservation, technological development |
| Anomaly Researcher | Unexplained phenomena, evidence documentation, scientific assessment |


### Technology Specialist


#### Blackbox Protocol

| Occupation | Specializations |
|---|---|
| Software Developer | Application development, systems programming, databases |
| IT Administrator | Systems administration, network management, technical support |
| Cybersecurity Analyst | Security assessment, digital forensics, incident response |
| Telecommunications Technician | Cellular networks, fiber systems, communications infrastructure |
| Electronics Technician | Circuit diagnosis, equipment repair, electronic systems |
| Radio Communications Specialist | Radio operation, antennas, communications equipment |
| Digital Intelligence Specialist | Open-source intelligence, digital research, information verification |
| Automation Technician | Industrial controls, sensors, automated systems |


#### Signal Lost

| Occupation | Specializations |
|---|---|
| Emergency Communications Technician | Independent radio, emergency networks, equipment maintenance |
| Offline Systems Administrator | Local servers, offline information systems, data preservation |
| Grid Communications Technician | Infrastructure communications, fault diagnosis, restoration support |
| Independent Broadcaster | Emergency bulletins, radio broadcasting, information distribution |
| Electronics Recovery Technician | Equipment diagnosis, component recovery, repairs |
| Emergency Information Specialist | Information verification, local networks, digital archives |


#### Dead Zone

| Occupation | Specializations |
|---|---|
| Signal Keeper | Radio networks, equipment maintenance, regional communications |
| Electronics Tinkerer | Component recovery, circuit repair, equipment restoration |
| Knowledge Systems Technician | Offline libraries, local servers, data preservation |
| Instrument Technician | Measurement devices, sensors, calibration |
| Technology Restoration Specialist | Legacy equipment, technological recovery, system restoration |
| Settlement Broadcaster | Community bulletins, regional communications, public information |


### Engineer


#### Blackbox Protocol

| Occupation | Specializations |
|---|---|
| Civil Engineer | Roads, bridges, public infrastructure |
| Mechanical Engineer | Machinery, mechanical systems, equipment design |
| Electrical Engineer | Power distribution, electrical systems, energy generation |
| Structural Engineer | Buildings, structural analysis, load-bearing systems |
| Chemical Engineer | Industrial processes, materials processing, chemical systems |
| Environmental Engineer | Water systems, wastewater, environmental infrastructure |
| Industrial Engineer | Manufacturing, production systems, process efficiency |
| Energy Engineer | Renewable energy, energy storage, power systems |


#### Signal Lost

| Occupation | Specializations |
|---|---|
| Infrastructure Engineer | Utility restoration, infrastructure assessment, emergency repairs |
| Emergency Power Engineer | Backup power, independent energy systems, electrical distribution |
| Water Systems Engineer | Emergency water supply, pumping systems, wastewater |
| Structural Assessment Engineer | Damaged buildings, structural safety, emergency construction |
| Emergency Manufacturing Engineer | Production adaptation, equipment restoration, material efficiency |
| Transportation Infrastructure Engineer | Road restoration, bridge assessment, transportation networks |


#### Dead Zone

| Occupation | Specializations |
|---|---|
| Reconstruction Engineer | Infrastructure rebuilding, construction planning, community development |
| Off-Grid Energy Engineer | Solar, wind, hydroelectric and mechanical power |
| Hydraulic Engineer | Water distribution, irrigation, pumping systems |
| Settlement Engineer | Housing, workshops, community infrastructure |
| Mechanical Systems Engineer | Machinery restoration, mechanical power, equipment development |
| Industrial Restoration Engineer | Manufacturing recovery, production facilities, technological reconstruction |


### Tradesperson


#### Blackbox Protocol

| Occupation | Specializations |
|---|---|
| Carpenter | Framing, cabinetry, finish carpentry |
| Electrician | Residential, commercial, industrial electrical work |
| Plumber | Water supply, drainage, pipe systems |
| Automotive Mechanic | Gasoline engines, diesel engines, vehicle diagnostics |
| Heavy Equipment Mechanic | Agricultural machinery, construction equipment, industrial machinery |
| Welder | Metal joining, fabrication, structural repair |
| Machinist | Precision machining, tooling, mechanical components |
| Mason | Brickwork, stonework, concrete |
| HVAC Technician | Heating, ventilation, refrigeration |
| Blacksmith | Forging, toolmaking, decorative metalwork |
| Locksmith | Mechanical locks, installation, maintenance |
| Tailor | Garment construction, textile repair, alterations |
| Leatherworker | Leather goods, harnesses, leather repair |
| Woodworker | Furniture, hand tools, wood products |


#### Signal Lost

| Occupation | Specializations |
|---|---|
| Emergency Repair Technician | Equipment repairs, improvised maintenance, diagnostics |
| Generator Mechanic | Generator servicing, engine repair, power equipment |
| Emergency Carpenter | Shelter construction, structural repairs, temporary facilities |
| Utility Technician | Electrical repairs, water systems, infrastructure maintenance |
| Salvage Mechanic | Component recovery, equipment restoration, mechanical repairs |
| Emergency Fabricator | Replacement components, metal repairs, equipment adaptation |
| Textile Repair Specialist | Clothing repair, protective garments, equipment repair |


#### Dead Zone

| Occupation | Specializations |
|---|---|
| Blacksmith | Toolmaking, agricultural implements, forge operation |
| Carpenter | Housing, furniture, timber construction |
| Mason | Stone construction, brickmaking, masonry repair |
| Fabricator | Metalworking, replacement components, equipment restoration |
| Millwright | Mills, mechanical power, machinery installation |
| Cooper | Wooden containers, barrels, storage vessels |
| Potter | Ceramics, kilns, household vessels |
| Leatherworker | Footwear, harnesses, equipment |
| Weaver | Textile production, spinning, fabric repair |
| Wheelwright | Wheels, carts, wooden transportation equipment |
| General Mechanic | Engines, machinery, mechanical repair |
| Handyman | General construction, household repair, equipment maintenance |
| Toolmaker | Hand tools, precision tools, tool restoration |
| Glassworker | Glass production, repair, household glassware |


### Outdoorsman


#### Blackbox Protocol

| Occupation | Specializations |
|---|---|
| Wilderness Guide | Navigation, expedition planning, wilderness safety |
| Hunter | Wildlife knowledge, tracking, game processing |
| Fisherman | Freshwater fishing, commercial fishing, equipment maintenance |
| Trapper | Wildlife management, tracking, fur processing |
| Park Ranger | Wilderness management, conservation, public assistance |
| Forestry Worker | Timber management, woodland ecology, forestry equipment |
| Outdoor Survival Instructor | Shelter, navigation, wilderness preparedness |
| Expedition Specialist | Remote travel, environmental assessment, expedition logistics |


#### Signal Lost

| Occupation | Specializations |
|---|---|
| Wilderness Scout | Route assessment, navigation, remote travel |
| Search and Rescue Guide | Wilderness searches, tracking, rescue coordination |
| Emergency Forager | Plant identification, seasonal resources, safe collection |
| Evacuation Guide | Remote routes, group travel, wilderness safety |
| Remote Camp Specialist | Shelter, camp management, resource planning |


#### Dead Zone

| Occupation | Specializations |
|---|---|
| Hunter | Tracking, wildlife knowledge, game processing |
| Trapper | Wildlife resources, fur preparation, wilderness living |
| Forager | Edible plants, medicinal plant identification, seasonal resources |
| Pathfinder | Navigation, terrain assessment, regional travel |
| Wilderness Guide | Expedition leadership, shelter, remote survival |
| Fisherman | Fishing, aquatic resources, equipment repair |
| Woodsman | Timber harvesting, woodland resources, forest management |
| Frontier Explorer | Regional exploration, environmental documentation, route discovery |


### Agriculturalist


#### Blackbox Protocol

| Occupation | Specializations |
|---|---|
| Crop Farmer | Grain, vegetables, commercial crops |
| Livestock Farmer | Cattle, sheep, goats |
| Rancher | Grazing management, herd management, pasture systems |
| Poultry Farmer | Egg production, poultry breeding, flock health |
| Horticulturist | Greenhouses, nurseries, intensive cultivation |
| Orchardist | Fruit trees, pruning, orchard management |
| Beekeeper | Colony management, pollination, honey production |
| Agricultural Technician | Irrigation, agricultural equipment, crop monitoring |
| Homesteader | Mixed farming, preservation, household self-reliance |
| Aquaculture Farmer | Fish production, aquatic systems, water management |


#### Signal Lost

| Occupation | Specializations |
|---|---|
| Emergency Food Producer | Rapid crop production, community food supply, seasonal planning |
| Community Gardener | Shared gardens, seed management, intensive cultivation |
| Independent Livestock Keeper | Animal care, breeding, feed management |
| Agricultural Recovery Specialist | Farm restoration, equipment adaptation, soil management |
| Seed Steward | Seed preservation, germination, crop diversity |
| Emergency Irrigation Specialist | Water distribution, irrigation maintenance, water conservation |


#### Dead Zone

| Occupation | Specializations |
|---|---|
| Homesteader | Mixed farming, self-reliance, sustainable production |
| Subsistence Farmer | Staple crops, soil fertility, seasonal planning |
| Market Gardener | Vegetable production, community trade, intensive cultivation |
| Livestock Keeper | Animal husbandry, breeding, feed production |
| Shepherd | Grazing, flock management, wool production |
| Dairy Farmer | Milk production, dairy processing, herd management |
| Poultry Keeper | Eggs, breeding, poultry care |
| Orchard Keeper | Fruit production, propagation, orchard maintenance |
| Beekeeper | Honey, beeswax, pollination |
| Seed Keeper | Seed selection, preservation, crop diversity |
| Agricultural Cooperative Manager | Production planning, labor coordination, resource distribution |
| Aquaculture Keeper | Fish production, pond management, aquatic food resources |


### Emergency Responder


#### Blackbox Protocol

| Occupation | Specializations |
|---|---|
| Firefighter | Structural fires, rescue, hazardous incident response |
| Search and Rescue Specialist | Wilderness rescue, urban rescue, missing persons |
| Emergency Management Specialist | Disaster planning, emergency coordination, continuity planning |
| Emergency Dispatcher | Communications, incident coordination, resource dispatch |
| Humanitarian Aid Worker | Relief distribution, displaced populations, humanitarian assistance |
| Hazardous Materials Technician | Hazard identification, contamination assessment, emergency safety |
| Disaster Relief Coordinator | Volunteer management, emergency supplies, shelter coordination |
| Utility Emergency Responder | Infrastructure incidents, utility emergencies, service restoration |


#### Signal Lost

| Occupation | Specializations |
|---|---|
| Disaster Response Coordinator | Emergency operations, resource allocation, crisis management |
| Evacuation Coordinator | Displacement management, transportation, shelter coordination |
| Emergency Shelter Manager | Temporary housing, sanitation, resident welfare |
| Relief Distribution Specialist | Emergency supplies, food distribution, accountability |
| Community Rescue Worker | Rescue operations, incident response, civilian assistance |
| Crisis Communications Dispatcher | Emergency radio, incident tracking, responder coordination |


#### Dead Zone

| Occupation | Specializations |
|---|---|
| Community Fire Warden | Fire prevention, community readiness, emergency response |
| Settlement Emergency Coordinator | Disaster planning, community response, resource coordination |
| Rescue Specialist | Remote rescue, structural incidents, emergency assistance |
| Humanitarian Organizer | Refugee assistance, relief distribution, community support |
| Community Safety Inspector | Structural hazards, sanitation, accident prevention |
| Disaster Recovery Coordinator | Reconstruction, emergency recovery, community restoration |


### Criminal


#### Blackbox Protocol

| Occupation | Specializations |
|---|---|
| Burglar | Property crime, observation, underground contacts |
| Con Artist | Deception, impersonation, social manipulation |
| Smuggler | Illicit trade, transportation networks, underground contacts |
| Criminal Fixer | Negotiation, illicit networks, intermediary services |
| Organized Crime Associate | Criminal organizations, underground economics, contacts |
| Cybercriminal | Digital systems, illicit online networks, electronic fraud |
| Illegal Gambling Operator | Underground finance, negotiation, illicit networks |
| Fence | Illicit markets, goods valuation, underground trade |


#### Signal Lost

| Occupation | Specializations |
|---|---|
| Black Market Trader | Scarce goods, informal markets, negotiation |
| Underground Fixer | Informal networks, intermediary services, information |
| Independent Smuggler | Regional trade, transportation, illicit contacts |
| Opportunistic Criminal | Deception, scavenging, underground networks |
| Criminal Organizer | Illicit organizations, resource control, negotiation |


#### Dead Zone

| Occupation | Specializations |
|---|---|
| Black Market Merchant | Underground trade, valuation, negotiation |
| Smuggler | Informal commerce, regional travel, illicit networks |
| Raider | Resource acquisition, group organization, wilderness mobility |
| Outlaw | Independent survival, underground contacts, deception |
| Criminal Broker | Information trading, negotiation, illicit commerce |
| Underground Organizer | Informal organizations, leadership, resource management |


### Academic & Researcher


#### Blackbox Protocol

| Occupation | Specializations |
|---|---|
| Historian | Military history, regional history, historical research |
| Archaeologist | Excavation, artifact analysis, ancient cultures |
| Anthropologist | Cultural studies, human societies, ethnographic research |
| Professor | Higher education, academic research, specialized instruction |
| Teacher | General education, vocational education, curriculum development |
| Librarian | Information retrieval, cataloging, reference research |
| Archivist | Document preservation, historical records, information organization |
| Linguist | Languages, translation, linguistic analysis |
| Sociologist | Social structures, group behavior, institutions |
| Political Scientist | Government, political institutions, international relations |
| Theologian | Religious history, comparative religion, textual interpretation |


#### Signal Lost

| Occupation | Specializations |
|---|---|
| Knowledge Preservation Specialist | Document recovery, digital archives, reference collections |
| Emergency Educator | Community education, practical instruction, vocational learning |
| Crisis Social Researcher | Displacement, social behavior, community organization |
| Records Coordinator | Population records, institutional records, historical documentation |
| Interpreter | Translation, cross-cultural communication, humanitarian assistance |


#### Dead Zone

| Occupation | Specializations |
|---|---|
| Knowledge Keeper | Reference preservation, historical records, knowledge distribution |
| Settlement Teacher | Literacy, mathematics, general education |
| Vocational Instructor | Trade instruction, apprenticeships, practical education |
| Historian | Oral histories, pre-collapse records, regional history |
| Settlement Archivist | Community records, cataloging, document preservation |
| Cultural Scholar | Community traditions, religious history, cultural preservation |
| Independent Scholar | Research, self-directed education, knowledge recovery |


### Civilian


#### Blackbox Protocol

| Occupation | Specializations |
|---|---|
| Chef | Culinary arts, food safety, kitchen management |
| Baker | Bread production, pastry, commercial baking |
| Butcher | Meat processing, sanitation, meat preservation |
| Restaurant Manager | Personnel management, purchasing, hospitality |
| Business Owner | Entrepreneurship, operations, finance |
| Accountant | Bookkeeping, financial analysis, auditing |
| Attorney | Criminal law, civil law, legal research |
| Administrator | Records, scheduling, organizational management |
| Retail Worker | Customer service, inventory, sales |
| Warehouse Worker | Inventory, storage, materials handling |
| Logistics Coordinator | Distribution, supply chains, transportation planning |
| Truck Driver | Commercial transport, route planning, vehicle operation |
| Pilot | Fixed-wing aviation, rotary-wing aviation, flight planning |
| Maritime Worker | Vessel operation, navigation, marine logistics |
| Artist | Illustration, design, visual communication |
| Author | Writing, research, storytelling |
| Musician | Performance, composition, music instruction |
| Photographer | Documentation, visual observation, photography |
| Social Worker | Community assistance, case management, advocacy |
| Clergy Member | Counseling, community leadership, religious education |
| Homemaker | Household management, caregiving, budgeting |
| Student | Academic study, vocational learning, research |
| General Laborer | Manual labor, materials handling, general maintenance |
| Government Administrator | Public administration, policy, institutional coordination |
| Unemployed | Previous experience, informal work, self-directed learning |
| Retiree | Previous profession, mentorship, accumulated knowledge |


#### Signal Lost

| Occupation | Specializations |
|---|---|
| Emergency Kitchen Manager | Mass feeding, ration planning, food safety |
| Community Cook | Limited-resource cooking, food distribution, kitchen organization |
| Food Preservation Specialist | Canning, drying, storage management |
| Emergency Logistics Coordinator | Supply distribution, transportation, inventory |
| Independent Transporter | Regional transport, route planning, vehicle maintenance |
| Community Organizer | Volunteer coordination, community services, mediation |
| Relief Administrator | Records, resource allocation, organizational support |
| Independent Merchant | Informal commerce, purchasing, negotiation |
| Community Caregiver | Dependent care, household support, welfare |
| Displaced Civilian | Previous occupational experience, adaptation, informal work |
| Crisis Administrator | Emergency governance, public services, administrative continuity |
| Community Counselor | Emotional support, community cohesion, conflict resolution |


#### Dead Zone

| Occupation | Specializations |
|---|---|
| Settlement Cook | Community feeding, ration management, sustainable cooking |
| Baker | Bread production, grain processing, baking |
| Butcher | Animal processing, meat preservation, sanitation |
| Food Preserver | Canning, fermentation, drying, storage |
| Merchant | Regional trade, valuation, negotiation |
| Caravan Master | Transportation, logistics, personnel management |
| Teamster | Animal-drawn transport, cargo management, route planning |
| Boatman | Water transportation, navigation, vessel maintenance |
| Quartermaster | Inventory, resource allocation, supply management |
| Settlement Administrator | Records, public services, administration |
| Community Leader | Governance, diplomacy, organizational leadership |
| Mediator | Dispute resolution, negotiation, community relations |
| Innkeeper | Hospitality, accommodation, community services |
| General Laborer | Construction support, agricultural labor, maintenance |
| Community Caregiver | Childcare, elder care, household support |
| Artisan | Handcrafted goods, decorative arts, community commerce |
| Storyteller | Oral histories, entertainment, cultural preservation |
| Musician | Performance, instruction, community entertainment |
| Spiritual Leader | Counseling, community cohesion, religious services |
| Settlement Diplomat | Intersettlement relations, negotiation, agreements |
| Independent Survivor | General survival, self-reliance, informal work |
| Refugee | Previous occupational experience, adaptation, community integration |
| Apprentice | Trade education, practical learning, mentorship |
| Retired Specialist | Previous professional knowledge, instruction, advisory services |

### Additional occupational rules
1. Occupations are not character classes. They establish starting experience, knowledge, resources and professional advantages.
2. Occupations are not exclusive to their recommended settings.
3. Characters retain their original occupational history.
4. Multiple occupations are permitted.
5. Specializations can be acquired independently.
6. Occupational overlap is intentional.
7. Professional qualifications matter.
8. Professional advantages remain grounded.
9. Occupational advancement is not mandatory.
10. Native and transitional characters remain distinct.
11. Institutional authority is conditional.
12. Equipment and resources depend on circumstances.
13. No occupation is inherently superior.
14. Players may create custom occupations.
15. Specializations use the existing skill system.
16. Occupational artwork follows a consistent hierarchy: fourteen family emblems, individual occupation icons, text-based specialization identifiers.
17. Occupations can evolve alongside civilization.
18. No mandatory morality or alignment.


## Delegated completion — Sections 2.3–2.9 and remaining character implementation defaults
Authority: user directs assistant to finish remaining design using recommendations and additional safeguards without further individual approvals. These are adopted working design defaults under delegated authority, not individually user-reviewed or playtested. Existing explicit approvals prevail; roster remains revisable.

### 2.3 Occupational skill budgets [Approved working default — see R01–R06]
Use one shared allocation method for every roster entry, not 352 independent mechanics. Total occupational points 100 in every setting: BP primary 100; SL primary 80 plus one secondary background 20; DZ primary 60 plus two secondary backgrounds 20 each. Primary BP distribution +30/+25/+20/+15/+10 across five distinct relevant skills; SL +25/+20/+15/+10/+10; DZ +20/+15/+10/+10/+5. Each secondary +10/+5/+5 across three distinct relevant skills. Combined occupational contribution per skill max30; redistribute excess within relevant skills in increments of five. Backgrounds represent actual history, not full credentials, contacts, equipment or advantages. Personal pool remains 100, max20 per skill, integer points; underlying creation ceiling85. Reallocate any excess before finalizing; no lost points, no conversion to money or attributes. Base floor(attribute/2), then occupational then personal; specialization is contextual, not underlying. Equal total general skill budget across eras; later settings trade concentration for breadth and receive more narrow specializations. Native characters may select any plausible roster entry regardless of recommended era. Transitional characters never rebuild or receive new starting budgets. 
Family suggested relevant skill menus (choose/order based on actual occupation, not mandatory family-wide): Investigator Search, Surveillance, Forensics, Research, Streetwise, Persuasion, Deception; Law Enforcement Search, Persuasion, Leadership, Surveillance, Vehicle Operation, Forensics, Endurance; Military Leadership, Endurance, Navigation, Communications, Resource Management, Athletics, Mechanics, Medicine; Medical Medicine, Science, Research, Resource Management, Persuasion, Search; Scientist Science, Research, Search, Electronics, Resource Management, Agriculture; Technology Electronics, Computing, Communications, Mechanics, Research, Science; Engineer Construction, Science, Mechanics, Electronics, Research, Resource Management; Tradesperson Crafting, Mechanics, Construction, Electronics, Resource Management, Search; Outdoorsman Survival, Navigation, Search, Endurance, Athletics, Scavenging, Animal Husbandry; Agriculturalist Agriculture, Animal Husbandry, Resource Management, Mechanics, Crafting, Science, Survival; Emergency Responder Medicine, Endurance, Communications, Leadership, Search, Resource Management, Athletics; Criminal Streetwise, Deception, Persuasion, Stealth, Search, Resource Management, Vehicle Operation; Academic & Researcher Research, Science, Persuasion, Leadership, Search, Resource Management, Computing; Civilian any justified five skills. Menus nonexclusive; choose skills appropriate to actual duties. No family-wide weapon competence or authority. Unemployed/student/retiree use actual prior experience or informal background; no fictional credentials required. 
Worked BP chef: INT60 DEX60 PRE50; Crafting base30 +30 occupation +10 personal=70; Resource Management base30 +25=55; Leadership base25 +20=45; Science base30 +15=45; Persuasion base25 +10=35. Qualified culinary arts +10 gives 80 for applicable Crafting task. Remaining personal90 distributed under cap. DZ cook primary Crafting20 Resource Management15 Leadership10 Science10 Persuasion5; gardener secondary Agriculture10 Survival5 Resource Management5; repair background Mechanics10 Construction5 Crafting5. Total100; broader rather than larger pool. 
**Approved occupation alternative-skill substitution (2026-11-25):** At character creation, or during a GM-approved career transition when occupational allocations are legitimately being assigned, a GM-approved, occupation-relevant alternative general skill may replace exactly one ordered skill at that slot's original point value. This is a one-for-one substitution, not an additional grant: the replaced skill receives no points from that slot, and the alternative receives exactly the slot's points. The total occupation budget, five distinct primary-skill slots where required, per-skill combined occupational cap of 30, underlying creation ceiling of 85, prerequisites, and other existing allocation rules remain binding; redistribute cap excess through the existing procedure rather than creating or losing points. Record the original slot, replacement skill, rationale, and GM approval on the character record. No opportunistic skill switching between checks and no retroactive rebuilding or free new occupation points for transitional characters. Listed profile alternatives are suggestions, not automatic permission; unlisted alternatives require the same GM approval and occupational relevance. This clarification does not grant credentials, contacts, equipment, or specialization bonuses.
Each sourcebook occupation profile must list five ordered skills, optional alternatives, specialization mapping, qualification prerequisites, advantage, resources, availability and adaptation examples. Until individual profiles are authored, use this complete player/GM allocation procedure for every roster entry. Do not claim individual fixed profiles already exist.

**Approved competency level clarification (2026-11-25):** Competency Level 1 is a real foundational level: it records earned or granted competency, satisfies prerequisites that explicitly require Level 1, and counts toward progression even though its proficiency modifier is +0. The first numerical proficiency bonus occurs at Level 2 (+5); Levels 3, 4, and 5 grant +10, +15, and +20 respectively. Do not reinterpret Level 1 as absent, withhold Level 1 progress credit, or automatically promote foundational baseline grants to Level 2. An explicit Level 2 baseline grant remains Level 2. This clarification concerns CCDD-20 competency levels, not the separate specialization stage progression or its contextual modifiers.

### 2.4 Specialization budgets and mapping [Approved working default — see R01–R06]
Retain 3/5/7 slots and approved progressive +0/+5/+10/+15 stages. Starting primary two at qualified +10; additional 1/3/5 at foundational +5; no starting advanced by default. Total contextual bonus potential 25/35/45 across different tasks, never summed on one check. Each specialization has canonical ID, label, scope, one default general skill, permitted alternate application skills, prerequisites and stage. Map by task not title: culinary arts/metalworking/textiles -> Crafting; food safety -> Science or Medicine depending task; kitchen management/logistics -> Resource Management or Leadership; crops -> Agriculture; livestock -> Animal Husbandry; radio -> Communications or Electronics; clinical care -> Medicine; records -> Research; structural work -> Construction; engines -> Mechanics; navigation -> Navigation; legal research -> Research; mediation -> Persuasion; languages -> Research for interpretation with language proficiency prerequisite; arts -> Crafting or Persuasion by task. No new general skills. Same specialization shared across occupations; synonyms alias, no duplicate purchases. Narrow scope required, no broad all-skill bonuses. Starting background must justify selected stages; if no credible qualified primary experience choose plausible narrower competencies, or GM approves alternate allocation of equal or lower bonus value. Existing approved roster labels preserved even where canonical aliases later needed.
### 2.5 Professional advantages [Approved working default — see R01–R06]
One primary advantage at creation, no automatic extra advantages from secondary backgrounds. Choose one grounded benefit: professional contact (one named willing contact with defined access and limits), institutional access (specific authorized facility/service while institution exists), practiced workflow (once per in-world day halve routine setup time for familiar task, never training or hazardous procedure), resource familiarity (identify ordinary appropriate supplies within familiar profession without roll when obvious), or mentor relationship (one named instructor, availability and costs apply). No guaranteed success, rerolls, combat bonuses, free resources or universal access. GM may approve equivalent bounded benefit. Earn further advantages through actual relationships, demonstrated practice or qualifications; no automatic career change awards. Access may lapse; knowledge remains. Record source, scope, conditions and expiry; no stacking identical effects.
### 2.6 Starting equipment and resources [Approved working default — see R01–R06]
Each primary profile has a modest personal kit (ordinary clothing, personal effects, basic portable occupational tools or substitutes), one plausible contact, and access record for employer/community facilities if applicable. Secondary backgrounds grant no duplicate kits. GM sets campaign-wide resource tier constrained/ordinary/well-supported, then validates actual ownership, availability, condition, consumables, carrying capacity, currency and obligations. Ordinary default: personal necessities and one portable work kit; constrained incomplete kit; well-supported additional relevant tools or authorized shared access, not unrestricted ownership. BP money uses campaign local currency and actual price list; SL mixed currency/barter and disrupted access; DZ local barter/accounting and community assets. No fixed exchange rate or universal starting cash until economy/equipment tables authored. For immediate play GM assigns equal campaign purchasing allowance in local terms and records any occupational equipment separately; expensive assets require explicit campaign approval, shared ownership or debt. Example chef owns knives and work clothing, not restaurant; DZ cook may use communal kitchen without owning it. No automatic replacement on transition.
### 2.7 Setting variants
Keep same IDs and underlying mechanics; setting variant records recommended availability, actual infrastructure dependencies, typical tools, social standing, qualifications and adaptation requirements. Existing professionals may persist in any era. No automatic degradation, new equipment or authority. Native backgrounds use local institutions; transitional characters retain records and possessions actually surviving. Recovery may restore services without reversing setting. Roster is provisional and extensible.
### 2.8 Careers, qualifications and advancement
Career history records occupation, family, dates, training, employer/community, credentials, roles, contacts and actual assets. Current primary role is descriptive after creation; changing it never reapplies starting points. New role recognized by GM after relevant demonstrated competency, prerequisites and actual opportunity; multiple roles allowed. Credentials have issuer, scope, date, status and local recognition; practical competence and legal authorization separate. Apprenticeship, mentorship, self-study and supervised practice use existing progressive learning plan. A training milestone can support specialization and adaptation only if distinct outcomes justified; no duplicate general skill award for same evidence. 
Advancement checkpoint at end of meaningful scenario or substantial downtime (GM may combine sessions), one marked opportunity per general skill per checkpoint; D100 strictly above underlying skill grants 1D4, cap99; Underlying general skill is capped at 99; natural 100 is always critical failure, no repeated farming. Structured training can create a mark, not an extra roll for same skill/checkpoint. Attributes: sustained relevant development at least 30 in-world days, documented meaningful practice, GM approval, one eligible attribute per monthly checkpoint, D100 above underlying grants +1, ceiling100. No automatic health refill. Optional disuse after at least six in-world months without meaningful use: GM review, contextual unfamiliarity first; if enabled, -5 contextual penalty, recover through demonstrated practice; no automatic underlying loss. Training costs actual materials/instructor/time; no universal fee. 
### 2.9 Artwork and presentation
Fourteen original family emblems, consistent silhouette and legibility at small sizes; occupation icons may reuse shared motifs with distinct labels, specialization text identifiers. No imitation of real agency seals or copyrighted game art. BP classified contemporary, SL emergency broadcast, DZ weathered reconstruction, common visual identity. Printable grayscale/high contrast, accessible text labels, no color-only distinctions. Source art provenance/license/creator recorded; no asset production claimed. Core owns rules; setting books own variants; Transition owns adaptation; Homebrew owns template; GM Command and OS use same IDs and data, printable equivalent. 
### Remaining resolution defaults
For possible uncertain checks clamp final effective skill to 1–99; impossible/routine resolved before rolling. Natural01 critical success, natural100 critical failure; exceptional <=floor(effective/5), strong <=floor(effective/2), standard <=effective; highest category wins. Opposed compare category, then signed margin effective minus roll (larger better); if both fail, neither achieves intended action unless contest explicitly requires relative winner, then margin resolves relative position only; exact tie status quo or GM adjudication. Attribute contextual adjustment to skill = floor(effective governing attribute/2) minus floor(underlying default governing attribute/2), applied once; alternative attribute only for justified task, no underlying change. Avoid double-counting injury/fatigue/deficit. Derived maxima recalc without free healing: current min(previous current,new max), restoration of maximum does not restore spent points. Movement index and recovery index remain abstract until combat/medical chapter conversions; carry reference not hard maximum. Optional D20 circumstance roll only when independent uncertainty meaningful, no automatic reversal of D100. 
### Completion boundary
Foundation and character/occupation design decisions complete at working-reference level. Core manuscript next, followed by remaining approved publications; detailed per-occupation profiles, equipment prices, combat/medical conversion tables, empirical research and playtest calibration are manuscript/testing work, not new approval gates. Preserve approved rules; record errata transparently. No claim of completed manuscripts, artwork or software.

## Occupational career examples — manuscript reference
Illustrative only, not advancement trees.
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
| Criminal | Smuggler | Black Market Trader | Merchant (Civilian; cross-family career change) |
| Academic & Researcher | Librarian | Knowledge Preservation Specialist | Knowledge Keeper |
| Civilian | Chef | Emergency Kitchen Manager | Settlement Cook |
Character record example: Tradesperson, original Automotive Mechanic, previous Emergency Repair Technician, current Blacksmith, additional Settlement Instructor; acquired engine repair, metal fabrication, toolmaking, forge operation and agricultural equipment specializations. No automatic acquisition or required path.

## Sourcebook handoff and precedence index
The latest explicitly approved or delegated working defaults supersede earlier candidate/pending language; earlier text is retained as historical rationale, not competing rules. F04–F10 reserved status is superseded by approved character foundation, delegated 1.2–1.7, transition deficits, approved progressive learning and delegated completion 2.3–2.9. Fourteen families and 352 setting-specific occupation entries are provisionally approved and revisable. Foundation F01–F37 is complete at working-reference level, not a claim of finished manuscripts or tested mechanics. Core Rulebook owns shared rules; setting books own era-specific content; Transition Handbook owns adaptation; other publications expand their assigned scope. No new approval gate for delegated decisions. Numerical defaults require integrated playtesting; sourcebook production still requires individual occupational profiles, equipment tables, movement/recovery conversions, research verification, artwork and examples. No external research or playtest validation is implied. Preserve history and document future revisions explicitly.

# Outstanding work
Working list from the 2026-11-24 design review. Each item names the problem, where it lives in this file and the decision needed. Mark items Approved, Deferred or Rejected as they are resolved, and record each resolution in the Decision log. Nothing in this section is an approved rule.

## 1. Governance and approval authority
### 1.1 Who may decide remaining mechanics [Approved — delegated authority, user final]
AGENTS.md and FOUNDATION-SUMMARY.md say F04–F10 require joint design. The Sourcebook handoff index says F04–F10 reserved status is superseded and that combat/medical conversions, equipment tables and similar items are "manuscript/testing work, not new approval gates". Decide which applies. Recommended: the character system (1.1–2.9) is closed at working-default level; combat, injury, psychology, economy, equipment and survival numbers remain joint-design items. Then update AGENTS.md, FOUNDATION-SUMMARY.md and the handoff index to match.
### 1.2 Review of delegated defaults
Sections 1.2–1.7 and 2.3–2.9 were adopted under delegated authority and are marked "not individually user-reviewed". Review at least 2.3 occupational budgets, 2.4 specializations and 2.8 advancement, and record approval or changes.
### 1.3 Unconfirmed proposals [Partly resolved 2026-11-25]
Confirm, revise or defer: the fifteen F02.02 canon principles ("retained for confirmation"); the twelve world-state indicators, 0–6 scale and twelve-step transition procedure (F02.05, F02.07); Session Zero / prequel / opening adventure distinction (F02.02).
Resolved 2026-11-25: twelve indicators, 0–6 scale and transition procedure confirmed (see 8.1); Session Zero approved as a recommended, non-mandatory preparation procedure (CANON-AND-SESSION-ZERO.md Part 2). **Still unconfirmed:** the F02.02 canon principles, presented verbatim in CANON-AND-SESSION-ZERO.md Part 1 together with a discrepancy (the text says fifteen but lists thirteen).
### 1.4 Superseded text still reading as current
Mark inline as Superseded, or move to a history file: "Mechanics pending" (old D20 thresholds); F05 "half/fifth… candidates, not adopted"; F06 five attributes and 250-point budget; F04–F10 "Reserved joint design" header; the 60-occupation historical roster; Foundation review bullet saying rounding, attributes and thresholds remain open. Today only the precedence index at the end of the working notes resolves these.

## 2. Core resolution
### 2.1 Attribute checks [Approved working default — see R01–R06]
No procedure for rolling an attribute directly (lifting, resisting poison, resisting deception). Decide the target (full attribute, half, or attribute plus difficulty) and when it is used instead of a skill.
### 2.2 Assistance, retries and extended tasks [Approved working default — see R01–R06]
F05 lists assistance, retries, pushing and caps as pending; 1.4 and the resolution defaults do not cover them. Also needed: extended/project checks for F21 crafting and F22 construction, and combined-skill checks.
### 2.3 Difficulty table gap
Modifiers are +30/+20/+10/0/−10/−20/−40. Decide whether a −30 step is intended.
### 2.4 D20 circumstance frequency
The optional D20 produces a complication 35% of the time (major 15%). Write GM guidance on when to call for it, and decide whether it is rolled together with the D100.
### 2.5 Psychological pressure die
F14 refers to a "D20 pressure concept distinct from circumstance roll". Define it or remove it.
### 2.6 Probability appendix
G06 requires documented probability. Add tables for success categories by skill and difficulty, opposed outcomes and D20 results.

## 3. Attributes, skills and derived statistics — resolved working specification

### 3.1 Governing attribute balance
Retain the canonical 30 skills and default governing attributes, avoiding changes to 550 competency mappings and 352 occupation profiles. Distribution STR 1, CON 2, DEX 6, INT 12, PER 5, WIL 0, PRE 4. This is deliberately asymmetric: skills represent learned technique, attributes also govern direct capacity and derived statistics. STR governs raw force, carrying and physical capacity; WIL governs composure, sustained concentration under pressure and psychological resistance through R01, stamina and resilience. For a task whose learned technique remains decisive but another attribute materially governs execution, use the existing alternative-attribute adjustment once: floor(effective alternative/2) minus floor(underlying default/2). Examples: force-dominant Close Combat may use STR; Leadership under personal pressure may use WIL when resolve rather than social presence governs execution. Never select the highest attribute simply for advantage; GM declares the basis before rolling. Do not add a separate raw attribute roll for the same uncertainty. Default skill base and competency bonus unchanged. Attribute usefulness remains a playtest question, not established by equal skill counts.

### 3.2 Skill list gaps
No new general skills. Resolve by task, not occupation title. Reading people: PER for immediate observable cues, Persuasion for interactive clarification, Research for structured comparison of accounts, Medicine for qualified clinical assessment; none reveals hidden truth automatically. Opposed Deception uses PER for immediate observation or the applicable learned skill when a specific investigative method is used, with R01–R03 opposition; successful detection reveals inconsistencies or cues, not certainty of dishonesty. Law/bureaucracy: Research for interpretation and records, Resource Management for administration, Persuasion for negotiation. Finance: Resource Management for budgets and accounts, Research for audit evidence. Security: Search for inspection, Mechanics or Electronics for authorized technical evaluation, Computing for authorized digital systems. Performance: Crafting for artistic technique, Persuasion for audience communication, Athletics for physical execution where appropriate. Use one lead skill and highest applicable competency bonus; qualifications, access and evidence remain separate. Clinical psychology is not a universal lie detector.

### 3.3 Languages
Language ability is a separate capability record, not a general skill or automatic CDR award. Record language identifier, spoken/receptive, reading and writing modalities independently (signed languages use expressive/receptive modalities; literacy is separate). Each modality has integer 0–5: 0 none, 1 isolated familiar expressions, 2 routine simple exchange, 3 independent everyday communication, 4 complex communication, 5 nuanced fluent use. Native or equivalent documented background may justify 5 in relevant modalities, not automatic literacy. Additional starting languages require credible history and GM approval; no free grant on transition. For routine communication within demonstrated ability no roll; if content exceeds ability, require interpreter, reference or simplified communication rather than a lucky roll granting fluency. For uncertain feasible communication use relevant general skill (Persuasion, Research or Communications by task) with language ceiling of 20/40/60/80/99 for levels 1–5, applied after modifiers and before final clamp. Level 0 cannot perform language-dependent tasks without an adequate aid. Use lowest required modality, not average. Interpreter uses their own relevant proficiency; no automatic bonus. Professional translation/interpretation competency remains separate and requires at least modality 4 in both languages for independent professional assessment (III–V); I–II may train with modality 3 and supervision. Language advancement: sequential assessed milestones, provisional incremental active hours 20/60/120/240/480, adjusted only by documented GM-approved equivalence; no simultaneous time credit with competency training, no CDR or PCP conversion, use shared learning time and one active learning slot. Failed assessment preserves hours, requires corrective practice. No real-world fluency guarantee.

### 3.4 Derived statistics
Use effective attributes, round down except carrying load. Health maximum H=floor((STR+CON)/10), minimum 1 for a living character; Stamina maximum S=floor((CON+WIL)/2); psychological resilience P=floor((WIL+CON)/2), removing PRE because social presence is not psychological durability; initiative I=floor((DEX+PER)/2); movement index M=floor((STR+DEX+CON)/3); reference carrying load C=STR×0.5 kg; recovery index R=floor((2×CON+WIL)/3). S and P can share a numerical value but are distinct capacities: stamina is spendable physical reserve, resilience is a pressure reference, not another stamina pool. R weights physical constitution more heavily. Default movement conversion for level unobstructed ground: walk distance per 6-second movement interval = max(1,floor(M/5)) metres, or 0 if unable to move; sustained travel and combat action economy are separate Section 4/7 rules, not automatic extra movement. Recovery index is a 0–100 reference; provisional stable-rest health recovery per 24 hours = 1 point if R<60, 2 if R>=60, only when eligible under injury/care rules; no recovery during ongoing deterioration, no automatic wound clearance. Section 4 owns stabilization, care, fatigue costs and pressure thresholds. Carry reference is not hard maximum; load effects belong to equipment/travel rules. Current pools never increase merely because maxima rise; clamp current to reduced maximum, no negative pools. Derived changes do not alter underlying skills or earned competencies.

### 3.5 Health scale
Retain 3–16 creation HP (attributes 15–80), maximum 20 at natural attribute cap100. Zero HP means incapacitation and urgent injury resolution, not automatic death; Section 4 defines dying, stabilization, injury severity, damage and armor. Damage uses integer HP units; illustrative abstract severity 1 minor, 2–3 moderate, 4–6 severe, 7+ critical, not weapon assignments. No negative HP; excess damage may inform injury severity under Section 4. At HP3 a 3-point hit reaches zero; at HP16 it leaves13. This intentionally permits vulnerability but does not establish weapon balance. Section 4 must test representative damage/armor and mortality against HP3/8/16/20 before publication; no claim of combat compatibility until that exists.

### Section 3 acceptance
All five design issues resolved at working specification level under delegated authority. No new general skill, competency ID, CDR/PCP formula or occupational allocation changes. New language milestones, derived conversions and health severity examples are provisional gameplay calibration. Section 4 owns combat, injury and psychological pressure integration; playtest attribute usefulness, language progression, movement, recovery and health scale. Historical conflicting derived formulas and undefined language prerequisites are superseded by this section.

## 4. Combat, injury and psychology — resolved working specification

### 4.1 Combat procedure
Use fictional abstract encounters, not real-world tactical instruction. Establish stakes, participants, abstract positions, feasible actions and relevant conditions. A round is six seconds. Initiative is the Section 3 derived index, descending; ties higher effective PER, then simultaneous declared actions with GM adjudication if incompatible. Recalculate at next round after relevant changes. Each participant receives one main action and one movement allowance (Section 3 distance), in either order, plus one reaction per round. Main action may be exchanged for a second movement allowance, never another reaction. Brief speech and dropping an item are incidental when feasible; no unlimited free actions. A main action may represent attack, assistance, interaction, care, retreat, or another meaningful task. Unused actions expire; no banking. Surprise is a fictional awareness condition: unaware participants cannot react to an event they cannot perceive; no automatic hit or free extra round. Once aware they participate normally at next opportunity.

Attack: one D100 check using applicable existing skill, R03 difficulty, highest relevant competency modifier, and distinct situational modifiers. No new Dodge skill. An aware eligible defender may spend their reaction on a defensive opposed check: DEX for evasion, Close Combat for appropriate close-range defense; choose before dice, use R01–R03 and category/margin comparison. Successful attacker wins only if defense does not win or tie; both fail means no hit. Without defense use ordinary attack check. One reaction cannot defend multiple checks. No automatic numerical bonus for multiple opponents; action economy already represents pressure. Use abstract range bands engaged/near/far/out of reach; equipment entries specify feasible bands and inherent difficulty, no universal physical range or real-world weapon performance. Out of reach is impossible. Partial cover is a distinct -10 attack modifier when not already represented in difficulty; substantial cover -20; complete obstruction prevents direct attack. Do not double count cover and armor. Retreat is movement toward an available safe exit; contested escape uses existing opposed resolution when meaningful, no automatic extra attacks. Surrender is a declared fictional action, not guaranteed acceptance; GM resolves NPC response and consequences, players retain agency. Encounters end when stakes resolve, parties disengage or no meaningful opposition remains. Standard uses abstract positions; Advanced tracks distance and specific conditions; Simulation tracks time, equipment state and resource use, not additional attack rolls for the same action.

### 4.2 Damage and armor
Use abstract fictional harm profiles rather than real-world weapon specifications. On successful harmful action roll the assigned harm die once: low D4, moderate D6, high D8, extreme D10. These are game severity categories, not assignments to actual weapons. Standard/strong/exceptional success adds 0/1/2 harm respectively; critical adds 3; no extra damage die. Armor rating A=0–3, applicable only when the fictional protection covers the harm type; final HP loss=max(0,rolled harm+degree bonus−A). No minimum damage through armor. No second armor roll. Record actual HP loss, not raw damage, for injury classification. If no harm penetrates, no automatic wound. Environmental harm uses same abstract severity profile without attack degree bonus unless a rule explicitly says otherwise. Nonlethal intent must be feasible before resolution; use strain damage against Stamina instead of HP when the fictional effect is genuinely noninjurious. Harmful acts cannot be made harmless merely by declaration. At zero stamina character is exhausted and cannot take strenuous actions until recovery; no automatic death or conversion to HP loss. Advanced targeted effects: declare a fictional functional objective, apply one difficult modifier (-20) if feasible, resolve normal harm once; on successful meaningful effect GM records an appropriate temporary functional condition instead of additional harm or automatic incapacitation. No anatomical vulnerability tables. Simulation may track protection condition, with explicit scenario wear events; no automatic degradation every hit. Armor and harm profile catalogues require equipment chapter calibration.

### 4.3 Health depletion, dying and healing
HP is integer 0..Hmax; no negative HP. Individual post-protection loss 1 minor, 2–3 moderate, 4–6 severe, 7+ critical; severity is independent of current HP and may be escalated by fictional circumstances only with documented GM reason. Standard records HP plus most consequential unresolved condition; Advanced tracks individual injury IDs, severity, functional limitation, stability, care and recovery; Simulation adds care capacity and resource/time ledger. Minor condition has no automatic penalty; moderate -10 to directly affected tasks, severe -20, critical -30 or task infeasible when justified. Use highest applicable injury penalty once; do not also subtract same impairment through effective attribute adjustment. No arbitrary unrelated penalties.

At zero HP character is incapacitated, cannot take ordinary actions, and enters unstable state if harm caused critical/severe injury or GM-established ongoing life-threatening condition; otherwise stable incapacitated. Unstable character receives three abstract deterioration boxes; at end of each subsequent round with unresolved instability mark one box, death at three. This is fictional pacing, not a medical timetable. No same-round tick on initial depletion. An eligible helper may spend main action and appropriate care resources on Medicine check to stabilize: success stops deterioration, failure consumes action and declared resources, critical failure adds one box (death at three). Routine stabilization only if fiction and qualified resources make outcome certain; impossible care cannot be rolled. Stable at zero remains incapacitated until eligible recovery restores HP; consciousness is a separate condition, not guaranteed by HP alone. New actual harm may reopen instability; retain existing deterioration boxes until definitive care resolves episode, no reset farming. GM may use a campaign-agreed less lethal variant before play, not retroactively. No real-world treatment procedure implied.

Stable eligible rest restores HP per Section 3 recovery index: 1 per 24 hours below60, 2 at60 or above. A qualified Medicine care assessment once per 24-hour recovery interval may add 1 HP on strong or better success when adequate care and resources exist; ordinary success supports normal recovery, failure no bonus, critical failure invokes a declared fictional setback rather than automatic extra injury. Maximum recovery 3 HP/day; no stacking helpers or repeated rolls for bonus. Unstable or actively deteriorating conditions block recovery. Injury clearance separate: provisional minimum eligible rest intervals minor1, moderate3, severe7, critical14 days, followed by appropriate reassessment; persistent conditions may require longer or specialist care. No guaranteed cure or automatic return to full function. Stamina recovery: eligible quiet rest restores floor(Smax/4), minimum1, per hour; adequate full sleep of 8 hours restores remaining stamina if no ongoing condition prevents it; do not double count same hours. Section 7 governs exertion, deprivation and travel costs. Across settings use same checks and rates; actual care availability, qualified providers, supplies and facilities determine eligibility and possible outcomes, not era label. Track all recovery on in-world calendar.

### 4.4 Stress, fear and trauma
Separate Stress from HP and Stamina. Stress integer 0..100, initial0 unless agreed history. Resilience P from Section 3 is reference, not spendable pool. When a meaningful fictional pressure event occurs, GM declares intensity low5/moderate10/high20 and stakes before one WIL check using R01–R03. Routine or repeated unchanged stimulus does not trigger repeated checks; at most one pressure check per distinct event. Success adds floor(intensity/2), strong or better adds0; failure adds full intensity; critical failure adds intensity+5. Clamp 0..100. No additional D20 pressure die. Stress bands relative to P: below ceil(P/2) composed; from ceil(P/2) strained (-5); from P pressured (-10); from min(100,P+25) overwhelmed (-20). Resolve highest applicable band only, and use minimum threshold1 for living characters. Penalties apply only to tasks materially affected by pressure, not all actions; no double counting with WIL impairment. At overwhelmed state player chooses plausible response (pause, seek support, withdraw, continue with penalty); no compulsory violence, arbitrary loss of control or diagnosis. Immediate fear is contextual fiction, not separate universal pool. A safe quiet hour reduces stress by5; adequate 8-hour sleep reduces20 instead of hourly stress recovery for same interval; supportive interaction with consent and appropriate skill may reduce additional5 once per day on success, no repeated farming. No recovery during ongoing acute threat. Advanced persistent trauma: after a major event or sustained overwhelmed state, player and GM may agree on a fictional persistent condition with specific triggers, functional effects and review dates; no automatic mental illness or mandatory supernatural sanity. Qualified support and time can modify or resolve condition by agreed reassessment; no fixed clinical cure timetable. Simulation adds longitudinal record and support availability, not compulsory extra checks. Safety boundaries override depiction.

### Section 4 acceptance
Working design resolved for all four subsections. Test health 3/8/16/20, harm profiles and armor0..3, opposed defense ties, reaction limits, zero HP, deterioration timing, stabilization, recovery caps, stress thresholds and no duplicate modifiers. Numerical calibration provisional; equipment assignments, integrated travel/exertion and actual playtesting remain production work. No change to Section 2 competency progression or Section 3 attribute mappings. This section supersedes earlier pending combat/injury/pressure procedures.

## 5. Character creation, advancement and transitions — resolved working specification

### 5.1 Transitional deficit milestones
An adaptation milestone is a distinct GM-approved demonstration of improved performance in a specified unfamiliar application of a general skill, not elapsed time alone. Four evidence types: familiarization, guided practice, independent application, advanced adaptation. Each accepted milestone removes five percentage points, capped at outstanding deficit. Evidence types may repeat with materially different tasks or conditions; no duplicate evidence, repeated identical rolls or automatic weekly award. A structured milestone normally requires at least eight active in-world hours of relevant preparation/practice and a documented demonstration; equivalent meaningful field experience may substitute with GM approval. This is a provisional gameplay minimum, not professional training duration. Leadership example: two weeks each containing distinct qualifying evidence can clear a ten-point deficit; two calendar weeks without evidence cannot. Record context, evidence ID, hours, assessor, prior and resulting deficit.

### 5.2 Uncleared deficits
Retain the approved 0–25 point deficit scale. A 25-point deficit requires five accepted five-point milestones unless justified prior adaptation reduces it. No four-milestone ceiling. Remaining deficit D=max(0,baseline magnitude−5×accepted applicable milestones). At zero no further adaptation credit or transferable surplus. Deficits are contextual, never deductions from underlying skill or acquired competency levels. Distinct unfamiliar contexts may have separate records, but apply only the largest relevant adaptation penalty to a single check, never stack overlapping contexts. Loss of equipment or access remains separate feasibility, not automatic skill loss.

### 5.3 Deficit table semantics
Relabel original table columns as BP-trained unfamiliar SL application and BP-trained unfamiliar DZ application; values are total reference penalties, not successive additions. For a genuinely SL-trained character encountering unfamiliar DZ conditions, provisional reference magnitude is max(0,DZ reference−SL reference), only if documented SL experience covers the corresponding SL methods; otherwise use BP-trained DZ reference adjusted for actual experience. Native DZ experience does not confer universal familiarity. For BP-trained character entering DZ, start from DZ reference and subtract five per distinct previously accepted milestone whose evidence remains relevant to the DZ application, plus separately justified prior experience reductions only if not already counted. Reassess local circumstances; no automatic carryover of unrelated credit. Example Computing BP reference SL15/DZ25: two applicable SL milestones reduce DZ25 to15; unrelated milestones reduce nothing. SL-trained Computing with demonstrated corresponding SL methods starts at10 for unfamiliar DZ application. No stacking SL and DZ totals. Preserve original evidence and record transfer rationale.

### 5.4 Creating a transitional character at the start of play
Choose campaign era, origin era, age, history, transition dates and actual elapsed survival/downtime. Create once using origin-era attributes350, general personal100, occupational primary/secondary allocation and CCDD personal competency budget BP10/SL15/DZ20. Validate documented occupational grants, prerequisite closure, CDR and access using CCDD-12/19/22; no second creation budget or free later-era package. Reconstruct chronological transition(s), declared development objectives, available resources, training and actual in-world time. Credit only validated prior adaptation milestones, completed competency levels and earned advancement checks supported by history; apply same gates and hours as played characters. GM may approve a summarized history ledger with dates, evidence and time totals; no fabricated qualification or double-counted hours. Reconcile equipment, relationships, injuries and current authority with campaign conditions. Use current era slot capacity but retain earned CDR and levels. A replacement character may be calibrated to campaign experience through the same documented history procedure, not automatic catch-up grants. Example BP-origin professional joining DZ uses BP creation budget10, then documented post-creation learning and adaptation; never adds DZ20.

### 5.5 Native versus transitional balance
Supersede historical fixed 3/5/7 specialization counts with CCDD-12 occupational grants and personal competency budgets. Native BP/SL/DZ personal competency budgets10/15/20; general occupational totals100 in every era with concentration/breadth tradeoff; general personal100 and attributes350 unchanged. Native characters have contextual familiarity where justified; transitional characters retain earned competencies, CDR, relationships and experience but may have adaptation deficits. No promise of identical starting power or universal superiority. Compare matched career histories and campaign opportunities, not number of competencies alone. Playtest native and transitional pairs for task success, available training, meaningful participation, time to clear deficits and occupation access; revise provisional budgets or reference deficits only by documented balance decision. No free competencies or skill points merely for transition.

### 5.6 Downtime and training conversion
General skill advancement uses one eligible mark per skill per meaningful scenario or per completed 40 active hours of relevant nonroutine practice, with distinct evidence and no duplicate mark for the same activity. A scenario mark requires meaningful use with stakes or feedback, not a roll count. A downtime block may earn multiple marks only for distinct completed 40-hour blocks; partial hours carry forward, no credit for idle calendar time. Resolve one advancement check per mark in chronological order: D100 strictly above current underlying skill grants +1D4, capped99; failure consumes mark. At99 no advancement check needed. Attribute advancement remains monthly eligible checkpoint, +1 on D100 above underlying, cap100; require documented relevant sustained development, no automatic monthly mark, no duplicate attribute checks for same month. Training toward a competency does not automatically grant general skill marks: only separately evidenced meaningful general practice may qualify, with the same hours counted once toward the shared time ledger. For a single activity choose primary credit route (competency, adaptation, language or general practice); incidental scenario use may be recognized only for a distinct activity. Example 160 eligible general-practice hours yield four marks; 160 calendar hours without practice yield none. Resolve at session review or summarized downtime in chronological order. No real-world time advancement.

### 5.7 Unified progress records
Use one development project schema and shared time ledger, with distinct outcome types: competency next level, adaptation milestone, language modality, general skill practice, career retraining (a project classification, not an extra reward). Fields: project ID, character, type, target/context, prior state, requirements, resource/instructor, planned and credited active hours, evidence IDs, assessment, state, timestamps, GM approval, outcome transaction ID. States planned/locked/ready/active/paused/assessment pending/completed; CCDD-12/19 gates apply to competency projects; language follows Section3; adaptation and general practice follow this section. Structured active projects consume shared current-era CCDD slots; career retraining also respects subset limit. Incidental scenario marks do not consume a slot or create training hours. Each time entry allocated once; each evidence/outcome transaction idempotent; no duplicate reward for same work. Failed assessment preserves eligible hours, requires corrective practice; general advancement failed roll consumes mark as distinct rule. Completion atomically updates only the relevant outcome: competency level/CDR, deficit, language modality or general mark. No legacy specialization-stage bonus or separate +0/+5/+10/+15 track; migrate historical labels to canonical competency IDs with documented equivalence and GM validation, never add bonuses or automatically grant CDR from ambiguous records. CCDD-20 +0/+5/+10/+15/+20 remains authoritative. Pausing releases slot and retains credit; transitions preserve history and earned state, reevaluate access and capacity. Standard may summarize time, Advanced itemizes, Simulation adds scheduling/resources; all use same outcomes and no double credit.

### 5.8 Advancement wording
Replace garbled historical wording with: underlying general skill cannot exceed99 through advancement; a possible uncertain D100 task has final target1–99, natural100 is always critical failure, natural01 critical success. At underlying99 no further general skill advancement is awarded. Attribute cap100 remains separate. Routine and impossible tasks follow R01 before rolling.

### Section 5 acceptance
All eight issues resolved at working specification level. Existing CCDD formulas, catalogue IDs, occupational grants and creation budgets unchanged. Eight-hour adaptation minimum and 40-hour general practice checkpoint are provisional delegated calibration. Historical fixed specialization counts, old stage bonuses and ambiguous deficit column labels are superseded. Verify milestone boundaries, transfer relevance, origin-era creation, duplicate time/evidence, sequential advancement and slot limits; actual campaign balance and software implementation remain production requirements.

## 6. Occupations and roster — working specification

### 6.1 Occupation IDs across settings
Retain all 352 stable O-profile IDs; introduce 335 shared career identities keyed by family and normalized occupation name, with stable CAREER identifiers derived from first existing profile ID. Seventeen repeated names share identities across settings; each profile retains its own allocation, baseline grants, setting and history. Do not merge unrelated roles by similar spelling. New variants reference existing career ID; never renumber published IDs. Setting is recommendation, not an era lock.

### 6.2 Specialization catalogue
OCCUPATION-INDEX.json provides structured career identities, profiles and descriptive specialization tags. 1,057 label occurrences normalize to 862 unique tags; 26 have exact canonical competency title matches. Tags are search/role descriptors, never independent skills, levels, bonuses or grants. Canonical competency IDs in SKILL-NOTES.md remain authoritative for governing skill and justified alternate applications; baseline grants and career targets in OCCUPATION-PACKAGES.md remain authoritative. Exact title matches are candidate associations, not automatic entitlement. All 836 unmatched tags now explicitly default to descriptive-only; 225 tags have nonbinding lexical/context review candidates. Exact-title references and candidate associations grant nothing. Individual semantic confirmation remains outstanding; no claim of completed semantic mapping. Do not infer equivalence from token similarity.

### 6.3 Anomaly Researcher availability
O-104 is available in all three settings when optional anomaly content is enabled; its DZ profile remains the existing roster entry. For BP or SL use the same ordered five skills with current origin-era allocation weights, validated history and applicable access. No automatic supernatural knowledge or additional occupation ID. Ordinary scientific investigation remains available without anomaly content.

### 6.4 Career example table
Criminal to Civilian Merchant is a legitimate family change, not a Criminal occupation. Label the example explicitly as cross-family progression; no free grant or automatic authority.

### 6.5 Individual occupation profiles
Structured index contains all 352 profile records, ordered primary allocations (six flexible status-only profiles), alternative skills drawn from existing baseline grants, specialization tag IDs, baseline grants, qualification/authority text, conditional occupational contact/familiarity advantage, competency resource references and adaptation context. These are generated working profile skeletons, not individually authored or validated sourcebook profiles. No automatic ownership, credential or advantage bonus. Actual advantage, equipment quantities, alternative allocations, specialization associations and concrete adaptation examples require individual editorial review; no claim that generic fallback text satisfies that requirement. Preserve source package data and validate any proposed change against CCDD-12/19/22.

### Section 6 acceptance
Identity model, structured index, anomaly availability and career example resolved. Individual semantic tag mapping and sourcebook profile calibration remain open; Section 6 is not fully signed off. Generated index is a derivative of existing package/catalogue data, not an independent rules authority. Maintain stable IDs and regenerate or reconcile when authoritative records change.

## 7. Equipment, economy and survival
### 7.1 Equipment statistics [Approved 2026-11-25; US customary units clarified by owner 2026-11-25 — provisional calibration, playtest required]
Every item definition carries the F17 fields unchanged, plus the game statistics the manuals need:
- *Identity:* stable ID, name, category, description, rules references.
- *Physical:* actual mass in pounds (lb) and ounces (oz) per unit, unit and quantity, compatibility (ammunition, power, parts). Optional **bulk** 0–3 for awkward items whose difficulty to carry is not captured by mass (0 normal, 1 awkward, 2 two-handed or large, 3 needs a vehicle or team). Bulk is off by default and used only in Advanced or Simulation play; Standard uses mass against the F17 load bands.
- *Records (F17, unchanged):* instance or lot ID, owner, custodian, location, access, condition (usable / degraded / unusable), maintenance state.
- *Use:* required skill or competency, power or consumable needs, uses per unit where relevant.
- *Harm and protection (Section 4.2, unchanged):* harm profile by generic category (unarmed or improvised D4, light hand weapons D6, heavy hand weapons, bows and handguns D8, long guns D10), feasible range bands with inherent R03 difficulty per band, armor rating 0–3 and the harm types it covers. No real-world model statistics.
- *Tools:* normal difficulty assumes suitable tools. Improvised tools are a −10 situational modifier, no tools −20 or infeasible, using the R03 ladder. A good kit removes the penalty but never adds a bonus.
- *Condition effect:* degraded is a −10 situational modifier to tasks that rely on the item; unusable means it cannot provide its function. Wear events stay explicit (F17).
- *Economy:* reference price in actual currency (A2), optional price tier, availability per era (Common / Restricted / Rare / Unavailable for Blackbox Protocol, Signal Lost and Dead Zone).
Original problem statement: Item record format, weapon and gear stats, availability tiers by era and condition rules.
### 7.2 Currency and prices [Approved 2026-11-25 — user decision; provisional calibration, playtest required]
Contemporary currency:
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

Signal Lost and Dead Zone economy:
- Every market is an F18 market record: accepted currencies and goods, and a scarcity state per item category set by the GM from local conditions: plentiful, short, scarce or unavailable.
- *Signal Lost:* currency persists where the market accepts it. Suggested ranges for the GM's local multiplier on the reference price: plentiful ×1, short ×2–5, scarce ×5–20, unavailable means no sale. Different markets in the same campaign can differ.
- *Dead Zone:* default is barter and local accounting (scrip, ledgers, labor credit), set per settlement. Barter records both legs per F18; values come from local need, with no forced equal value. As a GM aid only, the book may suggest pricing goods by how many days of food they would fetch in that market. This is a local reasoning tool, not a currency or a fixed rate.
- *Starting resources* in SL and DZ come from history and what actually survived: possessions, stores, skills that can be traded for labor, relationships and debts. There are no free replacement goods (F02.05).
- *Labor as value:* employment and labor exchange use the F18 employment record. The book gives example local rates as illustrations only.
Original problem statement: Currency scale, BP price list, SL mixed currency/barter, DZ barter values; starting purchasing allowance.
### 7.3 Survival consumption [Original baseline approved 2026-11-25; simulation issue #5 correction drafted 2026-11-25 — pending owner confirmation and human playtest]
Adds a shortage counter on top of F20 and expresses every effect through the existing Section 4.3 condition penalties and 4.4 pressure events. No HP loss, no new dice, no mortality timetable.
- *Demand (F20, unchanged).* 1 food and 1 water ration unit per character per day. The GM declares altered demand before the interval (for example heat or heavy exertion doubles water; cold without adequate shelter doubles food).
- *Daily review (playtest correction to the original F20 interaction).* For each category, calculate the fraction of that day's declared demand supplied, from 0 to 1. An entirely unmet category costs 5 stamina; a partially met category costs 5 × missing fraction, rounded up to the next whole stamina point (half ration = 3). Record stamina lost to shortage separately as **unrecovered shortage loss**; ordinary sleep or rest cannot restore that portion while that category has a positive shortage counter. Other stamina recovery is permitted up to maximum stamina minus unrecovered shortage loss. When both shortage counters reach zero, the protected shortage loss becomes recoverable at ordinary rates; it is not immediately refunded. Do not charge this loss twice in the same daily review.
- *Fractional shortage counters (playtest correction).* Keep a nonnegative counter for each category, allowing quarter-ration precision. Each day add the **missing fraction** of declared demand. On a fully met day, instead subtract **0.25** (minimum 0), representing gradual recovery; a full ration is not surplus and does not erase an entire missed day. A day of partial intake does not subtract counter points. Fractions below quarters may be tracked exactly if the scenario needs them. This replaces the binary +1/−1 rule and blocks alternate-day full-ration cycling. This is an intentionally game-friendly recovery rate, not a physiological model.

| Condition | Water counter | Food counter | Effect (4.3 scale) |
|---|---:|---:|---|
| Deprived | 2+ | 4+ | Moderate: −10 to physical tasks. No HP recovery. |
| Severely deprived | 3+ | 7+ | Severe: −20 to physical tasks and to tasks needing sustained concentration. No HP recovery. Sleep restores no stamina and does not count as adequate sleep for 4.4 stress recovery. The first time a character reaches this condition in an episode it is a moderate (10) pressure event under 4.4. |
| Critical deprivation | 5+ | 21+ | Critical: −30 or infeasible, as for a critical injury. The GM **may** declare a life-threatening condition, resolved through 4.3 instability with a recorded reason. This is the only route to death. |

- *No double counting.* Deprivation conditions are injury-type conditions for 4.3's "highest applicable penalty once" rule, so they never stack with an injury penalty on the same task. Stress band penalties stay separate, as in 4.4.
- *Recovery.* Conditions fall away as the counter drops below each threshold. Once both shortage counters reach zero, unrecovered shortage stamina loss can be restored by normal 4.3 recovery; HP and stress recover when their other prerequisites are met. Severe deprivation still prevents all sleep-based stamina recovery as specified above.
- *Other supplies (replaces the four-slot prototype).* Ammunition in Standard mode is tracked as uses, with one use spent per encounter in which a ranged weapon is fired; Advanced counts individual loads. Medical supplies: one use per stabilization attempt or daily care assessment (4.3). Repair supplies: one use per repair project (B2).
- *Shelter, sanitation and energy* stay as declared conditions and feasibility limits (F20), with exposure harm under F19 and 4.2 environmental harm.
*Simulation check examples:* Zero water for two days gives water counter 2 (Deprived); half water for two days gives counter 1 (not yet Deprived); full water every other day for four days gives counter 1.75, continuing to accumulate over time rather than resetting. Two days without water followed by eight fully supplied days clear counter 2. Thresholds and the 0.25 recovery rate remain provisional for human playtesting.
Original problem statement: The four-slot ration model is a prototype. Decide consumption rates, deprivation intervals and effects.
### 7.4 Crafting and construction math [Approved 2026-11-25 — user decision; provisional calibration, playtest required]
Keeps the F21 contract as written: progress = min(1, credited labor ÷ required labor), an elapsed minimum, and **one** D100 at the point of meaningful uncertain completion (no roll per hour or per interval). What this adds is the numbers a recipe needs.
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
Original problem statement: F21/F22 define project fields but not time, difficulty or quality outcomes.
## 8. World state, settings and continuity
### 8.1 Era thresholds [Approved 2026-11-25 — user decision; provisional calibration, playtest required]
Regional indicators inform eligibility; the GM decides; thresholds are guidance. Uses the F02.07 twelve indicators and 0–6 scale (6 operational, 0 nonfunctional), which are hereby confirmed.
- **Signal Lost eligible** when, in the region, at least 4 of the 12 indicators are at 3 (severely degraded) or lower for 14 consecutive days, or any two of electricity, communications, water and government are at 2 or lower for 7 days.
- **Dead Zone eligible** when at least 8 indicators are at 2 (critical) or lower for 365 days and no outside restoration is expected.
- One region can be Signal Lost while another stays Blackbox Protocol. Recovery raises local indicators but never moves a campaign back an era.
Original problem statement: Default world-indicator levels that make a campaign eligible for Signal Lost or Dead Zone.
### 8.2 Dead Zone timeframe [Approved 2026-11-25 — user decision, revised same day]
Default Dead Zone campaigns are set 2–15 years after collapse onset. Distinguish adults raised during the collapse from children born after it. Early (2–4 years): most adults are transitional survivors; Refugee and Retired Specialist natural; stores partly usable. Mid (5–9 years): native trades emerge among people who were teenagers or young adults at onset; scarcity settles. Late (10–15 years): adults raised during the collapse (children or teenagers at onset) have learned their trades entirely afterwards; anyone born after onset is at most 15 and is not a default adult character; settlements rebuilding, old consumables rare. Beyond 15 years is a GM variant; adult characters born after onset become possible from about 18 years. GM may choose any date (F02.05). Remaining manual-drafting gaps are tracked in [GAP-REGISTER.md](GAP-REGISTER.md).
Original problem statement: No default for how long after onset Dead Zone takes place. Native DZ tradespeople imply a decade or more; Refugee and Retired Specialist imply recent collapse. Set a default range and early/late DZ guidance.
### 8.3 Official collapse scenarios and canon [Approved 2026-11-25 — user decision; provisional, playtest required]
Three original scenarios, each complete on its own; a campaign uses one, combines them or replaces them (F02.04). Each is written in C1 terms, so the GM can see when Signal Lost and Dead Zone become available. Working names only.

**1. Cascade** — infrastructure failure.
- *Onset:* fast. A regional grid failure spreads through linked systems during an extreme-weather event; repairs are slowed by damaged control systems and long-lead replacement parts.
- *Stages:* days 1–3 electricity and communications drop to 1–2, water and fuel distribution follow; weeks 1–2 healthcare, transport and food distribution reach 2–3 (Signal Lost eligible); months 2–12 partial restoration in some regions while others stay dark; DZ only where restoration fails for a year.
- *What survives:* buildings, vehicles without fuel, stored goods, local generators, people's skills. Batteries and refrigeration fail first.
- *Recovery hooks:* local microgrids, fuel rationing, repairing substations, manual water systems.
- *Early warning signs (for Zero Day):* rolling outages, falsified maintenance records, unexplained control-system faults.

**2. Quiet Spread** — disease and supply-chain failure.
- *Onset:* gradual. A severe, fictional respiratory illness with no named real pathogen. Absenteeism hollows out the workforce before services fail.
- *Stages:* months 1–2 healthcare reaches 2, emergency services 3; months 3–6 transport, food distribution and industrial production fall as workers are sick or caring for family (Signal Lost eligible); year 1+ population stability and government decline; DZ where depopulation makes services unsustainable.
- *What survives:* infrastructure is physically intact but unstaffed. Power and water may run for months on automation and skeleton crews.
- *Recovery hooks:* staffing skeleton services, quarantine-zone trade, training replacements, clinics. Tone stays grounded; there are no zombies (F25).
- *Early warning signs:* clusters of illness, overloaded clinics, rumours dismissed by officials.

**3. Insolvency** — financial and state failure.
- *Onset:* stepped. A financial crisis leaves governments and utilities unable to pay staff or suppliers; currency loses trust.
- *Stages:* months 1–3 economy 2, public order 3–4; months 3–9 government, emergency services and utilities degrade as workers go unpaid (Signal Lost eligible); year 1+ local authorities, companies and communities fill gaps unevenly; DZ where no authority restores services.
- *What survives:* everything physical. The collapse is of organization and money, which suits the A3 local-currency and barter rules.
- *Recovery hooks:* local scrip, cooperatives, private security, community governance, reopening services under new owners.
- *Early warning signs:* missed payrolls, bank limits, contracts quietly cancelled.

**Recurring organizations (proposal).** Three original bodies with faction sheets for each era: a regional infrastructure contractor, a private security and logistics firm, and a civic emergency-volunteer network. Each scenario gives them a different role. **CindrixOps:** recommended as the optional name of the infrastructure contractor, with lore limited to what Jason writes or approves. Jason confirms or removes it.

**Not included by default:** a climate/compound-disaster scenario and an anomalous cause. The GM can build these from the same template, and the anomalous cause belongs to the Anomaly Compendium (D2).
Original problem statement:
F02.04 approves official scenarios but none are named. Also needed: recurring fictional organizations, factions, regions and CindrixOps lore decision.
### 8.4 Settlements and factions [Approved 2026-11-25 — user decision; provisional, playtest required]
No settlement or faction rating is tracked separately. Each one is read off records that already exist.
- *Service units (fills the F22 unit gap).* One unit meets one day's need of 10 people for water, sanitation or food distribution; one patient under care for healthcare; 5 students for education; one worker-station for workshops.
- *Settlement service rating* uses the F02.07 0–6 scale and is calculated from the F22 delivered ÷ demand ratio for that service: 6 at 100%, 5 at 90% or more, 4 at 75%+, 3 at 50%+, 2 at 25%+, 1 above 0, 0 at none. The settlement's ratings are its local world-state indicators (C1), so no second scale exists.
- *Labor capacity* = the sum of hours members actually commit per week (default 40 for a full-time worker), recorded in the F11 time ledger. Facility staffing, upkeep and projects draw from it; nobody's hours are counted twice (F22, F23).
- *Upkeep.* Medium and larger facilities need 10% of their construction labor hours per month as a B2 maintenance project. Without upkeep, installed capacity falls one step per month: usable, then degraded at half capacity, then unusable.
- *Morale (0–6).* The one GM-set value, but it moves only on recorded events at each review: −1 when any essential service (water, food, healthcare) is at 2 or lower, or after a death or violent event; +1 after a completed project that raises a rating, a celebration or a resolved dispute. Morale 2 or lower is a GM cue for departures, disputes or a 4.4 pressure event for residents, never an automatic outcome.
- *Review interval* on the F24 clock: weekly in Signal Lost, monthly in Dead Zone, plus whenever a major event occurs.
- *Factions (F23).* A faction's strength is read from its ledgers: members, labor hours, stock and facilities, with no separate score. Each review, a faction may pursue one objective using the F23 progress clock (targets 4 minor, 6 significant, 8 major, 12 regional), spending real labor and stock. A step advances only on an evidenced milestone; where the outcome is uncertain, the GM rolls one check with the faction leader's relevant skill. Review intervals match settlements: monthly in Blackbox Protocol campaigns, weekly in Signal Lost and monthly in Dead Zone.
Original problem statement:
Numbers and procedures for settlement records (F22) and faction actions (F23).
### 8.5 Contemporary setting home
SL and DZ have setting books; BP setting content lives in the Core Rulebook. Keep it in a clearly separate part of Core.

## 9. Terminology and documentation
### 9.1 Game versus era name [Approved 2026-11-25 — user]
In rules text the contemporary era is "the Blackbox Protocol era"; "Blackbox Protocol" alone means the game.
Original problem statement:
"Blackbox Protocol" is both the game and the contemporary setting. Consider a distinct era label for rules text.
### 9.2 Software name capitalization [Approved 2026-11-25 — user]
"BlackBox" for all software (BlackBox GM Command, BlackBox OS, BlackBox Player Display, BlackBox Character Companion); "Blackbox" for the game and its books.
Original problem statement:
"BlackBox" (software) and "Blackbox" (game) are both used. Pick one (G18).
### 9.3 Glossary [Approved sequencing 2026-11-25 — user]
Complete the glossary and rules index (9.4) after the remaining design decisions, before manual production.
Compiled 2026-11-25 in [GLOSSARY-AND-RULES-INDEX.md](GLOSSARY-AND-RULES-INDEX.md) Part 1; maintain as rules change.
Original problem statement:
Add a glossary of defined terms (G18).
### 9.4 Rules index and ownership
Assign stable rule IDs and one owning book per mechanic. F20–F22 currently list two or three books each without an owner; Survival Handbook and Dead Zone overlap.
### 9.5 Foundation folder
docs/foundation holds only F01, F02 and a stale summary. Add F03–F37 files or make the summary an explicit index, and update the summary (F04–F10 status, attributes, roster).
### 9.6 Publication placeholders
Add to each: owned mechanics, dependencies, audience and length. Update stale lines in Core and Quick-Start ("roster pending", "no final dice thresholds").
### 9.7 Dice tray description [Approved direction 2026-11-25 — user]
Verify actual repository and implementation status of the dice tray before describing it in manuals.
Compiled 2026-11-25 in [GLOSSARY-AND-RULES-INDEX.md](GLOSSARY-AND-RULES-INDEX.md) Part 2, assigning one owning book per mechanic (resolves the F20–F22 overlap: Survival Handbook owns survival and crafting tables, Dead Zone owns construction and settlements, Core owns procedures).
Verified 2026-11-25 against the repository: dice-tray/ on main (merged in PR #1) is a Svelte/Tauri app ported from Catalyst with a Windows build workflow and an Android build workflow, a custom 100-faced D100, D20 quick roll, and unit tests. Whether signed or store-distributed builds exist is not recorded, so manuals should describe it as an optional companion dice roller and not claim distribution.
Original problem statement:
Notes describe a Windows and Android dice roller; confirm current scope and status of the Android app.
### 9.8 Changelog
Add dated entries going forward; every current entry is dated 2026-11-24.

## 10. Sourcebook readiness
Approved creative directions 2026-11-25 — user:
- Zero Day: a grounded contemporary investigative thriller that teaches the system through an escalating incident, introducing investigation, social interaction, competency use, equipment, uncertainty and optional combat; combat is never required to complete it. It may show subtle warning signs of a possible Signal Lost campaign without forcing the transition. Plot, NPCs and clue graph to be drafted for approval (GAP-REGISTER D1). Drafted and approved 2026-11-25 as [ZERO-DAY-BRIEF.md](ZERO-DAY-BRIEF.md) (premise "Dead Air", seven NPCs, four locations, clue routes).
- Anomaly Compendium: twelve original anomalies, two in each of psychological, technological, biological, environmental, paranormal and cosmic. Each has a grounded explanation, an ambiguous interpretation and an optional supernatural explanation, using the F25 dossier and existing rules only. Concepts to be drafted for approval (GAP-REGISTER D2). Drafted and approved 2026-11-25 as [ANOMALY-CATALOGUE.md](ANOMALY-CATALOGUE.md).
- Completion order: equipment and economy, survival and crafting, era thresholds and timeline, scenarios/organizations/settlements, Zero Day and anomalies, terminology/glossary/rules index, then manual production starting with the Core Rulebook. Licensing stays deferred until pre-release. Preserve established mechanics; no second difficulty system; no new comprehensive foundation audit.

Status as of the 2026-11-24 review. Homebrew Creator's Guide: mostly ready (needs F30 licensing and data formats). GM Handbook: advisory chapters ready (needs world-state thresholds, faction and event procedures). Investigation Handbook: partly (needs 3.2 and clue procedures). Transition Handbook: partly (needs 5.1–5.6). Core Rulebook, Quick-Start Rules, Equipment Compendium, Survival Handbook, Signal Lost, Dead Zone, Zero Day and Anomaly Compendium: blocked on sections 2–8 and on Zero Day's plot, NPCs and clue graph and on anomaly definitions.


## Core resolution specification — audit items 2.1–2.6
Status: delegated working rules, subject to playtest. Owns universal resolution; combat, psychology and project-specific systems reference these rules rather than duplicate them.
### R01 Direct attribute checks
Use full effective attribute for uncertain raw capacity (STR lifting within plausible limits, CON resisting physical strain, WIL maintaining composure, PER noticing an immediate stimulus, DEX reflex, INT reasoning, PRE raw social presence). Use skill when learned technique materially determines outcome. No substitution merely to obtain higher target. GM determines applicability and stakes before roll. Apply difficulty and distinct contextual modifiers once, clamp 1–99; impossible and routine actions resolved without roll. Same degrees and opposed rules as skills. Example STR65 challenging -10 gives55; roll22 strong. Deception normally opposed by appropriate learned skill (pending 3.2), or PER for immediate observation; never automatically reveals truth. 
### R02 Assistance, retries and extended checks
One lead rolls; up to two relevant helpers each grant +5 if able to materially contribute, total +10. No helper roll for routine contribution; if independent risky task needed resolve separately, do not also award bonus for same contribution. Helpers share applicable consequences. No assistance where space, knowledge or circumstances prevent it. Example skill55 plus two helpers and difficult -20 gives45.
Retry only after changed circumstances, new information, new resources or meaningful additional time with a declared cost. No repeated identical rolls. Optional push: once per failed noncritical check, if plausible, declare extra risk and cost before rolling again at same target (or changed target only if justified); second failure incurs declared consequence, critical failure cannot be pushed. Original consequences already incurred remain; no push for instantaneous irreversible events or opposed checks unless new contest. No essential clue gated by retry.
Extended tasks: GM defines goal, prerequisites, lead skill, interval, progress target (3 simple, 6 substantial, 10 complex as defaults), deadline and consequences before work. Each interval consumes actual time/resources. Critical success +4 progress, exceptional +3, strong +2, standard +1, failure 0, critical failure 0 and declared setback (normally lose 1 accumulated progress, minimum0, or equivalent cost, not both by default). Finish at target; no overflow benefit unless specified. Stop/resume retains progress unless deterioration justified. No additional roll for same work interval; routine work may grant 1 progress per interval without roll. Project-specific time/material/quality tables remain item7.4. Example target6, strong2, failure0, exceptional3, standard1 completes after four intervals. Combined skills: select lead skill when one dominates; distinct sequential prerequisites use separate checks only when each has meaningful stakes; parallel contributors use assistance; if inseparable equally essential competencies use lower effective target, one roll. Never average to bypass prerequisites.
### R03 Difficulty and modifier handling
Add -30 severe between -20 difficult and -40 extreme. Full ladder +30 very easy,+20 easy,+10 favorable,0 standard,-10 challenging,-20 difficult,-30 severe,-40 extreme. Choose one difficulty for inherent task, add distinct situational modifiers (including applicable specialization, assistance, adaptation, attribute adjustment); do not double count. Clamp final target 1–99 only after sum. No universal extra modifier cap beyond specific limits and final clamp. Routine/impossible determined first.
### R04 Circumstance D20
Optional, GM declares before D100 only when an independent uncertainty matters (e.g. time, external interruption, collateral resource cost), not routine checks or every attack. Roll together if convenient or immediately after D100, independent dice. 1–3 major complication 15%; 4–7 minor 20%; 8–17 neutral 50%; 18–20 opportunity 15%. Declare plausible consequence categories before rolling; respect primary result, no arbitrary injury or automatic reversal. On failure opportunity may offer new information or alternative path, not retroactive success. If no plausible independent outcome, omit die. Example successful repair with minor complication consumes extra spare part if available; repair still succeeds. GM may omit throughout campaign. 
### R05 Psychological pressure
Remove separate D20 pressure die proposal. Use existing D100 attribute/skill resolution and dedicated stress/resilience records; no new universal die. Exact stress accumulation, thresholds, recovery and trauma remain item4.4, not resolved here.
### R06 Probability reference
For effective target T in 1–99, critical success 1%; exceptional max(0,floor(T/5)-1)%; strong max(0,floor(T/2)-max(1,floor(T/5)))%; standard T-max(1,floor(T/2))%; ordinary failure 99-T%; critical failure 1%. Highest category takes precedence. Success total T%. Example T=1: only critical success; T=99: 99% success, 1% critical failure. 
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
Difficulty example base60 targets 90/80/70/60/50/40/30/20 across ladder; each target is total success percentage. Opposed probabilities below enumerate all 10,000 independent D100 pairs, category then signed margin, tie status quo; both fail means neither achieves intended action. Relative-only contest may compare failed rolls separately, not counted as success here.
| A target | B target | A wins % | B wins % | Successful tie % | Both fail % |
|---:|---:|---:|---:|---:|---:|
| 30 | 30 | 25.35 | 25.35 | 0.30 | 49.00 |
| 30 | 60 | 18.74 | 53.11 | 0.15 | 28.00 |
| 50 | 50 | 37.25 | 37.25 | 0.50 | 25.00 |
| 60 | 40 | 50.32 | 25.46 | 0.22 | 24.00 |
| 75 | 75 | 46.50 | 46.50 | 0.75 | 6.25 |
| 90 | 50 | 72.63 | 22.12 | 0.25 | 5.00 |

D20 independent outcome probabilities above; joint probability multiply, e.g. target60 success and major complication 0.60×0.15=9%. Probability enumeration is mathematical verification, not playtest. Test boundaries 1/99, overlapping modifiers, retries, helper limits, both-fail contests and project interruption. 

## CCDD — Career and Competency Development System (2026-11-24)
Status: architecture approved by user; numerical defaults below delegated working proposals, playtest required. This section takes precedence over conflicting earlier specialization limits, unrestricted access language and stage descriptions. Preserve historical decisions for traceability. Do not treat outstanding catalogue work as complete.

### CCDD-01 Scope and hierarchy
Blackbox Protocol is an open-world multiscale RPG: individual, group, operational and strategic play. Any plausible role or campaign objective is permitted; no mandatory collapse or storyline. Career development supports civilians, professionals, specialists, organizational leaders and senior officials. Retain seven attributes, D100 general skills, fourteen occupational families and persistent character history. Learning resources enable specialized competency training; competencies belong to one or more learning tracks; tracks form recommended career paths. Occupations are actual roles, not classes. Qualifications and authority are separate from knowledge. No permanent class locks, but realistic access restrictions. No real-money purchases or real-world waiting requirements.

### CCDD-02 Canonical catalogue
Each competency has stable ID, name, scope, governing general skill, justified alternative applications, track IDs, career path IDs, access requirements by level, prerequisite IDs and minimum levels, complexity, incremental training hours, acceptable resource types, practical equipment, supervision, assessment, contextual bonus, qualification links, setting availability and adaptation contexts. One competency record shared across tracks and settings; aliases reference same ID. Tracks contain ordered or branching recommended competencies; career paths reference tracks and occupation eligibility requirements. Neither track nor path grants automatic bonuses. Validate prerequisite graph for cycles and missing references. Homebrew uses same schema and separate namespace. Existing 352 occupation entries and approximately 1,050 specialization labels are input for deduplication, not a finished catalogue.

### CCDD-03 Access gates
Five classifications: Open (ordinary access); Resource Restricted (appropriate materials, tools or instruction); Prerequisite Restricted (existing competencies); Occupational Restricted (employment, institutional membership, academy enrollment or authorized equivalent training); Qualification Restricted (formal education, credentials, authorization or supervised professional experience). Multiple gates may apply simultaneously, with explicitly defined alternative routes. Check gates before starting each level and when relevant circumstances change. Open does not mean free equipment or instant learning. Restricted knowledge may be learned through a credible alternative instructor or recovered resource if the GM determines that the specific gate is satisfied; possession of a manual alone does not waive practice, supervision or qualification requirements. Former professionals retain earned knowledge after leaving employment; loss of access may pause further training, loss of authority does not erase competency. Apply to NPCs as well.
Examples: general interviewing and criminal law open; investigative interviewing and basic evidence preservation resource restricted; departmental evidence handling, police patrol and departmental communications occupational restricted; criminal investigation prerequisite restricted; forensic pathology qualification restricted. Distinguish general transferable knowledge from institution-specific procedures. Police Evidence Handling: Forensics, technical, Basic Evidence Preservation II prerequisite, academy/department/qualified equivalent instruction. This is illustrative pending catalogue review.

### CCDD-04 Starting characters
Choose setting, concept, attributes, occupation family and occupation, campaign-approved career experience, competency package, personal backgrounds and competencies, qualifications, resources, relationships and goals. A qualified police officer starts with completed academy and field training; a surgeon with prior professional education; a senior commander with appropriate prior experience and appointment. Trainee campaigns optional. Experience tiers are descriptive, not levels: trainee, qualified, experienced, specialist, supervisor, senior leadership, executive leadership. Not every occupation uses every tier. GM sets campaign scope and permitted experience, authority and resource tier. Starting package grants documented competencies and satisfied historical prerequisites without replaying years of training; record credentials and actual authority separately. Package must include prerequisites or explicitly document equivalent prior learning. No automatic ownership of institutional assets.
Replace old total 3/5/7 specialization limits with occupational package plus personal competency allowance. Working default: retain 1/3/5 additional personal competencies at Level II for BP/SL/DZ natives respectively, subject to access and credible history; retain existing general skill point budgets provisionally, review balance against package depth and breadth. Prior primary two-specialization limit superseded. No automatic new package or free personal competencies on transition. Secondary occupational backgrounds require credible prior experience; their full package sizes and budget interaction remain audit work. Starting packages must be calibrated by campaign tier and practical usefulness, not identical number of entries. Seniority is not universal superiority.
Illustrative qualified police officer package: Criminal Law III, Patrol Procedures III, Report Writing III, Interviewing II, Evidence Handling II, Emergency Response II, Conflict De-escalation III, Police Communications III, First Aid II; include prerequisites in final data. Detective emphasizes investigation and evidence; chief emphasizes leadership, administration and budgets. Appointment is separate from eligibility. No finalized individual profiles yet.

### CCDD-05 Training levels and resolution
Working levels: untrained +0; I fundamentals +0; II basic practical +5; III independent +10; IV advanced +15; V mastery +20 percentage points. Supersedes earlier bonus schedules; bonus applies only to relevant application, highest applicable specialization only, never stack overlapping bonuses or permanently raise general skill. Use R03 final target clamp and routine/impossible rules. A level never substitutes for equipment, credentials or authority. Advanced professional practice requires appropriate prerequisites and demonstrated experience. Level V is not superhuman.
Training complexity 1–7; illustrative foundational hours 4,8,16,40,80,160,320 respectively. Incremental level hours multiply foundational hours by 1,2,4,8,16 (total 31 times base). These are game calibration defaults, not real-world credential durations. Individual entries may override; professional education can require months or years, supervised cases and formal assessments beyond timer. Basic training should generally be accessible in hours/days. No automatic mastery on timer completion.
Example radio foundational 4 hours: incremental 4/8/16/32/64, total124. Training at four hours/day takes 31 days for all five levels, not 31 days for fundamentals. A player can stop at useful lower levels.

### CCDD-06 Learning resources and queue
Resource record: ID, title/type, supported competency IDs and level ranges, access/ownership, availability, condition, instructor capacity, language, equipment and supervision requirements. Books, manuals, courses, mentors, apprenticeships, libraries, research and recognized prior experience are alternative sources where appropriate. One resource may support many competencies; many resources may support one competency. Reading unlocks instruction, not automatic skill. In-game acquisition by purchase, loan, access, discovery or instruction; no player purchase required.
Queue record: character, competency ID, target next level, resource, prerequisites, planned/credited active in-world hours, practice evidence, assessment status, interruptions and GM approval. States planned, locked, ready, active, paused, assessment pending, completed. Validate access and prerequisite levels; credit only actual allocated in-world time; no simultaneous double counting of hours; preserve progress when paused; assessment failure retains earned hours, requires corrective practice before reassessment. Grant level only when time, practice and assessment requirements met. No real-world clock progression. Retain active specialization track limits 2/3/4 and occupational retraining 1/1/2 for BP/SL/DZ; unlimited queued and lifetime competencies. Track means active learning project for concurrency purposes, not an entire catalogue learning track; clarify terminology in glossary. Standard uses approximate time and milestones; Advanced tracks hours/resources; Simulation adds schedules, instructor capacity and supervised requirements. All use same competency outcomes.
General skill advancement remains experience-based pending audit 5.6/5.7; training can generate ordinary advancement evidence once, never automatic double credit. Adaptation deficits remain contextual, not skill loss; integrate adaptation milestones into queue as separate objectives and do not automatically award specialization levels for deficit removal. Exact reconciliation of deficit -25, milestones and downtime scaling remains open.

### CCDD-07 Career and world integration
A career path recommends learning tracks and qualifications, never forces sequence beyond actual prerequisites. Shared competencies count across paths; no relearning or duplicate bonuses. Police officer to detective: investigation track, homicide track, relevant experience, appointment. Teacher may learn investigative research, later crisis communications and settlement administration while retaining teaching. Medical path example: foundations (anatomy, physiology, terminology, asepsis), emergency medicine (assessment, first aid, emergency care, trauma, triage), clinical medicine (assessment, diagnostics, pharmacology, management), surgery and public health. Examples are game catalogue outlines, not real professional curricula.
Institutions have instructors, training capacity, facilities, resource access, credentials and recognition. BP formal institutions; SL disrupted institutions and emergency programs; DZ preserved archives, mentors, apprenticeships and reconstructed schools. Regional circumstances determine access, not automatic era-wide permission. Technical prerequisites persist even when legal institutions fail. Organizations may sponsor training, allocate budgets and establish schools. Preserve knowledge, qualifications and authority as separate records. GM controls world access and appointments.

### CCDD-08 Publication and software
Core Rulebook owns learning and creation rules; Quick-Start simplified packages and queue; GM Handbook access adjudication, career tier and institutions; Transition Handbook adaptation and continuity; SL/DZ era-specific resources and packages; Investigation/Survival/Equipment reference relevant competencies/resources; Homebrew guide catalogue schema; Zero Day pregens. Retain twelve initial publications; future specialized supplements and standalone adventures may expand catalogue without incompatible mechanics. GM Command manages catalogue, resources, calendar, institutions and assessments; OS displays career paths, prerequisite graph, queue and progress; printable equivalents mandatory. No software required, no silent state changes. No third-party game text or data copied.

### CCDD-09 Additional outstanding work (do not mark original audit items resolved)
A. Reconcile all earlier specialization stage, cap, access and creation text; update foundation index and publication outlines.
B. Build canonical competency/resource/track/path schemas and deduplicate roster; define all occupation packages by setting and experience tier, including prerequisites, qualifications and authority.
C. Calibrate package budgets, personal allowance, general skill interaction, secondary backgrounds, native/transitional balance, level bonuses and hours; test D100 outcomes and progression.
D. Define assessment procedure, training credit, prior learning, downtime scaling and deficit removal (original audit 5.1–5.8).
E. Define institution capacity, instructor eligibility, resource economy and access changes; add organization and strategic-scale resolution, rank/jurisdiction, delegation, budgets/logistics, persistent institutional activity, sandbox creation and standalone adventure standards.
F. Test ordinary civilian, qualified officer, senior commander, professional retraining, cross-career, restricted access, loss of employment, interrupted training, collapse transition, shared competency and homebrew cases. No sourcebook readiness claim until these and original outstanding items are resolved.

### CCDD-10 Dual learning tree presentation (user-approved direction)
Provide two primary catalogue views in print and software: General Learning Tree and Professional Learning Tree. General contains competencies accessible without occupational membership or professional credentials, including Open, Resource Restricted and Prerequisite Restricted entries where prerequisites do not themselves require professional access. Professional contains competencies or level-specific training requiring Occupational Restricted or Qualification Restricted gates, including inherited professional prerequisites. Classify by actual access gates, not occupation name or difficulty. General does not mean free, immediate or prerequisite-free. Professional branches organize by career and track; locked entries remain discoverable with access requirements and credible unlock routes. Starting packages unlock applicable competencies and record earned levels; subsequent access may be acquired through education, employment, authorized instruction or GM-approved equivalent. Loss of employment does not erase learned levels; authority remains separate.
General examples: agriculture, culinary arts, preservation, metalworking, construction, automotive, wilderness, communications, technology, medical foundations, business, social sciences, academic studies, general leadership. Professional examples: departmental police procedures, military institutional command, institutional intelligence procedures, clinical/surgical practice, commercial aviation, professional emergency services, legal practice, regulated engineering, government institutional procedures and regulated industrial operations. These are illustrative branches, not finalized catalogue entries or claims that every skill in those fields is restricted.
Both trees are filtered views of one canonical competency catalogue (CCDD-02), not duplicate records or separate advancement engines. Shared general prerequisites appear as cross-references in professional paths. If lower levels are public but higher levels restricted, show public levels in General and link restricted levels in Professional using the same ID and level-specific gates. Track membership alone never restricts a competency. Show name, level I–V, prerequisites, access status, resources and training time; GM adjudicates access. Preserve earned knowledge across settings; update access according to local institutions and resources. Printable charts must work without software. Add catalogue classification, cross-tree prerequisite validation and shared-ID tests to CCDD-09; individual entries remain pending.

### CCDD-11 Approved progression architecture and provisional numerical defaults
User approved retention of competency levels I–V, uncapped occupational packages appropriate to actual career history, limited personal starting points, accumulated development rating and level-based prerequisites with training efficiency. This section supersedes conflicting personal allowances in CCDD-04. Numerical calibration remains playtest-required.
Occupational packages have no artificial count or point ceiling; grant all competencies and levels justified by occupation, experience and qualifications, not every competency in the career branch. Patrol officer and detective share competencies at different levels; e.g. Evidence Handling II versus IV, Criminal Investigation II versus V (illustrative, not finalized profiles). Chief emphasizes administration and leadership rather than automatically mastering investigation. Personal starting budget BP10/SL15/DZ20; total cost at level L = complexity (1–7) times 1/2/4/8/16 for I–V. Upgrade costs difference between total costs; occupational granted levels free, optional additional levels pay difference. Access and prerequisites apply; personal IV/V require credible background and GM approval. No points granted at transition or after creation. General D100 personal budget remains separate. Levels retain contextual bonuses +0/+5/+10/+15/+20, nonstacking.
CDR = sum over unique acquired competency IDs of complexity ×100 × cumulative level multiplier (0,1,3,7,15,31 for unlearned through V). Count occupational and personal starting competencies, and subsequent completed assessed levels; award only difference on advancement. No spending, transfer, duplicate aliases, partial credit or direct task bonus. CDR measures accumulated education, not character level. Base active learning slots BP2/SL3/DZ4; CDR thresholds 0/10000/25000/50000/100000/200000/400000 grant total additional slots 0/1/2/3/4/5/6 respectively, not additive across thresholds. Starting packages count immediately. Maximum proposed slots 8/9/10. No lifetime cap; unlimited queued projects; start new learning immediately after creation if eligible. Existing career retraining concurrency 1/1/2 retained provisionally, within shared actual time budget. Study Methods extra slots proposal not adopted independently; avoid duplicate capacity mechanics. Slots do not generate hours. Pausing preserves progress. Retain CDR and progress across transitions; no free skills. Test whether professional packages create excessive capacity differences or incentives to collect cheap competencies.
Prerequisites are level-specific, all mandatory unless explicitly defined alternative routes. Prior level of same competency required for sequential advancement, but exclude it from prerequisite efficiency calculation to avoid automatic bias. For distinct required supporting competencies, compute mean surplus of attained level minus required level, floor to whole levels; if any unmet, training locked. If no supporting prerequisites, no discount. Advanced/Simulation training duration reduction = min(30%, 10% × floor(mean surplus)); Standard uses listed duration without discount. Round adjusted hours up to whole hour, minimum one hour; snapshot at start of level, no retroactive credit or repeated recalculation to exploit discounts. This is a delegated implementation default. Preserve practice, supervision, assessment and credential requirements; no reduction to mandatory real-world-equivalent professional requirements unless explicitly allowed. CDR unaffected by discount. Example Criminal Investigation III requires Criminal Law III, Evidence Handling II, Interviewing II; attained IV/III/III gives 10% reduction from 160 to144 hours; complexity4 advancement II→III adds 1600 CDR. Illustrative prerequisite progression I: II/I/I; II: II/II/II; III: III/II/II; IV: III/III/III; V: IV/IV/IV. Catalogue must validate no circular dependencies.
Training time guidelines (not entitlements): crisis 0–1h/day, full-time work 1–2, moderate duties 2–4, dedicated study 4–8, intensive program 8–10 where plausible. GM accounts for sleep, obligations, travel and recovery. Relevant practical experience can credit actual learning time once, subject to evidence; no repetitive farming. Printable records and software show CDR, next threshold, slots, prerequisites, duration, progress, assessment and access. Add tests for threshold boundaries, upgrades, starting packages, duplicate IDs, prerequisite surplus and no-prerequisite cases, discounts, interruptions and transition. Reconcile CCDD-09 and original audit items before publication; this does not complete catalogue or playtesting.

### CCDD-12 Mathematical reference and implementation contract
Status: detailed specification of CCDD-01–11; numerical defaults remain provisional pending balance testing. This is the authoritative calculation reference, not a separate advancement mechanic. Earlier fixed specialization counts and fixed active-slot limits are superseded by CCDD-11/12. All percentages applied to D100 targets are percentage points unless explicitly a training-time percentage.

#### Variables and lookup tables
- E: setting BP, SL or DZ. P(E): personal creation budget 10,15,20. S(E): base active slots 2,3,4. R(E): career retraining project limit 1,1,2 (provisional).
- c: integer competency complexity 1–7. L: acquired integer level 0–5 (0 unlearned). O: highest level granted by documented starting occupational history, 0–5. A: underlying governing attribute; G: underlying general skill.
- H(c): default foundational training hours. Catalogue may override H or incremental hours with documented reason.
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
For L>=1, M(L)=2^(L-1), Q(L)=2^L-1. M(0)=Q(0)=0. B(L)=5×max(0,L−1); the total increases by five per level from II onward, and is applied once, not added to earlier level totals. No character levels.

#### Creation and occupational package merging
1. Establish campaign setting, concept, approved career history and experience tier. Resolve all justified occupational packages, including documented previous careers. No artificial occupational competency count or point ceiling. Do not grant every competency in a career tree; grant actual training. Qualifications and appointments recorded separately.
2. Canonicalize IDs; for duplicate competency i across occupational packages, O_i=max(granted levels), never sum. Include required prerequisite competencies or documented equivalent prior learning, with GM validation. No free occupational package after play starts.
3. Choose final starting L_i>=O_i, at most V. Personal cost p_i=c_i×[M(L_i)-M(O_i)]. Sum p_i over unique IDs. Require sum<=P(E). Unspent points expire at creation; no negative cost or refunds from lowering occupational levels. Personal IV/V require documented history and GM approval; all access gates and prerequisites must be satisfied, including any personally purchased prerequisite. This is not a cost for acquiring actual qualifications or authority.
4. Calculate general skills separately: G_i=floor(A_i/2)+occupational general skill allocation+personal general skill allocation, creation cap85, existing 100 personal general skill points remain provisional. No CDR or competency point conversion to general skill points. Calculate CDR and slots only after final package validation.
Example BP personal budget10: complexity1 Cooking II costs2; complexity2 Food Preservation I costs2; complexity3 Navigation II costs6; total10. If occupational Evidence Handling II (c3) upgraded to III, cost3×(4-2)=6, not12. Duplicate package grants II and IV resolve to IV free if both justified. A civilian cannot purchase a restricted competency merely by having enough points.

#### D100 task integration
For a possible nonroutine task, T=clamp(G+attribute adjustment+B(L)+difficulty+assistance+other distinct situational modifiers-adaptation penalty magnitude,1,99). Attribute adjustment follows R03 and earlier attribute rule; use one highest applicable competency bonus, never sum overlapping competencies. Difficulty and other modifiers are signed; do not subtract a signed negative deficit twice. Roll D100 using R01–R06. Raw attribute checks remain separate. Access to training is not identical to permission to perform a task; actual technical prerequisites and resources determine feasibility. Example Forensics60, Evidence Handling II +5 =>65; IV +15=>75; V +20=>80, before other modifiers. Difficult -20 and one helper +5 at IV =>60. CDR never enters this formula.

#### CDR and capacity
For each unique acquired competency i: V_i=100×c_i×Q(L_i). Total CDR=sum(V_i). Upgrade from old level a to b adds 100×c×[Q(b)-Q(a)]; sequential a→a+1 adds 100×c×2^a. Recompute from canonical records as authoritative; cached totals are derived only. No partial training credit, duplicate aliases, spending or transfer. Prior training counts at creation. Temporary access loss, adaptation penalties or injury do not reduce acquired levels/CDR. Corrections to erroneous records require audit and recalculation.
| Threshold inclusive | Extra slots |
|---:|---:|
| 0 | 0 |
| 10000 | 1 |
| 25000 | 2 |
| 50000 | 3 |
| 100000 | 4 |
| 200000 | 5 |
| 400000 | 6 |
K(CDR)=largest extra-slot value whose threshold<=CDR. Capacity=S(E)+K. Next threshold is smallest threshold>CDR; remaining=max(0,next-CDR); progress within current band=(CDR-current threshold)/(next-current threshold)×100; at maximum show no next threshold. Slots do not multiply hours. Career retraining projects are a subset of active projects, not extra slots (implementation clarification); active total<=capacity and active career retraining<=R(E). Unlimited queued and acquired competencies. A project targeting a single next level occupies one slot; assessment pending occupies slot unless paused. Paused projects retain progress and release slot. If correction reduces capacity, GM selects projects to pause, no loss of learning.
Police officer partial illustrative package:
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
Total=13700, K=1, BP capacity3, SL4, DZ5. Next threshold25000, remaining11300. This is a partial example, not a complete occupational profile. Advancing Criminal Investigation II→III adds 1600, total15300; no slot increase yet. At 24999 BP capacity3; at25000 capacity4. At400000 or above BP8/SL9/DZ10.

#### Eligibility and prerequisite efficiency
For next target level t=L+1<=5, evaluate level-specific access gates, required supporting competency IDs and minimum levels r_j, actual acquired levels a_j, learning resource, tools/facility, supervision, available slot and available in-world time. Every mandatory prerequisite must pass a_j>=r_j. Explicit alternative routes are evaluated separately; GM records selected valid route before training, no averaging across alternatives. No self-dependency or duplicate prerequisite ID; prior level of target competency is mandatory but excluded from efficiency average. A higher unrelated competency cannot compensate for an unmet requirement.
For n distinct supporting prerequisites in selected route, surplus_j=a_j-r_j. If any negative, locked. If n=0 or Standard mode, d=0. Otherwise d=min(0.30,0.10×floor(sum(surplus_j)/n)). Advanced/Simulation only. Use integer arithmetic if desired: discount percent=min(30,10×floor(sum/n)).
Unadjusted incremental hours U=H(c)×2^(t-1), or catalogue-specific incremental override. Adjusted H_required=max(1,ceil(U×(1-d))). Mandatory supervised practice, credential durations and assessments remain separate non-discountable requirements; catalogue may explicitly distinguish discountable hours from mandatory hours, in which case total=adjusted discountable hours+mandatory hours, no double counting. Snapshot selected route, mode and discount when project starts; pausing does not reset it. No retroactive reduction for newly acquired prerequisite levels. GM-approved correction recorded, not silent.
| Criminal Investigation target | Criminal Law | Evidence Handling | Interviewing |
|---|---:|---:|---:|
| I | II | I | I |
| II | II | II | II |
| III | III | II | II |
| IV | III | III | III |
| V | IV | IV | IV |
Illustrative c4, target III: U=40×4=160h. Actual IV/III/III against III/II/II gives surplus1/1/1, mean1, d10%, required144h. Actual V/IV/IV gives mean2, d20%,128h. Actual III/III/II gives mean1/3, d0%,160h. Actual V/I/V fails Evidence Handling despite high average, locked. Standard always160h if eligible. CDR gain1600 regardless of discount. No prerequisite example c1 level I requires4h, no discount.

#### Training time, progress and completion
Undiscounted cumulative hours from unlearned through L = H(c)×Q(L), only when no overrides. From acquired a through target b, sum incremental hours, or H(c)×[Q(b)-Q(a)] without overrides/discounts. Example c2 H8: 8/16/32/64/128 incremental; cumulative8/24/56/120/248. Level II→IV requires32+64=96h before discounts. Each level independently checks prerequisites.
For each in-world interval, available training time T_available determined by GM after sleep, duties, travel, recovery and other activities. Allocate h_i>=0 to eligible active projects, sum(h_i)<=T_available; no double credit for same time. Credited hours C_new=min(H_required,C_old+h_i); progress=100×C_new/H_required. Record actual time and evidence; excess hours do not automatically roll into next level, which must separately qualify. If hours complete but practice/assessment outstanding, show assessment pending, not acquired. Failed assessment preserves hours; corrective practice and reassessment required, exact assessment rules remain audit work. Completion requires hours, practice, assessment and applicable qualification requirements; GM confirms, set L=t, recompute CDR and capacity atomically, release slot. No automatic next-level start unless eligible and GM-approved. No real-world elapsed time.
Example 144h project with 30h credited:20.83%; four hours/day allocated entirely requires ceil(114/4)=29 additional training days, assuming all days available and no extra requirements. Two active projects allocated 2h each/day consume4h total, not8. Paused project retains30h. Transition preserves progress and original duration; recheck resources/access before resuming, not automatic cancellation. Setting changes base slots only; CDR unchanged.
Daily time guidelines in CCDD-11 are advisory, not guaranteed. Standard can record equivalent milestone/time blocks; no automatic completion by session count. Advanced hours and resources; Simulation detailed schedules, capacity and supervision. Training may supply ordinary general skill advancement evidence once; CDR not awarded for general skill increases or adaptation milestones alone.

#### Reference pseudocode (language-neutral)
```
M(l) = 0 if l == 0 else 2^(l-1)
Q(l) = 2^l - 1
personal_cost = sum(c[i] * (M(level[i]) - M(occupational[i])))
assert personal_cost <= budget[setting]
cdr = sum(100 * c[i] * Q(level[i]) for unique acquired IDs)
extra = max(k for k in 0..6 if cdr >= threshold[k])
capacity = base_slots[setting] + extra
eligible = all_access_gates AND all_prerequisites AND resources
           AND supervision_if_required AND free_slot AND available_time
if eligible:
    surplus = sum(actual[j]-required[j] for selected distinct supporting IDs)
    discount_pct = 0 if standard OR n == 0 else min(30,10*floor(surplus/n))
    hours = max(1,ceil(base_incremental_hours*(100-discount_pct)/100))
    snapshot(hours, discount_pct, route, mode)
credit = min(hours, prior_credit + approved_allocated_hours)
if credit == hours AND practice_complete AND assessment_passed AND GM_approved:
    acquire_next_level()
    recompute_cdr_and_capacity()
    release_slot()
```
Mandatory nondiscountable hours and qualification gates follow prose above; pseudocode is reference, not production code.

#### Data, validation and publication requirements
Canonical catalogue: stable ID, label, complexity, governing skill, level definitions, per-level prerequisites/access routes, hours/overrides, resources, practice/assessment and qualification links, track/path memberships, era availability, aliases. Character: acquired levels and provenance, occupational package history, personal creation allocation, credentials/authority, active/queued/paused projects, time ledger, assessment evidence, derived CDR/capacity, version. Validate integer levels/complexity, unique IDs, prerequisite graph at competency-level nodes, valid alternative routes, nonnegative hours and costs, no over-allocation, no duplicate credit. Store formula version and catalogue version; migration must preserve earned levels and record any recalculation, never silently change progress. Print tables and worked examples in Core; GM Handbook adjudication; Transition Handbook continuity; software uses same canonical calculations.
Required tests: level0/V boundaries; complexity1/7; personal budget exact/exceeded and occupational upgrade; duplicate package merge; CDR 9999/10000,24999/25000,399999/400000; no prerequisites, fractional surplus, unmet gate, 30% cap, Standard discount zero; time rounding, pause/resume, shared time, assessment failure, qualification not waived; setting transition; loss of access; homebrew aliases/cycles; D100 clamp and nonstacking. Numerical examples are illustrative, not empirical education durations. No claim of completed catalogue, assessment design, balance playtest or software implementation.

### CCDD-13 Initial catalogue scope (approved)
Initial release target: 350 unique canonical competency skill books total, including both trees: 200 General and 150 Professional. Each has levels I–V (1,750 proficiency stages, not separate books). Shared across BP/SL/DZ; no duplicate IDs by setting, occupation, learning resource or tree. Mixed-access levels follow CCDD-10 cross-references and count once; classify for planning by whether any level requires professional access. Occupational starting packages draw from this catalogue at justified levels without consuming personal points or imposing an artificial package count cap. A skill book is a competency record, not necessarily a physical manual; learning resources may teach multiple competencies. Branch allocations are flexible planning targets; avoid filler and excessive fragmentation. Future supplements and homebrew may expand the catalogue. Complete audit Section 3 governing skills before populating both trees; training duration calibration, prerequisites, packages and assessments remain outstanding. The user-approved 350 target supersedes the earlier 250 target (100 General/150 Professional) and the earlier conversational proposal of 750. Preserve the 200/150 allocation unless the user approves a change. No catalogue entries created by this decision.

### CCDD-14 Setting-driven catalogue coverage rationale
User clarified the reason for expanding General to 200 while retaining Professional at 150: most competencies carry from BP to SL and DZ, but SL changes practical knowledge needs as infrastructure deteriorates, and DZ substantially expands survival, self-reliance and reconstruction learning needs. Catalogue design must explicitly cover all three settings rather than allocate primarily around modern professions. Shared canonical competencies retain earned levels; changed applications use existing adaptation rules, while genuinely distinct disciplines may require separate competencies. Do not duplicate a competency merely because tools, institutions or setting change. No artificial era lock: pre-collapse characters can learn traditional, emergency and reconstruction competencies where credible resources and access exist; preparation has meaningful value. Regional conditions govern access and relevance, not automatic universal collapse. Coverage review must include modern methods, emergency alternatives, and sustainable low-infrastructure methods across food production/preservation, agriculture/seed saving/livestock, water/sanitation, medicine, communications, energy, repair/fabrication, manual trades, textiles, transport, navigation/surveying, construction, trade, governance, education/knowledge preservation and infrastructure reconstruction. These are coverage requirements and illustrative disciplines, not finalized individual IDs or extra quotas. During catalogue development record setting applicability, resource dependencies, alternative methods and adaptation links; verify SL and DZ coverage explicitly. Retain approved 200 General/150 Professional total and CCDD mathematics. No new numerical rules or catalogue entries introduced.

### CCDD-15 Game identity clarification (user reaffirmation; applies globally)
Blackbox Protocol is an open-world, classless, skill-based tabletop RPG encompassing contemporary civilization, optional societal collapse, survival and reconstruction. Investigation is a major discipline, especially in the contemporary setting, but is not the primary genre limitation or mandatory campaign activity. Reaffirm CCDD-01 multiscale sandbox direction and F01 player-defined campaigns. Support individual, group, operational and strategic play, including civilian life, professional careers, business, politics, government, military command, field operations, contractors, law enforcement, intelligence, crime, emergency response, exploration, survival, trade and reconstruction; optional horror/anomalies remain modular. No mandatory conspiracy, investigation, combat, collapse or metaplot. Apply this identity to all future sourcebook writing, catalogue coverage, rules design, adventure design and software planning. Earlier descriptions that frame the whole game primarily as investigative are historical and subordinate to this clarification; retain investigation mechanics and handbook. The Core Rulebook is the universal rules foundation, not solely an investigation manual. No change to approved twelve initial publications, 200 General/150 Professional catalogue or existing mathematics. During documentation reconciliation update outdated identity language throughout foundation and publication outlines; this entry itself does not perform that full reconciliation.

### CCDD-16–18 Catalogue relocation and scope
The complete named rosters formerly recorded here are now maintained in [SKILL-NOTES.md](SKILL-NOTES.md), the authoritative catalogue. Existing 500 names and IDs preserved. Core 200 General/150 Professional conditionally approved subject to occupation and gameplay coverage. Signal Lost introduces 35 General/15 Professional additional competencies under delegated allocation; Dead Zone introduces 120 General/30 Professional additional competencies. Combined 550 (355 General/195 Professional), 2750 levels. Publication introduction is not an era lock. Preserve learning mathematics, access gates, adaptation, unlimited lifetime learning and all existing validation requirements. Review semantic overlaps and occupation coverage before publication; assign governing skills after audit section 3, then complexity, prerequisites, hours, assessment and packages. The original roster history remains in Git. Do not duplicate the catalogue in this design document.

### Playtest simulation #6 — progression gate review (2026-11-25; proposed, not approved)
PR #6 reports Samuel Nursing practice IV: complexity 6 requires 60,000 cumulative CDR against 8,800 currently; Elena's level IV example requires 15,000 against 5,600. The formula 100 × complexity ÷ training hours makes low-complexity awards much faster per hour than high-complexity professional learning, creating a cheap-competency farming incentive.

**Recommended direction for owner review:** retain the existing CCDD-19 matrix until an alternative is numerically validated; do not grant Nursing IV automatically, erase prerequisites, or retroactively invalidate approved starting grants. Evaluate a **career-track eligibility route** that recognizes verified, discipline-relevant training and supervised practice rather than requiring unrelated competency accumulation. Track professional qualification separately from general CDR so it cannot be exploited by farming simple unrelated competencies. Any replacement must specify qualifying evidence, advancement time, caps, slot interaction, and checks against all six pregens and complexity 1–7 before approval. A listed career target is aspirational, not a starting grant or a promise of immediate eligibility.

**Decision pending:** whether to authorize a career-track alternative to the global CDR threshold, and its numerical gates. No approved matrix or character record is changed here.

### CCDD-19 historical CDR eligibility matrix — RETIRED; superseded by approved 2026-11-26 revision
| Complexity | I | II | III | IV | V |
|---|---:|---:|---:|---:|---:|
| 1 | 0 | 100 | 500 | 1500 | 3000 |
| 2 | 0 | 200 | 1000 | 3000 | 6000 |
| 3 | 0 | 500 | 2500 | 7500 | 15000 |
| 4 | 0 | 1000 | 5000 | 15000 | 30000 |
| 5 | 2500 | 5000 | 10000 | 30000 | 60000 |
| 6 | 5000 | 10000 | 25000 | 60000 | 120000 |
| 7 | 10000 | 25000 | 50000 | 120000 | 250000 |

CDR is non-spendable, cumulative across unique completed levels and settings. Before activating target level require current character CDR >= matrix[c-1][target-1], prior level, supporting prerequisites, resources, access, supervision, slot and available time. Queue locked projects without credit. Award existing incremental CDR only on assessed completion; no spending, self-funding, partial credit or automatic acquisition. Existing CCDD-12 formulas unchanged. Documented occupational starting grants reflect prior education and are not retroactively gated; personal creation purchases use already validated grants and earlier eligible purchases, not target award (delegated implementation default, review in creation audit). Existing acquired levels retained. On correction reducing CDR below active target threshold pause pending eligibility; preserve credited hours (delegated default). Individual exceptions require documented approval. Thresholds require playtest for relevant career reachability, especially specialist entry and mastery. All 2750 catalogue rows carry thresholds. Manual chart reference: [MANUAL-CHARTS.md](MANUAL-CHARTS.md).

### F31/F33 extension — standalone Character Companion
User requested standalone Windows and Android character and competency tracker for between-session use, with avatar, character sheet, inventory, occupation packages, eligibility, countdowns, progress and learned upgrades. See [CHARACTER-COMPANION.md](CHARACTER-COMPANION.md). Fourth application, proposed name BlackBox Character Companion. Preserve offline tabletop independence and shared rules engine. Countdown must respect in-world training time and assessment; optional real-time synchronized downtime is proposed, not a silent replacement of CCDD-12. No implementation yet.

### CCDD-20 Universal competency modifier (user approved)
User-approved competency modifier: B(L)=5×max(0,L−1), for integer L=0–5. Level I grants no D100 bonus but retains CDR, training and prerequisite value. Each level II–V adds +5 percentage points to the same competency's total (0/5/10/15/20 for I–V). Apply only the highest relevant competency total once per check; never sum separate competencies or previous level totals, never permanently increase underlying general skill. Final possible D100 target remains capped at 99. All other learning mechanics unchanged.

### CCDD-21 Occupational mapping and balance audit work
See [OCCUPATION-PACKAGES.md](OCCUPATION-PACKAGES.md) for 352 proposed baseline profiles, career targets and reverse index, and [LEARNING-AUDIT.md](LEARNING-AUDIT.md) for actual automated progression results. Baseline mappings are generated drafts, not validated occupational packages; prerequisite closure conditional on documented training/access. Individual semantic review, specialization-specific packages, unassigned career mappings and assessment content remain open. No new mechanics or threshold changes. Companion must not treat draft mappings as official.


### CCDD-22 — Era-neutral professional qualification routes and prerequisite corrections

Delegated correction. Professional competency is distinct from credential, appointment and jurisdictional authority. Applies to every professional competency in all settings, including Core and Signal Lost prerequisites inherited by Dead Zone. A named modern discipline does not require a surviving modern institution. The following routes satisfy the professional access gate when the GM validates evidence: (A) functioning institution/academy or authorized employer; (B) qualified surviving practitioner or locally recognized practitioner with relevant demonstrated competence, supervised apprenticeship and assessment; (C) locally organized training program with competent assessors, appropriate facilities and documented practice; (D) recovered knowledge plus supervised practical training and independent competent assessment. A manual alone is insufficient. If no competent assessor or safe practice resources exist, training may be queued or paused; no automatic mastery. For nonhazardous disciplines a competent peer panel may assess demonstrated work; regulated/hazardous practice requires appropriate qualified supervision and resources. Local recognition is not a pre-collapse license, nor automatic authority outside its jurisdiction.

For each route record competency ID, target level, route type, instructor/assessor identity and evidence of competence, resources, supervision, assessment evidence, GM decision and any separate local credential/authority. All canonical supporting prerequisite levels, sequential advancement, CDR thresholds, hours, slot limits and assessments remain unchanged. Prior documented occupational history follows existing creation rules; equivalent learning must be assessed and recorded, never fabricate levels or CDR. Native characters can learn Core professional competencies in Dead Zone without playing earlier settings. Transitional characters retain earned knowledge; changed access may pause training but does not erase it. Example: a settlement apprentice learns civil engineering through a surviving engineer and local supervised projects, then qualifies for reconstruction engineering after meeting the actual prerequisites. A locally recognized mediator can pursue community justice through legal research and conflict resolution without being a former attorney. A trade envoy can pursue regional diplomacy through negotiation and cross-cultural communication without a former diplomatic appointment.

Corrections in SKILL-NOTES: G-012 retains soil management only; G-032, G-130, G-142 and DZ-G-035 have no mandatory supporting competency; G-063 requires mechanical troubleshooting; P-078 requires disaster incident management and first aid; SL-P-007 requires infection prevention and project management; DZ-G-108 requires livestock care; DZ-P-012 requires legal research fundamentals and conflict resolution; DZ-P-013 requires negotiation and cross-cultural communication; DZ-P-022 requires mathematics and geological surveying practice. Removed relationships may remain recommended learning, not gates. No change to numeric tables or catalogue IDs. Existing learned levels and CDR preserved; re-evaluate queued/paused projects against corrected gates, retain credited hours, do not silently revoke completion or recalculate active duration snapshots. Occupational packages must be revalidated against revised prerequisites. 


## Section 2 — Competency system design sign-off

Status: complete at working design specification and catalogue audit level; not publication-final, playtested or implemented. This checkpoint supersedes earlier pending-status statements concerning catalogue-level semantic, assessment rubric, resource, arithmetic and reference audits, without superseding approved mechanics or unresolved production requirements.

| Audit | Result | Evidence commit |
|---|---|---|
| Semantic catalogue | 550 unique IDs, titles and scopes; 35 scope revisions | 1261b0f63d1c9689e8ef3e2495ed3389bb4125f3 |
| Assessment evidence | 550 revised rubrics, 2,750 level clauses, 21 evidence families | 51946fb82a03a576adb17ee8f00b22bed4237f38 |
| Resource requirements | 550 verified descriptions, 22 additional discipline-specific refinements | 439f04772dd9b6dea25185833ab9ca2628eccb0e |
| Mathematical regression | 16,500 numeric comparisons passed; 352 profiles, 1,370 grants; six explicit zero-CDR profiles | dabdb46ea145f1f4ccf68956e5cbd25aac573e67 |
| Cross-system integrity | 224 prerequisite edges, no missing references or cycles; all publication levels mathematically reachable with access assumed | ed44fb813f1b006e5eb4ef6cba9a9be1f2e06e12 |

Authoritative catalogue: SKILL-NOTES.md; occupational grants: OCCUPATION-PACKAGES.md; career associations: CAREER-INDEX.md; numerical reference: MANUAL-CHARTS.md. Preserve CCDD-12, CCDD-19, CCDD-20 and CCDD-22. No formula changes from these audits. Remaining production acceptance requirements: individual discipline-specific scenario banks and measurable tolerances, practical resource and instructor availability in representative campaigns, individual occupational history and secondary allocation validation, balance and time-economy playtests, and software implementation/regression tests. Catalogue-level semantic distinctions are not proof of mutually exclusive tasks; graph reachability assumes access and successful assessments. These limitations are explicit and are not certified as completed. Proceed to subsequent foundation work without reopening Section 2 unless a concrete defect or approved change requires it.

### Open action — occupation allocation semantic audit (2026-11-25)
**Status: TODO; not completed.** Review flagged occupation allocations individually for copied-looking or semantically inconsistent skill grants. Examples to investigate: Electronics +20 on profiles without Electronics in their approved allocation; Meteorologist (reported record ZOOT-087, identifier unverified) with Survival +30. Compare each full source profile against its actual duties and training; retain defensible unusual choices, correct unjustified assignments (Meteorologist should generally emphasize Science, with field Survival only if justified), preserve the era-specific total budget, per-skill caps, slot rules, and existing source IDs, and log before/after values with rationale. Do not bulk-replace, claim these exact records verified, or mark complete before source-level inspection and validation.

### Canon principles numbering resolution (approved 2026-11-25)
The promised fifteen F02.02 canon principles are confirmed. The original thirteen semicolon-separated clauses contained one compound clause (“no mandatory ideology, political outcome or global conspiracy”), now numbered as three distinct principles: no mandatory ideology; no mandatory political outcome; no mandatory global conspiracy. No new setting commitments were added. The authoritative fifteen-item numbered list is in notes/CANON-AND-SESSION-ZERO.md; the former thirteen-item interpretation is superseded.


### Unit convention clarification — owner decision 2026-11-25

Blackbox Protocol uses **US customary units** for all player-facing and authoritative equipment records: pounds (lb), ounces (oz), inches (in), feet (ft), miles (mi), and other context-appropriate US customary measures. Do not make kilograms or centimeters the canonical storage/display units or require metric conversion for encumbrance. Weight calculations use pounds, with ounces converted to fractional pounds only for arithmetic (16 oz = 1 lb). Where historical notes say kilograms are authoritative, this later owner instruction supersedes them. Preserve existing game-estimate weights in lb/oz. Any future international/metric conversion is optional reference material, not a requirement of the base rules.

### Approved supporting-prerequisite equivalency — 2026-11-26
A character may satisfy a **supporting prerequisite for a specified target competency and target level** either by holding the listed prerequisite competency at its required level or by passing a GM-approved, evidence-based equivalency assessment covering the same required knowledge and practical performance. Relevant occupational practice, documented prior study, and self-directed experience may support eligibility for assessment, but no occupation title, current advanced competency, or claimed experience automatically passes it. The GM records the prerequisite ID and required level, target ID and level, evidence, assessor, assessment outcome and approval. A successful equivalency satisfies **only that recorded target-specific supporting prerequisite**; it does not grant the underlying competency level, a task bonus, CDR, training hours, a professional license, institutional access, or permission to bypass target training and final assessment. A failed equivalency does not satisfy the prerequisite; the character may train normally or later demonstrate corrected competence with new evidence. Evidence cannot be double-counted as an independent training completion. Other supporting prerequisites are evaluated separately. This rule is open equally to occupational, career-changing and self-taught characters. It does not waive sequential target-level progression or qualified supervision/resources. **The simplified CDR revision was subsequently approved on 2026-11-26; see the superseding CCDD-19 revision below.**

**Samuel Okafor example:** Nursing Practice IV requires Human Anatomy Fundamentals III and Infection Prevention III. His existing Anatomy II does not automatically count as III; he may demonstrate Anatomy III-equivalent competence through a recorded assessment specifically for Nursing Practice IV. A pass satisfies that one supporting prerequisite without granting Anatomy III or 1,200 CDR. Nursing Practice IV's own training, professional access and assessment remain intact; the later CCDD-19 revision removed the global CDR gate.

### CCDD-19 revision — approved simplified CDR eligibility (2026-11-26)
**This decision supersedes the former CCDD-19 global cumulative CDR eligibility matrix, wherever reproduced in historical working notes, reference charts or audits.** No minimum character CDR is required to initiate or complete an individual competency level. Do not apply complexity-by-level CDR thresholds as an eligibility gate, including to advanced professional competencies. CDR remains non-spendable, accumulates only from approved completed levels, and continues to determine additional concurrent learning slots at the existing CCDD-12 thresholds (10,000; 25,000; 50,000; 100,000; 200,000; 400,000). Base slots BP2/SL3/DZ4 and maxima BP8/SL9/DZ10 are unchanged. Keep sequential I–V levels, supporting prerequisites or approved target-specific equivalency, professional access/authorization, supervised training, active hours, resource availability, evidence, final assessment and GM approval. Never award retroactive CDR, levels, PCP or hours merely for removal of a gate. Existing character and occupation records are unchanged; new and pending projects are evaluated under the revised eligibility rule. Historical CCDD-19 matrix is retained only as an obsolete design record, not as a second active rule. Training-time formulas and CDR awards remain unchanged pending separately documented balance decisions.

**Example:** Samuel Okafor (8,800 CDR, Nursing Practice III) is not blocked from Nursing Practice IV by a 60,000 CDR requirement. Anatomy III may be satisfied by the approved, target-specific equivalency assessment; Infection Prevention III is already held. Nursing IV still requires 1,280 active hours, access, supervision, resources, a slot and final assessment.
