import test from 'node:test';
import assert from 'node:assert/strict';
// F29 publication structure reference fixtures; no new publication canon.
const titles=['Quick-Start Rules','Core Rulebook','GM Handbook','Signal Lost','Dead Zone','Transition Handbook','Equipment Compendium','Investigation Handbook','Survival Handbook','Anomaly Compendium',"Homebrew Creator's Guide",'Zero Day'];
const owner={resolution:'Core Rulebook',attributes:'Core Rulebook',advancement:'Core Rulebook',time:'Core Rulebook',factions:'GM Handbook',world:'GM Handbook',equipment:'Equipment Compendium',evidence:'Investigation Handbook',crafting:'Survival Handbook',anomalies:'Anomaly Compendium',homebrew:"Homebrew Creator's Guide"};
const stages=['draft','mechanical review','semantic review','playtest','editorial','rights/art review','layout/accessibility','release approval'];
function validateRule(r){for(const field of ['id','edition','owner','dependencies','procedure','inputs','outputs','examples','variants','printableTracker','digitalParity','playtestCriteria'])assert.ok(Object.hasOwn(r,field),'missing '+field);assert.ok(titles.includes(r.owner));}
function canRelease(progress){return stages.every(s=>progress.includes(s));}
function link(rule){assert.ok(rule.id&&rule.edition);return rule.id+'@'+rule.edition;}
const rule=()=>({id:'R01',edition:'1',owner:'Core Rulebook',dependencies:[],procedure:'canonical reference',inputs:[],outputs:[],examples:[],variants:[],printableTracker:'reference',digitalParity:'reference',playtestCriteria:'review'});
test('F29-01 exactly twelve distinct initial publications',()=>{assert.equal(titles.length,12);assert.equal(new Set(titles).size,12);});
test('F29-02 universal resolution has one authoritative book',()=>{assert.equal(owner.resolution,'Core Rulebook');assert.equal(owner.attributes,owner.resolution);assert.equal(owner.time,owner.resolution);});
test('F29-03 supporting disciplines retain distinct ownership',()=>{assert.equal(owner.equipment,'Equipment Compendium');assert.equal(owner.evidence,'Investigation Handbook');assert.equal(owner.crafting,'Survival Handbook');});
test('F29-04 optional anomaly and homebrew books are not Core owners',()=>{assert.equal(owner.anomalies,'Anomaly Compendium');assert.equal(owner.homebrew,"Homebrew Creator's Guide");});
test('F29-05 rule manuscript contract includes provenance and parity fields',()=>{validateRule(rule());});
test('F29-06 missing playtest criterion invalidates rule contract',()=>{const r=rule();delete r.playtestCriteria;assert.throws(()=>validateRule(r));});
test('F29-07 cross-reference requires stable ID plus edition',()=>{assert.equal(link(rule()),'R01@1');assert.throws(()=>link({id:'R01'}));});
test('F29-08 outline alone cannot authorize release',()=>{assert.equal(canRelease(['draft']),false);});
test('F29-09 mechanical and semantic reviews cannot substitute for playtest',()=>{assert.equal(canRelease(stages.filter(x=>x!=='playtest')),false);});
test('F29-10 all release gates must be recorded',()=>{assert.equal(canRelease(stages),true);assert.equal(canRelease(stages.filter(x=>x!=='rights/art review')),false);});
