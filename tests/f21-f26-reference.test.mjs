let counts={},section='';const eq=(a,b)=>{if(a!==b)throw Error(section+' mismatch');counts[section]=(counts[section]||0)+1;};
section='F21';
const ready=(labor,required,elapsed,min,access)=>access&&labor>=required&&elapsed>=min;
for(let l=0;l<=24;l++)for(let t=0;t<=12;t++)for(let a of [true,false])eq(ready(l,12,t,6,a),a&&Math.min(l/12,t/6)>=1);
const output=new Set();function once(set,id){if(set.has(id))return false;set.add(id);return true;}eq(once(output,'job'),true);eq(once(output,'job'),false);
section='F22';
for(let installed=0;installed<=10;installed++)for(let staff=0;staff<=10;staff++)for(let input=0;input<=10;input++)for(let demand=0;demand<=10;demand++){let cap=Math.min(installed,staff,input),delivered=Math.min(demand,cap),short=demand-delivered;eq(delivered<=installed&&delivered<=staff&&delivered<=input,true);eq(delivered+short,demand);eq(short>=0,true);}
section='F23';
for(let target=1;target<=20;target++)for(let progress=0;progress<=target;progress++)for(let delta=0;delta<=5;delta++){let next=Math.min(target,progress+delta);eq(next>=progress&&next<=target,true);}
section='F24';
let state=0,seen=new Set();function apply(id,prereq,delta){if(!prereq||!once(seen,id))return false;state+=delta;return true;}
eq(apply('market',false,1),false);eq(state,0);eq(apply('road',true,1),true);eq(apply('market',state>=1,1),true);eq(apply('market',true,1),false);eq(state,2);
section='F25';
const dossier=[{id:'sign',visibility:'player'},{id:'truth',visibility:'GM'}];eq(dossier.filter(x=>x.visibility==='player').map(x=>x.id).join(','),'sign');let exposure=new Set();eq(once(exposure,'event'),true);eq(once(exposure,'event'),false);
section='F26';
const routes=[['witness'],['record'],['location']];for(const blocked of routes)eq(routes.some(r=>r.every(x=>!blocked.includes(x))),true);eq(routes.some(r=>r.every(x=>!['witness','record','location'].includes(x))),false);
console.log(JSON.stringify(counts));