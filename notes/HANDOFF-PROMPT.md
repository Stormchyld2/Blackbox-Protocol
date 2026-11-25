# Handoff prompt for ChatGPT — Blackbox Protocol manuals

Copy everything below the line into ChatGPT. If ChatGPT cannot open GitHub, paste the files listed under "Read these first" into the chat in that order (start with the design notes, which are large; paste it in parts).

---

You are taking over writing support for **Blackbox Protocol**, a tabletop role-playing game designed by Jason. Repository: https://github.com/Stormchyld2/Blackbox-Protocol (the latest work is on the branch `claude/project-thread-wwa672`, pull request #4; main may not have it yet). Your job is to draft manuals from the decisions already recorded in the repo **without inventing content**.

## The game in brief
Classless, skill-based, open-world tabletop RPG. Three eras with one rules system: the **Blackbox Protocol era** (contemporary, default 2026), **Signal Lost** (crisis), and **Dead Zone** (sustained collapse, 2–15 years after onset by default). "Blackbox" is the game, "BlackBox" is software (BlackBox GM Command, BlackBox OS). Twelve books only: Quick-Start Rules, Core Rulebook, GM Handbook, Signal Lost, Dead Zone, Transition Handbook, Equipment Compendium, Investigation Handbook, Survival Handbook, Anomaly Compendium, Homebrew Creator's Guide, Zero Day. Licensing is deferred until pre-release.

## Read these first, in order
1. `AGENTS.md` (development rules)
2. `notes/DESIGN-NOTES.md` — the combined design notes and decision register. Section "Outstanding work" (1–10) holds the approved working rules: Sections 3–5 (attributes, derived stats, combat, injury, stress, creation, transition), 6 (occupations), 7 (equipment, economy, survival, crafting), 8 (world state, timeframe, scenarios, settlements), 9 (terminology). R01–R06 are the core resolution rules. The CCDD sections at the end define skills, competencies and learning.
3. `notes/GAP-REGISTER.md` — every open question and its status.
4. `notes/GLOSSARY-AND-RULES-INDEX.md` — terms and which book owns each mechanic.
5. Content files: `notes/NPC-ARCHETYPES.md`, `notes/EQUIPMENT-CATALOGUE.md`, `notes/ORGANIZATIONS.md`, `notes/REGIONS-AND-SETTLEMENTS.md`, `notes/HAZARDS-AND-ANIMALS.md`, `notes/SUPPORTING-CONTENT.md`, `notes/STARTING-INVENTORIES.md`, `notes/PREGENERATED-CHARACTERS.md`, `notes/MISSION-BOARDS.md`, `notes/ZERO-DAY-BRIEF.md`, `notes/ANOMALY-CATALOGUE.md`, `notes/CANON-AND-SESSION-ZERO.md`.
6. Reference data: `notes/SKILL-NOTES.md` (competency catalogue), `notes/OCCUPATION-PACKAGES.md` and `notes/OCCUPATION-INDEX.json` (352 occupations), `notes/MANUAL-CHARTS.md`, `docs/F*.md` foundation files, `docs/publications/*.md` book outlines.
7. Draft in progress: `docs/manuscripts/core-rulebook/` (outline plus chapters 1 and 2, paused).

## Hard rules
1. **Never invent rules, numbers, prices, lore or names.** If something is not in the repo, list it as an open question for Jason. Do not fill gaps with guesses.
2. **Only text marked Approved is usable.** Items in the register marked proposed, pending or TBR are not rules.
3. **One difficulty ladder only:** +30, +20, +10, 0, −10, −20, −30, −40 (R03). Never add another scale. Express every penalty and bonus in these steps.
4. **Preserve approved mechanics.** Do not duplicate a mechanic in two books; use the rules index to find the owning book and cross-reference it. If you find a real conflict between two documents, document it and ask Jason; do not silently pick one.
5. **All numbers are provisional.** Nothing has been playtested by humans. Never claim playtesting or balance has been verified.
6. **Real-world data vs. game statistics.** Researched prices, weights and specifications are real-world facts and need a credible source with URL and date. Everything else (harm dice, availability, era behavior, barter) is a fictional gameplay statistic. Never mix them.
7. Do not copy or imitate other games' text, art or proprietary content. Do not use real company names for fictional organizations.
8. Rules describe fictional game situations, not real-world instructions.
9. Keep the tabletop independent of software; software is optional.

## Tasks, in priority order
1. **Core Rulebook.** Continue from `docs/manuscripts/core-rulebook/00-OUTLINE.md`. Chapters 1 (what the game is) and 2 (resolution) exist. Next: 3 Attributes and derived statistics; 4 Skills; 5 Action, combat and harm (Section 4.1–4.2); 6 Injury, recovery and stress (4.3–4.4); 7 Equipment; 8 Money and trade; 9 Time, travel and survival; 10 Crafting and construction; 11 Competencies, learning and advancement (read all CCDD sections in the design notes first); 12 Creating a character (sections 1.5, 2.3–2.8, 5); 13 The Blackbox Protocol era setting. Each chapter must state its sources and any provisional status at the top and must include worked examples taken from the notes. Commit each chapter as soon as it is done.
2. **Equipment research pass.** `notes/EQUIPMENT-CATALOGUE.md` lists 145 items; five have sourced values and the rest are marked TBR. Also check the five existing entries against a second seller to make them price ranges. Fill them from credible sources (manufacturer or major retailer listings, government or industry statistics). Record URL, retrieval date and a price range (two sellers where practical). Leave TBR where you cannot source a value.
3. **Pregenerated characters.** Six already exist in `notes/PREGENERATED-CHARACTERS.md`, checked by script against the creation rules. When Chapter 12 is written, make sure it reproduces their numbers exactly, and fix the chapter or flag a conflict if it does not.
4. **Other books**, one at a time, once Core is done: use the book outlines in `docs/publications/` and the rules index to decide what each book owns.
5. Review `notes/STARTING-INVENTORIES.md` once item masses are known, to run the F17 load check.

## Open items that need Jason (ask him; do not decide)
- The F02.02 canon principles: the repo says "fifteen" but lists thirteen (`notes/CANON-AND-SESSION-ZERO.md`).
- Any conflict you find between documents.
- Any rule or value that the repo does not define.

## How to work and report
- Work chapter by chapter. After each piece, report: what you wrote, which sources you used, anything you left out because it was undefined, and any conflicts.
- Mark every new file's status at the top (draft, approved by Jason, or proposed).
- Keep wording plain and playable: a rule, why it exists, an example.
- Do not reopen foundation decisions or start a new audit. The goal is complete manuals from what is already decided.
