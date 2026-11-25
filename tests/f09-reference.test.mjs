import assert from 'node:assert/strict';
let checks=0;
const eq=(a,b)=>{assert.equal(a,b);checks++};
const discount=(mode,s)=>s.some(v=>v<0)?null:mode==='Standard'||!s.length?0:Math.min(30,10*Math.floor(s.reduce((a,b)=>a+b,0)/s.length));
const hours=(u,d,m=0)=>Math.max(1,Math.ceil(u*(100-d)/100))+m;
const capacity=(e,c)=>({BP:2,SL:3,DZ:4}[e])+[10000,25000,50000,100000,200000,400000].filter(t=>c>=t).length;
const allowed=(e,c,projects)=>{const active=projects.filter(p=>['active','assessment pending'].includes(p.state));return active.length<=capacity(e,c)&&active.filter(p=>p.retraining).length<=({BP:1,SL:1,DZ:2}[e]);};
for(const mode of ['Standard','Advanced','Simulation'])for(let a=-1;a<=4;a++)for(let b=-1;b<=4;b++){const expected=a<0||b<0?null:mode==='Standard'?0:Math.min(30,10*Math.floor((a+b)/2));eq(discount(mode,[a,b]),expected);}
for(const u of [1,4,8,16,40,80,160,320,5120])for(const d of [0,10,20,30]){eq(hours(u,d,7),Math.max(1,Math.ceil(u*(100-d)/100))+7);}
eq(discount('Advanced',[]),0);eq(hours(1,30),1);
for(const e of ['BP','SL','DZ']){let n=capacity(e,0);let p=Array.from({length:n},()=>({state:'active'}));eq(allowed(e,0,p),true);eq(allowed(e,0,[...p,{state:'assessment pending'}]),false);eq(allowed(e,0,[...p,{state:'paused'}]),true);let r=e==='DZ'?2:1;eq(allowed(e,400000,Array.from({length:r+1},()=>({state:'active',retraining:true}))),false);}
const ledger=new Set(),outcomes=new Set();let credited=0,level=0,cdr=0;
function credit(id,h){if(ledger.has(id))return false;ledger.add(id);credited+=h;return true;}
function complete(id,approved,required){if(outcomes.has(id)||!approved||credited<required||level!==0)return false;outcomes.add(id);level=1;cdr+=200;return true;}
eq(credit('a',4),true);eq(credit('a',4),false);eq(complete('x',true,8),false);eq(credit('b',4),true);eq(complete('x',false,8),false);eq(credited,8);eq(complete('x',true,8),true);eq(complete('x',true,8),false);eq(cdr,200);eq(level,1);
console.log(checks+' F09 reference assertions passed');
