# F35 Networking and Synchronization

Canonical DESIGN-NOTES F35; delegated working foundation, not implemented software or release certification.

## Protocol proposal
Local Wi-Fi GM host authoritative; QR contains local join URL and short-lived single-use join token, not GM credential. GM approves identity; role scoped session, revoke on departure. Proposed WebSocket ordered updates plus snapshot; exact transport and stack pending audit. Server validates authorization, schema, command ID, expected revision and feasibility; reject unauthorized or stale commands without mutation. Duplicate command returns prior result only to same authorized identity; conflicting reuse rejected.
## Synchronization
Snapshot includes epoch, revision and authorized projection. Updates carry epoch, monotonic revision and filtered payload; gap or epoch mismatch requests fresh snapshot. Do not expose private event metadata through public sequence gaps: send authorized no-op revision or per-view sequence. Host restart restores durable state, rotates epoch on restore, reauthenticates sessions as needed. Atomic persistence before acknowledgment. Client disconnect never advances campaign clock; fictional network separate. No internet dependency.
## Security and acceptance
Bind intended local interface, no automatic port forwarding, least privilege, origin checks, rate/size limits, input sanitization, safe asset paths, no secrets in logs. Transport confidentiality and local certificate strategy require threat-model review; do not claim LAN is trusted. Test multiple phones, Windows/Android browsers, router isolation, duplicate/stale requests, reconnect, restart, backup restore, casting and manual fallback. Actual security review and device tests pending.
