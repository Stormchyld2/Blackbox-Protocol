"""2. Combat, harm, dying and stabilization (Sections 4.1-4.3), Monte Carlo.
Readings used (see report): defender always spends reaction to defend vs the first attack each round
(DEX evasion, full attribute per 4.1/R01); attacker hits only on 'A' win; a defended tie = no hit.
Unstable at 0 HP if the depleting hit was severe/critical (4.3); 3 boxes, mark one per subsequent round end.
One stabilization attempt per round by a helper (main action)."""
import random
from rules import check, opposed, harm, severity, STD, CFAIL, clamp
N = 40000
rng = random.Random(2026)

def hit_prob(att, dfn, defended):
    h = 0
    for _ in range(N):
        if defended:
            if opposed(att, dfn, rng) == "A": h += 1
        else:
            d, _ = check(att, rng)
            if d >= STD: h += 1
    return 100 * h / N

print("## Hit chance per attack\n")
print("| Attack target | No defense | vs DEX 45 | vs DEX 55 | vs DEX 65 |")
print("|---:|---:|---:|---:|---:|")
for at in [22, 30, 35, 50, 55, 70]:
    print(f"| {at} | {hit_prob(at,0,False):.1f} | {hit_prob(at,45,True):.1f} | {hit_prob(at,55,True):.1f} | {hit_prob(at,65,True):.1f} |")

def one_hit_loss(die, armor, att):
    """Distribution of HP loss given the attack succeeded (degree drawn conditional on success)."""
    out = {}
    n = 0
    while n < N:
        d, _ = check(att, rng)
        if d < STD: continue
        n += 1
        l = harm(die, d, armor, rng)
        out[l] = out.get(l, 0) + 1
    return {k: v / N for k, v in sorted(out.items())}

print("\n## Single successful hit: HP loss and injury severity (attack target 50)\n")
print("| Harm die | Armor | Mean loss | P(no loss) | P(severe+) | P(critical) | P(drops HP 8) | P(drops HP 12) |")
print("|---|---:|---:|---:|---:|---:|---:|---:|")
for die in [4, 6, 8, 10]:
    for armor in [0, 1, 2, 3]:
        dist = one_hit_loss(die, armor, 50)
        mean = sum(k * v for k, v in dist.items())
        p0 = dist.get(0, 0); sev = sum(v for k, v in dist.items() if k >= 4); crit = sum(v for k, v in dist.items() if k >= 7)
        d8 = sum(v for k, v in dist.items() if k >= 8); d12 = sum(v for k, v in dist.items() if k >= 12)
        print(f"| D{die} | {armor} | {mean:.2f} | {100*p0:.0f}% | {100*sev:.0f}% | {100*crit:.0f}% | {100*d8:.1f}% | {100*d12:.1f}% |")

def duel(a, b, medic_a=None, max_rounds=60):
    """a,b dicts: att, dex, hp, die, armor, defend(bool). Simultaneous-ish: higher init first.
    Returns (winner, rounds, a_dead, b_dead)."""
    hp = {"a": a["hp"], "b": b["hp"]}
    unstable = {"a": False, "b": False}; boxes = {"a": 0, "b": 0}; down = {"a": False, "b": False}
    order = ["a", "b"] if a["init"] >= b["init"] else ["b", "a"]
    side = {"a": a, "b": b}; other = {"a": "b", "b": "a"}
    for rnd in range(1, max_rounds + 1):
        newly = set()
        for s in order:
            if down[s]: continue
            o = other[s]
            if down[o]: continue
            att, dfn = side[s], side[o]
            if dfn["defend"]:
                res = opposed(att["att"], dfn["dex"], rng)
                if res != "A": continue
                # degree of the attacker's roll is needed for harm; re-roll conditional degree approx:
                while True:
                    d, _ = check(att["att"], rng)
                    if d >= STD: break
            else:
                d, _ = check(att["att"], rng)
                if d < STD: continue
            loss = harm(att["die"], d, dfn["armor"], rng)
            if loss <= 0: continue
            hp[o] = max(0, hp[o] - loss)
            if hp[o] == 0:
                down[o] = True; newly.add(o)
                unstable[o] = severity(loss) in ("severe", "critical")
        # end of round: deterioration for those unstable from a previous round
        for s in ("a", "b"):
            if down[s] and unstable[s] and s not in newly:
                boxes[s] += 1
        if down["a"] or down["b"]:
            return ("b" if down["a"] else "a"), rnd, unstable, hp
    return None, max_rounds, unstable, hp

def dying_outcome(medic_target, rounds_to_reach, rng):
    """Unstable character: helper arrives after rounds_to_reach rounds then rolls Medicine each round.
    Returns True if dies."""
    boxes = 0
    # boxes marked at end of each subsequent round (round 1 after drop is the first mark)
    for r in range(1, 50):
        if r > rounds_to_reach and medic_target is not None:
            d, _ = check(medic_target, rng)
            if d >= STD: return False
            if d == CFAIL: boxes += 1
            if boxes >= 3: return True
        boxes += 1
        if boxes >= 3: return True
    return True

print("\n## Duels (first to 0 HP), 40k runs each\n")
print("| Matchup | A wins % | Median rounds | Loser unstable (dying) % |")
print("|---|---:|---:|---:|")
scen = [
 ("Pregen Tomas (Firearms 30, handgun D8, HP10, DEX60) vs competent raider (CC 35, D6 club, HP11, armor 1, DEX55); both defend", 
  dict(att=30, dex=60, hp=10, die=8, armor=0, defend=True, init=55), dict(att=35, dex=55, hp=11, die=6, armor=1, defend=True, init=52)),
 ("Same, nobody defends",
  dict(att=30, dex=60, hp=10, die=8, armor=0, defend=False, init=55), dict(att=35, dex=55, hp=11, die=6, armor=1, defend=False, init=52)),
 ("Expert vs expert: target 70, D8, HP10, DEX 50, both defend",
  dict(att=70, dex=50, hp=10, die=8, armor=0, defend=True, init=52), dict(att=70, dex=50, hp=10, die=8, armor=0, defend=True, init=50)),
 ("Elena unarmed (CC 25, D4, HP12, DEX50) vs novice raider (CC 15 listed, D6, HP11, armor 1)",
  dict(att=25, dex=50, hp=12, die=4, armor=0, defend=True, init=50), dict(att=15, dex=55, hp=11, die=6, armor=1, defend=True, init=52)),
]
for name, a, b in scen:
    wins = 0; rounds = []; unst = 0; n = 20000
    for _ in range(n):
        w, r, u, hp = duel(a, b)
        if w == "a": wins += 1
        rounds.append(r)
        loser = "b" if w == "a" else "a"
        if w and u[loser]: unst += 1
    rounds.sort()
    print(f"| {name} | {100*wins/n:.1f} | {rounds[n//2]} | {100*unst/n:.1f} |")

print("\n## Dying: P(death) for an unstable character (3 boxes, one per round end)\n")
print("| Helper Medicine target | Helper starts next round | Helper 1 round late | Helper 2 rounds late |")
print("|---:|---:|---:|---:|")
for mt in [None, 22, 32, 57, 67, 72]:
    row = []
    for late in [0, 1, 2]:
        dead = sum(dying_outcome(mt, late, rng) for _ in range(N))
        row.append(f"{100*dead/N:.1f}%")
    print(f"| {mt if mt else 'none'} | " + " | ".join(row) + " |")

print("\n## Nonlethal strain vs Stamina (4.2): successful hits needed to exhaust\n")
for die in [4, 6]:
    for S in [47, 50, 57]:
        hits = []
        for _ in range(N):
            s, h = S, 0
            while s > 0:
                d, _ = check(50, rng)
                if d < STD: continue
                s -= harm(die, d, 0, rng); h += 1
            hits.append(h)
        hits.sort()
        print(f"- D{die} strain vs Stamina {S}: median {hits[N//2]} successful hits (~{hits[N//2]*2} rounds at a 50% hit rate); compare HP 8-12 lethal")
