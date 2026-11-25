let checks=0;
const eq=(a,b)=>{if(a!==b)throw Error('failure');checks++};
const severity=h=>h===0?0:h===1?1:h<=3?2:h<=6?3:4;
const recover=(hp,max,r,bonus,eligible)=>eligible?Math.min(max,hp+(r<60?1:2)+bonus):hp;
const stamina=(s,max,h,sleep,eligible)=>eligible?Math.min(max,s+(sleep&&h>=8?max:Math.max(1,Math.floor(max/4))*h)):s;
for(let h=0;h<=13;h++)eq(severity(h),[0,1,2,2,3,3,3,4,4,4,4,4,4,4][h]);
for(let max of [3,8,16,20])for(let hp=0;hp<=max;hp++)for(let r=0;r<=100;r++)for(let b=0;b<=1;b++)for(let e of [false,true]){let v=recover(hp,max,r,b,e);eq(v>=hp&&v<=max,true);eq(v-hp,e?Math.min(max-hp,(r>=60?2:1)+b):0);}
for(let max=0;max<=100;max++)for(let s=0;s<=max;s++)for(let h of [0,1,7,8])for(let e of [false,true]){let v=stamina(s,max,h,h===8,e);eq(v>=s&&v<=max,true);if(e&&h===8)eq(v,max);}
function tick(boxes,unstable,initial){return unstable&&!initial?Math.min(3,boxes+1):boxes;}
eq(tick(0,true,true),0);eq(tick(0,true,false),1);eq(tick(1,false,false),1);eq(tick(1,true,false),2);eq(tick(2,true,false),3);eq(tick(3,true,false),3);
console.log(checks+' F13 reference assertions passed');