import test from 'node:test';
import assert from 'node:assert/strict';
// F27 data-only homebrew reference: official source is immutable.
const core=Object.freeze({id:'core:skill:001',version:'1.0.0',label:'Core'});
function manifest(id,deps=[]){return {id,version:'1.0.0',author:'Local GM',license:'private',compatible:'1.x',dependencies:deps,assets:['images/icon.png'],entries:[]};}
function validate(pack){assert.match(pack.id,/^[a-z][a-z0-9-]*:[a-z][a-z0-9-]*:[a-z0-9-]+$/);assert.ok(pack.version&&pack.author&&pack.license&&pack.compatible);for(const p of pack.assets)assert.ok(!p.startsWith('/')&&!p.includes('..')&&!p.includes('\\'));assert.ok(!('execute'in pack));}
function resolve(packages){const ids=new Set();for(const p of packages){validate(p);assert.ok(!ids.has(p.id));ids.add(p.id);}for(const p of packages)for(const d of p.dependencies)assert.ok(ids.has(d));const visiting=new Set(),done=new Set(),map=new Map(packages.map(p=>[p.id,p]));function walk(id){if(done.has(id))return;assert.ok(!visiting.has(id),'cycle');visiting.add(id);for(const d of map.get(id).dependencies)walk(d);visiting.delete(id);done.add(id);}for(const id of ids)walk(id);return true;}
function effective(base,overrides){const out={...base};const seen=new Set();for(const o of overrides){assert.equal(o.target,base.id);assert.ok(o.approved&&o.version===base.version);const key=o.layer+':'+o.field;assert.ok(!seen.has(key),'same-layer conflict');seen.add(key);out[o.field]=o.value;}return out;}
test('F27-01 valid namespaced package and data-only manifest',()=>{validate(manifest('local:pack:alpha'));});
test('F27-02 unsafe asset traversal is rejected',()=>{const p=manifest('local:pack:alpha');p.assets=['../secret'];assert.throws(()=>validate(p));});
test('F27-03 duplicate package identifiers reject activation',()=>{assert.throws(()=>resolve([manifest('local:pack:a'),manifest('local:pack:a')]));});
test('F27-04 missing dependency rejects activation',()=>{assert.throws(()=>resolve([manifest('local:pack:a',['local:pack:missing'])]));});
test('F27-05 dependency cycle rejects activation',()=>{assert.throws(()=>resolve([manifest('local:pack:a',['local:pack:b']),manifest('local:pack:b',['local:pack:a'])]));});
test('F27-06 valid dependency closure resolves',()=>{assert.equal(resolve([manifest('local:pack:a',['local:pack:b']),manifest('local:pack:b')]),true);});
test('F27-07 same-layer override conflict blocks activation',()=>{assert.throws(()=>effective(core,[{target:core.id,layer:'homebrew',field:'label',value:'A',version:core.version,approved:true},{target:core.id,layer:'homebrew',field:'label',value:'B',version:core.version,approved:true}]));});
test('F27-08 unapproved or incompatible override cannot activate',()=>{assert.throws(()=>effective(core,[{target:core.id,layer:'homebrew',field:'label',value:'X',version:'2.0.0',approved:true}]));});
test('F27-09 effective view does not mutate official record',()=>{const view=effective(core,[{target:core.id,layer:'homebrew',field:'label',value:'Custom',version:core.version,approved:true}]);assert.equal(view.label,'Custom');assert.equal(core.label,'Core');});
test('F27-10 activation failure leaves original effective view intact',()=>{const before={...core};assert.throws(()=>effective(core,[{target:core.id,layer:'homebrew',field:'label',value:'A',version:core.version,approved:false}]));assert.deepEqual(core,before);});
