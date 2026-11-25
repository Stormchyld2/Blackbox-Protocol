let checks=0;
const eq=(a,b)=>{if(a!==b)throw Error('expected '+b+' got '+a);checks++};
const movement=(m,mobile)=>mobile?Math.max(1,Math.floor(m/5)):0;
for(let m=0;m<=100;m++){eq(movement(m,true),Math.max(1,Math.floor(m/5)));eq(movement(m,false),0);}
for(let participants=1;participants<=20;participants++)for(let rounds=0;rounds<=100;rounds++)eq(rounds*6,rounds*6*participants/participants);
function valid(main,move,reaction,converted){return main>=0&&move>=0&&reaction>=0&&main<=1-converted&&move<=1+converted&&reaction<=1;}
for(let m=0;m<=2;m++)for(let v=0;v<=3;v++)for(let r=0;r<=2;r++)for(let c=0;c<=1;c++)eq(valid(m,v,r,c),m+c<=1&&v<=1+c&&r<=1);
const overlap=(a,b)=>a[0]<b[1]&&b[0]<a[1];
eq(overlap([0,3600],[3600,7200]),false);eq(overlap([0,3600],[1800,7200]),true);
function elapsed(intervals){let end=0,total=0;for(const [a,b] of [...intervals].sort((x,y)=>x[0]-y[0])){total+=Math.max(0,b-Math.max(a,end));end=Math.max(end,b);}return total;}
eq(elapsed([[0,7200],[0,7200]]),7200);eq(elapsed([[0,3600],[1800,7200]]),7200);eq(elapsed([[0,3600],[7200,10800]]),7200);
const done=new Set();let clock=0;function advance(target,events){if(target<clock)throw Error('backwards');for(const e of events.filter(e=>e.at>=clock&&e.at<=target).sort((a,b)=>a.at-b.at)){if(!done.has(e.id))done.add(e.id);}clock=target;}
advance(3600,[{id:'a',at:0},{id:'b',at:3600},{id:'c',at:7200}]);eq(done.size,2);advance(7200,[{id:'b',at:3600},{id:'c',at:7200}]);eq(done.size,3);eq(clock,7200);
console.log(checks+' F11 reference assertions passed');