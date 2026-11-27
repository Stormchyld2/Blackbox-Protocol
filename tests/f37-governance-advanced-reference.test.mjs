import test from 'node:test';
import assert from 'node:assert/strict';
// F37 advanced synthetic governance records; not repository-wide reconciliation.
const guardrails=Array.from({length:20},(_,i)=>'G'+String(i+1).padStart(2,'0'));
function audit(evidence){return guardrails.filter(id=>!evidence[id]||evidence[id].status!=='verified'||!evidence[id].source);}
function change(input){assert.ok(input.id&&input.owner&&input.rationale);assert.ok(input.dependencies&&input.tests&&input.migration);assert.ok(['provisional','approved','rejected'].includes(input.status));return input;}
function release(gates){return gates.guardrailsVerified&&gates.rightsVerified&&gates.humanPlaytestsVerified&&gates.deviceTestsVerified&&gates.ownerApprovalVerified&&gates.criticalOpen===0&&gates.majorUnaccepted===0;}
const complete=()=>Object.fromEntries(guardrails.map(id=>[id,{status:'verified',source:'evidence/'+id}]));
test('F37-A01 G01–G20 identifiers are distinct',()=>assert.equal(new Set(guardrails).size,20));
test('F37-A02 absent guardrail evidence remains open',()=>assert.equal(audit({}).length,20));
test('F37-A03 provisional evidence does not count as verified',()=>{const e=complete();e.G07={status:'provisional',source:'draft'};assert.deepEqual(audit(e),['G07']);});
test('F37-A04 verified guardrail needs traceable source',()=>{const e=complete();e.G12={status:'verified'};assert.deepEqual(audit(e),['G12']);});
test('F37-A05 complete synthetic evidence map has no missing entries',()=>assert.deepEqual(audit(complete()),[]));
test('F37-A06 change requires migration disposition',()=>assert.throws(()=>change({id:'P1',owner:'editor',rationale:'reason',dependencies:[],tests:[],status:'provisional'})));
test('F37-A07 rejected proposal remains rejected in its record',()=>assert.equal(change({id:'P1',owner:'editor',rationale:'reason',dependencies:[],tests:[],migration:'none',status:'rejected'}).status,'rejected'));
test('F37-A08 unresolved major without acceptance blocks release',()=>assert.equal(release({guardrailsVerified:true,rightsVerified:true,humanPlaytestsVerified:true,deviceTestsVerified:true,ownerApprovalVerified:true,criticalOpen:0,majorUnaccepted:1}),false));
test('F37-A09 device test evidence is independent of tabletop sessions',()=>assert.equal(release({guardrailsVerified:true,rightsVerified:true,humanPlaytestsVerified:true,deviceTestsVerified:false,ownerApprovalVerified:true,criticalOpen:0,majorUnaccepted:0}),false));
test('F37-A10 all illustrative release gates must pass together',()=>assert.equal(release({guardrailsVerified:true,rightsVerified:true,humanPlaytestsVerified:true,deviceTestsVerified:true,ownerApprovalVerified:true,criticalOpen:0,majorUnaccepted:0}),true));
