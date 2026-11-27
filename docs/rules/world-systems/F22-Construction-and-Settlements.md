# F22 Construction and Settlements

Canonical DESIGN-NOTES F22; delegated working foundation, not final publication. Existing shared mechanics remain authoritative.

## Settlement record
Stable ID, location/map, population, leadership, housing, water, sanitation, food, energy, healthcare, workshops, storage, education, trade, labor, morale and infrastructure. Separate installed capacity, operational capacity, demand and actual service. Ownership/access and stock reference F17/F20. No prescribed political system.
## Construction and operations
Use F21 project contract with land/access, dependencies, labor, materials, tools, elapsed minimum, inspection and handover. Completed construction creates facility record, not automatic service. Operational capacity=min(installed capacity, staffing-supported capacity, input-supported capacity) in consistent service units; unavailable prerequisite can reduce to0. Demand shortfall=max(0,demand−delivered), delivered=min(demand,operational capacity). Declare staffing and upkeep per interval; no double-booked workers or stock. Maintenance/repair uses F21. Population changes through recorded arrivals, departures and other fictional events; no negative population, no automatic demographic rates.
## Governance and modes
Leadership/authority F16, factions F23, markets F18, world events F24. Standard summary and project queue; Advanced capacity, labor and upkeep; Simulation linked production and population trends. Example clinic installed capacity10, staffing6, supplies4 delivers at most4 service units; construction alone does not create care. Settlement sheet, map, facility and population tracker. Provisional capacity abstraction requires F36 calibration; actual construction and service tables remain production content.

## Approved calibration (2026-11-25)
User-approved numbers for this foundation are recorded in notes/DESIGN-NOTES.md, Outstanding work 7.4 (construction). That section is authoritative where it fills values this file left to calibration.

## Reference verification (2026-11-26)

`tests/f22-settlement-reference.test.mjs` adds ten passing reference fixtures for installed/staffing/input capacity limits, unavailable dependencies, demand shortfall, construction handover without instant operations, unique facility and population events, nonnegative population and exclusive worker time windows. All ten fixture functions passed equivalent JavaScript execution; full repository Node CI, durable shared-ledger integration and human tabletop playtests remain open. This is a simplified reference model, not a production settlement engine.

**Authority boundaries:** F21 governs project requirements, labor and construction completion; F22 records the resulting facility and independently assesses operational service. F17/F20 remain authoritative for physical materials and supplies; staffing must not be double-booked against F21 work. F11 controls time, F16 governance, F18 market exchange, F23 factions, F24 events and F13 harm. A service shortfall is recorded, not converted automatically into HP damage, population loss or a faction consequence.

**Open acceptance gates:** facility-specific unit conversions, service input consumption and upkeep, shared workers across projects and facilities, construction prerequisites and inspections, partial capacity during disruptions, settlement population event provenance, F36 calibration and human playtesting. No automatic demographic growth or new damage formula is authorized by these fixtures.

## Advanced reference acceptance and F23 handoff (2026-11-26)

`tests/f22-settlement-advanced-reference.test.mjs` adds ten passing equivalent-JavaScript reference fixtures (20 F22 fixtures total) covering project completion, inspection and access gates, failed-event retry, activation after handover, supply consumption, upkeep debits, cross-project worker exclusivity, disruption-driven reduced capacity, unavailable dependencies and duplicate-upkeep prevention. These fixtures use a simplified local supply object; **they do not certify integration with F17's production ledger or simultaneous writers**.

**F22 reference disposition:** conditionally passed for the modeled foundation invariants; not production- or tabletop-playtest-complete. F21 owns project completion and repair, F17/F20 own stock, F11 owns calendar intervals, F13 owns harm, F16 owns authority, F18 owns trade and F23 owns faction consequences. No service deficit automatically generates casualties, morale penalties, population change or political control. A completed facility retains identity during disruption and must be separately configured for operation. F23 may consume explicitly recorded facility-service facts without independently debiting F22 resources.

**Open integration gates:** authoritative lot transactions and reservation release, multi-facility shared-stock competition and actual concurrency, staff assignment across F21/F22, facility-specific service-unit conversion, ongoing upkeep and recovery timelines, settlement-specific construction data, F36 balance calibration, full Node CI and human playtesting.
