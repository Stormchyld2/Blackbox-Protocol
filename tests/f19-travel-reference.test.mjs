import test from 'node:test';
import assert from 'node:assert/strict';
// F19 reference travel fixtures. Run: node --test tests/f19-travel-reference.test.mjs
const factor={normal:1,burdened:.75,'heavily burdened':.5};
function durationSeconds({distance,speed,mode='foot',load='normal',stopsSeconds=0}){
 assert.ok(Number.isFinite(distance)&&distance>=0);
 assert.ok(Number.isFinite(speed)&&speed>=0);
 assert.ok(Number.isSafeInteger(stopsSeconds)&&stopsSeconds>=0);
 if(distance===0)return stopsSeconds;
 if(speed===0)return null; // blocked, not elapsed infinity
 const f=mode==='foot'?factor[load]:1;
 assert.ok(f>0,'declared load');
 return Math.ceil(distance/(speed*f)*3600+stopsSeconds);
}
function route(segments){
 let seconds=0;
 for(const segment of segments){const t=durationSeconds(segment);if(t===null)return {blocked:true,completedSeconds:seconds};seconds+=t;}
 return {blocked:false,completedSeconds:seconds};
}
function staminaAfter(start,cost){assert.ok(Number.isFinite(start)&&start>=0&&Number.isFinite(cost)&&cost>=0);return Math.max(0,start-cost);}
test('F19-01 canonical 12 units at 4 per hour plus one-hour detour',()=>{
 assert.equal(durationSeconds({distance:12,speed:4,stopsSeconds:3600}),14400);
});
test('F19-02 rounding upward once to integer seconds',()=>{
 assert.equal(durationSeconds({distance:1,speed:7}),515);
});
test('F19-03 zero speed blocks positive-distance travel',()=>{
 assert.equal(durationSeconds({distance:2,speed:0}),null);
 assert.equal(durationSeconds({distance:0,speed:0,stopsSeconds:60}),60);
});
test('F19-04 load factors apply only to foot travel and once',()=>{
 assert.equal(durationSeconds({distance:3,speed:4,load:'normal'}),2700);
 assert.equal(durationSeconds({distance:3,speed:4,load:'burdened'}),3600);
 assert.equal(durationSeconds({distance:3,speed:4,load:'heavily burdened'}),5400);
 assert.equal(durationSeconds({distance:3,speed:4,mode:'vehicle',load:'heavily burdened'}),2700);
});
test('F19-05 route segment stops count as actual elapsed time',()=>{
 assert.deepEqual(route([{distance:4,speed:4,stopsSeconds:600},{distance:2,speed:2,stopsSeconds:300}]),{blocked:false,completedSeconds:8100});
});
test('F19-06 interruption preserves completed segment time',()=>{
 assert.deepEqual(route([{distance:4,speed:4},{distance:3,speed:0}]),{blocked:true,completedSeconds:3600});
});
test('F19-07 exertion clamps stamina at zero without HP conversion',()=>{
 assert.equal(staminaAfter(5,8),0);assert.equal(staminaAfter(5,3),2);
});
test('F19-08 invalid speed, distance and stop time rejected',()=>{
 assert.throws(()=>durationSeconds({distance:-1,speed:3}));
 assert.throws(()=>durationSeconds({distance:1,speed:-3}));
 assert.throws(()=>durationSeconds({distance:1,speed:3,stopsSeconds:-1}));
});
