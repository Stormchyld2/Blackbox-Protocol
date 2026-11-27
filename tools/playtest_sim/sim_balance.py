"""Combat balance options (draft, not rules). Re-runs the PR 6 duel model under candidate fixes for
findings #1 (defense outclasses attack) and #2/#3 (severity ignores toughness; most knockdowns dying).

Options modelled (all keep the single D100 roll, R03 difficulty ladder and occupation grants):
  baseline  rules as written: DEX evasion at full DEX; severity bands 1/2-3/4-6/7+ (absolute)
  opt1      evasion target = fraction of DEX (1/2 and 2/3 tested)
  opt2      attack skill baseline raised: +N to every attack target, PCs and NPCs (N = 10, 20)
  opt3a     severity bands scaled to the target's max HP: minor <20%, moderate <50%, severe <75%, critical >=75%
  opt3b     softer lethality only: unstable at 0 HP only if the depleting hit was critical (bands unchanged)

Modelling changes from sim_combat.py (PR 6):
  * harm uses the attacker's actual degree from the opposed roll (PR 6 re-drew a degree conditional on success)
  * a defender picks the better of DEX evasion and Close Combat defense when the attack is melee (4.1 allows both);
    ranged attacks can only be evaded. Under the rules as written evasion is always the higher target anyway.
  * death figure assumes an untrained party helper (Medicine 30) starts stabilising the round after the drop.
All results are Monte Carlo estimates with fixed seeds and are provisional."""
import random
from rules import check, harm, severity, STD, CFAIL, clamp, derived
from pregens import P

N = 20000
rng = random.Random(2027)


def opposed_deg(ta, tb):
    """Like rules.opposed but also returns the attacker's degree."""
    da, ra = check(ta, rng); db, rb = check(tb, rng)
    if da < STD and db < STD: return "both_fail", da
    if da != db: return ("A" if da > db else "B"), da
    ma, mb = clamp(ta) - ra, clamp(tb) - rb
    if ma == mb: return "tie", da
    return ("A" if ma > mb else "B"), da


def sev_abs(loss, hmax):
    return severity(loss)


def sev_scaled(loss, hmax):
    if loss <= 0: return None
    if loss * 5 < hmax: return "minor"
    if loss * 2 < hmax: return "moderate"
    if loss * 4 < hmax * 3: return "severe"
    return "critical"


OPTIONS = {
    # name: (evasion fraction, attack bonus, severity fn, unstable severities)
    "Baseline (rules as written)": (1.0, 0, sev_abs, ("severe", "critical")),
    "1: evasion = 1/2 DEX": (0.5, 0, sev_abs, ("severe", "critical")),
    "1 alt: evasion = 2/3 DEX": (2 / 3, 0, sev_abs, ("severe", "critical")),
    "2: attack baseline +10": (1.0, 10, sev_abs, ("severe", "critical")),
    "2: attack baseline +20": (1.0, 20, sev_abs, ("severe", "critical")),
    "3a: severity scaled to max HP": (1.0, 0, sev_scaled, ("severe", "critical")),
    "3b: only critical hit makes dying": (1.0, 0, sev_abs, ("critical",)),
    "1 + 3a": (0.5, 0, sev_scaled, ("severe", "critical")),
    "1 + 3b": (0.5, 0, sev_abs, ("critical",)),
    "2(+20) + 3a": (1.0, 20, sev_scaled, ("severe", "critical")),
    "2(+20) + 3b": (1.0, 20, sev_abs, ("critical",)),
    "1 + 2(+10)": (0.5, 10, sev_abs, ("severe", "critical")),
    "1 + 2(+10) + 3b": (0.5, 10, sev_abs, ("critical",)),
    "1 + 2(+10) + 3a + 3b": (0.5, 10, sev_scaled, ("critical",)),
}


def defense_target(dfn, melee, frac):
    ev = int(dfn["dex"] * frac)
    if melee:
        return max(ev, dfn["cc"])
    return ev


def duel(a, b, opt, max_rounds=80):
    frac, bonus, sevfn, unst_set = opt
    hp = {"a": a["hp"], "b": b["hp"]}
    down = {"a": False, "b": False}; unstable = {"a": False, "b": False}
    order = ["a", "b"] if a["init"] >= b["init"] else ["b", "a"]
    side = {"a": a, "b": b}; other = {"a": "b", "b": "a"}
    for rnd in range(1, max_rounds + 1):
        for s in order:
            o = other[s]
            if down[s] or down[o]: continue
            att, dfn = side[s], side[o]
            at = att["att"] + bonus
            if dfn["defend"]:
                res, d = opposed_deg(at, defense_target(dfn, att["melee"], frac))
                if res != "A": continue
            else:
                d, _ = check(at, rng)
                if d < STD: continue
            loss = harm(att["die"], d, dfn["armor"], rng)
            if loss <= 0: continue
            hp[o] = max(0, hp[o] - loss)
            if hp[o] == 0:
                down[o] = True
                unstable[o] = sevfn(loss, dfn["hp"]) in unst_set
        if down["a"] or down["b"]:
            return ("b" if down["a"] else "a"), rnd, unstable
    return None, max_rounds, unstable


def p_death_helper(medic=30, trials=N):
    """Unstable character, helper starts the round after the drop (same model as PR 6)."""
    dead = 0
    for _ in range(trials):
        boxes = 0
        while True:
            d, _ = check(medic, rng)
            if d >= STD: break
            if d == CFAIL: boxes += 1
            if boxes >= 3: dead += 1; break
            boxes += 1
            if boxes >= 3: dead += 1; break
    return dead / trials


def pc(name, weapon):
    p = P[name]; a = p["a"]; dv = derived(a)
    skill = "Firearms" if weapon == "gun" else "CloseCombat"
    return dict(att=p["s"][skill], dex=a["DEX"], cc=p["s"]["CloseCombat"], hp=dv["H"], init=dv["I"],
                die=8 if weapon == "gun" else 6, armor=0, defend=True, melee=(weapon != "gun"))


RAIDER = dict(att=35, dex=55, cc=35, hp=11, init=52, die=6, armor=1, defend=True, melee=True)
NOVICE = dict(att=15, dex=55, cc=15, hp=11, init=52, die=6, armor=1, defend=True, melee=True)
SCEN = [
    ("Tomas, handgun (Firearms 30, D8) vs competent raider (CC 35, D6 club, armor 1)", pc("Tomas", "gun"), RAIDER),
    ("Priya, wrench (CC 27, D6) vs competent raider", pc("Priya", "club"), RAIDER),
    ("Marcus, club (CC 25, D6, HP 8) vs competent raider", pc("Marcus", "club"), RAIDER),
    ("Elena unarmed (CC 25, D4) vs novice raider (CC 15, D6, armor 1)", dict(pc("Elena", "club"), die=4), NOVICE),
    ("Expert vs expert: CC 70, D8, HP 10, DEX 50", dict(att=70, dex=50, cc=70, hp=10, init=52, die=8, armor=0, defend=True, melee=True),
     dict(att=70, dex=50, cc=70, hp=10, init=50, die=8, armor=0, defend=True, melee=True)),
    ("Skill gap: CC 60 (DEX 50) vs CC 30 (DEX 50), D6, HP 10", dict(att=60, dex=50, cc=60, hp=10, init=50, die=6, armor=0, defend=True, melee=True),
     dict(att=30, dex=50, cc=30, hp=10, init=50, die=6, armor=0, defend=True, melee=True)),
]

pdh = p_death_helper()
print(f"Helper with Medicine 30 starting the next round loses an unstable patient {100*pdh:.1f}% of the time (used below).\n")

print("## Hit chance per attack vs an aware defender (DEX 55, Close Combat 35 if melee)\n")
print("| Option | Ranged, attack 22 | Ranged, attack 30 | Melee, attack 25 | Melee, attack 35 | Melee, attack 70 |")
print("|---|---:|---:|---:|---:|---:|")
dfn = dict(dex=55, cc=35)
for name, opt in OPTIONS.items():
    if "3" in name and not name.startswith("1 alt"): continue
    frac, bonus = opt[0], opt[1]
    row = []
    for at, melee in [(22, False), (30, False), (25, True), (35, True), (70, True)]:
        dt = defense_target(dfn, melee, frac)
        h = sum(opposed_deg(at + bonus, dt)[0] == "A" for _ in range(N))
        row.append(f"{100*h/N:.0f}%")
    print(f"| {name} | " + " | ".join(row) + " |")

print("\n## Single landed hit: chance it is severe or worse (target HP 10, attack 50, no armor)\n")
print("| Option | D4 punch | D6 club | D8 handgun | D4 vs HP 16 | D8 vs HP 16 |")
print("|---|---:|---:|---:|---:|---:|")
for name, fn in [("Rules as written / options 1, 2, 3b", sev_abs), ("3a: scaled to max HP", sev_scaled)]:
    row = []
    for die, hmax in [(4, 10), (6, 10), (8, 10), (4, 16), (8, 16)]:
        n = s = 0
        while n < N:
            d, _ = check(50, rng)
            if d < STD: continue
            n += 1
            if fn(harm(die, d, 0, rng), hmax) in ("severe", "critical"): s += 1
        row.append(f"{100*s/N:.0f}%")
    print(f"| {name} | " + " | ".join(row) + " |")

print("\n## Duels, 20k runs per cell: median rounds to knockdown / % of knockdowns left dying / % of fights ending in a death*\n")
print("*death assumes the loser's side has an untrained helper (Medicine 30) who starts the next round.\n")
for sname, a, b in SCEN:
    print(f"### {sname}\n")
    print("| Option | A wins | Median rounds | Mean rounds | Knockdowns dying | Fights ending in death |")
    print("|---|---:|---:|---:|---:|---:|")
    for name, opt in OPTIONS.items():
        wins = 0; rounds = []; unst = 0; done = 0
        for _ in range(N):
            w, r, u = duel(a, b, opt)
            rounds.append(r)
            if w:
                done += 1
                if w == "a": wins += 1
                if u["b" if w == "a" else "a"]: unst += 1
        rounds.sort()
        dying = unst / max(1, done)
        print(f"| {name} | {100*wins/N:.0f}% | {rounds[N//2]} | {sum(rounds)/N:.1f} | {100*dying:.0f}% | {100*dying*pdh:.0f}% |")
    print()
