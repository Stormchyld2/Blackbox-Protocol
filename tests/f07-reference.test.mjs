// F07 reference regression tests; not production engine tests.
import assert from 'node:assert/strict';
const sum=a=>a.reduce((s,v)=>s+v,0);
const validAttributes=a=>a.length===7&&a.every(v=>Number.isInteger(v)&&v>=15&&v<=80)&&sum(a)===350;
const validSkills=(base,occ,personal)=>[base,occ,personal].every(a=>a.length===30&&a.every(v=>Number.isInteger(v)&&v>=0))&&sum(occ)===100&&sum(personal)===100&&occ.every(v=>v<=30)&&personal.every(v=>v<=20)&&base.every((v,i)=>v+occ[i]+personal[i]<=85);
const M=l=>l===0?0:2**(l-1);
const Q=l=>2**l-1;
const cost=(c,o,l)=>c*(M(l)-M(o));
const cdr=(c,l)=>100*c*Q(l);
const slots=(era,r)=>({BP:2,SL:3,DZ:4}[era])+[10000,25000,50000,100000,200000,400000].filter(t=>r>=t).length;
assert(validAttributes([40,50,60,60,50,50,40]));
assert(!validAttributes([81,19,60,60,50,40,40]));
assert(!validAttributes([40,50,60,60,50,50,39]));
const base=Array(30).fill(30), occ=Array(30).fill(0), personal=Array(30).fill(0);
[30,25,20,15,10].forEach((v,i)=>occ[i]=v);
for(let i=5;i<10;i++)personal[i]=20;
assert(validSkills(base,occ,personal));
assert(!validSkills(base,occ,personal.map((v,i)=>i===5?21:v)));
assert(!validSkills(base.map((v,i)=>i===0?40:v),occ,personal.map((v,i)=>i===5?0:i===0?20:v)));
for(let c=1;c<=7;c++)for(let l=1;l<=5;l++){
 assert.equal(cdr(c,l)-cdr(c,l-1),100*c*2**(l-1));
 assert.equal(cost(c,0,l),c*M(l));
 for(let o=0;o<=l;o++)assert.equal(cost(c,o,l)+cost(c,0,o),cost(c,0,l));
}
for(const era of ['BP','SL','DZ'])for(const t of [10000,25000,50000,100000,200000,400000])assert.equal(slots(era,t)-slots(era,t-1),1);
assert.equal(slots('DZ',25000)-slots('BP',25000),2);
assert.equal(Math.max(2,4),4);
console.log('F07 reference regression assertions passed');
