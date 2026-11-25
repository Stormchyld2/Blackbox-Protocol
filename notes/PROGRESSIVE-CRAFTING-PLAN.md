# Progressive Crafting, Repair and Manufacturing — mapping plan

Status: user-approved direction 2026-11-25; detailed numerical mechanics and recipe content are working proposals. Extends F21, not a new engine. F11, F17–F22, CCDD and existing resolution remain authoritative.

## Discipline map
Occupation IDs below verified against STARTING-INVENTORIES.json occupation names and lead skills; these are candidate occupational routes, not competency IDs or automatic qualifications. Generalist and adjacent occupations require specific competency verification. Agriculture and husbandry remain F20 production; construction remains F22; F21 handles applicable processing and projects without duplicating ledgers.

| Discipline ID | Discipline | Candidate governing skills | Occupation references | Product scope | Potential buyer | Cumulative recipe allocation BP / SL / DZ |
|---|---|---|---|---|---|---|
| CRD-01 | Carpentry and woodworking | Construction / Crafting | O-145, O-161, O-167 | Crates, handles, shelving | Ironfield; Cindrix | 5 / 12 / 32 |
| CRD-02 | Blacksmithing | Crafting / Mechanics | O-154, O-166 | Hooks, hinges, hand tools | Ironfield | 4 / 10 / 35 |
| CRD-03 | Metalworking and fabrication | Mechanics / Crafting | O-150, O-164, O-169 | Brackets, frames, hardware | Ironfield | 4 / 12 / 30 |
| CRD-04 | Leatherworking | Crafting | O-157, O-173 | Belts, pouches, straps | Ridgeline; Sentinel | 3 / 8 / 24 |
| CRD-05 | Sewing and textiles | Crafting / Construction | O-156, O-165 | Bags, clothing, patches | Cindrix; Ridgeline; Sentinel | 4 / 12 / 30 |
| CRD-06 | Electronics | Electronics | O-109, O-117, O-120 | Cable organizers, cases, device repair | CircuitPoint | 3 / 10 / 20 |
| CRD-07 | Mechanical repair | Mechanics | O-149, O-159, O-160, O-163, O-176 | Tool servicing, replacement assemblies | Ironfield | 3 / 12 / 28 |
| CRD-08 | Automotive repair | Mechanics | O-148 | Vehicle servicing, component restoration | Ironfield | 2 / 8 / 20 |
| CRD-09 | Cooking and food production | Crafting | O-291, O-292, O-293, O-318, O-319, O-329, O-330, O-331, O-332 | Meals, baked goods, preserved foods | Harvest; Cindrix Fresh | 5 / 14 / 36 |
| CRD-10 | Brewing and fermentation | Crafting / Science | O-291, O-319, O-332 | Fermented foods and beverages | Harvest; Cindrix Fresh | 2 / 5 / 15 |
| CRD-11 | Agriculture and horticulture | Agriculture | O-201, O-205, O-212, O-218, O-219 | Seeds, seedlings, produce | Harvest | 4 / 10 / 30 |
| CRD-12 | Animal husbandry | Animal Husbandry | O-202, O-204, O-213, O-220, O-222 | Animal products, livestock care | Harvest | 2 / 6 / 22 |
| CRD-13 | Pottery and ceramics | Crafting | O-172 | Containers, dishes, tiles | Cindrix; Harvest | 2 / 5 / 18 |
| CRD-14 | Soap and candle making | Crafting | O-344 | Hygiene goods, candles | Cindrix; Harvest | 2 / 6 / 16 |
| CRD-15 | Construction and masonry | Construction | O-152, O-168 | Bricks, building components | Ironfield | 3 / 8 / 24 |
| CRD-16 | Basketry and cordage | Crafting | O-344 | Baskets, woven goods, cordage | Harvest; Ridgeline | 2 / 6 / 12 |
| CRD-17 | General handicrafts | Crafting | O-344 | Household accessories | Cindrix | 0 / 6 / 8 |

Targets: 50 contemporary, 150 Signal Lost, 400 Dead Zone cumulative recipe records; 100 and 250 additional records respectively. Era feasibility is contextual, not automatic inheritance of modern supply chains. Allocations are editorial planning estimates, not quotas for new skills.

## Era progression
- Core: small specialist-oriented chapter; ordinary tools/materials, time, competency and one uncertain completion check. Personal crafting, maintenance, repair, commissions and supplier contracts. Routine feasible work needs no roll. No detailed production chains required.
- Signal Lost: salvage, shortages, substitute materials, refurbishment, local workshops and disrupted corporate contracts; existing F18 local quotes and F20 stock constraints.
- Dead Zone: full post-collapse crafting supplement, traditional and low-power workshops, material processing, apprenticeships, production chains, settlement industries and regional merchant trade. Corporate survival remains undecided per corporate guide.

## Equipment and repair mapping
Candidate durability and repairability ratings 1–5 for applicable durable items; separate current functional condition, commercial condition and performance. Durability only affects explicit significant wear events, not routine skill bonuses. Repairability informs declared project feasibility, tools, labor and parts; no universal repair discount. Quality 1–5 and complexity 1–5 are optional proposed descriptors, not automatic bonuses. Consumables may have null ratings. Existing usable/degraded/unusable rules preserved. Numerical reliability target and modifier proposal require explicit calibration; no automatic wear checks after every use. Repair updates existing instance; salvage consumes or retires source once and credits declared recovered materials once.

## Supplier contracts
Potential buyers are proposals, not guaranteed buyers. Corporate supplier portal is future standalone marketplace feature. Contract ID, buyer, supplier, approved recipe/output, quantity, unit payment, minimum acceptance criteria, delivery location/deadline, materials responsibility, inspection, rejection/rework terms, payment timing and status. Use F18 quotes, consent and integer currency; no guaranteed demand or automatic retail-price resale. F21 project reserves materials and labor; delivery transfers accepted goods once; payment occurs once on agreed terms. Means mode uses GM adjudication instead of cash ledger. Gross margin = accepted revenue minus materials, freight, fees and other declared costs; labor opportunity cost and overhead separately recorded. SL contracts require functioning local buyer; DZ local barter or scrip, no universal USD rate.

## Recipe record and dependencies
Stable recipe ID/version, discipline, era feasibility, output EQ/SKU or material ID and quantity/unit, competency IDs and minimum levels, tools, workspace, input lots/quantities, substitutions, labor hours, minimum elapsed time, capacity, difficulty, quality criteria, failure/rework and waste, repair target if applicable. Use F21 project state machine. No real-world hazardous fabrication instructions. New materials require stable IDs; no free conversion of retail packages into ration units. F17 owns stock and condition; F18 owns quotes/payment; F20 owns resources; F22 owns facility capacity; F24 owns world availability; F36 owns tests. 

## Work sequence
1. Resolve actual competency IDs and prerequisite/qualification gates for all 17 disciplines; audit adjacent occupation routes and missing coverage before adding any competency.
2. Define material/component schema and map existing EQ records; identify missing safe household goods and workshop inputs without duplicating SKUs.
3. Calibrate durability/repairability and repair project requirements; classify all applicable equipment and reconcile product variants.
4. Author 50 Core recipes and supplier acceptance profiles; validate input/output units, costs, labor and non-guaranteed margins.
5. Add 100 SL recipes and 250 DZ recipes; check era feasibility, substitutions, salvage yields and facility constraints.
6. Validate cross-system transactions, project interruptions, repair identity, stock conservation, supplier rejection and settlement capacity; record Claude-assisted tests separately from human playtests.
7. Integrate Core, Signal Lost, Dead Zone and Equipment/Survival compendiums; supplier portal specification only until software phase.

Open decisions: exact competency mappings, durability calibration, material catalogue, actual recipes and prices, supplier acceptance thresholds, corporate survival, and publication chapter placement. No recipes or new mechanical bonuses are authorized by this mapping alone.
