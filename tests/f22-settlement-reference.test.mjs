import test from 'node:test';
import assert from 'node:assert/strict';
// F22 reference facilities and settlements, not production engine.
function facility(installed,staffing,inputs,dependencies=true){assert.ok([installed,staffing,inputs].every(x=>Number.isFinite(x)&&x>=0));return {installed,staffing,inputs,dependencies,operational:dependencies?Math.min(installed,staffing,inputs):0};}
function service(f,demand){assert.ok(Number.isFinite(demand)&&demand>=0);const delivered=Math.min(demand,f.operational);return {delivered,shortfall:demand-delivered};}
function settlement(population=10){return {population,facilities:new Map(),events:new Set(),workers:new Map()};}
function once(s,id,fn){assert.ok(id&&!s.events.has(id));fn();s.events.add(id);}
function population(s,id,delta){once(s,id,()=>{assert.ok(Number.isSafeInteger(delta)&&s.population+delta>=0);s.population+=delta;});}
function assign(s,id,worker,facilityId,from,to){once(s,id,()=>{assert.ok(to>from&&Number.isFinite(from)&&Number.isFinite(to));const a=s.workers.get(worker)||[];assert.ok(a.every(x=>to<=x.from||from>=x.to));a.push({facilityId,from,to});s.workers.set(worker,a);});}
function complete(s,id,facilityId,installed){once(s,id,()=>{assert.ok(!s.facilities.has(facilityId));s.facilities.set(facilityId,facility(installed,0,0,false));});}
test('F22-01 capacity constrained by minimum installed, staffing, inputs',()=>{assert.equal(facility(10,6,4).operational,4);assert.equal(facility(10,3,9).operational,3);});
test('F22-02 unavailable dependency disables operations',()=>{assert.equal(facility(10,10,10,false).operational,0);});
test('F22-03 delivered service never exceeds demand or operational capacity',()=>{assert.deepEqual(service(facility(10,6,4),7),{delivered:4,shortfall:3});});
test('F22-04 zero demand creates no artificial service',()=>{assert.deepEqual(service(facility(10,6,4),0),{delivered:0,shortfall:0});});
test('F22-05 construction creates facility, not instant service',()=>{const s=settlement();complete(s,'build','clinic',10);assert.equal(s.facilities.get('clinic').installed,10);assert.equal(s.facilities.get('clinic').operational,0);});
test('F22-06 duplicate construction cannot create duplicate facility',()=>{const s=settlement();complete(s,'build','clinic',10);assert.throws(()=>complete(s,'again','clinic',10));assert.equal(s.facilities.size,1);});
test('F22-07 settlement population changes only through unique events',()=>{const s=settlement();population(s,'arrive',4);assert.equal(s.population,14);assert.throws(()=>population(s,'arrive',4));population(s,'depart',-2);assert.equal(s.population,12);});
test('F22-08 population cannot become negative',()=>{const s=settlement();assert.throws(()=>population(s,'depart',-11));assert.equal(s.population,10);});
test('F22-09 staff cannot be double-booked across facilities',()=>{const s=settlement();assign(s,'one','worker','clinic',0,4);assert.throws(()=>assign(s,'two','worker','workshop',3,5));assign(s,'three','worker','workshop',4,6);assert.equal(s.workers.get('worker').length,2);});
test('F22-10 service deficits do not imply automatic harm or political effects',()=>{const s=settlement();const v=service(facility(10,2,1),5);assert.equal(v.shortfall,4);assert.equal(s.population,10);});
