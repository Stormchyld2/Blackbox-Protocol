> **Historical balance study — superseded, not canonical.** This document evaluates an earlier combat model and records provisional decisions subsequently superseded by current `docs/rules/core-rules/F12-Combat.md` and `docs/rules/core-rules/F13-Damage-Injuries-and-Recovery.md`. Do not use its half-DEX evasion or critical-only instability as live rules. Refer to current F12/F13 and the D20 harm model.

# Combat balance: candidate fixes (draft for decision)

**Status:** decided 2026-11-25. Jason approved **option 1 + 3b** (half-DEX evasion; only a critical depleting hit leaves a character unstable), recorded in DESIGN-NOTES 4.1, 4.3 and the decision log, and mirrored in F12, F13 and the SRD draft. Options 2 and 3a were not adopted. The rule is provisional pending real playtests. Every number below comes from Monte Carlo simulation (`tools/playtest_sim/sim_balance.py`, fixed seed, 20,000 runs per cell; full tables in `tools/playtest_sim/out_sim_balance.md`) and is **provisional** until checked at a real table.

Addresses findings #1, #2 and #3 of [PLAYTEST-SIMULATION-1.md](PLAYTEST-SIMULATION-1.md):

1. Defense outclasses attack: DEX evasion uses the full attribute (45–65) while attack skills sit at about half an attribute (22–35), so pregen fights drag (median 8–10 rounds to a knockdown).
2. Injury severity uses absolute HP loss and ignores the target: a landed punch (D4) is severe 42–43% of the time.
3. Because the depleting hit is usually severe, 80–89% of knockdowns leave the character dying instead of stably down.

**Constraints kept by every option:** one D100 roll, the single R03 difficulty ladder, R06 degrees, the 352 occupation profiles and their grants, the 550 competency mappings, HP/Stamina formulas and the harm dice. Nothing beyond the three requested options is proposed.

## The three options

| # | Change | Text it would touch |
|---|---|---|
| 1 | **Evasion uses a fraction of DEX.** Tested at 1/2 DEX (rounded down, matching the approved "base skill = half governing attribute" convention) and 2/3 DEX as a sensitivity check. Close Combat defense (4.1) is unchanged, so in melee a defender uses whichever is higher. | 4.1 attack/defense; R01 example list (DEX reflex) |
| 2 | **Raise the attack baseline.** +10 or +20 to every attack target, for PCs and NPCs alike. As a rule this would mean the base of Close Combat, Firearms and Archery becomes half governing attribute +N (occupation grants still stack on top unchanged). | Section 1.1 / 2 base-skill rule (an exception for three skills); NPC archetype numbers |
| 3a | **Severity scaled to the target's max HP.** Single-hit loss below 20% of max HP minor, below 50% moderate, below 75% severe, 75%+ critical. Injury penalties follow the new severity. | 4.3 severity bands |
| 3b | **Softer lethality only.** Bands unchanged; at 0 HP a character becomes unstable only if the depleting hit was *critical* (or the GM has established an ongoing life-threatening condition). Severe depleting hits leave the character stably incapacitated. | 4.3 unstable trigger (the rules already allow a "campaign-agreed less lethal variant"; this would make it the default) |

### Modelling notes

- Defender always spends its reaction defending. Melee defense uses max(evasion, Close Combat); ranged attacks can only be evaded.
- Harm uses the attacker's actual degree from the opposed roll. PR 6 re-drew a degree instead, so baseline medians here are one round shorter (8 vs 9) for the Tomas duel; the dying rate is the same (85%).
- "Fights ending in death" assumes the loser's side has an untrained helper (Medicine 30) who starts stabilising the round after the drop. That helper loses an unstable patient 34.6% of the time.

## Results

### Hit chance per attack against an aware defender (DEX 55, Close Combat 35 in melee)

| Option | Ranged, attack 22 | Ranged, attack 30 | Melee, attack 25 | Melee, attack 35 | Melee, attack 70 |
|---|---:|---:|---:|---:|---:|
| Rules as written | 15% | 19% | 16% | 23% | 54% |
| 1: evasion 1/2 DEX | 19% | 26% | 20% | 29% | 61% |
| 1 alt: evasion 2/3 DEX | 17% | 24% | 19% | 28% | 61% |
| 2: attack +10 | 21% | 27% | 23% | 31% | 62% |
| 2: attack +20 | 29% | 35% | 31% | 40% | 71% |
| 1 + 2(+10) | 28% | 36% | 29% | 38% | 70% |

Key point: option 1 alone has a ceiling. A defended attack can never hit more often than the attacker's own success chance, so a Firearms 30 shooter tops out near 30% however weak the dodge. Option 1 removes most of the defense penalty; only option 2 raises the ceiling.

### A landed hit's chance of being severe or worse (attack 50, no armor)

| Option | D4 vs HP 10 | D6 vs HP 10 | D8 vs HP 10 | D4 vs HP 16 | D8 vs HP 16 |
|---|---:|---:|---:|---:|---:|
| Rules as written (also options 1, 2, 3b) | 42% | 62% | 71% | 44% | 72% |
| 3a: scaled to max HP | 18% | 45% | 59% | 0% | 21% |

### Duels: median rounds to knockdown and dying rate

"Dying" is the share of knockdowns that leave the loser unstable. "Death" is the share of all fights that end with a death, given the helper above.

| Option | Tomas (handgun) vs competent raider: rounds / dying / death | Priya (wrench) vs competent raider | Marcus (club, HP 8) vs competent raider | Elena unarmed vs novice raider | Expert vs expert (CC 70) |
|---|---|---|---|---|---|
| Rules as written | 8 / 85% / 30% | 10 / 82% / 29% | 8 / 80% / 28% | 20 / 65% / 23% | 3 / 89% / 31% |
| 1: evasion 1/2 DEX | 6 / 85% / 29% | 8 / 81% / 28% | 6 / 80% / 28% | 17 / 62% / 22% | 3 / 89% / 31% |
| 1 alt: 2/3 DEX | 7 / 85% / 29% | 8 / 82% / 28% | 7 / 80% / 28% | 18 / 64% / 22% | 3 / 89% / 31% |
| 2: attack +10 | 6 / 86% / 30% | 8 / 82% / 28% | 6 / 81% / 28% | 13 / 69% / 24% | 3 / 89% / 31% |
| 2: attack +20 | 5 / 86% / 30% | 6 / 81% / 28% | 5 / 80% / 28% | 10 / 70% / 24% | 3 / 89% / 31% |
| 3a: scaled severity | 8 / 66% / 23% | 10 / 45% / 16% | 8 / 73% / 25% | 20 / 29% / 10% | 3 / 80% / 28% |
| 3b: only critical → dying | 8 / 33% / 12% | 10 / 23% / 8% | 8 / 24% / 8% | 20 / 15% / 5% | 3 / 55% / 19% |
| **1 + 3b** | **6 / 31% / 11%** | **8 / 20% / 7%** | **6 / 22% / 7%** | **17 / 14% / 5%** | **3 / 55% / 19%** |
| 1 + 3a | 6 / 65% / 22% | 8 / 44% / 15% | 6 / 74% / 26% | 17 / 28% / 10% | 3 / 80% / 28% |
| 2(+20) + 3b | 5 / 34% / 12% | 6 / 21% / 7% | 5 / 23% / 8% | 10 / 17% / 6% | 3 / 55% / 19% |
| 1 + 2(+10) + 3b | 5 / 31% / 11% | 6 / 20% / 7% | 5 / 21% / 7% | 11 / 15% / 5% | 3 / 55% / 19% |
| 1 + 2(+10) + 3a + 3b | 5 / 7% / 3% | 6 / 1% / 0% | 5 / 37% / 13% | 11 / 1% / 0% | 3 / 40% / 14% |

Win rates barely move under any option (Tomas 41–46%, Priya 24–32%, Marcus 14–18%). A skill-gap duel (Close Combat 60 vs 30) stays 83–90% for the stronger fighter in every option, so none of them flattens skill.

## What each option does well and badly

- **Option 1 (1/2 DEX)** cuts about 2 rounds from pregen fights and makes the existing Close Combat defense matter (a raider with CC 35 now parries rather than dodging on DEX). It is consistent with the half-attribute convention and changes one line. It does nothing for lethality and cannot push hit rates above the attacker's own skill. 2/3 DEX is a weaker version of the same thing with no extra benefit in these runs.
- **Option 2** is the only lever that makes low-skill fights genuinely short (+20 gives 5–6 rounds). Costs: it breaks the approved "every skill base is half its attribute" rule for three skills, it helps weak NPCs most (a novice raider goes from 15 to 35, so Elena's win rate drops from 48% to 34%), and it does nothing for lethality.
- **Option 3a** fixes the "punch is severe" problem properly (42% → 18% at HP 10, 0% at HP 16) and rewards high-HP characters. But it makes fragile characters *more* likely to be dying (Marcus, HP 8, goes from 80% to 73% only, and up to 37% in the full combo because a 6-point hit is critical against HP 8). It also changes injury penalties for standing characters.
- **Option 3b** is the strongest single fix for the dying problem (85% → 23–33% for pregen duels), changes one trigger, and is already anticipated by the rules' "less lethal variant" clause. It leaves a punch as a severe *injury* (−20, 7 days) even though it no longer kills.

## Recommendation (approved 2026-11-25)

**Adopt 1 + 3b as the working default:** evasion at half DEX, and only a critical depleting hit makes a character unstable.

- Pregen-vs-raider fights drop from 8–10 to 6–8 median rounds, and dying knockdowns drop from 80–85% to 20–31%. Deaths per fight with an untrained helper fall from about 30% to about 7–11%.
- It changes two sentences (4.1 evasion target, 4.3 unstable trigger), stays inside the half-attribute convention, and touches no occupation, competency or skill-base rule.
- Expert fights stay fast (3 rounds) and still dangerous (55% dying), which keeps combat lethal when skilled people fight.

**Decisions this leaves open:**

1. If 6–8 rounds still feels slow at the table, add option 2 at +10 (1 + 2(+10) + 3b gives 5–6 rounds with the same dying rate). That needs a ruling on the three-skill base exception, so it is not in the default recommendation.
2. Whether a landed punch should still count as a severe injury for penalties and recovery. Option 3a fixes that, but it makes HP 8 characters more fragile; if wanted, revisit after Section 4 armor and harm calibration.
3. Findings #3 (dying clock length) and #4 (nonlethal strain) are not addressed here.
