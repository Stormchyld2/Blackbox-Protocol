import test from 'node:test';
import assert from 'node:assert/strict';
// F34 advanced reference: in-memory display protocol, not secure transport or real media.
function host(){return {revision:0,scene:null,draft:null,clients:new Map(),events:[]};}
function stage(s,scene){s.draft=scene;}
function publish(s,actor){assert.equal(actor,'GM');assert.ok(s.draft);const d=s.draft;assert.ok(d.audience==='shared');assert.ok(!d.media||d.media.rights==='cleared');s.scene={type:d.type,text:d.text,alt:d.alt||null,media:d.media?{id:d.media.id}:null};s.revision++;s.events.push({type:'publish',revision:s.revision});}
function connect(s,id){s.clients.set(id,s.revision);return {revision:s.revision,scene:s.scene};}
function sync(s,id,revision){assert.ok(s.clients.has(id));return revision===s.revision?{status:'current'}:{status:'refresh',revision:s.revision,scene:s.scene};}
function clear(s,actor){assert.equal(actor,'GM');s.scene=null;s.revision++;s.events.push({type:'clear',revision:s.revision});}
function disconnect(last,policy){assert.ok(['stale','blank'].includes(policy));return policy==='blank'?{status:'disconnected',scene:null}:{status:'stale',scene:last.scene};}
test('F34-A01 publication rejects player-only audience',()=>{const s=host();stage(s,{type:'evidence',text:'secret',audience:'player'});assert.throws(()=>publish(s,'GM'));assert.equal(s.revision,0);});
test('F34-A02 publication requires GM approval',()=>{const s=host();stage(s,{type:'map',text:'map',audience:'shared'});assert.throws(()=>publish(s,'display'));});
test('F34-A03 unreviewed media cannot publish',()=>{const s=host();stage(s,{type:'multimedia',audience:'shared',media:{id:'m1',rights:'pending'}});assert.throws(()=>publish(s,'GM'));});
test('F34-A04 cleared media exposes identifier but not private metadata',()=>{const s=host();stage(s,{type:'multimedia',audience:'shared',media:{id:'m1',rights:'cleared',privateSource:'GM-only'}});publish(s,'GM');assert.deepEqual(s.scene.media,{id:'m1'});});
test('F34-A05 two clients see same published revision',()=>{const s=host();stage(s,{type:'news',text:'bulletin',audience:'shared'});publish(s,'GM');assert.equal(connect(s,'a').revision,connect(s,'b').revision);});
test('F34-A06 stale display requests current published scene',()=>{const s=host();connect(s,'a');stage(s,{type:'news',text:'new',audience:'shared'});publish(s,'GM');assert.equal(sync(s,'a',0).scene.text,'new');});
test('F34-A07 current display does not need duplicate scene delivery',()=>{const s=host();connect(s,'a');assert.equal(sync(s,'a',0).status,'current');});
test('F34-A08 clearing scene invalidates cached display revision',()=>{const s=host();stage(s,{type:'map',text:'map',audience:'shared'});publish(s,'GM');connect(s,'a');clear(s,'GM');assert.equal(sync(s,'a',1).scene,null);});
test('F34-A09 disconnected stale policy labels previous scene stale',()=>{const s=host();const last=connect(s,'a');assert.equal(disconnect(last,'stale').status,'stale');});
test('F34-A10 disconnected blank policy removes visible scene',()=>{const s=host();stage(s,{type:'map',text:'map',audience:'shared'});publish(s,'GM');assert.equal(disconnect(connect(s,'a'),'blank').scene,null);});
