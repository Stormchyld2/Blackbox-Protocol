# Playtest simulation scripts

Monte Carlo and scripted-session tools used for [notes/PLAYTEST-SIMULATION-1.md](../../notes/PLAYTEST-SIMULATION-1.md).
They encode the rules as written (R01–R06, Sections 3.4, 4.1–4.4, 5.x, 7.3–7.4, CCDD-12/19/20) and are not a rules
authority. Where a rule is ambiguous, the reading used is noted in the script docstring and in the report.

Requires Python 3 only (standard library). Run from this folder:

```
python3 sim_resolution.py   > out_sim_resolution.md    # success rates by pregen, skill and difficulty
python3 sim_combat.py       > out_sim_combat.md        # hit chances, harm, duels, dying, strain
python3 sim_attrition.py    > out_sim_attrition.md     # stress, deprivation counters, recovery
python3 sim_progression.py  > out_sim_progression.md   # skill marks, competency hours, CDR, deficits, crafting
python3 session_log.py 25   > session_log_seed25.txt   # dice log for the two sample sessions
```

Files: `rules.py` (shared rule functions), `pregens.py` (the six pregens). Seeds are fixed, so output is reproducible.
