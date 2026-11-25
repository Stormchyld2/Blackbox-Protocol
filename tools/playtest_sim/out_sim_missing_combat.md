# Draft combat subsystems — simulation output

Untrained helper (Medicine 30) starting the next round loses an unstable patient 34.6% of the time.

## 1. Grappling

Grab: Close Combat vs defender's best of Close Combat or floor(DEX/2). Held: no movement, no evasion (Close Combat defense only), held penalty on tasks other than escape. Escape: main action, best of Close Combat or Athletics vs holder's Close Combat; tie keeps the hold (status quo).

| Situation | Chance per attempt |
|---|---:|
| Raider (CC 35) grabs Dana (CC 22, DEX 45) | 31% |
| Raider (CC 35) grabs Elena (CC 25, DEX 50) | 32% |
| Raider (CC 35) grabs Tomas (CC 30, DEX 60) | 30% |
| Dana escapes raider's hold (best 22 vs 35) | 18% |
| Dana escapes when restrained (−20) | 2% |
| Elena escapes raider's hold (best 50 vs 35) | 43% |
| Elena escapes when restrained (−20) | 24% |
| Tomas escapes raider's hold (best 35 vs 35) | 29% |
| Tomas escapes when restrained (−20) | 11% |
| Expert holder: 30 vs 60 | 19% |

### Unarmed fight, raider (CC 35, HP 11, armor 1) against a pregen, both using D4

In 'grapple' the raider grabs first, then strikes the held target, who spends each turn trying to escape. Held penalty applies to the held character's Close Combat defense.

| Pregen | Raider tactic | Held penalty | Raider wins | Median rounds | Knockdowns dying |
|---|---|---:|---:|---:|---:|
| Dana | strike | 0 | 94% | 9 | 2% |
| Dana | grapple | 0 | 95% | 17 | 2% |
| Dana | grapple | −10 | 96% | 17 | 1% |
| Dana | grapple | −20 | 96% | 16 | 2% |
| Tomas | strike | 0 | 81% | 10 | 1% |
| Tomas | grapple | 0 | 72% | 23 | 1% |
| Tomas | grapple | −10 | 73% | 22 | 1% |
| Tomas | grapple | −20 | 74% | 21 | 1% |

### Capture: rounds until the raider has the pregen restrained (grab, then a second win while holding)

Restrained: no reactions; escape at −20. The pregen tries to escape every turn. 'Held, no reaction' variant: the held character cannot react to the holder at all, so the restrain check is an ordinary Close Combat check.

| Pregen | Held may react with Close Combat | Median rounds to restrained | 90th pct | Restrained within 5 rounds |
|---|---|---:|---:|---:|
| Dana | yes | 7 | 16 | 41% |
| Dana | no | 6 | 15 | 43% |
| Elena | yes | 10 | 30 | 25% |
| Elena | no | 10 | 28 | 28% |
| Tomas | yes | 8 | 22 | 31% |
| Tomas | no | 8 | 20 | 35% |

## 2. Chases

Bands engaged 0 / near 1 / far 2 / out of reach 3. Each leg one opposed check (Athletics on foot). Quarry wins: one band further; pursuer wins: one band closer; tie or both fail: no change. Reaching engaged = caught; reaching out of reach = escaped. Speed modifier: the side with the higher movement index gets the listed modifier.

| Chase | Start | Speed rule | Stamina 5/leg from leg 4 | Quarry escapes | Median legs | 90th pct legs |
|---|---|---|---|---:|---:|---:|
| Dana (Ath 22, M 46) flees raider (Ath 35, M 55) | near | none | no | 17% | 2 | 8 |
| Dana (Ath 22, M 46) flees raider (Ath 35, M 55) | near | step10 | no | 16% | 2 | 8 |
| Dana (Ath 22, M 46) flees raider (Ath 35, M 55) | near | step10 | yes | 15% | 2 | 8 |
| Dana (Ath 22, M 46) flees raider (Ath 35, M 55) | far | step10 | no | 45% | 3 | 9 |
| Elena (Ath 50, M 56) flees raider | near | none | no | 53% | 2 | 6 |
| Elena (Ath 50, M 56) flees raider | near | step10 | no | 52% | 2 | 6 |
| Elena (Ath 50, M 56) flees raider | near | step10 | yes | 52% | 2 | 6 |
| Elena (Ath 50, M 56) flees raider | far | step10 | no | 83% | 2 | 6 |
| Equal: Ath 35 vs 35, M 50 vs 50 | near | none | no | 33% | 3 | 7 |
| Equal: Ath 35 vs 35, M 50 vs 50 | near | step10 | no | 34% | 3 | 7 |
| Equal: Ath 35 vs 35, M 50 vs 50 | near | step10 | yes | 33% | 3 | 7 |
| Equal: Ath 35 vs 35, M 50 vs 50 | far | step10 | no | 67% | 3 | 7 |
| Raider flees Priya (Ath 40, M 56) | near | none | no | 27% | 2 | 7 |
| Raider flees Priya (Ath 40, M 56) | near | step10 | no | 27% | 2 | 7 |
| Raider flees Priya (Ath 40, M 56) | near | step10 | yes | 26% | 2 | 7 |
| Raider flees Priya (Ath 40, M 56) | far | step10 | no | 59% | 3 | 7 |

## 3–4. Reloading and rapid fire

Shooter: Tomas, Firearms 30, D8, HP 10, DEX 60, against the competent raider (melee CC 35, D6, armor 1) who closes and fights in melee. Ranged attacks can only be evaded (floor(DEX/2)).

| Rule | Tomas wins | Median rounds | Loads fired (median / 90th pct) | Reloads per fight (mean) |
|---|---:|---:|---:|---:|
| Standard: no reload tracking | 41% | 6 | 6 / 12 | 0.0 |
| Advanced: capacity 6, reload = movement | 42% | 7 | 7 / 12 | 0.6 |
| Advanced: capacity 6, reload = main action | 38% | 6 | 6 / 11 | 0.6 |
| Advanced: capacity 3, reload = main action | 32% | 7 | 6 / 10 | 1.5 |
| Advanced: capacity 1 (single-shot), reload = main action | 18% | 8 | 4 / 8 | 3.9 |
| Rapid fire +10 for 3 loads, capacity 12, reload = movement | 56% | 6 | 18 / 33 | 1.0 |
| Rapid fire +10 for 3 loads, capacity 12, reload = main | 48% | 6 | 15 / 30 | 0.9 |
| Rapid fire +20 for 3 loads, capacity 12, reload = movement | 67% | 5 | 15 / 27 | 0.8 |

## 5. Falling

Environmental harm, no armor. Aware characters may make an Athletics check (target 35 here): success moves the fall one step down the table, critical failure one step up. 'Dying' = 0 HP from a critical (7+) loss, or any 0 HP on the top step (declared life-threatening). Death assumes the untrained helper.

| Height | Athletics | Mean HP loss | Severe or worse | HP 8 down | HP 12 down | HP 16 down | HP 12 dying | HP 12 death |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| 2–4 m | none | 3.5 | 50% | 0% | 0% | 0% | 0% | 0% |
| 2–4 m | 35 | 2.3 | 33% | 0% | 0% | 0% | 0% | 0% |
| 4–8 m | none | 4.5 | 62% | 12% | 0% | 0% | 0% | 0% |
| 4–8 m | 35 | 4.1 | 58% | 8% | 0% | 0% | 0% | 0% |
| 8–12 m | none | 5.5 | 70% | 30% | 0% | 0% | 0% | 0% |
| 8–12 m | 35 | 5.2 | 68% | 24% | 0% | 0% | 0% | 0% |
| 12–20 m | none | 7.5 | 90% | 50% | 10% | 0% | 10% | 4% |
| 12–20 m | 35 | 6.9 | 83% | 43% | 6% | 0% | 6% | 2% |
| over 20 m | none | 8.5 | 100% | 60% | 21% | 0% | 21% | 7% |
| over 20 m | 35 | 8.1 | 96% | 56% | 16% | 0% | 16% | 6% |

Option B: over 20 m always reduces the character to 0 HP and is declared life-threatening (dying, not dead).

- Over 20 m, Athletics none: HP 12 dying 100%, death with untrained helper 35%.
- Over 20 m, Athletics 35: HP 12 dying 68%, death with untrained helper 24%.

## 6. Poison and toxins

Potency = hazard die. Each interval: CON check (R01). Strong or better: no harm this interval; standard: half (rounded down); failure: full; critical failure: full and one extra interval. Treatment: a Medicine check (one medical-supply use) after the first interval; success ends remaining intervals. 'Dying' = 0 HP from a critical (7+) interval, or any 0 HP when the GM declares the toxin life-threatening (extreme by default in this run).

| Potency | Treatment | Mean HP loss | Severe or worse total | HP 8 down | HP 12 down | HP 12 dying | HP 12 death |
|---|---|---:|---:|---:|---:|---:|---:|
| low D4, 1 interval | none | 1.5 | 13% | 0% | 0% | 0% | 0% |
| low D4, 1 interval | Medicine 30 | 1.5 | 13% | 0% | 0% | 0% | 0% |
| low D4, 1 interval | Medicine 60 | 1.5 | 13% | 0% | 0% | 0% | 0% |
| moderate D6, 2 intervals | none | 4.3 | 57% | 14% | 1% | 0% | 0% |
| moderate D6, 2 intervals | Medicine 30 | 3.6 | 47% | 9% | 1% | 0% | 0% |
| moderate D6, 2 intervals | Medicine 60 | 3.0 | 37% | 6% | 0% | 0% | 0% |
| high D8, 3 intervals | none | 8.4 | 85% | 55% | 24% | 10% | 4% |
| high D8, 3 intervals | Medicine 30 | 6.7 | 70% | 40% | 17% | 8% | 3% |
| high D8, 3 intervals | Medicine 60 | 5.0 | 54% | 26% | 10% | 4% | 2% |
| extreme D10, 3 intervals | none | 10.3 | 89% | 67% | 39% | 39% | 14% |
| extreme D10, 3 intervals | Medicine 30 | 8.2 | 75% | 51% | 27% | 27% | 9% |
| extreme D10, 3 intervals | Medicine 60 | 6.1 | 61% | 36% | 16% | 16% | 5% |

### Alternative: halving rule vs plain pass/fail (success = no harm), moderate D6 × 2, CON 50, no treatment

Halving (4.4-style): mean 4.29 HP; plain pass/fail: mean 3.49 HP.
