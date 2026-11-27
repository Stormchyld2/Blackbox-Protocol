import test from 'node:test';
import assert from 'node:assert/strict';
// F34 synthetic display projection; not a browser or secure authorization service.
const kinds=new Set(['map','evidence','case-board','mission','news','bulletin','multimedia','encounter','environment','settlement','intermission','custom']);
function display(){return {revision:0,draft:null,published:null,events:[]};}
function stage(s,scene){assert.ok(kinds.has(scene.kind));s.draft=scene;}
function preview(s){return s.draft;}
function publish(s){assert.ok(s.draft);const {kind,publicText,media}=s.draft;s.published={kind,publicText,media:media||null};s.revision++;s.events.push({kind:'publish',revision:s.revision});}
function clear(s){s.published=null;s.revision++;s.events.push({kind:'clear',revision:s.revision});}
function view(s,identity){assert.equal(identity,'display');return {revision:s.revision,scene:s.published};}
test('F34-01 initial shared display is blank',()=>{assert.equal(view(display(),'display').scene,null);});
test('F34-02 staging and preview do not publish',()=>{const s=display();stage(s,{kind:'map',publicText:'sector map'});assert.equal(preview(s).kind,'map');assert.equal(view(s,'display').scene,null);});
test('F34-03 explicit publication increments scene revision',()=>{const s=display();stage(s,{kind:'map',publicText:'map'});publish(s);assert.equal(s.revision,1);assert.equal(view(s,'display').scene.kind,'map');});
test('F34-04 projection omits private workstation fields',()=>{const s=display();stage(s,{kind:'evidence',publicText:'released',gmNotes:'secret'});publish(s);assert.equal(Object.hasOwn(view(s,'display').scene,'gmNotes'),false);});
test('F34-05 display identity cannot use other role',()=>{assert.throws(()=>view(display(),'player'));});
test('F34-06 unknown scene type is rejected',()=>{const s=display();assert.throws(()=>stage(s,{kind:'unknown'}));});
test('F34-07 replacing published scene changes visible content',()=>{const s=display();stage(s,{kind:'news',publicText:'old'});publish(s);stage(s,{kind:'bulletin',publicText:'new'});publish(s);assert.equal(view(s,'display').scene.publicText,'new');assert.equal(s.revision,2);});
test('F34-08 clear removes content and advances revision',()=>{const s=display();stage(s,{kind:'map',publicText:'map'});publish(s);clear(s);assert.equal(view(s,'display').scene,null);assert.equal(s.revision,2);});
test('F34-09 reconnect receives current published scene not draft',()=>{const s=display();stage(s,{kind:'news',publicText:'published'});publish(s);stage(s,{kind:'evidence',publicText:'private draft'});assert.equal(view(s,'display').scene.publicText,'published');});
test('F34-10 display is read-only in synthetic interface',()=>{const s=display();const p=view(s,'display');assert.equal(Object.hasOwn(p,'submit'),false);assert.equal(s.revision,0);});
