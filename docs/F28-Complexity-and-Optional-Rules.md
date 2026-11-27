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

## Advanced dedicated reference verification and F29 handoff (2026-11-26)

`tests/f28-complexity-advanced-reference.test.mjs` adds ten passing equivalent-JavaScript reference fixtures (20 dedicated F28 cases total) for Custom preset dependency closure, incompatibility and unknown-rule rejection, independent subsystem selection, table-approved meaningful-boundary changes, no partial mutation on failed validation, prechange snapshots, disabled-module event suppression, historical loss retention and unknown field preservation. The test's `detail-food`, `food-expiry`, `fast-food` and `maintenance` IDs are **synthetic fixture identifiers**, not newly approved canonical module IDs or mandatory dependencies.

**Disposition:** F28 is conditionally passed at dedicated reference level. The fixture models a single prevalidated transition and a memory snapshot; it does not certify persistent rollback, dependency-safe disabling of already scheduled F24 events, complete F27 layer resolution, automatic conversion of existing records or player accessibility. Quick Start and Casual remain presentation simplifications with unchanged core arithmetic; Custom permits independent choices subject to declared dependencies and incompatibilities. Historical loss and consequences remain authoritative even when optional tracking is disabled.

**Remaining gates:** real optional-rule manifests and versioned dependencies, F27/F31 production integration, atomic durable migrations and audit, pre-existing event lifecycle, preset workload measurement, full Node CI and F36 human playtesting. F29 presentation work must consume effective campaign configuration without creating new gameplay calculations or making optional detail mandatory.
