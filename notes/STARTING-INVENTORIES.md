# Starting inventory packages

Status: **Proposed (requested by Jason 2026-11-25); not an approved rule until Jason approves.** Reusable inventory packages that give every one of the 352 occupations a starting kit **without per-occupation invention**: each kit is assembled from existing data (the occupation's family and its first two ordered skills in OCCUPATION-INDEX.json) and item IDs from EQUIPMENT-CATALOGUE.md. Machine-readable copy: STARTING-INVENTORIES.json.

## Rules this implements (DESIGN-NOTES 2.6, unchanged)
- Each primary profile has a **modest personal kit**: ordinary clothing, personal effects (not catalogued, no stats), basic portable occupational tools or substitutes, **one plausible contact** and an **access record** for employer or community facilities if applicable. Secondary backgrounds grant no duplicate kits.
- The GM sets a campaign **resource tier**: constrained, ordinary or well-supported. **Ordinary** = the kit below. **Constrained** = an incomplete kit: the player leaves out two items of the GM's choice. **Well-supported** = the kit plus the occupation's *well-supported extras* (listed in the JSON and per family below) or authorized shared access, never unrestricted ownership.
- **No starting cash** comes from the occupation. Funds come from character history (A2). Expensive assets (vehicles, buildings) need explicit campaign approval, shared ownership or debt.
- **No weapons** are issued by occupation. Weapons and armor are only available where the occupation's authority actually gives access (for example law enforcement, military or security), validated by the GM, and are recorded separately.
- A vehicle is not a kit item. Occupations with Vehicle Operation may have access to a shared or personal vehicle only by GM approval and A2 funds.
- **Setting handling.** Items that are Unavailable in the occupation's own setting (catalogue availability) are dropped and listed as "no equivalent" with GM substitution allowed. Rare items are flagged ‡ and may be shared or borrowed.
- Masses and prices are not in the catalogue yet (TBR), so carry-load checks (F17) cannot be run until the research pass fills them.
- Flexible status-only profiles (six, no ordered skills) receive only the setting base and family package.

## Package structure
**Setting base (everyone):** Blackbox Protocol: smartphone, flashlight, water bottle. Signal Lost: flashlight, water bottle, hand-crank radio. Dead Zone: water bottle, oil lamp, wool blanket.

**Family packages** (core items first; well-supported extras after the slash):

- **Investigator:** Digital camera, Voice recorder, Notebook and printed forms, Magnifier and UV light / extras: Evidence collection kit, Binoculars
- **Law Enforcement:** Notebook and printed forms, GMRS handheld radio pair, Hi-visibility vest / extras: Evidence collection kit, Protective vest
- **Military:** Backpack 40 L, Compass, Paper map set (regional), Heavy work clothing / extras: Rigid helmet, Protective vest
- **Medical:** First aid kit, Stethoscope and thermometer, Hygiene and sanitation kit, Common medications (assorted) / extras: Trauma kit, Pulse oximeter
- **Scientist:** Notebook and printed forms, Digital camera, Laptop, Safety glasses / extras: Multimeter, External storage drive
- **Technology Specialist:** Laptop, Multimeter, Multitool, External storage drive / extras: Soldering iron, Antenna and cable kit
- **Engineer:** Tape measure and level, Laptop, Hard hat, Safety glasses / extras: Multimeter, Paper map set (regional)
- **Tradesperson:** Multitool, Work gloves, Duct tape and zip ties, Claw hammer / extras: Toolbox (full set), Cordless drill
- **Outdoorsman:** Backpack 40 L, Compass, Paper map set (regional), Fire starter kit and lighter, Rain jacket, Hiking boots / extras: Binoculars, Tent, two person
- **Agriculturalist:** Hand tool set (garden), Work gloves, Seed packet set, Hand cart or wheelbarrow / extras: Fencing kit, Irrigation hose and fittings
- **Emergency Responder:** First aid kit, GMRS handheld radio pair, Hi-visibility vest, Hard hat / extras: Trauma kit, Respirator
- **Criminal:** Multitool, Duct tape and zip ties, Work gloves, Lock pick set / extras: Binoculars
- **Academic & Researcher:** Laptop, Notebook and printed forms, External storage drive / extras: Digital camera
- **Civilian:** Multitool, Notebook and printed forms, First aid kit / extras: Bicycle

**Lead-skill packs** (added for the occupation's first two ordered skills):

- Electronics: Multimeter
- Computing: Laptop
- Communications: GMRS handheld radio pair
- Mechanics: Pliers set, Wrench and socket set
- Construction: Claw hammer, Tape measure and level
- Crafting: Hand saw, Utility knife
- Medicine: First aid kit
- Science: Safety glasses, Notebook and printed forms
- Research: Notebook and printed forms
- Search: LED flashlight
- Surveillance: Binoculars
- Forensics: Evidence collection kit
- Navigation: Compass, Paper map set (regional)
- Survival: Fire starter kit and lighter, Water filter (pump or squeeze)
- Scavenging: Crowbar, Work gloves
- Agriculture: Hand tool set (garden)
- Animal Husbandry: Rope 15 m
- Resource Management: Notebook and printed forms
- Athletics: Hiking boots
- Endurance: Hiking boots

Skills not listed (combat, social, vehicle and similar) add no items.

## Per-occupation kits (352)
Columns: occupation, family, lead skills, kit as item IDs (see the catalogue for names). ‡ = rare in that setting. Items no longer available in the setting are listed in the JSON under unavailableInEra.

| ID | Occupation | Setting | Family | Lead skills | Kit (EQ IDs) |
|---|---|---|---|---|---|
| O-001 | Private Investigator | Blackbox Protocol | Investigator | Persuasion, Search | EQ-005, EQ-023, EQ-072, EQ-133, EQ-134, EQ-138, EQ-137 |
| O-002 | Criminal Detective | Blackbox Protocol | Investigator | Forensics, Persuasion | EQ-005, EQ-023, EQ-072, EQ-133, EQ-134, EQ-138, EQ-137, EQ-135 |
| O-003 | Intelligence Analyst | Blackbox Protocol | Investigator | Research, Computing | EQ-005, EQ-023, EQ-072, EQ-133, EQ-134, EQ-138, EQ-137, EQ-130 |
| O-004 | Forensic Investigator | Blackbox Protocol | Investigator | Forensics, Search | EQ-005, EQ-023, EQ-072, EQ-133, EQ-134, EQ-138, EQ-137, EQ-135 |
| O-005 | Investigative Journalist | Blackbox Protocol | Investigator | Crafting, Persuasion | EQ-005, EQ-023, EQ-072, EQ-133, EQ-134, EQ-138, EQ-137, EQ-030, EQ-050 |
| O-006 | Fraud Investigator | Blackbox Protocol | Investigator | Forensics, Resource Management | EQ-005, EQ-023, EQ-072, EQ-133, EQ-134, EQ-138, EQ-137, EQ-135 |
| O-007 | Corporate Investigator | Blackbox Protocol | Investigator | Persuasion, Research | EQ-005, EQ-023, EQ-072, EQ-133, EQ-134, EQ-138, EQ-137 |
| O-008 | Crisis Investigator | Signal Lost | Investigator | Persuasion, Search | EQ-023, EQ-072, EQ-007, EQ-133, EQ-134, EQ-138, EQ-137 |
| O-009 | Intelligence Coordinator | Signal Lost | Investigator | Research, Communications | EQ-023, EQ-072, EQ-007, EQ-133, EQ-134, EQ-138, EQ-137, EQ-001 |
| O-010 | Independent Correspondent | Signal Lost | Investigator | Crafting, Persuasion | EQ-023, EQ-072, EQ-007, EQ-133, EQ-134, EQ-138, EQ-137, EQ-030, EQ-050 |
| O-011 | Supply Investigator | Signal Lost | Investigator | Resource Management, Search | EQ-023, EQ-072, EQ-007, EQ-133, EQ-134, EQ-138, EQ-137 |
| O-012 | Missing Persons Specialist | Signal Lost | Investigator | Forensics, Search | EQ-023, EQ-072, EQ-007, EQ-133, EQ-134, EQ-138, EQ-137, EQ-135 |
| O-013 | Settlement Investigator | Dead Zone | Investigator | Persuasion, Search | EQ-072, EQ-026, EQ-087, EQ-133‡, EQ-134‡, EQ-138, EQ-137‡, EQ-023 |
| O-014 | Independent Investigator | Dead Zone | Investigator | Persuasion, Search | EQ-072, EQ-026, EQ-087, EQ-133‡, EQ-134‡, EQ-138, EQ-137‡, EQ-023 |
| O-015 | Intelligence Gatherer | Dead Zone | Investigator | Computing, Search | EQ-072, EQ-026, EQ-087, EQ-133‡, EQ-134‡, EQ-138, EQ-137‡, EQ-130‡, EQ-023 |
| O-016 | Historical Investigator | Dead Zone | Investigator | Research, Forensics | EQ-072, EQ-026, EQ-087, EQ-133‡, EQ-134‡, EQ-138, EQ-137‡, EQ-135‡ |
| O-017 | Community Chronicler | Dead Zone | Investigator | Crafting, Persuasion | EQ-072, EQ-026, EQ-087, EQ-133‡, EQ-134‡, EQ-138, EQ-137‡, EQ-030, EQ-050 |
| O-018 | Police Officer | Blackbox Protocol | Law Enforcement | Search, Persuasion | EQ-005, EQ-023, EQ-072, EQ-138, EQ-001, EQ-091 |
| O-019 | Sheriff's Deputy | Blackbox Protocol | Law Enforcement | Search, Persuasion | EQ-005, EQ-023, EQ-072, EQ-138, EQ-001, EQ-091 |
| O-020 | Federal Agent | Blackbox Protocol | Law Enforcement | Forensics, Research | EQ-005, EQ-023, EQ-072, EQ-138, EQ-001, EQ-091, EQ-135 |
| O-021 | Tactical Police Officer | Blackbox Protocol | Law Enforcement | Endurance, Communications | EQ-005, EQ-023, EQ-072, EQ-138, EQ-001, EQ-091, EQ-085 |
| O-022 | Corrections Officer | Blackbox Protocol | Law Enforcement | Persuasion, Search | EQ-005, EQ-023, EQ-072, EQ-138, EQ-001, EQ-091 |
| O-023 | Conservation Officer | Blackbox Protocol | Law Enforcement | Navigation, Search | EQ-005, EQ-023, EQ-072, EQ-138, EQ-001, EQ-091, EQ-079, EQ-080 |
| O-024 | Probation Officer | Blackbox Protocol | Law Enforcement | Persuasion, Research | EQ-005, EQ-023, EQ-072, EQ-138, EQ-001, EQ-091 |
| O-025 | Crisis Sheriff | Signal Lost | Law Enforcement | Leadership, Persuasion | EQ-023, EQ-072, EQ-007, EQ-138, EQ-001, EQ-091 |
| O-026 | Emergency Peace Officer | Signal Lost | Law Enforcement | Persuasion, Search | EQ-023, EQ-072, EQ-007, EQ-138, EQ-001, EQ-091 |
| O-027 | Protective Services Officer | Signal Lost | Law Enforcement | Search, Leadership | EQ-023, EQ-072, EQ-007, EQ-138, EQ-001, EQ-091 |
| O-028 | Community Patrol Officer | Signal Lost | Law Enforcement | Search, Persuasion | EQ-023, EQ-072, EQ-007, EQ-138, EQ-001, EQ-091 |
| O-029 | Detention Officer | Signal Lost | Law Enforcement | Persuasion, Search | EQ-023, EQ-072, EQ-007, EQ-138, EQ-001, EQ-091 |
| O-030 | Settlement Marshal | Dead Zone | Law Enforcement | Persuasion, Leadership | EQ-072, EQ-026, EQ-087, EQ-138, EQ-001‡, EQ-091 |
| O-031 | Community Constable | Dead Zone | Law Enforcement | Persuasion, Search | EQ-072, EQ-026, EQ-087, EQ-138, EQ-001‡, EQ-091, EQ-023 |
| O-032 | Regional Peacekeeper | Dead Zone | Law Enforcement | Persuasion, Leadership | EQ-072, EQ-026, EQ-087, EQ-138, EQ-001‡, EQ-091 |
| O-033 | Settlement Warden | Dead Zone | Law Enforcement | Persuasion, Leadership | EQ-072, EQ-026, EQ-087, EQ-138, EQ-001‡, EQ-091 |
| O-034 | Frontier Law Officer | Dead Zone | Law Enforcement | Search, Navigation | EQ-072, EQ-026, EQ-087, EQ-138, EQ-001‡, EQ-091, EQ-023, EQ-079, EQ-080 |
| O-035 | Infantry Service Member | Blackbox Protocol | Military | Endurance, Athletics | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-090, EQ-085 |
| O-036 | Military Officer | Blackbox Protocol | Military | Leadership, Resource Management | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-090, EQ-138 |
| O-037 | Special Operations Veteran | Blackbox Protocol | Military | Endurance, Athletics | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-090, EQ-085 |
| O-038 | Military Intelligence Specialist | Blackbox Protocol | Military | Research, Search | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-090, EQ-138 |
| O-039 | Military Engineer | Blackbox Protocol | Military | Construction, Science | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-090, EQ-029, EQ-044, EQ-093, EQ-138 |
| O-040 | Military Communications Specialist | Blackbox Protocol | Military | Communications, Electronics | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-090, EQ-001, EQ-038 |
| O-041 | Military Logistics Specialist | Blackbox Protocol | Military | Resource Management, Leadership | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-090, EQ-138 |
| O-042 | Military Medic | Blackbox Protocol | Military | Medicine, Endurance | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-090, EQ-055, EQ-085 |
| O-043 | Military Aviation Specialist | Blackbox Protocol | Military | Communications, Mechanics | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-090, EQ-001, EQ-035, EQ-036 |
| O-044 | National Guard Service Member | Signal Lost | Military | Endurance, Communications | EQ-023, EQ-072, EQ-007, EQ-067, EQ-079, EQ-080, EQ-090, EQ-085, EQ-001 |
| O-045 | Military Crisis Coordinator | Signal Lost | Military | Leadership, Communications | EQ-023, EQ-072, EQ-007, EQ-067, EQ-079, EQ-080, EQ-090, EQ-001 |
| O-046 | Independent Security Contractor | Signal Lost | Military | Resource Management, Communications | EQ-023, EQ-072, EQ-007, EQ-067, EQ-079, EQ-080, EQ-090, EQ-138, EQ-001 |
| O-047 | Military Support Specialist | Signal Lost | Military | Resource Management, Mechanics | EQ-023, EQ-072, EQ-007, EQ-067, EQ-079, EQ-080, EQ-090, EQ-138, EQ-035, EQ-036 |
| O-048 | Civil Defense Coordinator | Signal Lost | Military | Leadership, Communications | EQ-023, EQ-072, EQ-007, EQ-067, EQ-079, EQ-080, EQ-090, EQ-001 |
| O-049 | Community Defender | Dead Zone | Military | Endurance, Communications | EQ-072, EQ-026, EQ-087, EQ-067, EQ-079, EQ-080, EQ-090, EQ-085, EQ-001‡ |
| O-050 | Militia Officer | Dead Zone | Military | Leadership, Persuasion | EQ-072, EQ-026, EQ-087, EQ-067, EQ-079, EQ-080, EQ-090 |
| O-051 | Frontier Scout | Dead Zone | Military | Navigation, Survival | EQ-072, EQ-026, EQ-087, EQ-067, EQ-079, EQ-080, EQ-090, EQ-083, EQ-071 |
| O-052 | Independent Mercenary | Dead Zone | Military | Resource Management, Persuasion | EQ-072, EQ-026, EQ-087, EQ-067, EQ-079, EQ-080, EQ-090, EQ-138 |
| O-053 | Defense Logistics Specialist | Dead Zone | Military | Resource Management, Leadership | EQ-072, EQ-026, EQ-087, EQ-067, EQ-079, EQ-080, EQ-090, EQ-138 |
| O-054 | Veteran Instructor | Dead Zone | Military | Leadership, Persuasion | EQ-072, EQ-026, EQ-087, EQ-067, EQ-079, EQ-080, EQ-090 |
| O-055 | Physician | Blackbox Protocol | Medical | Medicine, Science | EQ-005, EQ-023, EQ-072, EQ-055, EQ-060, EQ-065, EQ-064, EQ-093, EQ-138 |
| O-056 | Surgeon | Blackbox Protocol | Medical | Medicine, Science | EQ-005, EQ-023, EQ-072, EQ-055, EQ-060, EQ-065, EQ-064, EQ-093, EQ-138 |
| O-057 | Nurse | Blackbox Protocol | Medical | Medicine, Persuasion | EQ-005, EQ-023, EQ-072, EQ-055, EQ-060, EQ-065, EQ-064 |
| O-058 | Paramedic | Blackbox Protocol | Medical | Medicine, Endurance | EQ-005, EQ-023, EQ-072, EQ-055, EQ-060, EQ-065, EQ-064, EQ-085 |
| O-059 | Pharmacist | Blackbox Protocol | Medical | Medicine, Science | EQ-005, EQ-023, EQ-072, EQ-055, EQ-060, EQ-065, EQ-064, EQ-093, EQ-138 |
| O-060 | Psychologist | Blackbox Protocol | Medical | Persuasion, Research | EQ-005, EQ-023, EQ-072, EQ-055, EQ-060, EQ-065, EQ-064, EQ-138 |
| O-061 | Psychiatrist | Blackbox Protocol | Medical | Medicine, Science | EQ-005, EQ-023, EQ-072, EQ-055, EQ-060, EQ-065, EQ-064, EQ-093, EQ-138 |
| O-062 | Medical Examiner | Blackbox Protocol | Medical | Forensics, Medicine | EQ-005, EQ-023, EQ-072, EQ-055, EQ-060, EQ-065, EQ-064, EQ-135 |
| O-063 | Dentist | Blackbox Protocol | Medical | Medicine, Crafting | EQ-005, EQ-023, EQ-072, EQ-055, EQ-060, EQ-065, EQ-064, EQ-030, EQ-050 |
| O-064 | Veterinary Physician | Blackbox Protocol | Medical | Medicine, Animal Husbandry | EQ-005, EQ-023, EQ-072, EQ-055, EQ-060, EQ-065, EQ-064, EQ-045 |
| O-065 | Medical Laboratory Technician | Blackbox Protocol | Medical | Science, Medicine | EQ-005, EQ-023, EQ-072, EQ-055, EQ-060, EQ-065, EQ-064, EQ-093, EQ-138 |
| O-066 | Field Medic | Signal Lost | Medical | Medicine, Endurance | EQ-023, EQ-072, EQ-007, EQ-055, EQ-060, EQ-065, EQ-064, EQ-085 |
| O-067 | Triage Physician | Signal Lost | Medical | Medicine, Science | EQ-023, EQ-072, EQ-007, EQ-055, EQ-060, EQ-065, EQ-064, EQ-093, EQ-138 |
| O-068 | Emergency Nurse | Signal Lost | Medical | Medicine, Search | EQ-023, EQ-072, EQ-007, EQ-055, EQ-060, EQ-065, EQ-064 |
| O-069 | Mobile Healthcare Provider | Signal Lost | Medical | Medicine, Navigation | EQ-023, EQ-072, EQ-007, EQ-055, EQ-060, EQ-065, EQ-064, EQ-079, EQ-080 |
| O-070 | Crisis Counselor | Signal Lost | Medical | Persuasion, Search | EQ-023, EQ-072, EQ-007, EQ-055, EQ-060, EQ-065, EQ-064 |
| O-071 | Public Health Specialist | Signal Lost | Medical | Science, Research | EQ-023, EQ-072, EQ-007, EQ-055, EQ-060, EQ-065, EQ-064, EQ-093, EQ-138 |
| O-072 | Emergency Pharmacist | Signal Lost | Medical | Medicine, Resource Management | EQ-023, EQ-072, EQ-007, EQ-055, EQ-060, EQ-065, EQ-064, EQ-138 |
| O-073 | Settlement Physician | Dead Zone | Medical | Medicine, Science | EQ-072, EQ-026, EQ-087, EQ-055‡, EQ-060‡, EQ-065‡, EQ-064‡, EQ-093, EQ-138 |
| O-074 | Frontier Medic | Dead Zone | Medical | Medicine, Survival | EQ-072, EQ-026, EQ-087, EQ-055‡, EQ-060‡, EQ-065‡, EQ-064‡, EQ-083, EQ-071 |
| O-075 | Settlement Nurse | Dead Zone | Medical | Medicine, Persuasion | EQ-072, EQ-026, EQ-087, EQ-055‡, EQ-060‡, EQ-065‡, EQ-064‡ |
| O-076 | Midwife | Dead Zone | Medical | Medicine, Persuasion | EQ-072, EQ-026, EQ-087, EQ-055‡, EQ-060‡, EQ-065‡, EQ-064‡ |
| O-077 | Apothecary | Dead Zone | Medical | Resource Management, Science | EQ-072, EQ-026, EQ-087, EQ-055‡, EQ-060‡, EQ-065‡, EQ-064‡, EQ-138, EQ-093 |
| O-078 | Community Mental Health Practitioner | Dead Zone | Medical | Persuasion, Medicine | EQ-072, EQ-026, EQ-087, EQ-055‡, EQ-060‡, EQ-065‡, EQ-064‡ |
| O-079 | Community Dentist | Dead Zone | Medical | Medicine, Crafting | EQ-072, EQ-026, EQ-087, EQ-055‡, EQ-060‡, EQ-065‡, EQ-064‡, EQ-030, EQ-050 |
| O-080 | Livestock Healthcare Practitioner | Dead Zone | Medical | Animal Husbandry, Medicine | EQ-072, EQ-026, EQ-087, EQ-055‡, EQ-060‡, EQ-065‡, EQ-064‡, EQ-045 |
| O-081 | Sanitation Specialist | Dead Zone | Medical | Science, Resource Management | EQ-072, EQ-026, EQ-087, EQ-055‡, EQ-060‡, EQ-065‡, EQ-064‡, EQ-093, EQ-138 |
| O-082 | Biologist | Blackbox Protocol | Scientist | Science, Research | EQ-005, EQ-023, EQ-072, EQ-138, EQ-133, EQ-130, EQ-093 |
| O-083 | Chemist | Blackbox Protocol | Scientist | Science, Research | EQ-005, EQ-023, EQ-072, EQ-138, EQ-133, EQ-130, EQ-093 |
| O-084 | Physicist | Blackbox Protocol | Scientist | Science, Research | EQ-005, EQ-023, EQ-072, EQ-138, EQ-133, EQ-130, EQ-093 |
| O-085 | Geologist | Blackbox Protocol | Scientist | Science, Research | EQ-005, EQ-023, EQ-072, EQ-138, EQ-133, EQ-130, EQ-093 |
| O-086 | Environmental Scientist | Blackbox Protocol | Scientist | Science, Research | EQ-005, EQ-023, EQ-072, EQ-138, EQ-133, EQ-130, EQ-093 |
| O-087 | Meteorologist | Blackbox Protocol | Scientist | Survival, Science | EQ-005, EQ-023, EQ-072, EQ-138, EQ-133, EQ-130, EQ-093, EQ-083, EQ-071 |
| O-088 | Epidemiologist | Blackbox Protocol | Scientist | Medicine, Science | EQ-005, EQ-023, EQ-072, EQ-138, EQ-133, EQ-130, EQ-093, EQ-055 |
| O-089 | Botanist | Blackbox Protocol | Scientist | Agriculture, Science | EQ-005, EQ-023, EQ-072, EQ-138, EQ-133, EQ-130, EQ-093, EQ-120 |
| O-090 | Food Scientist | Blackbox Protocol | Scientist | Science, Research | EQ-005, EQ-023, EQ-072, EQ-138, EQ-133, EQ-130, EQ-093 |
| O-091 | Laboratory Scientist | Blackbox Protocol | Scientist | Science, Research | EQ-005, EQ-023, EQ-072, EQ-138, EQ-133, EQ-130, EQ-093 |
| O-092 | Disaster Scientist | Signal Lost | Scientist | Resource Management, Research | EQ-023, EQ-072, EQ-007, EQ-138, EQ-133, EQ-130, EQ-093 |
| O-093 | Water Quality Scientist | Signal Lost | Scientist | Science, Research | EQ-023, EQ-072, EQ-007, EQ-138, EQ-133, EQ-130, EQ-093 |
| O-094 | Emergency Epidemiologist | Signal Lost | Scientist | Medicine, Science | EQ-023, EQ-072, EQ-007, EQ-138, EQ-133, EQ-130, EQ-093, EQ-055 |
| O-095 | Applied Agricultural Scientist | Signal Lost | Scientist | Science, Agriculture | EQ-023, EQ-072, EQ-007, EQ-138, EQ-133, EQ-130, EQ-093, EQ-120 |
| O-096 | Environmental Hazard Specialist | Signal Lost | Scientist | Science, Search | EQ-023, EQ-072, EQ-007, EQ-138, EQ-133, EQ-130, EQ-093 |
| O-097 | Independent Research Scientist | Signal Lost | Scientist | Research, Science | EQ-023, EQ-072, EQ-007, EQ-138, EQ-133, EQ-130, EQ-093 |
| O-098 | Applied Scientist | Dead Zone | Scientist | Science, Research | EQ-072, EQ-026, EQ-087, EQ-138, EQ-133‡, EQ-130‡, EQ-093 |
| O-099 | Naturalist | Dead Zone | Scientist | Science, Survival | EQ-072, EQ-026, EQ-087, EQ-138, EQ-133‡, EQ-130‡, EQ-093, EQ-083, EQ-071 |
| O-100 | Agricultural Scientist | Dead Zone | Scientist | Science, Agriculture | EQ-072, EQ-026, EQ-087, EQ-138, EQ-133‡, EQ-130‡, EQ-093, EQ-120 |
| O-101 | Water Scientist | Dead Zone | Scientist | Science, Construction | EQ-072, EQ-026, EQ-087, EQ-138, EQ-133‡, EQ-130‡, EQ-093, EQ-029, EQ-044 |
| O-102 | Weather Observer | Dead Zone | Scientist | Survival, Science | EQ-072, EQ-026, EQ-087, EQ-138, EQ-133‡, EQ-130‡, EQ-093, EQ-083, EQ-071 |
| O-103 | Settlement Researcher | Dead Zone | Scientist | Research, Science | EQ-072, EQ-026, EQ-087, EQ-138, EQ-133‡, EQ-130‡, EQ-093 |
| O-104 | Anomaly Researcher | Dead Zone | Scientist | Research, Search | EQ-072, EQ-026, EQ-087, EQ-138, EQ-133‡, EQ-130‡, EQ-093, EQ-023 |
| O-105 | Software Developer | Blackbox Protocol | Technology Specialist | Computing, Electronics | EQ-005, EQ-023, EQ-072, EQ-130, EQ-038, EQ-051, EQ-132 |
| O-106 | IT Administrator | Blackbox Protocol | Technology Specialist | Computing, Electronics | EQ-005, EQ-023, EQ-072, EQ-130, EQ-038, EQ-051, EQ-132 |
| O-107 | Cybersecurity Analyst | Blackbox Protocol | Technology Specialist | Computing, Electronics | EQ-005, EQ-023, EQ-072, EQ-130, EQ-038, EQ-051, EQ-132 |
| O-108 | Telecommunications Technician | Blackbox Protocol | Technology Specialist | Communications, Computing | EQ-005, EQ-023, EQ-072, EQ-130, EQ-038, EQ-051, EQ-132, EQ-001 |
| O-109 | Electronics Technician | Blackbox Protocol | Technology Specialist | Electronics, Construction | EQ-005, EQ-023, EQ-072, EQ-130, EQ-038, EQ-051, EQ-132, EQ-029, EQ-044 |
| O-110 | Radio Communications Specialist | Blackbox Protocol | Technology Specialist | Communications, Computing | EQ-005, EQ-023, EQ-072, EQ-130, EQ-038, EQ-051, EQ-132, EQ-001 |
| O-111 | Digital Intelligence Specialist | Blackbox Protocol | Technology Specialist | Research, Computing | EQ-005, EQ-023, EQ-072, EQ-130, EQ-038, EQ-051, EQ-132, EQ-138 |
| O-112 | Automation Technician | Blackbox Protocol | Technology Specialist | Mechanics, Electronics | EQ-005, EQ-023, EQ-072, EQ-130, EQ-038, EQ-051, EQ-132, EQ-035, EQ-036 |
| O-113 | Emergency Communications Technician | Signal Lost | Technology Specialist | Communications, Survival | EQ-023, EQ-072, EQ-007, EQ-130, EQ-038, EQ-051, EQ-132, EQ-001, EQ-083, EQ-071 |
| O-114 | Offline Systems Administrator | Signal Lost | Technology Specialist | Computing, Research | EQ-023, EQ-072, EQ-007, EQ-130, EQ-038, EQ-051, EQ-132, EQ-138 |
| O-115 | Grid Communications Technician | Signal Lost | Technology Specialist | Communications, Electronics | EQ-023, EQ-072, EQ-007, EQ-130, EQ-038, EQ-051, EQ-132, EQ-001 |
| O-116 | Independent Broadcaster | Signal Lost | Technology Specialist | Communications, Crafting | EQ-023, EQ-072, EQ-007, EQ-130, EQ-038, EQ-051, EQ-132, EQ-001, EQ-030, EQ-050 |
| O-117 | Electronics Recovery Technician | Signal Lost | Technology Specialist | Electronics, Resource Management | EQ-023, EQ-072, EQ-007, EQ-130, EQ-038, EQ-051, EQ-132, EQ-138 |
| O-118 | Emergency Information Specialist | Signal Lost | Technology Specialist | Research, Computing | EQ-023, EQ-072, EQ-007, EQ-130, EQ-038, EQ-051, EQ-132, EQ-138 |
| O-119 | Signal Keeper | Dead Zone | Technology Specialist | Communications, Computing | EQ-072, EQ-026, EQ-087, EQ-130‡, EQ-038, EQ-051, EQ-132‡, EQ-001‡ |
| O-120 | Electronics Tinkerer | Dead Zone | Technology Specialist | Electronics, Crafting | EQ-072, EQ-026, EQ-087, EQ-130‡, EQ-038, EQ-051, EQ-132‡, EQ-030, EQ-050 |
| O-121 | Knowledge Systems Technician | Dead Zone | Technology Specialist | Research, Computing | EQ-072, EQ-026, EQ-087, EQ-130‡, EQ-038, EQ-051, EQ-132‡, EQ-138 |
| O-122 | Instrument Technician | Dead Zone | Technology Specialist | Science, Electronics | EQ-072, EQ-026, EQ-087, EQ-130‡, EQ-038, EQ-051, EQ-132‡, EQ-093, EQ-138 |
| O-123 | Technology Restoration Specialist | Dead Zone | Technology Specialist | Electronics, Mechanics | EQ-072, EQ-026, EQ-087, EQ-130‡, EQ-038, EQ-051, EQ-132‡, EQ-035, EQ-036 |
| O-124 | Settlement Broadcaster | Dead Zone | Technology Specialist | Communications, Persuasion | EQ-072, EQ-026, EQ-087, EQ-130‡, EQ-038, EQ-051, EQ-132‡, EQ-001‡ |
| O-125 | Civil Engineer | Blackbox Protocol | Engineer | Construction, Science | EQ-005, EQ-023, EQ-072, EQ-044, EQ-130, EQ-092, EQ-093, EQ-029, EQ-138 |
| O-126 | Mechanical Engineer | Blackbox Protocol | Engineer | Construction, Science | EQ-005, EQ-023, EQ-072, EQ-044, EQ-130, EQ-092, EQ-093, EQ-029, EQ-138 |
| O-127 | Electrical Engineer | Blackbox Protocol | Engineer | Electronics, Science | EQ-005, EQ-023, EQ-072, EQ-044, EQ-130, EQ-092, EQ-093, EQ-038, EQ-138 |
| O-128 | Structural Engineer | Blackbox Protocol | Engineer | Construction, Science | EQ-005, EQ-023, EQ-072, EQ-044, EQ-130, EQ-092, EQ-093, EQ-029, EQ-138 |
| O-129 | Chemical Engineer | Blackbox Protocol | Engineer | Science, Construction | EQ-005, EQ-023, EQ-072, EQ-044, EQ-130, EQ-092, EQ-093, EQ-138, EQ-029 |
| O-130 | Environmental Engineer | Blackbox Protocol | Engineer | Construction, Science | EQ-005, EQ-023, EQ-072, EQ-044, EQ-130, EQ-092, EQ-093, EQ-029, EQ-138 |
| O-131 | Industrial Engineer | Blackbox Protocol | Engineer | Mechanics, Leadership | EQ-005, EQ-023, EQ-072, EQ-044, EQ-130, EQ-092, EQ-093, EQ-035, EQ-036 |
| O-132 | Energy Engineer | Blackbox Protocol | Engineer | Electronics, Science | EQ-005, EQ-023, EQ-072, EQ-044, EQ-130, EQ-092, EQ-093, EQ-038, EQ-138 |
| O-133 | Infrastructure Engineer | Signal Lost | Engineer | Construction, Leadership | EQ-023, EQ-072, EQ-007, EQ-044, EQ-130, EQ-092, EQ-093, EQ-029 |
| O-134 | Emergency Power Engineer | Signal Lost | Engineer | Electronics, Construction | EQ-023, EQ-072, EQ-007, EQ-044, EQ-130, EQ-092, EQ-093, EQ-038, EQ-029 |
| O-135 | Water Systems Engineer | Signal Lost | Engineer | Construction, Science | EQ-023, EQ-072, EQ-007, EQ-044, EQ-130, EQ-092, EQ-093, EQ-029, EQ-138 |
| O-136 | Structural Assessment Engineer | Signal Lost | Engineer | Construction, Resource Management | EQ-023, EQ-072, EQ-007, EQ-044, EQ-130, EQ-092, EQ-093, EQ-029, EQ-138 |
| O-137 | Emergency Manufacturing Engineer | Signal Lost | Engineer | Construction, Mechanics | EQ-023, EQ-072, EQ-007, EQ-044, EQ-130, EQ-092, EQ-093, EQ-029, EQ-035, EQ-036 |
| O-138 | Transportation Infrastructure Engineer | Signal Lost | Engineer | Vehicle Operation, Construction | EQ-023, EQ-072, EQ-007, EQ-044, EQ-130, EQ-092, EQ-093, EQ-029 |
| O-139 | Reconstruction Engineer | Dead Zone | Engineer | Construction, Science | EQ-072, EQ-026, EQ-087, EQ-044, EQ-130‡, EQ-092, EQ-093, EQ-029, EQ-138 |
| O-140 | Off-Grid Energy Engineer | Dead Zone | Engineer | Electronics, Mechanics | EQ-072, EQ-026, EQ-087, EQ-044, EQ-130‡, EQ-092, EQ-093, EQ-038, EQ-035, EQ-036 |
| O-141 | Hydraulic Engineer | Dead Zone | Engineer | Construction, Mechanics | EQ-072, EQ-026, EQ-087, EQ-044, EQ-130‡, EQ-092, EQ-093, EQ-029, EQ-035, EQ-036 |
| O-142 | Settlement Engineer | Dead Zone | Engineer | Leadership, Science | EQ-072, EQ-026, EQ-087, EQ-044, EQ-130‡, EQ-092, EQ-093, EQ-138 |
| O-143 | Mechanical Systems Engineer | Dead Zone | Engineer | Construction, Mechanics | EQ-072, EQ-026, EQ-087, EQ-044, EQ-130‡, EQ-092, EQ-093, EQ-029, EQ-035, EQ-036 |
| O-144 | Industrial Restoration Engineer | Dead Zone | Engineer | Resource Management, Mechanics | EQ-072, EQ-026, EQ-087, EQ-044, EQ-130‡, EQ-092, EQ-093, EQ-138, EQ-035, EQ-036 |
| O-145 | Carpenter | Blackbox Protocol | Tradesperson | Construction, Crafting | EQ-005, EQ-023, EQ-072, EQ-051, EQ-048, EQ-046, EQ-029, EQ-044, EQ-030, EQ-050 |
| O-146 | Electrician | Blackbox Protocol | Tradesperson | Electronics, Crafting | EQ-005, EQ-023, EQ-072, EQ-051, EQ-048, EQ-046, EQ-029, EQ-038, EQ-030, EQ-050 |
| O-147 | Plumber | Blackbox Protocol | Tradesperson | Mechanics, Construction | EQ-005, EQ-023, EQ-072, EQ-051, EQ-048, EQ-046, EQ-029, EQ-035, EQ-036, EQ-044 |
| O-148 | Automotive Mechanic | Blackbox Protocol | Tradesperson | Mechanics, Crafting | EQ-005, EQ-023, EQ-072, EQ-051, EQ-048, EQ-046, EQ-029, EQ-035, EQ-036, EQ-030, EQ-050 |
| O-149 | Heavy Equipment Mechanic | Blackbox Protocol | Tradesperson | Mechanics, Crafting | EQ-005, EQ-023, EQ-072, EQ-051, EQ-048, EQ-046, EQ-029, EQ-035, EQ-036, EQ-030, EQ-050 |
| O-150 | Welder | Blackbox Protocol | Tradesperson | Mechanics, Crafting | EQ-005, EQ-023, EQ-072, EQ-051, EQ-048, EQ-046, EQ-029, EQ-035, EQ-036, EQ-030, EQ-050 |
| O-151 | Machinist | Blackbox Protocol | Tradesperson | Mechanics, Crafting | EQ-005, EQ-023, EQ-072, EQ-051, EQ-048, EQ-046, EQ-029, EQ-035, EQ-036, EQ-030, EQ-050 |
| O-152 | Mason | Blackbox Protocol | Tradesperson | Construction, Crafting | EQ-005, EQ-023, EQ-072, EQ-051, EQ-048, EQ-046, EQ-029, EQ-044, EQ-030, EQ-050 |
| O-153 | HVAC Technician | Blackbox Protocol | Tradesperson | Mechanics, Electronics | EQ-005, EQ-023, EQ-072, EQ-051, EQ-048, EQ-046, EQ-029, EQ-035, EQ-036, EQ-038 |
| O-154 | Blacksmith | Blackbox Protocol | Tradesperson | Crafting, Mechanics | EQ-005, EQ-023, EQ-072, EQ-051, EQ-048, EQ-046, EQ-029, EQ-030, EQ-050, EQ-035, EQ-036 |
| O-155 | Locksmith | Blackbox Protocol | Tradesperson | Construction, Crafting | EQ-005, EQ-023, EQ-072, EQ-051, EQ-048, EQ-046, EQ-029, EQ-044, EQ-030, EQ-050 |
| O-156 | Tailor | Blackbox Protocol | Tradesperson | Crafting, Construction | EQ-005, EQ-023, EQ-072, EQ-051, EQ-048, EQ-046, EQ-029, EQ-030, EQ-050, EQ-044 |
| O-157 | Leatherworker | Blackbox Protocol | Tradesperson | Crafting, Construction | EQ-005, EQ-023, EQ-072, EQ-051, EQ-048, EQ-046, EQ-029, EQ-030, EQ-050, EQ-044 |
| O-158 | Woodworker | Blackbox Protocol | Tradesperson | Crafting, Construction | EQ-005, EQ-023, EQ-072, EQ-051, EQ-048, EQ-046, EQ-029, EQ-030, EQ-050, EQ-044 |
| O-159 | Emergency Repair Technician | Signal Lost | Tradesperson | Survival, Mechanics | EQ-023, EQ-072, EQ-007, EQ-051, EQ-048, EQ-046, EQ-029, EQ-083, EQ-071, EQ-035, EQ-036 |
| O-160 | Generator Mechanic | Signal Lost | Tradesperson | Mechanics, Electronics | EQ-023, EQ-072, EQ-007, EQ-051, EQ-048, EQ-046, EQ-029, EQ-035, EQ-036, EQ-038 |
| O-161 | Emergency Carpenter | Signal Lost | Tradesperson | Construction, Electronics | EQ-023, EQ-072, EQ-007, EQ-051, EQ-048, EQ-046, EQ-029, EQ-044, EQ-038 |
| O-162 | Utility Technician | Signal Lost | Tradesperson | Construction, Electronics | EQ-023, EQ-072, EQ-007, EQ-051, EQ-048, EQ-046, EQ-029, EQ-044, EQ-038 |
| O-163 | Salvage Mechanic | Signal Lost | Tradesperson | Resource Management, Mechanics | EQ-023, EQ-072, EQ-007, EQ-051, EQ-048, EQ-046, EQ-029, EQ-138, EQ-035, EQ-036 |
| O-164 | Emergency Fabricator | Signal Lost | Tradesperson | Crafting, Mechanics | EQ-023, EQ-072, EQ-007, EQ-051, EQ-048, EQ-046, EQ-029, EQ-030, EQ-050, EQ-035, EQ-036 |
| O-165 | Textile Repair Specialist | Signal Lost | Tradesperson | Crafting, Construction | EQ-023, EQ-072, EQ-007, EQ-051, EQ-048, EQ-046, EQ-029, EQ-030, EQ-050, EQ-044 |
| O-166 | Blacksmith | Dead Zone | Tradesperson | Crafting, Mechanics | EQ-072, EQ-026, EQ-087, EQ-051, EQ-048, EQ-046, EQ-029, EQ-030, EQ-050, EQ-035, EQ-036 |
| O-167 | Carpenter | Dead Zone | Tradesperson | Construction, Crafting | EQ-072, EQ-026, EQ-087, EQ-051, EQ-048, EQ-046, EQ-029, EQ-044, EQ-030, EQ-050 |
| O-168 | Mason | Dead Zone | Tradesperson | Construction, Crafting | EQ-072, EQ-026, EQ-087, EQ-051, EQ-048, EQ-046, EQ-029, EQ-044, EQ-030, EQ-050 |
| O-169 | Fabricator | Dead Zone | Tradesperson | Crafting, Mechanics | EQ-072, EQ-026, EQ-087, EQ-051, EQ-048, EQ-046, EQ-029, EQ-030, EQ-050, EQ-035, EQ-036 |
| O-170 | Millwright | Dead Zone | Tradesperson | Mechanics, Crafting | EQ-072, EQ-026, EQ-087, EQ-051, EQ-048, EQ-046, EQ-029, EQ-035, EQ-036, EQ-030, EQ-050 |
| O-171 | Cooper | Dead Zone | Tradesperson | Crafting, Construction | EQ-072, EQ-026, EQ-087, EQ-051, EQ-048, EQ-046, EQ-029, EQ-030, EQ-050, EQ-044 |
| O-172 | Potter | Dead Zone | Tradesperson | Crafting, Mechanics | EQ-072, EQ-026, EQ-087, EQ-051, EQ-048, EQ-046, EQ-029, EQ-030, EQ-050, EQ-035, EQ-036 |
| O-173 | Leatherworker | Dead Zone | Tradesperson | Crafting, Mechanics | EQ-072, EQ-026, EQ-087, EQ-051, EQ-048, EQ-046, EQ-029, EQ-030, EQ-050, EQ-035, EQ-036 |
| O-174 | Weaver | Dead Zone | Tradesperson | Crafting, Mechanics | EQ-072, EQ-026, EQ-087, EQ-051, EQ-048, EQ-046, EQ-029, EQ-030, EQ-050, EQ-035, EQ-036 |
| O-175 | Wheelwright | Dead Zone | Tradesperson | Crafting, Mechanics | EQ-072, EQ-026, EQ-087, EQ-051, EQ-048, EQ-046, EQ-029, EQ-030, EQ-050, EQ-035, EQ-036 |
| O-176 | General Mechanic | Dead Zone | Tradesperson | Mechanics, Crafting | EQ-072, EQ-026, EQ-087, EQ-051, EQ-048, EQ-046, EQ-029, EQ-035, EQ-036, EQ-030, EQ-050 |
| O-177 | Handyman | Dead Zone | Tradesperson | Construction, Crafting | EQ-072, EQ-026, EQ-087, EQ-051, EQ-048, EQ-046, EQ-029, EQ-044, EQ-030, EQ-050 |
| O-178 | Toolmaker | Dead Zone | Tradesperson | Crafting, Mechanics | EQ-072, EQ-026, EQ-087, EQ-051, EQ-048, EQ-046, EQ-029, EQ-030, EQ-050, EQ-035, EQ-036 |
| O-179 | Glassworker | Dead Zone | Tradesperson | Crafting, Construction | EQ-072, EQ-026, EQ-087, EQ-051, EQ-048, EQ-046, EQ-029, EQ-030, EQ-050, EQ-044 |
| O-180 | Wilderness Guide | Blackbox Protocol | Outdoorsman | Survival, Navigation | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-071 |
| O-181 | Hunter | Blackbox Protocol | Outdoorsman | Survival, Navigation | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-071 |
| O-182 | Fisherman | Blackbox Protocol | Outdoorsman | Survival, Vehicle Operation | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-071 |
| O-183 | Trapper | Blackbox Protocol | Outdoorsman | Survival, Navigation | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-071 |
| O-184 | Park Ranger | Blackbox Protocol | Outdoorsman | Science, Navigation | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-093, EQ-138 |
| O-185 | Forestry Worker | Blackbox Protocol | Outdoorsman | Science, Construction | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-093, EQ-138, EQ-029, EQ-044 |
| O-186 | Outdoor Survival Instructor | Blackbox Protocol | Outdoorsman | Survival, Navigation | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-071 |
| O-187 | Expedition Specialist | Blackbox Protocol | Outdoorsman | Resource Management, Navigation | EQ-005, EQ-023, EQ-072, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-138 |
| O-188 | Wilderness Scout | Signal Lost | Outdoorsman | Navigation, Survival | EQ-023, EQ-072, EQ-007, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-071 |
| O-189 | Search and Rescue Guide | Signal Lost | Outdoorsman | Search, Medicine | EQ-023, EQ-072, EQ-007, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-055 |
| O-190 | Emergency Forager | Signal Lost | Outdoorsman | Survival, Science | EQ-023, EQ-072, EQ-007, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-071, EQ-093, EQ-138 |
| O-191 | Evacuation Guide | Signal Lost | Outdoorsman | Navigation, Survival | EQ-023, EQ-072, EQ-007, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-071 |
| O-192 | Remote Camp Specialist | Signal Lost | Outdoorsman | Survival, Navigation | EQ-023, EQ-072, EQ-007, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-071 |
| O-193 | Hunter | Dead Zone | Outdoorsman | Survival, Navigation | EQ-072, EQ-026, EQ-087, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-071 |
| O-194 | Trapper | Dead Zone | Outdoorsman | Survival, Navigation | EQ-072, EQ-026, EQ-087, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-071 |
| O-195 | Forager | Dead Zone | Outdoorsman | Survival, Science | EQ-072, EQ-026, EQ-087, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-071, EQ-093, EQ-138 |
| O-196 | Pathfinder | Dead Zone | Outdoorsman | Navigation, Survival | EQ-072, EQ-026, EQ-087, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-071 |
| O-197 | Wilderness Guide | Dead Zone | Outdoorsman | Survival, Navigation | EQ-072, EQ-026, EQ-087, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-071 |
| O-198 | Fisherman | Dead Zone | Outdoorsman | Survival, Vehicle Operation | EQ-072, EQ-026, EQ-087, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-071 |
| O-199 | Woodsman | Dead Zone | Outdoorsman | Crafting, Construction | EQ-072, EQ-026, EQ-087, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-030, EQ-050, EQ-029, EQ-044 |
| O-200 | Frontier Explorer | Dead Zone | Outdoorsman | Survival, Navigation | EQ-072, EQ-026, EQ-087, EQ-067, EQ-079, EQ-080, EQ-083, EQ-084, EQ-085, EQ-071 |
| O-201 | Crop Farmer | Blackbox Protocol | Agriculturalist | Agriculture, Animal Husbandry | EQ-005, EQ-023, EQ-072, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-202 | Livestock Farmer | Blackbox Protocol | Agriculturalist | Animal Husbandry, Agriculture | EQ-005, EQ-023, EQ-072, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-203 | Rancher | Blackbox Protocol | Agriculturalist | Animal Husbandry, Agriculture | EQ-005, EQ-023, EQ-072, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-204 | Poultry Farmer | Blackbox Protocol | Agriculturalist | Animal Husbandry, Resource Management | EQ-005, EQ-023, EQ-072, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045, EQ-138 |
| O-205 | Horticulturist | Blackbox Protocol | Agriculturalist | Agriculture, Animal Husbandry | EQ-005, EQ-023, EQ-072, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-206 | Orchardist | Blackbox Protocol | Agriculturalist | Agriculture, Animal Husbandry | EQ-005, EQ-023, EQ-072, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-207 | Beekeeper | Blackbox Protocol | Agriculturalist | Animal Husbandry, Science | EQ-005, EQ-023, EQ-072, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045, EQ-093, EQ-138 |
| O-208 | Agricultural Technician | Blackbox Protocol | Agriculturalist | Science, Agriculture | EQ-005, EQ-023, EQ-072, EQ-120, EQ-048, EQ-089, EQ-118, EQ-093, EQ-138 |
| O-209 | Homesteader | Blackbox Protocol | Agriculturalist | Agriculture, Animal Husbandry | EQ-005, EQ-023, EQ-072, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-210 | Aquaculture Farmer | Blackbox Protocol | Agriculturalist | Agriculture, Science | EQ-005, EQ-023, EQ-072, EQ-120, EQ-048, EQ-089, EQ-118, EQ-093, EQ-138 |
| O-211 | Emergency Food Producer | Signal Lost | Agriculturalist | Agriculture, Resource Management | EQ-023, EQ-072, EQ-007, EQ-120, EQ-048, EQ-089, EQ-118, EQ-138 |
| O-212 | Community Gardener | Signal Lost | Agriculturalist | Agriculture, Animal Husbandry | EQ-023, EQ-072, EQ-007, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-213 | Independent Livestock Keeper | Signal Lost | Agriculturalist | Animal Husbandry, Resource Management | EQ-023, EQ-072, EQ-007, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045, EQ-138 |
| O-214 | Agricultural Recovery Specialist | Signal Lost | Agriculturalist | Science, Agriculture | EQ-023, EQ-072, EQ-007, EQ-120, EQ-048, EQ-089, EQ-118, EQ-093, EQ-138 |
| O-215 | Seed Steward | Signal Lost | Agriculturalist | Agriculture, Animal Husbandry | EQ-023, EQ-072, EQ-007, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-216 | Emergency Irrigation Specialist | Signal Lost | Agriculturalist | Construction, Mechanics | EQ-023, EQ-072, EQ-007, EQ-120, EQ-048, EQ-089, EQ-118, EQ-029, EQ-044, EQ-035, EQ-036 |
| O-217 | Homesteader | Dead Zone | Agriculturalist | Agriculture, Animal Husbandry | EQ-072, EQ-026, EQ-087, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-218 | Subsistence Farmer | Dead Zone | Agriculturalist | Agriculture, Animal Husbandry | EQ-072, EQ-026, EQ-087, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-219 | Market Gardener | Dead Zone | Agriculturalist | Agriculture, Animal Husbandry | EQ-072, EQ-026, EQ-087, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-220 | Livestock Keeper | Dead Zone | Agriculturalist | Animal Husbandry, Agriculture | EQ-072, EQ-026, EQ-087, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-221 | Shepherd | Dead Zone | Agriculturalist | Animal Husbandry, Agriculture | EQ-072, EQ-026, EQ-087, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-222 | Dairy Farmer | Dead Zone | Agriculturalist | Animal Husbandry, Agriculture | EQ-072, EQ-026, EQ-087, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-223 | Poultry Keeper | Dead Zone | Agriculturalist | Animal Husbandry, Agriculture | EQ-072, EQ-026, EQ-087, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-224 | Orchard Keeper | Dead Zone | Agriculturalist | Agriculture, Animal Husbandry | EQ-072, EQ-026, EQ-087, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-225 | Beekeeper | Dead Zone | Agriculturalist | Animal Husbandry, Science | EQ-072, EQ-026, EQ-087, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045, EQ-093, EQ-138 |
| O-226 | Seed Keeper | Dead Zone | Agriculturalist | Agriculture, Animal Husbandry | EQ-072, EQ-026, EQ-087, EQ-120, EQ-048, EQ-089, EQ-118, EQ-045 |
| O-227 | Agricultural Cooperative Manager | Dead Zone | Agriculturalist | Leadership, Agriculture | EQ-072, EQ-026, EQ-087, EQ-120, EQ-048, EQ-089, EQ-118 |
| O-228 | Aquaculture Keeper | Dead Zone | Agriculturalist | Agriculture, Science | EQ-072, EQ-026, EQ-087, EQ-120, EQ-048, EQ-089, EQ-118, EQ-093, EQ-138 |
| O-229 | Firefighter | Blackbox Protocol | Emergency Responder | Leadership, Search | EQ-005, EQ-023, EQ-072, EQ-055, EQ-001, EQ-091, EQ-092 |
| O-230 | Search and Rescue Specialist | Blackbox Protocol | Emergency Responder | Leadership, Search | EQ-005, EQ-023, EQ-072, EQ-055, EQ-001, EQ-091, EQ-092 |
| O-231 | Emergency Management Specialist | Blackbox Protocol | Emergency Responder | Leadership, Resource Management | EQ-005, EQ-023, EQ-072, EQ-055, EQ-001, EQ-091, EQ-092, EQ-138 |
| O-232 | Emergency Dispatcher | Blackbox Protocol | Emergency Responder | Leadership, Communications | EQ-005, EQ-023, EQ-072, EQ-055, EQ-001, EQ-091, EQ-092 |
| O-233 | Humanitarian Aid Worker | Blackbox Protocol | Emergency Responder | Leadership, Resource Management | EQ-005, EQ-023, EQ-072, EQ-055, EQ-001, EQ-091, EQ-092, EQ-138 |
| O-234 | Hazardous Materials Technician | Blackbox Protocol | Emergency Responder | Science, Search | EQ-005, EQ-023, EQ-072, EQ-055, EQ-001, EQ-091, EQ-092, EQ-093, EQ-138 |
| O-235 | Disaster Relief Coordinator | Blackbox Protocol | Emergency Responder | Leadership, Resource Management | EQ-005, EQ-023, EQ-072, EQ-055, EQ-001, EQ-091, EQ-092, EQ-138 |
| O-236 | Utility Emergency Responder | Blackbox Protocol | Emergency Responder | Construction, Search | EQ-005, EQ-023, EQ-072, EQ-055, EQ-001, EQ-091, EQ-092, EQ-029, EQ-044 |
| O-237 | Disaster Response Coordinator | Signal Lost | Emergency Responder | Leadership, Resource Management | EQ-023, EQ-072, EQ-007, EQ-055, EQ-001, EQ-091, EQ-092, EQ-138 |
| O-238 | Evacuation Coordinator | Signal Lost | Emergency Responder | Survival, Electronics | EQ-023, EQ-072, EQ-007, EQ-055, EQ-001, EQ-091, EQ-092, EQ-083, EQ-071, EQ-038 |
| O-239 | Emergency Shelter Manager | Signal Lost | Emergency Responder | Leadership, Resource Management | EQ-023, EQ-072, EQ-007, EQ-055, EQ-001, EQ-091, EQ-092, EQ-138 |
| O-240 | Relief Distribution Specialist | Signal Lost | Emergency Responder | Resource Management, Medicine | EQ-023, EQ-072, EQ-007, EQ-055, EQ-001, EQ-091, EQ-092, EQ-138 |
| O-241 | Community Rescue Worker | Signal Lost | Emergency Responder | Leadership, Medicine | EQ-023, EQ-072, EQ-007, EQ-055, EQ-001, EQ-091, EQ-092 |
| O-242 | Crisis Communications Dispatcher | Signal Lost | Emergency Responder | Leadership, Communications | EQ-023, EQ-072, EQ-007, EQ-055, EQ-001, EQ-091, EQ-092 |
| O-243 | Community Fire Warden | Dead Zone | Emergency Responder | Leadership, Search | EQ-072, EQ-026, EQ-087, EQ-055‡, EQ-001‡, EQ-091, EQ-092, EQ-023 |
| O-244 | Settlement Emergency Coordinator | Dead Zone | Emergency Responder | Leadership, Resource Management | EQ-072, EQ-026, EQ-087, EQ-055‡, EQ-001‡, EQ-091, EQ-092, EQ-138 |
| O-245 | Rescue Specialist | Dead Zone | Emergency Responder | Leadership, Search | EQ-072, EQ-026, EQ-087, EQ-055‡, EQ-001‡, EQ-091, EQ-092, EQ-023 |
| O-246 | Humanitarian Organizer | Dead Zone | Emergency Responder | Leadership, Resource Management | EQ-072, EQ-026, EQ-087, EQ-055‡, EQ-001‡, EQ-091, EQ-092, EQ-138 |
| O-247 | Community Safety Inspector | Dead Zone | Emergency Responder | Search, Construction | EQ-072, EQ-026, EQ-087, EQ-055‡, EQ-001‡, EQ-091, EQ-092, EQ-023, EQ-029, EQ-044 |
| O-248 | Disaster Recovery Coordinator | Dead Zone | Emergency Responder | Leadership, Resource Management | EQ-072, EQ-026, EQ-087, EQ-055‡, EQ-001‡, EQ-091, EQ-092, EQ-138 |
| O-249 | Burglar | Blackbox Protocol | Criminal | Search, Resource Management | EQ-005, EQ-023, EQ-072, EQ-051, EQ-046, EQ-048, EQ-052, EQ-138 |
| O-250 | Con Artist | Blackbox Protocol | Criminal | Persuasion, Streetwise | EQ-005, EQ-023, EQ-072, EQ-051, EQ-046, EQ-048, EQ-052 |
| O-251 | Smuggler | Blackbox Protocol | Criminal | Resource Management, Streetwise | EQ-005, EQ-023, EQ-072, EQ-051, EQ-046, EQ-048, EQ-052, EQ-138 |
| O-252 | Criminal Fixer | Blackbox Protocol | Criminal | Persuasion, Resource Management | EQ-005, EQ-023, EQ-072, EQ-051, EQ-046, EQ-048, EQ-052, EQ-138 |
| O-253 | Organized Crime Associate | Blackbox Protocol | Criminal | Leadership, Resource Management | EQ-005, EQ-023, EQ-072, EQ-051, EQ-046, EQ-048, EQ-052, EQ-138 |
| O-254 | Cybercriminal | Blackbox Protocol | Criminal | Computing, Streetwise | EQ-005, EQ-023, EQ-072, EQ-051, EQ-046, EQ-048, EQ-052, EQ-130 |
| O-255 | Illegal Gambling Operator | Blackbox Protocol | Criminal | Resource Management, Streetwise | EQ-005, EQ-023, EQ-072, EQ-051, EQ-046, EQ-048, EQ-052, EQ-138 |
| O-256 | Fence | Blackbox Protocol | Criminal | Resource Management, Streetwise | EQ-005, EQ-023, EQ-072, EQ-051, EQ-046, EQ-048, EQ-052, EQ-138 |
| O-257 | Black Market Trader | Signal Lost | Criminal | Leadership, Resource Management | EQ-023, EQ-072, EQ-007, EQ-051, EQ-046, EQ-048, EQ-052, EQ-138 |
| O-258 | Underground Fixer | Signal Lost | Criminal | Persuasion, Resource Management | EQ-023, EQ-072, EQ-007, EQ-051, EQ-046, EQ-048, EQ-052, EQ-138 |
| O-259 | Independent Smuggler | Signal Lost | Criminal | Resource Management, Electronics | EQ-023, EQ-072, EQ-007, EQ-051, EQ-046, EQ-048, EQ-052, EQ-138, EQ-038 |
| O-260 | Opportunistic Criminal | Signal Lost | Criminal | Crafting, Resource Management | EQ-023, EQ-072, EQ-007, EQ-051, EQ-046, EQ-048, EQ-052, EQ-030, EQ-050, EQ-138 |
| O-261 | Criminal Organizer | Signal Lost | Criminal | Leadership, Persuasion | EQ-023, EQ-072, EQ-007, EQ-051, EQ-046, EQ-048, EQ-052 |
| O-262 | Black Market Merchant | Dead Zone | Criminal | Leadership, Resource Management | EQ-072, EQ-026, EQ-087, EQ-051, EQ-046, EQ-048, EQ-052, EQ-138 |
| O-263 | Smuggler | Dead Zone | Criminal | Research, Resource Management | EQ-072, EQ-026, EQ-087, EQ-051, EQ-046, EQ-048, EQ-052, EQ-138 |
| O-264 | Raider | Dead Zone | Criminal | Crafting, Survival | EQ-072, EQ-026, EQ-087, EQ-051, EQ-046, EQ-048, EQ-052, EQ-030, EQ-050, EQ-083, EQ-071 |
| O-265 | Outlaw | Dead Zone | Criminal | Survival, Crafting | EQ-072, EQ-026, EQ-087, EQ-051, EQ-046, EQ-048, EQ-052, EQ-083, EQ-071, EQ-030, EQ-050 |
| O-266 | Criminal Broker | Dead Zone | Criminal | Persuasion, Leadership | EQ-072, EQ-026, EQ-087, EQ-051, EQ-046, EQ-048, EQ-052 |
| O-267 | Underground Organizer | Dead Zone | Criminal | Leadership, Persuasion | EQ-072, EQ-026, EQ-087, EQ-051, EQ-046, EQ-048, EQ-052 |
| O-268 | Historian | Blackbox Protocol | Academic & Researcher | Research, Forensics | EQ-005, EQ-023, EQ-072, EQ-130, EQ-138, EQ-132, EQ-135 |
| O-269 | Archaeologist | Blackbox Protocol | Academic & Researcher | Research, Navigation | EQ-005, EQ-023, EQ-072, EQ-130, EQ-138, EQ-132, EQ-079, EQ-080 |
| O-270 | Anthropologist | Blackbox Protocol | Academic & Researcher | Research, Persuasion | EQ-005, EQ-023, EQ-072, EQ-130, EQ-138, EQ-132 |
| O-271 | Professor | Blackbox Protocol | Academic & Researcher | Persuasion, Research | EQ-005, EQ-023, EQ-072, EQ-130, EQ-138, EQ-132 |
| O-272 | Teacher | Blackbox Protocol | Academic & Researcher | Persuasion, Research | EQ-005, EQ-023, EQ-072, EQ-130, EQ-138, EQ-132 |
| O-273 | Librarian | Blackbox Protocol | Academic & Researcher | Research, Computing | EQ-005, EQ-023, EQ-072, EQ-130, EQ-138, EQ-132 |
| O-274 | Archivist | Blackbox Protocol | Academic & Researcher | Research, Computing | EQ-005, EQ-023, EQ-072, EQ-130, EQ-138, EQ-132 |
| O-275 | Linguist | Blackbox Protocol | Academic & Researcher | Communications, Persuasion | EQ-005, EQ-023, EQ-072, EQ-130, EQ-138, EQ-132, EQ-001 |
| O-276 | Sociologist | Blackbox Protocol | Academic & Researcher | Research, Science | EQ-005, EQ-023, EQ-072, EQ-130, EQ-138, EQ-132, EQ-093 |
| O-277 | Political Scientist | Blackbox Protocol | Academic & Researcher | Leadership, Research | EQ-005, EQ-023, EQ-072, EQ-130, EQ-138, EQ-132 |
| O-278 | Theologian | Blackbox Protocol | Academic & Researcher | Research, Persuasion | EQ-005, EQ-023, EQ-072, EQ-130, EQ-138, EQ-132 |
| O-279 | Knowledge Preservation Specialist | Signal Lost | Academic & Researcher | Research, Science | EQ-023, EQ-072, EQ-007, EQ-130, EQ-138, EQ-132, EQ-093 |
| O-280 | Emergency Educator | Signal Lost | Academic & Researcher | Persuasion, Leadership | EQ-023, EQ-072, EQ-007, EQ-130, EQ-138, EQ-132 |
| O-281 | Crisis Social Researcher | Signal Lost | Academic & Researcher | Research, Persuasion | EQ-023, EQ-072, EQ-007, EQ-130, EQ-138, EQ-132 |
| O-282 | Records Coordinator | Signal Lost | Academic & Researcher | Research, Science | EQ-023, EQ-072, EQ-007, EQ-130, EQ-138, EQ-132, EQ-093 |
| O-283 | Interpreter | Signal Lost | Academic & Researcher | Communications, Persuasion | EQ-023, EQ-072, EQ-007, EQ-130, EQ-138, EQ-132, EQ-001 |
| O-284 | Knowledge Keeper | Dead Zone | Academic & Researcher | Research, Leadership | EQ-072, EQ-026, EQ-087, EQ-130‡, EQ-138, EQ-132‡ |
| O-285 | Settlement Teacher | Dead Zone | Academic & Researcher | Persuasion, Research | EQ-072, EQ-026, EQ-087, EQ-130‡, EQ-138, EQ-132‡ |
| O-286 | Vocational Instructor | Dead Zone | Academic & Researcher | Persuasion, Leadership | EQ-072, EQ-026, EQ-087, EQ-130‡, EQ-138, EQ-132‡ |
| O-287 | Historian | Dead Zone | Academic & Researcher | Research, Leadership | EQ-072, EQ-026, EQ-087, EQ-130‡, EQ-138, EQ-132‡ |
| O-288 | Settlement Archivist | Dead Zone | Academic & Researcher | Research, Leadership | EQ-072, EQ-026, EQ-087, EQ-130‡, EQ-138, EQ-132‡ |
| O-289 | Cultural Scholar | Dead Zone | Academic & Researcher | Persuasion, Research | EQ-072, EQ-026, EQ-087, EQ-130‡, EQ-138, EQ-132‡ |
| O-290 | Independent Scholar | Dead Zone | Academic & Researcher | Research, Science | EQ-072, EQ-026, EQ-087, EQ-130‡, EQ-138, EQ-132‡, EQ-093 |
| O-291 | Chef | Blackbox Protocol | Civilian | Crafting, Science | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055, EQ-030, EQ-050, EQ-093 |
| O-292 | Baker | Blackbox Protocol | Civilian | Crafting, Science | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055, EQ-030, EQ-050, EQ-093 |
| O-293 | Butcher | Blackbox Protocol | Civilian | Crafting, Science | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055, EQ-030, EQ-050, EQ-093 |
| O-294 | Restaurant Manager | Blackbox Protocol | Civilian | Resource Management, Leadership | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055 |
| O-295 | Business Owner | Blackbox Protocol | Civilian | Resource Management, Persuasion | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055 |
| O-296 | Accountant | Blackbox Protocol | Civilian | Resource Management, Persuasion | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055 |
| O-297 | Attorney | Blackbox Protocol | Civilian | Research, Resource Management | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055 |
| O-298 | Administrator | Blackbox Protocol | Civilian | Research, Leadership | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055 |
| O-299 | Retail Worker | Blackbox Protocol | Civilian | Resource Management, Persuasion | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055 |
| O-300 | Warehouse Worker | Blackbox Protocol | Civilian | Resource Management, Persuasion | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055 |
| O-301 | Logistics Coordinator | Blackbox Protocol | Civilian | Resource Management, Persuasion | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055 |
| O-302 | Truck Driver | Blackbox Protocol | Civilian | Vehicle Operation, Resource Management | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055 |
| O-303 | Pilot | Blackbox Protocol | Civilian | Vehicle Operation, Survival | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055, EQ-083, EQ-071 |
| O-304 | Maritime Worker | Blackbox Protocol | Civilian | Vehicle Operation, Resource Management | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055 |
| O-305 | Artist | Blackbox Protocol | Civilian | Crafting, Resource Management | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055, EQ-030, EQ-050 |
| O-306 | Author | Blackbox Protocol | Civilian | Crafting, Research | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055, EQ-030, EQ-050 |
| O-307 | Musician | Blackbox Protocol | Civilian | Crafting, Resource Management | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055, EQ-030, EQ-050 |
| O-308 | Photographer | Blackbox Protocol | Civilian | Crafting, Resource Management | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055, EQ-030, EQ-050 |
| O-309 | Social Worker | Blackbox Protocol | Civilian | Persuasion, Leadership | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055 |
| O-310 | Clergy Member | Blackbox Protocol | Civilian | Persuasion, Resource Management | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055 |
| O-311 | Homemaker | Blackbox Protocol | Civilian | Crafting, Medicine | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055, EQ-030, EQ-050 |
| O-312 | Student | Blackbox Protocol | Civilian | Persuasion, Research | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055 |
| O-313 | General Laborer | Blackbox Protocol | Civilian | Construction, Search | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055, EQ-029, EQ-044 |
| O-314 | Government Administrator | Blackbox Protocol | Civilian | Leadership, Research | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055 |
| O-315 | Unemployed | Blackbox Protocol | Civilian | (flexible) | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055 |
| O-316 | Retiree | Blackbox Protocol | Civilian | (flexible) | EQ-005, EQ-023, EQ-072, EQ-051, EQ-138, EQ-055 |
| O-317 | Emergency Kitchen Manager | Signal Lost | Civilian | Resource Management, Crafting | EQ-023, EQ-072, EQ-007, EQ-051, EQ-138, EQ-055, EQ-030, EQ-050 |
| O-318 | Community Cook | Signal Lost | Civilian | Crafting, Science | EQ-023, EQ-072, EQ-007, EQ-051, EQ-138, EQ-055, EQ-030, EQ-050, EQ-093 |
| O-319 | Food Preservation Specialist | Signal Lost | Civilian | Crafting, Electronics | EQ-023, EQ-072, EQ-007, EQ-051, EQ-138, EQ-055, EQ-030, EQ-050, EQ-038 |
| O-320 | Emergency Logistics Coordinator | Signal Lost | Civilian | Leadership, Resource Management | EQ-023, EQ-072, EQ-007, EQ-051, EQ-138, EQ-055 |
| O-321 | Independent Transporter | Signal Lost | Civilian | Resource Management, Electronics | EQ-023, EQ-072, EQ-007, EQ-051, EQ-138, EQ-055, EQ-038 |
| O-322 | Community Organizer | Signal Lost | Civilian | Leadership, Electronics | EQ-023, EQ-072, EQ-007, EQ-051, EQ-138, EQ-055, EQ-038 |
| O-323 | Relief Administrator | Signal Lost | Civilian | Research, Resource Management | EQ-023, EQ-072, EQ-007, EQ-051, EQ-138, EQ-055 |
| O-324 | Independent Merchant | Signal Lost | Civilian | Resource Management, Leadership | EQ-023, EQ-072, EQ-007, EQ-051, EQ-138, EQ-055 |
| O-325 | Community Caregiver | Signal Lost | Civilian | Medicine, Resource Management | EQ-023, EQ-072, EQ-007, EQ-051, EQ-138, EQ-055 |
| O-326 | Displaced Civilian | Signal Lost | Civilian | (flexible) | EQ-023, EQ-072, EQ-007, EQ-051, EQ-138, EQ-055 |
| O-327 | Crisis Administrator | Signal Lost | Civilian | Leadership, Research | EQ-023, EQ-072, EQ-007, EQ-051, EQ-138, EQ-055 |
| O-328 | Community Counselor | Signal Lost | Civilian | Persuasion, Medicine | EQ-023, EQ-072, EQ-007, EQ-051, EQ-138, EQ-055 |
| O-329 | Settlement Cook | Dead Zone | Civilian | Crafting, Agriculture | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡, EQ-030, EQ-050, EQ-120 |
| O-330 | Baker | Dead Zone | Civilian | Crafting, Science | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡, EQ-030, EQ-050, EQ-093 |
| O-331 | Butcher | Dead Zone | Civilian | Crafting, Science | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡, EQ-030, EQ-050, EQ-093 |
| O-332 | Food Preserver | Dead Zone | Civilian | Crafting, Agriculture | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡, EQ-030, EQ-050, EQ-120 |
| O-333 | Merchant | Dead Zone | Civilian | Leadership, Resource Management | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡ |
| O-334 | Caravan Master | Dead Zone | Civilian | Research, Survival | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡, EQ-083, EQ-071 |
| O-335 | Teamster | Dead Zone | Civilian | Survival, Animal Husbandry | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡, EQ-083, EQ-071, EQ-045 |
| O-336 | Boatman | Dead Zone | Civilian | Vehicle Operation, Survival | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡, EQ-083, EQ-071 |
| O-337 | Quartermaster | Dead Zone | Civilian | Resource Management, Leadership | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡ |
| O-338 | Settlement Administrator | Dead Zone | Civilian | Leadership, Resource Management | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡ |
| O-339 | Community Leader | Dead Zone | Civilian | Leadership, Resource Management | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡ |
| O-340 | Mediator | Dead Zone | Civilian | Leadership, Persuasion | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡ |
| O-341 | Innkeeper | Dead Zone | Civilian | Persuasion, Crafting | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡, EQ-030, EQ-050 |
| O-342 | General Laborer | Dead Zone | Civilian | Construction, Search | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡, EQ-029, EQ-044, EQ-023 |
| O-343 | Community Caregiver | Dead Zone | Civilian | Medicine, Resource Management | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡ |
| O-344 | Artisan | Dead Zone | Civilian | Crafting, Construction | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡, EQ-030, EQ-050, EQ-029, EQ-044 |
| O-345 | Storyteller | Dead Zone | Civilian | Crafting, Leadership | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡, EQ-030, EQ-050 |
| O-346 | Musician | Dead Zone | Civilian | Crafting, Persuasion | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡, EQ-030, EQ-050 |
| O-347 | Spiritual Leader | Dead Zone | Civilian | Persuasion, Medicine | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡ |
| O-348 | Settlement Diplomat | Dead Zone | Civilian | Leadership, Persuasion | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡ |
| O-349 | Independent Survivor | Dead Zone | Civilian | Survival, Crafting | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡, EQ-083, EQ-071, EQ-030, EQ-050 |
| O-350 | Refugee | Dead Zone | Civilian | (flexible) | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡ |
| O-351 | Apprentice | Dead Zone | Civilian | (flexible) | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡ |
| O-352 | Retired Specialist | Dead Zone | Civilian | (flexible) | EQ-072, EQ-026, EQ-087, EQ-051, EQ-138, EQ-055‡ |
