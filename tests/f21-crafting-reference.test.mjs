import test from 'node:test';
import assert from 'node:assert/strict';
// F21 reference contract; core D100 resolution and F17 ledger remain authoritative.
function project({labor=12,elapsed=6,inputs=3,capacity=2}={}){return {labor,elapsed,inputs,capacity,credited:0,time:0,reserved:0,spent:0,output:0,state:'planned',workers:new Map(),events:new Set()};}
function start(p,stock,tools=true){assert.equal(p.state,'planned');assert.ok(tools&&stock>=p.inputs&&p.capacity>0);p.reserved=p.inputs;p.state='active';}
function work(p,id,worker,hours,elapsedHours){assert.equal(p.state,'active');assert.ok(!p.events.has(id)&&hours>0&&elapsedHours>=0&&p.workers.size<=p.capacity);if(!p.workers.has(worker))assert.ok(p.workers.size<p.capacity);p.events.add(id);p.workers.set(worker,(p.workers.get(worker)||0)+hours);p.credited+=hours;p.time+=elapsedHours;}
function finish(p,id){assert.equal(p.state,'active');assert.ok(!p.events.has(id)&&p.credited>=p.labor&&p.time>=p.elapsed);p.events.add(id);p.spent=p.reserved;p.reserved=0;p.output=1;p.state='completed';}
function abandon(p){assert.equal(p.state,'active');p.reserved=0;p.state='abandoned';}
function quality(level,roll){const bounds=[[49,79,100,100],[39,64,89,100],[29,49,69,94],[19,39,59,89],[9,29,49,84]];assert.ok(level>=1&&level<=5&&roll>=1&&roll<=100);const b=bounds[level-1];return roll<=b[0]?'Failure':roll<=b[1]?'Basic':roll<=b[2]?'Standard':roll<=b[3]?'Superior':'Exceptional';}
test('F21-01 prerequisites and materials gate project start',()=>{const p=project();assert.throws(()=>start(p,2));assert.throws(()=>start(p,5,false));assert.equal(p.state,'planned');start(p,5);assert.equal(p.reserved,3);});
test('F21-02 labor and elapsed minimum both required',()=>{const p=project();start(p,5);work(p,'w1','a',12,3);assert.throws(()=>finish(p,'f'));work(p,'w2','a',1,3);finish(p,'f');assert.equal(p.output,1);});
test('F21-03 distinct workers and capacity prevent unbounded parallelism',()=>{const p=project({capacity:2});start(p,5);work(p,'w1','a',6,3);work(p,'w2','b',6,3);assert.throws(()=>work(p,'w3','c',2,1));});
test('F21-04 output granted once and inputs consumed once',()=>{const p=project();start(p,5);work(p,'w','a',12,6);finish(p,'finish');assert.throws(()=>finish(p,'finish'));assert.equal(p.spent,3);assert.equal(p.output,1);});
test('F21-05 cancellation releases unconsumed reservation without output',()=>{const p=project();start(p,5);abandon(p);assert.equal(p.reserved,0);assert.equal(p.output,0);});
test('F21-06 competency quality table boundaries',()=>{assert.equal(quality(1,49),'Failure');assert.equal(quality(1,50),'Basic');assert.equal(quality(1,80),'Standard');assert.equal(quality(5,85),'Exceptional');assert.equal(quality(3,95),'Exceptional');});
test('F21-07 no quality tier outside row even at roll 100',()=>{assert.equal(quality(1,100),'Standard');assert.equal(quality(2,100),'Superior');});
test('F21-08 duplicate work event rejected',()=>{const p=project();start(p,5);work(p,'w','a',4,2);assert.throws(()=>work(p,'w','a',4,2));assert.equal(p.credited,4);});
