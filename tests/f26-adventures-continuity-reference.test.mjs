import test from 'node:test';
import assert from 'node:assert/strict';
// F26 multi-session reference using approved Zero Day "Dead Air" design brief.
const conclusions=[
 {id:'C1',routes:['controller-log','radio-engineer','incident-email']},
 {id:'C2',routes:['workspace-photos','family-witness','departure-record']},
 {id:'C3',routes:['inspection-records','parts-invoices','junior-employee']}
];
const stages=['briefing','evidence','interview','location','deduction','danger','debrief'];
const campaign=()=>({session:0,clock:0,events:new Set(),history:[],clues:new Set(),consequences:[],worldEvents:new Set()});
function action(c,id,{time,clue,consequence}){assert.ok(id&&!c.events.has(id)&&Number.isSafeInteger(time)&&time>=0);c.clock+=time;c.events.add(id);if(clue)c.clues.add(clue);if(consequence)c.consequences.push({id,consequence});c.history.push({id,time,clue:clue||null});}
function session(c,id,worldEvent){assert.ok(!c.events.has(id)&&worldEvent&&!c.worldEvents.has(worldEvent));c.events.add(id);c.session++;c.worldEvents.add(worldEvent);}
function reached(c,conclusion){return conclusion.routes.some(r=>c.clues.has(r));}
test('F26-A01 Zero Day has three conclusions with independent clue routes',()=>{assert.equal(conclusions.length,3);assert.ok(conclusions.every(c=>new Set(c.routes).size>=2));});
test('F26-A02 each conclusion survives one inaccessible clue route',()=>{for(const c of conclusions)for(const blocked of c.routes)assert.ok(c.routes.some(r=>r!==blocked));});
test('F26-A03 approved teaching stages remain ordered',()=>{assert.deepEqual(stages,['briefing','evidence','interview','location','deduction','danger','debrief']);});
test('F26-A04 failed check advances time without deleting clue access',()=>{const c=campaign();action(c,'failed-search',{time:2,consequence:'delayed'});action(c,'interview',{time:1,clue:'radio-engineer'});assert.equal(c.clock,3);assert.equal(reached(c,conclusions[0]),true);});
test('F26-A05 multiple sessions retain unresolved consequences',()=>{const c=campaign();action(c,'setback',{time:1,consequence:'contractor alerted'});session(c,'s1','world-1');session(c,'s2','world-2');assert.equal(c.consequences.length,1);assert.equal(c.session,2);});
test('F26-A06 alternative routes lead to same conclusion without forced order',()=>{const a=campaign(),b=campaign();action(a,'record',{time:1,clue:'inspection-records'});action(b,'witness',{time:2,clue:'junior-employee'});assert.equal(reached(a,conclusions[2]),true);assert.equal(reached(b,conclusions[2]),true);});
test('F26-A07 no occupation-specific gate is required to obtain conclusions',()=>{assert.ok(conclusions.every(c=>c.routes.length>=2));assert.ok(conclusions.every(c=>!('requiredOccupation'in c)));});
test('F26-A08 repeated action ID cannot award clue or time twice',()=>{const c=campaign();action(c,'clue',{time:2,clue:'controller-log'});assert.throws(()=>action(c,'clue',{time:2,clue:'controller-log'}));assert.equal(c.clock,2);});
test('F26-A09 session world-event references cannot be reused as new outcomes',()=>{const c=campaign();session(c,'s1','world-1');assert.throws(()=>session(c,'s2','world-1'));assert.equal(c.session,1);});
test('F26-A10 withdrawal can retain clues and leave consequences unresolved',()=>{const c=campaign();action(c,'lead',{time:1,clue:'workspace-photos'});action(c,'withdraw',{time:1,consequence:'hazard remains'});session(c,'s1','world-withdraw');assert.equal(reached(c,conclusions[1]),true);assert.equal(c.consequences[0].consequence,'hazard remains');});
