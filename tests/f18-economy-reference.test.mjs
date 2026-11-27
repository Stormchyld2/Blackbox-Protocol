// F18 economics reference-model regression. Run: node --test tests/f18-economy-reference.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';

function quote(quantity,unitCents,feesCents=0) {
  for(const n of [quantity,unitCents,feesCents]) assert.ok(Number.isSafeInteger(n)&&n>=0);
  const total=quantity*unitCents+feesCents;
  assert.ok(Number.isSafeInteger(total));
  return total;
}
function ledger(wallets,stock) {
  const seen=new Set();
  function trade({id,buyer,seller,sku,quantity,unitCents,feesCents=0,accepted=true,authorized=true,consent=true}) {
    assert.ok(id&&!seen.has(id),'unique transaction');
    assert.ok(quantity>0&&Number.isSafeInteger(quantity),'positive quantity');
    const total=quote(quantity,unitCents,feesCents);
    assert.ok(accepted&&authorized&&consent,'valid exchange');
    assert.ok(wallets[buyer]>=total,'sufficient funds');
    assert.ok(stock[sku]>=quantity,'available unreserved stock');
    wallets[buyer]-=total;wallets[seller]+=total;stock[sku]-=quantity;
    seen.add(id);
    return total;
  }
  return {trade};
}
test('F18-01 approved arithmetic fixture: 3 × 400 cents',()=>{
  assert.equal(quote(3,400),1200);
  const wallets={buyer:2000,seller:0},stock={item:3};
  ledger(wallets,stock).trade({id:'sale1',buyer:'buyer',seller:'seller',sku:'item',quantity:3,unitCents:400});
  assert.equal(wallets.buyer,800);
  assert.equal(wallets.seller,1200);
  assert.equal(stock.item,0);
});
test('F18-02 failed purchase leaves balances and stock unchanged',()=>{
  const wallets={buyer:500,seller:0},stock={item:2},l=ledger(wallets,stock);
  assert.throws(()=>l.trade({id:'failed',buyer:'buyer',seller:'seller',sku:'item',quantity:2,unitCents:400}));
  assert.deepEqual(wallets,{buyer:500,seller:0});
  assert.deepEqual(stock,{item:2});
});
test('F18-03 duplicate sale cannot double charge or deliver',()=>{
  const wallets={buyer:1000,seller:0},stock={item:2},l=ledger(wallets,stock);
  const t={id:'once',buyer:'buyer',seller:'seller',sku:'item',quantity:1,unitCents:200};
  l.trade(t);assert.throws(()=>l.trade(t));
  assert.deepEqual(wallets,{buyer:800,seller:200});
  assert.equal(stock.item,1);
});
test('F18-04 unauthorized or unaccepted currency rejects before mutation',()=>{
  const wallets={buyer:1000,seller:0},stock={item:1},l=ledger(wallets,stock);
  for(const flag of [{accepted:false},{authorized:false},{consent:false}])assert.throws(()=>l.trade({id:JSON.stringify(flag),buyer:'buyer',seller:'seller',sku:'item',quantity:1,unitCents:100,...flag}));
  assert.equal(wallets.buyer,1000);assert.equal(stock.item,1);
});
test('F18-05 barter conserves item quantities without implied exchange rate',()=>{
  const a={water:5,tools:0},b={water:0,tools:2};
  const legs=[{from:a,to:b,item:'water',qty:3},{from:b,to:a,item:'tools',qty:1}];
  assert.ok(legs.every(x=>x.qty>0&&x.from[x.item]>=x.qty));
  for(const x of legs){x.from[x.item]-=x.qty;x.to[x.item]+=x.qty;}
  assert.equal(a.water+b.water,5);assert.equal(a.tools+b.tools,2);
});
test('F18-06 credit principal does not imply interest',()=>{
  const debt={principalCents:1200,paidCents:0,currency:'USD',due:'campaign-date',interestTerms:null};
  debt.paidCents+=400;
  assert.equal(debt.principalCents-debt.paidCents,800);
});
test('F18-07 no automatic conversion of Means into wallet currency',()=>{
  const character={means:3,walletCents:null};
  assert.equal(character.walletCents,null);
  assert.throws(()=>{assert.ok(Number.isSafeInteger(character.walletCents)&&character.walletCents>=0);});
});
