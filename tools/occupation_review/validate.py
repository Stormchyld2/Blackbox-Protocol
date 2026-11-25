"""Validate OCCUPATION-INDEX.json occupation profiles for the Section 6.5 editorial review.

Usage: python3 tools/occupation_review/validate.py [--baseline GIT_REV] [--ids O-001,O-002] [--final]

Checks (errors fail the run):
  * JSON loads; 352 profiles with unique IDs; career/tag cross-references resolve.
  * Mechanical preservation against authoritative OCCUPATION-PACKAGES.md (allocations, grants)
    and SKILL-NOTES.md (competency titles, governing skills), plus byte-identical
    top-level generated fields against the baseline revision.
  * Reviewed profiles: schema, canonical skills, alternative rules, advantage type and
    standard verification, qualification structure with preserved rule text,
    one resource entry per competency carrying the verbatim catalogue requirement,
    Section 5 adaptation arithmetic (reference deficits, SL->DZ difference, milestones).
  * Exact and near-duplicate authored text across all reviewed profiles.
--final additionally requires every profile to be individually reviewed.
"""
import sys, json, re, subprocess, itertools, argparse
from common import (ROOT, load_index, parse_catalogue, parse_packages, parse_deficits,
                    CANONICAL_SKILLS, ADVANTAGE_TYPES, ADAPTATION_RULE, RESOURCE_RULE)

REVIEWED = "individually reviewed: advantage, alternatives, resources, qualification and adaptation authored; mechanical grants unchanged"
MECH_TOP = ["id", "careerId", "name", "family", "setting", "availability", "primarySkills", "flexibleAllocation",
            "alternativeSkills", "specializationTags", "baselineGrants", "qualification", "advantage", "resources", "adaptation"]
NEAR_FIELDS = [("advantage", "description"), ("adaptationExample", "scenario"),
               ("adaptationExample", "milestone"), ("adaptationExample", "feasibility")]
NEAR_THRESHOLD = 0.6  # word-trigram Jaccard
FORBIDDEN = re.compile(r"(\+\d+|\d+ ?%|\breroll|\bguaranteed\b|\bautomatically (grants?|succeeds?)\b)", re.I)


def shingles(text):
    w = re.findall(r"[a-z0-9']+", text.lower())
    return {tuple(w[i:i + 3]) for i in range(max(1, len(w) - 2))}


def jaccard(a, b):
    return len(a & b) / len(a | b) if a and b else 0.0


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--baseline", default="ce78bca41fa71313a1c6f09f97aaa1a2fe44514c")
    ap.add_argument("--ids", default="")
    ap.add_argument("--final", action="store_true")
    args = ap.parse_args()
    errors, warnings = [], []
    data = load_index(); cat = parse_catalogue(); pk = parse_packages(); table = parse_deficits()
    profiles = data["profiles"]
    ids = [p["id"] for p in profiles]
    if len(profiles) != 352: errors.append(f"expected 352 profiles, found {len(profiles)}")
    if len(set(ids)) != len(ids): errors.append("duplicate profile IDs")
    careers = {c["id"]: c for c in data["careers"]}
    tags = {t["id"] for t in data["tags"]}
    base = None
    if args.baseline:
        raw = subprocess.run(["git", "-C", str(ROOT), "show", f"{args.baseline}:notes/OCCUPATION-INDEX.json"],
                             capture_output=True, text=True, check=True).stdout
        base = {p["id"]: p for p in json.loads(raw)["profiles"]}
    for p in profiles:
        pid, sb = p["id"], p["sourcebook"]
        if p["careerId"] not in careers or pid not in careers[p["careerId"]]["profiles"]:
            errors.append(f"{pid}: career cross-reference broken")
        for t in p["specializationTags"]:
            if t not in tags: errors.append(f"{pid}: unknown tag {t}")
        src = pk[pid]
        if [(s["skill"], s["points"]) for s in p["primarySkills"]] != src["allocation"]:
            errors.append(f"{pid}: primary allocation differs from OCCUPATION-PACKAGES")
        if [(g["id"], g["level"]) for g in p["baselineGrants"]] != src["grants"]:
            errors.append(f"{pid}: baseline grants differ from OCCUPATION-PACKAGES")
        if sb["orderedSkills"] != p["primarySkills"]:
            errors.append(f"{pid}: sourcebook ordered skills differ from primary allocation")
        if [(c["id"], c["level"]) for c in sb["competencyReferences"]] != src["grants"]:
            errors.append(f"{pid}: competency references differ from grants")
        for c in sb["competencyReferences"]:
            k = cat.get(c["id"])
            if not k: errors.append(f"{pid}: unknown competency {c['id']}"); continue
            if c["title"] != k["title"] or c["governingSkill"] != k["skill"]:
                errors.append(f"{pid}: competency {c['id']} title/skill mismatch with catalogue")
        pts = [s["points"] for s in p["primarySkills"]]
        if pts and sum(pts) not in (100, 80, 60): errors.append(f"{pid}: primary total {sum(pts)}")
        if len({s['skill'] for s in p['primarySkills']}) != len(pts): errors.append(f"{pid}: repeated primary skill")
        for s in p["primarySkills"]:
            if s["skill"] not in CANONICAL_SKILLS: errors.append(f"{pid}: noncanonical skill {s['skill']}")
        if base:
            for k in MECH_TOP:
                if p.get(k) != base[pid].get(k): errors.append(f"{pid}: generated top-level field '{k}' changed from baseline")
            for k in ("orderedSkills", "competencyReferences", "specializationApplications", "allocationRule"):
                if sb.get(k) != base[pid]["sourcebook"].get(k): errors.append(f"{pid}: sourcebook mechanical field '{k}' changed")
        if sb.get("status") != REVIEWED:
            if args.final: errors.append(f"{pid}: not individually reviewed ({sb.get('status')})")
            continue
        check_reviewed(p, cat, table, errors, warnings)
    reviewed = [p for p in profiles if p["sourcebook"].get("status") == REVIEWED]
    # exact duplicates
    for path in NEAR_FIELDS + [("qualification", "experience"), ("qualification", "credential"), ("qualification", "authority"),
                               ("qualification", "specialistTraining"), ("advantage", "limits")]:
        seen = {}
        for p in reviewed:
            v = p["sourcebook"][path[0]][path[1]].strip().lower()
            if v in seen: errors.append(f"exact duplicate {'.'.join(path)}: {seen[v]} / {p['id']}")
            seen[v] = p["id"]
    prac = {}
    for p in reviewed:
        for r in p["sourcebook"]["resourceRequirements"]:
            v = r["occupationPractice"].strip().lower()
            if v in prac and prac[v] != p["id"]: errors.append(f"exact duplicate occupationPractice: {prac[v]} / {p['id']}")
            prac[v] = p["id"]
    # near duplicates
    near = []
    for path in NEAR_FIELDS:
        sh = [(p["id"], shingles(p["sourcebook"][path[0]][path[1]])) for p in reviewed]
        for (a, sa), (b, sbb) in itertools.combinations(sh, 2):
            j = jaccard(sa, sbb)
            if j >= NEAR_THRESHOLD: near.append((j, ".".join(path), a, b))
    for j, f, a, b in sorted(near, reverse=True):
        errors.append(f"near duplicate {f} ({j:.2f}): {a} / {b}")
    sel = set(filter(None, args.ids.split(",")))
    if sel: errors = [e for e in errors if any(s in e for s in sel) or not re.search(r"O-\d+", e)]
    print(f"profiles {len(profiles)}; individually reviewed {len(reviewed)}; remaining {len(profiles) - len(reviewed)}")
    print(f"near-duplicate pairs >= {NEAR_THRESHOLD}: {len(near)}")
    for w in warnings: print("WARN", w)
    for e in errors: print("ERROR", e)
    print("RESULT", "FAIL" if errors else "PASS", f"({len(errors)} errors, {len(warnings)} warnings)")
    sys.exit(1 if errors else 0)


def check_reviewed(p, cat, table, errors, warnings):
    pid, sb = p["id"], p["sourcebook"]
    prim = [s["skill"] for s in p["primarySkills"]]
    alts = sb["alternativeSkillOptions"]
    if len(set(alts)) != len(alts): errors.append(f"{pid}: duplicate alternative")
    if len(alts) > 3: errors.append(f"{pid}: more than three alternatives")
    for a in alts:
        if a not in CANONICAL_SKILLS: errors.append(f"{pid}: noncanonical alternative {a}")
        if a in prim: errors.append(f"{pid}: alternative {a} already an ordered skill")
        if len(sb["alternativeSkillRationale"].get(a, "")) < 50: errors.append(f"{pid}: alternative {a} lacks rationale")
    if set(sb["alternativeSkillRationale"]) != set(alts): errors.append(f"{pid}: rationale keys differ from alternatives")
    if p["flexibleAllocation"] and alts: errors.append(f"{pid}: flexible profile should not list alternatives")
    adv = sb["advantage"]
    if adv.get("type") not in ADVANTAGE_TYPES: errors.append(f"{pid}: advantage type invalid")
    elif adv["verification"] != ADVANTAGE_TYPES[adv["type"]]: errors.append(f"{pid}: advantage verification altered")
    if len(adv.get("description", "")) < 60: errors.append(f"{pid}: advantage description too short")
    if len(adv.get("limits", "")) < 40: errors.append(f"{pid}: advantage limits missing")
    if p["name"].lower() + ":" in adv.get("description", "").lower(): errors.append(f"{pid}: templated advantage text")
    for f in ("description", "limits"):
        if FORBIDDEN.search(adv.get(f, "")): errors.append(f"{pid}: advantage {f} implies numerical/automatic benefit")
    q = sb["qualification"]
    for k in ("experience", "credential", "authority", "specialistTraining", "rule"):
        if len(q.get(k, "")) < 40: errors.append(f"{pid}: qualification.{k} missing")
    if q.get("rule") != p["qualification"]: errors.append(f"{pid}: qualification rule text not preserved")
    refs = sb["competencyReferences"]; res = sb["resourceRequirements"]
    if [(r["competencyId"], r["level"]) for r in res] != [(c["id"], c["level"]) for c in refs]:
        errors.append(f"{pid}: resource entries do not match competency references one-to-one")
    for r in res:
        if r.get("catalogueRequirement") != cat[r["competencyId"]]["resources"]:
            errors.append(f"{pid}: catalogue requirement for {r['competencyId']} not verbatim")
        if len(r.get("occupationPractice", "")) < 50: errors.append(f"{pid}: occupation practice for {r['competencyId']} too thin")
    if len({r["occupationPractice"] for r in res}) != len(res): errors.append(f"{pid}: repeated occupation practice text")
    if sb.get("resourceRule") != RESOURCE_RULE: errors.append(f"{pid}: resource rule altered")
    if not refs and len(sb.get("resourceNote", "")) < 30: errors.append(f"{pid}: status-only profile lacks resource note")
    ad = sb["adaptationExample"]
    if ad.get("rule") != ADAPTATION_RULE: errors.append(f"{pid}: adaptation rule altered")
    sk = ad.get("skill")
    if sk not in CANONICAL_SKILLS: errors.append(f"{pid}: adaptation skill noncanonical"); return
    d = ad.get("referenceDeficit")
    if not isinstance(d, int) or d > -5 or d < -25 or d % 5: errors.append(f"{pid}: deficit {d} outside -5..-25 in steps of 5")
    elif ad.get("milestonesToClear") != abs(d) // 5: errors.append(f"{pid}: milestone count wrong")
    sl, dz = table[sk]; o = ad.get("originSetting"); ctx = ad.get("context", "")
    if o == "BP":
        exp = sl if "SL" in ctx else dz if "DZ" in ctx else None
        if exp != d: errors.append(f"{pid}: BP deficit {d} != table {exp} for {sk} ({ctx})")
    elif o == "SL" and "DZ" in ctx:
        if d != -max(0, abs(dz) - abs(sl)): errors.append(f"{pid}: SL->DZ deficit arithmetic wrong")
    elif "local" not in ctx:
        errors.append(f"{pid}: adaptation context invalid for origin {o}")
    if {"BP": "Blackbox Protocol", "SL": "Signal Lost", "DZ": "Dead Zone"}.get(o) != p["setting"]:
        errors.append(f"{pid}: adaptation origin does not match profile setting")
    for k in ("scenario", "feasibility", "milestone", "deficitBasis"):
        if len(ad.get(k, "")) < 50: errors.append(f"{pid}: adaptation {k} too thin")
    if re.search(r"\b(weeks?|days?|months?) (pass|elapse)", ad.get("milestone", ""), re.I):
        errors.append(f"{pid}: milestone appears to credit elapsed time")


if __name__ == "__main__":
    main()
