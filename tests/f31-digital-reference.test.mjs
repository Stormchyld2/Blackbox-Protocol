import test from 'node:test';
import assert from 'node:assert/strict';
// F31 reference implementation: in-memory only, not authentication, durable storage or network security.
function state(){return {id:'campaign-1',schema:1,revision:0,epoch:1,content:{rules:'1.0'},records:{supplies:5},events:[],seen:new Set(),privateNotes:['GM secret']};}
function evaluate(ruleId,inputs){assert.equal(ruleId,'consume');assert.ok(Number.isInteger(inputs.amount)&&inputs.amount>=0);return {kind:'consume',amount:inputs.amount};}
function submit(s,cmd,expectedRevision,approved){assert.ok(approved,'GM approval');assert.equal(expectedRevision,s.revision,'stale revision');assert.ok(cmd.id&&!s.seen.has(cmd.id),'duplicate command');assert.ok(cmd.effect.kind==='consume'&&cmd.effect.amount<=s.records.supplies);const next=s.records.supplies-cmd.effect.amount;s.records.supplies=next;s.revision++;s.seen.add(cmd.id);s.events.push({id:cmd.id,revision:s.revision,kind:cmd.effect.kind});return s.revision;}
function project(s,role){const publicView={id:s.id,revision:s.revision,epoch:s.epoch,supplies:s.records.supplies};return role==='GM'?{...publicView,privateNotes:[...s.privateNotes]}:publicView;}
function snapshot(s){return JSON.parse(JSON.stringify({id:s.id,schema:s.schema,revision:s.revision,epoch:s.epoch,content:s.content,records:s.records,events:s.events}));}
test('F31-01 campaign manifest pins schema, content and revision',()=>{const s=state();assert.equal(s.schema,1);assert.equal(s.content.rules,'1.0');assert.equal(s.revision,0);});
test('F31-02 pure evaluation proposes effect without mutating state',()=>{const s=state(),before=s.records.supplies;assert.deepEqual(evaluate('consume',{amount:2}),{kind:'consume',amount:2});assert.equal(s.records.supplies,before);});
test('F31-03 unapproved command cannot mutate campaign',()=>{const s=state();assert.throws(()=>submit(s,{id:'c1',effect:evaluate('consume',{amount:1})},0,false));assert.equal(s.revision,0);});
test('F31-04 approved command atomically records revision and audit event',()=>{const s=state();submit(s,{id:'c1',effect:evaluate('consume',{amount:2})},0,true);assert.equal(s.records.supplies,3);assert.equal(s.revision,1);assert.equal(s.events.length,1);});
test('F31-05 stale revision rejects mutation',()=>{const s=state();assert.throws(()=>submit(s,{id:'c1',effect:evaluate('consume',{amount:1})},3,true));assert.equal(s.records.supplies,5);});
test('F31-06 duplicate command cannot replay effect',()=>{const s=state(),c={id:'c1',effect:evaluate('consume',{amount:1})};submit(s,c,0,true);assert.throws(()=>submit(s,c,1,true));assert.equal(s.records.supplies,4);});
test('F31-07 invalid stock effect cannot partially commit',()=>{const s=state();assert.throws(()=>submit(s,{id:'c1',effect:evaluate('consume',{amount:6})},0,true));assert.equal(s.events.length,0);assert.equal(s.revision,0);});
test('F31-08 player projection excludes GM private notes',()=>{const s=state();assert.equal(project(s,'player').privateNotes,undefined);assert.equal(project(s,'GM').privateNotes.length,1);});
test('F31-09 snapshot preserves authoritative records and event history',()=>{const s=state();submit(s,{id:'c1',effect:evaluate('consume',{amount:1})},0,true);const b=snapshot(s);assert.equal(b.records.supplies,4);assert.equal(b.events.length,1);});
test('F31-10 snapshot is isolated from subsequent live changes',()=>{const s=state(),b=snapshot(s);submit(s,{id:'c1',effect:evaluate('consume',{amount:1})},0,true);assert.equal(b.records.supplies,5);assert.equal(b.revision,0);});
