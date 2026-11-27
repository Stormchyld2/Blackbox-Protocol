# F28 Complexity and Optional Rules

Canonical DESIGN-NOTES F28; delegated working foundation. Existing approved decisions preserved.

## Presets
Quick Start guided subset; Casual simplified tracking; Standard default complete core; Advanced detailed records; Simulation optional granular accounting; Custom independent subsystem choices. Presets select detail, not separate character systems. Core resolution, agency, continuity and authoritative records remain enabled or explicitly replaced by compatible alternative. Disabled modules generate no new effects; historical consequences persist.
## Configuration matrix
| Subsystem | Standard | Advanced | Simulation |
|---|---|---|---|
| Injury | Primary condition | Individual conditions | Care capacity |
| Food | Abstract rations | Quantity/expiry | Detailed resource flows |
| Agriculture | Harvest | Yield/season | Soil/pest records |
| Equipment | Condition | Maintenance | Components |
| Investigation | Clues | Reliability/custody | Procedure |
| Settlement | Stocks/projects | Labor/capacity | Infrastructure flows |
Quick Start/Casual simplify presentation without changing approved core arithmetic. Optional rules declare ID, purpose, applicability, dependencies, incompatibilities, inputs, procedure, modifiers, outcomes, example, GM guidance, references and conversion.
## Changes
GM previews dependency closure and affected records, obtains table agreement where agency/tone changes, snapshots, applies at meaningful boundary, records migration. Preserve HP, stress, skills, CDR, clock, stock and historical conditions; never reset to gain benefits. When detail increases, unknown historical fields stay unknown or GM explicitly establishes baseline; decreasing detail archives rather than deletes. Example disabling detailed spoilage stops future module events but does not restore lost stock. F36 tests workload and accessibility; no automatic numerical changes.

## Initial dedicated reference verification (2026-11-26)

`tests/f28-complexity-reference.test.mjs` adds ten passing equivalent-JavaScript reference fixtures covering the six named presets, six subsystem detail rows, approval before switching, HP/stress/skills/CDR/time/stock/condition continuity, history retention and no invented historical detail. The preset detail numbers in the test are **ordinal fixture labels** for Standard/Advanced/Simulation presentation levels, not gameplay modifiers, difficulty adjustments or newly approved rules. Quick Start, Casual and Custom are included as named presets, but their individual configuration closure is not yet modeled. The simple archived-preset record is a reference example, not a production migration format.

**Open acceptance gates:** actual optional-rule dependency/incompatibility closure, Custom independent module configuration, preview of affected entities, durable snapshots and atomic rollback, migration at meaningful campaign boundaries, inactive module event suppression, F27 campaign-layer precedence, full Node CI, F36 workload/accessibility and human tabletop testing. F28 remains in dedicated reference verification.
