# Simplified learning — occupation-package regression, pass 2
Date: 2026-11-25. **Analytical test, not human playtest or approved rules change.**

## Source examined
Read the working `notes/OCCUPATION-PACKAGES.md` from this branch. Parsed **352 occupation blocks** and **1,165 listed competency career targets** (target entries, not necessarily unique competencies). These are package-level observations, not 1,165 independently validated advancement paths. The full competency catalogue and level-specific prerequisite graph were not available in this pass, so this is **not** a complete catalogue audit.

## Two rules compared
- Existing CCDD-19: direct prerequisites **plus** a global CDR minimum for each complexity/level.
- Simplified candidate: direct prerequisites, prior level, required hours, resources, supervision, slot and assessment; **no global CDR minimum for individual learning eligibility**. CDR still accumulates for learning-slot thresholds.

## Regression findings
1. **Global-gate elimination: PASS by construction.** All 1,165 listed career targets would cease to be blocked *solely* by global CDR, irrespective of occupation. This does **not** mean they are all attainable: level-specific prerequisites, qualifications and resource access must still be validated individually.
2. **Nursing example: PASS conditional on prerequisites.** O-057 Nurse lists P-061 Nursing practice III in its qualified baseline and IV as a career target; its conditional baseline CDR is 7,200. Under the candidate, a properly qualified nurse can undertake IV without first farming global CDR. Complexity-six IV still requires 1,280 incremental hours before discounts/overrides.
3. **Firefighter example: PASS conditional on prerequisites.** O-229 Firefighter lists P-071 Fire service operations III and IV as a target; baseline CDR 4,000. Its career advancement is no longer gated by an unrelated global CDR threshold. Actual complexity and catalogue prerequisites must be checked before quoting hours.
4. **Career changes/self-directed learning: PASS in rule design.** No occupation label is used in the candidate eligibility predicate. A character with equivalent qualifications can follow the same path.
5. **Learning-slot incentive: FAIL to resolve fully.** Under existing formulas complexity-one training earns 25 CDR/hour, complexity-seven earns 2.1875 CDR/hour on completion. The candidate removes the incentive to farm CDR for competency entry but retains the incentive for extra slots.
6. **Time feasibility: OPEN.** Complexity-six IV requires 1,280 incremental hours (320 days at four allocated hours/day); human downtime testing is required.
7. **Full catalogue prerequisite/loop validation: NOT RUN.** Requires canonical skill rows and their level-specific edges, not occupation-package prose alone.
8. **Six pregen validation: NOT RUN.** Requires authoritative pregen sheets and exact starting levels; report anecdotes alone are insufficient.

## Verdict
**Conditional pass** for the narrow objective: removing global CDR as an individual competency gate makes career advancement independent of unrelated total CDR while preserving existing time/prerequisite safeguards. **Not yet a comprehensive balance pass.** Do not remove CCDD-19 from production references until catalogue/pregen audits and human pacing tests are complete. Do not introduce Discipline CDR.
