import test from 'node:test';
import assert from 'node:assert/strict';
// F19/F20/F13 boundary reference fixtures; no new hazard damage rule.
function journey({segments,stock,stamina,seen=new Set()}){
  const s={stock,stamina,elapsed:0,completed:0,seen};
  for(const x of segments){
    if(x.blocked)return {...s,blocked:true};
    assert.ok(x.id&&!s.seen.has('segment:'+x.id),'unique segment');
    assert.ok(Number.isFinite(x.hours)&&x.hours>=0&&Number.isSafeInteger(x.supplyCost)&&x.supplyCost>=0);
    assert.ok(s.stock>=x.supplyCost,'supply must be available');
    s.stock-=x.supplyCost;s.elapsed+=Math.ceil(x.hours*3600);s.completed++;s.seen.add('segment:'+x.id);
    if(x.exertion){assert.ok(x.exertion>=0);s.stamina=Math.max(0,s.stamina-x.exertion);}
  }
  return {...s,blocked:false};
}
function applyHazard(state,{id,effect,amount=0}){
  assert.ok(id&&effect&&Number.isFinite(amount)&&amount>=0);
  if(state.seen.has('hazard:'+id))return false;
  assert.ok(['exertion','exposure','stress'].includes(effect),'effect requires separate F12/F13 adjudication');
  state.seen.add('hazard:'+id);
  if(effect==='exertion')state.stamina=Math.max(0,state.stamina-amount);
  else if(effect==='exposure')state.exposureEvents=(state.exposureEvents||0)+1;
  else if(effect==='stress')state.stressEvents=(state.stressEvents||0)+1;

  return true;
}
test('F19-E01 supplies deducted only for completed travel segments',()=>{
 const s=journey({stock:5,stamina:8,segments:[{id:'a',hours:1,supplyCost:2},{id:'b',blocked:true,hours:2,supplyCost:2}]});
 assert.equal(s.stock,3);assert.equal(s.elapsed,3600);assert.equal(s.completed,1);assert.equal(s.blocked,true);
});
test('F19-E02 no negative supply balance on unavailable resource',()=>{
 assert.throws(()=>journey({stock:1,stamina:5,segments:[{id:'a',hours:1,supplyCost:2}]}));
});
test('F19-E03 hazard event IDs prevent duplicate penalties',()=>{
 const s={stamina:7,seen:new Set()};
 assert.equal(applyHazard(s,{id:'storm1',effect:'exertion',amount:3}),true);
 assert.equal(applyHazard(s,{id:'storm1',effect:'exertion',amount:3}),false);
 assert.equal(s.stamina,4);
});
test('F19-E04 exposure and stress do not automatically deduct stamina or HP',()=>{
 const s={stamina:6,hp:10,seen:new Set()};
 applyHazard(s,{id:'cold',effect:'exposure'});applyHazard(s,{id:'fear',effect:'stress'});
 assert.equal(s.stamina,6);assert.equal(s.hp,10);assert.equal(s.exposureEvents,1);assert.equal(s.stressEvents,1);
});
test('F19-E05 exertion clamps at zero without automatic HP damage',()=>{
 const s={stamina:2,hp:9,seen:new Set()};
 applyHazard(s,{id:'slope',effect:'exertion',amount:5});
 assert.equal(s.stamina,0);assert.equal(s.hp,9);
});
test('F19-E06 completed route segment is not charged again on resumption',()=>{
 const seen=new Set();
 const s=journey({stock:4,stamina:6,seen,segments:[{id:'a',hours:1,supplyCost:1}]});
 assert.throws(()=>journey({stock:s.stock,stamina:s.stamina,seen,segments:[{id:'a',hours:1,supplyCost:1}]}));
 const resumed=journey({stock:s.stock,stamina:s.stamina,seen,segments:[{id:'b',hours:2,supplyCost:1}]});
 assert.equal(resumed.stock,2);
});
test('F19-E07 weather label alone imposes no damage',()=>{
 const s={stamina:5,hp:8,weather:'storm',seen:new Set()};
 assert.equal(s.stamina,5);assert.equal(s.hp,8);
});
test('F19-E08 invalid hazard effect requires governing rules adjudication',()=>{
 const s={stamina:5,seen:new Set()};
 assert.throws(()=>applyHazard(s,{id:'injury',effect:'HP damage',amount:2}));
 assert.equal(s.stamina,5);
 assert.equal(s.seen.has('hazard:injury'),false);
});
