# F36 — Competency progression and balance: analytical playtest pass 1 (2026-11-26)

**Type:** deterministic rules simulation and balance stress test, not a human tabletop playtest. **Authority:** canonical SKILL-NOTES blob `a5720eabd1cbcd91c8014a7054652d7f14f8d263`, DESIGN-NOTES and F09/F10. Existing mechanics unchanged. Prior experiments in `notes/PLAYTEST-SIMPLIFIED-LEARNING-TEST.md` and `notes/PLAYTEST-CAREER-PROGRESSION-EXPERIMENT.md` are *unapproved variants*, not current rules.

## Executed coverage
Parsed 550 canonical records, 2,750 level rows, 226 explicit prerequisite edges. Missing prerequisite targets: 0. Evaluated 7722 bounded D100 target scenarios (underlying skill 1–99, competency level 0–5, contextual modifier −30 to +30 by 5); target-range exceptions: 0. All costs, hours, gates and CDR values below derive from current catalogue. This is a reproducible deterministic analytical model, not a report of players completing sessions.

## Pacing and training-time pressure
| Complexity | CDR per active training hour (completed levels) | Hours to level V | Weeks at 4 h/week | Weeks at 12 h/week |
|---:|---:|---:|---:|---:|
| 1 | 25.0000 | 124 | 31.0 | 10.3 |
| 2 | 25.0000 | 248 | 62.0 | 20.7 |
| 3 | 18.7500 | 496 | 124.0 | 41.3 |
| 4 | 10.0000 | 1240 | 310.0 | 103.3 |
| 5 | 6.2500 | 2480 | 620.0 | 206.7 |
| 6 | 3.7500 | 4960 | 1240.0 | 413.3 |
| 7 | 2.1875 | 9920 | 2480.0 | 826.7 |

Training hours are **active credited hours**, not session time; gates, facilities, qualifications, travel and failed assessments can extend these estimates. A complexity-7 level V requires 9,920 active hours: 2,480 weeks at 4 h/week, or 826.7 weeks at 12 h/week. This is not viable as ordinary short-campaign progression without exceptional downtime or a different advancement design. No hours were changed.

## CDR gate stress test
| Complexity | Gate to I | Gate to IV | Gate to V | Total training hours through V |
|---:|---:|---:|---:|---:|
| 1 | 0 | 1500 | 3000 | 124 |
| 2 | 0 | 3000 | 6000 | 248 |
| 3 | 0 | 7500 | 15000 | 496 |
| 4 | 0 | 15000 | 30000 | 1240 |
| 5 | 2500 | 30000 | 60000 | 2480 |
| 6 | 5000 | 60000 | 120000 | 4960 |
| 7 | 10000 | 120000 | 250000 | 9920 |

Under current global CDR gates, higher-complexity learning is blocked even when a character has relevant occupational evidence and training access. Example: c6 IV requires 60,000 CDR, while c6 I–III themselves award only 4,200 CDR. A character cannot reach IV by training that single competency alone. Other completed competencies or approved historical development are necessary. This is a **design balance concern**, not a broken prerequisite reference.

## Incentive and specialist-access findings
- **CDR/hour imbalance confirmed:** complexity 1 and 2 award 25 CDR/hour at completion; complexity 7 awards 2.1875 CDR/hour, an 11.43× differential. Because extra learning slots are CDR-based, low-complexity farming is mechanically rewarded even without relevant mastery.
- **Training-time feasibility risk confirmed:** complexity 6 V takes 4,960 hours, complexity 7 V 9,920 hours. These are plausible as lifetime mastery narratives but unlikely to be earned during typical weekly campaigns without significant fictional downtime.
- **Gate/role mismatch:** occupation-specific competence and qualification do not automatically replace CDR eligibility under current rules; the prior simplified-learning experiment shows a possible alternative but has not been approved.
- **Competency bonus pressure:** level V adds +20 to its applicable underlying skill. This is bounded by the D100 1–99 clamp and never stacks with another competency, but the meaningful gain varies sharply with high base skills near the cap.
- **Prerequisite graph:** zero missing edges in the current catalogue; numerical graph integrity is not evidence that all in-world access and supervision conditions are attainable.

## Human playtest protocol required for acceptance
Run at least six character profiles across Core, Signal Lost and Dead Zone, with both low- and high-complexity learning goals, one career change, one interrupted training project, one failed assessment, and one limited-resource qualification. Track real session count, in-world weeks, active training hours, CDR, slots, resource availability, failed gates, completion count and player satisfaction. Compare short (6–10 sessions), medium (20–30), and long (50+) campaign horizons. A human GM/player trial has **not** occurred in this pass.

## Decision register (no changes approved)
1. **High priority:** decide whether global CDR should gate individual competency training; compare current CCDD-19 to the previously simulated simplified-learning variant without silently substituting rules.
2. **High priority:** decide desired campaign pacing for c5–c7 training; consider how downtime is earned and whether lifetime expertise should normally be backstory rather than session advancement.
3. **Medium priority:** test CDR-based extra-slot farming independently from competency access.
4. **Medium priority:** verify that +5/+10/+15/+20 competency bonuses produce desirable D100 success rates for novice, competent and expert characters.

**Result:** analytical balance verification **completed with material design concerns identified**. Human playtest and balance acceptance **not complete**. Do not describe this as a passed full playtest.
