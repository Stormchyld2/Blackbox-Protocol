# F12 — Combat

Fictional tabletop conflict reference. Canonical DESIGN-NOTES Section4.1–4.2, R01–R06, F06 and F11. No real-world weapon performance or tactical instruction. No new numeric rules.

## Encounter procedure
Establish fictional stakes, participants, awareness, positions, feasible actions and consequences. Use F11 six-second rounds, derived initiative, one main, movement and reaction; main may convert to movement. No banked actions or free surprise round. End when stakes resolve, disengagement occurs or meaningful opposition ends. Player agency remains; surrender and negotiation are legitimate outcomes.

## Resolution
One D100 using existing relevant skill, contextual attribute adjustment, highest applicable competency bonus, difficulty and distinct modifiers. Routine/impossible determined before rolling; possible uncertain target clamp1–99. Natural01 critical success, 100 critical failure. Exceptional <=floor(T/5), strong <=floor(T/2), standard <=T, otherwise failure. Aware eligible defender may declare reaction before dice: DEX evasion or applicable Close Combat defense. Compare category then signed margin; attacker must succeed and strictly win, tie or both fail no hit. No reaction available means ordinary check. No extra attacks from retreat or numeric multiple-opponent bonus. Abstract engaged/near/far/out-of-reach bands; equipment defines feasibility; complete obstruction prevents direct attack. Partial/substantial cover -10/-20 only when not already included in difficulty. No double-counted cover, armor or impairment.

## Grappling and restraint (streamlined)

At engaged range, a character may use their **main action** to grab an opponent instead of inflicting harm. Resolve a Close Combat D100 check against the defender's eligible declared reaction (Close Combat or DEX evasion), using the ordinary opposed-check rules. If the defender cannot react, use the ordinary Close Combat check. An attacker who succeeds and strictly wins establishes a **hold**; otherwise no hold is established. Contextual attribute adjustments and assistance use the existing resolution rules, not special grapple bonuses.

A **held** character cannot move away from the holder, but may still act and defend when fictionally feasible. The holder must keep contact and has a hand or equivalent occupied; either participant becoming unable to maintain the hold ends it. A holder can release the hold at any time. Do not add an automatic penalty to all of the held character's checks or a new condition track.

To **escape**, the held character spends a main action on Close Combat or an applicable Athletics check opposed by the holder's Close Combat. Use normal success-category and margin comparison; ties leave the hold in place. A holder may spend a later main action attempting to **restrain** the target, resolved as another ordinary opposed Close Combat check. On a win, the target is restrained: they cannot move freely or take actions requiring free limbs, but can attempt escape using the same opposed procedure when feasible. No automatic −20 escape penalty or blanket loss of reactions; the GM determines what actions remain physically feasible.

Applying rope or other restraints to a cooperative or incapacitated target is routine when circumstances permit. Escaping a secured physical restraint uses the existing skill and extended-task rules when uncertain; the GM sets difficulty and time from the fictional situation, without a grapple-specific progress pool. Striking a held character uses normal attack, defense, and D20 harm rules; a hold does not automatically cause damage. No new dice, free attacks, or mandatory repeated maintenance rolls.

## Harm and protection
On a successful harmful action, roll **one D20** for base harm: 1–5 = 1, 6–10 = 2, 11–15 = 3, 16–20 = 4. Add harm-profile adjustment **Low +0 / Moderate +1 / High +2 / Extreme +3** and degree bonus **standard +0 / strong +1 / exceptional +2 / critical +3**; subtract applicable armor **0–3 once**. HP loss = max(0, base harm + profile adjustment + degree bonus − armor). No D4/D6/D8/D10 dice, no minimum penetrating damage, extra harm die or armor roll. Environmental harm uses the same D20 conversion and profile adjustment without a degree bonus unless specified. F13 owns HP clamp, injury classification and care. Feasible genuinely noninjurious effects use stamina rather than HP; declaration alone cannot make harmful acts harmless. Zero stamina blocks strenuous activity, no automatic HP conversion. Advanced fictional functional objective may use existing -20 modifier and temporary condition instead of additional harm; no anatomical tables. Simulation tracks equipment state only on explicit wear events. F17 owns equipment assignments.

## Modes and records
Standard abstract positions and most consequential condition; Advanced distance and conditions; Simulation equipment and resource records, same checks. Encounter sheet: participant ID, initiative, awareness, position, action usage, declared intent, target, modifiers, roll/category, opposition, abstract harm, protection, pool change, condition reference, elapsed time. GM adjudicates incompatible simultaneous actions. No automatic morale roll; F14/F16 govern pressure and social consequences.

## Analytical balance
Exact independent D100 pairs, attacker wins strictly with successful category:
| Attack target | Defense target | Hit probability % |
|---:|---:|---:|
| 30 | 30 | 25.35 |
| 30 | 50 | 20.79 |
| 30 | 70 | 16.69 |
| 50 | 30 | 44.06 |
| 50 | 50 | 37.25 |
| 50 | 70 | 29.08 |
| 70 | 30 | 62.16 |
| 70 | 50 | 55.62 |
| 70 | 70 | 45.15 |

D20 standard-success harm reference (unarmored):
| Profile | D20 base | Adjustment | Mean loss | Range |
|---|---|---:|---:|---|
| Low | 1–4 | +0 | 2.5 | 1–4 |
| Moderate | 1–4 | +1 | 3.5 | 2–5 |
| High | 1–4 | +2 | 4.5 | 3–6 |
| Extreme | 1–4 | +3 | 5.5 | 4–7 |

The four **unarmored means** match the former abstract damage dice; the outcome distribution and armor-adjusted means do not necessarily match. Prior D4/D6/D8/D10 balance fixtures are superseded and require recalculation. This is a mathematical design conversion, **not** completed encounter or human playtesting.

The D20 conversion has now been exhaustively enumerated for HP 3/8/16/20, all four success-degree bonuses, four harm profiles, and armor ratings 0–3 (5,120 outcome/HP combinations). The separate three-attack opposed-check analysis remains a conditional mathematical model, not human tabletop playtesting. See `docs/audits/D20-COMBAT-BALANCE-AND-DICE-MIGRATION-2026-11-26.md` for exact probabilities and limitations. No equipment recalibration is implied; F36 still requires live tests of encounter pacing, defensive agency, low-HP vulnerability and nonviolent outcomes. F13 handles injury and mortality, F17 equipment, F14 pressure.
