# F32 GM Command

Canonical DESIGN-NOTES F32; delegated working foundation, not implemented software or release certification.

## Workstation modules
Dashboard, campaign/chronology, characters, NPCs, investigation/evidence designer, mission board, imported maps/markers/overlays, encounters, factions, world state, resources, settlements, rules/homebrew, communications, journal, content library, display controller and player connections. Each references authoritative F07–F30 records; no duplicate state.
## Workflow and permissions
GM prepares private draft, previews recipient projection, publishes selected content, receives action request, evaluates rules, approves or rejects proposed effects, commits once and logs. Physical rolls accepted with source and value; automated rolls same rules. Overrides record reason, before/after and actor; corrections append audit event rather than erase history. Pause/resume, backup restore with explicit confirmation and new sync epoch. Private by default; preview is not publication. Display control separate from workstation. Example clue published to one player only.
## Acceptance
Module navigation and empty states, offline operation, manual fallback, printable equivalents, role isolation, audit and restore, accessible controls. No automatic consequential changes, mandatory map creator or AI art. Implementation and UI testing pending F31/F35.

## Initial dedicated GM Command reference verification (2026-11-26)

`tests/f32-gm-command-reference.test.mjs` adds ten passing equivalent-JavaScript synthetic fixtures covering private draft defaults, nonpublishing previews, recipient-specific release, uncommitted player requests, GM approve/reject audit outcomes, non-GM denial, paused-session denial, duplicate-commit prevention and illustrative restore-epoch increment. The fixture uses plain role strings, in-memory maps and direct epoch mutation; it **does not** implement authentication, authorization, transport, real restoration, durable audit events or a GM user interface. Its example content is not a canonical clue or campaign record.

**Open gates:** actual role and identity enforcement, server-side projection and authorization, F31 durable atomic commit/revision protocol, append-only overrides/corrections with reasons, verified backup/restore and epoch resync, manual roll provenance, offline/print accessibility and workstation navigation, F35 player-display separation, full Node CI and F36 human playtests. F32 remains in dedicated reference verification.

## Advanced dedicated GM Command reference verification and F33 handoff (2026-11-26)

`tests/f32-gm-command-advanced-reference.test.mjs` adds ten passing equivalent-JavaScript synthetic fixtures (20 dedicated F32 cases total) for GM-only publication, recipient targeting, refusal of empty recipients, override reason and actor/before/after provenance, append-only correction examples, physical/automated D100 source and range checks, and confirmed GM restore with epoch increment. These fixtures use **caller-provided role labels** and mutable in-memory structures, not secure identity checks or actual durable append-only audit storage. The D100 range check is not a substitute for canonical R01–R03 roll resolution or the dice service. The restore fixture models confirmation and epoch only; it does not restore a backup.

**Disposition:** F32 is conditionally passed at dedicated reference level. Actual GM workstation, authenticated authorization, authoritative F31 command service, durable append-only audit, secure role-specific publication, restore/rollback, dice provenance verification, offline navigation, printable/accessibility parity, Node CI and F36 human playtests remain open. F33 must consume F31-authorized player projections and never trust role strings or unpublished GM drafts sent to a browser.
