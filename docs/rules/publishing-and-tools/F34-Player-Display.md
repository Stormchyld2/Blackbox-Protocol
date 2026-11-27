# F34 Player Display

Canonical DESIGN-NOTES F34; delegated working foundation, not implemented software or release certification.

## Shared projection
Read-only browser display route with dedicated scoped identity. Scenes: maps, evidence, case boards, missions, news, bulletins, multimedia, encounters, environmental/settlement status, intermission and custom scenes. GM stages preview then explicitly publishes; default blank on initial join, clear/blank command available. Never mirror private workstation by default. Server creates allowlisted display payload; no private player data unless explicitly authorized for shared audience.
## Lifecycle
Draft → preview → published → replaced/cleared. Each scene revision ordered; reconnect requests current authorized scene, not private draft. On disconnect show stale/blank status according to GM policy; no new private content. Browser first, compatible casting and HDMI extended desktop fallback; no claim of device support until tested. Printable boards equivalent. Media local and rights-cleared; accessibility text alternatives.
## Acceptance
Test preview isolation, clear, reconnect, screen sizing, media failure, multiple display clients and casting/HDMI compatibility. No input mutation route from display identity.

## Initial dedicated Player Display reference verification (2026-11-26)

`tests/f34-player-display-reference.test.mjs` adds ten passing equivalent-JavaScript synthetic fixtures for initial blank state, preview isolation, explicit publication and scene revision, allowlisted projection of public fields, display identity check, scene-type rejection, replacement, clear and reconnect to the published rather than draft scene. The in-memory fixture **does not implement secure scoped identity, real server-side authorization, a browser display, actual media, rights review or transport**. Its display identity is a caller-provided string, not a credential; absence of a `submit` property in the projection does not prove that a production display route cannot mutate state.

**Open gates:** F31/F32 server-side identity and allowlist enforcement, no-mutation endpoint and adversarial authorization tests, ordered scene revisions across multiple clients, stale/blank disconnect policy, media failure and rights-clearance handling, accessibility alternatives, screen-size/HDMI/casting validation, printable board parity, full Node CI and F36 human/device playtests. F34 remains in dedicated reference verification.

## Advanced dedicated Player Display reference verification and F35 handoff (2026-11-26)

`tests/f34-player-display-advanced-reference.test.mjs` adds ten passing equivalent-JavaScript synthetic fixtures (20 dedicated F34 cases total) covering shared-audience restriction, GM publication gate, media clearance metadata, media projection filtering, two display clients, stale/current revision handling, clear invalidation and stale/blank disconnect policies. The fixture **does not simulate actual media failure** (decoding, missing files or fallback text), actual casting, HDMI, browser screen sizing, cryptographic authorization or production network fanout. Its rights status and GM identity are caller-provided illustrative inputs, not independently verified clearance or credentials.

**Disposition:** F34 is conditionally passed at dedicated reference level. Open gates: production display identity and no-mutation API, actual server-side allowlisting, ordered delivery and reconnection across clients, media loading failures and accessibility fallbacks, local asset rights evidence, responsive screen/HDMI/casting testing, printable equivalents, full Node CI and F36 human/device playtests. F35 integration must preserve this read-only display boundary and never expose unpublished GM workspace content.
