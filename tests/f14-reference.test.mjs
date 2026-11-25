let checks=0;
const eq=(a,b)=>{if(a!==b)throw Error('failure');checks++};
const category=(t,r)=>r===1?5:r===100?0:r<=Math.floor(t/5)?4:r<=Math.floor(t/2)?3:r<=t?2:1;
const gain=(t,r,i)=>{let c=category(t,r);return c>=3?0:c===2?Math.floor(i/2):c===1?i:i+5};
const band=(p,s)=>s>=Math.max(1,Math.min(100,p+25))?3:s>=Math.max(1,p)?2:s>=Math.max(1,Math.ceil(p/2))?1:0;
for(let t=1;t<=99;t++)for(let r=1;r<=100;r++)for(let i of [5,10,20]){let g=gain(t,r,i);eq(g,r===1?0:r===100?i+5:r<=Math.floor(t/2)?0:r<=t?Math.floor(i/2):i);for(let s of [0,50,95,100])eq(Math.min(100,s+g)>=s&&Math.min(100,s+g)<=100,true);}
for(let p=0;p<=100;p++)for(let s=0;s<=100;s++){let b=band(p,s);eq(b,[0,Math.max(1,Math.ceil(p/2)),Math.max(1,p),Math.max(1,Math.min(100,p+25))].filter(x=>s>=x).length-1);}
const recover=(s,h,sleep,eligible)=>eligible?Math.max(0,s-(sleep&&h>=8?20:5*h)):s;
for(let s=0;s<=100;s++)for(let h of [0,1,7,8])for(let e of [false,true])eq(recover(s,h,h===8,e),e?Math.max(0,s-(h===8?20:5*h)):s);
const events=new Set(),days=new Set();function once(set,id){if(set.has(id))return false;set.add(id);return true;}
eq(once(events,'event1'),true);eq(once(events,'event1'),false);eq(once(days,'day1'),true);eq(once(days,'day1'),false);
console.log(checks+' F14 reference assertions passed');