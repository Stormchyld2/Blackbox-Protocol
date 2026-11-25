let checks=0;const eq=(a,b)=>{if(a!==b)throw Error('mismatch');checks++};
const records=[{id:'public',audience:'public'},{id:'privateA',audience:'A'},{id:'privateB',audience:'B'},{id:'secret',audience:'GM'}];
const project=(role,id)=>records.filter(r=>role==='GM'||r.audience==='public'||role==='player'&&r.audience===id);
eq(project('GM','').length,4);eq(project('player','A').map(x=>x.id).join(','),'public,privateA');eq(project('player','B').map(x=>x.id).join(','),'public,privateB');eq(project('display','').map(x=>x.id).join(','),'public');
function submit(state,cmd){if(cmd.role!=='GM')return 'denied';if(state.seen.has(cmd.id))return 'duplicate';if(cmd.rev!==state.rev)return 'stale';state.seen.add(cmd.id);state.rev++;return 'accepted';}
for(let rev=0;rev<100;rev++){let state={rev,seen:new Set()};eq(submit(state,{role:'player',id:'x',rev}),'denied');eq(state.rev,rev);eq(submit(state,{role:'GM',id:'x',rev:rev-1}),'stale');eq(submit(state,{role:'GM',id:'x',rev}),'accepted');eq(submit(state,{role:'GM',id:'x',rev}),'duplicate');eq(state.rev,rev+1);}
const sync=(local,update)=>local.epoch===update.epoch&&update.rev===local.rev+1?'apply':'snapshot';
eq(sync({epoch:1,rev:2},{epoch:1,rev:3}),'apply');eq(sync({epoch:1,rev:2},{epoch:1,rev:4}),'snapshot');eq(sync({epoch:1,rev:2},{epoch:2,rev:3}),'snapshot');
const gate=(critical,human,rights,software)=>critical===0&&human&&rights&&software;
for(let c of [0,1])for(let h of [false,true])for(let r of [false,true])for(let s of [false,true])eq(gate(c,h,r,s),c===0&&h&&r&&s);
console.log(checks);