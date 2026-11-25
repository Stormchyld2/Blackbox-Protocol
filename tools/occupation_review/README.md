# Occupation profile review tools (Section 6.5)

These scripts author and check the `sourcebook` layer of `notes/OCCUPATION-INDEX.json`. The top-level profile fields are a generated skeleton derived from `notes/OCCUPATION-PACKAGES.md` and `notes/SKILL-NOTES.md`, and the scripts never change them.

## Scripts

| Script | Purpose |
|---|---|
| `common.py` | Shared paths, canonical skills, advantage types and verification text, the Section 5 and resource rules, and parsers for the catalogue, packages and deficit table. |
| `dump.py --range O-a:O-b` | Prints compact authoring context: ordered skills, existing alternatives, specializations and each competency with its catalogue resources. |
| `apply_batch.py BATCH_ID FILE` | Applies an authored text file (one `@O-xxx` block per profile) to the index. Running it again with the same input gives the same result. Computes reference deficits from the Section 5 table and rejects mismatches. |
| `validate.py [--baseline REV] [--ids ...] [--final]` | Full validation, described below. `--final` also fails if any profile is not individually reviewed. |
| `log_batch.py` | Records a batch in `batches.json` and fills in the previous batch's commit. |
| `checkpoint.py` | Regenerates `notes/OCCUPATION-REVIEW-CHECKPOINT.md` from the index, `batches.json` and a validation run. |

## Authoring format

```
@O-123
adv: <type> | <description> | <limits>
alt: <Skill> | <rationale>            (0–3 lines; none for flexible profiles)
qe: <experience>
qc: <credential>
qa: <authority>
qs: <specialist training>
r: <occupation practice>              (one per competency, in competencyReferences order)
rn: <resource note>                   (optional; required in practice for status-only profiles)
as: <scenario>
ak: <skill>
at: SL | DZ | local
ad: <-5..-25> | <basis>               (required for local; must match the table otherwise)
af: <feasibility>
am: <milestone>
```

## What `validate.py` checks

- **Structure:** 352 unique profiles; career and tag cross-references resolve.
- **Mechanics:** allocations and grants match `OCCUPATION-PACKAGES.md`; ordered skills equal primary skills; totals are 100/80/60 by setting; competency references match catalogue title and governing skill; every top-level generated field and every mechanical `sourcebook` field is identical to the baseline commit (`ce78bca`, the pre-review state).
- **Advantage:** valid Section 2.5 type, unaltered verification text, substantive description and limits, and no numerical, reroll, "guaranteed" or "automatically grants" wording.
- **Alternatives:** at most three, canonical, not already ordered, each with a rationale; none on flexible profiles.
- **Qualification:** experience, credential, authority and specialist training present and substantive; original rule preserved.
- **Resources:** one entry per competency, catalogue requirement quoted verbatim, practice description substantive and unique within the profile.
- **Adaptation:** deficit between −5 and −25 in steps of 5; BP and SL→DZ arithmetic matches the Section 5 table; origin matches the profile setting; local deficits have a written basis; no elapsed-time wording; scenario, feasibility and milestone substantive.
- **Distinctness:** exact duplicates across profiles are errors for advantage description and limits, scenario, feasibility, milestone, each qualification field and each practice description; near-duplicates (word-trigram Jaccard ≥ 0.6) are errors for advantage description, scenario, feasibility and milestone.

## Final result (2026-11-25)

`python3 tools/occupation_review/validate.py --final`: 352 profiles, 352 individually reviewed, 0 near-duplicate pairs, 0 errors, 0 warnings. The batch log and the open mechanical review candidates are in `notes/OCCUPATION-REVIEW-CHECKPOINT.md`.
