import test from 'node:test';
import assert from 'node:assert/strict';
// F25 optional anomaly reference. Existing F15/F14/F12/F13/F24 rules remain authoritative.
const catalogue=[
 ['A-01','psychological'],['A-02','psychological'],['A-03','technological'],['A-04','technological'],
 ['A-05','biological'],['A-06','biological'],['A-07','environmental'],['A-08','environmental'],
 ['A-09','paranormal'],['A-10','paranormal'],['A-11','cosmic'],['A-12','cosmic']
];
const dossier=(id,category)=>({id,category,signs:['observable sign'],triggers:['distinct exposure'],limits:['bounded scope'],routes:['independent witness','independent record'],counterplay:['avoid','investigate'],readings:{grounded:'possible',ambiguous:'possible',supernatural:'optional'},gmTruth:'GM only'});
function valid(d){return /^A-\d{2}$/.test(d.id)&&d.signs.length>0&&d.triggers.length>0&&d.limits.length>0&&d.routes.length>=2&&new Set(d.routes).size>=2&&d.counterplay.length>0&&Object.keys(d.readings).length===3;}
function view(d,gm){const {gmTruth,readings,...publicData}=d;return gm?d:publicData;}
function session(optIn){return {optIn,events:new Set(),pressure:0,conditions:[],worldQueue:[]};}
function expose(s,id,pressure){assert.ok(s.optIn&&id&&!s.events.has(id)&&[5,10,20].includes(pressure));s.events.add(id);s.pressure+=pressure;}
function condition(s,penalty,approved){assert.ok(s.optIn&&approved&&[-10,-20,-30].includes(penalty));s.conditions.push(penalty);}
function queue(s,id){assert.ok(s.optIn&&id&&!s.worldQueue.includes(id));s.worldQueue.push(id);}
test('F25-01 twelve approved catalogue IDs remain unique',()=>{assert.equal(catalogue.length,12);assert.equal(new Set(catalogue.map(x=>x[0])).size,12);});
test('F25-02 all six original anomaly categories have two entries',()=>{for(const c of ['psychological','technological','biological','environmental','paranormal','cosmic'])assert.equal(catalogue.filter(x=>x[1]===c).length,2);});
test('F25-03 dossiers require independent discovery routes',()=>{const d=dossier('A-01','psychological');assert.equal(valid(d),true);d.routes=['same','same'];assert.equal(valid(d),false);});
test('F25-04 dossier requires bounded effects and counterplay',()=>{const d=dossier('A-02','psychological');d.limits=[];assert.equal(valid(d),false);d.limits=['bounded'];d.counterplay=[];assert.equal(valid(d),false);});
test('F25-05 player view excludes GM truth and alternative readings',()=>{const d=dossier('A-03','technological');assert.equal(view(d,false).gmTruth,undefined);assert.equal(view(d,false).readings,undefined);assert.equal(view(d,true).gmTruth,'GM only');});
test('F25-06 grounded campaigns need not opt into anomalies',()=>{const s=session(false);assert.throws(()=>expose(s,'a',10));assert.equal(s.pressure,0);});
test('F25-07 pressure is one existing event amount per distinct event',()=>{const s=session(true);expose(s,'e',10);assert.throws(()=>expose(s,'e',10));assert.equal(s.pressure,10);});
test('F25-08 only existing approved pressure values are accepted',()=>{const s=session(true);assert.throws(()=>expose(s,'e',17));assert.equal(s.events.size,0);});
test('F25-09 conditions require adjudication and existing penalty bands',()=>{const s=session(true);assert.throws(()=>condition(s,-10,false));assert.throws(()=>condition(s,-15,true));condition(s,-20,true);assert.equal(s.conditions[0],-20);});
test('F25-10 anomalies queue through existing world events rather than auto resolving',()=>{const s=session(true);queue(s,'signal-1');assert.equal(s.worldQueue.length,1);assert.equal(s.pressure,0);assert.throws(()=>queue(s,'signal-1'));});
