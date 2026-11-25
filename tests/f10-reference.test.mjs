let checks=0;
const eq=(a,b)=>{if(a!==b)throw Error('expected '+b+' got '+a);checks++};
const advance=(g,r,d)=>g<99&&r>g?Math.min(99,g+d):g;
const attribute=(a,r,eligible)=>eligible&&r>a?Math.min(100,a+1):a;
const deficit=(base,n)=>Math.max(0,base-5*n);
for(let g=0;g<=99;g++){let successes=0,total=0;for(let r=1;r<=100;r++)for(let d=1;d<=4;d++){let v=advance(g,r,d);eq(v>=g&&v<=99,true);if(v>g)successes++;total+=v-g;}eq(successes,g===99?0:4*(100-g));eq(total,g===99?0:(100-g)*[1,2,3,4].reduce((s,d)=>s+Math.min(d,99-g),0));}
for(let a=15;a<=100;a++)for(let r=1;r<=100;r++){eq(attribute(a,r,true),r>a?Math.min(100,a+1):a);eq(attribute(a,r,false),a);}
for(let b=0;b<=25;b+=5)for(let n=0;n<=6;n++)eq(deficit(b,n),Math.max(0,b-5*n));
eq(Math.max(deficit(15,1),deficit(10,1)),10);
const marks=(hours)=>Math.floor(hours/40);
for(const [h,m] of [[0,0],[39,0],[40,1],[79,1],[80,2],[160,4]])eq(marks(h),m);
const ledger=new Map(),monthly=new Set(),evidence=new Set();let total=0;
function credit(id,h,route){if(ledger.has(id))return false;ledger.set(id,route);total+=h;return true;}
function month(id){if(monthly.has(id))return false;monthly.add(id);return true;}
function milestone(id,d){if(evidence.has(id)||d===0)return d;evidence.add(id);return deficit(d,1);}
eq(credit('a',40,'general'),true);eq(credit('a',40,'competency'),false);eq(total,40);
eq(month('character:month1'),true);eq(month('character:month1'),false);
eq(milestone('x',25),20);eq(milestone('x',20),20);eq(milestone('y',20),15);eq(milestone('z',0),0);
console.log(checks+' F10 reference assertions passed');