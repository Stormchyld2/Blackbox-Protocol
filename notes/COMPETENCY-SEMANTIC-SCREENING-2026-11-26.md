# Competency catalogue — complete-record semantic screening (2026-11-26)

Source: `notes/SKILL-NOTES.md` at blob `84cbfe14ce2c34b5f1daa5377f0d62e8ffb482df`. This report covers **every one of the 550 records** in the source, not a sample. It is a machine-assisted editorial screening, **not** a claim of human playtesting or independently judged adequacy of every assessment.

## Population
| Set | General | Occupational | Total |
|---|---:|---:|---:|
| Core | 200 | 150 | 350 |
| Signal Lost | 35 | 15 | 50 |
| Dead Zone | 120 | 30 | 150 |
| Total | 355 | 195 | 550 |

## Catalogue-wide findings
- 550 records with five I–V rows each; 2,750 level rows.
- All 550 have a governing skill and complexity declaration, resources section, and revised assessment-evidence section.
- 224 explicit supporting-prerequisite references; **zero** dangling identifiers, self-references, forward-era dependencies, or detected prerequisite cycles.
- All 195 occupational records declare occupational/qualification-restricted access.
- No identical scope descriptions and no identical assessment-focus descriptions.
- **544** primary assessment fields invoke the common I–V rubric, even though revised evidence paragraphs supply differentiated focus. These require discipline-specific editorial review; a common rubric alone is not evidence of assessment adequacy.
- No decreasing I–V hours sequences detected.

## Priority editorial overlap cases (not automatically duplicates)
1. `G-030` Emergency evacuation planning versus `G-198` Household emergency planning. Define where household evacuation plans end and broader immediate-response plans begin; distinguish assessment artifacts.
2. `G-027` Outdoor risk assessment versus `P-048` Security risk assessment. Keep environmental hazards separate from deliberate security threats and professional risk authority.
3. `G-185` Emergency shelter management versus `P-079` Emergency shelter administration. Existing scopes explicitly distinguish resident operations from institutional staffing/compliance; preserve that boundary in examples.
4. `G-036` Road driving versus `G-037` Off-road driving. Existing scopes distinguish road traffic from rough terrain; the latter explicitly depends on the former.
5. `G-071` Electrical fundamentals versus `G-075` Electrical troubleshooting fundamentals. Preserve conceptual knowledge versus fault isolation, and electrical safety limits.
6. `G-101` First aid versus `SL-G-004` Wilderness first aid. Remote-resource constraints must be assessed separately from baseline first aid.
7. `SL-G-008` Hunting versus `DZ-G-105` Subsistence hunting, and `SL-G-009` Trapping versus `DZ-G-106` Subsistence trapping. The expansion competencies concern sustained resource management, not simply a higher bonus on the same field task.

## Disposition
**Structural and graph checks: PASS.** **Cross-record semantic uniqueness: SCREENED, NOT CERTIFIED.** **Assessment specificity, governing-skill appropriateness, resource realism and training-hour realism: REQUIRE DISCIPLINE-SPECIFIC REVIEW.** Do not relabel this as full semantic validation. No approved mechanic or competency identifier was changed. Resolve flagged boundaries with evidence before changing canonical records; preserve original names/IDs and avoid mechanically redundant new competencies.

## Reproducibility
Parse headings matching `### ((SL-|DZ-)?[GP]-[0-9]{3}) — NAME`; split each record at the next heading; extract governing skill, complexity, resources, assessment evidence, five level table rows and `Supporting prerequisites` identifiers; construct directed prerequisite graph; verify identifier resolution, no cycles, access and scope/assessment-focus uniqueness. Subsequent work must add record-by-record substantive judgement, not just re-run these tests.
