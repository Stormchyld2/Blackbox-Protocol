"""Independent math audit of OCCUPATION-PACKAGES and the index (run from repo root).

Recomputes Section 2.3 allocations, catalogue references, baseline CDR (100 x complexity x Q(L)),
prerequisite closure, career targets and Section 5 adaptation deficits. Flexible status-only
profiles report an empty allocation by design. Lines starting "note:" are relevance notes
(grant governed by a skill outside the ordered five), not errors.
"""
import re,json,sys,collections
sys.path.insert(0,__import__('os').path.dirname(__file__)); import common
SK=open('notes/SKILL-NOTES.md',encoding='utf-8').read()
PK=open('notes/OCCUPATION-PACKAGES.md',encoding='utf-8').read()
CANON=set(common.CANONICAL_SKILLS)
ROM={'I':1,'II':2,'III':3,'IV':4,'V':5}
Q=[0,1,3,7,15,31]
# catalogue
cat={}
for m in re.finditer(r'^### ([A-Z]+(?:-[A-Z]+)?-\d+) — (.+?)\n\nScope: (.*?)\n',SK,re.M):
    cid,title,body=m.groups()
    gov=re.search(r'Governing: ([A-Za-z ]+?) \(',body).group(1)
    c=int(re.search(r'Complexity (\d)',body).group(1))
    pre=re.search(r'Supporting prerequisites: (.*?)\. Resources',body).group(1)
    pids=re.findall(r'([A-Z]+(?:-[A-Z]+)?-\d+)',pre)
    patt=re.search(r'\(([IV/]+) by target level\)',pre)
    patt=[ROM[x] for x in patt.group(1).split('/')] if patt else [1,1,2,3,4]
    cat[cid]=dict(title=title,gov=gov,c=c,pre=pids,patt=patt,raw=pre)
print('catalogue',len(cat))
ALLOC={'Blackbox Protocol':[30,25,20,15,10],'Signal Lost':[25,20,15,10,10],'Dead Zone':[20,15,10,10,5]}
issues=collections.defaultdict(list); stats=collections.Counter()
blocks=re.split(r'^### (?=O-\d{3} — )',PK,flags=re.M)[1:]
profs={}
for b in blocks:
    hdr=b.split('\n',1)[0]; m=re.match(r'(O-\d{3}) — (.+) \((.+)\)',hdr); pid,name,setting=m.groups()
    profs[pid]=(name,setting,b)
    al=re.search(r'allocation \(occupation-specific\): (.*?)\.\s*\n',b)
    if al:
        pairs=[(s.strip(),int(v)) for s,v in re.findall(r'([A-Za-z ]+?) \+(\d+)',al.group(1))]
        skills=[s for s,_ in pairs]; pts=[v for _,v in pairs]
        stats['alloc']+=1
        if pts!=ALLOC[setting]: issues[pid].append(f'allocation {pts} != {ALLOC[setting]}')
        if len(set(skills))!=5: issues[pid].append('allocation skills not distinct')
        for s in skills:
            if s not in CANON: issues[pid].append(f'noncanonical skill {s}')
    else:
        skills=[]; stats['flex']+=1
    bl=re.search(r'Qualified baseline: (.*)',b)
    grants=[]
    if bl and 'none' not in bl.group(1).lower()[:10]:
        for gid,lv in re.findall(r'([A-Z]+(?:-[A-Z]+)?-\d+) [^;]*? (I{1,3}|IV|V)(?:;|$)',bl.group(1)):
            grants.append((gid,ROM[lv]))
    stats['grants']+=len(grants)
    gl=dict(grants)
    if len(gl)!=len(grants): issues[pid].append('duplicate grant id')
    cdr=0
    for gid,lv in grants:
        if gid not in cat: issues[pid].append(f'unknown competency {gid}'); continue
        e=cat[gid]; cdr+=100*e['c']*Q[lv]
        if lv>3: issues[pid].append(f'{gid} baseline level {lv} above III')
        for p in e['pre']:
            need=e['patt'][lv-1]
            have=gl.get(p,0)
            if have<need: issues[pid].append(f'prereq gap: {gid} L{lv} needs {p} L{need}, has L{have}')
        if skills and e['gov'] not in skills: stats['gov_not_ordered']+=1; issues[pid].append(f'note: {gid} governed by {e["gov"]}, not in ordered skills')
    cm=re.search(r'Conditional baseline CDR[^:]*: (\d+)',b)
    if cm:
        if int(cm.group(1))!=cdr: issues[pid].append(f'CDR stated {cm.group(1)} computed {cdr}')
        stats['cdr_checked']+=1
    elif grants: issues[pid].append('no CDR stated')
    tg=re.search(r'Career targets: (.*)',b)
    if tg:
        for gid,lv in re.findall(r'([A-Z]+(?:-[A-Z]+)?-\d+) (I{1,3}|IV|V)\b',tg.group(1)):
            if gid not in gl: issues[pid].append(f'career target {gid} not granted')
            elif ROM[lv]<=gl[gid]: issues[pid].append(f'career target {gid} {lv} not above baseline')
    # level-III rule: top grant should be in lead discipline
    if grants and skills:
        top=[g for g,l in grants if l==3]
        if not top: issues[pid].append('note: no level III grant')
# index adaptation math
d=json.load(open('notes/OCCUPATION-INDEX.json')); tab=common.parse_deficits()
idx={}
def w(x):
    if isinstance(x,dict):
        if 'sourcebook' in x: idx[x['id']]=x
        for v in x.values(): w(v)
    elif isinstance(x,list):
        for v in x: w(v)
w(d)
for pid,p in idx.items():
    a=p['sourcebook']['adaptationExample']; s=a['skill']; r=a['referenceDeficit']
    if s not in CANON: issues[pid].append(f'adaptation skill {s} noncanonical')
    sl,dz=tab[s]
    if a['originSetting']=='BP':
        exp=sl if 'SL' in a['context'] else dz
        if r!=exp: issues[pid].append(f'adaptation {s} BP ref {r} expected {exp}')
    elif a['originSetting']=='SL':
        exp=-max(0,abs(dz)-abs(sl))
        if r!=exp: issues[pid].append(f'adaptation {s} SL->DZ ref {r} expected {exp}')
    else:
        if r not in (-5,-10,-15,-20,-25): issues[pid].append(f'local ref {r} out of range')
    if r==0: issues[pid].append('zero deficit')
    if a['milestonesToClear']!=abs(r)//5: issues[pid].append('milestones wrong')
    # index vs packages
    name,setting,b=profs[pid]
    ordered=[x['skill'] for x in p['sourcebook']['orderedSkills']]
    pts=[x['points'] for x in p['sourcebook']['orderedSkills']]
    if p['sourcebook']['orderedSkills'] and pts!=ALLOC[setting]: issues[pid].append('index points mismatch')
    stats['adapt']+=1
print(dict(stats))
real={k:[i for i in v if not i.startswith('note:')] for k,v in issues.items()}
real={k:v for k,v in real.items() if v}
print('profiles with real issues',len(real))
for k in sorted(real): print(k,profs[k][0],'::',real[k])
notes=collections.Counter(i for v in issues.values() for i in v if i.startswith('note:'))
print('notes total',sum(notes.values()))
json.dump({k:issues[k] for k in sorted(issues)},open('tools/occupation_review/audit_math_report.json','w'),indent=1)
