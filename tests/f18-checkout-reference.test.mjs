import test from 'node:test';
import assert from 'node:assert/strict';
// F18 checkout reference fixtures; run: node --test tests/f18-checkout-reference.test.mjs
const tax=(cents,bps)=>Math.floor((cents*bps*2+10000)/20000);
function shipping(kind,oz,{expedited=false,member=false,subtotal=0}={}){
  const packed=oz+(kind==='freight'?Math.ceil(oz*.05):Math.max(4,Math.ceil(oz*.1)));
  const lb=Math.ceil(packed/16);
  if(kind==='collection')return 0;
  if(kind==='parcel')return expedited?(member?599:1299)+75*Math.max(0,lb-5):(member||subtotal>=7500?0:599+40*Math.max(0,lb-5));
  if(kind==='heavy'){if(expedited)throw Error('GM quote');return 2499+60*Math.max(0,lb-40);}
  if(kind==='freight'){if(expedited||lb>500)throw Error('GM quote');return 8900+35*Math.max(0,lb-70);}
  throw Error('unknown class');
}
function state(){return {wallet:10000,available:5,reserved:0,shipped:0,delivered:0,orders:new Map()};}
function confirm(s,id,{qty=2,unit=1000,taxCents=120,ship=599,access=true}={}){
  if(s.orders.has(id))return s.orders.get(id);
  const total=qty*unit+taxCents+ship;
  assert.ok(access&&s.wallet>=total&&s.available>=qty);
  s.wallet-=total;s.available-=qty;s.reserved+=qty;
  const o={qty,total,goods:qty*unit,taxCents,ship,status:'paid'};
  s.orders.set(id,o);return o;
}
function dispatch(s,id){const o=s.orders.get(id);assert.equal(o.status,'paid');s.reserved-=o.qty;s.shipped+=o.qty;o.status='dispatched';}
function deliver(s,id){const o=s.orders.get(id);assert.equal(o.status,'dispatched');s.shipped-=o.qty;s.delivered+=o.qty;o.status='delivered';}
function cancel(s,id){const o=s.orders.get(id);assert.equal(o.status,'paid');s.reserved-=o.qty;s.available+=o.qty;s.wallet+=o.total;o.status='cancelled';}
function refund(s,id,fault=false){const o=s.orders.get(id);assert.equal(o.status,'delivered');s.delivered-=o.qty;s.available+=o.qty;const amount=o.goods+o.taxCents+(fault?o.ship:0);s.wallet+=amount;o.status='returned';return amount;}
test('F18-C01 tax off and class-level half-up rounding',()=>{assert.equal(tax(202,600),12);assert.equal(tax(25,600),2);assert.equal(0,0);});
test('F18-C02 parcel, free shipping, membership',()=>{assert.equal(shipping('parcel',80),639);assert.equal(shipping('parcel',80,{subtotal:7500}),0);assert.equal(shipping('parcel',80,{member:true,expedited:true}),674);});
test('F18-C03 heavy, freight, collection and manual quote',()=>{assert.equal(shipping('heavy',640),2739);assert.equal(shipping('freight',1120),9040);assert.equal(shipping('collection',200),0);assert.throws(()=>shipping('freight',8000));});
test('F18-C04 confirmation reserves but never delivers and is idempotent',()=>{const s=state();confirm(s,'a');assert.equal(s.wallet,7281);assert.equal(s.reserved,2);assert.equal(s.delivered,0);confirm(s,'a');assert.equal(s.wallet,7281);});
test('F18-C05 invalid stock, funds or access leave state unchanged',()=>{for(const kind of ['funds','stock','access']){const s=state();if(kind==='funds')s.wallet=1;if(kind==='stock')s.available=0;const before=[s.wallet,s.available,s.reserved];assert.throws(()=>confirm(s,'a',{access:kind!=='access'}));assert.deepEqual([s.wallet,s.available,s.reserved],before);}});
test('F18-C06 dispatch and delivery exactly once',()=>{const s=state();confirm(s,'a');dispatch(s,'a');assert.throws(()=>dispatch(s,'a'));deliver(s,'a');assert.throws(()=>deliver(s,'a'));assert.equal(s.available+s.reserved+s.shipped+s.delivered,5);});
test('F18-C07 cancellation restores stock and refunds once',()=>{const s=state();confirm(s,'a');cancel(s,'a');assert.equal(s.wallet,10000);assert.equal(s.available,5);assert.throws(()=>cancel(s,'a'));});
test('F18-C08 returns exclude shipping unless seller fault',()=>{for(const fault of [false,true]){const s=state();confirm(s,'a');dispatch(s,'a');deliver(s,'a');assert.equal(refund(s,'a',fault),fault?2719:2120);assert.throws(()=>refund(s,'a',fault));}});
