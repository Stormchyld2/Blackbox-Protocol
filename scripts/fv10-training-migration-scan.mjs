import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const errors=[], findings=[], scanned=[];
const archival=/^(notes\/(?:PLAYTEST-|TRAINING-TIME-BALANCE-REVIEW|TRAINING-ACCELERATION-BALANCE-TEST|LEARNING-AUDIT|LEARNING-REGRESSION|COMPETENCY-SEMANTIC-SCREENING)|docs\/F09-Training-Mechanical-Audit\.md)/;
const targets=[/^docs\//,/^notes\//,/^manuals\//,/^dice-tray\/src\//];
const excluded=/\/node_modules\/|\/target\/|\/dist\//;
function walk(dir){if(!fs.existsSync(dir))return;for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(/\.(md|json|ts|js|mjs)$/.test(e.name)&&!excluded.test(p))inspect(p);}}
function inspect(file){const rel=path.relative(root,file).replaceAll(path.sep,'/');if(!targets.some(re=>re.test(rel)))return;const content=fs.readFileSync(file,'utf8');scanned.push(rel);const lines=content.split(/\r?\n/);let historical=false;for(let i=0;i<lines.length;i++){const s=lines[i];if(/^#{1,4} .*historical|^#{1,4} .*retired|^#{1,4} .*superseded/i.test(s))historical=true;const match=/\b(?:4,?960|9,?920)\b|global (?:cumulative )?CDR (?:minimum|gate|eligibility)|prerequisite.surplus discount|\b(?:1,?280|5,?120)\s+(?:incremental |effective |active )?hours\b/i.test(s);if(!match)continue;const category=archival.test(rel)||historical||/historical|retired|superseded|obsolete|no global|without global|removed|not applicable|do not require|do not use|removal of global CDR|prerequisite ID|supporting prerequisites or approved target-specific equivalency/i.test(s)?'historical-or-negation':'review';findings.push({file:rel,line:i+1,category,text:s.slice(0,220)});}}
for(const dir of ['docs','notes','manuals','dice-tray/src'])walk(path.join(root,dir));
const skill=fs.readFileSync('notes/SKILL-NOTES.md','utf8');
const occupation=JSON.parse(fs.readFileSync('notes/OCCUPATION-INDEX.json','utf8'));
const skillIds=[...skill.matchAll(/\b(?:SL-|DZ-)?[GP]-\d{3}\b/g)].map(m=>m[0]);
const unique=new Set(skillIds);
if(unique.size<550)errors.push('Only '+unique.size+' distinct competency IDs found in SKILL-NOTES.md; expected at least 550');
if(skill.length<100000)errors.push('Unexpectedly small skill catalogue');
if(!occupation||typeof occupation!=='object')errors.push('Occupation index is not an object');
const report={kind:'FV-10 machine scan',date:new Date().toISOString(),filesScanned:scanned.length,skillCatalogueBytes:Buffer.byteLength(skill),distinctSkillIds:unique.size,occupationTopLevelType:Array.isArray(occupation)?'array':'object',findings,errors,limitations:['Pattern and ID-presence scan only; not a parsed 550-record/2750-level semantic or numeric audit','Historical classification is heuristic; all review findings require manual adjudication','No human playtest or production ledger execution']};
fs.mkdirSync('audit-output',{recursive:true});fs.writeFileSync('audit-output/fv10-machine-scan.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({filesScanned:report.filesScanned,distinctSkillIds:unique.size,findings:findings.length,review:findings.filter(x=>x.category==='review'),errors},null,2));
if(errors.length||findings.some(x=>x.category==='review'))process.exitCode=1;
