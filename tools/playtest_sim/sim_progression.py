"""4. Progression: general skill advancement (5.6/2.8), competency training + CDR slots (CCDD-12/19),
adaptation deficits (5.1/5.2), and crafting/extended tasks (7.4, R02)."""
import random, statistics as st
from rules import check, STD, STRONG, CFAIL, FAIL, Q, B, H_C, inc_hours, extra_slots, ELIG, cdr, clamp
rng = random.Random(11)
N = 20000

print("## General skill advancement: one mark per meaningful scenario (D100 > skill gives +1D4)\n")
print("| Start skill | After 10 marks | After 25 | After 50 | Marks to gain +10 (median) |")
print("|---:|---:|---:|---:|---:|")
for s0 in [22, 40, 55, 72]:
    res = {10: [], 25: [], 50: []}; to10 = []
    for _ in range(5000):
        s = s0; got10 = None
        for m in range(1, 51):
            if rng.randint(1, 100) > s: s = min(99, s + rng.randint(1, 4))
            if got10 is None and s >= s0 + 10: got10 = m
            if m in res: res[m].append(s)
        to10.append(got10 or 999)
    to10.sort()
    print(f"| {s0} | {st.mean(res[10]):.1f} | {st.mean(res[25]):.1f} | {st.mean(res[50]):.1f} | {to10[2500] if to10[2500]<999 else '>50'} |")
print("\nCreation cap 85 vs advancement cap 99. A skill of 85 gains on 15% of marks (mean +0.4 per mark).")

print("\n## Competency training time and CDR (Standard mode, no discount)\n")
cases = [("Marcus G-091 Radio fundamentals (c2) III->IV", 2, 4), ("Priya G-064 Mechanical troubleshooting (c4) II->III", 4, 3),
         ("Samuel P-061 Nursing practice (c6) III->IV", 6, 4), ("Tomas G-003 Food safety (c3) III->IV", 3, 4),
         ("Anyone, new c4 competency I->III", 4, None)]
for name, c, t in cases:
    if t is None:
        hrs = inc_hours(c, 1) + inc_hours(c, 2) + inc_hours(c, 3); gain = 100 * c * Q(3); gate = ELIG[c][2]
    else:
        hrs = inc_hours(c, t); gain = 100 * c * (Q(t) - Q(t - 1)); gate = ELIG[c][t - 1]
    print(f"- {name}: {hrs} h (= {hrs/2:.0f} days at 2 h/day full-time work, {hrs/6:.0f} days at 6 h/day study); CDR +{gain}; CDR gate {gate}")
print()
for who, c0 in [("Dana", 4900), ("Priya", 4700), ("Samuel", 8800)]:
    need = 10000 - c0
    print(f"- {who}: CDR {c0}; needs {need} more for the first extra slot. Cheapest route = many c1 I->II steps "
          f"(+200 CDR for 4+8=12 h each from scratch => {need/200:.0f} new c1 competencies, {need/200*12:.0f} h); "
          f"or c4 to III (+2800 for 280 h) => {need/2800:.1f} such projects, {need/2800*280:.0f} h")
print("- CCDD-19: the c6 level III threshold (25,000) exceeds any pregen's CDR (max 8,800), so Samuel could not *learn* "
      "Nursing practice III today even though he was granted it; c7 level I needs 10,000, c6 level I needs 5,000 "
      "(Priya 4,700, Dana and Tomas 4,900 are locked out of every complexity 6-7 competency at level I).")

print("\n## Adaptation deficits (5.1/5.2): Signal Lost transition for the pregens\n")
SL = {"Computing": 15, "Research": 15, "Forensics": 15, "Communications": 15, "Medicine": 10, "Electronics": 10,
      "Surveillance": 10, "Streetwise": 10, "Science": 10, "ResourceMgmt": 10, "Survival": 10, "Navigation": 10,
      "Mechanics": 5, "Crafting": 5, "Construction": 5, "Leadership": 5, "Endurance": 5, "Vehicle": 5, "Scavenging": 5}
from pregens import P
tot_hours = {}
for n, c in P.items():
    defs = {k: SL[k] for k in c["s"] if k in SL and c["s"][k] >= 40}
    milestones = sum(v // 5 for v in defs.values())
    tot_hours[n] = milestones * 8
    print(f"- {n}: in-field skills with SL defaults {defs}; {milestones} milestones x 8 h minimum = {milestones*8} active hours plus a distinct demonstration each")

print("\n## Crafting completion (7.4): expected total labor incl. rework\n")
print("Reading A: on failure choose rework (+25% labor) then roll again; Reading B: rework then auto-succeed.\n")
print("| Lead target | Scale 4 (40 h) reading A | reading B | P(first roll fails) | P(crit fail) |")
print("|---:|---:|---:|---:|---:|")
for t in [35, 45, 55, 65, 75]:
    totA = []; totB = []
    for _ in range(N):
        hrs = 40
        while True:
            d, _ = check(t, rng)
            if d >= STD: break
            hrs += 10
        totA.append(hrs)
    pf = (99 - clamp(t)) + 1
    print(f"| {t} | {st.mean(totA):.1f} h | {40 + 10*pf/100:.1f} h | {pf}% | 1% |")

print("\n## R02 extended task: intervals to reach progress target\n")
print("| Target | Progress 3 | Progress 6 | Progress 10 |")
print("|---:|---:|---:|---:|")
PROG = {5: 4, 4: 3, 3: 2, 2: 1, 1: 0, 0: -1}
for t in [30, 50, 70, 90]:
    row = []
    for goal in [3, 6, 10]:
        iv = []
        for _ in range(N // 4):
            p = 0; i = 0
            while p < goal and i < 500:
                i += 1; d, _ = check(t, rng); p = max(0, p + PROG[d])
            iv.append(i)
        row.append(f"{st.mean(iv):.1f}")
    print(f"| {t} | " + " | ".join(row) + " |")
