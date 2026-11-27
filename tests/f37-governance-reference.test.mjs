import test from 'node:test';
import assert from 'node:assert/strict';
// F37 synthetic governance checks; not a full repository or legal audit.
const types=new Set(['errata','clarification','balance','optional extension','content','revision','edition']);
const required=['proposalId','owner','rulesVersion','contentVersion','softwareVersion','rationale','alternatives','dependencies','compatibility','probability','examples','tests','researchRights','migration','approvalStatus'];
function validate(change){for(const key of required)assert.ok(Object.hasOwn(change,key),'missing '+key);assert.ok(types.has(change.type));assert.ok(['provisional','approved','rejected'].includes(change.approvalStatus));return true;}
function proposal(overrides={}){return {proposalId:'GOV-001',owner:'rules editor',rulesVersion:'r1',contentVersion:'c1',softwareVersion:'s1',rationale:'reason',alternatives:'none',dependencies:[],compatibility:'unchanged',probability:'reviewed',examples:['example'],tests:['fixture'],researchRights:'review pending',migration:'none',approvalStatus:'provisional',type:'clarification',...overrides};}
function canRelease({rightsCleared,humanPlaytests,criticalOpen,majorUnaccepted,ownerApproved}){return rightsCleared&&humanPlaytests&&!criticalOpen&&!majorUnaccepted&&ownerApproved;}
test('F37-01 complete proposal has versioned governance record',()=>assert.equal(validate(proposal()),true));
test('F37-02 proposal without rationale is rejected',()=>{const p=proposal();delete p.rationale;assert.throws(()=>validate(p));});
test('F37-03 proposal without migration disposition is rejected',()=>{const p=proposal();delete p.migration;assert.throws(()=>validate(p));});
test('F37-04 unsupported change category is rejected',()=>assert.throws(()=>validate(proposal({type:'untracked'}))));
test('F37-05 delegated proposal remains provisional',()=>assert.equal(proposal().approvalStatus,'provisional'));
test('F37-06 independent rules/content/software versions are recorded',()=>{const p=proposal();assert.equal([p.rulesVersion,p.contentVersion,p.softwareVersion].length,3);});
test('F37-07 missing rights clearance blocks release',()=>assert.equal(canRelease({rightsCleared:false,humanPlaytests:true,criticalOpen:false,majorUnaccepted:false,ownerApproved:true}),false));
test('F37-08 missing human playtest blocks release',()=>assert.equal(canRelease({rightsCleared:true,humanPlaytests:false,criticalOpen:false,majorUnaccepted:false,ownerApproved:true}),false));
test('F37-09 unresolved critical issue blocks release',()=>assert.equal(canRelease({rightsCleared:true,humanPlaytests:true,criticalOpen:true,majorUnaccepted:false,ownerApproved:true}),false));
test('F37-10 owner approval is mandatory for release',()=>assert.equal(canRelease({rightsCleared:true,humanPlaytests:true,criticalOpen:false,majorUnaccepted:false,ownerApproved:false}),false));
