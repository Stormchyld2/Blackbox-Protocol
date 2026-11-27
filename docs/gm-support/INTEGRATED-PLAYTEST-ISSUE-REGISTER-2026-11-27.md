# Integrated Playtest Issue Register — 2026-11-27

**Status:** In progress. Automated scenario testing is not a substitute for tabletop playtesting. Do not reopen locked combat mechanics without a reproducible defect.

## Verified reference baseline
- F12 combat: d100 action resolution; d20 damage. One main action, movement and reaction; declare defensive reaction before dice.
- F13 injury: severity by post-protection harm; zero HP incapacitates; instability and deterioration; teammate Medicine stabilization; eligible recovery and care.
- PR #14 merged: explicitly documents teammate rescue in F13 and GM-02 without new mechanics.
- Prior reported F13 formula test: 82,532 exhaustive assertions and 50,000 randomized transitions, zero reported failures.
- Prior reported 60,000 encounter scenario run: no tracked invariant violations. Incapacitation and mortality percentages are **scenario-specific** and depend on modeled opponent/decision assumptions.
- Prior reported 60,000 injury/recovery scenario run: zero tracked invariant violations. This checks selected formulas and guards, **not** comprehensive integration or every eligibility decision.

## 2026-11-27 deterministic integration fixtures
- Added `tests/f12-f13-integration.test.mjs`: eight locally executed Node.js fixtures, **8 passed, 0 failed**. Covers F12 harm through F13 severity and HP clamping; initial versus subsequent deterioration; teammate stabilization; critical Medicine failure; affected versus unaffected later checks; eligible rest and care; reassessment threshold; retained deterioration boxes.
- This is **bounded deterministic coverage**, not randomized full encounters or complete character journeys. PT-01 through PT-03 remain open for broader scenario coverage, source-specific edge cases and adversarial tests.


## Randomized F12–F13 integration stress pass (seed 20261127)
- Ran **100,000** simulated combat-to-recovery trajectories locally; **zero violations** of the instrumented HP-clamp, harm-severity, recovery-clamp and unstable-recovery guards.
- Scenario outcomes: **56,953** reached zero HP; **22,199** stabilization successes; **5,781** deaths; **47,273** reached their highest-injury minimum reassessment threshold. These are **scenario-dependent**, not universal probabilities or balance targets.
- Scenario assumptions (not rules): 1–6 attack opportunities, random armor 0–3, harm profile 0–3, success-degree bonus 0–3, a 45% chance of an available Medicine attempt after unresolved deterioration, Medicine target 60, up to 20 calendar days, 70% rest eligibility per day and 50% care availability. The model does not resolve the actual opposed d100 attack/defense roll, consciousness, F14 psychology, F17 equipment inventory, occupations, or economy. A successful care roll is simplified to a strong-or-better threshold of 30 for target 60.
- **Interpretation:** Stress test of selected F12–F13 transitions only. Not a complete integration pass. Next gate is canonical source-driven F14/F17/training/economy fixtures and a full end-to-end state machine with documented assumptions.

## Open verification items
| ID | Priority | Area | Verification required | Status |
|---|---|---|---|---|
| PT-01 | High | F12→F13 | Multi-round harm, zero HP, severe/critical instability, stabilization timing, three-box death, and retention of boxes across new harm | Eight deterministic fixtures passed; broader end-to-end scenarios open |
| PT-02 | High | F13 penalties | Apply highest relevant injury penalty once to *later affected tasks* in combat and outside it; confirm no double application with effective-attribute impairment | Deterministic fixture passed; broader integrated scenarios open |
| PT-03 | High | F13 recovery | Run day-by-day rest eligibility, interruptions, care assessment, stabilization, reassessment, and persistent condition outcomes | Formula-only test; integrated scenario needed |
| PT-04 | High | F14 psychology | Confirm stress triggers, recovery, consequences and non-stacking impairment against combat and injuries from canonical F14 | Awaiting source-specific fixture |
| PT-05 | Medium | F17 equipment | Verify armor once, equipment accessibility, resource consumption and repair/inventory effects | Awaiting source-specific fixture |
| PT-06 | Medium | Training/occupations | Verify governing skills, prerequisite boundaries, CDR, time and advancement in actual character journeys | Awaiting source-specific fixture |
| PT-07 | Medium | Economy | Flat starting funds and occupation monthly pay against purchases, expenses and passage of time | Awaiting source-specific fixture |
| PT-08 | High | GM usability | Human tabletop playtests after sourcebook/GM aids are complete; record adjudication time and confusing cases | Deferred by roadmap |

## Defects and decisions
- **Confirmed mechanical defects:** None established by the listed reference and scenario tests.
- **Balance concerns:** Low-HP participants are vulnerable in the scenario models; keep GM advisory guidance for cover, retreat, negotiation and encounter stakes. Do not interpret simulated percentages as universal encounter probabilities.
- **Documentation resolved:** Teammate rescue and stabilization are explicitly described by PR #14.
- **Important limitation:** Earlier randomized injury/recovery simulations did not apply penalties to later encounter checks or model full patient trajectories. The new deterministic fixtures cover examples of both, but full randomized encounter-to-recovery trajectories remain open.

## Acceptance gate
Close each item only after checking the exact canonical source, creating reproducible fixtures, recording pass/fail and seed or test case, and resolving any mismatch. Keep mechanics simple: d100 for checks and d20 for damage. Human testing follows sourcebook completion.
