# BlackBox Character Companion — application design notes

Status: user requested standalone Windows and Android companion; name, UI organization and implementation details proposed under delegation. No software implemented. Existing tabletop rules remain authoritative in DESIGN-NOTES.md and SKILL-NOTES.md.

## Purpose and boundaries
Offline standalone character management and learning tracker between sessions; no GM host, account, cloud, subscription or internet required. Fourth application alongside GM Command, BlackBox OS (GM-hosted browser client) and Player Display. Share canonical rules data and calculation engines, not duplicate mechanics. Later optional local sync with GM Command; manual export/import must work independently. Printed books remain complete and playable without software.

## Character records
Multiple local characters; create/edit/import/export; avatar upload or default placeholder, local image storage. Identity, setting, campaign, age, description, background, attributes, derived stats, general skills, occupations and experience tiers, qualifications, authority, relationships, contacts, goals, conditions, health, fatigue, inventory, equipment condition, quantities, currency, notes and history. Starting occupation packages load from canonical data; merge highest level per ID, validate history, prerequisites, personal points and CDR. Package mapping and final character mechanics are dependencies, not completed. Editable records distinguish calculated fields from user inputs. Record provenance and corrections. Inventory supports ownership, location, accessibility, weight, consumables and condition as rules become final.

## Learning interface
Dashboard shows total CDR, next slot threshold, active slots, active projects, recent completions. Catalogue filters by general/occupational, introduction setting, branch, search, eligible/locked/learned; show description, current/next level, complexity, minimum CDR, award, hours, bonus, prerequisites, access, resources and missing requirements. Checkbox/start action opens confirmation, validates all gates and available slot, records target level, start timestamp, campaign time, training schedule, required hours, discount snapshot and expected finish. Unlimited planned queue; locked projects cannot accrue hours. Learned tab shows acquired level, next level upgrade button, eligibility and active upgrade progress. At V show mastered. Never sum overlapping bonuses or spend CDR.

## Clock and countdown — explicit design distinction
User requested date/time countdown that progresses between sessions and moves completed training to learned. Existing CCDD-12 requires actual in-world time, shared training budget and assessment; wall-clock passage alone cannot grant competency under standard rules. Provide campaign clock as default: GM-approved calendar/date, allocated training hours, manual advance or approved downtime interval; countdown estimates completion from schedule, progress = credited/required hours. Optional real-time synchronized campaign clock mode proposed for groups that explicitly agree that real elapsed time represents in-world downtime; choose approved start/end and daily training schedule, pause during unavailable periods, allocate shared hours across projects, never credit same time twice. Device clock is display/scheduling input, not authority; persist timestamps and ledger, handle timezone/DST, clock changes, reboot, offline resume, pause and correction. No background process required for correctness: recompute from saved approved intervals on opening. If campaign explicitly authorizes continuous training, countdown may run continuously only within agreed available hours. When timer reaches zero move to assessment pending, not automatically learned unless GM has preauthorized a specific assessment/completion condition and it is satisfied. Provide one-click confirm assessment, then atomically acquire level, award CDR, update slots and move to Learned. Optional automatic completion without assessment would be a separate house rule requiring explicit approval; not adopted. No real-time mode silently changes tabletop rules.

## Screens
Dashboard; Character Sheet; Learning Catalogue; Learning Queue; Learned Competencies; Inventory; Career History; Health & Conditions; Journal; Dice Tray; Settings. Mobile bottom navigation or compact menu, Windows sidebar; accessible text and progress labels. Show start date, expected finish, remaining credited hours, percent, pause/resume, blockers, assessment state and completion history. Optional local notifications when estimated training ends; no network required. Dice tray reuse subject to audit.

## Data and interoperability
Local authoritative character files, versioned canonical rules pack, stable competency IDs, local avatar assets, learning ledger and campaign clock settings. Atomic saves, backups, import validation, migration, no silent changes, conflict review when syncing. GM-approved campaign state wins only after explicit reconciliation; private notes stay private. Export printable character sheet and learning record; optional portable character bundle between Windows/Android. No platform/framework commitment until architecture review. Reuse same calculation engine and tests across companion and GM ecosystem; validate licensing/security.

## Delivery phases
1. Finalize catalogue, occupation packages, character rules and assessment mechanics; define shared schema and tests.
2. Standalone Windows/Android character creation, sheet, local storage and inventory.
3. Catalogue, eligibility engine, queue, campaign clock, countdown, progress and learned upgrades.
4. Export/backup, dice, conditions, journal, accessibility and offline testing.
5. Optional GM Command interoperability and local sync.
No mandatory digital dependency. Test thresholds, prerequisites, duplicate grants, simultaneous projects, clock jumps, offline restart, pause/resume, assessment, CDR award once, cross-setting migration and import conflicts.

## Publication charts
Reference MANUAL-CHARTS.md for learning progression, queue and eligibility charts; add companion screenshots only after implementation. Core explains manual tracking and optional companion; GM Handbook explains campaign clock and approval; Transition Handbook explains preservation of learning state.
