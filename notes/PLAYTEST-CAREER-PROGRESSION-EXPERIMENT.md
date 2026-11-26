# Playtest issue 6 — career-track eligibility: analytical test 1
Date: 2026-11-25. **Simulation/design experiment only; no rule changes approved.**

## Existing system reproduced
CDR for a completed competency at complexity c, level L is 100 × c × (2^L−1). Incremental hours for a new level L are H(c) × 2^(L−1), where H(c) is 4, 8, 16, 40, 80, 160, 320 hours for complexities 1–7. Consequently, CDR per hour is constant across levels but heavily favors easy competencies:

| Complexity | CDR per hour | Hours to complete levels I–IV | CDR from levels I–IV |
|---|---:|---:|---:|
| 1 | 25 | 60 | 1,500 |
| 2 | 25 | 120 | 3,000 |
| 3 | 18.75 | 240 | 4,500 |
| 4 | 10 | 600 | 6,000 |
| 5 | 6.25 | 1,200 | 7,500 |
| 6 | 3.75 | 2,400 | 9,000 |
| 7 | 2.1875 | 4,800 | 10,500 |

Thus 1,120 hours spent acquiring new c1 competencies can generate 28,000 CDR, whereas 1,120 hours of c6 training generates only 4,200 CDR if completion awards are proportionally distributed across projects; **actual CDR is only awarded on completion**, so the latter is an illustrative rate, not partial-credit permission.

## Reproduction of reported blocked career examples
- Samuel: 8,800 current CDR vs 60,000 required for c6 Nursing practice IV: short 51,200 (5.82× current total).
- Elena: 5,600 vs 15,000 required for the reported c4 IV target: short 9,400.
- Low-CDR pregens (<5,000) cannot start c6 I (5,000 gate) or c7 I (10,000 gate), even with relevant opportunity, under the existing matrix.

## Candidate alternatives tested logically
**A. Discipline-specific CDR using unchanged global thresholds:** FAIL. Since relevant CDR is a subset of total CDR, the 60,000 threshold cannot become easier; Samuel's eligibility cannot improve.

**B. Discipline-specific CDR using reduced thresholds:** INDETERMINATE. Requires occupation/discipline tagging for every relevant competency and a calibrated threshold matrix. A low threshold risks letting broad c1 training inside a discipline substitute for professional preparation. No defensible numerical matrix is established.

**C. Evidence-based career-route exception to global CDR gate:** PASS on reachability and cheap-competency exploit *in principle*, pending broader validation. To activate a target level, require the immediately preceding level in that competency, all supporting prerequisites, available learning slot, full incremental training hours, resources/access/supervision, and final assessment. In lieu of the global CDR threshold, require a GM-auditable relevant-practice record or documented formal study/qualification appropriate to the target; **do not count generic CDR, occupation labels, or the training hours of the target level as proof of prior qualification**. This route is open to independent learners and career changers with equivalent evidence. No bonus CDR is generated and no previously completed competency is granted automatically.

**C's numerical feasibility:** For a c6 level IV project, prior completion through III requires H(6) × (1+2+4) = 1,120 training hours; the IV project itself requires 1,280 further hours, totaling 2,400 hours through IV, plus prerequisites and assessment. For c4 IV, 280 prior hours plus 320 target hours = 600 through IV. These are substantial investments without requiring unrelated competency farming. The same calculation applies to all occupations because it depends on competency complexity, not job title.

## Edge cases to validate before approval
- No profession label grants eligibility without demonstrated learning; no occupation lockout for self-taught characters.
- Career changes can transfer only relevant documented competencies and experience, not a whole career-track balance.
- Distinct competencies in the same discipline must not each gain unearned levels from a single experience record.
- A c7 specialization may still require facilities, supervision and formal qualification; route C does not waive these.
- Cross-check six pregen sheets, full catalogue prerequisites, career target definitions, and active-slot progression before any production change. This test does not establish whether the total training hours feel right in human play.
- The 25 vs 2.1875 CDR/hour disparity remains in **general CDR and slot acquisition** under candidate C. Thus C fixes professional target access but **does not fully fix** low-complexity farming for general slots. That separate incentive needs a numerical slot-progression test.

## Recommendation
Candidate C is the least invasive **prototype for playtesting**, not an approved rule. Do not replace CCDD-19 or rewrite career packages without owner approval and a more comprehensive simulation.
