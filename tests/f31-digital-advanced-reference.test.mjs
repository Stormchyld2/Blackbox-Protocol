import test from 'node:test';
import assert from 'node:assert/strict';
// F31 advanced in-memory fixtures; not durable transactions or network/auth security.
function fresh(){return {campaign:'c1',schema:1,revision:0,epoch:1,stock:5,history:[],seen:new Set(),private:['GM secret']};}
function commit(s,id,expected,amount){assert.ok(id&&!s.seen.has(id));assert.equal(expected,s.revision);assert.ok(Number.isInteger(amount)&&amount>=0&&amount<=s.stock);s.stock-=amount;s.revision++;s.seen.add(id);s.history.push({id,revision:s.revision,amount});}
function backup(s){return JSON.parse(JSON.stringify({campaign:s.campaign,schema:s.schema,revision:s.revision,epoch:s.epoch,stock:s.stock,history:s.history,seen:[...s.seen]}));}
function restore(s,b){assert.equal(b.campaign,s.campaign);assert.equal(b.schema,s.schema);assert.ok(Array.isArray(b.history)&&Array.isArray(b.seen)&&Number.isInteger(b.revision));assert.equal(new Set(b.seen).size,b.seen.length);const next={...s,revision:b.revision,epoch:s.epoch+1,stock:b.stock,history:structuredClone(b.history),seen:new Set(b.seen)};return next;}
function migrate(s,target,approved){assert.ok(approved&&target===s.schema+1);const b=backup(s);const next={...s,schema:target,epoch:s.epoch+1};return {backup:b,next};}
function resync(s,client){return client.epoch===s.epoch&&client.revision===s.revision?'current':'snapshot-required';}
test('F31-A01 backup preserves revision, command IDs and audit history',()=>{const s=fresh();commit(s,'a',0,2);const b=backup(s);assert.equal(b.revision,1);assert.deepEqual(b.seen,['a']);assert.equal(b.history.length,1);});
test('F31-A02 restore rejects wrong campaign identity',()=>{const s=fresh(),b=backup(s);b.campaign='other';assert.throws(()=>restore(s,b));});
test('F31-A03 restore rejects incompatible schema',()=>{const s=fresh(),b=backup(s);b.schema=9;assert.throws(()=>restore(s,b));});
test('F31-A04 restored state increments epoch to force reconnect',()=>{const s=fresh(),next=restore(s,backup(s));assert.equal(next.epoch,2);assert.equal(resync(next,{epoch:1,revision:0}),'snapshot-required');});
test('F31-A05 restored command history prevents duplicate effects',()=>{const s=fresh();commit(s,'a',0,1);const next=restore(s,backup(s));assert.throws(()=>commit(next,'a',1,1));assert.equal(next.stock,4);});
test('F31-A06 migration requires approval and next schema',()=>{const s=fresh();assert.throws(()=>migrate(s,2,false));assert.throws(()=>migrate(s,4,true));assert.equal(s.schema,1);});
test('F31-A07 migration preview retains rollback snapshot',()=>{const s=fresh(),m=migrate(s,2,true);assert.equal(m.backup.schema,1);assert.equal(m.next.schema,2);assert.equal(s.schema,1);});
test('F31-A08 stale client revision requests resync',()=>{const s=fresh();commit(s,'a',0,1);assert.equal(resync(s,{epoch:1,revision:0}),'snapshot-required');});
test('F31-A09 matching client epoch and revision is current',()=>{const s=fresh();assert.equal(resync(s,{epoch:1,revision:0}),'current');});
test('F31-A10 backup excludes GM private notes from portable state example',()=>{const b=backup(fresh());assert.equal(Object.hasOwn(b,'private'),false);});
