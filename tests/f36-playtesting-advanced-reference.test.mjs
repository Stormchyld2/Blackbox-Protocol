import test from 'node:test';
import assert from 'node:assert/strict';
// F36 advanced synthetic evidence traceability, not observed tabletop testing.
const eras=['BP','SL','DZ'], modes=['manual','digital'], presets=['Quick Start','Casual','Standard','Advanced','Simulation','Custom'];
function trace(record){assert.ok(record.sourceRevision&&record.scenarioId&&record.issueId&&record.expected!==undefined&&record.observed!==undefined);assert.ok(record.reproduction&&record.owner&&record.retestStatus);if(record.retestStatus==='verified')assert.ok(record.fixCommit&&record.retestEvidence);return true;}
function coverage(rows){return {eras:eras.filter(e=>rows.some(r=>r.era===e)),modes:modes.filter(m=>rows.some(r=>r.mode===m)),presets:presets.filter(p=>rows.some(r=>r.preset===p)),novice:rows.some(r=>r.experience==='novice'),experienced:rows.some(r=>r.experience==='experienced')};}
function issue(id,overrides={}){return {sourceRevision:'rev-a',scenarioId:'scenario-1',issueId:id,expected:'expected',observed:'observed',reproduction:'steps',owner:'lead',retestStatus:'open',...overrides};}
test('F36-A01 issue requires source revision',()=>{const x=issue('PT-003');delete x.sourceRevision;assert.throws(()=>trace(x));});
test('F36-A02 issue requires reproducible steps',()=>{const x=issue('PT-004');delete x.reproduction;assert.throws(()=>trace(x));});
test('F36-A03 verified retest needs fix commit and evidence',()=>assert.throws(()=>trace(issue('PT-005',{retestStatus:'verified'}))));
test('F36-A04 complete verified retest record is accepted',()=>assert.equal(trace(issue('PT-005',{retestStatus:'verified',fixCommit:'abc123',retestEvidence:'run-42'})),true));
test('F36-A05 BP-only sessions do not satisfy three-era coverage',()=>assert.deepEqual(coverage([{era:'BP'}]).eras,['BP']));
test('F36-A06 three native eras are distinguishable',()=>assert.deepEqual(coverage(eras.map(era=>({era}))).eras,eras));
test('F36-A07 manual-only sessions do not demonstrate digital parity',()=>assert.deepEqual(coverage([{mode:'manual'}]).modes,['manual']));
test('F36-A08 every approved preset must be represented separately',()=>assert.deepEqual(coverage(presets.map(preset=>({preset}))).presets,presets));
test('F36-A09 novice-only sessions do not prove experienced-group coverage',()=>{const c=coverage([{experience:'novice'}]);assert.equal(c.novice,true);assert.equal(c.experienced,false);});
test('F36-A10 open issue cannot be labeled verified without retest evidence',()=>{const x=issue('PT-006');assert.equal(x.retestStatus,'open');assert.equal(Object.hasOwn(x,'retestEvidence'),false);});
