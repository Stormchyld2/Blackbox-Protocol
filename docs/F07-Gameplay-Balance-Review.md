# F07 — Analytical gameplay balance review

Status: analytical pre-playtest, not human tabletop evidence. Canonical rules unchanged. Source DESIGN-NOTES.md R01–R06, CCDD-12/19/20/22 and F07 validation report.

## Method

Exhaustive D100 enumeration for five underlying skill values (30,45,60,75,85), five competency bonuses (0,5,10,15,20), three difficulty modifiers (-20,0,+20), four contextual deficit magnitudes (0,5,15,25). 300 combinations, 30000 die outcomes. Possible checks only; routine and impossible tasks excluded. No assistance or alternative attribute adjustment in this isolated experiment. All combinations matched the clamped target probability.

| Underlying | Normal | Difficult -20 | III normal | Deficit 15, no bonus | V normal |
|---:|---:|---:|---:|---:|---:|
| 30 | 30% | 10% | 40% | 15% | 50% |
| 45 | 45% | 25% | 55% | 30% | 65% |
| 60 | 60% | 40% | 70% | 45% | 80% |
| 75 | 75% | 55% | 85% | 60% | 95% |
| 85 | 85% | 65% | 95% | 70% | 99% |

## Setting concentration and adaptation

Matched illustrative skill base30, primary top allocation BP30/SL25/DZ20, competency III. No personal points in focal skill. Secondary backgrounds and personal allocation can change ranking; these are controlled comparisons, not representative population averages.

| Character | Underlying | Bonus | Deficit | Normal | Difficult |
|---|---:|---:|---:|---:|---:|
| BP | 60 | 10 | 0 | 70% | 50% |
| SL | 55 | 10 | 0 | 65% | 45% |
| DZ | 50 | 10 | 0 | 60% | 40% |
| BP-origin in DZ | 60 | 10 | 15 | 55% | 35% |

A 15-point deficit can reverse a 10-point origin concentration advantage. Three separately evidenced five-point adaptation milestones restore the original target; no time-only recovery. A native DZ character may compensate with relevant secondary allocation up to combined occupational cap30. All eras have 100 occupational and 100 personal points, but different concentration and PCP budgets; equal budget is not proof of equal utility.

## Findings and disposition

1. Ceiling saturation: underlying85 plus mastery20 gives target99, wasting six points in neutral conditions; difficulty -20 gives85, preserving mastery value. Do not raise cap; test whether easy tasks should instead be routine.
2. Low-skill floor: underlying30 with difficult -20 and deficit25 clamps to1. Avoid repeated mandatory checks in inaccessible contexts; use feasibility, alternate approaches, support and learning opportunities. Do not remove earned deficits automatically.
3. Attribute asymmetry: WIL governs no default general skills, but direct checks, stamina and resilience; INT governs 12. Character optimization may favor INT. Test mixed scenarios before reallocating skills.
4. Competency budget breadth: complexity1 level I costs1; complexity4 level III costs16 from zero before gates. BP10 cannot purchase the latter from zero, SL15 cannot, DZ20 can afford it but must still meet gates. Occupational history grants can dominate starting CDR. This is intentional history differentiation, but specialist and civilian parity needs observed play.
5. No evidence justifies changing canonical numbers now. Preserve provisional defaults.

## Human playtest protocol (F36 dependency)

Recruit matched native and transitional characters across all three settings, with civilian and professional histories, using verified F07 sheets. Run repeated social, research, physical, resource and technical challenges; include meaningful alternative approaches, scarce resources, training and adaptation opportunities. Record declared target, modifiers, outcomes, meaningful participation, blocked tasks, resource access, time to adaptation, player perception and GM adjudication. Compare matched opportunities, not raw success counts across different tasks. Proposed review triggers (not canonical rules): repeated lack of meaningful contribution, persistent near-certain or near-impossible mandatory checks, or a setting/background advantage that persists across matched opportunities without an intended tradeoff. Investigate before tuning; document revisions and rerun regression checks. No human sessions or production engine tests have been executed.

## Acceptance

Analytical probability and concentration checks passed. Integrated human gameplay balance remains unverified and is explicitly transferred to F36 playtesting. This report does not certify campaign balance or resource availability.
