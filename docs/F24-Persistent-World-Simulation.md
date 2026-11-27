# F24 Persistent World Simulation

Canonical DESIGN-NOTES F24; delegated working foundation, not final publication. Existing shared mechanics remain authoritative.

## Authoritative state
F02 owns era/calendar principles; F11 owns clock; F17/F20 stock; F22 settlements; F23 factions. World record references those entities, not copies. Track actual state separately from character knowledge, regional indicators, dependencies, trends, scheduled events and immutable history. No automatic era transition or universal collapse threshold introduced.
## Update cycle
GM authorizes elapsed interval; stop at next meaningful due event; evaluate prerequisites against current state; resolve uncertainty with existing dice; apply approved effects atomically; record event ID, time, before/after, source and visibility; expose observable consequences; continue remaining interval. Same-time events adjudicated together; conflicting effects require GM resolution. Triggered events use unique IDs and causal links; repeated unchanged trigger cannot duplicate outcome. Failed prerequisites mark blocked or reschedule explicitly; no silent completion. Prevent infinite same-instant cycles by requiring GM review of recurring trigger chain.
## Modes and continuity
Standard relevant event list; Advanced regional clocks/indicators; Simulation linked resource flows only where relevant. GM-directed, scheduled and triggered events coexist. No real-world wall-clock advancement or simulation of irrelevant regions. Example transport restoration enables market reopening only when access and stock prerequisites hold. Snapshot and history preserve continuity; corrections audited. Dashboard, event queue and history specified. Era thresholds now approved in DESIGN-NOTES 8.1; official scenario canon remains unresolved; F36 tests causal consistency and workload.

## Approved calibration (2026-11-25)
User-approved numbers for this foundation are recorded in notes/DESIGN-NOTES.md, Outstanding work 8.1 (era thresholds) and 8.2 (Dead Zone timeframe). That section is authoritative where it fills values this file left to calibration.

## Initial reference verification (2026-11-26)

`tests/f24-world-events-reference.test.mjs` adds ten passing equivalent-JavaScript reference fixtures for due-event ordering, prerequisite checks, same-time GM adjudication, idempotent event IDs and trigger causes, event provenance, visibility, blocked events and deliberate campaign-clock advancement. This is a reference scheduler, **not** the F11 production clock, persistent storage, a certified Node CI run or a human tabletop playtest. The illustrative route/market facts are local reference state; actual records remain owned by F17/F20/F22/F23.

**Authority and causality:** F11 owns elapsed campaign time; F24 orchestrates events against authoritative entity references rather than shadow copies. A blocked event requires an explicit new decision to reschedule or abandon. Same-time conflicts must be resolved before applying competing effects, with GM approval and a traceable history. Queued hidden events do not grant players GM-only knowledge. Era transitions use approved DESIGN-NOTES 8.1 thresholds and require their specified adjudication; this suite does not implement or validate those thresholds.

**Open acceptance gates:** genuinely atomic same-time conflict batches and rollback, snapshot/correction audit, cycle detection and trigger-chain termination, persistent entity integration, regional workload bounds, era threshold tests, Node CI, F36 scenario calibration and human playtesting. F24 remains in reference verification.
