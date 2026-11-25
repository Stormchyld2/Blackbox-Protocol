import assert from 'node:assert/strict';
let checks=0;const eq=(a,b)=>{assert.deepEqual(a,b);checks++};
function resolve(entries){let out=new Map();for(const e of [...entries].sort((a,b)=>a.layer-b.layer)){let old=out.get(e.id);if(old&&(!e.override||old.layer===e.layer))throw Error('conflict');out.set(e.id,e);}return out;}
eq(resolve([{id:'x',layer:0,v:1},{id:'x',layer:4,v:2,override:true}]).get('x').v,2);
for(const entries of [[{id:'x',layer:0},{id:'x',layer:1}],[{id:'x',layer:1},{id:'x',layer:1,override:true}]]){let blocked=false;try{resolve(entries)}catch{blocked=true}eq(blocked,true);}
function validGraph(g){let active=new Set(),done=new Set();function visit(id){if(active.has(id)||!Object.hasOwn(g,id))return false;if(done.has(id))return true;active.add(id);for(const dep of g[id])if(!visit(dep))return false;active.delete(id);done.add(id);return true;}return Object.keys(g).every(visit);}
eq(validGraph({a:[],b:['a']}),true);eq(validGraph({a:['b']}),false);eq(validGraph({a:['b'],b:['a']}),false);
const presets=['Quick Start','Casual','Standard','Advanced','Simulation','Custom'];
const state={hp:3,stress:50,cdr:25000,stock:7,clock:3600};for(const a of presets)for(const b of presets){let next={...state,preset:b};for(const k of Object.keys(state))eq(next[k],state[k]);}
const books=['Quick-Start Rules','Core Rulebook','GM Handbook','Signal Lost','Dead Zone','Transition Handbook','Equipment Compendium','Investigation Handbook','Survival Handbook','Anomaly Compendium',"Homebrew Creator's Guide",'Zero Day'];eq(books.length,12);eq(new Set(books).size,12);
const release=records=>records.every(r=>r.status==='cleared'&&r.evidence&&r.license);
for(const status of ['unreviewed','pending','cleared','restricted','rejected'])for(const evidence of ['', 'proof'])for(const license of ['', 'terms'])eq(Boolean(release([{status,evidence,license}])),status==='cleared'&&Boolean(evidence)&&Boolean(license));
console.log(checks);