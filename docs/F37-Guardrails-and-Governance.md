# F37 Guardrails and Governance

Canonical DESIGN-NOTES F37; delegated working foundation, not implemented software or release certification.

## Mandatory governance
Apply G01–G20 from F01: consult existing rules, no duplicates, dependencies, preserve approvals, rationale, probability/balance, examples, playtest, compatibility, migrations, status labels, verified research, IP, tabletop independence, reuse audit, security/licensing, offline operation, terminology, no silent changes, one authoritative mechanic. Decision register concise; comprehensive notes retain history and rejected alternatives.
## Change control
Proposal ID, owner, affected rules/content/software versions, rationale, alternatives, dependencies, compatibility, probability, examples, tests, research/rights, migration and approval status. Classify errata, clarification, balance, optional extension, content, revision or edition. Approved decisions change only explicitly; delegated proposals labeled provisional. Independent rules/content/software versions; illustrative semantic version scheme not locked. Review source and tests before merge; no claim of acceptance from document existence.
## Research and release
Research index fields topic, source, author/date, credibility, scope, rights, verified findings, gameplay abstraction, reviewer. Cover investigation, medicine, psychology, law, economics, agriculture, livestock, food, engineering, communications, emergency management, sociology, politics, weather, geography, manufacturing, survival, history and mathematics. No professional training claims. F29 twelve-publication limit; F30 rights gate; F36 evidence gate. Maintain glossary, rule ownership index, dependency and migration records. Final foundation audit must reconcile current files and open decisions; no automatic closure of semantic acceptance or production work.

## Initial dedicated F37 governance reference verification (2026-11-26)

`tests/f37-governance-reference.test.mjs` adds ten passing equivalent-JavaScript synthetic fixtures covering proposal metadata and independent version fields, required rationale and migration disposition, change classification, provisional status, and illustrative rights, F36 playtest, critical-defect and owner-approval release gates. These fixtures validate a **toy proposal shape**, not the complete G01–G20 guardrail set, real owner decisions, repository change history, rights clearance or actual release certification. Required-field presence alone does not prove the fields are substantively adequate; the fixture's `humanPlaytests` and `rightsCleared` flags are synthetic inputs, not verified evidence.

**Open gates:** full G01–G20 evidence audit, authoritative mechanic/terminology reconciliation, research source and IP provenance, actual change/migration approvals, dependency and version audit, F29/F30 publication/rights checks, F36 human and device testing, full Node CI and final cross-file repository reconciliation. F37 remains in dedicated reference verification; F31–F37 existing 623 equivalent assertions are separate synthetic checks, not production acceptance.
