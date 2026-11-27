# Blackbox Protocol — foundation reconciliation and implementation readiness
**Date:** 2026-11-26  
**Scope:** inspected repository tree on `main` (391 entries), AGENTS.md, foundation identity/summary, F29–F37 foundation files and validation reports, F36 training execution matrix and issue register, and licensing selection. This is a **targeted source-backed reconciliation**, not a line-by-line audit of every file or an assertion that Node CI or tabletop sessions ran.

## Evidence inventory
- Foundation docs F07–F37 and twelve publication outlines are present; the Core manuscript currently has an outline plus chapters 01 and 02 in `docs/manuscripts/core-rulebook/`. Presence does not mean a finished manuscript.
- `tests/` contains dedicated reference fixtures through F37, including 20 each for F31–F37, plus larger synthetic cross-section files. Existing validation reports explicitly state equivalent-JavaScript reference assertions rather than CI execution. The only workflows observed under `.github/workflows/` target dice-tray Android/Windows; **no foundation Node-test workflow was found in the tree**.
- `dice-tray/` is an application subtree. No corresponding F31 authoritative campaign-host, F32 GM Command, F33 BlackBox OS, F34 shared display or F35 transport implementation was established by the inspected files; do not infer implementation from fixture names.
- Training evidence exists in `notes/F36-TRAINING-VERIFICATION-EXECUTION-MATRIX-2026-11-26.md` (FV-01 onward) and `notes/PLAYTEST-ISSUE-REGISTER.md`. Human tabletop acceptance and real device testing remain unverified.
- F30's opening statement that no legal instrument was selected is **historical**: its later owner-directed checkpoint and `docs/licensing/SRD-LICENSE.md` identify CC BY 4.0 for a **future designated SRD only**. This is not an effective license grant. Update summaries to avoid treating the earlier statement as current.

## Reconciliation register
| ID | Priority | Evidence and finding | Required closure evidence | Status |
|---|---|---|---|---|
| FR-001 | Critical release gate | F36 reports no human playtest; PT-007 open | Anonymized observed BP/SL/DZ and transitional sessions, novice/experienced, measured feedback and retests | Open |
| FR-002 | Critical release gate | F31–F35 tests use synthetic roles, sessions, commands and state | Authenticated host, persistent transaction/recovery, client projections, network/device adversarial tests | Open |
| FR-003 | Major | No foundation Node CI workflow observed; reports distinguish equivalent JS harness | Node test workflow with actual executed tests and green runs | Open |
| FR-004 | Major | PT-005 stateful training and PT-006 cross-era ledger still open | Execute FV-04–FV-07 against an authoritative ledger and verify no replay/double-credit | Open |
| FR-005 | Major | PT-003/004/010 pacing, incentive and qualification evidence missing | FV-01–03 and FV-08 with real access constraints, assessments and documented outcomes | Open |
| FR-006 | Major | PT-009 migration audit open | Search active manuscripts, rules, JSON and software for obsolete global CDR gates and historic totals; classify archival evidence separately | Open |
| FR-007 | Major | F29 twelve book outlines exist, Core manuscript only partially drafted | Rule ownership and ID/edition index, full manuscripts, Quick-Start transfer, accessibility/print review | Open |
| FR-008 | Critical release gate | F30 SRD CC BY 4.0 selected but effective SRD publication, rights register and legal review unverified | Approved exact SRD scope/version, asset rights evidence, verified rights holder and publication notice | Open |
| FR-009 | Major | F37 requires G01–G20 compliance; synthetic tests cannot verify source evidence | Guardrail-by-guardrail actual file/commit evidence, owner signoff, dependency and migration decisions | Open |
| FR-010 | Major | F31 reuse audit of CindrixOps and Catalyst explicitly not done | Source-level compatibility/security/license evaluation and keep/reject decisions | Open |
| FR-011 | Major | Foundation summary retains historical F30 commercial licensing uncertainty while later docs select a conditional SRD instrument | Add an explicitly dated current-state note without erasing historical decisions | Open |
| FR-012 | Major | F31–F37 validation report contains 623 broad synthetic assertions and 140 separate dedicated fixtures; overlap is possible | Report coverage by unique behavior and implementation boundary, not aggregate counts as proof | Open |

## Recommended execution order
1. **Verification infrastructure:** add real Node test runner/CI and classify synthetic fixtures separately from integration tests. Confirm failures surface correctly.
2. **Canonical migration audit:** execute FV-10 and reconcile current training rules across active manuscripts, JSON and software; preserve historical records as archival.
3. **Stateful training acceptance:** implement/run FV-04–FV-09 against authoritative progression state, with duplicate evidence, concurrent slots, access, and BP→SL→DZ transitions.
4. **Human tabletop playtest:** schedule/observe FV-01–03 and FV-11, investigation and resource cases; record actual time, agency, comprehension, CDR incentives and issue dispositions.
5. **Publication and rights:** complete manuscript ownership/index, SRD extraction and actual rights clearance; keep license grant inactive until authorized publication.
6. **Digital build:** only after architecture/source reuse decisions, implement F31 host and F32–F35 clients with secure identity, atomic persistence and filtered projections; validate on real devices.
7. **Governance closeout:** audit G01–G20 with evidence and obtain owner decisions; repeat F36 retests after material changes.

## Guardrails
Do not change approved CDR/training numbers or canonical mechanics from this report. No PT issue is closed by reference arithmetic alone. Do not conflate synthetic checks, actual Node CI, production integration, human tabletop playtests or release certification. No license is granted by this report. The user retains final approval.

## Execution update — foundation Node CI configured (2026-11-26)

Added `.github/workflows/foundation-reference-tests.yml` at commit `d663627abc7cf0f25081a1d5088e1017ecbf61aa`. On pushes/PRs touching `tests/**` or the workflow, and by manual dispatch, GitHub Actions is configured to execute `node --test tests/*.test.mjs` on Node 22. This runs committed fixture files under the actual Node test runner rather than relying solely on the previous equivalent-JavaScript harness. **A successful Actions run has not yet been observed or verified**; FR-003 remains open pending run URL, job log and passing result. This workflow does not test non-`.test.mjs` files, real tabletop sessions, production network, security or browser/device integration. If the workflow fails, preserve its diagnostics and repair the underlying tests before changing the gate status.

**Next reconciliation task:** FV-10 current-rule migration search across active rules/manuscripts/JSON and software; distinguish archival CCDD-19 references from instructions that would incorrectly reintroduce retired global CDR eligibility gates or obsolete training totals.

## Status correction — avoid duplicate foundation work (2026-11-26)

This dated addendum supersedes the stale **FR-003** and **FR-006** descriptions above without rewriting their historical provenance:

- **FR-003: Closed — reference CI execution verified.** GitHub Actions Node 22 foundation reference run [45921547221](https://github.com/Stormchyld2/Blackbox-Protocol/actions/runs/45921547221) completed successfully. This is **not** production integration or human playtest certification.
- **FR-006: FV-10 source migration scan passed; catalogue work already had separate prior verification.** The actual source scanner plus schema probe passed at [45922261956](https://github.com/Stormchyld2/Blackbox-Protocol/actions/runs/45922261956). Three flagged matches were adjudicated as two valid current-rule contexts and one superseded historical analysis. Prior 550-competency/2,750-row and 352-occupation audits are the baseline; do **not** initiate a new full catalogue audit absent a specific change or discrepancy. Scope of the new scanner is pattern-based, not proof of every semantic rule consumer.
- **FR-004: Previously exercised at reference level, production acceptance still unverified.** Existing `tests/f09-reference.test.mjs`, earlier training regressions and design reports cover duplicate evidence, pauses, assessment gates, time allocation and cross-era assumptions to varying degrees. The newly introduced duplicate `tests/f36-training-ledger-stateful.test.mjs` was removed in commit `5343123a` rather than continuing redundant synthetic test construction. Do not claim production persistence or human testing from those fixtures.
- **FR-005: Mechanics approved, observational balance gates remain distinct.** Do not re-open the adopted CDR or training-hour decisions. Real campaign pacing, incentives and professional-access playtest observations are not demonstrated by synthetic fixtures.

**Forward priority:** complete the already-authorized publication/manuscript work (FR-007) while preserving the separate Core Rulebook manuscript author's ownership, and perform targeted F31 source-reuse/implementation readiness only when digital development is the chosen workstream. Keep actual human playtesting (FR-001) and rights/owner signoff (FR-008/009) explicit release gates, not recurring reasons to rerun approved arithmetic.
