# F07 validation report

Source: notes/OCCUPATION-PACKAGES.md (O-291, O-317, O-329), notes/MANUAL-CHARTS.md MC-08, notes/DESIGN-NOTES.md CCDD-12/19/20/22. General-skill examples are catalogue-backed; competency catalogue retrieved successfully via Git blob 84cbfe14ce2c34b5f1daa5377f0d62e8ffb482df; historical access and evidence remain conditional. No claim of full character acceptance.

## Worked allocation examples

All three use STR40 CON50 DEX60 INT60 PER50 WIL50 PRE40 (350). Personal allocations: {"Medicine":20,"Survival":20,"Navigation":20,"Mechanics":20,"Agriculture":20}. Secondary backgrounds are illustrative documented first aid/outdoor experience and repair/farm work, not automatic competency grants. PCP unspent; no personal competency purchase claimed. Derived maxima/references: health9, stamina50, resilience50, initiative55, movement50, carrying20kg, recovery50. Stress0 absent agreed history. Equipment and contacts require campaign confirmation.

| Skill | BP Chef O-291 | SL Emergency Kitchen Manager O-317 | DZ Settlement Cook O-329 |
|---|---:|---:|---:|
| Athletics | 20 | 20 | 20 |
| Endurance | 25 | 25 | 25 |
| Close Combat | 30 | 30 | 30 |
| Firearms | 30 | 30 | 30 |
| Archery | 30 | 30 | 30 |
| Stealth | 30 | 30 | 30 |
| Vehicle Operation | 30 | 30 | 30 |
| Search | 25 | 35 | 25 |
| Surveillance | 25 | 25 | 25 |
| Forensics | 30 | 30 | 30 |
| Research | 40 | 40 | 35 |
| Streetwise | 25 | 25 | 25 |
| Electronics | 30 | 30 | 30 |
| Mechanics | 50 | 50 | 60 |
| Computing | 30 | 30 | 30 |
| Science | 55 | 30 | 30 |
| Communications | 30 | 30 | 30 |
| Medicine | 50 | 60 | 60 |
| Crafting | 60 | 50 | 50 |
| Construction | 30 | 30 | 35 |
| Agriculture | 50 | 50 | 65 |
| Animal Husbandry | 30 | 30 | 35 |
| Survival | 45 | 50 | 50 |
| Navigation | 45 | 50 | 50 |
| Scavenging | 25 | 25 | 25 |
| Resource Management | 50 | 55 | 40 |
| Persuasion | 35 | 35 | 30 |
| Intimidation | 20 | 20 | 20 |
| Leadership | 20 | 20 | 20 |
| Deception | 20 | 20 | 20 |

Occupational allocations:
- O-291: {"Crafting":30,"Science":25,"Resource Management":20,"Persuasion":15,"Research":10}; conditional package CDR 2900 (source value, not independently verified).
- O-317: {"Resource Management":25,"Crafting":20,"Persuasion":15,"Research":10,"Search":10,"Medicine":10,"Survival":5,"Navigation":5}; conditional package CDR 5500 (source value, not independently verified).
- O-329: {"Crafting":20,"Agriculture":15,"Resource Management":10,"Persuasion":10,"Research":5,"Medicine":10,"Survival":5,"Navigation":5,"Mechanics":10,"Construction":5,"Animal Husbandry":5}; conditional package CDR 3500 (source value, not independently verified).

## Executed JavaScript checks

- PASS: O-291 general allocation
- PASS: O-317 general allocation
- PASS: O-329 general allocation
- PASS: attribute range rejects 81
- PASS: personal overspend rejected
- PASS: unknown skill rejected
- PASS: duplicate competency max
- PASS: upgrade cost
- PASS: CDR threshold

These checks were executed during document preparation; they are not a repository CI suite. Remaining blockers: verify resource entitlements and campaign histories, run integrated playtests. Do not mark F07 fully accepted.

## Competency catalogue verification

Full catalogue retrieved through the Git blob endpoint. All six unique grant IDs were located. G-008 II requires G-001 I and G-003 I; all three packages satisfy this. Other listed grants have no proposed supporting prerequisites. P-149 III requires documented professional training or equivalent under CCDD-22; historical occupational grants are exempt from retroactive CDR entry thresholds. All resource and assessment requirements remain applicable to the fictional history.

| Package | Verified grant contributions | Recomputed CDR | Published conditional CDR |
|---|---|---:|---:|
| O-291 | G-001 III 1400; G-003 II 900; G-008 II 600 | 2900 | 2900 |
| O-317 | P-149 III 3500; G-008 II 600; G-184 II 900; G-001 I 200; G-003 I 300 | 5500 | 5500 |
| O-329 | G-001 III 1400; G-008 II 600; DZ-G-008 II 1200; G-003 I 300 | 3500 | 3500 |

All three CDR totals match. Base active slots are respectively 2, 3 and 4. Personal competency points remain unspent (permitted by CCDD-12). These examples pass catalogue ID, level, prerequisite closure and CDR checks conditional on documented history and access. No actual playtest or campaign resource approval is claimed.
