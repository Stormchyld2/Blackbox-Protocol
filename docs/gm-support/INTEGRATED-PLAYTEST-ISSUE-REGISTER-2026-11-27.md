# Integrated Playtest Issue Register — 2026-11-27

**Status:** In progress. Automated scenario testing is not a substitute for tabletop playtesting. Do not reopen locked combat mechanics without a reproducible defect.

## Verified reference baseline
- F12 combat: d100 action resolution; d20 damage. One main action, movement and reaction; declare defensive reaction before dice.
- F13 injury: severity by post-protection harm; zero HP incapacitates; instability and deterioration; teammate Medicine stabilization; eligible recovery and care.
- PR #14 merged: explicitly documents teammate rescue in F13 and GM-02 without new mechanics.
- Prior reported F13 formula test: 82,532 exhaustive assertions and 50,000 randomized transitions, zero reported failures.
- Prior reported 60,000 encounter scenario run: no tracked invariant violations. Incapacitation and mortality percentages are **scenario-specific** and depend on modeled opponent/decision assumptions.
- Prior reported 60,000 injury/recovery scenario run: zero tracked invariant violations. This checks selected formulas and guards, **not** comprehensive integration or every eligibility decision.

## Open verification items
| ID | Priority | Area | Verification required | Status |
|---|---|---|---|---|
| PT-01 | High | F12→F13 | Multi-round harm, zero HP, severe/critical instability, stabilization timing, three-box death, and retention of boxes across new harm | Partial; end-to-end fixture needed |
| PT-02 | High | F13 penalties | Apply highest relevant injury penalty once to *later affected tasks* in combat and outside it; confirm no double application with effective-attribute impairment | Formula-only test; integrated scenario needed |
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
- **Important limitation:** Prior injury/recovery simulation did not apply penalties to subsequent encounter checks or model full patient trajectories; those are still open despite individual formula checks passing.

## Acceptance gate
Close each item only after checking the exact canonical source, creating reproducible fixtures, recording pass/fail and seed or test case, and resolving any mismatch. Keep mechanics simple: d100 for checks and d20 for damage. Human testing follows sourcebook completion.
