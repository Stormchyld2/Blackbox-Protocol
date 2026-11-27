import test from 'node:test';
import assert from 'node:assert/strict';
// F29 advanced reference: synthetic publication metadata, not manuscript audit.
const books=['Quick-Start Rules','Core Rulebook','GM Handbook','Signal Lost','Dead Zone','Transition Handbook','Equipment Compendium','Investigation Handbook','Survival Handbook','Anomaly Compendium',"Homebrew Creator's Guide",'Zero Day'];
const rules=new Map([['R01',{owner:'Core Rulebook',edition:'1'}],['F15',{owner:'Investigation Handbook',edition:'1'}],['F17',{owner:'Equipment Compendium',edition:'1'}]]);
function audit(items){const ids=new Map();for(const item of items){assert.ok(books.includes(item.book));for(const claim of item.rules||[]){assert.ok(rules.has(claim.id),'unknown rule');assert.equal(claim.edition,rules.get(claim.id).edition);if(claim.kind==='authoritative'){assert.equal(item.book,rules.get(claim.id).owner);assert.ok(!ids.has(claim.id),'duplicate authority');ids.set(claim.id,item.book);}else assert.equal(claim.kind,'reference');}}return ids;}
function transfer(c){return structuredClone(c);}
function release(p){return ['mechanical','semantic','playtest','editorial','rights','accessibility','approval'].every(k=>p[k]===true);}
test('F29-A01 cross-book references do not claim new authority',()=>{const a=audit([{book:'Core Rulebook',rules:[{id:'R01',edition:'1',kind:'authoritative'}]},{book:'Quick-Start Rules',rules:[{id:'R01',edition:'1',kind:'reference'}]}]);assert.equal(a.get('R01'),'Core Rulebook');});
test('F29-A02 duplicate authoritative ownership is rejected',()=>{assert.throws(()=>audit([{book:'Core Rulebook',rules:[{id:'R01',edition:'1',kind:'authoritative'},{id:'R01',edition:'1',kind:'authoritative'}]}]));});
test('F29-A03 nonowner cannot publish authoritative core mechanic',()=>{assert.throws(()=>audit([{book:'Quick-Start Rules',rules:[{id:'R01',edition:'1',kind:'authoritative'}]}]));});
test('F29-A04 unknown cross-reference cannot silently resolve',()=>{assert.throws(()=>audit([{book:'GM Handbook',rules:[{id:'missing',edition:'1',kind:'reference'}]}]));});
test('F29-A05 incompatible edition reference fails validation',()=>{assert.throws(()=>audit([{book:'Zero Day',rules:[{id:'R01',edition:'2',kind:'reference'}]}]));});
test('F29-A06 Quick-Start character transfer retains attributes, skills and inventory',()=>{const c={id:'pc1',attributes:{INT:3},skills:{research:2},inventory:['radio']};assert.deepEqual(transfer(c),c);});
test('F29-A07 Quick-Start transfer does not reset injuries or progress',()=>{const c={hp:6,stress:15,conditions:['injured'],progress:{research:2}};assert.deepEqual(transfer(c),c);});
test('F29-A08 incomplete rights evidence blocks release',()=>{assert.equal(release({mechanical:true,semantic:true,playtest:true,editorial:true,rights:false,accessibility:true,approval:true}),false);});
test('F29-A09 missing accessibility acceptance blocks release',()=>{assert.equal(release({mechanical:true,semantic:true,playtest:true,editorial:true,rights:true,accessibility:false,approval:true}),false);});
test('F29-A10 release needs all explicit gates including owner approval',()=>{const p={mechanical:true,semantic:true,playtest:true,editorial:true,rights:true,accessibility:true,approval:true};assert.equal(release(p),true);p.approval=false;assert.equal(release(p),false);});
