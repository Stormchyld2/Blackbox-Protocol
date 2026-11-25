"""Apply an authored editorial batch to OCCUPATION-INDEX.json.

Usage: python3 tools/occupation_review/apply_batch.py BATCH_ID AUTHORED_FILE

Authored file format (one block per profile, fields in any order):
  @O-035
  adv: <advantage type> | <description> | <limits>
  alt: <Skill> | <rationale>          (repeat; omit entirely for no alternatives)
  qe: / qc: / qa: / qs:              experience / credential / authority / specialist training
  r: <occupation practice>            one per competency reference, in order
  rn: <resource note>                 status-only profiles without grants
  as: <scenario>   ak: <Skill>   at: SL|DZ|local
  ad: <deficit> | <basis>             required for local (native) contexts, optional override otherwise
  af: <feasibility boundary>   am: <milestone evidence>
Only sourcebook editorial fields change; mechanical fields are never written.
"""
import sys, re
from common import (load_index, save_index, parse_catalogue, parse_deficits, ADVANTAGE_TYPES,
                    ADAPTATION_RULE, RESOURCE_RULE)

STATUS = "individually reviewed: advantage, alternatives, resources, qualification and adaptation authored; mechanical grants unchanged"
ALT_RULE = ("Optional professional variation: with documented history and GM approval, one listed alternative may replace one ordered skill at that slot's points. "
            "Section 2.3 totals, setting weights, distinct-skill requirement and per-skill caps are unchanged; no competency, credential or authority is implied.")
ORIGIN = {"Blackbox Protocol": "BP", "Signal Lost": "SL", "Dead Zone": "DZ"}


def parse(path):
    blocks, cur = {}, None
    for raw in open(path, encoding="utf-8"):
        line = raw.rstrip("\n").strip()
        if not line or line.startswith("#"):
            continue
        if line.startswith("@"):
            cur = line[1:].strip(); blocks[cur] = {"alt": [], "r": []}; continue
        key, _, val = line.partition(":")
        key, val = key.strip(), val.strip()
        if key in ("alt", "r"):
            blocks[cur][key].append(val)
        else:
            if key in blocks[cur]:
                raise SystemExit(f"{cur}: duplicate field {key}")
            blocks[cur][key] = val
    return blocks


def deficit_for(profile, skill, target, override, table):
    origin = ORIGIN[profile["setting"]]
    sl, dz = table[skill]
    if target == "local" or origin == "DZ":
        if not override:
            raise SystemExit(f"{profile['id']}: native/local context needs explicit 'ad:'")
        val, basis = override
        return origin, "local unfamiliar context", val, basis
    if origin == "BP":
        ref = sl if target == "SL" else dz
        basis = f"BP-trained unfamiliar {target} {skill} reference (Section 5.3 table)"
    elif origin == "SL" and target == "DZ":
        ref = -max(0, abs(dz) - abs(sl))
        basis = f"SL-trained with documented SL methods: max(0, DZ {abs(dz)} - SL {abs(sl)}) for {skill} (Section 5.3)"
    else:
        raise SystemExit(f"{profile['id']}: invalid origin/target {origin}->{target}")
    if override:
        val, obasis = override
        if val != ref:
            raise SystemExit(f"{profile['id']}: deficit {val} differs from reference {ref}")
        basis = obasis or basis
    return origin, f"unfamiliar {target} application", ref, basis


def main(batch_id, path):
    data = load_index(); cat = parse_catalogue(); table = parse_deficits()
    byid = {p["id"]: p for p in data["profiles"]}
    blocks = parse(path)
    for pid, b in blocks.items():
        p = byid[pid]; sb = p["sourcebook"]
        atype, desc, limits = [s.strip() for s in b["adv"].split("|")]
        if atype not in ADVANTAGE_TYPES:
            raise SystemExit(f"{pid}: unknown advantage type {atype}")
        alts, rat = [], {}
        for a in b["alt"]:
            s, r = [x.strip() for x in a.split("|", 1)]
            alts.append(s); rat[s] = r
        refs = sb["competencyReferences"]
        if len(b["r"]) != len(refs):
            raise SystemExit(f"{pid}: {len(b['r'])} resource lines for {len(refs)} competencies")
        resources = [{"competencyId": c["id"], "level": c["level"], "occupationPractice": r,
                      "catalogueRequirement": cat[c["id"]]["resources"]} for c, r in zip(refs, b["r"])]
        old_q = sb["qualification"]
        rule = old_q["rule"] if isinstance(old_q, dict) else old_q
        override = None
        if "ad" in b:
            v, _, basis = b["ad"].partition("|"); override = (int(v), basis.strip())
        skill = b["ak"]
        origin, ctx, ref, basis = deficit_for(p, skill, b["at"], override, table)
        new = {
            "advantage": {"type": atype, "description": desc, "limits": limits, "verification": ADVANTAGE_TYPES[atype]},
            "alternativeSkillOptions": alts,
            "alternativeSkillRationale": rat,
            "alternativeSkillRule": ALT_RULE,
            "qualification": {"experience": b["qe"], "credential": b["qc"], "authority": b["qa"],
                               "specialistTraining": b["qs"], "rule": rule},
            "resourceRequirements": resources,
            "resourceRule": RESOURCE_RULE,
            "adaptationExample": {"scenario": b["as"], "skill": skill, "originSetting": origin,
                                  "context": ctx, "referenceDeficit": ref, "deficitBasis": basis,
                                  "milestonesToClear": abs(ref) // 5, "feasibility": b["af"],
                                  "milestone": b["am"], "rule": ADAPTATION_RULE},
            "status": STATUS, "reviewBatch": batch_id,
        }
        if "rn" in b:
            new["resourceNote"] = b["rn"]
        keep = {k: v for k, v in sb.items() if k in ("orderedSkills", "allocationRule", "specializationApplications", "competencyReferences")}
        prior = sb.get("authoringHistory")
        merged = {"orderedSkills": keep["orderedSkills"]}
        if "allocationRule" in keep: merged["allocationRule"] = keep["allocationRule"]
        merged.update({"alternativeSkillOptions": new["alternativeSkillOptions"],
                       "alternativeSkillRationale": rat, "alternativeSkillRule": ALT_RULE,
                       "specializationApplications": keep["specializationApplications"],
                       "competencyReferences": keep["competencyReferences"]})
        for k in ("qualification", "advantage", "resourceRequirements", "resourceRule"):
            merged[k] = new[k]
        if "resourceNote" in new: merged["resourceNote"] = new["resourceNote"]
        merged["adaptationExample"] = new["adaptationExample"]
        merged["status"] = STATUS; merged["reviewBatch"] = batch_id
        if prior: merged["authoringHistory"] = prior
        p["sourcebook"] = merged
    save_index(data)
    print(f"applied {len(blocks)} profiles as {batch_id}")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
