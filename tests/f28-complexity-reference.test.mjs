import test from 'node:test';
import assert from 'node:assert/strict';
// F28 reference preset transitions; approved core arithmetic and campaign state remain authoritative.
const presets=['Quick Start','Casual','Standard','Advanced','Simulation','Custom'];
const modules=['injury','food','agriculture','equipment','investigation','settlement'];
const detail={Standard:[1,1,1,1,1,1],Advanced:[2,2,2,2,2,2],Simulation:[3,3,3,3,3,3]};
const state=()=>({preset:'Standard',hp:8,stress:10,skills:{research:3},cdr:2,clock:5,stock:7,conditions:['injured'],history:['loss-1'],archived:[],enabled:new Set(modules)});
function preview(s,next){assert.ok(presets.includes(next));return {from:s.preset,to:next,requiresAgreement:true};}
function change(s,next,approved){const p=preview(s,next);assert.ok(approved,'table agreement required');const before={...s,skills:{...s.skills},conditions:[...s.conditions],history:[...s.history],archived:[...s.archived],enabled:new Set(s.enabled)};s.archived.push({preset:s.preset});s.preset=next;return {before,after:s,preview:p};}
test('F28-01 six canonical preset names remain distinct',()=>{assert.equal(new Set(presets).size,6);});
test('F28-02 six subsystem detail rows have monotone standard to simulation detail',()=>{assert.equal(modules.length,6);for(let i=0;i<6;i++)assert.ok(detail.Standard[i]<detail.Advanced[i]&&detail.Advanced[i]<detail.Simulation[i]);});
test('F28-03 preset change requires explicit approval',()=>{const s=state();assert.throws(()=>change(s,'Simulation',false));assert.equal(s.preset,'Standard');});
test('F28-04 preset changes preserve HP and stress',()=>{const s=state();change(s,'Advanced',true);assert.equal(s.hp,8);assert.equal(s.stress,10);});
test('F28-05 preset changes preserve skills and CDR',()=>{const s=state();change(s,'Simulation',true);assert.equal(s.skills.research,3);assert.equal(s.cdr,2);});
test('F28-06 preset changes preserve clock and stock',()=>{const s=state();change(s,'Casual',true);assert.equal(s.clock,5);assert.equal(s.stock,7);});
test('F28-07 preset changes preserve historical conditions and events',()=>{const s=state();change(s,'Quick Start',true);assert.deepEqual(s.conditions,['injured']);assert.deepEqual(s.history,['loss-1']);});
test('F28-08 disabling optional module cannot restore prior stock loss',()=>{const s=state();s.enabled.delete('food');assert.equal(s.stock,7);assert.deepEqual(s.history,['loss-1']);});
test('F28-09 decreasing detail archives prior preset instead of deleting history',()=>{const s=state();change(s,'Casual',true);assert.equal(s.archived[0].preset,'Standard');assert.equal(s.history.length,1);});
test('F28-10 unknown historical fields must not be invented when detail increases',()=>{const s=state();change(s,'Simulation',true);assert.equal(s.soilHistory,undefined);assert.equal(s.componentHistory,undefined);});
