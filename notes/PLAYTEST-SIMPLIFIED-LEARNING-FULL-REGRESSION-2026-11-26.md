# Simplified learning — full catalogue and six-pregen analytical regression (2026-11-26)

**Status:** tested candidate, **not adopted canon**. This report supersedes the *coverage limitations* in the November 25 occupation-only experiment, not the governing DESIGN-NOTES CCDD-19 decision. No human GM/player session was performed.

## Candidate under test
Remove global cumulative CDR minimum from **individual competency training eligibility only**. Retain sequential I–V advancement, supporting prerequisites, professional qualification/access, active training hours, resource and supervision requirements, assessment evidence and approval, shared learning-slot capacity, cumulative CDR awards and CDR-based extra-slot thresholds. Do not award automatic levels, hours, qualification or retroactive CDR. Compare current canon to this candidate without mixing their gates.

## Source snapshot and executed checks
- Canonical `notes/SKILL-NOTES.md` blob `a5720eabd1cbcd91c8014a7054652d7f14f8d263`; occupation index blob `132d9ba23b268e29c30905fe13566564d8adc9ec`; six pregens from `notes/PREGENERATED-CHARACTERS.md`.
- **550** competency records, **2,750** level rows, **226** explicit supporting prerequisite references; **0** missing references, **0** cycles detected, **0** training-hour/CDR-gain formula mismatches.
- **352** occupation profiles and **1,370** occupational baseline grants; previous cross-source audit found zero baseline prerequisite deficits. This pass verified the full graph and six starting sheets against their listed competency levels.
- **Six pregenerated characters:** zero missing competency IDs and zero supporting-prerequisite violations in the recorded starting levels. This is a static sheet check, not six played scenarios.

## Six pregen next-step cases
For each character, selected the highest-complexity listed competency (stable order for ties) and tested the **next** level. Old gate failure means the global CDR rule blocks it before other checks. Under the candidate, that *particular* CDR obstacle disappears; other requirements must still be satisfied.

| Character | Next competency | Current → target | Existing CDR / required CDR | Old CDR gate | New candidate | Incremental hours |
|---|---|---|---:|---|---|---:|
| Dana Reyes | G-090 | III → IV | 4,900 / 7,500 | Blocked | No CDR gate | 128 |
| Marcus Oyelaran | G-092 | II → III | 6,000 / 2,500 | Not blocked | No CDR gate | 64 |
| Elena Vasquez | P-071 | III → IV | 5,600 / 15,000 | Blocked | No CDR gate | 320 |
| Tomas Whitfield | G-003 | III → IV | 4,900 / 7,500 | Blocked | No CDR gate | 128 |
| Priya Nair | G-064 | II → III | 4,700 / 5,000 | Blocked | No CDR gate | 160 |
| Samuel Okafor | P-061 | III → IV | 8,800 / 60,000 | Blocked | No CDR gate | 1,280 |

**Finding:** five of six representative next-step cases are blocked by the existing CDR gate; zero are blocked *by global CDR alone* under the candidate. This does not certify immediate enrollment: training slots, professional access, prerequisites, resources, supervision, time and assessments remain independent gates.

## Balance and exploit findings
1. **Career eligibility: improved (conditional pass).** Candidate removes unrelated accumulated CDR as a gate for professional development without eliminating skill-specific learning evidence. It does not make advanced specialties free or instantly accessible.
2. **Prerequisite integrity: pass.** Existing 226 references resolve and are acyclic. The candidate does not bypass them. Six pregen starting records have no detected supporting-prerequisite violations.
3. **Learning time: unchanged, material pacing concern.** Complexity 6 IV takes 1,280 incremental active hours; complexity 7 V takes 5,120 incremental hours. Full complexity 7 I–V is 9,920 hours. This candidate does not solve session-to-downtime pacing.
4. **Slot farming: unresolved.** Completed complexity 1/2 learning awards 25 CDR per active hour; complexity 7 awards 2.1875. Because CDR still unlocks extra concurrent learning slots, the 11.43× efficiency incentive persists. A character cannot manufacture credited hours or assessments, but the reward gradient remains.
5. **Professional access: not automatically validated.** Catalogue requirements for equipment, qualified assessors, institutional permission and local availability must be evaluated in concrete campaign scenarios.
6. **Human play: not performed.** No observed player decisions, session pacing, satisfaction, resource scarcity or GM workload can be inferred from deterministic checks.

## Recommendation for owner decision
**Conditionally favorable** to the simplified-learning candidate for competency eligibility. Keep CDR as a cumulative record and slot-capacity input initially, and independently evaluate slot-farming incentives and time pacing. Do **not** modify DESIGN-NOTES, F09/F10, the manual, catalogue thresholds or character sheets without an explicit decision to adopt the variant. Next required evidence: scenario-based downtime/resource simulation across the three eras and actual tabletop sessions.
