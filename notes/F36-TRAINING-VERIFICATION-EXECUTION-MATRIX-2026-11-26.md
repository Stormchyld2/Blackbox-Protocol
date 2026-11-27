# F36 — Training verification execution matrix (2026-11-26)

**Status:** executable test specification / pending observed runs. Derived from approved `notes/TRAINING-PROGRESSION-REVISION-2026-11-26.md`, `notes/OPEN-LEARNING-TRAINING-RULES-2026-11-26.md`, and `notes/PLAYTEST-ISSUE-REGISTER.md`. This file does not change approved mechanics or claim human testing.

## Canonical numeric oracles
- C6 incremental effective hours I–V: 50, 100, 200, 400, 1600; cumulative 2350.
- C7 incremental effective hours I–V: 90, 180, 360, 720, 2880; cumulative 4230.
- One actual qualifying hour yields 1.00, 1.25, 1.50, 1.75, or 2.00 effective hours according to documented qualifying mode. Mutually exclusive; never stack.
- At 2.00×, c6 IV alone requires 200 actual hours; c7 V alone 1440 actual hours. At 8 actual qualifying hours per active day, these are 25 and 180 active days respectively. Neither is a calendar-day promise.
- CDR is awarded only on successful assessed completion; no global CDR prerequisite for competency level eligibility.

## Required scenario fixtures
| ID | Issue | Setup / action | Required result | Evidence to capture |
|---|---|---|---|---|
| FV-01 | PT-003 | c6 III→IV at 1, 4, 8 actual hours/day with 1.00×, 1.50× and qualified 2.00× | 400 effective hours plus assessment and mandatory actual supervision where applicable; no instant level | Calendar, access interruptions, elapsed/active days |
| FV-02 | PT-003 | c7 IV→V at same rates; 1–3 month, 6–12 month and multi-year calendars | 2880 effective hours; compare achievable pacing without inventing shortcuts | Abandonment, advancement opportunities, downtime |
| FV-03 | PT-004 | Compare c1 and c7 training portfolios with equal actual hours, valid prerequisites and assessments | Measure CDR/actual-hour and slot incentives; do not treat arithmetic efficiency as observed player preference | Eligible options, actual hours, CDR, slots |
| FV-04 | PT-005 | Record qualifying hour; replay identical evidence/transaction ID | Exactly one credit; no duplicate progress | Ledger before/after and unique event ID |
| FV-05 | PT-005 | Pause/resume, fail assessment, retry after corrective practice | Earned hours persist; no level/CDR until successful assessment; slot release/occupation consistent with current rules | State transitions, credits, capacity |
| FV-06 | PT-005 | Simultaneous projects claim overlapping one-hour interval | Reject double-booked actual time even if modes differ | Rejection and remaining hour allocation |
| FV-07 | PT-006 | BP→SL→DZ with paused project, unavailable instructor and changed base slots | Retain learned levels, CDR and valid credited progress; recheck access/resources; no free personal points | Before/after snapshots |
| FV-08 | PT-010 | Restricted professional competency with hours but no authorized assessment, resources or credentials | Training hours alone confer no qualification, authority or level | Access decision, reason, assessor |
| FV-09 | PT-002 | Nursing IV supporting prerequisite unmet; documented target-specific equivalency | Permit only scoped substitution after GM assessment; do not grant missing Anatomy level | Equivalency scope and approval |
| FV-10 | PT-009 | Search active rules, publications, JSON and software for old global CDR gates, 4960/9920 current totals and retired prerequisite-surplus discounts | No active instruction contradicts approved system; archival reports explicitly labeled historical | File, line, active/historical classification |
| FV-11 | PT-007 | Novice and experienced tabletop groups in BP, SL and DZ | Observe rather than simulate ease, pacing, agency, recordkeeping and comprehension | Session notes, participant feedback, duration |

## Execution order and acceptance
1. **PT-009 documentation migration** first, because outdated rules invalidate later tests. Audit active material separately from historical, clearly marked records.
2. **PT-005 and PT-006 state and transition fixtures** next. Reference calculations alone cannot validate a persisted ledger.
3. **PT-003 and PT-004 pacing/incentive analysis** using explicit availability and access assumptions.
4. **PT-010 authorization fixtures** with negative cases.
5. **PT-007 human sessions** last, after materials are consistent.

For every run record revision/commit, mode, setting, character, target, prior level/CDR, effective-hour target, actual qualifying time, evidence ID, access, assessor, expected/observed outcome and disposition. Never mark a human acceptance gate complete based on automated fixtures. Do not change CDR thresholds, training hours, or approved learning modes without a separate balance decision.
