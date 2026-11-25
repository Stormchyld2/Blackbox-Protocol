# F21 Crafting and Manufacturing

Canonical DESIGN-NOTES F21; delegated working foundation, not final publication. Existing shared mechanics remain authoritative.

## Project contract
Use F11 time and F17/F20 stock ledgers, not a separate inventory. Recipe/project ID, version, output/unit, prerequisites, competency, tools, workspace, input quantities, substitutions, labor hours, elapsed minimum, capacity, difficulty, quality criteria, maintenance and waste. Repair targets existing instance; manufacture creates new lot. Declare all requirements and failure consequences before work. No real-world hazardous fabrication instructions.
## Procedure
Planned → ready → active → paused/assessment → completed or abandoned. Reserve inputs and capacity, validate access, allocate exclusive labor once, record actual elapsed time. Inputs consumed at declared stages, reservations released on cancellation; consumed material not magically refunded. Work progress=min(1,credited labor/required labor), subject to elapsed minimum and dependencies. Multiple workers contribute distinct hours only where task allows; no automatic speedup beyond capacity. At meaningful uncertain completion use existing D100, one lead and R02 helpers; no extra check per hour. Routine feasible work succeeds without roll. Impossible missing prerequisite blocks start.
## Quality and failure
Delegated qualitative outcomes: ordinary success meets specification, strong or better may improve a predeclared quality criterion, failure yields incomplete/rework or declared imperfect output, critical failure invokes predeclared fictional setback. No automatic catastrophe or free extra output. Rework requires declared additional time/materials; preserve usable work. Output transaction idempotent; maintenance updates condition not duplicate ownership. Substitution explicitly validated for compatibility and revised requirements.
## Modes and deliverables
Standard recipe card and completion block; Advanced components, substitutions and repair quality; Simulation production chain, workshop capacity and scheduling. Example fictional project requires 12 labor hours and 6 elapsed hours, two eligible workers each contribute6; completion possible after6h, not3h. F22 uses same project schema; F36 calibrates recipe times, quality and costs. Catalogue recipe data remains production work.

## Approved calibration (2026-11-25)
User-approved numbers for this foundation are recorded in notes/DESIGN-NOTES.md, Outstanding work 7.4. That section is authoritative where it fills values this file left to calibration.

## Progressive crafting expansion
User-approved direction 2026-11-25: specialist-oriented small Core crafting system and corporate supplier opportunities, expanded Signal Lost crafting, comprehensive post-collapse Dead Zone crafting. See `notes/PROGRESSIVE-CRAFTING-PLAN.md` for discipline mapping, cumulative recipe targets and implementation dependencies. Existing F21 project contract remains authoritative; proposed ratings and recipe allocations are not final mechanics.

## Crafting quality and setback calibration — approved working model, 2026-11-25

Player-approved design: qualified routine projects may be completed without a roll at **Standard** quality; the player may instead elect one D100 quality-risk roll to pursue better workmanship, accepting Basic output or a recipe-declared failure. Nonroutine uncertain projects require the check. No reroll or duplicate product is awarded for taking the guaranteed outcome. All project prerequisites, labor, elapsed time, material reservations, capacity and F17 transactions remain in force. An automatic outcome does not waive time, costs, or prerequisites.

**Working D100 quality table (inclusive):**

| Competency | Failure | Basic | Standard | Superior | Exceptional |
| --- | --- | --- | --- | --- | --- |
| 1 | 01–49 | 50–79 | 80–100 | — | — |
| 2 | 01–39 | 40–64 | 65–89 | 90–100 | — |
| 3 | 01–29 | 30–49 | 50–69 | 70–94 | 95–100 |
| 4 | 01–19 | 20–39 | 40–59 | 60–89 | 90–100 |
| 5 | 01–09 | 10–29 | 30–49 | 50–84 | 85–100 |

Percentages for success: 51/61/71/81/91. Exceptional rates: 0/0/6/11/16. These are standalone crafting calibration bands, **not** replacement of general skill percentage or other existing D100 resolution. The correspondence between this five-tier craft competency and canonical competency records must be validated before publication.

**Working difficulty scale (pending core-resolution reconciliation):** favorable +10; normal 0; challenging −10; difficult −20; extreme −30. For a rolled attempt, adjust the D100 total then clamp to 1–100 and read the crafter's own row. The row's unavailable quality tiers remain inaccessible even on natural 100. Required knowledge, tools, material grades and workspace are gates, not modifiers that permit impossible attempts. Routine guaranteed Standard is a separate choice, not a favorable modifier. Do not apply these provisional modifiers in addition to a conflicting canonical modifier system; resolve that integration first.

**Recipe-declared setbacks:** minor = rework labor, usable materials preserved; material = declared replacement components and labor; major = unusable current attempt with only declared salvage credited. The recipe must specify triggering failure severity and exact incremental quantities/hours before a roll; no universal material destruction, second setback roll, free retries or double-counted recovered stock. If no detailed severity rule is yet specified, a failed uncertain project pauses for GM-declared rework, with no automatic catastrophic loss.

**Quality and economy:** proposed market-value multipliers Basic 0.75×, Standard 1×, Superior 1.25×, Exceptional 1.5×, applied only to a quote's quality-sensitive portion where appropriate. These are indicative valuations, not guaranteed offers or payments; F18 determines actual accepted sale, buyer demand, wholesale terms, fees, and inventory transfer. Better quality is not an automatic combat modifier or universal durability bonus.

**Analytical test fixtures (not human playtests):**
- Row partitions cover each integer 1–100 exactly once; successes increase monotonically by ten percentage points per level, Exceptional by five percentage points from levels 3 to 5.
- For difficulty −20/−10/0/+10, success percentages by level: L1 31/41/51/61; L2 41/51/61/71; L3 51/61/71/81; L4 61/71/81/91; L5 71/81/91/100. Clamping makes the L5 +10 outcome exactly 100%, not 101%.
- For a hypothetical Standard $100 item, gross quality-adjusted expected value **per attempted roll**, counting failure as zero and assuming all successful output sells at listed value: L1 $43.50; L2 $57.50; L3 $75.25; L4 $89.00; L5 $102.75. This excludes input losses, labor, fees, overhead, rejection, and unsold goods; it does not establish profitability.
- A qualified routine project may always choose guaranteed Standard, so optional rolling must not be represented as mandatory. For a hypothetical $100 Standard sale, guaranteed Standard gross value is $100 before costs and demand, often a better economic choice than risky rolling at lower levels.
- Regression cases required: absent prerequisites block start; automatic Standard consumes reserved inputs once; opted-in failure follows declared rework; difficulty cannot unlock a prohibited tier; sale without a buyer yields no cash; rejected contract produces no payment; repair never creates a second owned instance.

**Status:** table, choice of guaranteed Standard versus optional quality-risk roll, and recipe-defined failure structure approved in conversation. Difficulty magnitudes and value multipliers are working proposals accepted for testing, subject to canonical resolution reconciliation and F36 human playtests. Do not call the numerical system fully validated or publication-ready.

## Canonical D100 reconciliation audit — 2026-11-25

**Material conflict found:** The canonical R01–R03 system is D100 **roll-under** with final target clamped to 1–99, natural 01 critical success and natural 100 critical failure. R03's difficulty ladder is +30 very easy, +20 easy, +10 favorable, 0 standard, −10 challenging, −20 difficult, −30 severe, −40 extreme. CCDD-20 contributes +0/+5/+10/+15/+20 by competency level. The previously proposed F21 **roll-high** five-row outcome table, its natural-100 best-result behavior, the proposed −30 extreme label, and roll-total clamping to 1–100 therefore **conflict** with canonical resolution. They must not be presented as integrated or mechanically final.

**Nonconflicting decisions retained:** prerequisites and F11 labor; automatic Standard on qualified routine work, with an optional single risky roll; tier unlocks (L1 Standard maximum, L2 Superior, L3+ Exceptional); relative Exceptional target bands (L3 95–100, L4 90–100, L5 85–100) as approved design intent; recipe-declared setbacks; market value only on an actual F18 quote. Canonical difficulty and CCDD-20 modifiers apply to skill checks; do not add the former provisional crafting modifier ladder.

**Reconciliation proposal requiring explicit mechanical approval:** perform a single canonical roll-under check for success using R01–R03 and CCDD-20, then derive workmanship from the *same die* and the margin/competency (no second roll). Preserve the L1/L2/L3 quality gates. Calibrate margin-to-quality thresholds to preserve intended rarity, including a rare L3 Exceptional and a higher but still limited L5 rate. The exact former raw 95–100 Exceptional intervals cannot be preserved literally while natural 100 is a canonical critical failure; they are therefore recorded as target frequencies, not operational die faces. Until a calibrated margin table is approved, use canonical ordinary/strong/critical success and the declared quality criteria rather than the conflicting roll-high table.

**Preliminary regression checks:** no die result may both be canonical critical failure and Exceptional; final targets never exceed 99; routine auto-Standard is not a die roll and does not trigger natural 100; a single die decides an uncertain completion; missing required tools blocks the attempt; every failure/rework conserves stock; the maximum workmanship tier is gated by competency. Full statistical calibration against R01–R03 and the underlying skill range is still required.

## User decision — canonical roll-under quality resolution (2026-11-25)

The user explicitly selected canonical R01–R03 **D100 roll-under** for crafting, with workmanship determined from the **margin of success on that same roll**. This supersedes the earlier operational roll-high quality table. Natural 01 remains critical success and natural 100 remains critical failure; difficulty and competency modifiers come only from canonical R03 and CCDD-20. Routine qualified work may be accepted at guaranteed Standard quality, or the player may opt into one uncertain roll to seek higher quality with the recipe-declared downside. Nonroutine uncertain projects roll as usual. Tier access: level 1 up to Standard, level 2 up to Superior, level 3+ up to Exceptional; prerequisites still apply. Exceptional frequencies of 6%, 11%, 16% for levels 3, 4, 5 are *design calibration targets*, not automatic fixed probabilities under varying skill targets. Margin-to-quality thresholds are pending probability calibration against actual skill targets and must not be invented as approved numbers. Recipe-specific failure costs and F18 sale/quote constraints remain in effect.
