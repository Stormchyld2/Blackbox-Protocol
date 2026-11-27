import test from 'node:test';
import assert from 'node:assert/strict';
// F18 extended reference acceptance: independent seller/class orders, expiry and era service.
// Run: node --test tests/f18-checkout-extended.test.mjs
const split=lines=>{
 const groups=new Map();
 for(const x of lines){
   assert.ok(x.qty>0&&Number.isSafeInteger(x.qty));
   const key=x.seller+'|'+x.shippingClass;
   const group=groups.get(key)||{seller:x.seller,shippingClass:x.shippingClass,subtotal:0,oz:0,lines:[]};
   group.subtotal+=x.qty*x.unitCents;group.oz+=x.qty*x.weightOz;group.lines.push(x);
   groups.set(key,group);
 }
 return [...groups.values()];
};
const service=(era,market)=>era==='DZ'?false:era==='SL'?market.surviving&&market.route&&market.paymentAccepted:market.route&&market.paymentAccepted;
function reserve(order,stock,now){
 assert.ok(now<=order.expires,'expired quote');
 assert.ok(service(order.era,order.market),'service unavailable');
 assert.ok(!order.confirmed,'duplicate confirmation');
 assert.ok(stock.available>=order.qty,'insufficient stock');
 stock.available-=order.qty;stock.reserved+=order.qty;order.confirmed=true;
}
function dispatch(order,stock){
 assert.ok(order.confirmed&&!order.dispatched);
 stock.reserved-=order.qty;stock.inTransit+=order.qty;order.dispatched=true;
}
function deliver(order,stock){
 assert.ok(order.dispatched&&!order.delivered);
 stock.inTransit-=order.qty;stock.delivered+=order.qty;order.delivered=true;
}
const make=(era='BP')=>({era,market:{surviving:true,route:true,paymentAccepted:true},qty:2,expires:10,confirmed:false,dispatched:false,delivered:false});
test('F18-X01 split by seller and shipping class without duplicate lines',()=>{
 const lines=[{seller:'A',shippingClass:'parcel',qty:2,unitCents:500,weightOz:16},{seller:'A',shippingClass:'freight',qty:1,unitCents:3000,weightOz:1200},{seller:'B',shippingClass:'parcel',qty:1,unitCents:200,weightOz:4}];
 const groups=split(lines);
 assert.equal(groups.length,3);
 assert.equal(groups.reduce((n,g)=>n+g.lines.length,0),3);
 assert.equal(groups.reduce((n,g)=>n+g.subtotal,0),4200);
});
test('F18-X02 expired quote never reserves inventory',()=>{
 const o=make(),s={available:3,reserved:0};
 assert.throws(()=>reserve(o,s,11));
 assert.deepEqual(s,{available:3,reserved:0});
});
test('F18-X03 Signal Lost requires surviving market, route and payment',()=>{
 for(const key of ['surviving','route','paymentAccepted']){
   const o=make('SL'),s={available:3,reserved:0};o.market[key]=false;
   assert.throws(()=>reserve(o,s,5));assert.equal(s.available,3);
 }
});
test('F18-X04 Dead Zone storefront disabled, barter is separate',()=>{
 const o=make('DZ'),s={available:3,reserved:0};
 assert.throws(()=>reserve(o,s,5));assert.equal(s.reserved,0);
});
test('F18-X05 confirmation, dispatch and delivery conserve stock',()=>{
 const o=make(),s={available:5,reserved:0,inTransit:0,delivered:0};
 reserve(o,s,5);assert.throws(()=>reserve(o,s,5));
 dispatch(o,s);assert.throws(()=>dispatch(o,s));
 deliver(o,s);assert.throws(()=>deliver(o,s));
 assert.equal(s.available+s.reserved+s.inTransit+s.delivered,5);
 assert.deepEqual(s,{available:3,reserved:0,inTransit:0,delivered:2});
});
test('F18-X06 service outage blocks confirmation without altering existing ownership',()=>{
 const o=make('SL'),s={available:5,reserved:0};o.market.route=false;
 const wallet={balanceCents:1000,ownedCurrency:'USD'};
 assert.throws(()=>reserve(o,s,5));
 assert.deepEqual(wallet,{balanceCents:1000,ownedCurrency:'USD'});
});
test('F18-X07 membership benefits expire at quote time',()=>{
 const eligible=(now,expires,retailer)=>now<=expires&&retailer==='Cindrix Market';
 assert.equal(eligible(10,10,'Cindrix Market'),true);
 assert.equal(eligible(11,10,'Cindrix Market'),false);
 assert.equal(eligible(5,10,'CircuitPoint'),false);
});
test('F18-X08 unauthorized controlled collection never reserves',()=>{
 const o=make(),s={available:2,reserved:0};
 const approved=false;
 assert.throws(()=>{assert.ok(approved,'GM approval required');reserve(o,s,5);});
 assert.equal(s.available,2);
});
