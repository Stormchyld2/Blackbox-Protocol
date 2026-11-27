# F25 Anomalies and Optional Horror

Canonical DESIGN-NOTES F25; delegated working foundation, not final publication. Existing shared mechanics remain authoritative.

## Optional module
Grounded core complete without anomalies. Campaign opts in by agreed tone and boundaries; no compulsory supernatural explanation, global conspiracy or sanity loss. Original phenomenon categories psychological, technological, biological, environmental, paranormal, cosmic; zombie supplement deferred per canonical direction.
## Dossier and resolution
ID, GM truth/ambiguity, observable signs, triggers, limits, effects, dependencies, discovery routes, counterplay, tone and visibility. Use F15 evidence and F14 pressure, F12/F13 fictional harm when applicable; no separate mandatory dice or automatic psychological condition. Declare feasible effects and stakes before checks; repeated unchanged exposure not repeated pressure farming. Counterplay may be avoidance, investigation, containment in abstract fiction or negotiated resolution; no guaranteed combat solution. Essential discoveries follow F15 independent routes. GM truth never leaks through player handouts.
## Modes and example
Standard narrative/conditions; Advanced investigation and exposure records; Simulation optional detailed event tracking. Example unexplained signal interference may have mundane or anomalous cause selected by GM; evidence distinguishes observations from interpretations. Dossier, encounter and evidence cards. Respect player agency and consent, allow abstraction or omission. Original anomaly catalogue and scenario content remain production work; F36 tests tone and fairness.

## Initial reference verification (2026-11-26)

`tests/f25-anomalies-reference.test.mjs` adds ten passing equivalent-JavaScript reference fixtures for the twelve approved catalogue identifiers and six categories, minimum dossier structure, two independent F15 discovery routes, counterplay and limits, GM-only disclosure boundaries, campaign opt-in, F14 distinct-event pressure (5/10/20), existing condition bands (−10/−20/−30) and F24 queue handoff. The catalogue-ID/category assertions use an explicit fixture transcription of `notes/ANOMALY-CATALOGUE.md`; this is not an automated parser audit of every published dossier or a Node CI run. Actual condition application remains GM-adjudicated under its owning rules.

**Authority:** F25 is optional and must never block grounded play. F15 governs evidence and independent routes; F14 governs psychological pressure and recovery; F12/F13 govern effects and harm; F24 governs scheduling, causal IDs and event history. The three grounded/ambiguous/supernatural readings are GM-facing options, not facts exposed to players. No compulsory sanity track, automatic pressure farming, guaranteed combat solution or mandatory supernatural explanation is introduced.

**Open gates:** detailed validation of all twelve catalogue entries and their numerical effects against F14/F15, cross-system exposure and recovery integration, player consent/tone tests, F24 persistent-event execution, full Node CI, F36 fairness/human tabletop playtests and Anomaly Compendium editorial completion. F25 remains in reference verification.

## Advanced catalogue-effect reference verification and F26 handoff (2026-11-26)

`tests/f25-anomaly-catalogue-advanced-reference.test.mjs` adds ten passing equivalent-JavaScript reference fixtures (20 F25 reference cases total). The fixture matrix transcribes the twelve approved entries from `notes/ANOMALY-CATALOGUE.md` and checks existing F14 pressure amounts, Section 4.3 condition bands, independent discovery-route counts, avoidance, distinct-event tracking and conditional harm. The matrix is not a dynamic source parser, so it cannot guarantee future catalogue edits remain synchronized; a production data-backed validator is still required.

**Interpretation constraints:** A-02's nightly low-pressure wording is treated as a new event only for an actually distinct night; a repeated unchanged event ID cannot award extra pressure. A-04's machinery harm and A-06's stings require fictional contact/exposure, not automatic damage on discovery. A-10's high pressure applies only where its stated person-related condition holds. A-05's recovery restriction and A-02's reduced recovery must be reconciled with authoritative F14 recovery rules before declaring production readiness. The reference session's `leave` flag prevents exposure while absent; it does **not** establish a universal rule that departure permanently cures effects or prevents re-entry.

**F25 reference disposition:** conditionally passed for 20 modeled invariants, not production or human-playtest complete. F26 may use approved anomaly dossiers as optional adventure content but must not require supernatural truth, overwrite GM-only information or impose a compulsory sanity track. Remaining gates include dynamic source-to-data validation, F14 recovery interaction, F15 investigation dead-end playtests, player consent/agency, F24 persistence, full Node CI, F36 tabletop testing and publication editing.
