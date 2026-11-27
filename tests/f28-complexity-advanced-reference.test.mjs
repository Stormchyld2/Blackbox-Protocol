import test from 'node:test';
import assert from 'node:assert/strict';
// F28 advanced reference, synthetic optional modules; not canonical module assignments.
const rules=new Map([
 ['detail-food',{dependencies:[],incompatible:['fast-food']}],
 ['food-expiry',{dependencies:['detail-food'],incompatible:[]}],
 ['fast-food',{dependencies:[],incompatible:['detail-food']}],
 ['maintenance',{dependencies:[],incompatible:[]}]
]);
function closure(requested){const result=new Set(),visiting=new Set();function visit(id){assert.ok(rules.has(id),'unknown rule');assert.ok(!visiting.has(id),'dependency cycle');if(result.has(id))return;visiting.add(id);for(const dep of rules.get(id).dependencies)visit(dep);visiting.delete(id);result.add(id);}for(const id of requested)visit(id);for(const id of result)for(const bad of rules.get(id).incompatible)assert.ok(!result.has(bad),'incompatible rules');return result;}
const state=()=>({enabled:new Set(),history:['prior-spoilage'],stock:4,clock:10,unknownFields:{expiry:null},snapshots:[],events:[],preset:'Standard'});
function switchAtBoundary(s,requested,{approved,boundary}){assert.ok(approved&&boundary);const next=closure(requested);const snapshot={enabled:[...s.enabled],preset:s.preset,history:[...s.history],stock:s.stock,clock:s.clock};s.snapshots.push(snapshot);s.enabled=next;s.preset='Custom';return snapshot;}
function event(s,id,module){assert.ok(s.enabled.has(module),'disabled module');assert.ok(!s.events.includes(id));s.events.push(id);}
test('F28-A01 Custom preset closes transitive dependencies',()=>{assert.deepEqual([...closure(['food-expiry'])].sort(),['detail-food','food-expiry']);});
test('F28-A02 incompatible optional rules block activation',()=>{assert.throws(()=>closure(['detail-food','fast-food']));});
test('F28-A03 unknown optional rules quarantine rather than activate',()=>{assert.throws(()=>closure(['unknown-module']));});
test('F28-A04 Custom can select independent subsystems',()=>{assert.deepEqual([...closure(['maintenance'])],['maintenance']);});
test('F28-A05 preset migration requires a meaningful boundary',()=>{const s=state();assert.throws(()=>switchAtBoundary(s,['maintenance'],{approved:true,boundary:false}));assert.equal(s.snapshots.length,0);});
test('F28-A06 invalid migration does not mutate campaign state',()=>{const s=state();assert.throws(()=>switchAtBoundary(s,['fast-food','detail-food'],{approved:true,boundary:true}));assert.equal(s.preset,'Standard');assert.equal(s.snapshots.length,0);});
test('F28-A07 successful migration retains prechange snapshot',()=>{const s=state();switchAtBoundary(s,['food-expiry'],{approved:true,boundary:true});assert.equal(s.snapshots[0].preset,'Standard');assert.equal(s.enabled.has('detail-food'),true);});
test('F28-A08 disabled optional modules cannot schedule new effects',()=>{const s=state();assert.throws(()=>event(s,'spoil-2','food-expiry'));assert.equal(s.events.length,0);});
test('F28-A09 disabling module does not reverse prior loss',()=>{const s=state();switchAtBoundary(s,[],{approved:true,boundary:true});assert.equal(s.stock,4);assert.deepEqual(s.history,['prior-spoilage']);});
test('F28-A10 enabling detail does not fabricate unknown expiry',()=>{const s=state();switchAtBoundary(s,['food-expiry'],{approved:true,boundary:true});assert.equal(s.unknownFields.expiry,null);assert.equal(s.clock,10);});
