# F35 Networking and Synchronization

Canonical DESIGN-NOTES F35; delegated working foundation, not implemented software or release certification.

## Protocol proposal
Local Wi-Fi GM host authoritative; QR contains local join URL and short-lived single-use join token, not GM credential. GM approves identity; role scoped session, revoke on departure. Proposed WebSocket ordered updates plus snapshot; exact transport and stack pending audit. Server validates authorization, schema, command ID, expected revision and feasibility; reject unauthorized or stale commands without mutation. Duplicate command returns prior result only to same authorized identity; conflicting reuse rejected.
## Synchronization
Snapshot includes epoch, revision and authorized projection. Updates carry epoch, monotonic revision and filtered payload; gap or epoch mismatch requests fresh snapshot. Do not expose private event metadata through public sequence gaps: send authorized no-op revision or per-view sequence. Host restart restores durable state, rotates epoch on restore, reauthenticates sessions as needed. Atomic persistence before acknowledgment. Client disconnect never advances campaign clock; fictional network separate. No internet dependency.
## Security and acceptance
Bind intended local interface, no automatic port forwarding, least privilege, origin checks, rate/size limits, input sanitization, safe asset paths, no secrets in logs. Transport confidentiality and local certificate strategy require threat-model review; do not claim LAN is trusted. Test multiple phones, Windows/Android browsers, router isolation, duplicate/stale requests, reconnect, restart, backup restore, casting and manual fallback. Actual security review and device tests pending.

## Initial dedicated networking reference verification (2026-11-26)

`tests/f35-networking-reference.test.mjs` adds ten passing equivalent-JavaScript synthetic fixtures for single-use/expiring join tokens, role-scoped sessions, pending command state, stale revision refusal, idempotent same-owner duplicate handling, conflicting ID rejection, revision gap/epoch mismatch snapshot requests and disconnect revocation without advancing the campaign clock. These are **in-memory examples only**: tokens are plain map keys, roles are caller-supplied, sessions are not authenticated, commands are not persisted, and updates are not transported. The tests do not validate cryptographic randomness, actual expiry scheduling, cross-identity duplicate privacy, durable acknowledgment, filtered no-op revisions or any network security property.

**Open gates:** identity approval and secure session lifecycle, real QR/token issuance and expiry, origin and network-interface policy, rate/size limits, input/path sanitization, transport confidentiality threat model, durable atomic commit before ACK, per-view filtered sequence privacy, restore/restart and epoch reauthentication, real WebSocket/browser integration, full Node CI, F36 human/device playtests. F35 remains in dedicated reference verification.
