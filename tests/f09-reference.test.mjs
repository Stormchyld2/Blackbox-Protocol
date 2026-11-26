import assert from 'node:assert/strict';
let checks=0; const eq=(a,b)=>{assert.equal(a,b);checks++};
const H={1:4,2:8,3:16,4:40,5:80,6:100,7:180};
const rates={study:1,supervised:1.25,field:1.5,mentored:1.75,intensive:2};
const target=(c,l)=>c>=6&&l<5?H[c]*2**(l-2):H[c]*2**(l-1);
const capacity=(e,c)=>({BP:2,SL:3,DZ:4}[e])+[10000,25000,50000,100000,200000,400000].filter(t=>c>=t).length;
const allowed=(e,c,projects)=>{const active=projects.filter(p=>['active','assessment pending'].includes(p.state));return active.length<=capacity(e,c)&&active.filter(p=>p.retraining).length<=({BP:1,SL:1,DZ:2}[e]);};
for(let c=1;c<=7;c++){let total=0;for(let l=1;l<=5;l++){eq(target(c,l),c>=6&&l<5?H[c]*2**(l-2):H[c]*2**(l-1));total+=target(c,l)}eq(total,(c>=6?23.5:31)*H[c]);}
eq(target(7,5),2880);eq(target(6,4),400);eq(4230/2/8,264.375);eq(2880/2/8,180);eq(2880/2/6,240);
for(const [mode,rate] of Object.entries(rates)){eq(rate>=1&&rate<=2,true);eq(10*rate,({study:10,supervised:12.5,field:15,mentored:17.5,intensive:20})[mode]);}
for(const e of ['BP','SL','DZ']){let n=capacity(e,0),p=Array.from({length:n},()=>({state:'active'}));eq(allowed(e,0,p),true);eq(allowed(e,0,[...p,{state:'assessment pending'}]),false);eq(allowed(e,0,[...p,{state:'paused'}]),true);let k=e==='DZ'?2:1;eq(allowed(e,400000,Array.from({length:k+1},()=>({state:'active',retraining:true}))),false);}
const ledger=new Set(),progress=new Map(),completed=new Set();
function credit(entry){if(ledger.has(entry.id)||!rates[entry.mode]||entry.hours<=0||!entry.qualified||entry.projectIds.length!==1)return false;ledger.add(entry.id);let p=entry.projectIds[0];progress.set(p,(progress.get(p)||0)+entry.hours*rates[entry.mode]);return true;}
function finish(id,c,l,approved,prereqs,resources,assessment){if(completed.has(id)||!approved||!prereqs||!resources||!assessment||(progress.get(id)||0)<target(c,l))return false;completed.add(id);return true;}
eq(credit({id:'travel',hours:2,mode:'study',qualified:true,projectIds:['p']}),true);
eq(credit({id:'travel',hours:2,mode:'study',qualified:true,projectIds:['p']}),false);
eq(credit({id:'duplicate',hours:4,mode:'field',qualified:true,projectIds:['p','q']}),false);
eq(credit({id:'presence',hours:20,mode:'field',qualified:false,projectIds:['p']}),false);
eq(credit({id:'field',hours:4,mode:'field',qualified:true,projectIds:['p']}),true);
eq(progress.get('p'),8);eq(finish('p',2,1,true,true,true,false),false);eq(finish('p',2,1,true,true,true,true),true);eq(finish('p',2,1,true,true,true,true),false);
eq(credit({id:'intensive',hours:1440,mode:'intensive',qualified:true,projectIds:['top']}),true);eq(progress.get('top'),2880);eq(finish('top',7,5,true,false,true,true),false);eq(finish('top',7,5,true,true,true,true),true);
console.log(checks+' F09 revised training reference assertions passed');
