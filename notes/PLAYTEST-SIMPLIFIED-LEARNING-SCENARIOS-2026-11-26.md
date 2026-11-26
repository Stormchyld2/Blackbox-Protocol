# Simplified-learning scenario playtest — pass 1 (2026-11-26)

**Method:** deterministic tabletop-rules scenario fixtures using the six canonical pregenerated characters and current catalogue, not human player sessions or a production-software test. Candidate: remove individual global CDR gates only; keep direct prerequisite levels, sequential learning, hours, access, qualified supervision, assessment, CDR awards and slots. Canon remains unchanged.

## Scenarios executed
Six pregens were given one highest-complexity next-level learning objective. For each, the fixture tested insufficient hours, failed assessment, missing resources, missing qualification, exhausted slot, full-hours completion, one-time CDR award and refusal of a second completion without additional hours. Additional zero-CDR beginner and BP/SL/DZ capacity-boundary cases were evaluated.

**Initial 57 assertions:** 54 passed, 3 failed. Two failures exposed a real scenario-precondition issue: Samuel Okafor cannot directly advance P-061 Nursing Practice III→IV, because P-061 requires both G-103 Human Anatomy Fundamentals III and G-106 Infection Prevention III at target IV. His sheet has G-103 II and G-106 III. The earlier full-regression report's implication that all six selected next steps were otherwise ready is corrected: only five were ready *under the fixture's assumed resource/qualification conditions*. Samuel must first complete G-103 II→III (64 active hours and assessment, awarding 1,200 CDR), then may start P-061 IV (1,280 active hours and assessment), assuming continuing access, resources, supervision and a slot. His CDR increases from 8,800 to 10,000 after anatomy III, unlocking one additional BP learning slot; the candidate does not waive the anatomy prerequisite. The third initial failure was a **test-design error**: a purported 'skip II→III' case actually attempted the legitimate next level II with too few hours; it did not demonstrate level skipping and must not be counted as a system defect.

## Validated outcomes and limitations
- Dana G-090 III→IV: 128 hours; success in fixture after five negative gate tests.
- Marcus G-092 II→III: 64 hours; success in fixture after five negative gate tests.
- Elena P-071 III→IV: 320 hours; success in fixture after five negative gate tests.
- Tomas G-003 III→IV: 128 hours; success in fixture after five negative gate tests.
- Priya G-064 II→III: 160 hours; success in fixture after five negative gate tests.
- Samuel P-061 III→IV: correctly **blocked** pending G-103 III; 64 prerequisite hours plus 1,280 target hours, assessments and qualified access required.
- Zero-CDR G-038 Bicycle Operation I is eligible with 4 active hours and accepted assessment; no automatic free completion. BP slots 2 at 9,999 CDR and 3 at 10,000; 4 at 25,000. SL base 3, DZ base 4. These are arithmetic reference fixtures, not an implemented ledger.

## Defects and risk register
1. **Report correction — major documentation:** prior candidate regression overstated readiness of Samuel's advancement. Re-test with exact target-level prerequisite requirements before any future 'eligible' claim.
2. **Fixture design — minor test defect:** false 'level skip' assertion conflated insufficient hours with skipping a level. Replace with a fixture explicitly attempting to start III while II is absent.
3. **Unresolved balance — major:** low-complexity CDR/hour farming persists for extra-slot thresholds; training hours at high complexity are long; no actual campaign pacing or participant feedback.
4. **Scope limit:** access, resource and assessor flags were supplied by fixtures rather than independently established in-world; no real GM/player adjudication, downtime calendar scheduling, multi-project concurrency transaction engine or scenario outcome observations.

## Verdict
**Conditional mechanical pass with one meaningful prerequisite catch and one test-fixture error.** The simplified candidate removes irrelevant global CDR restrictions while preserving Samuel's meaningful discipline prerequisites. It is not approved canon and is not yet a completed human tabletop playtest. Next steps: run explicit stateful training-ledger fixtures (pause/resume, slot contention, assessment retry, duplicate evidence, cross-era transfer) and conduct observed sessions across the three settings before declaring full balance acceptance.

## Pass 2 — approved target-specific prerequisite equivalency integration (2026-11-26)

**Authority:** approved DESIGN-NOTES equivalency addendum, F09 and F10. This pass tests equivalency under the simplified-learning **candidate** for individual CDR eligibility. It does not silently adopt the candidate into canon; under currently approved CCDD-19, Samuel still must meet the separate global CDR gate. The two eligibility decisions are independent.

### Samuel Okafor, Nursing Practice IV
Starting record: P-061 Nursing Practice III, G-103 Human Anatomy Fundamentals II, G-106 Infection Prevention III, CDR 8,800. P-061 IV requires G-103 III and G-106 III. Proposed assessment record: character Samuel; target P-061 IV; supporting prerequisite G-103 III; assessment of anatomy knowledge/performance appropriate to that requirement; evidence and qualified assessor recorded; GM decision.

| Fixture | Expected outcome | Result |
|---|---|---|
| No equivalency record; G-103 II | P-061 IV blocked by missing G-103 III | PASS |
| Occupation title or P-061 III alone | Does not automatically waive G-103 III | PASS |
| Assessment failed, pending, or evidence absent | G-103 III remains unsatisfied | PASS |
| Passed assessment recorded for P-061 IV / G-103 III | This single supporting prerequisite is satisfied | PASS |
| Reuse same pass for another target or higher level | Rejected without a separately scoped approval | PASS |
| Pass grants Anatomy III, CDR, bonus or 64 training hours | Rejected; none awarded | PASS |
| G-106 III independently checked | Satisfied by actual competency level | PASS |
| P-061 IV without its 1,280 active hours or final assessment | Rejected | PASS |
| P-061 IV with 1,280 credited hours, qualified access, resources, supervision, free slot, final pass and both prerequisites | Eligible to complete **under simplified-CDR candidate** | PASS (conditional fixture) |
| Same state under currently canonical global CDR gate, starting CDR 8,800 vs required 60,000 | Still blocked by CCDD-19 | PASS |

**Interpretation:** approved equivalency solves the redundant-foundation obstacle, while the proposed simplified-CDR change solves the unrelated global-gate obstacle. Both are needed for Samuel to pursue IV immediately in this fixture; neither removes his 1,280-hour training or final assessment. If he instead earns G-103 III normally, that costs 64 active hours and awards 1,200 CDR, and the assessment-specific waiver is unnecessary.

### Regression invariants
For each of the other five pregen scenarios, a target-specific equivalency must have no effect unless that target has a matching missing supporting prerequisite. All previously tested negative gates (insufficient target hours, failed final assessment, unavailable resources, unqualified access, no free learning slot) remain effective. Equivalency does not change catalogue IDs, prerequisites, training-hour formulas, CDR awards, proficiency bonuses, or occupation baselines.

**Test classification:** deterministic decision-table regression of the approved rule, not a software-executed stateful ledger and not observed human play. The ten rows above are documented expected outcomes checked against the rule's predicates; no claim is made that a deployed implementation passed these cases. **Status: logical regression PASS; software integration and human tabletop acceptance OPEN.**

## Pass 3 — executed regression rerun (2026-11-26)

**Executed result: 68/68 assertions PASS; zero failures.** This run parsed the canonical 550-record competency catalogue and the six pregenerated character sheets, then executed a deterministic JavaScript eligibility/completion model. It was a real execution of the reference assertions, **not** a test of deployed software or an observed human tabletop session. The model is an independent fixture implementation of the documented predicates and does not prove that a production ledger is implemented correctly.

For each of the six characters, executed negative cases for insufficient hours, failed final assessment, missing resources, missing qualification and missing slot, then checked successful completion, correct one-time CDR award and refusal of zero-hour repeat advancement. Samuel additionally required a matching prerequisite equivalency before completion. Separate Samuel cases tested missing/failed/unapproved evidence, incorrect target level, preserved Anatomy II and 8,800 pre-completion CDR, canonical CDR block, 1,279-hour rejection, final-assessment rejection, and successful 1,280-hour Nursing Practice IV completion under the simplified-CDR candidate. Beginner Bicycle Operation I/II entry and required hours were also checked.

**Correction to Pass 1:** its three failures were resolved by incorporating Samuel's target-specific equivalency and fixing the test fixture; this is a new, corrected execution, not retroactive relabeling of Pass 1. **Important:** the 68 assertions assume the assessment, qualified supervision, resource and slot booleans supplied by the fixture; they do not establish actual campaign availability. The simplified removal of individual CDR gates is still an unapproved candidate, while target-specific prerequisite equivalency is approved canon. Stateful ledger transactions, resource scheduling, cross-era progression and human session observations remain untested here.
