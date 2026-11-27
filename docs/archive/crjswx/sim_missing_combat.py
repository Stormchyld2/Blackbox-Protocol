"""Draft combat subsystems (notes/COMBAT-SUBSYSTEMS-DRAFT.md): grappling, chases, reloading, rapid fire,
falling and poison. Monte Carlo checks of the draft procedures and their options. Not rules.

Shared assumptions (same as sim_balance.py, PR 7 approved wording):
  * evasion = floor(DEX/2); melee defenders use the better of evasion and Close Combat
  * harm uses the attacker's actual degree; armor subtracts once; severity bands 1 / 2-3 / 4-6 / 7+
  * unstable at 0 HP only if the depleting loss was critical (7+), or a declared life-threatening condition
  * an untrained helper (Medicine 30) starts stabilising the round after the drop
Fixed seed; all figures provisional."""
import random
from rules import check, harm, severity, STD, STRONG, CFAIL, CRIT, FAIL, clamp, derived
from pregens import P

N = 20000
rng = random.Random(2028)


def opposed_deg(ta, tb):
    da, ra = check(ta, rng); db, rb = check(tb, rng)
    if da < STD and db < STD: return "both_fail", da
    if da != db: return ("A" if da > db else "B"), da
    ma, mb = clamp(ta) - ra, clamp(tb) - rb
    if ma == mb: return "tie", da
    return ("A" if ma > mb else "B"), da


def p_death_helper(medic=30, trials=N):
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


PDH = p_death_helper()


def pct(x): return f"{100*x:.0f}%"


def med(v):
    v = sorted(v); return v[len(v)//2]


def pc(name):
    p = P[name]; a = p["a"]; dv = derived(a)
    return dict(name=name, cc=p["s"]["CloseCombat"], fa=p["s"]["Firearms"], ath=p["s"]["Athletics"], dex=a["DEX"],
                str=a["STR"], con=a["CON"], hp=dv["H"], init=dv["I"], M=dv["M"], S=dv["S"], armor=0)


RAIDER = dict(name="raider", cc=35, fa=35, ath=35, dex=55, str=55, con=55, hp=11, init=52, M=55, S=50, armor=1)

print("# Draft combat subsystems — simulation output\n")
print(f"Untrained helper (Medicine 30) starting the next round loses an unstable patient {PDH*100:.1f}% of the time.\n")

# ---------------------------------------------------------------------------------------------- 1 GRAPPLING
print("## 1. Grappling\n")
print("Grab: Close Combat vs defender's best of Close Combat or floor(DEX/2). Held: no movement, no evasion "
      "(Close Combat defense only), held penalty on tasks other than escape. Escape: main action, best of Close Combat "
      "or Athletics vs holder's Close Combat; tie keeps the hold (status quo).\n")


def grab_chance(att, dfn):
    dt = max(dfn["cc"], dfn["dex"] // 2)
    return sum(opposed_deg(att, dt)[0] == "A" for _ in range(N)) / N


def escape_chance(esc, hold, mod=0):
    return sum(opposed_deg(esc + mod, hold)[0] == "A" for _ in range(N)) / N


print("| Situation | Chance per attempt |")
print("|---|---:|")
for nm in ["Dana", "Elena", "Tomas"]:
    p = pc(nm)
    print(f"| Raider (CC 35) grabs {nm} (CC {p['cc']}, DEX {p['dex']}) | {pct(grab_chance(35, p))} |")
for nm in ["Dana", "Elena", "Tomas"]:
    p = pc(nm)
    e = max(p["cc"], p["ath"])
    print(f"| {nm} escapes raider's hold (best {e} vs 35) | {pct(escape_chance(e, 35))} |")
    print(f"| {nm} escapes when restrained (−20) | {pct(escape_chance(e, 35, -20))} |")
print(f"| Expert holder: 30 vs 60 | {pct(escape_chance(30, 60))} |")
print()


def grapple_fight(att, dfn, held_pen, mode, max_rounds=80):
    """att grapples (mode 'grapple') or strikes (mode 'strike') with D4 unarmed; dfn strikes back with D4 unarmed.
    Returns rounds to knockdown of either side, winner, unstable flag."""
    hp = {"a": att["hp"], "d": dfn["hp"]}
    held = False
    order = ["a", "d"] if att["init"] >= dfn["init"] else ["d", "a"]
    for rnd in range(1, max_rounds + 1):
        for s in order:
            if hp["a"] == 0 or hp["d"] == 0: break
            if s == "a":
                if mode == "grapple" and not held:
                    if opposed_deg(att["cc"], max(dfn["cc"], dfn["dex"] // 2))[0] == "A": held = True
                    continue
                dt = (dfn["cc"] - held_pen) if held else max(dfn["cc"], dfn["dex"] // 2)
                res, d = opposed_deg(att["cc"], dt)
                if res != "A": continue
                loss = harm(4, d, dfn["armor"], rng)
                hp["d"] = max(0, hp["d"] - loss)
                if hp["d"] == 0: return rnd, "a", severity(loss) == "critical"
            else:
                if held:
                    e = max(dfn["cc"], dfn["ath"])
                    if opposed_deg(e, att["cc"])[0] == "A": held = False
                    continue
                res, d = opposed_deg(dfn["cc"], max(att["cc"], att["dex"] // 2))
                if res != "A": continue
                loss = harm(4, d, att["armor"], rng)
                hp["a"] = max(0, hp["a"] - loss)
                if hp["a"] == 0: return rnd, "d", severity(loss) == "critical"
    return max_rounds, None, False


print("### Unarmed fight, raider (CC 35, HP 11, armor 1) against a pregen, both using D4\n")
print("In 'grapple' the raider grabs first, then strikes the held target, who spends each turn trying to escape. "
      "Held penalty applies to the held character's Close Combat defense.\n")
print("| Pregen | Raider tactic | Held penalty | Raider wins | Median rounds | Knockdowns dying |")
print("|---|---|---:|---:|---:|---:|")
for nm in ["Dana", "Tomas"]:
    p = pc(nm)
    for mode, pen in [("strike", 0), ("grapple", 0), ("grapple", 10), ("grapple", 20)]:
        rs = []; w = 0; u = 0
        for _ in range(N):
            r, win, un = grapple_fight(RAIDER, p, pen, mode)
            rs.append(r); w += (win == "a"); u += un
        print(f"| {nm} | {mode} | {('−' + str(pen)) if pen else '0'} | {pct(w/N)} | {med(rs)} | {pct(u/max(1,N))} |")
print()

print("### Capture: rounds until the raider has the pregen restrained (grab, then a second win while holding)\n")
print("Restrained: no reactions; escape at −20. The pregen tries to escape every turn. 'Held, no reaction' variant: "
      "the held character cannot react to the holder at all, so the restrain check is an ordinary Close Combat check.\n")


def capture(att, dfn, held_react=True, max_rounds=60):
    state = 0  # 0 free, 1 held, 2 restrained
    order = ["a", "d"] if att["init"] >= dfn["init"] else ["d", "a"]
    for rnd in range(1, max_rounds + 1):
        for s in order:
            if s == "a":
                if state == 0:
                    if opposed_deg(att["cc"], max(dfn["cc"], dfn["dex"] // 2))[0] == "A": state = 1
                elif state == 1:
                    if held_react:
                        ok = opposed_deg(att["cc"], dfn["cc"])[0] == "A"
                    else:
                        ok = check(att["cc"], rng)[0] >= STD
                    if ok: state = 2
                if state == 2: return rnd
            else:
                e = max(dfn["cc"], dfn["ath"])
                if state == 1 and opposed_deg(e, att["cc"])[0] == "A": state = 0
    return max_rounds


print("| Pregen | Held may react with Close Combat | Median rounds to restrained | 90th pct | Restrained within 5 rounds |")
print("|---|---|---:|---:|---:|")
for nm in ["Dana", "Elena", "Tomas"]:
    p = pc(nm)
    for hr in (True, False):
        rs = [capture(RAIDER, p, hr) for _ in range(N)]
        rs.sort()
        print(f"| {nm} | {'yes' if hr else 'no'} | {rs[N//2]} | {rs[int(N*.9)]} | {pct(sum(r <= 5 for r in rs)/N)} |")
print()

# ---------------------------------------------------------------------------------------------- 2 CHASES
print("## 2. Chases\n")
print("Bands engaged 0 / near 1 / far 2 / out of reach 3. Each leg one opposed check (Athletics on foot). "
      "Quarry wins: one band further; pursuer wins: one band closer; tie or both fail: no change. "
      "Reaching engaged = caught; reaching out of reach = escaped. Speed modifier: the side with the higher movement "
      "index gets the listed modifier.\n")


def chase(q, pu, start=1, speed_rule="none", stamina=False, max_legs=40):
    band = start
    qs, ps = q["S"], pu["S"]
    mod = 0
    gap = q["M"] - pu["M"]
    if speed_rule == "step10":
        mod = 10 if gap >= 10 else (-10 if gap <= -10 else 0)
    elif speed_rule == "step10_20":
        mod = (20 if gap >= 20 else 10 if gap >= 10 else -20 if gap <= -20 else -10 if gap <= -10 else 0)
    for leg in range(1, max_legs + 1):
        if stamina and leg > 3:
            qs -= 5; ps -= 5
            if qs <= 0: return "caught", leg
            if ps <= 0: return "escaped", leg
        res, _ = opposed_deg(q["ath"] + mod, pu["ath"])
        if res == "A": band += 1
        elif res == "B": band -= 1
        if band >= 3: return "escaped", leg
        if band <= 0: return "caught", leg
    return "stalemate", max_legs


QPAIRS = [
    ("Dana (Ath 22, M 46) flees raider (Ath 35, M 55)", dict(pc("Dana")), RAIDER),
    ("Elena (Ath 50, M 56) flees raider", dict(pc("Elena")), RAIDER),
    ("Equal: Ath 35 vs 35, M 50 vs 50", dict(ath=35, M=50, S=50), dict(ath=35, M=50, S=50)),
    ("Raider flees Priya (Ath 40, M 56)", RAIDER, dict(pc("Priya"))),
]
print("| Chase | Start | Speed rule | Stamina 5/leg from leg 4 | Quarry escapes | Median legs | 90th pct legs |")
print("|---|---|---|---|---:|---:|---:|")
for nm, q, pu in QPAIRS:
    for start, rule, sta in [(1, "none", False), (1, "step10", False), (1, "step10", True), (2, "step10", False)]:
        esc = 0; legs = []
        for _ in range(N):
            r, l = chase(q, pu, start, rule, sta)
            esc += r == "escaped"; legs.append(l)
        legs.sort()
        print(f"| {nm} | {'near' if start == 1 else 'far'} | {rule} | {'yes' if sta else 'no'} | {pct(esc/N)} | {legs[N//2]} | {legs[int(N*.9)]} |")
print()

# ---------------------------------------------------------------------------------------------- 3/4 RELOAD + RAPID FIRE
print("## 3–4. Reloading and rapid fire\n")
print("Shooter: Tomas, Firearms 30, D8, HP 10, DEX 60, against the competent raider (melee CC 35, D6, armor 1) "
      "who closes and fights in melee. Ranged attacks can only be evaded (floor(DEX/2)).\n")


def gunfight(cap, reload_cost, rapid=False, rapid_cost=3, rapid_bonus=10, max_rounds=80):
    """cap = loads before reload (None = unlimited, Standard mode). reload_cost: 'main' or 'move' (move = no attack lost).
    Returns rounds, winner, loads fired, reload actions."""
    t = pc("Tomas"); r = RAIDER
    hp_t, hp_r = t["hp"], r["hp"]; loads = cap; fired = 0; reloads = 0
    order = ["t", "r"] if t["init"] >= r["init"] else ["r", "t"]
    for rnd in range(1, max_rounds + 1):
        for s in order:
            if hp_t == 0 or hp_r == 0: break
            if s == "t":
                use = rapid_cost if rapid else 1
                if cap is not None and loads < use:
                    reloads += 1; loads = cap
                    if reload_cost == "main": continue
                if cap is not None: loads -= use
                fired += use
                res, d = opposed_deg(t["fa"] + (rapid_bonus if rapid else 0), r["dex"] // 2)
                if d == CFAIL and cap is not None:  # critical failure: weapon empty / stoppage
                    loads = 0
                if res != "A": continue
                loss = harm(8, d, r["armor"], rng)
                hp_r = max(0, hp_r - loss)
                if hp_r == 0: return rnd, "t", fired, reloads
            else:
                res, d = opposed_deg(r["cc"], max(t["cc"], t["dex"] // 2))
                if res != "A": continue
                hp_t = max(0, hp_t - harm(6, d, 0, rng))
                if hp_t == 0: return rnd, "r", fired, reloads
    return max_rounds, None, fired, reloads


print("| Rule | Tomas wins | Median rounds | Loads fired (median / 90th pct) | Reloads per fight (mean) |")
print("|---|---:|---:|---:|---:|")
for label, kw in [
    ("Standard: no reload tracking", dict(cap=None, reload_cost="main")),
    ("Advanced: capacity 6, reload = movement", dict(cap=6, reload_cost="move")),
    ("Advanced: capacity 6, reload = main action", dict(cap=6, reload_cost="main")),
    ("Advanced: capacity 3, reload = main action", dict(cap=3, reload_cost="main")),
    ("Advanced: capacity 1 (single-shot), reload = main action", dict(cap=1, reload_cost="main")),
    ("Rapid fire +10 for 3 loads, capacity 12, reload = movement", dict(cap=12, reload_cost="move", rapid=True)),
    ("Rapid fire +10 for 3 loads, capacity 12, reload = main", dict(cap=12, reload_cost="main", rapid=True)),
    ("Rapid fire +20 for 3 loads, capacity 12, reload = movement", dict(cap=12, reload_cost="move", rapid=True, rapid_bonus=20)),
]:
    rs = []; w = 0; f = []; rl = 0
    for _ in range(N):
        r, win, fired, reloads = gunfight(**kw)
        rs.append(r); w += win == "t"; f.append(fired); rl += reloads
    f.sort()
    print(f"| {label} | {pct(w/N)} | {med(rs)} | {f[N//2]} / {f[int(N*.9)]} | {rl/N:.1f} |")
print()

# ---------------------------------------------------------------------------------------------- 5 FALLING
print("## 5. Falling\n")
print("Environmental harm, no armor. Aware characters may make an Athletics check (target 35 here): success moves "
      "the fall one step down the table, critical failure one step up. 'Dying' = 0 HP from a critical (7+) loss, or "
      "any 0 HP on the top step (declared life-threatening). Death assumes the untrained helper.\n")
STEPS = [("under 2 m", 0, 0), ("2–4 m", 6, 0), ("4–8 m", 8, 0), ("8–12 m", 10, 0), ("12–20 m", 10, 2), ("over 20 m", 10, 3)]


LETHAL_TOP = False


def fall(step, hp, ath=35, roll_ath=True):
    s = step
    if roll_ath:
        d, _ = check(ath, rng)
        if d >= STD: s -= 1
        elif d == CFAIL: s += 1
    s = max(0, min(len(STEPS) - 1, s))
    _, die, bonus = STEPS[s]
    if die == 0: return 0, False, False
    loss = rng.randint(1, die) + bonus
    if LETHAL_TOP and s == len(STEPS) - 1: loss = max(loss, hp)
    down = loss >= hp
    dying = down and (severity(loss) == "critical" or s == len(STEPS) - 1)
    return loss, down, dying


print("| Height | Athletics | Mean HP loss | Severe or worse | HP 8 down | HP 12 down | HP 16 down | HP 12 dying | HP 12 death |")
print("|---|---|---:|---:|---:|---:|---:|---:|---:|")
for i, (lab, _, _) in enumerate(STEPS):
    if i == 0: continue
    for ra in (False, True):
        tot = sev = 0; d8 = d12 = d16 = dy12 = 0
        for _ in range(N):
            loss, _, _ = fall(i, 99, roll_ath=ra)
            tot += loss; sev += severity(loss) in ("severe", "critical")
            d8 += fall(i, 8, roll_ath=ra)[1]
            l, dn, dy = fall(i, 12, roll_ath=ra); d12 += dn; dy12 += dy
            d16 += fall(i, 16, roll_ath=ra)[1]
        print(f"| {lab} | {'35' if ra else 'none'} | {tot/N:.1f} | {pct(sev/N)} | {pct(d8/N)} | {pct(d12/N)} | {pct(d16/N)} | {pct(dy12/N)} | {pct(dy12/N*PDH)} |")
print()

print("Option B: over 20 m always reduces the character to 0 HP and is declared life-threatening (dying, not dead).\n")
LETHAL_TOP = True
for ra in (False, True):
    dy = sum(fall(5, 12, roll_ath=ra)[2] for _ in range(N)) / N
    print(f"- Over 20 m, Athletics {'35' if ra else 'none'}: HP 12 dying {pct(dy)}, death with untrained helper {pct(dy*PDH)}.")
LETHAL_TOP = False
print()

# ---------------------------------------------------------------------------------------------- 6 POISON
print("## 6. Poison and toxins\n")
print("Potency = hazard die. Each interval: CON check (R01). Strong or better: no harm this interval; standard: half "
      "(rounded down); failure: full; critical failure: full and one extra interval. Treatment: a Medicine check (one "
      "medical-supply use) after the first interval; success ends remaining intervals. 'Dying' = 0 HP from a critical "
      "(7+) interval, or any 0 HP when the GM declares the toxin life-threatening (extreme by default in this run).\n")
POT = [("low D4, 1 interval", 4, 1, False), ("moderate D6, 2 intervals", 6, 2, False), ("high D8, 3 intervals", 8, 3, False),
       ("extreme D10, 3 intervals", 10, 3, True)]


def poison(die, n, lt, hp, con=50, medic=None):
    total = 0; i = 0; left = n
    while left > 0:
        i += 1; left -= 1
        d, _ = check(con, rng)
        r = rng.randint(1, die)
        if d >= STRONG: loss = 0
        elif d == STD: loss = r // 2
        elif d == CFAIL: loss = r; left += 1
        else: loss = r
        total += loss
        if total >= hp:
            return total, True, (severity(loss) == "critical" or lt)
        if medic is not None and i == 1 and left > 0:
            md, _ = check(medic, rng)
            if md >= STD: break
    return total, False, False


print("| Potency | Treatment | Mean HP loss | Severe or worse total | HP 8 down | HP 12 down | HP 12 dying | HP 12 death |")
print("|---|---|---:|---:|---:|---:|---:|---:|")
for lab, die, n, lt in POT:
    for tlab, medic in [("none", None), ("Medicine 30", 30), ("Medicine 60", 60)]:
        tot = sev = d8 = d12 = dy = 0
        for _ in range(N):
            t, _, _ = poison(die, n, lt, 99, medic=medic); tot += t; sev += severity(t) in ("severe", "critical")
            d8 += poison(die, n, lt, 8, medic=medic)[1]
            _, dn, dyg = poison(die, n, lt, 12, medic=medic); d12 += dn; dy += dyg
        print(f"| {lab} | {tlab} | {tot/N:.1f} | {pct(sev/N)} | {pct(d8/N)} | {pct(d12/N)} | {pct(dy/N)} | {pct(dy/N*PDH)} |")
print()
print("### Alternative: halving rule vs plain pass/fail (success = no harm), moderate D6 × 2, CON 50, no treatment\n")
tot_h = tot_p = 0
for _ in range(N):
    tot_h += poison(6, 2, False, 99)[0]
    t = 0
    for _ in range(2):
        d, _ = check(50, rng)
        if d < STD: t += rng.randint(1, 6)
    tot_p += t
print(f"Halving (4.4-style): mean {tot_h/N:.2f} HP; plain pass/fail: mean {tot_p/N:.2f} HP.")
