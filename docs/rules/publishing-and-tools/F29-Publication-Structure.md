# F29 Publication Structure

Canonical DESIGN-NOTES F29; delegated working foundation. Existing approved decisions preserved.

## Locked initial twelve and ownership
| Publication | Authoritative scope |
|---|---|
| Quick-Start Rules | Guided presentation; references Core |
| Core Rulebook | Universal dice, attributes, creation, advancement, time, conflict, injury, stress, social rules; contemporary setting separate part |
| GM Handbook | Adjudication, factions, persistent world, campaign design |
| Signal Lost | Crisis setting, era-specific content |
| Dead Zone | Reconstruction setting, era-specific content |
| Transition Handbook | Forward transition and adaptation |
| Equipment Compendium | Item catalogue, inventory and equipment |
| Investigation Handbook | Investigation and evidence |
| Survival Handbook | Travel, resources, crafting, settlements, economic procedures |
| Anomaly Compendium | Optional anomaly mechanics and catalogue |
| Homebrew Creator's Guide | Package creation, extension and configuration |
| Zero Day | Starter adventure and teaching sequence |
Delegated ownership allocation resolves overlapping book scope; Core owns shared resolution, other books reference it. F28 configuration core guidance in Core, creator details in Homebrew. No additional initial books.
## Manuscript contract
Each rule has stable ID, owner, dependencies, procedure, inputs, outputs, examples, variants, printable tracker, digital parity and playtest criteria. Cross-reference by ID plus edition, not page alone. Quickstart characters transfer without recreation. Draft → mechanical review → semantic review → playtest → editorial → rights/art review → layout/accessibility → release approval. No stage inferred from outline existence. Proposed page counts and free quickstart remain unlocked.
## Visual and production plan
Shared identity; contemporary classified, crisis bulletin, reconstruction weathered motifs provisional. Logos, occupation family emblems after catalogue acceptance, portraits, maps, evidence, equipment, factions, conditions, resources and cards. Grayscale/high contrast, text labels, alt text, print legibility. Rights register before release. Existing publication outlines remain intact; full manuscripts, artwork, layout and release acceptance outstanding. No publication order or pricing imposed.

## Initial dedicated reference verification (2026-11-26)

`tests/f29-publication-reference.test.mjs` adds ten passing equivalent-JavaScript reference fixtures covering the locked twelve titles, single-book rule ownership for representative core and supplemental disciplines, manuscript field contract, ID-plus-edition cross-references and required release gates. The test's `owner` object is a **representative mapping**, not a full audit of every manuscript rule, and `R01@1` is an illustrative cross-reference format, not a new canonical edition identifier. The release gate fixture verifies stage presence, **not** substantive editorial, legal, accessibility or playtest quality.

**Open gates:** full manuscript-to-owner cross-reference audit; Quick-Start character transfer and edition compatibility; complete asset inventory and rights evidence; grayscale/high-contrast and alt-text production checks; actual print/digital parity; full Node CI; F36 human playtesting and publication-specific release approval. F29 remains in dedicated reference verification; outlines and passing synthetic fixtures do not constitute finished manuscripts.

## Advanced dedicated reference verification and F30 handoff (2026-11-26)

`tests/f29-publication-advanced-reference.test.mjs` adds ten passing equivalent-JavaScript fixtures (20 dedicated F29 cases total) covering authoritative-versus-reference claims, duplicate ownership, nonowner authority attempts, unknown and edition-incompatible references, Quick-Start character state preservation, and rights/accessibility/approval release gates. The rule IDs and owners in the test are a **synthetic representative registry**; in particular, the illustrative `F15` and `F17` entries must **not** be treated as approval of those books as authoritative for shared mechanics where the canonical ownership map assigns the Core or another foundation. The Quick-Start transfer test clones a synthetic character and does not verify actual F07 serialization or character migration. A release flag is a test input, not evidence that any real manuscript passed that gate.

**Disposition:** F29 is conditionally passed at dedicated reference level. No new book, publication order, pricing, authoritative rules, completed manuscripts or release clearance is inferred. Remaining work: actual cross-publication rule ownership index and ID/edition audit, F07 Quick-Start transfer, complete manuscript contracts, print/digital parity, art and legal clearance, accessibility proof, Node CI and F36 human playtests. F30 must manage rights and sharing without overriding canonical mechanics or treating a draft rights flag as legal clearance.

## Creator-approved additional publication — 2026-11-28
The original twelve publication scopes remain intact. The creator has expressly authorized a required thirteenth planned publication, a free digital promotional adventure supplement with working title *Blackbox Protocol: Divergent Futures*. This is the specific exception to the earlier no-additional-initial-books restriction; it does not authorize other titles or establish a release order. Four independent playable short campaigns demonstrate reusable GM-defined collapse overlays, using existing rules and a shared starting setting where practical. Target 96–128 illustrated pages; final title and pagination are production decisions. Include printable worksheets, maps, handouts, pregenerated and custom character support, multiple outcomes and recovery paths. Free digital PDF distribution is mandatory; no purchase of this supplement is needed. Core Rulebook/Player's Handbook introduces the concept; GM Handbook owns comprehensive overlay guidance; Transition Handbook retains transition procedures. The supplement owns adventure content, not shared mechanics. Zero Day remains the starter adventure. All existing manuscript and release gates apply, including human playtesting and rights/accessibility review. See `lore/history-expansion/expanding-history/COLLAPSE-SCENARIO-OVERLAY-FRAMEWORK.md`. No completed manuscript or release clearance is implied.
