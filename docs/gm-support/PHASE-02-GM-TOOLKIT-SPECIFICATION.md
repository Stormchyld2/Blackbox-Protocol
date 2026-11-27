# Blackbox Protocol — Phase 02 GM Toolkit Specification
**Status:** Development specification; not a manuscript or new rules approval.
**Authority:** `notes/DESIGN-NOTES.md`, F07–F29 foundations, `docs/audits/TARGETED-COMPLETENESS-AUDIT.md`, and `docs/ROADMAP-COMPLETENESS-AND-GM-SUPPORT-2026-11-26.md`.
**Scope:** A GM-facing toolkit for running tabletop sessions. Core Rulebook manuscript remains owned by its separate author. No changes to dice, CDR, training, injury, economy or other approved mechanics.

## Operating principle
Every aid must answer: what does the GM need to know, where does the canonical procedure live, what must be recorded, and what happens next? Cite the controlling rule rather than restating it inconsistently. Printable forms should work without software. Do not turn optional bookkeeping into required play.

## Deliverable sequence and acceptance
| Order | Aid | Source ownership | Minimum fields / example | Acceptance check |
|---|---|---|---|---|
| 1 | First-session checklist | F07–F09, F26, Design Notes | Era, rules mode, tone/boundaries, player goals, starting funds and equipment, session premise, open questions | New GM can establish a playable starting state without inventing character rules |
| 2 | GM resolution desk reference | Design Notes R01–R06; F11, F15–F16 | Stakes, feasible approach, governing skill, difficulty, helpers, time, result, retries; six varied worked examples | Every example reproduces canonical arithmetic and respects no-roll clues |
| 3 | Fast NPC record | F07–F09, F11–F14 | Name/role, motive, capabilities, relevant skills, defense/condition, resources, reaction, exit option | GM can create noncombatant, competent and hostile opposition without invented CR/levels |
| 4 | Encounter and consequence tracker | F11–F14, F17 | Participants, initiative, action/turn state, positioning, equipment, conditions, morale/withdrawal, outcome | One nonviolent or violent scene can be resolved and consequences carried forward |
| 5 | Investigation worksheet | F15–F16, F26 | Scenario truth, essential clues, multiple routes, known facts, uncertain interpretation, time pressure, NPC response | Failed checks do not erase essential clues or force a single solution |
| 6 | Campaign/session ledger | F10, F18, F23–F24, F26 | Date, world changes, faction action, resources, training, next hook, unresolved consequences | Next session begins from recorded state without contradictory resource grants |
| 7 | Era transition sheet | F18–F20, F23–F24, F28 | Current era, local infrastructure, banking, supply, accepted trade, retained possessions and progress | BP→SL→DZ changes setting conditions, not underlying character mechanics |
| 8 | Troubleshooting and handoff checklist | F26, F29, all above | Unexpected plans, rules uncertainty, agency, safety, unresolved calibration, publication owner | No missing core rule is disguised as GM preference |

## Implementation boundaries
- **Economy:** The standard GM ledger tracks only cash, bank, monthly net income, one lifestyle cost, significant debt payments and remainder. No household, regional or tax simulation. In SL/DZ use local scarcity and trade.
- **NPC/encounters:** No D&D-style challenge rating or encounter balance formula unless separately approved; focus on capabilities, intent, terrain, risk and escape/de-escalation.
- **Investigation:** Distinguish freely available essential evidence from uncertain deductions; do not make progress depend on one roll.
- **Survival:** Design Notes §7.3 fractional deprivation correction is still pending owner confirmation; examples must not present it as approved.
- **Travel:** F19 fixed speed/exertion calibration remains open; do not invent definitive speed tables.
- **Money references:** Five lifestyle labels and approximate occupational net-pay approach are approved, but dollar amounts remain uncalibrated. Mark examples as illustrative rather than canon until calibrated.
- **Editorial:** Apply approved narrative guardrail for eventual manuscript examples, but this file is a production specification, not book prose.

## Required GM charts, tables and printable references
These are **deliverables**, not optional suggestions. Reproduce approved canonical values exactly; where source rules are incomplete, label the table **pending calibration** rather than inventing numbers. Each table must cite its controlling section/rule ID and indicate whether it is Core quick-reference, GM Handbook detail, or a specialist-book cross-reference.

| Priority | Chart / table | Controlling sources | GM use |
|---|---|---|---|
| Essential | Difficulty ladder and modifier reference | Design Notes R01–R06 | Choose difficulty, apply helpers and modifiers consistently |
| Essential | Check outcomes, opposed checks, retries and extended tasks | Design Notes R01–R06; F11 | Resolve unusual actions without flipping through prose |
| Essential | Turn sequence, initiative, actions and reactions | F11–F12 | Run encounters at the table |
| Essential | Cover, range, defense and combat situational reference | F11–F12 | Adjudicate combat positioning and risk |
| Essential | Injury severity, conditions, recovery and stabilization | F13 | Apply consequences without double-counting |
| Essential | Stress/psychological pressure and recovery | F14 | Resolve stress events consistently |
| Essential | NPC quick-build and opposition worksheet | F07–F09; F11–F14 | Prepare credible opposition without a challenge-rating subsystem |
| Essential | Skill/competency governing-reference and access lookup | F08–F09; canonical indexes | Choose legal governing abilities and prerequisites without rewriting indexes |
| Essential | Investigation clue and evidence decision table | F15 | Preserve essential clues while testing uncertain interpretations |
| Essential | Social approach and NPC reaction reference | F16 | Adjudicate negotiation and social consequences |
| Essential | Time, travel and exertion reference | F11; F19 | Track movement and time; fixed speeds marked pending where unapproved |
| Essential | Food/water, shortages and survival conditions | F20; Design Notes §7.3 | Use approved baseline; mark unapproved fractional correction pending |
| Essential | Equipment condition, encumbrance and supply | F17 | Manage gear and inventory |
| Essential | Scarcity, market access and barter reference | F18 | Run BP, SL and DZ economies with existing scarcity tiers |
| Essential | Monthly finances mini-table | F18; Design Notes §7.2 | One line: starting cash/bank, income, lifestyle, significant debt, remainder |
| Essential | Training, practice and advancement reference | F08–F10; approved CDR decisions | Apply canonical time and eligibility, no new progression gates |
| Support | Crafting, repair and construction quick tables | F21–F22; Design Notes §7.4 | Reference approved project scale/crew/time values |
| Support | Faction clocks, world-state and downtime tables | F23–F24; F26 | Track campaign continuity |
| Support | Era-transition infrastructure and resource matrix | F18–F20; F28 | Switch between BP, SL and DZ without altering core mechanics |
| Support | Session-zero, encounter, NPC, evidence and session-close printable sheets | F26; above references | Record only actionable table information |

**Presentation standards:** Prefer one-page tables where practical; show units, rounding and edge cases; use legible print layouts; put the controlling rule reference beside each table; supply a short worked example for non-obvious arithmetic. A GM must be able to use the table without needing to infer an unstated rule. These aids are produced under `docs/gm-support/` first; the Core author and GM Handbook author can then incorporate the appropriate references without duplicated conflicting rules.

**Build order:** (1) first-session checklist and canonical difficulty/check reference, (2) encounter/combat/injury/stress reference tables, (3) NPC and investigation sheets, (4) survival/travel/economy tables, (5) advancement, crafting, factions and era transition. Verify every numeric cell against source text before publication.

## Initial build task — first-session checklist
Create a single-page printable GM checklist with these ordered sections:
1. Campaign frame: era, location/year, rules complexity, premise, safety and content boundaries.
2. Party: character concept, attributes, occupation/skills/competencies, equipment and starting resources verified against canonical creation.
3. Opening situation: immediate goal, obvious information, two or more plausible approaches, time/pressure if any.
4. GM readiness: three NPC motives, relevant locations, likely difficulty decisions using R01–R06, consequence notes, fallback if players go elsewhere.
5. Session close: changed world facts, resources, conditions, practice/training eligibility, next-session hooks.
Each field should have a clear checkbox or short blank; do not reproduce the character creation rules.

## Verification register
- **Completed:** Phase 02 deliverable inventory, canonical ownership and acceptance criteria defined.
- **Next:** Author first-session printable checklist as a separate GM-support aid; then resolution reference with source-checked worked examples.
- **Open:** Human GM trial, §7.3 owner decision, travel calibration, income/lifestyle dollar calibration.
- **Not claimed:** GM Handbook manuscript complete, independent tabletop acceptance, or complete system certification.
