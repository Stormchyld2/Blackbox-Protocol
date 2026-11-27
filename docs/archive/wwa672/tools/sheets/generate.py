"""Generate printable Blackbox character sheet and trackers from approved fields.

Every field, formula and threshold printed here is copied from notes/DESIGN-NOTES.md
(Sections 3, 4, 5, 7, R01-R04, CCDD-12/19/20) and notes/MANUAL-CHARTS.md. Nothing new.
"""
import sys, pathlib

OUT = pathlib.Path(sys.argv[1])

SKILLS = [  # (skill, default governing attribute) from MANUAL-CHARTS Source table 1
    ("Athletics", "STR"), ("Endurance", "CON"), ("Close Combat", "DEX"), ("Firearms", "DEX"),
    ("Archery", "DEX"), ("Stealth", "DEX"), ("Vehicle Operation", "DEX"), ("Search", "PER"),
    ("Surveillance", "PER"), ("Forensics", "INT"), ("Research", "INT"), ("Streetwise", "PER"),
    ("Electronics", "INT"), ("Mechanics", "INT"), ("Computing", "INT"), ("Science", "INT"),
    ("Communications", "INT"), ("Medicine", "INT"), ("Crafting", "DEX"), ("Construction", "INT"),
    ("Agriculture", "INT"), ("Animal Husbandry", "INT"), ("Survival", "CON"), ("Navigation", "PER"),
    ("Scavenging", "PER"), ("Resource Management", "INT"), ("Persuasion", "PRE"),
    ("Intimidation", "PRE"), ("Leadership", "PRE"), ("Deception", "PRE"),
]
ATTRS = [("STR", "Strength"), ("CON", "Constitution"), ("DEX", "Dexterity"), ("INT", "Intelligence"),
         ("PER", "Perception"), ("WIL", "Willpower"), ("PRE", "Presence")]

CSS = """
:root {
  /* Layout: US Letter case-file pages; tables are ruled write-in forms. Paper look, single light theme by choice. */
  --paper: #fbfbf8; --ink: #1b1f24; --rule: #8d949c; --faint: #d5d9dd; --accent: #2c5662; --tint: #eef2f3;
  --f-display: "IBM Plex Sans Condensed", "Arial Narrow", Arial, sans-serif;
  --f-body: "IBM Plex Sans", Arial, Helvetica, sans-serif;
  --f-mono: "IBM Plex Mono", "Courier New", monospace;
  color-scheme: light;
}
* { box-sizing: border-box; }
body { background: #e4e7ea; color: var(--ink); font-family: var(--f-body); font-size: 10px; line-height: 1.3; margin: 0;
  padding-block: 16px; padding-left: max(16px, env(safe-area-inset-left, 0px)); padding-right: max(16px, env(safe-area-inset-right, 0px)); }
.page { background: var(--paper); max-width: 8.5in; margin: 0 auto 16px; padding: 0.4in; display: flex; flex-direction: column; gap: 10px;
  box-shadow: 0 1px 4px rgba(0,0,0,.18); }
header.mast { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 2px solid var(--ink); padding-bottom: 4px; gap: 8px; flex-wrap: wrap; }
.mast h1 { font-family: var(--f-display); font-weight: 700; font-size: 20px; letter-spacing: .14em; text-transform: uppercase; margin: 0; }
.mast .sub { font-family: var(--f-mono); font-size: 9px; color: var(--accent); letter-spacing: .08em; text-transform: uppercase; }
h2 { font-family: var(--f-display); font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; margin: 0 0 3px;
  color: var(--paper); background: var(--accent); padding: 2px 6px; text-wrap: balance; }
.grid { display: grid; gap: 10px; }
.g2 { grid-template-columns: 1fr 1fr; } .g3 { grid-template-columns: repeat(3, 1fr); } .g4 { grid-template-columns: repeat(4, 1fr); }
.g7 { grid-template-columns: repeat(7, 1fr); gap: 6px; }
.span2 { grid-column: span 2; } .span3 { grid-column: span 3; }
section { min-width: 0; }
.field { border-bottom: 1px solid var(--rule); min-height: 22px; display: flex; flex-direction: column; justify-content: flex-start; }
.field label, .lbl { font-family: var(--f-display); font-size: 8px; text-transform: uppercase; letter-spacing: .08em; color: var(--accent); }
.attr { border: 1.5px solid var(--ink); text-align: center; padding: 3px 2px 0; display: flex; flex-direction: column; }
.attr b { font-family: var(--f-display); font-size: 14px; letter-spacing: .06em; }
.attr span { font-size: 7.5px; color: var(--rule); text-transform: uppercase; letter-spacing: .06em; }
.attr .box { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--rule); margin-top: 3px; }
.attr .box div { height: 26px; font-size: 7px; color: var(--rule); text-align: left; padding: 1px 2px; text-transform: uppercase; }
.attr .box div + div { border-left: 1px solid var(--faint); }
.wrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; font-variant-numeric: tabular-nums; }
th { font-family: var(--f-display); font-size: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; text-align: left;
  border-bottom: 1.5px solid var(--ink); padding: 2px 3px; color: var(--ink); white-space: nowrap; }
td { border-bottom: 1px solid var(--faint); height: 17px; padding: 1px 3px; vertical-align: middle; }
td.k { font-weight: 500; white-space: nowrap; }
td.m { font-family: var(--f-mono); font-size: 9px; color: var(--accent); text-align: center; }
tr:nth-child(even) td { background: var(--tint); }
.formula { font-family: var(--f-mono); font-size: 8px; color: var(--accent); }
.note { font-size: 8px; color: #4a5159; }
.boxes { font-family: var(--f-mono); letter-spacing: 2px; font-size: 11px; }
.track { display: grid; grid-template-columns: repeat(20, 1fr); border: 1px solid var(--ink); }
.track div { height: 18px; border-right: 1px solid var(--faint); font-family: var(--f-mono); font-size: 7px; color: var(--rule); padding: 1px; }
.track div:last-child { border-right: 0; }
.bands { display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid var(--ink); }
.bands div { padding: 3px 4px; border-right: 1px solid var(--faint); min-height: 34px; }
.bands div:last-child { border-right: 0; }
.bands b { font-family: var(--f-display); font-size: 9px; text-transform: uppercase; letter-spacing: .06em; display: block; }
.ref { border: 1px solid var(--rule); padding: 5px 6px; display: flex; flex-direction: column; gap: 4px; }
.ref table td, .ref table th { height: auto; padding: 1px 3px; font-size: 8.5px; }
.ref tr:nth-child(even) td { background: none; }
.lines div { border-bottom: 1px solid var(--faint); height: 17px; }
footer { margin-top: auto; display: flex; justify-content: space-between; font-size: 7.5px; color: var(--rule); border-top: 1px solid var(--faint); padding-top: 3px; gap: 8px; flex-wrap: wrap; }
@media (max-width: 700px) {
  .g2, .g3, .g4 { grid-template-columns: 1fr; } .g7 { grid-template-columns: repeat(4, 1fr); }
  .span2, .span3 { grid-column: auto; } .page { padding: 16px; }
  .track { grid-template-columns: repeat(10, 1fr); } .bands { grid-template-columns: 1fr 1fr; }
}
@page { size: letter; margin: 0; }
@media print {
  body { background: none; padding: 0; }
  .page { box-shadow: none; margin: 0; height: 11in; page-break-after: always; break-after: page; }
  .g2 { grid-template-columns: 1fr 1fr; } .g3 { grid-template-columns: repeat(3, 1fr); } .g4 { grid-template-columns: repeat(4, 1fr); }
  .g7 { grid-template-columns: repeat(7, 1fr); } .span2 { grid-column: span 2; } .span3 { grid-column: span 3; }
  h2, tr:nth-child(even) td { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
"""

FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans+Condensed:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500&display=swap">'


def field(label, cls=""):
    return f'<div class="field {cls}"><label>{label}</label></div>'


def rows(n, cols):
    return "".join("<tr>" + "".join("<td></td>" for _ in range(cols)) + "</tr>" for _ in range(n))


def table(headers, n, cls=""):
    th = "".join(f"<th>{h}</th>" for h in headers)
    return f'<div class="wrap"><table class="{cls}"><thead><tr>{th}</tr></thead><tbody>{rows(n, len(headers))}</tbody></table></div>'


def footer(title, page, total):
    return (f'<footer><span>Blackbox Protocol · {title} · draft layout, fields from approved rules (DESIGN-NOTES Sections 3–5, 7; R01–R04; CCDD). '
            f'All numbers provisional until playtested.</span><span>Page {page} of {total}</span></footer>')


def wrap_doc(title, body):
    return (f'<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
            f'<title>{title}</title><meta name="claude:viewport-fit-sides" content="cover">{FONTS}<style>{CSS}</style></head><body>\n{body}\n</body></html>\n')


# ---------------- Character sheet ----------------
def character_sheet():
    attr_html = "".join(
        f'<div class="attr"><b>{a}</b><span>{n}</span><div class="box"><div>Under.</div><div>Effect.</div></div></div>' for a, n in ATTRS)
    derived = [
        ("Health max (H)", "floor((STR+CON)/10), min 1"),
        ("Stamina max (S)", "floor((CON+WIL)/2)"),
        ("Resilience (P)", "floor((WIL+CON)/2)"),
        ("Initiative (I)", "floor((DEX+PER)/2)"),
        ("Movement (M)", "floor((STR+DEX+CON)/3)"),
        ("Walk m / 6 s", "max(1, floor(M/5))"),
        ("Carry ref (kg)", "STR × 0.5"),
        ("Recovery (R)", "floor((2×CON+WIL)/3)"),
    ]
    derived_html = "".join(f'<div class="field"><label>{l}</label><span class="formula">{f}</span></div>' for l, f in derived)
    hp_track = "".join(f"<div>{i}</div>" for i in range(1, 21))

    p1 = f"""
<div class="page">
  <header class="mast"><h1>Blackbox Protocol</h1><span class="sub">Character record · Personnel file</span></header>
  <section class="grid g4">
    {field("Character name", "span2")}{field("Player")}{field("Pronouns / age")}
    {field("Occupation (O-ID and name)", "span2")}{field("Family")}{field("Career ID")}
    {field("Origin era (BP / SL / DZ)")}{field("Campaign era")}{field("Creation date (in-world)")}{field("Current date (in-world)")}
  </section>
  <section>
    <h2>Attributes</h2>
    <div class="grid g7">{attr_html}</div>
    <p class="note">Creation: 350 points, each 15–80. Natural cap 100. Effective = underlying after conditions. Attribute advancement: one eligible monthly checkpoint, D100 above underlying gives +1.</p>
  </section>
  <section>
    <h2>Derived statistics</h2>
    <div class="grid g4">{derived_html}</div>
    <p class="note">Use effective attributes, round down except carry. Stable rest restores 1 HP per 24 h if R &lt; 60, 2 if R ≥ 60. Carry is a reference, not a hard maximum.</p>
  </section>
  <section class="grid g2">
    <div>
      <h2>Health</h2>
      <div class="track">{hp_track}</div>
      <p class="note">Mark HP lost. 0 HP: incapacitated. No negative HP. Max recovery 3 HP per day.</p>
      <div class="grid g2" style="margin-top:6px">
        <div class="field"><label>Deterioration (only if unstable)</label><span class="boxes">☐ ☐ ☐</span><span class="note">At 0 HP: severe/critical injury or ongoing life-threatening threat = unstable. Mark at end of each subsequent unstable round; three = death.</span></div>
        <div class="field"><label>Stamina: current / max</label><span class="note">0 = exhausted, no strenuous actions</span></div>
      </div>
    </div>
    <div>
      <h2>Stress (0–100)</h2>
      <div class="field"><label>Current stress</label></div>
      <div class="bands" style="margin-top:6px">
        <div><b>Composed</b><span class="note">below ceil(P/2)</span></div>
        <div><b>Strained −5</b><span class="note">from ceil(P/2):</span></div>
        <div><b>Pressured −10</b><span class="note">from P:</span></div>
        <div><b>Overwhelmed −20</b><span class="note">from min(100, P+25):</span></div>
      </div>
      <p class="note">Penalty only on tasks affected by pressure. Quiet safe hour −5; 8 h sleep −20; support once a day −5.</p>
    </div>
  </section>
  <section>
    <h2>Injuries and conditions</h2>
    {table(["Injury or condition", "Severity", "Penalty", "Date", "Min rest", "Care / status"], 5)}
    <p class="note">Severity by post-protection harm before HP clamp: 1 minor (no penalty), 2–3 moderate (−10), 4–6 severe (−20), 7+ critical (−30 or infeasible). Minimum rest: 1 / 3 / 7 / 14 days. Apply the highest injury or deprivation penalty once.</p>
  </section>
  <section class="grid g3">
    <div class="field"><label>Deprivation: water counter (2 / 3 / 5)</label></div>
    <div class="field"><label>Deprivation: food counter (4 / 7 / 21)</label></div>
    <div class="field"><label>Persistent conditions (Advanced)</label></div>
  </section>
  <section><h2>Notes</h2><div class="lines"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></section>
  {footer("Character record", 1, 3)}
</div>"""

    sk_rows = "".join(
        f'<tr><td class="k">{s}</td><td class="m">{g}</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' for s, g in SKILLS)
    p2 = f"""
<div class="page">
  <header class="mast"><h1>Skills and competencies</h1><span class="sub">Character record · continued</span></header>
  <section class="grid g2" style="grid-template-columns: 1.15fr 1fr;">
    <div>
      <h2>General skills</h2>
      <div class="wrap"><table><thead><tr><th>Skill</th><th>Gov.</th><th>Base ½</th><th>Occ.</th><th>Pers.</th><th>Underlying</th><th>Deficit</th><th>Marks</th></tr></thead><tbody>{sk_rows}</tbody></table></div>
      <p class="note">Base = half the governing attribute, rounded down. Occupational: the profile's ordered +30/+25/+20/+15/+10. Personal: 100 points, max 20 per skill. Starting ceiling 85, learned ceiling 99. Advancement mark: D100 above underlying gives +1D4.</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:10px;min-width:0">
      <div>
        <h2>Competencies</h2>
        {table(["ID", "Competency", "Gov. skill", "Lvl", "Bonus", "Source"], 12)}
        <p class="note">Bonus by level I–V: +0 / +5 / +10 / +15 / +20. Use only the highest relevant competency once per check.</p>
      </div>
      <div class="grid g3">
        {field("CDR total")}{field("Training slots")}{field("Personal budget")}
      </div>
      <p class="note">Personal competency budget at creation: BP 10, SL 15, DZ 20 (origin era). Base training slots BP 2, SL 3, DZ 4, plus extra slots at CDR 10,000 / 25,000 / 50,000 / 100,000 / 200,000 / 400,000.</p>
      <div>
        <h2>Languages</h2>
        {table(["Language", "Speak / expr.", "Receptive", "Read", "Write"], 4)}
        <p class="note">Each modality 0–5. Language ceiling on checks: 20 / 40 / 60 / 80 / 99 for levels 1–5. Use the lowest required modality.</p>
      </div>
    </div>
  </section>
  <section>
    <h2>Adaptation deficits (transitional characters)</h2>
    {table(["Skill and context", "Reference", "Milestones (−5 each)", "Remaining", "Evidence IDs"], 4)}
    <p class="note">Remaining = max(0, reference − 5 × accepted milestones). Apply only the largest relevant deficit to one check. Record milestone evidence on the adaptation tracker.</p>
  </section>
  {footer("Character record", 2, 3)}
</div>"""

    p3 = f"""
<div class="page">
  <header class="mast"><h1>Equipment and background</h1><span class="sub">Character record · continued</span></header>
  <section>
    <h2>Equipment carried</h2>
    {table(["EQ-ID", "Item", "Qty", "Mass kg", "Cond.", "Harm / armor", "Range bands", "Skill", "Notes"], 13)}
    <p class="note">Condition: usable / degraded (−10 to tasks relying on it) / unusable. Harm: one D20 (1–5→1, 6–10→2, 11–15→3, 16–20→4), plus profile Low +0 / Moderate +1 / High +2 / Extreme +3 and success degree +0/+1/+2/+3, minus applicable armor 0–3 once.</p>
  </section>
  <section class="grid g4">
    {field("Total carried mass (kg)")}{field("Load ratio (mass ÷ carry ref)")}{field("Load band (provisional)")}{field("Armor worn: rating and covers")}
  </section>
  <p class="note">Provisional load bands (F17, proposed): ratio ≤ 1 normal, above 1 burdened, above 1.5 heavily burdened. Bulk 0–3 only in Advanced or Simulation play.</p>
  <section class="grid g4">
    {field("Ammunition uses")}{field("Medical supply uses")}{field("Repair supply uses")}{field("Food / water rations")}
  </section>
  <section class="grid g2">
    <div>
      <h2>Money</h2>
      <div class="grid g2">{field("Funds (2026 USD) or local trade goods")}{field("Means 0–6 (instead of funds)")}</div>
      <p class="note">Use funds or Means, never both for the same character.</p>
      <div class="lines" style="margin-top:4px"><div></div><div></div></div>
      <h2 style="margin-top:8px">Qualifications and access</h2>
      <div class="lines"><div></div><div></div><div></div><div></div></div>
      <h2 style="margin-top:8px">Occupational advantage</h2>
      <div class="lines"><div></div><div></div><div></div></div>
    </div>
    <div>
      <h2>Contacts and relationships</h2>
      {table(["Name", "Role and limits", "Standing"], 6)}
      <h2 style="margin-top:8px">Goals and history</h2>
      <div class="lines"><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  </section>
  <section class="ref">
    <div class="grid g3">
      <div><span class="lbl">Degrees of success (target T)</span>
        <table><tbody><tr><td>Critical</td><td>natural 01</td></tr><tr><td>Exceptional</td><td>≤ floor(T/5)</td></tr><tr><td>Strong</td><td>≤ floor(T/2)</td></tr><tr><td>Standard</td><td>≤ T</td></tr><tr><td>Failure</td><td>&gt; T; natural 100 critical</td></tr></tbody></table></div>
      <div><span class="lbl">Difficulty (R03)</span>
        <table><tbody><tr><td>Very easy +30</td><td>Challenging −10</td></tr><tr><td>Easy +20</td><td>Difficult −20</td></tr><tr><td>Favorable +10</td><td>Severe −30</td></tr><tr><td>Standard 0</td><td>Extreme −40</td></tr></tbody></table>
        <span class="note">Final target clamped 1–99. Helpers +5 each, max +10.</span></div>
      <div><span class="lbl">Combat round (6 s)</span>
        <table><tbody><tr><td>1 main action, 1 move, 1 reaction</td></tr><tr><td>D20 base 1–4 + profile 0–3 + degree 0–3 − armor 0–3</td></tr><tr><td>Cover: partial −10, substantial −20</td></tr></tbody></table></div>
    </div>
  </section>
  {footer("Character record", 3, 3)}
</div>"""
    return p1 + p2 + p3


# ---------------- Trackers ----------------
def trackers():
    total = 5
    enc_rows = "".join("<tr>" + "<td></td>" * 6 + '<td class="m">☐</td><td class="m">☐ ☐ ☐</td><td></td></tr>' for _ in range(26))
    t1 = f"""
<div class="page">
  <header class="mast"><h1>Encounter tracker</h1><span class="sub">GM · Section 4.1–4.4</span></header>
  <section class="grid g4">{field("Encounter / stakes", "span2")}{field("Date and place")}{field("Round")}</section>
  <section>
    <h2>Initiative order (highest first)</h2>
    <div class="wrap"><table><thead><tr><th>Participant</th><th>Init.</th><th>PER (tie)</th><th>HP / max</th><th>Stamina</th><th>Stress band</th><th>Reaction used</th><th>Deterioration</th><th>Conditions, cover, range band</th></tr></thead><tbody>{enc_rows}</tbody></table></div>
  </section>
  <section class="ref">
    <span class="lbl">Round procedure</span>
    <p class="note">Each participant: one main action and one movement allowance in either order, plus one reaction. Main action may become a second move, never a second reaction. Unused actions expire. Ties: higher effective PER, then simultaneous. Recalculate initiative next round after relevant changes.</p>
    <p class="note">Defense: an aware defender may spend the reaction on an opposed evasion (DEX) or Close Combat check, chosen before dice. Attacker wins only if defense does not win or tie. Range bands: engaged / near / far / out of reach. Cover −10 partial, −20 substantial.</p>
    <p class="note">At 0 HP after severe or critical injury (or an established ongoing life-threatening condition): unstable; otherwise stable incapacitated. Mark one deterioration box at the end of each later round; death at three. Stabilize: helper's main action, Medicine check, one medical supply use.</p>
  </section>
  {footer("Trackers", 1, total)}
</div>"""

    t2 = f"""
<div class="page">
  <header class="mast"><h1>Development project ledger</h1><span class="sub">Player and GM · Section 5.6–5.7, CCDD-12</span></header>
  <section class="grid g4">{field("Character", "span2")}{field("Current-era slots")}{field("Slots in use")}</section>
  <section>
    <h2>Projects</h2>
    {table(["Project ID", "Type", "Target or context", "Prior state", "Requirements", "Instructor / resource", "Planned h", "Credited h", "Evidence IDs", "State", "GM"], 16)}
    <p class="note">Type: competency next level, adaptation milestone, language modality, general skill practice, career retraining. State: planned, locked, ready, active, paused, assessment pending, completed. Each hour is credited to one project only. General practice: one mark per 40 active hours of relevant nonroutine practice.</p>
  </section>
  <section>
    <h2>Time ledger</h2>
    {table(["Date", "Hours", "Project ID", "Activity", "Evidence ID", "Approved"], 10)}
  </section>
  {footer("Trackers", 2, total)}
</div>"""

    t3 = f"""
<div class="page">
  <header class="mast"><h1>Adaptation milestone record</h1><span class="sub">Transitional characters · Section 5.1–5.3</span></header>
  <section class="grid g4">{field("Character", "span2")}{field("Origin era")}{field("Current era")}</section>
  <section>
    <h2>Milestones</h2>
    {table(["Evidence ID", "Skill and context", "Evidence type", "Active hours", "Demonstration", "Assessor", "Prior deficit", "Resulting deficit", "Date"], 18)}
    <p class="note">Evidence type: familiarization, guided practice, independent application, advanced adaptation. Each accepted milestone removes 5 points, capped at the outstanding deficit. A structured milestone normally needs at least 8 active hours plus a documented demonstration. No duplicate evidence or repeated identical rolls.</p>
  </section>
  {footer("Trackers", 3, total)}
</div>"""

    surv_rows = "".join(f'<tr><td class="m">{d}</td>' + "<td></td>" * 8 + "</tr>" for d in range(1, 22))
    t4 = f"""
<div class="page">
  <header class="mast"><h1>Survival and supply tracker</h1><span class="sub">Section 7.3, F20</span></header>
  <section class="grid g4">{field("Character or group", "span2")}{field("Start date")}{field("Declared demand changes")}</section>
  <section>
    <h2>Daily review</h2>
    <div class="wrap"><table><thead><tr><th>Day</th><th>Water: met / half / unmet</th><th>Water counter</th><th>Food: met / half / unmet</th><th>Food counter</th><th>Stamina cost</th><th>Condition</th><th>Supplies used</th><th>Notes</th></tr></thead><tbody>{surv_rows}</tbody></table></div>
  </section>
  <section class="ref">
    <p class="note">Demand: 1 food and 1 water ration per character per day. Each unmet category costs 5 stamina (half ration 2). Counter +1 for each unmet day, −1 for each fully met day, minimum 0.</p>
    <p class="note">Deprived (water 2+, food 4+): −10 physical, no HP recovery. Severely deprived (water 3+, food 7+): −20 physical and sustained concentration, no HP recovery, sleep restores no stamina. Critical (water 5+, food 21+): −30 or infeasible; GM may declare a life-threatening condition.</p>
    <p class="note">Ammunition: one use per encounter with ranged fire (Standard). Medical: one use per stabilization or daily care assessment. Repair: one use per repair project.</p>
  </section>
  {footer("Trackers", 4, total)}
</div>"""

    prog = "".join(f"<div>{i}</div>" for i in range(1, 11))
    proj_block = f"""
  <section class="grid g4">{field("Goal", "span2")}{field("Lead skill")}{field("Competency required")}</section>
  <section class="grid g4">{field("Scale or size class")}{field("Labor hours required")}{field("Workers assigned / max")}{field("Elapsed minimum")}</section>
  <section class="grid g4">{field("Interval")}{field("Progress target (3 / 6 / 10)")}{field("Deadline")}{field("Difficulty")}</section>
  <div class="track" style="grid-template-columns: repeat(10, 1fr)">{prog}</div>
  {table(["Interval / date", "Labor h", "Result", "Progress", "Materials and notes"], 9)}"""
    t5 = f"""
<div class="page">
  <header class="mast"><h1>Extended task and project tracker</h1><span class="sub">R02, Section 7.4, F21–F22</span></header>
  <section><h2>Project A</h2></section>{proj_block}
  <section><h2>Project B</h2></section>{proj_block}
  <section class="ref">
    <p class="note">Extended task progress: critical +4, exceptional +3, strong +2, standard +1, failure 0, critical failure 0 plus a declared setback. Crafting and construction: progress = min(1, credited labor ÷ required labor) with one D100 at the point of meaningful uncertain completion; scale 5+ may declare stages, each with its own check.</p>
  </section>
  {footer("Trackers", 5, total)}
</div>"""
    return t1 + t2 + t3 + t4 + t5


OUT.mkdir(parents=True, exist_ok=True)
(OUT / "character-sheet.html").write_text(wrap_doc("Blackbox Character Record", character_sheet()))
(OUT / "trackers.html").write_text(wrap_doc("Blackbox Table Trackers", trackers()))
print("ok")
