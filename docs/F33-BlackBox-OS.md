# F33 BlackBox OS

Canonical DESIGN-NOTES F33; delegated working foundation, not implemented software or release certification.

## Player client
Local responsive phone/browser, QR join, character sheet, dice, inventory, messages, evidence, missions, maps, contacts, notes, news and status. Separate in-character phone from out-of-character sheet/rules. Fictional battery/service outages affect fictional communication only, not actual character access. No external account required.
## Interaction
Join request → GM assigns identity/character → server issues scoped session → authorized snapshot → ordered updates. Player submits intent with command ID and revision; pending/accepted/rejected states visible, no optimistic authoritative mutation. Private clues filtered server-side. Personal notes private to author unless shared; GM access to submitted actions distinct from notes. Reconnect resumes same identity after verification, stale actions revalidated. Offline disconnected client shows last authorized snapshot marked stale, no new authoritative commits. Manual players equivalent.
## Acceptance
Responsive keyboard/touch, accessible labels, readable contrast, no color-only status, reconnection, fictional outage isolation, private evidence and character permissions, printable equivalents. Actual UI and device tests pending.

## Initial dedicated BlackBox OS reference verification (2026-11-26)

`tests/f33-blackbox-os-reference.test.mjs` adds ten passing equivalent-JavaScript synthetic fixtures covering assigned character join, scoped session data, evidence projection, revision checking, pending/accepted/rejected action states, duplicate command IDs, disconnected stale snapshots and exclusion of personal notes from the evidence projection. The in-memory fixture **does not implement verified sessions, cryptographic join tokens, real player isolation, actual UI, offline persistence, server-side transport or GM approval**; its `resolve()` simulates an authoritative decision without authorization. One synthetic recipient is insufficient to prove cross-user privacy; this requires production authorization and adversarial tests.

**Open gates:** F31 authenticated identity/session and revision/epoch protocol, F32 GM approval and secure projections, character assignment lifecycle, private note ownership and sharing, reconnect revalidation, fictional outage isolation, touch/keyboard accessibility, print/manual parity, full Node CI and F36 human/device playtests. F33 remains in dedicated reference verification.

## Advanced dedicated BlackBox OS reference verification and F34 handoff (2026-11-26)

`tests/f33-blackbox-os-advanced-reference.test.mjs` adds ten passing equivalent-JavaScript synthetic fixtures (20 dedicated F33 cases total) covering assigned-character checks, a simulated verified-session flag, distinct two-player evidence projections, personal note ownership, epoch/revision reconnect, stale action refusal, fictional communication outage isolation and an illustrative paper-play channel. The fixture's `verified:true` is **not authentication**; the channel enumeration is **not a tested printable sheet or actual manual parity**. These fixtures do not test UI, physical devices, QR joins, secure token issuance, real networking or recovery from a disconnected device.

**Disposition:** F33 is conditionally passed at dedicated reference level. Remaining gates: actual F31 authenticated session and authoritative projection implementation, F32 GM approval integration, private note sharing, offline cache integrity and reconnect replay, responsive/accessible browser client, printable/manual equivalence, full Node CI and F36 device/human playtests. F34 must use authoritative world/knowledge state and role-filtered views without leaking GM-only records.
