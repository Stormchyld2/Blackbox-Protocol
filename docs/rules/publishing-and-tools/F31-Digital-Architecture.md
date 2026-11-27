# F31 Digital Architecture

Canonical DESIGN-NOTES F31; delegated working foundation, not implemented software or release certification.

## Boundaries
Tabletop rules authoritative; offline local GM host, browser clients. Separate pure rules functions, versioned content packages, campaign state, authorization, presentation and transport. Rules return proposed effects, never mutate state; GM approves consequential changes. State service validates and commits atomic transactions with unique command IDs and revision. No mandatory cloud, accounts, external AI or internet. Structured offline suggestions distinguish mandatory rules, optional advice and proposed changes.
## Storage and interfaces
Campaign manifest pins rules/content versions, schema version, campaign ID, revision, calendar and permissions. Authoritative records plus append-only audit events; snapshots and verified backups; migration preview, backup, validation, atomic replace, rollback on failure. Export portable campaign bundle with manifest and allowed assets; player export filtered server-side. Separate private notes and public projections. Manual physical dice and printable sheets supported. Proposed implementation-neutral interfaces evaluate(ruleId, inputs), submit(command, expectedRevision), project(role, identity), snapshot(), restore(bundle). No stack selected pending audit.
## Reuse gate
Audit CindrixOps sharing, maps, storage, dashboards, library, resources and communications; Catalyst dice utility separately. Check source, license, security, dependencies, offline behavior, tests and fit; reuse only validated modules, not reskin. No audit or code reuse claimed. No map creator or AI art required. F32–35 specify clients; F36 tests parity.

## Initial dedicated digital-reference verification (2026-11-26)

`tests/f31-digital-reference.test.mjs` adds ten passing equivalent-JavaScript reference fixtures for pinned manifest fields, pure proposed effects, GM approval, revision checks, command idempotency, event history, player/GM projection separation and snapshot isolation. The harness is a **synthetic in-memory model**, not an implementation of authentication, atomic durable storage, browser clients, networking, encrypted backups or production migration. Its single `consume` operation and sample stock counter do not replace F17/F20 ledger rules. Approval is a boolean fixture input, not a secure GM authorization mechanism.

**Open gates:** actual data schemas and versioned package parsing, authenticated authorization and player projection, atomic durable command transaction, audit integrity and backup/restore verification, migration preview/rollback, epoch and reconnect protocol, offline browser/GM-host integration, reuse-source licensing/security audit, full Node CI and F36 tabletop/digital parity testing. F31 remains in dedicated reference verification.

## Advanced dedicated reference verification and F32 handoff (2026-11-26)

`tests/f31-digital-advanced-reference.test.mjs` adds ten passing equivalent-JavaScript fixtures (20 dedicated F31 cases total) covering backup revision/command history, restore identity and schema guards, epoch increment, replay rejection after restore, migration approval and prechange snapshot, client revision/epoch resync and a private-note-excluding portable-state example. **Caution:** the example `backup()` omits GM private notes; this represents a restricted portable export, **not** a complete authoritative GM backup. Production `snapshot()` and `restore()` must preserve authorized GM-only records and private notes in secure backups, while player/public export must filter them. The fixture does not verify cryptographic integrity, crash-safe persistence, network identity, full migration, rollback after disk failure or secure authentication.

**Disposition:** F31 is conditionally passed at dedicated reference level. Actual implementation remains gated on durable transactional storage, complete private-state backups, authorization, integrity validation, versioned schema migration, epoch/revision reconnect, permitted-asset export, offline host/client transport, full Node CI and F36 tabletop/digital parity. F32 client design must consume server-authorized projections and must never rely on client-only concealment of GM secrets.
