# F17 Equipment and Inventory

Canonical DESIGN-NOTES F17; existing F04–F14 mechanics remain authoritative. Delegated working foundation, not final publication or human-tested rules.

## Item and stock model
Stable item definition ID, instance/lot ID, owner, custodian, location, access, condition, quantity/unit, mass/bulk, compatibility, requirements, availability, cost basis and rule references. Ownership does not imply possession or usability. Shared stock is one authoritative ledger, not copied into personal inventory. Transfer atomically debits source and credits destination; reservations reduce available quantity but not physical stock; consumption reduces stock once. No negative quantities, duplicate transactions or unit mixing without explicit conversion.
## Capability and load
Reference carrying load STR×0.5 kg using effective STR; not hard maximum. **Unit reconciliation (approved Design Notes §7.1):** equipment item masses and inventory load totals are recorded in pounds and ounces. Convert the derived carrying reference to pounds for comparison: STR×0.5×2.2046226218 lb (approximately STR×1.10231 lb). The kg expression is the original mechanical definition, not a mandate to record item masses in metric. Convert only once; do not compare raw pound totals to the unconverted kg reference. Sum carried mass including containers and contents once; do not count remote stock. Proposed provisional load bands ratio <=1 normal, >1 burdened, >1.5 heavily burdened; GM checks feasibility, F19 owns travel effect. Zero reference with positive load requires adjudication, no division by zero. Condition labels usable/degraded/unusable; explicit wear events only, maintenance requires time/resources and applicable skill. No universal degradation rate. F12 abstract harm/protection rules remain authoritative; equipment assignments require calibrated catalogue.
## Modes and records
Standard counts relevant items/uses; Advanced mass, compatibility and maintenance; Simulation component lots, reservations and logistics. Starting kit per F07/F08; no duplicate secondary kit or transition refill. Example owned device with depleted power remains owned but unavailable for use. Inventory sheet, item cards, maintenance and shared stores ledger. F18 price basis, F20 consumables, F21 repairs. Catalogue statistics and price research remain production work.

## Approved calibration (2026-11-25)
User-approved numbers for this foundation are recorded in notes/DESIGN-NOTES.md, Outstanding work 7.1. That section is authoritative where it fills values this file left to calibration.
