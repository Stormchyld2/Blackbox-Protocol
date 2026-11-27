import test from 'node:test';
import assert from 'node:assert/strict';
// F35 advanced in-memory protocol examples; no real auth, transport, or durable store.
function host(){return {epoch:2,revision:5,sessions:new Map([['a',{owner:'p1',active:true}],['b',{owner:'p2',active:true}]]),commands:new Map(),events:[],persisted:[],clock:9};}
function auth(s,session){assert.ok(s.sessions.get(session)?.active);return s.sessions.get(session).owner;}
function submit(s,session,id,payload,expected){const owner=auth(s,session),old=s.commands.get(id);if(old){assert.equal(old.owner,owner);assert.deepEqual(old.payload,payload);return old.result;}assert.equal(expected,s.revision);const result={status:'pending',id};s.commands.set(id,{owner,payload,result});return result;}
function project(s,owner){return s.events.map(e=>({revision:e.revision,payload:e.to.includes(owner)?e.payload:null}));}
function commit(s,record,stored){assert.equal(stored,true);s.persisted.push(record);s.revision++;return {status:'ack',revision:s.revision};}
function restore(s,confirmed){assert.equal(confirmed,true);s.epoch++;for(const v of s.sessions.values())v.active=false;}
test('F35-A01 cross-user duplicate command ID cannot reveal prior result',()=>{const s=host();submit(s,'a','cmd',{kind:'intent'},5);assert.throws(()=>submit(s,'b','cmd',{kind:'intent'},5));});
test('F35-A02 same owner conflicting payload is refused',()=>{const s=host();submit(s,'a','cmd',{kind:'intent'},5);assert.throws(()=>submit(s,'a','cmd',{kind:'other'},5));});
test('F35-A03 revoked session cannot submit',()=>{const s=host();s.sessions.get('a').active=false;assert.throws(()=>submit(s,'a','cmd',{kind:'intent'},5));});
test('F35-A04 filtered update hides private payload while retaining revision',()=>{const s=host();s.events.push({revision:6,to:['p1'],payload:{secret:'clue'}});assert.deepEqual(project(s,'p2'),[{revision:6,payload:null}]);});
test('F35-A05 authorized recipient receives same revision with permitted payload',()=>{const s=host();s.events.push({revision:6,to:['p1'],payload:{clue:'public-to-p1'}});assert.equal(project(s,'p1')[0].payload.clue,'public-to-p1');});
test('F35-A06 no acknowledgment before simulated persistence',()=>{const s=host();assert.throws(()=>commit(s,{kind:'event'},false));assert.equal(s.revision,5);assert.equal(s.persisted.length,0);});
test('F35-A07 acknowledged commit has persisted record first',()=>{const s=host();const result=commit(s,{kind:'event'},true);assert.equal(result.status,'ack');assert.equal(s.persisted.length,1);assert.equal(s.revision,6);});
test('F35-A08 restore requires explicit confirmation',()=>{const s=host();assert.throws(()=>restore(s,false));assert.equal(s.epoch,2);});
test('F35-A09 restore rotates epoch and invalidates sessions',()=>{const s=host();restore(s,true);assert.equal(s.epoch,3);assert.throws(()=>auth(s,'a'));assert.throws(()=>auth(s,'b'));});
test('F35-A10 network disconnection does not change campaign clock',()=>{const s=host();s.sessions.get('a').active=false;assert.equal(s.clock,9);assert.equal(s.revision,5);});
