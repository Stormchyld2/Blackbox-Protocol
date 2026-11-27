# Cross-source terminology and value audit — skills, psychology and economics

**Date:** 2026-11-26. **Scope:** Current `main` sources inspected directly: `notes/DESIGN-NOTES.md`, `docs/rules/characters/F09-Skills-and-Specializations.md`, `docs/rules/core-rules/F14-Psychological-Mechanics.md`, `docs/rules/world-systems/F18-Economics-and-Trade.md`, `docs/manuscripts/core-rulebook/02-resolution.md`, `notes/SKILL-NOTES.md`, `notes/OCCUPATION-INDEX.json`, `notes/STARTING-INVENTORIES.json`, `notes/MARKET-PRODUCTS.json`, `notes/MARKET-TOOLS-PRODUCTS.json`, `notes/MANUAL-CHARTS.md` and `notes/GLOSSARY-AND-RULES-INDEX.md`.

**Authority order:** DESIGN-NOTES is authoritative for mechanics and economics; SKILL-NOTES owns competency names and IDs; F09/F14/F18 are foundation summaries; MANUAL-CHARTS and glossary are derived publication references; JSON indexes are structured authoring data, not independent rules authorities. This pass does not claim human playtesting or individual semantic validation of 550 competencies.

## Confirmed matches

- **Skill foundation:** DESIGN-NOTES specifies **30** general skills. F09 repeats 30, the attribute-half base, competency levels I–V, competency task bonuses **0/+5/+10/+15/+20**, and D100 possible-target clamp **1–99**. The resolution manuscript uses the same attribute-half basis and target clamp.
- **Occupation-to-kit skills:** All **352** occupation profiles in OCCUPATION-INDEX have a matching entry in STARTING-INVENTORIES. The kit's lead-skill labels are present in the occupation index's primary-skill vocabulary. The index currently uses **26 of the 30** named general skills as primary skills; this is not an error by itself, because some skills may be secondary or absent from a particular occupation.
- **Competency catalogue:** SKILL-NOTES declares **550** named competencies, and F09 records an arithmetic audit of 550 records and 2,750 level rows with zero exceptions. This pass did **not** independently rerun the 550-record semantic or prerequisite validation.
- **Psychological values:** DESIGN-NOTES §4.4 and F14 agree on Stress **0–100**, initial **0** unless history differs, Resilience **floor((effective WIL + effective CON)/2)**, low/moderate/high event intensities **5/10/20**, and pressure penalties **−5/−10/−20** at strained/pressured/overwhelmed. Both distinguish Stress from HP and Stamina and reject an automatic supernatural sanity pool. The glossary's Stress, Pressure event and Resilience entries match this system.
- **Economy price tiers:** The **945** records in MARKET-PRODUCTS and the **124** tool entries have price_tier values matching the approved 2026 USD Means brackets in DESIGN-NOTES §7.2. All 124 tool IDs also occur in the integrated marketplace product index; they are the **same integrated products**, not 124 additional unique products.
- **Equipment references:** The **145** EQ archetype references in the marketplace cover the starting kit's EQ item IDs. Kits reference **archetypes**, not SKU IDs; testing kit IDs directly against `products[].id` would incorrectly report thousands of missing items.

## Mismatches repaired in this pass

1. **F18 starting money:** The F18 summary still referred to an *equal campaign purchasing allowance* and a *fictional credits* example. DESIGN-NOTES §7.2 instead requires starting funds from personal history, with group resource tiers as guidance and no universal allowance. F18 was corrected, including an integer-cent arithmetic example.
2. **F18 contemporary currency and Means:** The summary now explicitly uses real local currency (2026 USD baseline), optional Means 0–6 as an alternative to detailed currency for a character, and the approved Signal Lost scarcity guidance.
3. **Marketplace currency metadata:** Both MARKET-PRODUCTS and MARKET-TOOLS-PRODUCTS previously labeled their currency `fictional campaign USD`. Both now use the identical value `2026 USD reference prices (fictional product estimates)`, making clear that the **currency unit is real-world USD** while the **listed products and prices are fictional estimates**.
4. **Weight-unit metadata:** MARKET-TOOLS-PRODUCTS used `ounces (US customary)` while the integrated marketplace used `ounces`. Both now use the identical value `ounces`; numerical weights were not changed.

## Terminology rules for future manuscript and index work

| Concept | Canonical label | Canonical meaning |
|---|---|---|
| Learned general capability | **Skill** | One of the 30 general skills; exact spelling as in DESIGN-NOTES §1.3 |
| Named trained discipline | **Competency** | SKILL-NOTES name and ID; levels I–V; not interchangeable with a general skill |
| Eligibility record | **CDR** | Accumulated development rating, not a modifier or currency |
| Psychological pressure | **Stress** | Integer 0–100 record; not HP, Stamina, or a separate sanity score |
| Pressure reference | **Resilience** | Effective WIL/CON-derived threshold reference, not a spendable pool |
| Pressure event | **Pressure event** | Distinct fictional trigger with low/moderate/high intensity 5/10/20 |
| Functional bands | **Composed / Strained / Pressured / Overwhelmed** | Current stress band, highest applicable only |
| Simplified purchasing capacity | **Means** | Optional 0–6 rating; not combined with actual money for the same character |
| Monetary values | **2026 USD reference prices (fictional product estimates)** | Integer cents in JSON; no universal regional price guarantee |
| Product weight | **ounces** | Numeric `weight_oz`; display may be pounds and ounces |
| Occupation item references | **EQ archetype ID** | `EQ-###` points to a product archetype, not necessarily a purchasable SKU |
| Sale item reference | **SKU/product ID** | Exact product record identifier; several SKUs may share one archetype |

## Remaining editorial validation — not silently marked complete

- **Full manuscript concordance:** Only the existing Core Rulebook resolution chapter was inspected directly in this pass. Other manuals, including the full future GM Handbook and equipment publication, must be compared when their actual manuscript text exists. The project currently contains a mixture of working foundations, charts, authoring indexes and partial manuscripts.
- **Skills semantic coverage:** A matching spelling does not prove that an occupation's competency grants, specialization tags or assessment rubrics are semantically appropriate. OCCUPATION-INDEX explicitly says individual editorial validation and tag equivalence remain unconfirmed.
- **Psychology structured index:** No dedicated psychology-metrics JSON index was identified in the repository tree. A manuscript-to-JSON comparison for stress bands therefore cannot be certified. Do not create a second rules authority merely to manufacture a match.
- **Pricing evidence:** Tier arithmetic is consistent, but the marketplace's 945 product prices remain estimated authoring values. Research-based price validation and F36 playtesting are separate work.
- **Regression tooling:** A durable automated schema/concordance test should compare approved skill strings, product units, Means tiers, kit archetype references, psychological thresholds and publication glossary terms whenever these sources change.

**Result:** Confirmed terminology and arithmetic alignment in the inspected areas, with four metadata/documentation inconsistencies repaired. No unsupported claim of full cross-publication semantic validation or complete final-manual coverage.
