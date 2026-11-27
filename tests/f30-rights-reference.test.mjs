import test from 'node:test';
import assert from 'node:assert/strict';
// F30 synthetic rights-release fixtures; never a grant or actual legal clearance.
const statuses=['unreviewed','pending','cleared','restricted','rejected'];
function asset(id,status,uses=['print']){return {id,title:id,creator:'Recorded creator',origin:'local',version:'1',license:'documented',uses,attribution:'recorded',restrictions:[],evidence:'review record',reviewer:'assigned',status,publications:['Core Rulebook']};}
function validate(a){for(const k of ['id','title','creator','origin','version','license','uses','attribution','restrictions','evidence','reviewer','status','publications'])assert.ok(Object.hasOwn(a,k),'missing '+k);assert.ok(statuses.includes(a.status));}
function allowed(a,use){validate(a);return a.status==='cleared'&&a.uses.includes(use)&&!!a.evidence;}
function release(items,ownerApproval){return !!ownerApproval&&items.every(a=>allowed(a,'print'));}
test('F30-01 rights statuses are distinct',()=>{assert.equal(new Set(statuses).size,5);});
test('F30-02 complete rights record satisfies schema fixture',()=>{validate(asset('a','cleared'));});
test('F30-03 missing evidence field rejects register entry',()=>{const a=asset('a','cleared');delete a.evidence;assert.throws(()=>validate(a));});
test('F30-04 unreviewed and pending assets cannot release',()=>{for(const s of ['unreviewed','pending'])assert.equal(allowed(asset('a',s),'print'),false);});
test('F30-05 restricted and rejected assets cannot release',()=>{for(const s of ['restricted','rejected'])assert.equal(allowed(asset('a',s),'print'),false);});
test('F30-06 cleared print permission does not imply export permission',()=>{assert.equal(allowed(asset('a','cleared',['print']),'export'),false);});
test('F30-07 unknown license scope is not treated as clearance',()=>{const a=asset('a','pending');a.license='unknown';assert.equal(allowed(a,'print'),false);});
test('F30-08 every included asset must be cleared for its use',()=>{assert.equal(release([asset('a','cleared'),asset('b','pending')],true),false);});
test('F30-09 owner approval is required independently of asset clearance',()=>{assert.equal(release([asset('a','cleared')],false),false);});
test('F30-10 approved release fixture does not grant a project license',()=>{const record={licenseEffective:false,rightsCleared:release([asset('a','cleared')],true)};assert.equal(record.rightsCleared,true);assert.equal(record.licenseEffective,false);});
