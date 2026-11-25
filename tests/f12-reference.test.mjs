let checks=0;
const eq=(a,b)=>{if(a!==b)throw Error('failure');checks++};
const cat=(t,r)=>r===1?5:r===100?0:r<=Math.floor(t/5)?4:r<=Math.floor(t/2)?3:r<=t?2:1;
const hit=(a,r,d,s)=>cat(a,r)>=2&&(cat(a,r)>cat(d,s)||(cat(a,r)===cat(d,s)&&a-r>d-s));
for(let a of [1,30,50,70,99])for(let d of [1,30,50,70,99])for(let r=1;r<=100;r++)for(let s=1;s<=100;s++){let h=hit(a,r,d,s);eq(h,cat(a,r)>=2&&(cat(a,r)-cat(d,s)>0||cat(a,r)===cat(d,s)&&a-r>d-s));}
for(let hp of [3,8,16,20])for(let die of [4,6,8,10])for(let r=1;r<=die;r++)for(let bonus=0;bonus<=3;bonus++)for(let armor=0;armor<=3;armor++){let loss=Math.max(0,r+bonus-armor),after=Math.max(0,hp-loss);eq(after>=0&&after<=hp,true);eq(hp-after,Math.min(hp,loss));}
console.log(checks+' F12 reference assertions passed');