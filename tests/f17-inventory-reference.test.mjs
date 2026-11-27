// F17 reference-model regression; not a production inventory engine.
// Run: node tests/f17-inventory-reference.test.mjs
import assert from 'node:assert/strict';
import test from 'node:test';

function stock(initial) {
  const lots = new Map(Object.entries(initial).map(([id, v]) => [id, { ...v }]));
  const seen = new Set();
  function apply(event) {
    assert.ok(event.id && !seen.has(event.id), 'duplicate/missing transaction');
    const src = lots.get(event.from);
    const dst = lots.get(event.to);
    const qty = event.qty;
    assert.ok(Number.isSafeInteger(qty) && qty > 0, 'positive integer base-unit quantity');
    if (event.type === 'reserve') {
      assert.ok(src && src.quantity - src.reserved >= qty, 'available stock');
      src.reserved += qty;
    } else if (event.type === 'release') {
      assert.ok(src && src.reserved >= qty, 'reserved stock');
      src.reserved -= qty;
    } else if (event.type === 'consume') {
      assert.ok(src && src.quantity - src.reserved >= qty, 'unreserved stock');
      src.quantity -= qty;
    } else if (event.type === 'transfer') {
      assert.ok(src && dst && src.unit === dst.unit && src.eq === dst.eq, 'compatible lots');
      assert.ok(src.quantity - src.reserved >= qty, 'unreserved stock');
      src.quantity -= qty;
      dst.quantity += qty;
    } else throw Error('unknown event');
    seen.add(event.id);
  }
  return { lots, apply };
}
function carryingReferenceLb(str) {
  assert.ok(Number.isFinite(str) && str >= 0);
  return str * 0.5 * 2.2046226218;
}
function carriedOz(items) {
  return items.filter(x => x.location === 'carried').reduce((sum, x) => sum + x.massOz * x.count + (x.contentsOz || 0), 0);
}
function canUse(item, authorized) {
  return authorized && item.condition !== 'unusable' && item.powerAvailable !== false;
}
test('F17-01 transfer preserves stock and rejects replay', () => {
  const x = stock({ a: { eq:'EQ-001',unit:'handset',quantity:2,reserved:0 }, b: { eq:'EQ-001',unit:'handset',quantity:0,reserved:0 } });
  x.apply({id:'t1',type:'transfer',from:'a',to:'b',qty:1});
  assert.equal(x.lots.get('a').quantity + x.lots.get('b').quantity,2);
  assert.throws(()=>x.apply({id:'t1',type:'transfer',from:'a',to:'b',qty:1}));
});
test('F17-02 reservation does not consume physical stock', () => {
  const x=stock({a:{eq:'EQ-072',unit:'each',quantity:3,reserved:0}});
  x.apply({id:'r',type:'reserve',from:'a',qty:2});
  assert.equal(x.lots.get('a').quantity,3);
  assert.throws(()=>x.apply({id:'c',type:'consume',from:'a',qty:2}));
  x.apply({id:'release',type:'release',from:'a',qty:2});
  x.apply({id:'consume',type:'consume',from:'a',qty:2});
  assert.equal(x.lots.get('a').quantity,1);
});
test('F17-03 invalid unit and overdraft rejected without mutation',()=>{
  const x=stock({a:{eq:'EQ-001',unit:'handset',quantity:1,reserved:0},b:{eq:'EQ-001',unit:'pair',quantity:0,reserved:0}});
  assert.throws(()=>x.apply({id:'bad',type:'transfer',from:'a',to:'b',qty:1}));
  assert.throws(()=>x.apply({id:'bad2',type:'consume',from:'a',qty:2}));
  assert.equal(x.lots.get('a').quantity,1);
});
test('F17-04 stored tools excluded; contents added exactly once',()=>{
  const items=[{location:'stored',massOz:128,count:1},{location:'carried',massOz:6,count:1,contentsOz:32}];
  assert.equal(carriedOz(items),38);
  items[0].location='carried';
  assert.equal(carriedOz(items),166);
});
test('F17-05 carrying reference converts kg to lb once',()=>{
  assert.ok(Math.abs(carryingReferenceLb(40)-44.092452436)<1e-8);
  assert.ok((257/16)<carryingReferenceLb(40));
});
test('F17-06 condition, power and authorization are independent',()=>{
  assert.equal(canUse({condition:'usable',powerAvailable:false},true),false);
  assert.equal(canUse({condition:'degraded',powerAvailable:true},true),true);
  assert.equal(canUse({condition:'unusable',powerAvailable:true},true),false);
  assert.equal(canUse({condition:'usable',powerAvailable:true},false),false);
});
test('F17-07 no stock created by moving ammunition between locations',()=>{
  const x=stock({pack:{eq:'AMMO',unit:'round',quantity:12,reserved:0},mag:{eq:'AMMO',unit:'round',quantity:0,reserved:0}});
  x.apply({id:'load',type:'transfer',from:'pack',to:'mag',qty:5});
  assert.equal(x.lots.get('pack').quantity+x.lots.get('mag').quantity,12);
  x.apply({id:'fire',type:'consume',from:'mag',qty:1});
  assert.equal(x.lots.get('pack').quantity+x.lots.get('mag').quantity,11);
});
