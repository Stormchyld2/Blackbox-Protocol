"""5. Narrative sample sessions: the dice for every check, seeded so the log is reproducible.
The prose write-up is in notes/PLAYTEST-SIMULATION-1.md; this prints the raw roll log."""
import random, sys
from rules import check, opposed, harm, severity, NAMES, clamp, pressure_event, stress_band, STD, STRONG, CFAIL
rng = random.Random(int(sys.argv[1]) if len(sys.argv) > 1 else 25)
def note(label):
    print(f"[rules question] {label}")
def c(label, t, note=""):
    d, r = check(t, rng)
    print(f"{label}: target {clamp(t)}, roll {r:02d} -> {NAMES[d]}{'  # ' + note if note else ''}")
    return d
def opp(label, ta, tb):
    res = opposed(ta, tb, rng); print(f"{label}: {ta} vs {tb} -> {res}"); return res
def d20(label):
    r = rng.randint(1, 20)
    o = "major complication" if r <= 3 else "minor complication" if r <= 7 else "neutral" if r <= 17 else "opportunity"
    print(f"{label}: D20 {r} -> {o}"); return r
def dmg(label, die, deg, armor, env=False):
    l = harm(die, deg, armor, rng, env); print(f"{label}: D{die} -> HP loss {l} ({severity(l)})"); return l

print("=== SESSION 1: Dead Air (Blackbox Protocol era). Dana, Marcus, Elena, Tomas ===")
print("-- Scene 1 EOC briefing")
c("Dana Persuasion+G-122 interview the emergency manager (standard)", 60)
print("-- Scene 2 alert log")
c("Marcus Computing read controller log (challenging, no competency fits)", 57 - 10)
d20("Circumstance die: the EOC IT lead might walk in")
note("Dana wants to roll Research on the same log as well as help: R02 says bonus or separate roll, not both; she helps")
c("Marcus Computing with Dana helping (+5)", 57 - 10 + 5)
print("-- Scene 3 technician's home")
c("Elena Search+G-161? (Elena has G-166 Fire safety, not observation) standard", 65)
c("Dana Search+G-161 Observation (standard)", 65)
c("Tomas Persuasion talk to the technician's sister (favorable, she knows Tomas from the restaurant)", 60 + 10)
print("-- Scene 4 contractor depot")
print("Opposed: Dana Deception (cover story) vs manager PER 55 (immediate observation per 3.2)")
opp("Dana Deception 35 vs manager PER 55", 35, 55)
note("Dana wants to push the failed Deception: R02 forbids pushing opposed checks")
c("Tomas Persuasion junior employee (difficult: scared of the manager)", 60 - 20)
c("Tomas pushes: declares he will promise protection he may not be able to give", 60 - 20)
print("-- Scene 5 hilltop radio site")
c("Marcus Electronics+G-092 warning clue (standard)", 72 + 5)
c("Elena Search+G-166 Fire safety for the cabinet smell (favorable)", 65 + 10 + 10)
print("Hazard H-09 electrical: party avoids it after the warning; Tomas was inside the shelter")
c("Tomas DEX reflex to pull back from the arc (R01, challenging)", 60 - 10)
dmg("Tomas environmental harm (moderate D6, no degree bonus, no armor)", 6, STD, 0, env=True)
s, d = pressure_event(0, 50, 10, rng); print(f"Tomas stress check WIL 50 moderate(10): stress {s} ({d})")
s2, d2 = pressure_event(0, 50, 10, rng); print(f"Dana witnesses it, WIL 50 moderate: stress {s2}")
c("Elena first aid Medicine+G-101 (standard) 'care assessment' or stabilization? Tomas not at 0 HP", 57 + 10)
print("-- Scene 6 intimidator in the car park (optional combat)")
opp("Elena Leadership 45 (calm the situation) vs intimidator Intimidation 50 -- or Persuasion? which skill resists Intimidation?", 45, 50)
if opp("Intimidator punches Dana: CC 35 vs Dana DEX 45 defense", 35, 45) == "A":
    dmg("Unarmed D4, degree assumed standard", 4, STD, 0)
note("Marcus phones the sheriff: routine, no roll")
print("-- Debrief: advancement marks")
for who, sk in [("Dana", 50), ("Marcus", 57), ("Tomas", 60), ("Elena", 65)]:
    r = rng.randint(1, 100); print(f"{who} mark on skill {sk}: roll {r} -> {'+1D4 = +' + str(rng.randint(1,4)) if r > sk else 'no gain'}")

print("\n=== SESSION 2: Signal Lost, Hollis Gap, day 16 after Cascade onset. Mission S-05 (spare relay). Priya, Marcus, Samuel, Elena ===")
print("-- Travel 18 km on foot to the depot (F19: GM declares speed; no default)")
c("Priya Navigation 35 - SL deficit 10 (standard)", 35 - 10)
c("Elena Endurance 40 - SL deficit 5 for the climb? (deficit applies to 'unfamiliar sustained work' only)", 40)
print("-- Food/water: day 1 met, day 2 half rations (counts as unmet), day 3 met")
print("-- Depot: search for the relay")
c("Priya Search 55, difficult, Marcus helping +5", 55 - 20 + 5)
note("Marcus helps Priya (+5 already included in the 55-20+5 below?)")
d20("Circumstance die: scavengers on site")
print("-- Encounter with two novice scavengers (NPC-10): talk")
opp("Samuel Persuasion 62 vs scavenger Search? (no rule on what resists Persuasion)", 62, 30)
print("-- The relay is cracked: jury-rig, B2 scale 4 (40 h, max 2 workers, requires level III)")
print("Required competency for a relay repair: which one? Priya has Mechanical troubleshooting II, Marcus Electrical fundamentals III")
if c("Marcus Electronics 72 + G-071 III 10 - SL deficit 10, inferior parts -10 (standard)", 72 + 10 - 10 - 10) < STD:
    c("Rework 10 h then second roll (if rework re-rolls)", 72 + 10 - 10 - 10)
print("-- Night: raider band (NPC-11 competent) demands the relay")
opp("Elena Leadership 45-5 vs raider Intimidation 50", 40, 50)
init = sorted([("Elena", 50), ("Priya", 52), ("Raider A", 52), ("Raider B", 52)], key=lambda x: -x[1]); print("initiative", init)
if opp("Raider A Close Combat 35 vs Priya DEX 55 defense", 35, 55) == "A":
    dmg("Raider A club (light hand weapon D6), degree assumed standard", 6, STD, 0)
opp("Priya Close Combat 27 (wrench, heavy hand weapon D8?) vs Raider A DEX 55", 27, 55)
opp("Raider B CC 35 vs Elena DEX 50", 35, 50)
d = c("Priya swings at Raider A again (no defense: A used reaction on Elena?)", 27)
if d >= STD: dmg("wrench D8 vs armor 1", 8, d, 1)
note("Fight is a stalemate after two rounds: no morale, break or NPC withdrawal rule exists, GM must decide")
print("-- Camp: stress, sleep, recovery")
s, d = pressure_event(0, 45, 20, rng); print(f"Priya WIL 45 high(20): stress {s}")
s, d = pressure_event(0, 50, 20, rng); print(f"Marcus WIL 50 high(20): stress {s}")
