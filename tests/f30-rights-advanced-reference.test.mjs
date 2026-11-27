import test from 'node:test';
import assert from 'node:assert/strict';
// F30 advanced: synthetic SRD release boundaries, not legal clearance or license grant.
const excluded=new Set(['setting-lore','named-faction','adventure','zero-day','art','logo','map','trade-dress','software','full-catalogue']);
const included=new Set(['resolution','attributes','generic-competency','generic-time','generic-inventory','homebrew-template']);
function classify(item){if(excluded.has(item.kind))return 'reserved';if(!included.has(item.kind))return 'review';return item.designated&&item.rightsCleared?'eligible':'hold';}
function exportAssets(items,permission){return items.filter(x=>permission(x)&&x.status==='cleared');}
function ready(release){return !!(release.manifest&&release.version&&release.rightsHolder&&release.sourceURL&&release.notice&&release.ownerApproval&&release.legalReview&&release.rightsAudit&&release.placeholderCount===0);}
const draft=()=>({manifest:true,version:'1.0',rightsHolder:'verified holder',sourceURL:'canonical release',notice:'CC BY 4.0 only designated SRD',ownerApproval:true,legalReview:true,rightsAudit:true,placeholderCount:0});
test('F30-A01 generic designated cleared rules are SRD-eligible',()=>{assert.equal(classify({kind:'resolution',designated:true,rightsCleared:true}),'eligible');});
test('F30-A02 undesignated mechanics are not automatically licensed',()=>{assert.equal(classify({kind:'resolution',designated:false,rightsCleared:true}),'hold');});
test('F30-A03 setting lore and named factions remain excluded',()=>{for(const kind of ['setting-lore','named-faction'])assert.equal(classify({kind,designated:true,rightsCleared:true}),'reserved');});
test('F30-A04 Zero Day and other adventures remain excluded',()=>{for(const kind of ['adventure','zero-day'])assert.equal(classify({kind,designated:true,rightsCleared:true}),'reserved');});
test('F30-A05 artwork, marks, maps, software and full catalogues remain excluded',()=>{for(const kind of ['art','logo','map','trade-dress','software','full-catalogue'])assert.equal(classify({kind,designated:true,rightsCleared:true}),'reserved');});
test('F30-A06 unknown content type cannot silently join SRD',()=>{assert.equal(classify({kind:'unknown',designated:true,rightsCleared:true}),'review');});
test('F30-A07 homebrew export excludes assets without export permission',()=>{const a=[{id:'a',status:'cleared',uses:['export']},{id:'b',status:'cleared',uses:['print']},{id:'c',status:'pending',uses:['export']}];assert.deepEqual(exportAssets(a,x=>x.uses.includes('export')).map(x=>x.id),['a']);});
test('F30-A08 attribution and release source placeholders block publication',()=>{const r=draft();r.placeholderCount=1;assert.equal(ready(r),false);});
test('F30-A09 missing rights holder or legal review blocks release',()=>{const a=draft();a.rightsHolder='';assert.equal(ready(a),false);const b=draft();b.legalReview=false;assert.equal(ready(b),false);});
test('F30-A10 full synthetic release metadata does not itself publish license',()=>{const r=draft();assert.equal(ready(r),true);assert.equal(Object.hasOwn(r,'published'),false);});
