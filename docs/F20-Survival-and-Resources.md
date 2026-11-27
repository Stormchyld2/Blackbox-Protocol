# F20 Survival and Resources

Canonical DESIGN-NOTES F20; existing F04–F14 mechanics remain authoritative. Delegated working foundation, not final publication or human-tested rules.

## Resource accounting
Track food, water, shelter, sanitation, agriculture, livestock, preservation, energy and sustainable production as fictional systems. Resource types finite, renewable, recoverable, manufacturable, environmental. Source/lot ID, location, unit, usable stock, reserved stock, quality, expiry, replenishment, consumption and loss. F17 owns physical inventory; F20 records resource flows referencing same ledger. F21/F22 own production projects and facilities. No four-slot inventory limit adopted.
## Provisional abstract consumption
For immediate tabletop use, delegated fictional daily food and water demand each1 abstract ration unit per character per eligible day, not physical quantities or real survival guidance. GM declares altered demand before interval based on fictional conditions. Allocate available stock once; unmet demand records shortage, never negative stock. At each distinct daily shortage review, apply one provisional stamina loss5 per unmet resource category (food/water), capped at current stamina; no automatic HP loss or mortality timetable. Ongoing shortage may block recovery where fiction warrants; F13 governs actual harm and care. Shelter/sanitation/energy failures create declared contextual conditions or feasibility constraints, not universal daily damage. No duplicate penalty for same effect. These new defaults require F36 calibration.
## Production and losses
Stock balance opening+received+produced−consumed−lost−transferred; reservations not consumption. Validate nonnegative and consistent units, atomic transfers. Production requires declared inputs, labor, time, capacity, season and yield; no harvest before completion. Spoilage/contamination flag unusable stock, record loss once; no real-world treatment instructions. Renewable flow limited by declared capacity; no infinite replenishment. Example opening10+production4−consumption6−loss1=7.
## Modes and records
Standard abstract rations and conditions; Advanced quantities, quality, expiry and seasonal needs; Simulation optional detailed yields, labor and supply balances. Resource tracker, seasonal calendar, production ledger and shortage event IDs. Research-backed physical quantities, yields, exposure and deprivation calibration remain production tasks; F36 tests resource pressure and agency.

## Approved calibration (2026-11-25)
User-approved numbers for this foundation are recorded in notes/DESIGN-NOTES.md, Outstanding work 7.3. That section is authoritative where it fills values this file left to calibration.

## Reference verification and integration boundaries (2026-11-26)

`tests/f20-resources-reference.test.mjs` adds ten reference fixtures covering conservation, reservation exclusion, one-time loss and consumption, completed production and declared capacity, fictional abstract daily demand, duplicate shortage prevention, stamina clamping, and explicit package-to-ration conversions. All ten fixture functions passed equivalent JavaScript execution; full repository Node execution, a production ledger and human tabletop playtests have not been certified. These tests are reference behavior only, not researched real-world resource quantities.

F17 remains the sole physical stock authority; F20 resource records reference its lots and transactions rather than maintaining an independent duplicate inventory. F18 reservations do not consume stock, and F19 travel costs must not duplicate the same F20 daily ration allocation. F11 owns day boundaries and project time; F13 owns stamina/harm and recovery; F21/F22 own projects and facilities. A finished production event may credit only its declared output after inputs, time, capacity and labor are validated. The fictional one-unit food/water daily demand and five-stamina shortage consequence remain subject to F36 balance testing; no automatic HP damage or mortality clock is introduced.

**Remaining acceptance gates:** atomic cross-lot transfers and shared-stock concurrency, release of reservations, quality/expiry and spoilage eligibility, production input provenance, daily demand under partial-day travel and changing party sizes, shortage/recovery interactions, scenario economy calibration, full Node CI execution and human playtesting. F20 is ready to continue at reference-verification level only.
