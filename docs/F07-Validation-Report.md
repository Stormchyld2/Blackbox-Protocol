# F07 validation report

Source: notes/OCCUPATION-PACKAGES.md (O-291, O-317, O-329), notes/MANUAL-CHARTS.md MC-08, notes/DESIGN-NOTES.md CCDD-12/19/20/22. General-skill examples are catalogue-backed; competency eligibility remains conditional because SKILL-NOTES.md returned empty content through the repository interface. No claim of full character acceptance.

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

These checks were executed during document preparation; they are not a repository CI suite. Remaining blockers: retrieve full competency catalogue, validate prerequisite closure and actual complexity/CDR for each package, verify resource entitlements and campaign histories, run integrated playtests. Do not mark F07 fully accepted.
