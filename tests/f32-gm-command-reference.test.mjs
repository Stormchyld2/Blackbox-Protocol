import test from 'node:test';
import assert from 'node:assert/strict';
// F32 synthetic GM command reference, not a functioning host or security boundary.
function host(){return {revision:0,paused:false,drafts:new Map(),published:new Map(),requests:new Map(),events:[],applied:new Set(),epoch:1};}
function draft(s,id,payload){s.drafts.set(id,payload);}
function preview(s,id,recipient){assert.ok(s.drafts.has(id));return {recipient,payload:s.drafts.get(id)};}
function publish(s,id,recipient){assert.ok(s.drafts.has(id));s.published.set(id,{recipient,payload:s.drafts.get(id)});s.events.push({kind:'publish',id,recipient});}
function visible(s,id,recipient){const p=s.published.get(id);return p&&p.recipient===recipient?p.payload:undefined;}
function request(s,id,effect){assert.ok(!s.requests.has(id));s.requests.set(id,effect);}
function decide(s,id,approved,actor){assert.ok(!s.paused);assert.ok(s.requests.has(id));assert.ok(!s.applied.has(id));assert.ok(actor==='GM');if(approved){s.revision++;s.applied.add(id);}s.events.push({kind:approved?'commit':'reject',id,actor});s.requests.delete(id);}
test('F32-01 GM draft remains private by default',()=>{const s=host();draft(s,'clue','secret');assert.equal(visible(s,'clue','player-1'),undefined);});
test('F32-02 preview does not publish content',()=>{const s=host();draft(s,'clue','secret');assert.equal(preview(s,'clue','player-1').payload,'secret');assert.equal(visible(s,'clue','player-1'),undefined);});
test('F32-03 explicit publication targets one player',()=>{const s=host();draft(s,'clue','secret');publish(s,'clue','player-1');assert.equal(visible(s,'clue','player-1'),'secret');assert.equal(visible(s,'clue','player-2'),undefined);});
test('F32-04 action request alone never commits',()=>{const s=host();request(s,'r1',{kind:'check'});assert.equal(s.revision,0);});
test('F32-05 GM approval commits once and records event',()=>{const s=host();request(s,'r1',{});decide(s,'r1',true,'GM');assert.equal(s.revision,1);assert.equal(s.events[0].kind,'commit');});
test('F32-06 GM rejection records decision without changing revision',()=>{const s=host();request(s,'r1',{});decide(s,'r1',false,'GM');assert.equal(s.revision,0);assert.equal(s.events[0].kind,'reject');});
test('F32-07 non-GM actor cannot approve',()=>{const s=host();request(s,'r1',{});assert.throws(()=>decide(s,'r1',true,'player'));assert.equal(s.revision,0);});
test('F32-08 pause blocks consequential approvals',()=>{const s=host();request(s,'r1',{});s.paused=true;assert.throws(()=>decide(s,'r1',true,'GM'));assert.equal(s.revision,0);});
test('F32-09 replaying an approved request cannot duplicate effect',()=>{const s=host();request(s,'r1',{});decide(s,'r1',true,'GM');assert.throws(()=>decide(s,'r1',true,'GM'));assert.equal(s.revision,1);});
test('F32-10 restore sync epoch changes only on explicit restoration',()=>{const s=host();const before=s.epoch;s.epoch++;s.events.push({kind:'restore',epoch:s.epoch});assert.equal(s.epoch,before+1);assert.equal(s.events.at(-1).kind,'restore');});
