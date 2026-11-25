# F31 Digital Architecture

Canonical DESIGN-NOTES F31; delegated working foundation, not implemented software or release certification.

## Boundaries
Tabletop rules authoritative; offline local GM host, browser clients. Separate pure rules functions, versioned content packages, campaign state, authorization, presentation and transport. Rules return proposed effects, never mutate state; GM approves consequential changes. State service validates and commits atomic transactions with unique command IDs and revision. No mandatory cloud, accounts, external AI or internet. Structured offline suggestions distinguish mandatory rules, optional advice and proposed changes.
## Storage and interfaces
Campaign manifest pins rules/content versions, schema version, campaign ID, revision, calendar and permissions. Authoritative records plus append-only audit events; snapshots and verified backups; migration preview, backup, validation, atomic replace, rollback on failure. Export portable campaign bundle with manifest and allowed assets; player export filtered server-side. Separate private notes and public projections. Manual physical dice and printable sheets supported. Proposed implementation-neutral interfaces evaluate(ruleId, inputs), submit(command, expectedRevision), project(role, identity), snapshot(), restore(bundle). No stack selected pending audit.
## Reuse gate
Audit CindrixOps sharing, maps, storage, dashboards, library, resources and communications; Catalyst dice utility separately. Check source, license, security, dependencies, offline behavior, tests and fit; reuse only validated modules, not reskin. No audit or code reuse claimed. No map creator or AI art required. F32–35 specify clients; F36 tests parity.
