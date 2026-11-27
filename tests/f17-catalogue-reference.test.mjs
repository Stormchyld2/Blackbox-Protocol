// F17 catalogue and ordinary starting-kit regression.
// Run from repository root: node --test tests/f17-catalogue-reference.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const inventory=JSON.parse(readFileSync('notes/STARTING-INVENTORIES.json','utf8'));
const catalogue=readFileSync('notes/EQUIPMENT-CATALOGUE.md','utf8');
const items=new Map();
for(const line of catalogue.split(/\r?\n/)){
  const m=line.match(/^\|\s*(EQ-\d{3})\s*\|\s*([^|]+)\|\s*([^|]*)\|\s*([^|]*)\|\s*([^|]*)\|\s*([^|]*)\|/);
  if(!m)continue;
  const mass=m[5].trim();
  const lb=Number(mass.match(/(\d+(?:\.\d+)?)\s*lb/)?.[1]||0);
  const oz=Number(mass.match(/(\d+(?:\.\d+)?)\s*oz/)?.[1]||0);
  const prices=[...m[6].matchAll(/\$([\d,]+(?:\.\d{1,2})?)/g)].map(v=>Math.round(Number(v[1].replaceAll(',',''))*100));
  assert.equal(prices.length,2,'two price bounds for '+m[1]);
  const row={massOz:lb*16+oz,minCents:prices[0],maxCents:prices[1]};
  if(items.has(m[1]))assert.deepEqual(items.get(m[1]),row,'repeated EQ row must agree');
  items.set(m[1],row);
}
test('F17 catalogue has 145 unique EQ definitions',()=>assert.equal(items.size,145));
test('F17 all 352 ordinary kits have valid nonduplicate EQ IDs',()=>{
  assert.equal(Object.keys(inventory.byOccupation).length,352);
  for(const [id,o] of Object.entries(inventory.byOccupation)){
    assert.equal(new Set(o.items).size,o.items.length,id+' duplicate item');
    for(const eq of o.items)assert.ok(items.has(eq),id+' missing '+eq);
  }
});
test('F17 all ordinary kit masses and prices reconcile to catalogue',()=>{
  for(const [id,o] of Object.entries(inventory.byOccupation)){
    const sum=o.items.reduce((a,eq)=>{
      const x=items.get(eq);return {massOz:a.massOz+x.massOz,minCents:a.minCents+x.minCents,maxCents:a.maxCents+x.maxCents};
    },{massOz:0,minCents:0,maxCents:0});
    const t=o.referenceTotals.ordinary;
    assert.ok(Math.abs(t.weightOz-sum.massOz)<1e-7,id+' mass');
    assert.equal(t.referenceMinCents,sum.minCents,id+' minimum price');
    assert.equal(t.referenceMaxCents,sum.maxCents,id+' maximum price');
  }
});
test('F17 Chef kit and six pregen masses match current canonical values',()=>{
  const expected={'O-001':71,'O-110':123,'O-229':73,'O-291':106,'O-148':257,'O-057':91};
  assert.ok(inventory.byOccupation['O-291'].items.includes('EQ-076'));
  assert.ok(!inventory.byOccupation['O-291'].items.includes('EQ-030'));
  for(const [id,oz] of Object.entries(expected))assert.equal(inventory.byOccupation[id].referenceTotals.ordinary.weightOz,oz,id);
});
