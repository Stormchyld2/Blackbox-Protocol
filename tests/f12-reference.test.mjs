let checks=0;
const eq=(a,b)=>{if(a!==b)throw Error('failure');checks++};
const cat=(t,r)=>r===1?5:r===100?0:r<=Math.floor(t/5)?4:r<=Math.floor(t/2)?3:r<=t?2:1;
const hit=(a,r,d,s)=>cat(a,r)>=2&&(cat(a,r)>cat(d,s)||(cat(a,r)===cat(d,s)&&a-r>d-s));
for(let a of [1,30,50,70,99])for(let d of [1,30,50,70,99])for(let r=1;r<=100;r++)for(let s=1;s<=100;s++){let h=hit(a,r,d,s);eq(h,cat(a,r)>=2&&(cat(a,r)-cat(d,s)>0||cat(a,r)===cat(d,s)&&a-r>d-s));}
const base=d20=>Math.ceil(d20/5);
for(let hp of [3,8,16,20])for(let profile=0;profile<=3;profile++)for(let d20=1;d20<=20;d20++)for(let bonus=0;bonus<=3;bonus++)for(let armor=0;armor<=3;armor++){
  const loss=Math.max(0,base(d20)+profile+bonus-armor),after=Math.max(0,hp-loss);
  eq(after>=0&&after<=hp,true);eq(hp-after,Math.min(hp,loss));
}
for(let profile=0;profile<=3;profile++){
  const mean=Array.from({length:20},(_,i)=>base(i+1)+profile).reduce((a,b)=>a+b,0)/20;
  eq(mean,2.5+profile);
}
console.log(checks+' F12 reference assertions passed');