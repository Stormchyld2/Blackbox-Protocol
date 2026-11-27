"""Record a batch in batches.json: log_batch.py BATCH_ID PROFILES FAMILIES "NEXT TASK" [PREV_COMMIT]"""
import json, sys, pathlib
p = pathlib.Path(__file__).parent / "batches.json"; d = json.loads(p.read_text())
bid, prof, fam, nxt = sys.argv[1:5]
if len(sys.argv) > 5:
    for b in d["batches"]:
        if "commit" not in b: b["commit"] = sys.argv[5]
d["batches"] = [b for b in d["batches"] if b["id"] != bid] + [{"id": bid, "profiles": prof, "families": fam}]
d["next"] = nxt
p.write_text(json.dumps(d, indent=2, ensure_ascii=False) + "\n")
