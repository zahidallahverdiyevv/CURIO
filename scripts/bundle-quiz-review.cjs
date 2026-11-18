const fs=require('node:fs'),path=require('node:path');const dir=path.resolve(__dirname,'../docs/quiz-review');
const categories=['history','geography','science','philosophy','art-culture','technology'];
const v3=process.argv.includes('--v3'),suffix=v3?'2026-11-18-v3':'2026-11-17-v2';
let text='# CURIO — 630 new questions — review copy '+(v3?'v3':'v2')+'\n\n42 quizzes, 15 questions each. This is the current local-site answer key as of '+(v3?'18':'17')+' November 2026. Reviewer feedback has been received for all six categories; revised questions still need independent re-review. Marked answers are not proof of correctness. Report findings by quiz slug and question number. The six original quizzes and Daily Six are not part of this file.\n\n';
for(const category of categories){const source=fs.readFileSync(path.join(dir,category+'-review-'+suffix+'.md'),'utf8');if(source.includes('## undefined'))throw Error(category+' missing review title');text+=source.replace(/^#{1,5} /gm,match=>'#'+match)+'\n\n';}
const file=path.join(dir,'all-quizzes-review-'+suffix+'.md');fs.writeFileSync(file,text);console.log('Combined review file: '+file);
