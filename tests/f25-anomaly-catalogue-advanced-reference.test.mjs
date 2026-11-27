import test from 'node:test';
import assert from 'node:assert/strict';
// F25 catalogue-effect reference matrix transcribed from approved ANOMALY-CATALOGUE.md.
// No automatic psychological harm or new dice mechanics.
const entries=[
 {id:'A-01',pressure:10,condition:-10,routeCount:2,avoid:true},
 {id:'A-02',pressure:5,repeat:'nightly-distinct',recovery:'half',routeCount:2,avoid:true},
 {id:'A-03',pressure:10,routeCount:3,avoid:true},
 {id:'A-04',harm:'conditional-environmental-high',routeCount:2,avoid:true},
 {id:'A-05',condition:-10,recovery:'blocked-while-exposed',routeCount:2,avoid:true},
 {id:'A-06',harm:'conditional-low',routeCount:2,avoid:true},
 {id:'A-07',condition:-20,routeCount:2,avoid:true},
 {id:'A-08',pressure:5,condition:-10,routeCount:2,avoid:true},
 {id:'A-09',pressure:10,routeCount:3,avoid:true},
 {id:'A-10',pressure:20,conditional:'count-concerns-person',routeCount:2,avoid:true},
 {id:'A-11',pressure:10,routeCount:2,avoid:true},
 {id:'A-12',pressure:20,routeCount:3,avoid:true}
];
function audit(e){assert.ok(/^A-\d{2}$/.test(e.id));assert.ok(e.routeCount>=2&&e.avoid);if('pressure'in e)assert.ok([5,10,20].includes(e.pressure));if('condition'in e)assert.ok([-10,-20,-30].includes(e.condition));if('harm'in e)assert.ok(['conditional-environmental-high','conditional-low'].includes(e.harm));}
function exposure(){return {optIn:true,seen:new Set(),pressure:0,conditions:[],active:true};}
function apply(s,id,amount){assert.ok(s.optIn&&s.active&&id&&!s.seen.has(id)&&[5,10,20].includes(amount));s.seen.add(id);s.pressure+=amount;}
function leave(s){s.active=false;}
function condition(s,value,adjudicated){assert.ok(s.optIn&&s.active&&adjudicated&&[-10,-20,-30].includes(value));s.conditions.push(value);}
test('F25-A01 twelve entries have approved existing-rule effect bands',()=>{assert.equal(entries.length,12);entries.forEach(audit);});
test('F25-A02 all catalogue entries retain at least two discovery routes and avoidance',()=>{assert.ok(entries.every(e=>e.routeCount>=2&&e.avoid));});
test('F25-A03 A-01 memory contradiction is one moderate distinct pressure event',()=>{const s=exposure();apply(s,'A-01-contradiction',10);assert.throws(()=>apply(s,'A-01-contradiction',10));assert.equal(s.pressure,10);});
test('F25-A04 A-02 nightly pressure requires distinct actual nights',()=>{const s=exposure();apply(s,'A-02-night-1',5);apply(s,'A-02-night-2',5);assert.throws(()=>apply(s,'A-02-night-2',5));assert.equal(s.pressure,10);});
test('F25-A05 A-04 machinery harm is conditional, not an automatic attack',()=>{const e=entries[3];assert.equal(e.pressure,undefined);assert.equal(e.harm,'conditional-environmental-high');});
test('F25-A06 A-05 exposure condition cannot be applied without adjudication',()=>{const s=exposure();assert.throws(()=>condition(s,-10,false));condition(s,-10,true);assert.deepEqual(s.conditions,[-10]);});
test('F25-A07 A-07 navigation penalty uses existing minus twenty band',()=>{assert.equal(entries[6].condition,-20);});
test('F25-A08 A-10 high pressure is conditional on person-related count',()=>{assert.equal(entries[9].conditional,'count-concerns-person');assert.equal(entries[9].pressure,20);});
test('F25-A09 leaving exposure blocks further exposure events in reference session',()=>{const s=exposure();leave(s);assert.throws(()=>apply(s,'A-11',10));assert.equal(s.pressure,0);});
test('F25-A10 no entry imposes a mandatory new sanity meter',()=>{assert.ok(entries.every(e=>!('sanity'in e)));});
