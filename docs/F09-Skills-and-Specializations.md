# F09 — Skills and specializations: framework and catalogue arithmetic audit

Canonical authorities: DESIGN-NOTES.md (MC-08, CCDD-12/19/20/22), SKILL-NOTES.md (catalogue), MANUAL-CHARTS.md (reference). F07/F08 creation and occupation rules apply. Earlier fixed specialization counts and flat grants are superseded by competency model. No source mechanics changed.

## Framework

Thirty shared general skills, underlying base floor(governing attribute/2), creation cap85 and advancement cap99. General skills are accessible without class locks; competencies are named, bounded disciplines, with levels I–V and complexity1–7. Professional access requires credible qualification or equivalent route, not exclusive occupation labels. Competency level I has no task bonus; II–V give +5/+10/+15/+20. Apply highest relevant competency once, never stack or permanently raise underlying skill. Possible D100 target clamp1–99; routine/impossible tasks resolved without roll. CDR is training record, not task modifier or spendable currency.

Creation personal competency budgets BP10/SL15/DZ20; cost c[M(L)-M(O)] where M(0)=0 and M(L)=2^(L-1). CDR total100c(2^L-1); incremental100c2^(L-1). Sequential prerequisites, access, resources, evidence, GM approval and CDR threshold apply; documented historical grants exempt from retroactive CDR gating, not evidence. Duplicate grants merge max. Transitions preserve history and do not grant fresh creation budgets. Advancement and career development governed by F10.

## Executed catalogue audit

Source blob 84cbfe14ce2c34b5f1daa5377f0d62e8ffb482df. Records 550; proficiency rows 2750. Complexity distribution: {"1":6,"2":94,"3":200,"4":78,"5":82,"6":63,"7":27}. Checked exact ID/name uniqueness, five rows per record, PCP, incremental and cumulative CDR and task bonus arithmetic. Exceptions 0.

No exceptions in executed checks.

F08 already verified supporting prerequisite graph and occupation baseline closure against its recorded catalogue snapshot. This audit does not certify semantic uniqueness, discipline-specific assessment adequacy, resource suitability or human gameplay balance. Remaining F09 tasks: governing skill mapping, hours and threshold verification, semantic and assessment review, analytical learning balance and repeatable regression checks. F08 individual semantic acceptance held per user direction while Section 6.5 proceeds.

## Competency semantic correction pass — 2026-11-26

Canonical catalogue blob after corrections: `a5720eabd1cbcd91c8014a7054652d7f14f8d263`. This is a subsequent revision to the historical audit snapshot above, not a change to its original arithmetic findings. All 550 competency records and 2,750 I–V rows are retained. Four governing assignments were revised: G-027 → Search (PER); G-030 → Resource Management (INT); SL-P-006 → Leadership (PRE); DZ-G-107 → Resource Management (INT). Scope boundaries were clarified for related disciplines; G-030, SL-G-010, DZ-G-107 and DZ-G-111 now require auditable planning/management assessment outcomes. Added explicit sequential supporting prerequisites: DZ-G-054 → G-047, DZ-G-101 → G-064. Other flagged independent-entry specialties retain access through resources, training, evidence and assessment rather than unnecessary mandatory prerequisites. Revised prerequisite graph has 226 resolved references, no detected cycles; record and level-row counts unchanged. Full numerical regression and occupation-index concordance against the revised blob remain separate checks; do not attribute the historical zero-exception arithmetic result to the new blob without rerunning it.

## Occupation and manuscript concordance — 2026-11-26

After canonical scope and governing-skill changes, the 352-profile OCCUPATION-INDEX.json was reconciled: 85 stale scope fields and 21 stale governing-skill fields corrected across 1,370 competency references. Current occupation-index blob: `132d9ba23b268e29c30905fe13566564d8adc9ec`; exact title/governing-skill/scope mismatches: zero. All 1,370 baseline grant IDs resolve. One baseline grant (O-081, DZ-G-021 level II) conflicted with the newly proposed SL-G-024 prerequisite, so that proposed mandatory dependency was withdrawn; the discipline retains its access, training and assessment safeguards. Current prerequisite edges: 226. The three existing Core manuscript files (outline, chapters 1 and 2), MANUAL-CHARTS and glossary contain no specific revised competency identifiers or conflicting governing-skill assignments. Numerical regression on all 550 catalogue records and 2,750 level rows found zero PCP, CDR gain, CDR total or competency bonus exceptions. The historical F09 source blob remains a historical snapshot, not the current canonical blob.
