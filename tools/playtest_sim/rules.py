"""Core rules as written in the repo (DESIGN-NOTES R01-R06, Sections 3.4, 4.1-4.4, 7.3, 7.4,
CCDD-12/19/20, 5.1-5.6). Where the text is ambiguous the chosen reading is named in a comment
and listed in the findings report. Nothing here is a proposed rule."""
import random

CRIT, EXC, STRONG, STD, FAIL, CFAIL = 5, 4, 3, 2, 1, 0
NAMES = {CRIT: "critical", EXC: "exceptional", STRONG: "strong", STD: "standard", FAIL: "failure", CFAIL: "critical failure"}
DIFF = {"very easy": 30, "easy": 20, "favorable": 10, "standard": 0, "challenging": -10,
        "difficult": -20, "severe": -30, "extreme": -40}

def clamp(t):
    return max(1, min(99, t))

def degree(roll, t):
    t = clamp(t)
    if roll == 1: return CRIT
    if roll == 100: return CFAIL
    if roll > t: return FAIL
    if roll <= t // 5: return EXC
    if roll <= t // 2: return STRONG
    return STD

def check(t, rng):
    r = rng.randint(1, 100)
    return degree(r, t), r

def opposed(ta, tb, rng):
    """Returns 'A', 'B', 'tie', 'both_fail'. Category first then margin (target-roll)."""
    da, ra = check(ta, rng); db, rb = check(tb, rng)
    sa, sb = da >= STD, db >= STD
    if not sa and not sb: return "both_fail"
    if da != db: return "A" if da > db else "B"
    ma, mb = clamp(ta) - ra, clamp(tb) - rb
    if ma == mb: return "tie"
    return "A" if ma > mb else "B"

# --- Section 3.4 derived ---
def derived(a):
    return dict(H=max(1, (a["STR"] + a["CON"]) // 10), S=(a["CON"] + a["WIL"]) // 2,
                P=(a["WIL"] + a["CON"]) // 2, I=(a["DEX"] + a["PER"]) // 2,
                M=(a["STR"] + a["DEX"] + a["CON"]) // 3, R=(2 * a["CON"] + a["WIL"]) // 3)

# --- Section 4.2 harm ---
DEGREE_BONUS = {STD: 0, STRONG: 1, EXC: 2, CRIT: 3}
def harm(die, deg, armor, rng, environmental=False):
    rolled = rng.randint(1, die) + (0 if environmental else DEGREE_BONUS[deg])
    return max(0, rolled - armor)

def severity(loss):
    if loss <= 0: return None
    if loss == 1: return "minor"
    if loss <= 3: return "moderate"
    if loss <= 6: return "severe"
    return "critical"

# --- Section 4.4 stress ---
def stress_bands(P):
    import math
    return dict(strained=max(1, math.ceil(P / 2)), pressured=max(1, P), overwhelmed=min(100, P + 25))

def stress_band(stress, P):
    b = stress_bands(P)
    if stress >= b["overwhelmed"]: return "overwhelmed", -20
    if stress >= b["pressured"]: return "pressured", -10
    if stress >= b["strained"]: return "strained", -5
    return "composed", 0

def pressure_event(stress, wil, intensity, rng):
    d, _ = check(wil, rng)
    if d >= STRONG: add = 0
    elif d == STD: add = intensity // 2
    elif d == FAIL: add = intensity
    else: add = intensity + 5
    return min(100, stress + add), d

# --- CCDD-12/19/20 ---
H_C = {1: 4, 2: 8, 3: 16, 4: 40, 5: 80, 6: 160, 7: 320}
def Q(l): return 0 if l == 0 else 2 ** l - 1
def M(l): return 0 if l == 0 else 2 ** (l - 1)
def B(l): return 5 * max(0, l - 1)
THRESH = [(400000, 6), (200000, 5), (100000, 4), (50000, 3), (25000, 2), (10000, 1), (0, 0)]
def extra_slots(cdr): return next(k for t, k in THRESH if cdr >= t)
ELIG = {1: [0, 100, 500, 1500, 3000], 2: [0, 200, 1000, 3000, 6000], 3: [0, 500, 2500, 7500, 15000],
        4: [0, 1000, 5000, 15000, 30000], 5: [2500, 5000, 10000, 30000, 60000],
        6: [5000, 10000, 25000, 60000, 120000], 7: [10000, 25000, 50000, 120000, 250000]}
def cdr(comps): return sum(100 * c * Q(l) for c, l in comps)
def inc_hours(c, target): return H_C[c] * 2 ** (target - 1)
