let counts={};let section='';const eq=(a,b)=>{if(a!==b)throw Error(section+': '+a+' != '+b);counts[section]=(counts[section]||0)+1;};
section='F15';
const routes=[['witness'],['receipt'],['record']];
const reachable=(routes,blocked)=>routes.some(r=>r.every(x=>!blocked.includes(x)));
for(const r of routes)eq(reachable(routes,r),true);
eq(reachable(routes,['witness','receipt','record']),false);
eq(reachable([['shared','a'],['shared','b']],['shared']),false);
const evidence=[{id:'a',visibility:'player'},{id:'b',visibility:'GM'}];eq(evidence.filter(x=>x.visibility==='player').length,1);
section='F16';
const authority=(record,scope,date)=>record.scope===scope&&record.valid&&date<=record.expiry;
eq(authority({scope:'townA',valid:true,expiry:10},'townB',5),false);eq(authority({scope:'townA',valid:true,expiry:10},'townA',11),false);eq(authority({scope:'townA',valid:true,expiry:10},'townA',10),true);
const events=new Set();function once(id){if(events.has(id))return false;events.add(id);return true;}eq(once('deed'),true);eq(once('deed'),false);
section='F17';
function transfer(a,b,q,res=0){return q>=0&&q<=a-res?[a-q,b+q]:[a,b];}
for(let a=0;a<=20;a++)for(let b=0;b<=20;b++)for(let q=0;q<=25;q++){let [x,y]=transfer(a,b,q);eq(x+y,a+b);eq(x>=0&&y>=0,true);if(q>a)eq(x,a);}
eq(transfer(10,0,6,5)[0],10);
const load=(mass,ref)=>ref===0?(mass===0?'normal':'adjudicate'):mass<=ref?'normal':mass<=1.5*ref?'burdened':'heavy';
eq(load(10,10),'normal');eq(load(15,10),'burdened');eq(load(16,10),'heavy');eq(load(1,0),'adjudicate');
section='F18';
function buy(cash,stock,q,p){return q>=0&&p>=0&&q<=stock&&q*p<=cash?[cash-q*p,stock-q]:[cash,stock];}
for(let c=0;c<=20;c++)for(let s=0;s<=10;s++)for(let q=0;q<=12;q++)for(let p=0;p<=5;p++){let [a,b]=buy(c,s,q,p);eq(a>=0&&b>=0,true);eq(c-a,(s-b)*p);if(q>s||q*p>c){eq(a,c);eq(b,s);}}
section='F19';
const duration=(d,s)=>s>0?Math.ceil(d/s*3600):null;
eq(duration(12,4),10800);eq(duration(12,0),null);eq(duration(12,4*.75),14400);eq(duration(12,4*.5),21600);
for(let d=0;d<=30;d++)for(let s=1;s<=10;s++){let t=duration(d,s);eq(t>=d/s*3600&&t<d/s*3600+1,true);}
section='F20';
function consume(stock,demand){let used=Math.min(stock,demand);return [stock-used,demand-used,used];}
for(let s=0;s<=30;s++)for(let d=0;d<=30;d++){let [left,short,used]=consume(s,d);eq(left+used,s);eq(short+used,d);eq(left>=0&&short>=0,true);}
for(let stamina=0;stamina<=100;stamina++)for(let shortages=0;shortages<=2;shortages++)eq(Math.max(0,stamina-5*shortages)>=0,true);
eq(10+4-6-1,7);
console.log(JSON.stringify(counts));