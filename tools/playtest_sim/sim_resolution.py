"""1. Success rates: every pregen's best and typical skills across the R03 ladder (exact, not sampled)."""
from rules import DIFF, clamp
from pregens import P
print("## Exact success % (target = skill + competency bonus + difficulty, clamped 1-99)\n")
cols = ["easy", "favorable", "standard", "challenging", "difficult", "severe", "extreme"]
print("| Character | Task | Base target | " + " | ".join(cols) + " |")
print("|---|---|---:|" + "---:|" * len(cols))
rows = []
for n, c in P.items():
    best = max(c["s"], key=lambda k: c["s"][k] + c["comp"].get(k, 0))
    for sk in [best, "Search", "Firearms", "Stealth", "Survival"]:
        t = c["s"][sk] + c["comp"].get(sk, 0)
        rows.append((n, sk, t))
seen = set()
for n, sk, t in rows:
    if (n, sk) in seen: continue
    seen.add((n, sk))
    print(f"| {n} | {sk} | {t} | " + " | ".join(str(clamp(t + DIFF[d])) for d in cols) + " |")
# party-level: chance at least one of six succeeds on Search at difficult
import math
print()
for d in ["standard", "difficult", "extreme"]:
    pf = 1
    for n, c in P.items():
        pf *= 1 - clamp(c["s"]["Search"] + c["comp"].get("Search", 0) + DIFF[d]) / 100
    print(f"- Party of six, everyone rolls Search at {d}: P(at least one success) = {100*(1-pf):.1f}%")
# R01 attribute vs skill gap
print("\n## Raw attribute (R01) vs untrained skill for the same pregen\n")
for n, c in P.items():
    a = c["a"]
    print(f"- {n}: DEX check {a['DEX']} vs Firearms {c['s']['Firearms']} / Stealth {c['s']['Stealth']}; "
          f"CON check {a['CON']} vs Endurance {c['s']['Endurance']}; PER check {a['PER']} vs Search {c['s']['Search']}")
