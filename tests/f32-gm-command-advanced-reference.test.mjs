import test from 'node:test';
import assert from 'node:assert/strict';
// F32 advanced reference fixtures: synthetic in-memory audit and permissions.
function host(){return {revision:0,epoch:1,paused:false,records:{clue:'draft'},audit:[],published:new Map(),rolls:[]};}
function role(actor){assert.equal(actor.role,'GM');assert.ok(actor.id);}
function publish(s,actor,id,recipients){role(actor);assert.ok(!s.paused);assert.ok(Array.isArray(recipients)&&recipients.length>0);assert.ok(Object.hasOwn(s.records,id));s.published.set(id,new Set(recipients));s.audit.push({type:'publish',actor:actor.id,id,recipients:[...recipients]});}
function view(s,id,viewer){return s.published.get(id)?.has(viewer)?s.records[id]:undefined;}
function override(s,actor,id,after,reason){role(actor);assert.ok(!s.paused);assert.ok(typeof reason==='string'&&reason.trim());assert.ok(Object.hasOwn(s.records,id));const before=s.records[id];s.records[id]=after;s.revision++;s.audit.push({type:'override',actor:actor.id,id,before,after,reason});}
function roll(s,source,value,actor){assert.ok(['physical','automated'].includes(source));assert.ok(Number.isInteger(value)&&value>=1&&value<=100);s.rolls.push({source,value,actor});}
function restore(s,actor,confirmed){role(actor);assert.equal(confirmed,true);s.epoch++;s.audit.push({type:'restore',actor:actor.id,epoch:s.epoch});}
const gm={id:'gm-1',role:'GM'},player={id:'p-1',role:'player'};
test('F32-A01 publish requires identified GM',()=>{const s=host();assert.throws(()=>publish(s,player,'clue',['p-1']));assert.equal(s.published.size,0);});
test('F32-A02 recipient projection excludes other players',()=>{const s=host();publish(s,gm,'clue',['p-1']);assert.equal(view(s,'clue','p-1'),'draft');assert.equal(view(s,'clue','p-2'),undefined);});
test('F32-A03 empty recipient list cannot publish',()=>{const s=host();assert.throws(()=>publish(s,gm,'clue',[]));assert.equal(s.audit.length,0);});
test('F32-A04 override requires a documented reason',()=>{const s=host();assert.throws(()=>override(s,gm,'clue','revised',' '));assert.equal(s.records.clue,'draft');});
test('F32-A05 override appends before/after, actor and reason',()=>{const s=host();override(s,gm,'clue','revised','corrected clue');assert.deepEqual(s.audit[0],{type:'override',actor:'gm-1',id:'clue',before:'draft',after:'revised',reason:'corrected clue'});});
test('F32-A06 subsequent correction retains earlier audit event',()=>{const s=host();override(s,gm,'clue','v2','first');override(s,gm,'clue','v3','second');assert.equal(s.audit.length,2);assert.equal(s.audit[0].after,'v2');});
test('F32-A07 physical dice record source, value and actor',()=>{const s=host();roll(s,'physical',37,'p-1');assert.deepEqual(s.rolls[0],{source:'physical',value:37,actor:'p-1'});});
test('F32-A08 automated dice use same D100 range validation',()=>{const s=host();roll(s,'automated',100,'gm-1');assert.throws(()=>roll(s,'physical',101,'p-1'));assert.throws(()=>roll(s,'automated',0,'gm-1'));});
test('F32-A09 restore requires explicit GM confirmation',()=>{const s=host();assert.throws(()=>restore(s,gm,false));assert.throws(()=>restore(s,player,true));assert.equal(s.epoch,1);});
test('F32-A10 confirmed restore increments epoch and records actor',()=>{const s=host();restore(s,gm,true);assert.equal(s.epoch,2);assert.deepEqual(s.audit[0],{type:'restore',actor:'gm-1',epoch:2});});
