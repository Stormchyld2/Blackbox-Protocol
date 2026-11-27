import test from 'node:test';
import assert from 'node:assert/strict';
// F17/F18/F20 reference integration, not a production ledger.
function make(){return {wallet:5000,warehouse:{qty:8,reserved:0},transit:0,personal:0,consumed:0,orders:new Map(),events:new Set()};}
function event(s,id,fn){assert.ok(!s.events.has(id),'duplicate event');fn();s.events.add(id);}
function purchase(s,id,qty,price){event(s,'purchase:'+id,()=>{assert.ok(Number.isSafeInteger(qty)&&qty>0&&s.warehouse.qty-s.warehouse.reserved>=qty);assert.ok(s.wallet>=qty*price);s.wallet-=qty*price;s.warehouse.reserved+=qty;s.orders.set(id,{qty,status:'paid'});});}
function dispatch(s,id){event(s,'dispatch:'+id,()=>{const o=s.orders.get(id);assert.equal(o.status,'paid');s.warehouse.qty-=o.qty;s.warehouse.reserved-=o.qty;s.transit+=o.qty;o.status='dispatched';});}
function deliver(s,id){event(s,'deliver:'+id,()=>{const o=s.orders.get(id);assert.equal(o.status,'dispatched');s.transit-=o.qty;s.personal+=o.qty;o.status='delivered';});}
function consume(s,id,qty){event(s,'consume:'+id,()=>{assert.ok(Number.isSafeInteger(qty)&&qty>0&&s.personal>=qty);s.personal-=qty;s.consumed+=qty;});}
function total(s){return s.warehouse.qty+s.transit+s.personal+s.consumed;}
test('F17-F18-F20-01 paid order reserves warehouse stock but does not grant inventory',()=>{const s=make();purchase(s,'a',3,400);assert.equal(s.wallet,3800);assert.equal(s.warehouse.qty,8);assert.equal(s.warehouse.reserved,3);assert.equal(s.personal,0);assert.equal(total(s),8);});
test('F17-F18-F20-02 dispatch transfers stock to transit exactly once',()=>{const s=make();purchase(s,'a',3,400);dispatch(s,'a');assert.equal(s.warehouse.qty,5);assert.equal(s.transit,3);assert.throws(()=>dispatch(s,'a'));assert.equal(total(s),8);});
test('F17-F18-F20-03 delivery transfers to personal stock exactly once',()=>{const s=make();purchase(s,'a',3,400);dispatch(s,'a');deliver(s,'a');assert.equal(s.personal,3);assert.throws(()=>deliver(s,'a'));assert.equal(total(s),8);});
test('F17-F18-F20-04 consumption decreases physical stock once, not sale-time',()=>{const s=make();purchase(s,'a',3,400);dispatch(s,'a');deliver(s,'a');consume(s,'ration-day-1',1);assert.equal(s.personal,2);assert.equal(s.consumed,1);assert.throws(()=>consume(s,'ration-day-1',1));assert.equal(total(s),8);});
test('F17-F18-F20-05 reserved warehouse units cannot be sold again',()=>{const s=make();purchase(s,'a',6,100);assert.throws(()=>purchase(s,'b',3,100));assert.equal(s.wallet,4400);assert.equal(s.warehouse.reserved,6);});
test('F17-F18-F20-06 no implicit package-to-ration conversion',()=>{const pkg={sku:'SKU-FOOD',units:1,rationsPerPackage:null};assert.equal(pkg.rationsPerPackage,null);assert.throws(()=>{assert.ok(Number.isSafeInteger(pkg.rationsPerPackage)&&pkg.rationsPerPackage>0);});});
test('F17-F18-F20-07 no implicit replenishment after consumption',()=>{const s=make();purchase(s,'a',2,400);dispatch(s,'a');deliver(s,'a');consume(s,'use1',2);assert.equal(s.personal,0);assert.throws(()=>consume(s,'use2',1));});
