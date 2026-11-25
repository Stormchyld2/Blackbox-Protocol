# F34 Player Display

Canonical DESIGN-NOTES F34; delegated working foundation, not implemented software or release certification.

## Shared projection
Read-only browser display route with dedicated scoped identity. Scenes: maps, evidence, case boards, missions, news, bulletins, multimedia, encounters, environmental/settlement status, intermission and custom scenes. GM stages preview then explicitly publishes; default blank on initial join, clear/blank command available. Never mirror private workstation by default. Server creates allowlisted display payload; no private player data unless explicitly authorized for shared audience.
## Lifecycle
Draft → preview → published → replaced/cleared. Each scene revision ordered; reconnect requests current authorized scene, not private draft. On disconnect show stale/blank status according to GM policy; no new private content. Browser first, compatible casting and HDMI extended desktop fallback; no claim of device support until tested. Printable boards equivalent. Media local and rights-cleared; accessibility text alternatives.
## Acceptance
Test preview isolation, clear, reconnect, screen sizing, media failure, multiple display clients and casting/HDMI compatibility. No input mutation route from display identity.
