# F26 Adventures and Campaign Design

Canonical DESIGN-NOTES F26; delegated working foundation, not final publication. Existing shared mechanics remain authoritative.

## Adventure contract
Support starter, case file, operation, incident, crisis, expedition, survival scenario, campaign, sandbox, chronicle and toolkit. Template: ID/version, premise, era/date, audience, duration, tone/boundaries, prerequisites, briefing, locations, NPCs/factions, objectives, essential/optional clues, events, obstacles, alternative approaches, consequences, scaling, handouts and continuation. GM-only truth separate from player materials. No forced plot outcome or mandatory combat.
## Preparation and play
Validate references, feasible entry points, F15 clue redundancy, timeline dependencies, resources and alternative approaches. Mission board presents choices with stakes and deadlines, not forced quests. Resolve using shared mechanics; failed actions alter time/resources/knowledge rather than arbitrary dead ends. Scale by declared fictional circumstances and available resources, not hidden retroactive target changes. Pregen and custom characters use F07 rules; no mandatory occupation. End with consequences, F10 advancement review and F24 world updates.
## Zero Day teaching sequence
Delegated instructional outline, not final plot: briefing → accessible evidence → interview → location investigation → optional independent secondary dice example → deduction → meaningful danger/alternative resolution → debrief/advancement. Each stage teaches one core procedure with GM prompts and printable/digital handouts. Essential clues have independent routes; no required solution method. Solo/GM-less future optional, not initial requirement.
## Campaign records
Session log, objective state, timeline, NPC/faction links, evidence, unresolved consequences, player handouts, continuation hooks and accessibility alternatives. Standard concise scenario; Advanced branching dependencies; Simulation persistent world links. Actual Zero Day plot, pregens, handouts and adventure manuscripts remain production content; F36 tests teaching, solvability and pacing.

## Initial reference verification (2026-11-26)

`tests/f26-adventures-reference.test.mjs` adds ten passing equivalent-JavaScript reference fixtures for scenario identity and preparation, independent F15 essential clue routes, optional clue separation, player/GM information boundaries, multiple approaches and outcomes, and F10/F24 session-close handoff with duplicate prevention. The scenario is a **synthetic fixture**, not the approved Zero Day adventure plot or a completed adventure manuscript. The test requires an explicit advancement review at closure; this is a review opportunity, not an automatic XP or competency award.

**Authority boundaries:** F07 owns character creation, F10 advancement, F11 timeline, F15 evidence, F23 factions and F24 persistent world events. F26 specifies scenario choices and references those systems; it must not implement alternate mechanics, force combat or mandate an occupation. Essential clues require independently reachable routes and a GM response to blocked approaches; the fixture detects a complete dead end but does not itself repair one. GM-only truth and hidden faction objectives remain excluded from player handouts.

**Open gates:** actual Zero Day teaching-sequence validation, multi-session branching and consequence reconciliation, resource/time failure-forward playtests, real F24 world-event transactions, accessible alternate approaches, pregen/custom character parity, full Node CI and F36 human playtests. F26 remains in reference verification.
