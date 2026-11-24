# Learning balance and catalogue validation — automated audit

Working audit, not human playtest. Source snapshots: SKILL-NOTES 6379db3112d3057a7d59e5df5055fa9043583084, OCCUPATION-PACKAGES f4c6fa54b168accbcae8bd31d136bfc50db22c2a. Model uses current level gates, default hours, supporting prerequisite levels I/I/II/III/IV, no discounts, no resource/time/credential restrictions except specified catalogue access; optimistic upper bound. Greedy shortest available next level, no claim of optimality. Starting grants are provisional. No real-world qualification claims.

Records 550; profiles 352; dangling prerequisite IDs 0; self dependencies 0; proposed grant instances with unmet supporting prerequisites 113. These require closure or documented equivalence before packages are production-ready.

| Scenario | Starting CDR | Final CDR | Additional hours | New stages | Competencies reached | Mastered |
|---|---:|---:|---:|---:|---:|---:|
| Core general novice | 0 | 1605800 | 81344 | 1000 | 200 | 200 |
| All general novice | 0 | 3224000 | 202120 | 1775 | 355 | 355 |
| All catalogue hypothetical access | 0 | 6541000 | 1019280 | 2750 | 550 | 550 |
| Chef (Blackbox Protocol) | 14000 | 47600 | 1536 | 12 | 7 | 6 |
| Police Officer (Blackbox Protocol) | 13900 | 70300 | 3232 | 20 | 9 | 8 |
| Surgeon (Blackbox Protocol) | 29600 | 79200 | 5824 | 16 | 10 | 5 |
| Blacksmith (Dead Zone) | 8100 | 46500 | 2208 | 15 | 6 | 6 |

## Threshold milestones
- Core general novice: 10000 CDR at 400h (50 stages); 25000 CDR at 1040h (108 stages); 50000 CDR at 2208h (181 stages); 100000 CDR at 4520h (304 stages); 200000 CDR at 9192h (450 stages); 400000 CDR at 18512h (611 stages)
- All general novice: 10000 CDR at 400h (50 stages); 25000 CDR at 1032h (109 stages); 50000 CDR at 2200h (182 stages); 100000 CDR at 4624h (334 stages); 200000 CDR at 9328h (504 stages); 400000 CDR at 20376h (784 stages)
- All catalogue hypothetical access: 10000 CDR at 400h (50 stages); 25000 CDR at 1032h (109 stages); 50000 CDR at 2200h (182 stages); 100000 CDR at 4624h (334 stages); 200000 CDR at 9344h (507 stages); 400000 CDR at 20688h (800 stages)
- Chef (Blackbox Protocol): 25000 CDR at 512h (6 stages)
- Police Officer (Blackbox Protocol): 25000 CDR at 480h (8 stages); 50000 CDR at 1760h (16 stages)
- Surgeon (Blackbox Protocol): 50000 CDR at 1088h (11 stages)
- Blacksmith (Dead Zone): 10000 CDR at 96h (3 stages); 25000 CDR at 736h (10 stages)

## Findings and next actions
Restricted career-only simulations may stall because cumulative CDR requires breadth or prior experience; do not reduce thresholds silently. General-only reachability is limited by professional prerequisites if present. Audit semantic prerequisites and occupation packages individually; numerical reachability alone is not evidence of plausibility. Test actual campaigns and downtime pacing before locking version 1.0. Catalogue descriptions and assessments remain generic and require discipline-specific review. No mechanics changed.
