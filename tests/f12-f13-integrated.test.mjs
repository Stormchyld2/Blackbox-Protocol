import assert from 'node:assert/strict';
const degree=(t,r)=>r===1?4:r===100?0:r<=Math.floor(t/5)?3:r<=Math.floor(t/2)?2:r<=t?1:0;
const harm=(d20,profile,bonus,armor)=>Math.max(0,Math.ceil(d20/5)+profile+bonus-armor);
const severity=h=>h===0?'none':h===1?'minor':h<=3?'moderate':h<=6?'severe':'critical';
const penalty=s=>({none:0,minor:0,moderate:10,severe:20,critical:30})[s];
const target=(base,injuries,affected)=>Math.max(1,Math.min(99,base-(affected?Math.max(0,...injuries.map(penalty)):0)));
function hit(s,d20,profile,bonus,armor){const h=harm(d20,profile,bonus,armor),before=s.hp;s.hp=Math.max(0,s.hp-h);s.injuries.push(severity(h));if(s.hp===0&&(h>=4||s.lifeThreat)){s.unstable=true;s.initial=true;}return {h,actual:before-s.hp};}
function tick(s){if(s.unstable){if(s.initial)s.initial=false;else s.boxes++;}return s.boxes>=3;}
function aid(s,roll,medicine,eligible=true){if(!eligible)return false;if(degree(medicine,roll)>0){s.unstable=false;return true;}if(roll===100)s.boxes++;return false;}
function rest(s,eligible,R,careDegree=0){if(!s.unstable&&eligible)s.hp=Math.min(s.max,s.hp+(R<60?1:2)+(careDegree>=2?1:0));if(eligible)s.eligible++;return s.hp;}
let passed=0;function check(name,fn){fn();passed++;console.log('PASS',name);}
check('penetrating harm severity and zero HP',()=>{const s={hp:3,max:3,injuries:[],boxes:0,unstable:false,initial:false};assert.deepEqual(hit(s,16,1,0,1),{h:4,actual:3});assert.equal(s.injuries[0],'severe');assert.equal(s.unstable,true);tick(s);assert.equal(s.boxes,0);tick(s);assert.equal(s.boxes,1);});
check('teammate aid stabilizes without revival',()=>{const s={hp:0,max:8,injuries:['severe'],boxes:1,unstable:true,initial:false};assert.equal(aid(s,24,60),true);tick(s);assert.equal(s.hp,0);assert.equal(s.boxes,1);});
check('critical aid failure plus tick reaches death',()=>{const s={hp:0,max:8,boxes:1,unstable:true,initial:false};assert.equal(aid(s,100,60),false);assert.equal(s.boxes,2);assert.equal(tick(s),true);});
check('minor final hit gives stable zero HP',()=>{const s={hp:1,max:8,injuries:[],boxes:0,unstable:false,initial:false};hit(s,1,0,0,0);assert.equal(s.hp,0);assert.equal(s.unstable,false);});
check('highest relevant penalty once',()=>{assert.equal(target(65,['moderate','severe'],true),45);assert.equal(target(65,['moderate','severe'],false),65);assert.equal(degree(45,46),0);assert.equal(degree(65,46),1);});
check('unstable rest blocked, strong care capped',()=>{const s={hp:0,max:8,injuries:['severe'],boxes:0,unstable:true,eligible:0};assert.equal(rest(s,true,70,2),0);s.unstable=false;assert.equal(rest(s,true,70,2),3);assert.equal(rest(s,true,70,2),6);assert.equal(rest(s,true,70,2),8);});
check('interrupted rest excludes reassessment eligibility',()=>{const s={hp:3,max:8,injuries:['moderate'],boxes:0,unstable:false,eligible:0};rest(s,false,50);rest(s,true,50);rest(s,true,50);assert.equal(s.eligible,2);rest(s,true,50);assert.equal(s.eligible,3);assert.equal(s.injuries.includes('moderate'),true);});
check('new harm reopens instability retaining boxes',()=>{const s={hp:2,max:8,injuries:['severe'],boxes:1,unstable:false,initial:false};hit(s,16,1,0,1);assert.equal(s.unstable,true);assert.equal(s.boxes,1);});
console.log('Integrated F12-F13 fixtures passed:',passed);
