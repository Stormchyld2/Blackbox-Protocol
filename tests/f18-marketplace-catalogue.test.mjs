// F18 marketplace data and F17 condition compatibility regression.
// Run from repo root: node --test tests/f18-marketplace-catalogue.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const data=JSON.parse(readFileSync('notes/MARKET-PRODUCTS.json','utf8'));
const products=data.products;
const eq=new Set(Array.from({length:145},(_,i)=>'EQ-'+String(i+1).padStart(3,'0')));
test('F18-08 current catalogue contains 945 unique products',()=>{
  assert.equal(products.length,945);
  assert.equal(new Set(products.map(x=>x.id)).size,945);
});
test('F18-09 prices, weights and starting stock use valid units',()=>{
  for(const x of products){
    assert.ok(Number.isSafeInteger(x.price_cents)&&x.price_cents>=0,x.id+' price');
    assert.ok(Number.isFinite(x.weight_oz)&&x.weight_oz>=0,x.id+' weight');
    assert.ok(Number.isSafeInteger(x.stock_default)&&x.stock_default>=0,x.id+' stock');
  }
});
test('F18-10 current retailer counts match actual records',()=>{
  const actual={};
  for(const x of products)actual[x.retailer]=(actual[x.retailer]||0)+1;
  assert.equal(Object.keys(actual).length,7);
  assert.deepEqual(Object.fromEntries(Object.entries(actual).sort()),Object.fromEntries(Object.entries(data.counts.by_retailer).sort()));
});
test('F18-11 all specified EQ archetypes are valid',()=>{
  for(const x of products)if(x.archetype!==null&&x.archetype!==undefined)assert.ok(eq.has(x.archetype),x.id+' invalid EQ');
});
test('F18-12 specialized product IDs remain independent of EQ archetypes',()=>{
  assert.equal(products.filter(x=>x.archetype===null||x.archetype===undefined).length,225);
});
test('F18-13 durability states preserve F17 functional condition semantics',()=>{
  const canonical=['usable','degraded','unusable'];
  let n=0;
  for(const x of products){
    if(!x.durability)continue;
    n++;
    assert.deepEqual(x.durability.f17_condition_states,canonical,x.id+' F17 condition');
    assert.ok(x.durability.state_semantics,x.id+' mapping absent');
    if(x.durability.class==='consumable')assert.deepEqual(x.durability.condition_states,['sealed','opened','spent']);
    else assert.deepEqual(x.durability.condition_states,['serviceable','worn','damaged','unusable']);
  }
  assert.equal(n,370);
});
