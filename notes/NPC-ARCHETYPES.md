# NPC archetypes — 12 archetypes at three tiers, 36 baseline profiles

Status: **Approved by Jason 2026-11-25 (format and content direction); numbers are provisional until playtested. No human playtesting has taken place.** Owning book: GM Handbook (adversaries and NPCs), reused by Zero Day, Signal Lost and Dead Zone. Generated from the formulas below; if the formulas change, regenerate.

## How NPC profiles work
NPCs use the same rules as player characters: seven attributes, the Section 3.4 derived statistics, general skills, and Chapter 2 resolution. There is no separate NPC advancement or combat system. NPCs fight, take harm and recover with Section 4 as written.

- **Attributes** total 350 like a player character and do not change by tier.
- **Derived statistics** use the Section 3.4 formulas: Health = max(1, floor((STR+CON)/10)); Stamina = floor((CON+WIL)/2); Resilience = floor((WIL+CON)/2); Initiative = floor((DEX+PER)/2); Movement index = floor((STR+DEX+CON)/3) with walking distance max(1, floor(M/5)) m per round; Carry = STR × 0.5 kg; Recovery = floor((2×CON+WIL)/3).
- **Skills.** Each archetype has five general skills. Tier sets the **lead skill's final target**: Novice 30, Competent 50, Expert 70. The four supporting skills sit 15 below the lead (minimum 15). Targets are shown as final effective targets (half the governing attribute plus bonuses, including any competency modifier) for table speed. A GM who wants a full build can rebuild them with the normal procedure; the totals are guidance, not a rule that overrides creation.
- **Tiers** describe training and experience, not toughness: Novice (new or casual), Competent (established), Expert (recognized specialist). Higher tiers are not harder to hurt.
- **Harm and armor.** Harm uses Section 4.2 profiles. Armor is only what the gear supplies (0–3). Weapon harm depends on the kit the GM gives, per the equipment rules.
- **Disposition** is a starting default (nonhostile, variable or hostile). Any NPC can be befriended, bribed, scared or turned, using the social rules. Nothing here forces hostility.
- **Era adaptation.** Archetypes appear in every era with different roles and gear. A native NPC of the era has no deficit. A Blackbox Protocol-trained NPC placed in a later era uses the existing deficit table (Section 5.3): the deficits are listed per archetype below as SL/DZ points subtracted from that skill for unfamiliar applications. Only the largest relevant penalty applies to one check.
- **Record ID** NPC-nn-N, -C or -E (Novice, Competent, Expert).

## NPC-01 Civilian
**Attributes** STR 45, CON 50, DEX 50, INT 50, PER 50, WIL 55, PRE 50 (total 350). **Derived:** Health 9, Stamina 52, Resilience 52, Initiative 50, Movement index 48 (walk 9 m/round), Carry 22.5 kg, Recovery 51.  
**Disposition:** Nonhostile. **Role:** Ordinary resident: neighbour, shopkeeper, bystander, witness. Wants safety and normal life.  
**Harm and armor:** Armor 0; unarmed Low profile.

| Skill | Novice | Competent | Expert |
|---|---:|---:|---:|
| Persuasion (lead) | 30 | 50 | 70 |
| Search | 15 | 35 | 55 |
| Streetwise | 15 | 35 | 55 |
| Resource Management | 15 | 35 | 55 |
| Vehicle Operation | 15 | 35 | 55 |

**Era adaptation.** Signal Lost: Evacuee or neighbour organizing shared supplies. Dead Zone: Settler or farmhand. Blackbox Protocol-trained deficits in an unfamiliar SL/DZ application: Streetwise −10/−15, Resource Management −10/−15, Vehicle Operation −5/−10.

## NPC-02 Emergency volunteer
**Attributes** STR 50, CON 55, DEX 50, INT 45, PER 50, WIL 55, PRE 45 (total 350). **Derived:** Health 10, Stamina 55, Resilience 55, Initiative 50, Movement index 51 (walk 10 m/round), Carry 25 kg, Recovery 55.  
**Disposition:** Nonhostile ally. **Role:** Community responder or warden. Wants people kept safe.  
**Harm and armor:** Armor 0–1 (protective clothing); unarmed Low profile.

| Skill | Novice | Competent | Expert |
|---|---:|---:|---:|
| Communications (lead) | 30 | 50 | 70 |
| Endurance | 15 | 35 | 55 |
| Search | 15 | 35 | 55 |
| Resource Management | 15 | 35 | 55 |
| Athletics | 15 | 35 | 55 |

**Era adaptation.** Signal Lost: Disaster volunteer coordinator. Dead Zone: Community warden. Blackbox Protocol-trained deficits in an unfamiliar SL/DZ application: Communications −15/−20, Endurance −5/−10, Resource Management −10/−15.

## NPC-03 Security guard
**Attributes** STR 55, CON 55, DEX 50, INT 40, PER 55, WIL 50, PRE 45 (total 350). **Derived:** Health 11, Stamina 52, Resilience 52, Initiative 52, Movement index 53 (walk 10 m/round), Carry 27.5 kg, Recovery 53.  
**Disposition:** Variable. **Role:** Hired site guard. Wants to keep the job and avoid trouble; follows the employer.  
**Harm and armor:** Armor 0–1; light or moderate harm if armed (Moderate profile or High profile per kit).

| Skill | Novice | Competent | Expert |
|---|---:|---:|---:|
| Search (lead) | 30 | 50 | 70 |
| Surveillance | 15 | 35 | 55 |
| Close Combat | 15 | 35 | 55 |
| Persuasion | 15 | 35 | 55 |
| Communications | 15 | 35 | 55 |

**Era adaptation.** Signal Lost: Crisis site security. Dead Zone: Militia or settlement watch. Blackbox Protocol-trained deficits in an unfamiliar SL/DZ application: Surveillance −10/−15, Communications −15/−20.

## NPC-04 Law enforcement officer
**Attributes** STR 50, CON 50, DEX 50, INT 45, PER 55, WIL 50, PRE 50 (total 350). **Derived:** Health 10, Stamina 50, Resilience 50, Initiative 52, Movement index 50 (walk 10 m/round), Carry 25 kg, Recovery 50.  
**Disposition:** Variable. **Role:** Public officer with limited local authority. Wants order and procedure; authority depends on whether institutions still function.  
**Harm and armor:** Armor 1; harm by kit (Moderate–High profile).

| Skill | Novice | Competent | Expert |
|---|---:|---:|---:|
| Search (lead) | 30 | 50 | 70 |
| Persuasion | 15 | 35 | 55 |
| Surveillance | 15 | 35 | 55 |
| Vehicle Operation | 15 | 35 | 55 |
| Firearms | 15 | 35 | 55 |

**Era adaptation.** Signal Lost: Crisis sheriff or deputy. Dead Zone: Settlement marshal. Blackbox Protocol-trained deficits in an unfamiliar SL/DZ application: Surveillance −10/−15, Vehicle Operation −5/−10.

## NPC-05 Technician
**Attributes** STR 40, CON 45, DEX 55, INT 65, PER 55, WIL 45, PRE 45 (total 350). **Derived:** Health 8, Stamina 45, Resilience 45, Initiative 55, Movement index 46 (walk 9 m/round), Carry 20 kg, Recovery 45.  
**Disposition:** Nonhostile expert. **Role:** Radio, network or systems technician. Wants the system working; may blow the whistle on faults.  
**Harm and armor:** Armor 0; unarmed Low profile.

| Skill | Novice | Competent | Expert |
|---|---:|---:|---:|
| Electronics (lead) | 30 | 50 | 70 |
| Computing | 15 | 35 | 55 |
| Communications | 15 | 35 | 55 |
| Mechanics | 15 | 35 | 55 |
| Research | 15 | 35 | 55 |

**Era adaptation.** Signal Lost: Emergency communications technician. Dead Zone: Signal keeper. Blackbox Protocol-trained deficits in an unfamiliar SL/DZ application: Electronics −10/−15, Computing −15/−25, Communications −15/−20, Mechanics −5/−10, Research −15/−20.

## NPC-06 Tradesperson
**Attributes** STR 55, CON 55, DEX 60, INT 50, PER 45, WIL 45, PRE 40 (total 350). **Derived:** Health 11, Stamina 50, Resilience 50, Initiative 52, Movement index 56 (walk 11 m/round), Carry 27.5 kg, Recovery 51.  
**Disposition:** Nonhostile ally. **Role:** Mechanic, welder, electrician or builder. Wants fair work and materials.  
**Harm and armor:** Armor 0; improvised tool harm Moderate profile.

| Skill | Novice | Competent | Expert |
|---|---:|---:|---:|
| Mechanics (lead) | 30 | 50 | 70 |
| Construction | 15 | 35 | 55 |
| Crafting | 15 | 35 | 55 |
| Search | 15 | 35 | 55 |
| Resource Management | 15 | 35 | 55 |

**Era adaptation.** Signal Lost: Emergency fabricator. Dead Zone: Fabricator or smith. Blackbox Protocol-trained deficits in an unfamiliar SL/DZ application: Mechanics −5/−10, Construction −5/−10, Crafting −5/−10, Resource Management −10/−15.

## NPC-07 Medic
**Attributes** STR 40, CON 50, DEX 50, INT 65, PER 55, WIL 55, PRE 35 (total 350). **Derived:** Health 9, Stamina 52, Resilience 52, Initiative 52, Movement index 46 (walk 9 m/round), Carry 20 kg, Recovery 51.  
**Disposition:** Nonhostile ally. **Role:** Clinician or paramedic. Wants patients safe; needs supplies.  
**Harm and armor:** Armor 0; unarmed Low profile.

| Skill | Novice | Competent | Expert |
|---|---:|---:|---:|
| Medicine (lead) | 30 | 50 | 70 |
| Science | 15 | 35 | 55 |
| Search | 15 | 35 | 55 |
| Persuasion | 15 | 35 | 55 |
| Endurance | 15 | 35 | 55 |

**Era adaptation.** Signal Lost: Triage medic. Dead Zone: Settlement physician. Blackbox Protocol-trained deficits in an unfamiliar SL/DZ application: Medicine −10/−20, Science −10/−15, Endurance −5/−10.

## NPC-08 Community leader
**Attributes** STR 40, CON 50, DEX 40, INT 50, PER 50, WIL 60, PRE 60 (total 350). **Derived:** Health 9, Stamina 55, Resilience 55, Initiative 45, Movement index 43 (walk 8 m/round), Carry 20 kg, Recovery 53.  
**Disposition:** Variable. **Role:** Official, manager or elder. Wants a stable community; bargains hard.  
**Harm and armor:** Armor 0; unarmed Low profile.

| Skill | Novice | Competent | Expert |
|---|---:|---:|---:|
| Leadership (lead) | 30 | 50 | 70 |
| Persuasion | 15 | 35 | 55 |
| Resource Management | 15 | 35 | 55 |
| Research | 15 | 35 | 55 |
| Streetwise | 15 | 35 | 55 |

**Era adaptation.** Signal Lost: Crisis coordinator. Dead Zone: Settlement leader. Blackbox Protocol-trained deficits in an unfamiliar SL/DZ application: Leadership −5/−10, Resource Management −10/−15, Research −15/−20, Streetwise −10/−15.

## NPC-09 Informant or fixer
**Attributes** STR 40, CON 45, DEX 50, INT 50, PER 60, WIL 45, PRE 60 (total 350). **Derived:** Health 8, Stamina 45, Resilience 45, Initiative 55, Movement index 45 (walk 9 m/round), Carry 20 kg, Recovery 45.  
**Disposition:** Variable. **Role:** Broker of information, favors and goods. Wants advantage and protection.  
**Harm and armor:** Armor 0; unarmed Low profile.

| Skill | Novice | Competent | Expert |
|---|---:|---:|---:|
| Streetwise (lead) | 30 | 50 | 70 |
| Deception | 15 | 35 | 55 |
| Persuasion | 15 | 35 | 55 |
| Stealth | 15 | 35 | 55 |
| Surveillance | 15 | 35 | 55 |

**Era adaptation.** Signal Lost: Black market trader or broker. Dead Zone: Trade broker. Blackbox Protocol-trained deficits in an unfamiliar SL/DZ application: Streetwise −10/−15, Surveillance −10/−15.

## NPC-10 Scavenger
**Attributes** STR 55, CON 55, DEX 55, INT 40, PER 60, WIL 50, PRE 35 (total 350). **Derived:** Health 11, Stamina 52, Resilience 52, Initiative 57, Movement index 55 (walk 11 m/round), Carry 27.5 kg, Recovery 53.  
**Disposition:** Variable. **Role:** Salvager or explorer. Wants useful goods; wary of strangers.  
**Harm and armor:** Armor 0–1; improvised weapon Moderate profile.

| Skill | Novice | Competent | Expert |
|---|---:|---:|---:|
| Scavenging (lead) | 30 | 50 | 70 |
| Survival | 15 | 35 | 55 |
| Search | 15 | 35 | 55 |
| Navigation | 15 | 35 | 55 |
| Stealth | 15 | 35 | 55 |

**Era adaptation.** Signal Lost: Looter or salvage crew member. Dead Zone: Salvager (native specialist). Blackbox Protocol-trained deficits in an unfamiliar SL/DZ application: Scavenging −5/−10, Survival −10/−15, Navigation −10/−15.

## NPC-11 Raider
**Attributes** STR 60, CON 55, DEX 55, INT 35, PER 50, WIL 50, PRE 45 (total 350). **Derived:** Health 11, Stamina 52, Resilience 52, Initiative 52, Movement index 56 (walk 11 m/round), Carry 30 kg, Recovery 53.  
**Disposition:** Hostile or variable. **Role:** Armed opportunist. Wants goods and leverage; can be bought off, bluffed or avoided.  
**Harm and armor:** Armor 1; harm by kit (Moderate–High profile).

| Skill | Novice | Competent | Expert |
|---|---:|---:|---:|
| Intimidation (lead) | 30 | 50 | 70 |
| Survival | 15 | 35 | 55 |
| Search | 15 | 35 | 55 |
| Close Combat | 15 | 35 | 55 |
| Stealth | 15 | 35 | 55 |

**Era adaptation.** Signal Lost: Armed opportunist or gang member. Dead Zone: Raider band member. Blackbox Protocol-trained deficits in an unfamiliar SL/DZ application: Survival −10/−15.

## NPC-12 Researcher
**Attributes** STR 35, CON 40, DEX 45, INT 70, PER 55, WIL 55, PRE 50 (total 350). **Derived:** Health 7, Stamina 47, Resilience 47, Initiative 50, Movement index 40 (walk 8 m/round), Carry 17.5 kg, Recovery 45.  
**Disposition:** Nonhostile expert. **Role:** Academic or analyst. Wants evidence and data; reluctant in danger.  
**Harm and armor:** Armor 0; unarmed Low profile.

| Skill | Novice | Competent | Expert |
|---|---:|---:|---:|
| Research (lead) | 30 | 50 | 70 |
| Science | 15 | 35 | 55 |
| Computing | 15 | 35 | 55 |
| Search | 15 | 35 | 55 |
| Persuasion | 15 | 35 | 55 |

**Era adaptation.** Signal Lost: Knowledge preservation specialist. Dead Zone: Knowledge keeper. Blackbox Protocol-trained deficits in an unfamiliar SL/DZ application: Research −15/−20, Science −10/−15, Computing −15/−25.
