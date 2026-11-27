import test from 'node:test';
import assert from 'node:assert/strict';
// F35 synthetic protocol fixtures, not real networking, crypto or persistence.
function host(){return {epoch:1,revision:3,joinTokens:new Map([['one-use',{used:false,expires:20}]]),sessions:new Map(),commands:new Map(),events:[],clock:8};}
function join(s,token,now,id,role){const t=s.joinTokens.get(token);assert.ok(t&&!t.used&&now<t.expires);assert.ok(['player','display'].includes(role));t.used=true;s.sessions.set(id,{role,active:true});return id;}
function authorize(s,id,role){const session=s.sessions.get(id);assert.ok(session?.active);assert.equal(session.role,role);}
function command(s,id,commandId,revision,payload){authorize(s,id,'player');const prior=s.commands.get(commandId);if(prior){assert.equal(prior.owner,id);assert.deepEqual(prior.payload,payload);return prior.result;}assert.equal(revision,s.revision);assert.ok(payload&&payload.kind==='intent');const result={status:'pending',revision:s.revision};s.commands.set(commandId,{owner:id,payload,result});return result;}
function update(s,epoch,revision){return epoch===s.epoch&&revision===s.revision+1?'apply':'snapshot';}
function disconnect(s,id){const session=s.sessions.get(id);if(session)session.active=false;}
test('F35-01 join token can be consumed only once',()=>{const s=host();join(s,'one-use',1,'p1','player');assert.throws(()=>join(s,'one-use',2,'p2','player'));});
test('F35-02 expired join token is refused',()=>{const s=host();assert.throws(()=>join(s,'one-use',20,'p1','player'));});
test('F35-03 player session is role scoped',()=>{const s=host();join(s,'one-use',1,'d1','display');assert.throws(()=>command(s,'d1','a',3,{kind:'intent'}));});
test('F35-04 authorized command remains pending before GM decision',()=>{const s=host();join(s,'one-use',1,'p1','player');assert.equal(command(s,'p1','a',3,{kind:'intent'}).status,'pending');assert.equal(s.revision,3);});
test('F35-05 stale expected revision rejected without mutation',()=>{const s=host();join(s,'one-use',1,'p1','player');assert.throws(()=>command(s,'p1','a',2,{kind:'intent'}));assert.equal(s.commands.size,0);});
test('F35-06 same-owner identical duplicate returns prior result',()=>{const s=host();join(s,'one-use',1,'p1','player');const a=command(s,'p1','a',3,{kind:'intent'});assert.deepEqual(command(s,'p1','a',3,{kind:'intent'}),a);assert.equal(s.commands.size,1);});
test('F35-07 conflicting command ID reuse rejected',()=>{const s=host();join(s,'one-use',1,'p1','player');command(s,'p1','a',3,{kind:'intent'});assert.throws(()=>command(s,'p1','a',3,{kind:'other'}));});
test('F35-08 revision gap requires fresh snapshot',()=>{const s=host();assert.equal(update(s,1,5),'snapshot');assert.equal(update(s,1,4),'apply');});
test('F35-09 epoch mismatch requires fresh snapshot',()=>{const s=host();assert.equal(update(s,0,4),'snapshot');});
test('F35-10 disconnect revokes session without moving clock',()=>{const s=host();join(s,'one-use',1,'p1','player');disconnect(s,'p1');assert.equal(s.clock,8);assert.throws(()=>command(s,'p1','a',3,{kind:'intent'}));});
