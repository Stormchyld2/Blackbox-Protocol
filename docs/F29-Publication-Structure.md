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
