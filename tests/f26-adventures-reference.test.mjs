import test from 'node:test';
import assert from 'node:assert/strict';
// F26 reference scenario contract; shared F07/F10/F15/F24 mechanics retain authority.
const scenario=()=>({id:'zero-day',version:1,era:'Blackbox Protocol',premise:'local disruption',audience:'new players',duration:'one session',boundaries:['no mandatory horror'],entry:['briefing','independent inquiry'],objectives:['find source'],essential:[{id:'source',routes:['witness','records','site']}],optional:[{id:'bonus',routes:['archive']}],approaches:['investigate','negotiate','withdraw'],events:[{id:'deadline',due:4}],outcomes:['resolved','partial','withdrawn'],gmTruth:'GM only',handouts:[{id:'notice',visibility:'player'}],continuation:[]});
function validate(s){assert.ok(s.id&&Number.isSafeInteger(s.version)&&s.version>0&&s.era&&s.premise&&s.audience&&s.duration&&s.boundaries.length&&s.entry.length&&s.objectives.length&&s.events.length&&s.outcomes.length>=2);assert.ok(s.essential.every(c=>new Set(c.routes).size>=2));assert.ok(s.approaches.length>=2);}
function clueAvailable(s,blocked){return s.essential.every(c=>c.routes.some(r=>!blocked.has(r)));}
function playerView(s){const {gmTruth,...rest}=s;return {...rest,handouts:s.handouts.filter(h=>h.visibility==='player')};}
function campaign(){return {sessions:[],events:new Set(),worldRefs:new Set(),objectives:new Map(),advancementReviews:0};}
function closeSession(c,id,{outcome,worldEvent,advancementReviewed}){assert.ok(id&&!c.events.has(id)&&outcome&&worldEvent&&advancementReviewed);c.events.add(id);c.sessions.push({id,outcome,worldEvent});c.worldRefs.add(worldEvent);c.advancementReviews++;}
test('F26-01 scenario has required identity and play contract',()=>{validate(scenario());});
test('F26-02 essential clue has independent routes',()=>{const s=scenario();s.essential[0].routes=['witness','witness'];assert.throws(()=>validate(s));});
test('F26-03 one blocked route cannot dead-end essential discovery',()=>{const s=scenario();for(const r of ['witness','records','site'])assert.equal(clueAvailable(s,new Set([r])),true);});
test('F26-04 all routes blocked must surface a design failure',()=>{assert.equal(clueAvailable(scenario(),new Set(['witness','records','site'])),false);});
test('F26-05 optional clue cannot block essential objective',()=>{const s=scenario();s.optional=[];assert.equal(clueAvailable(s,new Set(['witness'])),true);});
test('F26-06 GM truth is not present in player-facing projection',()=>{const s=scenario();s.handouts.push({id:'secret',visibility:'GM'});const v=playerView(s);assert.equal(v.gmTruth,undefined);assert.equal(v.handouts.length,1);});
test('F26-07 multiple approaches and outcomes prevent fixed resolution',()=>{const s=scenario();validate(s);assert.ok(s.approaches.includes('withdraw'));assert.ok(s.outcomes.includes('partial'));});
test('F26-08 session closure records outcome, world link and advancement review',()=>{const c=campaign();closeSession(c,'s1',{outcome:'partial',worldEvent:'event-1',advancementReviewed:true});assert.equal(c.sessions.length,1);assert.equal(c.worldRefs.has('event-1'),true);assert.equal(c.advancementReviews,1);});
test('F26-09 duplicate session closure does not duplicate world updates',()=>{const c=campaign();const args={outcome:'resolved',worldEvent:'event-1',advancementReviewed:true};closeSession(c,'s1',args);assert.throws(()=>closeSession(c,'s1',args));assert.equal(c.sessions.length,1);});
test('F26-10 missing advancement review cannot silently complete closure',()=>{const c=campaign();assert.throws(()=>closeSession(c,'s1',{outcome:'partial',worldEvent:'event-1',advancementReviewed:false}));assert.equal(c.sessions.length,0);});
