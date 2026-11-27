import test from 'node:test';
import assert from 'node:assert/strict';
// F33 BlackBox OS synthetic protocol fixtures; not actual authentication or UI.
function server(){return {revision:2,epoch:1,assignments:new Map([['p1','char1']]),clues:new Map([['e1',{recipients:['p1'],text:'clue'}]]),notes:new Map(),commands:new Map()};}
function join(s,player,character){assert.equal(s.assignments.get(player),character);return {player,character,revision:s.revision,epoch:s.epoch};}
function snapshot(s,session){return {character:session.character,revision:s.revision,epoch:s.epoch,evidence:[...s.clues.values()].filter(c=>c.recipients.includes(session.player)).map(c=>c.text)};}
function submit(s,session,id,revision,intent){assert.ok(id&&!s.commands.has(id));assert.equal(revision,s.revision);s.commands.set(id,{player:session.player,intent,status:'pending'});}
function resolve(s,id,status){assert.ok(['accepted','rejected'].includes(status));assert.equal(s.commands.get(id)?.status,'pending');s.commands.get(id).status=status;if(status==='accepted')s.revision++;}
function offline(last){return {...last,stale:true,authoritativeCommitAllowed:false};}
test('F33-01 join requires assigned identity and character',()=>{const s=server();assert.throws(()=>join(s,'p2','char1'));});
test('F33-02 assigned player receives scoped session identity',()=>{const t=join(server(),'p1','char1');assert.equal(t.character,'char1');assert.equal(t.player,'p1');});
test('F33-03 authorized evidence appears only for recipient',()=>{const s=server(),t=join(s,'p1','char1');assert.deepEqual(snapshot(s,t).evidence,['clue']);});
test('F33-04 player cannot submit intent without current revision',()=>{const s=server(),t=join(s,'p1','char1');assert.throws(()=>submit(s,t,'c1',1,'move'));assert.equal(s.commands.size,0);});
test('F33-05 intent is pending without authoritative mutation',()=>{const s=server(),t=join(s,'p1','char1');submit(s,t,'c1',2,'move');assert.equal(s.commands.get('c1').status,'pending');assert.equal(s.revision,2);});
test('F33-06 acceptance changes revision only after resolution',()=>{const s=server(),t=join(s,'p1','char1');submit(s,t,'c1',2,'move');resolve(s,'c1','accepted');assert.equal(s.revision,3);});
test('F33-07 rejection leaves authoritative revision unchanged',()=>{const s=server(),t=join(s,'p1','char1');submit(s,t,'c1',2,'move');resolve(s,'c1','rejected');assert.equal(s.revision,2);});
test('F33-08 duplicate command ID is rejected',()=>{const s=server(),t=join(s,'p1','char1');submit(s,t,'c1',2,'move');assert.throws(()=>submit(s,t,'c1',2,'move'));});
test('F33-09 disconnected snapshot visibly stale and cannot commit',()=>{const s=server(),t=join(s,'p1','char1');const cached=offline(snapshot(s,t));assert.equal(cached.stale,true);assert.equal(cached.authoritativeCommitAllowed,false);});
test('F33-10 private player notes are not included in evidence projection',()=>{const s=server(),t=join(s,'p1','char1');s.notes.set('p1',['personal note']);assert.equal(Object.hasOwn(snapshot(s,t),'notes'),false);});
