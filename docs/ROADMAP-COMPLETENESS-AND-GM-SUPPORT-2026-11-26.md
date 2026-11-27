# Blackbox Protocol — Forward Roadmap: Completeness and GM Support
**Established:** 2026-11-26  
**Status:** Approved direction; audit findings and new rules not yet approved.  
**Scope:** Tabletop rules and publication readiness. Software implementation remains a separate workstream.

## Baseline and constraints
- The F01–F37 foundation, catalogue reconciliation, approved training/CDR decisions, automated reference verification and FV-10 migration scan form the existing baseline. Do **not** repeat blanket competency, occupation, balance or synthetic-fixture audits without a concrete discrepancy or changed rule.
- The owner reports a successful **small solo human playtest**. This is preliminary evidence, not independent multi-player acceptance.
- The Core Rulebook manuscript is being written in a **separate workstream**. Do not edit its manuscript files or replace the other eleven publication outlines under this roadmap without explicit authorization.
- The existing **GM Handbook** is one of the locked twelve books, not a thirteenth title. Shared mechanics remain authoritative in Core; GM Handbook provides adjudication, procedures, preparation tools and examples, without inventing alternate dice/combat/advancement systems.
- Follow `AGENTS.md`, `notes/DESIGN-NOTES.md`, F29 ownership, the foundation guardrails and the approved editorial style rule. Never silently change approved numeric mechanics.

## Phase 1 — Targeted mechanical completeness audit (first)
**Goal:** Determine whether an unfamiliar GM and players can run the game without inventing missing procedures. Audit the **actual canonical rules**, not merely whether a document or reference test exists.

**Audit each domain:** (1) character creation and legal starting choices (F07–F09), (2) resolution/difficulty and edge cases, (3) time/initiative/action economy (F11), (4) combat/defense/conditions and NPC opposition (F12), (5) injury/stress/recovery (F13–F14), (6) advancement/training/occupational authorization (F08–F10), (7) investigation/social (F15–F16), (8) equipment/economy/travel/survival (F17–F20), (9) crafting/construction (F21–F22), (10) factions/world events (F23–F24), (11) optional modules and transitions (F25/F28, BP→SL→DZ), (12) adventure and GM-facing play loop (F26/F29).

For **each actionable player/GM task**, capture:
- **Task and scenario**; **canonical source with section/rule ID**; required inputs; exact procedure; outputs/consequences; cross-system dependencies; at least one usable example or fixture.
- **Classification:** COMPLETE (executable), UNDERDEVELOPED (defined but insufficiently executable), MISSING (no authoritative procedure), DOCUMENTATION ONLY (procedure exists but presentation/examples absent), or INTENTIONALLY DEFERRED/OTHER BOOK (name owning publication). Add **UNVERIFIED** when source review cannot support a classification.
- **Severity:** BLOCKER (prevents core play), MAJOR (frequent GM invention/inconsistency), MINOR (rare edge case/clarity), or OPTIONAL (not required for core play). Do not call an optional specialty feature a core gap.
- **Remediation:** exact owner file, minimal change, dependencies, regression or table test, and evidence required for closure.

**Deliverable:** `docs/audits/TARGETED-COMPLETENESS-AUDIT.md` with a task-by-task matrix, cited source sections, concrete reproductions and a prioritized issue register. Audit must cover **actual rule text and interactions**; a list of section titles is insufficient. Compare functional capabilities—not page count, genre-specific magic, or content volume—with D&D 5e/2024, Pathfinder 2e and Call of Cthulhu 7e. Do not copy proprietary rules or text.

**Exit gate:** All core-play blockers identified, no unsupported claim of full completeness, and a prioritized, bounded repair queue. Audit itself does not approve new mechanics.

## Phase 2 — GM support specification and practical toolkit
**Goal:** Provide a GM with enough practical guidance to run an unfamiliar table consistently, while preserving player agency and GM final authority.

**Required coverage and acceptance examples:**
1. **First-session setup:** session zero, tone/safety boundaries, era and complexity selection, group creation, equipment availability, and a printable first-session checklist.
2. **Resolution adjudication:** when not to roll, how to set stakes and difficulty, choose governing skill/competency, apply modifiers once, resolve opposed actions, partial outcomes, retries and unexpected player plans; at least six worked cases grounded in canonical mechanics.
3. **NPC and opposition preparation:** fast NPC profile template; competent/noncombatant/hostile examples; derived stats, resources, motives and nonviolent options; encounter feasibility and risk guidance without encounter-level or challenge-rating rules invented by analogy.
4. **Encounter operation:** initiative/turn reference, cover and range, conditions, morale/withdrawal, injury/recovery, environmental consequences; one end-to-end example using F11–F14.
5. **Investigation facilitation:** scenario truth vs character knowledge, independent essential clue routes, interview/evidence adjudication, failed-roll consequences, timeline and clue trackers; one solvable case flow using F15.
6. **Campaign operation:** prep-light and detailed procedures, clocks/calendar, NPC/faction actions, world-state changes, downtime, training, money, scarcity, and session-close continuity using F10/F18/F23/F24/F26.
7. **Three-era GM guidance:** starting in BP, SL or DZ; crisis/reconstruction differences; transitions, resource loss and retained character progress without rewriting core rules.
8. **Ready-to-use aids:** GM quick reference, difficulty/modifier sheet, NPC record, encounter tracker, evidence board, faction/world clock, downtime/training log, session record and session-zero checklist. Each has instructions and printable fields.
9. **Troubleshooting:** rules disputes, missing facts, player improvisation, stalled investigations, unexpectedly lethal outcomes, accessibility and optional complexity; avoid forced plots or retroactive hidden target changes.

**Ownership:** Shared player-facing rules and minimal essential GM instructions in **Core Rulebook**; extended GM advice, examples, campaign tools and scenario design in **GM Handbook**. Support files may be developed in `docs/gm-support/` before manuscript authoring, with source references and no duplicate mechanics.

**Exit gate:** A GM unfamiliar with the design can use the toolkit to prepare and adjudicate a representative session, including unexpected player choices, with no new core rule invention. Record gaps rather than disguising them as GM discretion.

## Phase 3 — Repair confirmed gaps, narrowly
- Work in priority order: BLOCKER → MAJOR → MINOR. Fix documentation-only gaps through examples/cross-references first.
- Where a **genuine mechanical gap** is found, propose the smallest compatible rule, note its owner and dependencies, and obtain owner approval for substantive/numeric changes before treating it as canon.
- Add targeted regression fixtures **only for a new or changed procedure**; update downstream references and rule-ID/edition mappings. No global retest or training-system redesign by default.
- Maintain a traceable issue-to-fix-to-retest ledger. Close only with cited evidence.

**Exit gate:** No unresolved core-play blockers; remaining exceptions explicitly scoped, deferred or accepted by owner.

## Phase 4 — Core/GM publication handoff (not manuscript takeover)
- Produce a **Core Rulebook integration checklist** for the separate manuscript author: essential shared mechanics, minimal GM instructions, examples, reference IDs, creation-to-play walkthrough, conditions and printable sheets.
- Produce a **GM Handbook chapter-level specification** from Phase 2 findings, respecting F29 ownership. **Do not draft the GM Handbook manuscript yet** without an explicit start decision.
- Cross-reference the twelve locked books; avoid duplicating Core mechanics or pulling specialized survival/investigation catalogues into Core unnecessarily.
- Keep the Zero Day adventure as an outline until explicitly authorized for manuscript development.

**Exit gate:** Each audited task has a publication owner and a clear reader path; manuscripts can be written without silently inventing missing mechanics.

## Phase 5 — End-to-end acceptance and release gates
1. **Solo owner walkthrough:** repeat a full create → investigate/social → conflict or avoidance → recovery → downtime/advancement → session-close loop using only documented instructions; log all GM inventions.
2. **Independent GM/new-player trial:** a GM and players unfamiliar with development attempt the same loop; observe ambiguities, setup time, recordkeeping and agency. Include BP first; add SL/DZ coverage before claiming all-era acceptance.
3. **Scenario acceptance:** finished introductory adventure, pregens/handouts and alternate solutions; no essential clue dead ends.
4. **Publication checks:** editorial consistency, cross-book IDs, printable/digital parity, accessibility, rights clearance and final owner approval. Actual software/device acceptance belongs to the separate digital roadmap.

**Exit gate:** New users can run core play from the published materials without creator intervention; any exceptions are disclosed. Only then declare publication-level completeness comparable to mature commercial RPGs.

## Immediate execution order
1. **Run Phase 1 now** and deliver evidence-backed, domain-by-domain audit findings.
2. Use the confirmed GM-related gaps to build the Phase 2 specification and tools.
3. Repair only evidenced blockers/major gaps; then hand the results to the Core manuscript author and prepare GM Handbook specification.
4. Complete end-to-end human acceptance after usable instructional materials exist.

## Definition of done and reporting
Every phase reports completed evidence, unresolved items, exact repository paths, commits, and next dependency. “Designed,” “reference-tested,” “solo-playtested,” “documented,” and “independently playable” are distinct statuses. No stage is declared complete from a roadmap entry or synthetic test alone.
