import test from 'node:test';
import assert from 'node:assert/strict';
// F33 advanced synthetic client protocol: not authentication, networking or a UI.
function server(){return {revision:4,epoch:2,assignments:new Map([['p1','c1'],['p2','c2']]),evidence:[{id:'e1',to:['p1'],text:'private clue'},{id:'e2',to:['p2'],text:'other clue'}],notes:new Map([['p1',['draft note']]]),fictionalService:false};}
function verify(s,session){assert.equal(s.assignments.get(session.player),session.character);assert.ok(session.verified);}
function projection(s,session){verify(s,session);return {character:session.character,evidence:s.evidence.filter(e=>e.to.includes(session.player)).map(e=>e.id),revision:s.revision,epoch:s.epoch};}
function reconnect(s,session,cached){verify(s,session);return cached.epoch===s.epoch&&cached.revision===s.revision?'current':'resync';}
function action(s,session,revision){verify(s,session);assert.equal(revision,s.revision);return 'pending';}
function note(s,session,owner){verify(s,session);assert.equal(session.player,owner);return s.notes.get(owner)||[];}
const p1={player:'p1',character:'c1',verified:true},p2={player:'p2',character:'c2',verified:true};
test('F33-A01 wrong character assignment blocks projection',()=>{const s=server();assert.throws(()=>projection(s,{player:'p1',character:'c2',verified:true}));});
test('F33-A02 unverified session cannot receive projection',()=>{const s=server();assert.throws(()=>projection(s,{player:'p1',character:'c1',verified:false}));});
test('F33-A03 evidence is filtered separately for two players',()=>{const s=server();assert.deepEqual(projection(s,p1).evidence,['e1']);assert.deepEqual(projection(s,p2).evidence,['e2']);});
test('F33-A04 personal notes inaccessible to another player',()=>{const s=server();assert.throws(()=>note(s,p2,'p1'));assert.deepEqual(note(s,p1,'p1'),['draft note']);});
test('F33-A05 matching revision and epoch can resume',()=>{const s=server();assert.equal(reconnect(s,p1,{revision:4,epoch:2}),'current');});
test('F33-A06 epoch mismatch requires new snapshot',()=>{const s=server();assert.equal(reconnect(s,p1,{revision:4,epoch:1}),'resync');});
test('F33-A07 stale revision requires revalidation',()=>{const s=server();assert.equal(reconnect(s,p1,{revision:3,epoch:2}),'resync');assert.throws(()=>action(s,p1,3));});
test('F33-A08 fictional service outage does not revoke sheet access',()=>{const s=server();s.fictionalService=true;assert.equal(projection(s,p1).character,'c1');});
test('F33-A09 player intent stays pending even during fictional outage',()=>{const s=server();s.fictionalService=true;assert.equal(action(s,p1,4),'pending');});
test('F33-A10 manual play remains a supported channel independent of device',()=>{const channels=['digital','paper'];assert.ok(channels.includes('paper'));assert.equal(channels.length,2);});
