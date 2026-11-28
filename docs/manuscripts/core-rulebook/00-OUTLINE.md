# Blackbox Protocol Core Rulebook — chapter outline and source map

Status: **Working outline, 2026-11-26. No rules are added here.** Every subheading names the repo source that supplies its content. Where no source exists, or a ruling is still open, the row is flagged instead of filled. Chapters 1–2 are already drafted in this folder and are unchanged by this revision.

This revision replaces the thirteen-row source map with a full chapter and subheading structure. It also benchmarks the book against the published structure (chapter topics only, no text or rules) of the D&D 5e *Player's Handbook*, the *Call of Cthulhu* 7th edition *Keeper Rulebook* and the Pathfinder 2e *Player Core* / *Core Rulebook*. Topics those books treat as core and Blackbox does not yet cover are included as subheadings fitted to Blackbox's own system, and flagged. They are marked †.

Terminology follows DESIGN-NOTES 9.1–9.2: "Blackbox" is the game, "BlackBox" is software, the contemporary era is "the Blackbox Protocol era".

## How to read this outline

| Status | Meaning |
|---|---|
| **Drafted** | Manuscript text exists in this folder. |
| **Ready** | Approved or delegated working text exists. Write the section from the source without adding rules. |
| **REVIEW** | The content exists but is marked proposed or awaiting Jason's approval. Draft it, but mark it provisional until approved. |
| **DESIGN NEEDED** | No rule exists, or the ruling is still open. Leave a placeholder; do not invent. |
| **CONTENT NEEDED** | The rules are settled, but the book needs material that doesn't exist yet: examples, tables compiled from several sources, illustrations, or an example of play. |
| † | Subheading added from the D&D / Call of Cthulhu / Pathfinder comparison. |

Source abbreviations: **DN** = notes/DESIGN-NOTES.md section (DN 4.1, DN R03, DN CCDD-12). **F##** = docs/F##-*.md. **PR #n** = historical pull-request references; their status must be checked against `main`. PR #3, #5, #6 and #8 were merged; PR #4 and #7 were closed as superseded. PR #8's proposals are historical/noncanonical, not approved mechanics. Other names are files in notes/ or docs/.

Approved numeric rules are the current drafting baseline. Playtesting may identify defects, but does not automatically reopen locked mechanics. Check current `main` before treating any older branch note as authoritative.

## Chapter map at a glance

| Part | Ch | Title | Old map | Readiness |
|---|---|---|---|---|
| Front matter | — | Opening document, title, credits, foreword and reader guidance | — | 10-page working layout; mixed readiness |
| I How to play | 1 | What this game is | 1 | Drafted |
| I | 2 | Resolution | 2 | Drafted |
| II Characters | 3 | Creating a character | 12 | Ready, with REVIEW items |
| II | 4 | Attributes and derived statistics | 3 | Ready |
| II | 5 | Skills and languages | 4 | Ready |
| II | 6 | Occupations and backgrounds | 12 (part) | Ready, with REVIEW items |
| II | 7 | Competencies | 11 (part) | Ready |
| II | 8 | Identity, history and connections † | — | Partly DESIGN NEEDED |
| III Playing the game | 9 | Time, scenes and scale | 9 (part) | Ready; larger-scale play DESIGN NEEDED |
| III | 10 | Social interaction and reputation † | — (missing) | Ready |
| III | 11 | Investigation essentials | — | Ready (summary only) |
| III | 12 | Combat | 5 | Core Ready; subsystems DESIGN NEEDED (PR #8) |
| III | 13 | Injury, conditions, recovery and stress | 6 | Ready; conditions list DESIGN NEEDED |
| III | 14 | Hazards and the environment † | — | Partly Ready |
| IV Gear, money and travel | 15 | Equipment and inventory | 7 | Ready; generic weapon table DESIGN NEEDED |
| IV | 16 | Money, trade and Means | 8 | Ready |
| IV | 17 | Travel and transportation | 9 (part) | Ready; modifiers DESIGN NEEDED |
| IV | 18 | Crafting, repair and building | 10 | Ready; workmanship tiers DESIGN NEEDED |
| V Development | 19 | Learning and advancement | 11 | Ready; eligibility gate decision open |
| VI Running the game | 20 | Running the game † | — | Partly Ready |
| VI | 21 | Complexity modes and optional rules | — | Ready |
| VII The Blackbox Protocol era | 22 | The contemporary world | 13 | Ready, with CONTENT NEEDED |
| VII | 23 | Campaigns in the Blackbox Protocol era | 13 | REVIEW / CONTENT NEEDED |
| Back matter | A–I | Appendices, glossary, index | Back matter | Mixed |

**Why the order changed.** All three benchmark books put character creation near the front, as a step-by-step overview that points to detail chapters (D&D PHB ch. 1, Pathfinder ch. 1, CoC ch. 3). The old map put creation at chapter 12, after advancement. Here chapter 3 gives the creation steps and chapters 4–8 hold the detail. Social interaction (F16) is a Core-owned mechanic under F29 but had no chapter; it is now chapter 10. Hazards are Core-owned under HAZARDS-AND-ANIMALS.md and now have chapter 14. The contemporary setting stays a clearly separate part (DN 8.5).

---

## Front matter

**Working production target:** approximately 350 interior pages, excluding the cover; 10 pages allocated to front matter. Final pagination is subject to layout. The opening sequence is approved for outline development; individual unfinished text and artwork still require review.

| § | Page | Side | Content | Source / status |
|---|---|---|---|---|
| F.1 | i | Right | In-universe classified document concerning the Blackbox Protocol | DRAFTED — creator authorized commit; [recovered Halden Institute memorandum](F01-recovered-classified-document.md), October 17, 2005, HI-BP-2005-017. Player-facing text; artwork and layout pending. |
| F.2 | ii | Left | Full title page — Blackbox Protocol: Player's Handbook | Creator reports existing artwork completed; asset not yet supplied for layout verification. Do not redesign or duplicate with a half-title. |
| F.3 | iii | Right | Credits, copyright, edition/version and publication information | DRAFTED — creator authorized commit; [credits, copyright and publication information](F03-credits-copyright-publication.md). Jason Williams credited as creator, writer and designer; Cindrix Gaming designated publisher and copyright holder. Cindrix Gaming logo and layout pending; legal holder designation, copyright year and SRD release wording require final verification. ISBN, website and external playtester credits omitted until available. Faces the title page. |
| F.4 | iv | Left | Full-page atmospheric interior artwork | ART NEEDED; player-safe contemporary setting. |
| F.5 | v | Right | Creator's foreword | DRAFTED — creator approved; [A Word from the Creator](F05-creators-foreword.md). Signed Jason Williams, Creator, Blackbox Protocol, Cindrix Gaming; final layout pending. |
| F.6 | vi–vii | Left–right | Table of contents | Generate from approved outline; final page numbers after layout. |
| F.7 | viii | Left | How to Use This Book | DRAFTED — creator approved; [How to Use This Book](F07-how-to-use-this-book.md). Seven-part reader guide, complexity conventions, cross-references and companion publications; final layout and chapter-order reconciliation pending. |
| F.8 | ix | Right | What You Need to Play | DRAFTED — creator approved; [What You Need to Play](F08-what-you-need-to-play.md). DN 1.4, DN 9.7; D100 and D20, sheets, writing materials, players/GM, optional trackers and digital tools. No software dependency; printable sheets require verification. Final layout and illustrations pending. |
| F.9 | x | Left | Part I opening artwork | ART NEEDED; faces Chapter 1, which begins Arabic page 1. |

### Opening fictional document — editorial and visual brief

An authentic-looking contemporary internal memorandum about the Blackbox Protocol: fictional issuing organization, classification markings in the established red accent, document control number, issuance date, restricted distribution, restrained bureaucratic prose, selective redactions, authorization marking and archival/custody reference. Use off-white paper, black typography and minimal weathering. Issuer and date established: The Halden Institute, October 17, 2005. Memorandum HI-BP-2005-017 is drafted and authorized for commit; final artwork and layout remain pending. No real-world institutional impersonation or GM-exclusive revelations. This is an atmospheric reader-facing artifact, not a new rule or a new canon decision.

### Presentation benchmarks

Use Dungeons & Dragons (2024 Player's Handbook), Pathfinder (Second Edition Remastered Player Core), Call of Cthulhu (Seventh Edition Keeper Rulebook), and Warhammer Fantasy Roleplay (Fourth Edition Core Rulebook) as secondary inspiration for accessibility, reference organization, investigative atmosphere and immersive presentation. Follow AGENTS.md and approved Blackbox prose as the primary editorial guardrail. Do not import third-party text, rules or visual assets.

The introductory example of play belongs in Chapter 1, with a provisional two-page spread within that chapter's allocation rather than an additional front-matter page. The half-title is omitted.

## Part I — How to play

### Chapter 1 — What this game is (Drafted: 01-what-this-game-is.md)

| § | Subheading | Source | Status |
|---|---|---|---|
| 1.1 | Three eras | F02.01; DN 9.1 | Drafted |
| 1.2 | One rules system | F01.06; DN CCDD-15 | Drafted |
| 1.3 | Who decides | F03; DN F01 guardrails | Drafted |
| 1.4 | Ways to play | F01; DN CCDD-01, CCDD-15 (multiscale, no mandatory collapse/combat/investigation) | Drafted |
| 1.5 | Grounded by design | F01.01–F01.05; F25 (horror optional) | Drafted |
| 1.6 | Key terms in brief † | GLOSSARY-AND-RULES-INDEX.md Part 1 | CONTENT NEEDED (short extract; drafted chapter has no such section) |
| 1.7 | The books in the line † | F29 locked twelve; glossary Part 2 | Ready |

### Chapter 2 — Resolution (Drafted: 02-resolution.md)

| § | Subheading | Source | Status |
|---|---|---|---|
| 2.1 | The core roll; routine and impossible tasks | DN R01, DN 1.4, remaining resolution defaults, DN 5.8 | Drafted |
| 2.2 | Degrees of success | DN 1.4; remaining resolution defaults | Drafted |
| 2.3 | Targets: skills and attributes (direct attribute checks, alternative attribute) | DN R01; DN 3.1 | Drafted |
| 2.4 | Difficulty and modifiers (the only ladder) | DN R03 | Drafted |
| 2.5 | Helping, retrying, pushing and extended tasks; combined skills | DN R02 | Drafted |
| 2.6 | Opposed checks and ties | Remaining resolution defaults; DN R01 | Drafted |
| 2.7 | The optional circumstance die | DN R04; DN 2.4 (GM guidance on frequency) | Drafted |
| 2.8 | Probability reference | DN R06; MANUAL-CHARTS MC-08 tables 3–4 | Drafted |
| 2.9 | Worked resolution examples | DN R01–R03 examples | CONTENT NEEDED (more examples; check drafted text first) |
| 2.10 | Luck, hero points or none? † | None. CoC has Luck, D&D Inspiration, Pathfinder Hero Points. Blackbox has the push (R02) only | **DESIGN NEEDED**: decide whether Blackbox has any player-spendable resource, or state plainly that it doesn't |

## Part II — Characters

### Chapter 3 — Creating a character

Step-by-step overview. Each step points to its detail chapter. Use the origin-era procedure in DN 5.4 for transitional characters.

| § | Subheading | Source | Status |
|---|---|---|---|
| 3.1 | Before you start: campaign era, complexity mode, resource tier, Session Zero | DN 1.5; DN 2.6 (resource tier); F28; CANON-AND-SESSION-ZERO.md Part 2 | Ready |
| 3.2 | Step 1 — Concept | DN 1.5; DN CCDD-04 | Ready |
| 3.3 | Step 2 — Attributes (350 points) → ch. 4 | DN Approved character foundation (1.1) | Ready |
| 3.4 | Step 3 — Occupation(s) and occupational skill points → ch. 6 | DN 2.3; alternative-skill substitution (approved 2026-11-25, in DN 2.3) | Ready |
| 3.5 | Step 4 — Personal skill points (100, max 20 per skill) → ch. 5 | DN 1.5; DN 2.3 cap rules | Ready |
| 3.6 | Step 5 — Competencies: occupational grants and personal budget → ch. 7 | DN CCDD-11, CCDD-12, CCDD-19 (grants not retro-gated); competency Level 1 clarification | Ready |
| 3.7 | Step 6 — Professional advantage, credentials, contacts → ch. 6, 8 | DN 2.5; DN 2.8 | Ready |
| 3.8 | Step 7 — Derived statistics → ch. 4 | DN 3.4 (supersedes the DN 1.2 formulas) | Ready |
| 3.9 | Step 8 — Funds, kit and starting inventory → ch. 15–16 | Current approved flat starting funds and occupation-based monthly pay; reconcile DN 7.2/F18; DN 2.6 (kit); STARTING-INVENTORIES.md | Ready / starting inventories **REVIEW** (proposed) |
| 3.10 | Step 9 — History, relationships and goals → ch. 8 | DN 1.5 | Ready (procedure); see 8.x for gaps |
| 3.11 | Step 10 — GM review and validation | DN 1.5; DN CCDD-12 validation; PREGENERATED-CHARACTERS.md validation report | Ready |
| 3.12 | Creating a transitional character at the start of play | DN 5.4; Transition Handbook owns detail | Ready (summary + reference) |
| 3.13 | Quick build: use a pregenerated character † | PREGENERATED-CHARACTERS.md (six) | **REVIEW** (awaiting Jason) |
| 3.14 | Worked example: building a character start to finish | DN 2.3 worked chef; PREGENERATED-CHARACTERS.md | CONTENT NEEDED (full worked example) |
| 3.15 | Character sheet walkthrough † | PR #5 sheets/character-sheet.pdf | Needs corrected HTML print verification; PR #5 merged and outdated PDFs were removed |

### Chapter 4 — Attributes and derived statistics

| § | Subheading | Source | Status |
|---|---|---|---|
| 4.1 | The seven attributes and what they govern | DN 1.1; DN 3.1 (STR and WIL roles) | Ready |
| 4.2 | Allocating attributes: baseline 30, 140 points, reclaiming to 15, range 15–80 | DN 1.1 allocation procedure | Ready |
| 4.3 | Descriptive bands | DN 1.1 ("Descriptive bands") | Ready |
| 4.4 | Underlying vs effective values; temporary modifiers | DN 1.1; remaining resolution defaults (no free healing on recalculation) | Ready |
| 4.5 | Derived statistics: Health, Stamina, Resilience, Initiative, Movement index, Carry reference, Recovery index | DN 3.4; MANUAL-CHARTS Section 3 reference | Ready (note: DN 1.2 formulas are superseded by 3.4) |
| 4.6 | Health scale and vulnerability | DN 3.5 | Ready |
| 4.7 | Movement per interval and carry reference | DN 3.4 | Ready |
| 4.8 | Attribute change over time (cap 100) | DN 5.6; DN 2.8 | Ready (cross-ref ch. 19) |
| 4.9 | Age and attributes † | None. CoC adjusts characteristics by age; DN 1.5 and 5.4 only say "choose age" | **DESIGN NEEDED**: does age have any mechanical effect? |
| 4.10 | Worked calculation | MANUAL-CHARTS; PREGENERATED-CHARACTERS.md | CONTENT NEEDED |

### Chapter 5 — Skills and languages

| § | Subheading | Source | Status |
|---|---|---|---|
| 5.1 | Skill ratings: base = half governing attribute, plus occupational and personal points | DN 1.3; DN 1.1 | Ready |
| 5.2 | Competency bands (unfamiliar to master) | DN 1.3 | Ready |
| 5.3 | The thirty skills: description, default attribute, sample uses | DN 1.3 list; Transitional deficit table (default attributes); DN 3.1 | Ready / CONTENT NEEDED (sample uses per skill) |
| 5.4 | Alternative attributes for a task | DN 3.1; DN R03 | Ready |
| 5.5 | Choosing the governing skill: tasks without an obvious skill (reading people, law, finance, security, performance) | DN 3.2 | Ready |
| 5.6 | Caps: 99 underlying, per-skill occupational 30, creation ceiling 85 | DN 5.8; DN 2.3 | Ready |
| 5.7 | Languages: modalities 0–5, ceilings, interpreters | DN 3.3 | Ready |
| 5.8 | Contextual unfamiliarity and adaptation deficits (summary) | DN 5.1–5.3; Transition Handbook owns | Ready (summary + reference) |
| 5.9 | Worked skill checks | — | CONTENT NEEDED |

### Chapter 6 — Occupations and backgrounds

| § | Subheading | Source | Status |
|---|---|---|---|
| 6.1 | Occupations are not classes | DN Additional occupational rules 1–8; DN CCDD-01 | Ready |
| 6.2 | The fourteen families | DN Approved character foundation (F08); DN 2.2 | Ready |
| 6.3 | Primary occupation and secondary backgrounds by era (100 / 80+20 / 60+20+20) | DN 2.3 | Ready |
| 6.4 | Allocating occupational points; caps and redistribution | DN 2.3 | Ready |
| 6.5 | Alternative skill substitution (one-for-one, GM-approved) | DN 2.3 (approved 2026-11-25) | Ready |
| 6.6 | Occupational competency packages | OCCUPATION-PACKAGES.md; DN CCDD-11; DN CCDD-21 | Ready / **REVIEW**: flagged allocations (incl. O-021) on PR #3 and the open allocation semantic audit (DN "Open action") |
| 6.7 | Professional advantages | DN 2.5 | Ready |
| 6.8 | Qualifications, credentials and authority | DN 2.8; DN CCDD-03, CCDD-22 | Ready |
| 6.9 | Setting variants and availability by era | DN 2.7; DN 6.1; DN 6.3 (Anomaly Researcher) | Ready |
| 6.10 | Occupation roster by family (table) | DN 2.2 roster; OCCUPATION-INDEX.json; MANUAL-CHARTS MC-09 | Ready (table) |
| 6.11 | Sample occupation profiles | DN 6.5 (generated skeletons, not authored profiles) | CONTENT NEEDED: individually authored profiles |
| 6.12 | Career examples, including cross-family moves | DN Occupational career examples; DN 6.4 | Ready |
| 6.13 | Secondary background package size and budget interaction | DN CCDD-04 (listed as audit work); DN Outstanding 1.2 | **REVIEW**: 2.3, 2.4, 2.8 delegated defaults not yet individually reviewed |

Note: DN 2.4 still describes 3/5/7 specialization slots with +0/+5/+10/+15 stages, but DN 5.5, 5.7 and CCDD-11/20 supersede it. Write chapters 6–7 from CCDD; DN 2.4 needs the "Superseded" label flagged in DN Outstanding 1.4.

### Chapter 7 — Competencies

| § | Subheading | Source | Status |
|---|---|---|---|
| 7.1 | What a competency is; levels I–V | DN CCDD-01, CCDD-02, CCDD-05 | Ready |
| 7.2 | The competency modifier (+0/+5/+10/+15/+20); Level I is a real level | DN CCDD-20; competency Level 1 clarification | Ready |
| 7.3 | Using a competency on a check: highest one applies, never stacks | DN CCDD-20; DN 3.2 | Ready |
| 7.4 | Complexity 1–7 | DN CCDD-05; DN CCDD-12 | Ready |
| 7.5 | Access gates: Open, Resource, Prerequisite, Occupational, Qualification | DN CCDD-03 | Ready |
| 7.6 | Professional routes when institutions fail | DN CCDD-22 | Ready |
| 7.7 | General and Professional learning trees | DN CCDD-10; MANUAL-CHARTS MC-01 | Ready |
| 7.8 | Starting competencies: occupational grants and personal budget (10/15/20) | DN CCDD-11; CCDD-12 creation merging | Ready |
| 7.9 | Development rating (CDR) | DN CCDD-11, CCDD-12 | Ready |
| 7.10 | Catalogue reference (Core 200 General / 150 Professional) | SKILL-NOTES.md; DN CCDD-13, CCDD-16–18 | Ready (appendix-length; decide print vs digital) |
| 7.11 | Worked competency examples | MANUAL-CHARTS MC-02–MC-04, MC-11 | Ready |

### Chapter 8 — Identity, history and connections †

Benchmark: D&D personality and backgrounds; CoC backstory and connections; Pathfinder backgrounds. Blackbox already records these items (DN 1.5, 2.8) but has no procedure for writing them.

| § | Subheading | Source | Status |
|---|---|---|---|
| 8.1 | Identity, age and appearance | DN 1.5 | Ready (record only) |
| 8.2 | Career history record | DN 2.8 | Ready |
| 8.3 | Contacts and relationships | DN 2.5 (professional contact); DN 2.6 (one plausible contact); F16 | Ready |
| 8.4 | Motivations, responsibilities and goals | DN 1.5 | CONTENT NEEDED: guidance and prompts (no rules needed) |
| 8.5 | Backstory prompts by era † | None | CONTENT NEEDED |
| 8.6 | Obligations and debts | F16 obligations; F18 debts; Current approved economy decision; DN 7.2/F18 require reconciliation | VERIFY |
| 8.7 | Personal traits with mechanical effect † | None. Blackbox deliberately has no alignment (DN 1.5) | **DESIGN NEEDED**: confirm "none" or define |

## Part III — Playing the game

### Chapter 9 — Time, scenes and scale

| § | Subheading | Source | Status |
|---|---|---|---|
| 9.1 | The shared game clock | F11 §1 | Ready |
| 9.2 | Scales: rounds, scenes, travel, downtime, and moving between them | F11 §2; DN 4.1 (six-second round) | Ready |
| 9.3 | Action durations, concurrent activity and interruptions | F11 §3, §5 | Ready |
| 9.4 | Downtime: what characters can do between scenes † | F11 §6; DN 5.6; DN 7.4; F18 employment; DN 4.3 recovery | CONTENT NEEDED: compile a downtime menu from existing rules (benchmark: D&D and Pathfinder downtime) |
| 9.5 | Rest and sleep (summary) | DN 4.3; Current approved psychology revision; verify F14 and GM reference | VERIFY (cross-ref ch. 13) |
| 9.6 | Playing at larger scales: organizations, operations and strategy † | DN CCDD-01, CCDD-15 commit to it; DN CCDD-09 E lists it as outstanding; DN 8.4 faction clock (GM Handbook) | **DESIGN NEEDED**: no group, operational or strategic resolution exists yet |
| 9.7 | Followers, employees and allies † | F16 relationships; F18 employment record; NPC-ARCHETYPES.md | **DESIGN NEEDED**: how player-directed NPCs act, are paid and are resolved |

### Chapter 10 — Social interaction and reputation † (Core-owned per F29; missing from old map and rules index)

| § | Subheading | Source | Status |
|---|---|---|---|
| 10.1 | Declaring intent, leverage and plausible outcome | F16 Social resolution | Ready |
| 10.2 | Which skill: Persuasion, Intimidation, Deception, Leadership, or an attribute | F16; DN 3.2; DN R01 | Ready |
| 10.3 | Opposed social checks, lies and reading people | DN 3.2; DN R01 | Ready |
| 10.4 | Attitudes: hostile to supportive | F16 State and authority | Ready |
| 10.5 | Reputation by audience, place and topic | F16 | Ready |
| 10.6 | Authority, obligations and favours | F16; DN 2.8 | Ready |
| 10.7 | Long negotiations as extended tasks | DN R02 extended tasks; F16 | Ready (example CONTENT NEEDED) |
| 10.8 | Player agency: no mind control | F16; F03 | Ready |
| 10.9 | Worked social example | — | CONTENT NEEDED |

Rules index (GLOSSARY-AND-RULES-INDEX.md Part 2) needs a row: Social interaction → Core Rulebook → F16.

### Chapter 11 — Investigation essentials (summary; Investigation Handbook owns the procedure)

| § | Subheading | Source | Status |
|---|---|---|---|
| 11.1 | Investigation is one discipline among many | DN CCDD-15 | Ready |
| 11.2 | Searching, noticing and research with core checks | DN 3.2; DN R01–R02 | Ready |
| 11.3 | No essential clue is gated by a roll | DN R02 ("No essential clue gated by retry") | Ready |
| 11.4 | Evidence records in brief | F15 | Ready (summary + reference) |
| 11.5 | Where to find more | Investigation Handbook; Zero Day | Ready |

### Chapter 12 — Combat

| § | Subheading | Source | Status |
|---|---|---|---|
| 12.1 | Stakes, participants and positions | DN 4.1 | Ready |
| 12.2 | Rounds and initiative; ties | DN 4.1; DN 3.4 | Ready |
| 12.3 | Main action, movement, reaction; no banking | DN 4.1; F11 §4 | Ready |
| 12.4 | Surprise and awareness | DN 4.1 | Ready |
| 12.5 | Attacking | DN 4.1 | Ready |
| 12.6 | Defending: evasion at half DEX, close-combat defense | Current F12 and F13 on `main` (PR #7 superseded; retain full-DEX evasion) | Ready after verification against current F12/F13 |
| 12.7 | Range bands: engaged, near, far, out of reach | DN 4.1; DN 7.1 | Ready / inherent difficulty per band **DESIGN NEEDED** (7.1 says per item; no defaults set) |
| 12.8 | Cover | DN 4.1 | Ready |
| 12.9 | Harm dice and degree bonus | DN 4.2 | Ready |
| 12.10 | Armor | DN 4.2 | Ready |
| 12.11 | Nonlethal intent and strain damage | DN 4.2 | Ready |
| 12.12 | Targeted effects (Advanced) | DN 4.2 | Ready |
| 12.13 | Retreat, surrender and ending an encounter | DN 4.1 | Ready |
| 12.14 | Grappling and restraint | PR #8 COMBAT-SUBSYSTEMS-DRAFT §1 (G1, G2) | **DESIGN NEEDED** (draft awaiting Jason) |
| 12.15 | Chases | PR #8 §2 (C1, C2). Benchmark: CoC has a full chase chapter | **DESIGN NEEDED** |
| 12.16 | Ammunition and reloading | DN 7.3 (uses); PR #8 §3 (R1–R3) | Uses Ready / reloading **DESIGN NEEDED** |
| 12.17 | Rapid fire and suppression | PR #8 §4 (F1, F2) | **DESIGN NEEDED** |
| 12.18 | Area effects and explosives † | None (H-11 is a hazard, not an attack) | **DESIGN NEEDED** |
| 12.19 | Vehicles in conflict and collisions † | H-12 (collision harm only); SUPPORTING-CONTENT §2 vehicle record | **DESIGN NEEDED** (benchmark: Pathfinder vehicle rules, CoC chases) |
| 12.20 | Standard, Advanced and Simulation combat | DN 4.1–4.2; F28 | Ready |
| 12.21 | Worked conflict example | PLAYTEST-SIMULATION-1 (PR #6) session log as a reference only | CONTENT NEEDED |

### Chapter 13 — Injury, conditions, recovery and stress

| § | Subheading | Source | Status |
|---|---|---|---|
| 13.1 | Health and injury severity | DN 4.3; DN 3.5 | Ready |
| 13.2 | Injury penalties; highest applies once | DN 4.3 | Ready |
| 13.3 | Zero HP: incapacitated, stable or unstable | DN 4.3 as amended by **PR #7** (unstable only after a critical depleting injury) | Ready once PR #7 merges |
| 13.4 | Deterioration boxes and stabilization | DN 4.3 | Ready |
| 13.5 | Natural recovery and medical care | DN 4.3; DN 3.4 | Ready |
| 13.6 | Clearing injuries | DN 4.3 | Ready |
| 13.7 | Stamina, exhaustion and rest | DN 4.2; DN 4.3 | Ready |
| 13.8 | Exertion costs (forced pace, heavy labour) † | DN 4.3 says "Section 7 governs exertion"; DN 7 does not define it | **DESIGN NEEDED** |
| 13.9 | Psychological stress: triggering events and canonical check | Current approved psychology revision; verify F14 and GM reference | VERIFY |
| 13.10 | Stress bands and penalties | DN 4.4 | Ready |
| 13.11 | Overwhelmed: player-chosen responses | DN 4.4 | Ready |
| 13.12 | Recovering from stress | DN 4.4 | Ready |
| 13.13 | Persistent trauma (Advanced) and safety | DN 4.4; F14 | Ready |
| 13.14 | Poison, toxins and illness | PR #8 §6 (P1, P2); H-07, H-08, H-20, H-21 | **DESIGN NEEDED** (draft awaiting Jason) |
| 13.15 | Less lethal campaign variant | DN 4.3 mentions it; no variant is defined | **DESIGN NEEDED** |
| 13.16 | Conditions reference † | Defined now: incapacitated, unstable, stable, exhausted, deprived / severely / critical, stress bands, degraded (items), surprised/unaware. Not defined: unconscious (DN 4.3 calls it "separate"), held/restrained (PR #8), prone, blinded/darkness beyond H-22 | Compile defined ones: CONTENT NEEDED. Missing ones: **DESIGN NEEDED** (benchmark: D&D and Pathfinder conditions appendices) |
| 13.17 | Worked recovery examples | DN 4.3 | CONTENT NEEDED |

### Chapter 14 — Hazards and the environment † (Core owns hazard rules; Survival Handbook owns the catalogue)

| § | Subheading | Source | Status |
|---|---|---|---|
| 14.1 | How hazards work: signs, checks, harm, mitigation | HAZARDS-AND-ANIMALS.md intro; DN 4.2 environmental harm | Ready |
| 14.2 | Fire, smoke and explosions | H-01, H-11, H-15 | Ready |
| 14.3 | Water, flooding and drowning | H-02, H-18 | Ready |
| 14.4 | Falling | H-17; PR #8 §5 (L1) | Ready / falls over 20 m **DESIGN NEEDED** |
| 14.5 | Heat, cold and weather | H-04, H-05, H-06; F19 exposure | Ready |
| 14.6 | Darkness and light | H-22 | Ready |
| 14.7 | Toxic and electrical hazards | H-08, H-09, H-10 | Ready (procedure depends on 13.14) |
| 14.8 | Hunger and thirst (summary) | DN 7.3; Survival Handbook owns detail | Ready / **REVIEW**: simulation issue #5 fractional-counter correction pending Jason |
| 14.9 | Animals (summary) | HAZARDS-AND-ANIMALS.md Animals | Ready (summary + reference) |
| 14.10 | Hazard quick table | HAZARDS-AND-ANIMALS.md | Ready |

## Part IV — Gear, money and travel

### Chapter 15 — Equipment and inventory

| § | Subheading | Source | Status |
|---|---|---|---|
| 15.1 | Item records, ownership and custody | F17; DN 7.1 | Ready |
| 15.2 | Mass, load bands and optional bulk | F17 Capability and load; DN 7.1 | Ready (load effect on movement and travel: see 17.6) |
| 15.3 | Condition, wear and maintenance | F17; DN 7.1 | Ready |
| 15.4 | Tools and kits | DN 7.1 | Ready |
| 15.5 | Weapons and armor: generic harm and protection categories | DN 7.1; DN 4.2 | Ready |
| 15.6 | Generic weapon and armor table † | DN 7.1 categories exist; per-band difficulty and coverage defaults do not | **DESIGN NEEDED** (benchmark: every core book carries a basic weapons table) |
| 15.7 | Consumables and ammunition | DN 7.3 other supplies | Ready |
| 15.8 | Availability by era | DN 7.1 | Ready |
| 15.9 | Vehicles: record format | SUPPORTING-CONTENT §2 | Ready |
| 15.10 | Starter equipment lists by resource tier † | DN 2.6; STARTING-INVENTORIES.md | **REVIEW** (proposed) |
| 15.11 | Where to find the catalogue | EQUIPMENT-CATALOGUE.md; Equipment Compendium | Ready |

### Chapter 16 — Money, trade and Means

| § | Subheading | Source | Status |
|---|---|---|---|
| 16.1 | Real currency at local prices | DN 7.2; F18 | Ready |
| 16.2 | Flat starting funds and occupation-based recurring pay | DN 7.2 | Ready |
| 16.3 | Optional Means (0–6) | DN 7.2 | Ready |
| 16.4 | Markets, scarcity and multipliers (SL) | DN 7.2; F18 | Ready (summary; era detail in setting books) |
| 16.5 | Barter and local accounting (DZ) | DN 7.2; F18 | Ready (summary) |
| 16.6 | Employment and labour as value | DN 7.2; F18 | Ready |
| 16.7 | Shopping in the Blackbox Protocol era: retailers and ordering | CORPORATE-AND-RETAIL-GUIDE.md; MARKETPLACE-OPERATIONS.md | Ready (setting part may hold this instead) |
| 16.8 | Worked transaction example | — | CONTENT NEEDED |

### Chapter 17 — Travel and transportation

| § | Subheading | Source | Status |
|---|---|---|---|
| 17.1 | Strategic travel vs tactical movement | docs/CORE-TRAVEL-AND-TRANSPORTATION.md Scope | Ready |
| 17.2 | Journey time procedure | CORE-TRAVEL Using the table | Ready |
| 17.3 | Foot, bicycle and road speeds | CORE-TRAVEL baseline table (owner-approved 2026-11-25) | Ready |
| 17.4 | Expanded transport: rail, air, water | CORE-TRAVEL expanded table | Ready |
| 17.5 | Era application | CORE-TRAVEL Era application | Ready |
| 17.6 | Terrain, weather, load and fatigue adjustments | CORE-TRAVEL says no numeric modifiers are established; F17 load bands give no travel effect | **DESIGN NEEDED** |
| 17.7 | Animal-powered and mounted travel † | Not in the 26 modes (no horse, cart, pack animal) | **DESIGN NEEDED** (important for Dead Zone) |
| 17.8 | Navigation and getting lost | F19; Navigation skill (DN 1.3) | Ready (procedure); tables in Survival Handbook |
| 17.9 | Example journey times | CORE-TRAVEL quick-reference | Ready |

### Chapter 18 — Crafting, repair and building (procedure; tables in Survival Handbook and Dead Zone)

| § | Subheading | Source | Status |
|---|---|---|---|
| 18.1 | Projects: labour, elapsed time and one roll | F21; DN 7.4 | Ready |
| 18.2 | Project scale 1–7, crew and competency gate | DN 7.4 | Ready |
| 18.3 | Stages and difficulty | DN 7.4 | Ready |
| 18.4 | Materials and substitutes | DN 7.4; F21 | Ready |
| 18.5 | Outcomes: success, rework, imperfect, setback | DN 7.4 | Ready |
| 18.6 | Workmanship tiers from the same roll | F21 user decision (roll-under margin, approved); threshold numbers are a candidate only | **DESIGN NEEDED**: approve or revise the 15% / 35% margin bands and E = 6/11/16 |
| 18.7 | Repairs | DN 7.4 | Ready |
| 18.8 | Construction size classes (summary) | DN 7.4; F22; Dead Zone owns settlements | Ready |
| 18.9 | Progressive crafting by era | PROGRESSIVE-CRAFTING-PLAN.md | **REVIEW** |
| 18.10 | Worked project example | F21 worked example | Ready |

## Part V — Development

### Chapter 19 — Learning and advancement

| § | Subheading | Source | Status |
|---|---|---|---|
| 19.1 | No levels: how characters grow | DN 1.6; DN CCDD-01 | Ready |
| 19.2 | General skill marks and advancement checks | DN 5.6; DN 2.8 | Ready |
| 19.3 | Attribute advancement | DN 5.6; DN 2.8 | Ready |
| 19.4 | Optional disuse | DN 2.8 | Ready |
| 19.5 | Training competencies: hours by complexity and level | DN CCDD-05, CCDD-12; MANUAL-CHARTS MC-03 | Ready |
| 19.6 | Learning resources, instructors and the queue | DN CCDD-06 | Ready |
| 19.7 | Eligibility: prerequisites and the CDR threshold matrix | DN CCDD-19; MANUAL-CHARTS | VERIFY: older playtest issue 6 predates the later simplified CDR decision; use latest canonical training source |
| 19.8 | Active learning slots by era and CDR | DN CCDD-11; MANUAL-CHARTS MC-05 | Ready |
| 19.9 | Prerequisite efficiency (Advanced/Simulation) | DN CCDD-11 | Ready |
| 19.10 | Daily study time and real life | DN CCDD-11 training time guidelines | Ready |
| 19.11 | Assessment, failure and corrective practice | DN CCDD-06; DN 5.7 | Ready |
| 19.12 | Languages over time | DN 3.3 | Ready |
| 19.13 | One project record, one time ledger | DN 5.7 | Ready |
| 19.14 | Career change and retraining | DN 2.8; DN CCDD-07; retraining limit 1/1/2 | Ready |
| 19.15 | Moving between eras (summary) | DN 1.7; DN 5.1–5.4; Transition Handbook owns | Ready (summary + reference) |
| 19.16 | Worked development examples | MANUAL-CHARTS MC-04, MC-06; DN Leadership example | Ready |

## Part VI — Running the game

Benchmark: CoC's Keeper chapter sits in its core book; D&D and Pathfinder split GM material into a second book. Blackbox has a GM Handbook, so Core holds only the principles needed to run the core rules, then points onward.

### Chapter 20 — Running the game †

| § | Subheading | Source | Status |
|---|---|---|---|
| 20.1 | The GM's role and player agency | F03; DN F01 guardrails | Ready |
| 20.2 | Session Zero (recommended, not required) | CANON-AND-SESSION-ZERO.md Part 2 | Ready |
| 20.3 | Safety and content boundaries | DN 4.4 ("safety boundaries override depiction"); CANON-AND-SESSION-ZERO.md | Ready (summary) / fuller safety-tool guidance CONTENT NEEDED |
| 20.4 | Calling for rolls; routine, impossible and the circumstance die | DN R01, R04; DN 2.4 | Ready |
| 20.5 | Setting difficulty and stakes | DN R03 | Ready |
| 20.6 | Running NPCs: profile format | NPC-ARCHETYPES.md (GM Handbook owns) | Ready (format only) / **DESIGN NEEDED**: decide whether Core carries a few sample NPC and animal profiles so it can be used without the GM Handbook |
| 20.7 | Law, authority and consequences in play † | F16 authority; nothing on arrest, courts or legal consequences | **DESIGN NEEDED** (likely GM Handbook, with a Core summary) |
| 20.8 | World state in brief: indicators and era thresholds | F02.07; DN 8.1 | Ready (summary; GM Handbook owns) |
| 20.9 | Where to go next: GM Handbook, Zero Day | F29 | Ready |

### Chapter 21 — Complexity modes and optional rules

| § | Subheading | Source | Status |
|---|---|---|---|
| 21.1 | Presets: Quick Start to Simulation, and Custom | F28 Presets | Ready |
| 21.2 | Configuration matrix by subsystem | F28 | Ready |
| 21.3 | Changing modes mid-campaign | F28 Changes | Ready |
| 21.4 | Optional rules index (circumstance die, Means, bulk, push, disuse, persistent trauma, targeted effects) | DN R02, R04, 7.1, 7.2, 2.8, 4.2, 4.4 | Ready (CONTENT NEEDED: compile) |
| 21.5 | Writing your own options (pointer) | F27; Homebrew Creator's Guide | Ready |

## Part VII — The Blackbox Protocol era (separate setting part, DN 8.5)

### Chapter 22 — The contemporary world

| § | Subheading | Source | Status |
|---|---|---|---|
| 22.1 | 2026 and a flexible starting year | F02; DN 9.1; Core publication note (US baseline, international use) | Ready |
| 22.2 | The fifteen canon principles | CANON-AND-SESSION-ZERO.md Part 1 (approved 2026-11-25) | Ready |
| 22.3 | Everyday life, technology and communications † | None beyond the baseline statement | CONTENT NEEDED |
| 22.4 | Institutions: law, health, education, government † | DN CCDD-07 (institutions); F16 authority | CONTENT NEEDED |
| 22.5 | Fictional regions and settlements | REGIONS-AND-SETTLEMENTS.md (approved) | Ready |
| 22.6 | Organizations and corporate powers (Cindrix, Veydran, Asterion) | ORGANIZATIONS.md; CORPORATE-AND-RETAIL-GUIDE.md (Cindrix approved) | Ready / Veydran and Asterion detail **REVIEW** |
| 22.7 | Early warning signs | DN 8.3 (per scenario) | Ready |
| 22.8 | Beyond the Blackbox Protocol era: Signal Lost and Dead Zone | F02.01; DN 8.1–8.3; setting books | Ready (pointer) |

### Chapter 23 — Campaigns in the Blackbox Protocol era

| § | Subheading | Source | Status |
|---|---|---|---|
| 23.1 | Kinds of campaign: civilian, professional, investigative, criminal, political and more | DN CCDD-15 | Ready |
| 23.2 | Mission boards | MISSION-BOARDS.md | **REVIEW** (proposed) |
| 23.3 | Adventure seeds | SUPPORTING-CONTENT §1 | Ready (approved) |
| 23.4 | Optional event tables | SUPPORTING-CONTENT §3 | Ready (approved) |
| 23.5 | Optional anomalies (pointer) | F25; Anomaly Compendium | Ready |
| 23.6 | Introductory scenario in Core? † | Zero Day is its own book (DN 10). CoC includes starter scenarios in its core book | **DESIGN NEEDED**: decide whether Core carries a short scenario or only points to Zero Day |

## Back matter

| § | Item | Source | Status |
|---|---|---|---|
| A | Conditions quick reference † | Ch. 13.16 | Depends on 13.16 |
| B | Reference charts | MANUAL-CHARTS.md | Ready |
| C | Pregenerated characters | PREGENERATED-CHARACTERS.md | **REVIEW** |
| D | Character sheet and trackers | PR #5 | REVIEW until merged |
| E | Probability tables | DN R06 | Ready |
| F | Book guide and rule ownership | GLOSSARY-AND-RULES-INDEX.md Part 2; F29 | Ready (add social row) |
| G | Glossary | GLOSSARY-AND-RULES-INDEX.md Part 1 | Ready; update as chapters land (DN 9.3) |
| H | Index | — | After layout |
| I | Inspirational media † | None (D&D PHB has an inspirational reading appendix) | CONTENT NEEDED (optional) |

---

## Benchmark comparison: what the three core books cover and where Blackbox stands

Topics only; no text or mechanics from these books are used.

| Topic in benchmark core books | D&D 5e PHB | CoC 7e Keeper Rulebook | Pathfinder 2e | Blackbox Core chapter | Blackbox status |
|---|---|---|---|---|---|
| Introduction and example of play | Yes | Yes | Yes | F.5 | CONTENT NEEDED |
| Step-by-step creation | Ch. 1 | Ch. 3 | Ch. 1 | 3 | Ready |
| Species / ancestry | Yes | — | Yes | — | Not applicable (grounded humans) |
| Class / occupation | Classes | Occupations | Classes | 6 | Ready |
| Background, backstory, connections | Yes | Yes | Yes | 8 | Partly CONTENT NEEDED |
| Age effects | — | Yes | — | 4.9 | DESIGN NEEDED |
| Feats / talents | Feats | — | Feats | 7 (competencies), 6.7 (advantages) | Ready |
| Multiclass / multiple roles | Yes | — | Archetypes | 6.3, 19.14 | Ready |
| Ability checks and skills | Yes | Yes | Yes | 2, 5 | Drafted / Ready |
| Hero resource (Luck, Inspiration, Hero Points) | Inspiration | Luck | Hero Points | 2.10 | DESIGN NEEDED |
| Time, exploration, downtime | Yes | Partial | Yes | 9 | Ready; downtime menu CONTENT NEEDED |
| Social interaction | Yes | Partial | Yes (GM book) | 10 | Ready (was missing) |
| Investigation and clues | Light | Central | Light | 11 | Summary Ready |
| Combat core | Yes | Yes | Yes | 12 | Ready |
| Grapple, chases, firearms details | Yes | Yes | Yes | 12.14–12.17 | DESIGN NEEDED (PR #8) |
| Area effects, vehicles | Yes | Partial | Yes | 12.18–12.19 | DESIGN NEEDED |
| Damage, dying, healing | Yes | Yes | Yes | 13 | Ready |
| Sanity / stress | — | Central | — | 13.9–13.13 | Ready |
| Conditions list | Appendix | — | Appendix | 13.16, App. A | DESIGN NEEDED (partial) |
| Environment and hazards | Yes | Partial | Yes (GM book) | 14 | Mostly Ready |
| Equipment, prices, weapons table | Yes | Appendix | Yes | 15 | Generic table DESIGN NEEDED |
| Money and wealth | Coins | Credit Rating | Coins | 16 | Ready (Means ≈ wealth rating) |
| Travel and mounts | Yes | — | Yes | 17 | Modifiers and mounts DESIGN NEEDED |
| Crafting | Downtime | — | Yes | 18 | Workmanship DESIGN NEEDED |
| Advancement | Levels | Experience checks | Levels | 19 | Ready; gate decision open |
| Magic | Yes | Yes | Yes | 23.5 | Optional, Anomaly Compendium |
| GM / Keeper guidance | DMG | Yes | GM Core | 20 | Partly Ready |
| Monsters / NPCs | MM | Yes | Bestiary | 20.6 | Format Ready; sample decision open |
| Setting and eras | Light | 1920s / modern | Golarion | 22–23 | Ready with CONTENT NEEDED |
| Starter scenario | — | Yes | — | 23.6 | Decision open |

## New gaps found by this outline

Design rulings needed (no rule exists; do not draft until decided):

1. **Hero resource**: does Blackbox have Luck / Inspiration / Hero Points, or explicitly none (ch. 2.10)?
2. **Age effects** on attributes or skills, or explicitly none (4.9).
3. **Personal traits with mechanical effect**, or explicitly none (8.7).
4. **Larger-scale play**: organization, operational and strategic resolution, promised by CCDD-01/15 and listed in CCDD-09 E (9.6).
5. **Followers, employees and allies** controlled or hired by players (9.7).
6. **Range-band inherent difficulty defaults** and a **generic weapon and armor table** (12.7, 15.6).
7. **Area effects and explosives** (12.18).
8. **Vehicles in conflict, chases and collisions** beyond H-12 (12.19).
9. **Exertion costs** for forced pace and heavy labour, which DN 4.3 hands to Section 7 but Section 7 never defines (13.8).
10. **Less lethal campaign variant**, mentioned in DN 4.3 but not defined (13.15).
11. **Missing conditions**: unconscious, held/restrained, prone, blinded (13.16).
12. **Travel modifiers** for terrain, weather, load and fatigue (17.6).
13. **Animal-powered and mounted travel**: horse, cart, pack animal (17.7).
14. **Legal consequences**: arrest, courts and penalties in the Blackbox Protocol era (20.7).
15. **Sample NPCs and animals in Core** or GM Handbook only (20.6).
16. **Starter scenario in Core** or Zero Day only (23.6).

Already-known open rulings that this outline places:

- PR #8 combat subsystems G1–P2 (12.14–12.17, 13.14, 14.4) are archived proposals on `main`, NOT canonical rules.
- Crafting workmanship thresholds (18.6).
- Playtest issue 6: reconcile this old CDR question against the later locked simplified training decision before drafting (19.7).
- Simulation issue #5 survival correction (14.8).
- Review of delegated defaults 2.3, 2.4, 2.8 and secondary background packages (6.13).
- Occupation allocation semantic audit and PR #3 flagged allocations (6.6).
- Pregens, starting inventories, mission boards, progressive crafting (REVIEW rows).

Content needed (rules settled, material missing): example of play, worked examples per chapter, sample uses per skill, authored occupation profiles, backstory prompts, downtime menu, conditions compilation, contemporary everyday life and institutions, safety-tool guidance, optional-rules index, inspirational media.

Housekeeping found while mapping:

- Rules index has no row for **social interaction** (F16). F29 says Core owns it.
- **DN 2.4** (3/5/7 specialization slots, +0/+5/+10/+15 stages) and **DN 1.2** (old derived formulas) still read as current, though superseded by CCDD-11/20, DN 5.5/5.7 and DN 3.4. Label them Superseded (DN Outstanding 1.4).
- **PR #7** amendments to DN 4.1/4.3 are approved but not on this branch; chapters 12–13 must use the amended text.
- The chatgpt/core-rulebook-manuscript branch has a parallel 455-line outline with generic subheadings, a chapter 3 draft, and its own canon-principle record. Reconcile it with this branch before drafting chapter 3.


## Reconciliation audit — 2026-11-27

This is a **comprehensive drafting map**, not an assertion that every chapter is manuscript-ready. Before any section is drafted, verify its cited source against the latest canonical `main` rules and rule ownership index. A status of Ready in the inherited map means a source was identified, not that it has been revalidated today.

### Confirmed outline corrections

- PR #9 targets the old PR #4 branch, not `main`. Its base must be changed or its outline change ported onto an up-to-date manuscript branch before eventual merge. Do not merge the obsolete parent branch.
- PR #7 was closed as superseded. Its half-DEX evasion and critical-only instability must not reappear; F12/F13 on `main` control.
- PR #8 merged only as documented historical proposals. Grappling, chases, rapid fire, poison and other drafts must not be presented as adopted rules without separate approval.
- PR #5 merged corrected HTML and generator; obsolete printable PDFs were removed. The outline must not promise an existing current PDF.
- Economy drafting must use the later flat starting-funds plus occupation-based monthly-pay decision rather than older history/Means wording where contradictory.
- Training/CDR and psychology sections must be checked against later approved simplifications; old unresolved-issue language is not a new design mandate.
- The Player's Handbook should give players the procedures they need, while chapter 20's GM operations and chapters 22–23's setting/campaign material are shared Core content; detailed GM adjudication belongs in the separate GM Handbook.

### Editorial completeness requirements

Every rules chapter needs: a plain-language purpose, player-facing procedure, explicit GM decision points, cross-references to canonical rule IDs, at least one worked example, and a compact quick-reference table where useful. Chapter 3 needs a complete legal four-character creation walkthrough; chapter 12 a turn-by-turn encounter; chapter 13 a continuous injury/stress/recovery example; chapters 15–19 an integrated gear/money/travel/crafting/training example. Examples must use actual rules, not invented numeric defaults.

Before manuscript sign-off, add an accurate contents page, terminology glossary, source/ownership index, consolidated conditions table, character sheet and tracker print verification, rules charts, edition/version identification, and an end-to-end GM-plus-four-player playtest script. Do not count missing examples or unapproved optional systems as passed tests.

### Outstanding verification, not automatic design authorization

1. Compare all 23 chapters and appendices with the latest F-docs, DESIGN-NOTES, JSON occupation and inventory records, and locked decisions; mark each subsection Verified, Needs revision, Missing content, or Truly undecided.
2. Resolve old proposed rows against newer approvals before asking for new design decisions. In particular: psychology, CDR/training, starting funds/pay, weapon damage/dice, instability and evasion.
3. Confirm optional subsystems are either explicitly approved or labeled noncanonical; avoid adding hero points, age penalties, alignment-like traits or extra dice just because another RPG uses them.
4. Confirm chapter ownership across Core, Player's Handbook, GM Handbook, Survival, Investigation and setting books; eliminate duplicate conflicting procedures.
5. Rebuild cross-references and verify printable artifacts after the chapter order changes.

**Audit disposition:** outline structure retained and corrected; comprehensive coverage established at the chapter-map level. Full source-by-source verification and final manuscript approval remain open. No gameplay mechanics are changed by this outline.
