const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
function random(seed){let n=[...seed].reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,2166136261);return()=>{n^=n<<13;n^=n>>>17;n^=n<<5;return(n>>>0)/4294967296;};}
function shuffle(a,r){for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function parseCategory(category){const authored={};let slug;const source=fs.readFileSync(path.join(root,'content/quizzes',category+'.txt'),'utf8');for(const line of source.split(/\r?\n/).map(l=>l.trim()).filter(Boolean)){if(line.startsWith('# ')){slug=line.slice(2);assert(!authored[slug],slug+' duplicate section');authored[slug]=[];continue;}assert(slug,'Missing section header');const cells=line.split('|').map(s=>s.trim());assert.equal(cells.length,6,slug+': '+line);authored[slug].push(cells);}return authored;}
function numericValue(option){
 const words={zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10};
 if(Object.hasOwn(words,option.toLowerCase()))return words[option.toLowerCase()];
 const match=option.match(/^(-?\d+(?:\.\d+)?)(?:\/(\d+))?(?:\s*(?:%|seconds?|milliseconds?|millivolts?|volts?))?$/i);
 return match?Number(match[1])/(match[2]?Number(match[2]):1):null;
}
function questionsFor(slug,rows){
 assert.equal(rows.length,15,slug+' question count');const r=random(slug+'-v3');let questions;
 // Vary answer counts between quizzes. Numeric options keep their natural order.
 // Reject conspicuous runs, rather than imposing a learnable 4/4/4/3 quota.
 for(let attempt=0;attempt<10000;attempt++){
  questions=rows.map(([question,answer,...rest],i)=>{
   const explanation=rest.pop();let options=[answer,...rest],correctIndex;
   if(options.every(o=>numericValue(o)!==null)){options.sort((a,b)=>numericValue(a)-numericValue(b));correctIndex=options.indexOf(answer);}
   else{options=shuffle(options,r);correctIndex=options.indexOf(answer);}
   assert.equal(new Set(options.map(s=>s.toLowerCase())).size,4,slug+' duplicate options');
   return{question,difficulty:i<5?'Easy':i<10?'Medium':'Hard',options,correctIndex,explanation};
  });
  const counts=[0,0,0,0];questions.forEach(q=>counts[q.correctIndex]++);
  if(Math.max(...counts)<=7&&!questions.some((q,i)=>i>1&&q.correctIndex===questions[i-1].correctIndex&&q.correctIndex===questions[i-2].correctIndex))return questions;
 }
 throw Error(slug+' cannot arrange options without repeated runs');
}
module.exports={parseCategory,questionsFor,numericValue};
