# F23 Factions and Organizations

Canonical DESIGN-NOTES F23; delegated working foundation, not final publication. Existing shared mechanics remain authoritative.

## Faction record
Stable ID, purpose, leadership, membership, assets, territory, influence, relationships, objectives, projects, known/hidden information and history. F16 owns individual reputation/authority; F17 assets; F22 facilities; F24 event queue. No universal hostility or global influence score.
## Independent actions
GM selects plausible objective, verifies resources/access, declares action, time, cost and uncertainty, schedules through F24, resolves existing checks where meaningful, applies consequences once. Delegated optional progress clock: positive integer target steps set before project, advance only on evidenced milestones, cap at target; completion requires actual prerequisites, not clock alone. No universal faction turn duration; review at meaningful campaign intervals. Concurrent factions share world clock, not player action budgets. Hidden intent remains GM-only; observable effects may be disclosed.
## Change and continuity
Cooperation, disputes, succession, split, merger, dissolution and rebuilding record provenance and asset transfers atomically; no duplicated membership/stock. Membership may overlap when fiction permits, but labor hours cannot. Standard goals/attitudes; Advanced projects/resources/clocks; Simulation internal divisions and regional competition. Example two communities negotiate shared service capacity without compulsory conflict. Faction sheet, relationship map and event tracker. F36 tests agency, pacing and bookkeeping.

## Initial reference verification (2026-11-26)

`tests/f23-factions-reference.test.mjs` adds ten passing equivalent-JavaScript reference fixtures for distinct faction objectives, evidenced progress clocks, prerequisite-gated completion, one-owner asset transfers, replay prevention, action access/cost declarations, F24 queue handoff, optional overlapping membership and retry after rejected events. These tests are illustrative foundation invariants, not a production faction engine, full Node CI run or human tabletop playtest. The fixture's four-step clock is an example only; the actual optional clock target is declared per project and is not a universal four-step rule.

**Cross-system authority:** F16 owns personal reputation and authority, F17 physical assets and transfers, F22 facilities and service, F24 scheduled world events, F11 elapsed time and F18 trade. F23 tracks faction objectives, relationships and provenance, but does not duplicate stock, assign automatic universal influence scores or turn a service deficit into compulsory hostility. Hidden objectives remain GM-only until observable effects are disclosed.

**Open gates:** real asset-transfer atomicity and faction succession/split/merger workflows, labor scheduling against F21/F22, cross-faction negotiations and player agency, information visibility, F24 event processing, F36 pacing and human playtests. F23 is under reference verification; no production closure claimed.

## Continuity verification and F24 handoff (2026-11-26)

`tests/f23-factions-continuity-reference.test.mjs` adds ten passing equivalent-JavaScript reference fixtures (20 F23 fixtures total) covering succession, split and merger identity, single-owner asset provenance, rejected-event retry, cross-faction worker time exclusivity, GM-only information projection and event history. The simplified split fixture transfers named members out of the predecessor; the governing F23 rule still permits overlapping membership where fiction warrants, so the fixture is not a universal mandatory removal policy. Merger leadership must be established by fiction/GM adjudication rather than silently inherited. Asset transfers in these fixtures are in-memory reference operations, not production F17 atomicity.

**F23 reference disposition:** conditionally passed for currently modeled invariants, not production- or human-playtest-complete. F24 must schedule and resolve independent faction actions using stable IDs, actual prerequisites and a single shared world clock; F23 retains faction purpose, leadership, relationships and knowledge visibility. F16 retains individual reputation, F17 asset authority, F21/F22 labor/facility authority, and F18 trade. F24 must not duplicate faction asset changes or expose GM-only objectives merely because an event was queued.

**Open gates:** real transactional split/merger migrations, disputed ownership, cross-faction diplomacy and player agency, faction-specific calendars and action costs, F24 event-resolution integration, canonical data migration, Node CI and F36 human testing.
