#!/usr/bin/env node
// Conservative, explicit migration: accepts a catalogue array or {competencies:[...]}.
// Dry-run by default; --write updates the supplied JSON file in place.
// Unknown schemas or mismatched existing defaults abort rather than silently corrupt data.
import fs from 'node:fs';
const file=process.argv[2], write=process.argv.includes('--write');
if(!file)throw Error('Usage: node scripts/migrate-training-hours.mjs path/to/catalogue.json [--write]');
const doc=JSON.parse(fs.readFileSync(file,'utf8'));
const entries=Array.isArray(doc)?doc:doc.competencies;
if(!Array.isArray(entries))throw Error('Expected array or {competencies:[]}');
const base={1:4,2:8,3:16,4:40,5:80,6:100,7:180};
const target=(c,l)=>c>=6&&l<=4?base[c]*2**(l-2):base[c]*2**(l-1);
let updated=0,skipped=0;
for(const entry of entries){
 const c=entry.complexity;
 if(!Number.isInteger(c)||c<1||c>7)throw Error('Invalid complexity on '+entry.id);
 // Only the explicit 'levels' array of {level, training_hours} is recognized.
 if(!Array.isArray(entry.levels)){skipped++;continue;}
 for(const row of entry.levels){
  const l=typeof row.level==='number'?row.level:['I','II','III','IV','V'].indexOf(row.level)+1;
  if(l<1||l>5||!Number.isInteger(l))throw Error('Invalid level on '+entry.id);
  if(!Object.hasOwn(row,'training_hours')){skipped++;continue;}
  const old=base[c]*2**(l-1), revised=target(c,l);
  if(row.training_hours===revised)continue;
  if(row.training_hours!==old)throw Error('Potential override / unexpected hours at '+entry.id+' '+l+': '+row.training_hours+' (expected '+old+'). Refusing automatic overwrite.');
  row.training_hours=revised;updated++;
 }
}
if(write)fs.writeFileSync(file,JSON.stringify(doc,null,2)+'\n');
console.log(JSON.stringify({entries:entries.length,updated,skipped,write},null,2));
