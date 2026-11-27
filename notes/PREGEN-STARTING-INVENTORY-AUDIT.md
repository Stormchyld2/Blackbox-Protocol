# Six pregen starting inventory audit — 2026-11-25
Status: **Audited; conditional recommendation, not owner-approved**. Sources: PREGENERATED-CHARACTERS.md, STARTING-INVENTORIES.md and EQUIPMENT-CATALOGUE.md, same branch.

## Results
All **47 listed item assignments** (7+8+7+9+11+7) match the exact ordered EQ IDs of their corresponding ordinary-tier occupation package. All **26 distinct EQ IDs** exist in the 145-entry equipment catalogue and have estimated weights and USD price bands. No brand-name product names appear in these six kit labels. All quantities are assumed **one catalogue unit per EQ ID**, including EQ-001 as a *pair* of radios and EQ-035 as a *set* of pliers.

| Character | Occupation | Units | Estimated dry kit mass |
|---|---|---:|---:|
| Dana Reyes | O-001 Private Investigator | 7 | 4 lb 7 oz |
| Marcus Oyelaran | O-110 Radio Communications Specialist | 8 | 7 lb 11 oz |
| Elena Vasquez | O-229 Firefighter | 7 | 4 lb 9 oz |
| Tomas Whitfield | O-291 Chef | 9 | 5 lb 14 oz |
| Priya Nair | O-148 Automotive Mechanic | 11 | 16 lb 1 oz |
| Samuel Okafor | O-057 Nurse | 7 | 5 lb 11 oz |

Weights sum catalogue **game-reference estimates**, not verified manufacturer masses. They exclude water contents, ordinary clothing, packaging, containers, consumable replenishment, and anything not separately itemized. Do not equate these dry weights with field loadouts or automatic encumbrance compliance. Price bands are representative contemporary USD estimates, **not starting cash grants**; catalogue pricing needs separate publication-quality review.

## Issues requiring editorial decisions
1. **Ownership vs access:** EQ-001 is a two-radio pair for Marcus and Elena; clarify whether privately owned or department-issued. Elena's department radio should ordinarily be authorized access, not automatic personal property. Likewise Marcus's laptop/radios may be employer-owned; Samuel's medication assortment and clinical instruments require lawful ownership/authorization. The package list alone cannot confer them.
2. **Carry burden:** Priya's 8 lb wrench/socket set and 16 lb 1 oz full kit should normally be stored at the garage or in a vehicle/tool bag, not treated as constantly carried. Mark location and whether accessible during the scene.
3. **Chef plausibility:** Tomas's hand saw is not obviously a personal culinary tool. It comes from the generic Crafting-family kit, but the occupational relevance should be justified or replaced with an existing appropriate item only after a targeted catalogue check. No silent substitution made.
4. **Medical boundaries:** Samuel's EQ-064 assorted medications must not imply unrestricted prescribing, controlled drug access or free hospital supplies; specify ordinary lawful personal OTC contents or GM-authorized clinical access. Keep medical resources and privacy subject to professional scope.
5. **Operational readiness:** Water bottle weight excludes water; batteries, chargers, protective cases, consumables and tools' packaging may be needed. Establish explicit inventory locations and quantities when finalizing sheets.
6. **Resource tiers:** All six sheets assume *ordinary*. Constrained removes two GM-selected items; well-supported may add listed extras or shared access. No occupation automatically grants weapons, armor, vehicles, property or cash.

## Recommendation
Approve the **item-ID mappings and estimated dry masses as a working baseline**, conditional on resolving ownership/access, the chef hand saw, medical contents and carry-location notes. Preserve existing game stats and backgrounds. Do not label these inventories fully approved until the owner reviews the exceptions.


## Reconciliation addendum — 2026-11-26 (current status)

The original 2026-11-25 audit above is retained as historical evidence and **must not be read as the current chef-kit disposition**. `notes/STARTING-INVENTORIES.md` records a subsequent correction: O-291 Chef's ordinary kit uses **EQ-076 Cookset instead of EQ-030 Hand saw**, and `notes/PREGENERATED-CHARACTERS.md` records agency-issued/owned gear boundaries, garage storage of Priya's heavy tools and ordinary nonprescription contents for Samuel's EQ-064. The original 47-assignment and dry-mass table was measured **before** this correction and should not be represented as a recalculated current-kit audit without rerunning the six-character totals.

**Current static inventory-index check (2026-11-26):** Parsed the live `STARTING-INVENTORIES.json` and catalogue table: **352** occupation records; **145** distinct EQ catalogue IDs; **zero** unresolved ordinary-kit EQ references; **zero** duplicate ordinary-kit EQ IDs within any occupation. The catalogue Markdown contains 147 matching EQ table rows because two IDs occur in repeated table contexts, not because there are 147 unique items. This check does not establish actual carried mass, ownership approval, legal access or full package acceptance.

**Unit compatibility:** All 352 occupation records retain a derived `referenceTotals.ordinary.weightKg` field even though the approved item-mass presentation is pounds/ounces. Treat the kilogram field as a legacy calculated convenience only; do not compare it directly to pound-denominated item totals. F17 now explicitly converts the original STR×0.5 kg carrying reference to pounds for inventory comparison. Do not delete or rename a JSON field without checking its consumers and migration requirements.

**Outstanding acceptance:** Recompute all six pregen kit weights and quantities from the current JSON/catalogue, then verify actual ownership/custody, location, loaded consumables, and scene-specific carried mass. The kit package remains proposed pending owner acceptance; the above static checks do not imply approval.
