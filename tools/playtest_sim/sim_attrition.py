"""3. Stress (4.4), deprivation (7.3), recovery (3.4/4.3), stamina interaction."""
import random, statistics as st
from rules import pressure_event, stress_band, stress_bands, check, STD, STRONG
rng = random.Random(7)
N = 20000

print("## Stress: one investigation session (Zero Day shape) and a hard Signal Lost week\n")
print("Bands for P=50: strained 25, pressured 50, overwhelmed 75.\n")
def session(wil, P, events):
    s = 0; worst = "composed"
    order = ["composed", "strained", "pressured", "overwhelmed"]
    for ev in events:
        if ev == "hour": s = max(0, s - 5); continue
        if ev == "sleep": s = max(0, s - 20); continue
        s, _ = pressure_event(s, wil, ev, rng)
        b, _ = stress_band(s, P)
        if order.index(b) > order.index(worst): worst = b
    return s, worst
zero_day = [5, 10, "hour", 10, 20, 10]  # missing person, intimidation, quiet hour, hazard at radio site, injury witnessed
sl_week = ([10, 20, 10, "sleep"] * 7)
sl_week_nosleep = ([10, 20, 10] * 3)
for label, ev in [("Zero Day session (5 events, 1 quiet hour)", zero_day),
                  ("Signal Lost week: 3 events/day incl. one high, sleep nightly", sl_week),
                  ("Three bad days, no adequate sleep (severely deprived)", sl_week_nosleep)]:
    for wil, P, who in [(50, 47, "Marcus WIL50 P47"), (60, 55, "Samuel WIL60 P55")]:
        res = [session(wil, P, ev) for _ in range(N)]
        ends = [r[0] for r in res]
        worst = {}
        for r in res: worst[r[1]] = worst.get(r[1], 0) + 1
        print(f"- {label}, {who}: mean end stress {st.mean(ends):.1f}; worst band reached " +
              ", ".join(f"{k} {100*v/N:.0f}%" for k, v in sorted(worst.items(), key=lambda x: -x[1])))

print("\n## Deprivation counters (7.3)\n")
def deprivation(pattern_water, pattern_food, days, S=50, sleep_restores=True):
    """pattern: function(day)->'met'|'half'|'unmet'. Stamina loss per unmet category at daily review;
    reading A: 8h sleep restores remaining stamina unless severely deprived."""
    wc = fc = 0; stamina = S; log = []
    for d in range(1, days + 1):
        loss = 0
        for cat, pat in (("w", pattern_water), ("f", pattern_food)):
            v = pat(d)
            if v == "met":
                if cat == "w": wc = max(0, wc - 1)
                else: fc = max(0, fc - 1)
            else:
                loss += 5 if v == "unmet" else 2
                if cat == "w": wc += 1
                else: fc += 1
        stamina = max(0, stamina - min(loss, stamina))
        cond = "ok"
        if wc >= 5 or fc >= 21: cond = "CRITICAL"
        elif wc >= 3 or fc >= 7: cond = "severe"
        elif wc >= 2 or fc >= 4: cond = "deprived"
        if sleep_restores and cond not in ("severe", "CRITICAL"):
            stamina = S
        log.append((d, wc, fc, stamina, cond))
    return log
cases = {
 "No water at all": (lambda d: "unmet", lambda d: "met", 7),
 "No food at all": (lambda d: "met", lambda d: "unmet", 25),
 "Water every other day": (lambda d: "met" if d % 2 == 0 else "unmet", lambda d: "met", 30),
 "Half rations of both, indefinitely": (lambda d: "half", lambda d: "half", 25),
 "Food on 1 day in 3": (lambda d: "met" if d % 3 == 0 else "unmet", lambda d: "met", 30),
}
for name, (pw, pf, days) in cases.items():
    log = deprivation(pw, pf, days)
    first = {}
    for d, wc, fc, s, c in log:
        first.setdefault(c, d)
    stam = [s for *_, s, c in log]
    print(f"- {name}: first day deprived {first.get('deprived','never')}, severe {first.get('severe','never')}, "
          f"critical {first.get('CRITICAL','never')}; stamina at end of each day (sleep reading A): {stam[:10]}{'...' if len(stam)>10 else ''}")
# food every 3rd day, swap
log = deprivation(lambda d: "met", lambda d: "met" if d % 2 == 0 else "unmet", 60)
print(f"- Food every other day for 60 days: max food counter {max(l[2] for l in log)} -> never deprived")

print("\n## Recovery from 0 HP (4.3): days to full HP and to clear the injury\n")
def recover(H, R, sev, med_target, rng):
    hp = 0; day = 0
    rate = 2 if R >= 60 else 1
    while hp < H:
        day += 1
        bonus = 0
        if med_target:
            d, _ = check(med_target, rng)
            if d >= STRONG: bonus = 1
        hp = min(H, hp + min(3, rate + bonus))
    clear = {"minor": 1, "moderate": 3, "severe": 7, "critical": 14}[sev]
    return day, clear
for who, H, R in [("Marcus", 8, 46), ("Elena", 12, 58), ("Priya", 11, 51)]:
    for med in [None, 72]:
        days = [recover(H, R, "severe", med, rng)[0] for _ in range(5000)]
        print(f"- {who} (HP {H}, R {R} -> {2 if R>=60 else 1}/day), care {'Samuel Medicine 72' if med else 'none'}: median {sorted(days)[2500]} days to full HP; severe injury clearance minimum 7 days")
print("- R >= 60 needs (2xCON+WIL)/3 >= 60, e.g. CON 65 WIL 50 or CON 60 WIL 60. None of the six pregens or the 12 NPC archetypes reach it (max Elena 58).")
