import test from 'node:test';
import assert from 'node:assert/strict';
// F20 fictional resource reference model; not real-world survival guidance.
function ledger(qty=10){return {usable:qty,reserved:0,consumed:0,lost:0,produced:0,events:new Set()};}
function once(s,id,fn){assert.ok(id&&!s.events.has(id),'duplicate event');fn();s.events.add(id);}
function reserve(s,id,n){once(s,id,()=>{assert.ok(Number.isSafeInteger(n)&&n>0&&s.usable-s.reserved>=n);s.reserved+=n;});}
function consume(s,id,n){once(s,id,()=>{assert.ok(Number.isSafeInteger(n)&&n>0&&s.usable-s.reserved>=n);s.usable-=n;s.consumed+=n;});}
function spoil(s,id,n){once(s,id,()=>{assert.ok(Number.isSafeInteger(n)&&n>0&&s.usable-s.reserved>=n);s.usable-=n;s.lost+=n;});}
function produce(s,id,{inputs,output,complete,capacity}){once(s,id,()=>{assert.ok(complete&&Number.isSafeInteger(inputs)&&inputs>=0&&Number.isSafeInteger(output)&&output>=0&&output<=capacity&&s.usable-s.reserved>=inputs);s.usable+=output-inputs;s.produced+=output;s.consumed+=inputs;});}
function daily(s,id,{characters=1,food=1,water=1,stamina=10}){
 assert.ok(Number.isSafeInteger(characters)&&characters>0&&Number.isSafeInteger(food)&&food>=0&&Number.isSafeInteger(water)&&water>=0);
 once(s,id,()=>{const demand=characters;const eaten=Math.min(food,demand),drunk=Math.min(water,demand);s.food=food-eaten;s.water=water-drunk;s.stamina=Math.max(0,stamina-(eaten<demand?5:0)-(drunk<demand?5:0));s.shortages={food:demand-eaten,water:demand-drunk};});
}
test('F20-01 stock conservation and reservations not consumption',()=>{const s=ledger();reserve(s,'r',3);assert.equal(s.usable,10);assert.equal(s.reserved,3);consume(s,'c',4);assert.equal(s.usable,6);assert.equal(s.consumed,4);});
test('F20-02 reserved stock cannot be consumed or spoiled',()=>{const s=ledger(5);reserve(s,'r',4);assert.throws(()=>consume(s,'c',2));assert.throws(()=>spoil(s,'l',2));assert.equal(s.usable,5);});
test('F20-03 loss recorded once and cannot be replayed',()=>{const s=ledger();spoil(s,'l',2);assert.throws(()=>spoil(s,'l',2));assert.equal(s.lost,2);});
test('F20-04 completed production consumes inputs and credits yield once',()=>{const s=ledger();produce(s,'harvest',{inputs:2,output:4,complete:true,capacity:5});assert.equal(s.usable,12);assert.equal(s.consumed,2);assert.equal(s.produced,4);assert.throws(()=>produce(s,'harvest',{inputs:2,output:4,complete:true,capacity:5}));});
test('F20-05 unfinished or over-capacity production grants nothing',()=>{for(const output of [4,8]){const s=ledger();assert.throws(()=>produce(s,'x',{inputs:2,output,complete:output===8,capacity:5}));assert.equal(s.usable,10);}});
test('F20-06 fictional daily demand and distinct shortage categories',()=>{const s={events:new Set()};daily(s,'day1',{characters:2,food:1,water:0,stamina:12});assert.deepEqual(s.shortages,{food:1,water:2});assert.equal(s.stamina,2);assert.equal(s.food,0);assert.equal(s.water,0);});
test('F20-07 shortage review cannot be applied twice',()=>{const s={events:new Set()};daily(s,'day1',{food:0,water:1,stamina:8});assert.throws(()=>daily(s,'day1',{food:0,water:1,stamina:8}));assert.equal(s.stamina,3);});
test('F20-08 shortages clamp stamina at zero without HP change',()=>{const s={events:new Set(),hp:7};daily(s,'day1',{food:0,water:0,stamina:3});assert.equal(s.stamina,0);assert.equal(s.hp,7);});
test('F20-09 no implicit conversion between package count and ration units',()=>{const lot={unit:'package',qty:3,conversion:null};assert.equal(lot.conversion,null);assert.throws(()=>{assert.ok(lot.conversion>0);});});
test('F20-10 no infinite renewable output without declared capacity',()=>{const s=ledger();assert.throws(()=>produce(s,'x',{inputs:0,output:10,complete:true,capacity:3}));assert.equal(s.usable,10);});
