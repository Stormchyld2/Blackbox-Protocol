# F33 BlackBox OS

Canonical DESIGN-NOTES F33; delegated working foundation, not implemented software or release certification.

## Player client
Local responsive phone/browser, QR join, character sheet, dice, inventory, messages, evidence, missions, maps, contacts, notes, news and status. Separate in-character phone from out-of-character sheet/rules. Fictional battery/service outages affect fictional communication only, not actual character access. No external account required.
## Interaction
Join request → GM assigns identity/character → server issues scoped session → authorized snapshot → ordered updates. Player submits intent with command ID and revision; pending/accepted/rejected states visible, no optimistic authoritative mutation. Private clues filtered server-side. Personal notes private to author unless shared; GM access to submitted actions distinct from notes. Reconnect resumes same identity after verification, stale actions revalidated. Offline disconnected client shows last authorized snapshot marked stale, no new authoritative commits. Manual players equivalent.
## Acceptance
Responsive keyboard/touch, accessible labels, readable contrast, no color-only status, reconnection, fictional outage isolation, private evidence and character permissions, printable equivalents. Actual UI and device tests pending.
