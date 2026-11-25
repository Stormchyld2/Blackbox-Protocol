"""Shared parsing helpers for the Section 6.5 occupation profile editorial review.

Reads authoritative sources (SKILL-NOTES.md, OCCUPATION-PACKAGES.md, DESIGN-NOTES.md
deficit table) so validation never trusts the derivative OCCUPATION-INDEX.json alone.
Standard library only; offline.
"""
import json, re, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2]
NOTES = ROOT / "notes"
INDEX = NOTES / "OCCUPATION-INDEX.json"

CANONICAL_SKILLS = [
    "Athletics", "Endurance", "Close Combat", "Firearms", "Archery", "Stealth",
    "Vehicle Operation", "Search", "Surveillance", "Forensics", "Research", "Streetwise",
    "Electronics", "Mechanics", "Computing", "Science", "Communications", "Medicine",
    "Crafting", "Construction", "Agriculture", "Animal Husbandry", "Survival", "Navigation",
    "Scavenging", "Resource Management", "Persuasion", "Intimidation", "Leadership", "Deception",
]

ADVANTAGE_TYPES = {
    # DESIGN-NOTES 2.5 Professional advantages: the five grounded benefits.
    "professional contact": "GM confirms the named contact, the documented relationship, consent and current availability; the contact offers only the stated access and may decline, lapse or ask for reciprocity. No automatic bonus, equipment or authority.",
    "institutional access": "Valid only while the named institution or service actually operates and recognizes the character; access is limited to the stated facility or service, may lapse, and grants no authority, equipment ownership or numerical bonus.",
    "practiced workflow": "Once per in-world day, halve routine setup time for the stated familiar task only; never applies to training, assessment or hazardous procedures, and grants no success, reroll or bonus.",
    "resource familiarity": "Identify ordinary appropriate supplies for the stated work without a roll only when the answer is obvious to a practitioner; uncertain identification still uses the governing skill. Grants no free resources or access.",
    "mentor relationship": "GM confirms the named mentor, availability and costs; the mentor provides instruction or assessment within their own validated competence only, and all CCDD-12/19/22 hours, prerequisites and assessments still apply.",
}

LEVELS = {1: "I", 2: "II", 3: "III", 4: "IV", 5: "V"}
ROMAN = {v: k for k, v in LEVELS.items()}

ADAPTATION_RULE = ("Section 5: the deficit is contextual and applies only to the stated unfamiliar application, never to the underlying skill or acquired competency levels. "
                   "Each distinct GM-approved milestone (normally at least eight active hours plus a documented demonstration) removes five points, capped at the outstanding deficit; "
                   "elapsed time alone earns nothing. Missing prerequisites, equipment or authority make the affected task unavailable rather than adding a second penalty, "
                   "and only the largest relevant deficit applies to a single check.")

RESOURCE_RULE = ("Catalogue requirements, prerequisite levels, CCDD-19 CDR thresholds, hours and assessment remain mandatory. When a listed resource or competent assessor is unavailable, "
                 "training is queued or paused (CCDD-22) rather than waived; an equivalent resource qualifies only when it supports the same assessment evidence, and a manual alone never unlocks professional training.")


def load_index():
    return json.loads(INDEX.read_text())


def save_index(data):
    INDEX.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")


def parse_catalogue():
    """Return {competency_id: {title, skill, resources, access}} from SKILL-NOTES.md."""
    text = (NOTES / "SKILL-NOTES.md").read_text()
    out = {}
    for m in re.finditer(r"^### ([A-Z]+(?:-[A-Z]+)*-\d+) — (.+?)\n\nScope: (.+?)\n", text, re.M):
        cid, title, body = m.group(1), m.group(2).strip(), m.group(3)
        skill = re.search(r"Governing: (.+?) \(", body)
        res = re.search(r"Resources: (.+?)\. Assessment:", body)
        acc = re.search(r"Access: (.+?)\. Supporting", body)
        out[cid] = {"title": title, "skill": skill.group(1) if skill else None,
                    "resources": res.group(1) if res else None,
                    "access": acc.group(1) if acc else None}
    return out


def parse_packages():
    """Return {profile_id: {allocation: [(skill, pts)], grants: [(id, level)], flexible}}."""
    text = (NOTES / "OCCUPATION-PACKAGES.md").read_text()
    out = {}
    for block in re.split(r"^### ", text, flags=re.M)[1:]:
        m = re.match(r"(O-\d+) — ", block)
        if not m:
            continue
        pid = m.group(1)
        alloc = re.search(r"Suggested primary general allocation \(occupation-specific\): (.+)", block).group(1)
        pairs = re.findall(r"([A-Z][A-Za-z ]+?) \+(\d+)", alloc)
        base = re.search(r"Qualified baseline: (.+)", block).group(1)
        grants = re.findall(r"([A-Z]+(?:-[A-Z]+)*-\d+) .+? (I|II|III|IV|V)(?:;|$)", base)
        out[pid] = {"allocation": [(s.strip(), int(p)) for s, p in pairs],
                    "grants": [(g, ROMAN[l]) for g, l in grants],
                    "flexible": not pairs}
    return out


def parse_deficits():
    """Return {skill: (SL, DZ)} BP-trained reference deficits from DESIGN-NOTES."""
    text = (NOTES / "DESIGN-NOTES.md").read_text()
    sec = text.split("## Transitional Skill Deficit System", 1)[1]
    out = {}
    for m in re.finditer(r"^\| ([A-Za-z ]+?) \| [A-Z]{3} \| (-?\d+) \| (-?\d+) \|", sec, re.M):
        out[m.group(1)] = (int(m.group(2)), int(m.group(3)))
    return out


def load_corrections():
    """Intentional mechanical corrections (corrections.json): {pid: {slot, from, to, reason}}."""
    p = pathlib.Path(__file__).with_name("corrections.json")
    return json.loads(p.read_text())["corrections"] if p.exists() else {}


def patch_profile(p, c):
    """Apply one correction to an index profile dict in place (ordered skills + alternatives)."""
    for lst in (p["primarySkills"], p["sourcebook"]["orderedSkills"]):
        assert lst[c["slot"]]["skill"] == c["from"], (p["id"], lst[c["slot"]])
        lst[c["slot"]]["skill"] = c["to"]
    for alts in (p["alternativeSkills"], p["sourcebook"]["alternativeSkillOptions"]):
        if c["to"] in alts:
            alts[alts.index(c["to"])] = c["from"]
    rat = p["sourcebook"].get("alternativeSkillRationale", {})
    if c["to"] in rat:
        rat[c["from"]] = rat.pop(c["to"])
