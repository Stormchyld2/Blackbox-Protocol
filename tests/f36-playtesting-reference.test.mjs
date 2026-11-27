import test from 'node:test';
import assert from 'node:assert/strict';
// F36 evidence-quality fixtures, not human playtests or production rule simulations.
const required=['rulesVersion','scenario','participantCode','mode','era','expected','observed','durationMinutes','bookkeepingMinutes','agencyNotes','clueRoutes','resourcePressure','advancement','dominantChoices','severity','owner','status'];
function validateSession(r){for(const key of required)assert.ok(Object.hasOwn(r,key),'missing '+key);assert.ok(['BP','SL','DZ'].includes(r.era));assert.ok(['manual','digital'].includes(r.mode));assert.ok(Number.isFinite(r.durationMinutes)&&r.durationMinutes>=0);assert.ok(Number.isFinite(r.bookkeepingMinutes)&&r.bookkeepingMinutes>=0);assert.ok(r.bookkeepingMinutes<=r.durationMinutes);assert.ok(['critical','major','minor','none'].includes(r.severity));return true;}
function fixture(overrides={}){return {rulesVersion:'draft-rev',scenario:'synthetic case',participantCode:'anon-1',mode:'manual',era:'BP',expected:'A',observed:'A',durationMinutes:60,bookkeepingMinutes:10,agencyNotes:'choices available',clueRoutes:3,resourcePressure:'low',advancement:'none',dominantChoices:'investigate',severity:'none',owner:'test lead',status:'synthetic',...overrides};}
function release(issues,humanSessions,deviceTests){return humanSessions>0&&deviceTests>0&&!issues.some(i=>i.severity==='critical'&&i.status!=='closed')&&!issues.some(i=>i.severity==='major'&&i.status!=='closed'&&!i.acceptedWithMitigation);}
test('F36-01 complete anonymized evidence record is accepted',()=>assert.equal(validateSession(fixture()),true));
test('F36-02 missing rules version is rejected',()=>{const x=fixture();delete x.rulesVersion;assert.throws(()=>validateSession(x));});
test('F36-03 unsupported era is rejected',()=>assert.throws(()=>validateSession(fixture({era:'unknown'}))));
test('F36-04 unsupported mode is rejected',()=>assert.throws(()=>validateSession(fixture({mode:'automated-only'}))));
test('F36-05 bookkeeping cannot exceed total session time',()=>assert.throws(()=>validateSession(fixture({bookkeepingMinutes:70}))));
test('F36-06 negative session duration is invalid',()=>assert.throws(()=>validateSession(fixture({durationMinutes:-1}))));
test('F36-07 unresolved critical issue blocks release',()=>assert.equal(release([{severity:'critical',status:'open'}],3,2),false));
test('F36-08 major issue needs closure or documented acceptance',()=>{assert.equal(release([{severity:'major',status:'open'}],3,2),false);assert.equal(release([{severity:'major',status:'open',acceptedWithMitigation:true}],3,2),true);});
test('F36-09 no human tabletop sessions blocks release',()=>assert.equal(release([],0,4),false));
test('F36-10 no real device tests blocks release',()=>assert.equal(release([],3,0),false));
