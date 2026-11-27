import fs from 'node:fs';
const skill=fs.readFileSync('notes/SKILL-NOTES.md','utf8'), occ=JSON.parse(fs.readFileSync('notes/OCCUPATION-INDEX.json','utf8'));
const lines=skill.split(/\r?\n/);
console.log('CATALOGUE_FIRST_LINES',JSON.stringify(lines.slice(0,75)));
console.log('OCCUPATION_TOP',JSON.stringify({kind:Array.isArray(occ)?'array':typeof occ,keys:Object.keys(occ).slice(0,15),sample:Array.isArray(occ)?occ[0]:Object.fromEntries(Object.entries(occ).slice(0,2))}).slice(0,6500));
const heads=lines.filter(x=>/^#{1,5} /.test(x));console.log('CATALOGUE_HEADINGS',JSON.stringify(heads.slice(0,30)));
