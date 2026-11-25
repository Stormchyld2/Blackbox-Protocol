"""Print compact authoring context for profiles: python3 dump.py O-035 O-036 ... | --range O-035:O-054"""
import sys
from common import load_index, parse_catalogue, parse_deficits
data = load_index(); cat = parse_catalogue(); tab = parse_deficits()
ids = sys.argv[1:]
if ids and ids[0] == "--range":
    a, b = ids[1].split(":"); ids = [f"O-{i:03d}" for i in range(int(a[2:]), int(b[2:]) + 1)]
for p in data["profiles"]:
    if p["id"] not in ids: continue
    sb = p["sourcebook"]
    print(f"== {p['id']} {p['name']} | {p['family']} | {p['setting']} | {sb['status'][:12]}")
    print("  skills:", ", ".join(f"{s['skill']} {s['points']}" for s in p["primarySkills"]) or sb.get("allocationRule"))
    print("  alt:", sb["alternativeSkillOptions"], "| specs:", "; ".join(a["label"] for a in sb["specializationApplications"]))
    for c in sb["competencyReferences"]:
        k = cat[c["id"]]
        print(f"  {c['id']} {c['title']} L{c['level']} [{c['governingSkill']}] || {k["resources"].split("; resource verification")[0].split("; practice must")[0][:70]}")
    q = sb["qualification"]; q = q["rule"] if isinstance(q, dict) else q
    print("  qual:", q[:90])
