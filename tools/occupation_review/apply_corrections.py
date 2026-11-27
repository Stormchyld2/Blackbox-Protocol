"""Apply corrections.json to OCCUPATION-PACKAGES.md and OCCUPATION-INDEX.json (idempotent).

Usage (from repo root): python3 tools/occupation_review/apply_corrections.py
Then re-apply the affected review batches so alternative rationales are rewritten.
"""
import re
from common import NOTES, load_index, save_index, load_corrections, patch_profile

corr = load_corrections()
pk = NOTES / "OCCUPATION-PACKAGES.md"
text = pk.read_text()
for pid, c in corr.items():
    m = re.search(rf"^### {pid} — .*?(?=^### |\Z)", text, flags=re.S | re.M)
    blk = m.group(0)
    done = f"{c['to']} +"
    line = re.search(r"Suggested primary general allocation \(occupation-specific\): .*", blk).group(0)
    if f"; {c['from']} +" in "; " + line or f": {c['from']} +" in line:
        new = re.sub(rf"(?<![A-Za-z]){re.escape(c['from'])} \+", f"{c['to']} +", line, count=1)
        text = text.replace(blk, blk.replace(line, new))
pk.write_text(text)

data = load_index()
def walk(x):
    if isinstance(x, dict):
        if "sourcebook" in x and x["id"] in corr:
            c = corr[x["id"]]
            if x["primarySkills"][c["slot"]]["skill"] == c["from"]:
                patch_profile(x, c)
        for v in x.values(): walk(v)
    elif isinstance(x, list):
        for v in x: walk(v)
walk(data)
save_index(data)
print("applied", len(corr), "corrections")
