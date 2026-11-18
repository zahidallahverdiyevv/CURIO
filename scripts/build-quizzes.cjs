const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {JSDOM}=require('jsdom');
const {parseCategory,questionsFor}=require('./quiz-content.cjs');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const categories=['history','geography','science','philosophy','art-culture','technology'];
const originals=new Set(['ancient-civilizations','countries-capitals','physics-fundamentals','ancient-philosophy','art-history','computer-fundamentals']);
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const slugify=s=>s==='History of Innovation'?'history-innovation':s.toLowerCase().replaceAll('&','').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const catalog=[];
for(const category of categories){
 const dom=new JSDOM(read(category+'.html'));
 const name=dom.window.document.querySelector('h1').textContent.trim();
 for(const heading of dom.window.document.querySelectorAll('h3')){
  const card=heading.closest('article,a'),title=heading.textContent.trim(),existing=card.getAttribute('href');
  const slug=existing?existing.replace('.html',''):slugify(title);
  catalog.push({slug,title,category,categoryTitle:name,description:card.querySelector('p').textContent.trim(),existing:originals.has(slug),image:card.querySelector('img').getAttribute('src')});
 }
 dom.window.close();
}
const authored={};
for(const category of categories){
 Object.assign(authored,parseCategory(category));
}
const template=read('ancient-civilizations.html');let total=0;
assert.equal(Object.keys(authored).length,42,'Unexpected authored sections');
for(const quiz of catalog.filter(q=>!q.existing)){assert(authored[quiz.slug],quiz.slug+' missing content');questionsFor(quiz.slug,authored[quiz.slug]);}
for(const quiz of catalog.filter(q=>!q.existing)){
 const rows=authored[quiz.slug];assert(rows,quiz.slug+' missing content');assert.equal(rows.length,15,quiz.slug+' question count');
 const questions=questionsFor(quiz.slug,rows);
 let html=template.replaceAll('Ancient Civilizations',escape(quiz.title)).replaceAll('history.html',quiz.category+'.html').replaceAll('History Quiz',escape(quiz.categoryTitle)+' Quiz').replaceAll('>History</a>','>'+escape(quiz.categoryTitle)+'</a>').replaceAll('Back to History','Back to '+escape(quiz.categoryTitle));
 html=html.replace('15 questions. Thousands of years of human history. How much do you really know?','15 questions. '+escape(quiz.description));
 html=html.replace(/const questions = \[[\s\S]*?\n\];/, 'const questions = '+JSON.stringify(questions,null,2)+';');
 html=html.replace(/(<h2[^>]*id="question-title"[^>]*>)[\s\S]*?(<\/h2>)/,'$1'+escape(questions[0].question)+'$2');
 fs.writeFileSync(path.join(root,quiz.slug+'.html'),html);total+=questions.length;
}
// Preserve existing page formatting and every image mapping while enabling the cards.
for(const category of categories){
 let html=read(category+'.html');
 html=html.replace(/<article\b([^>]*)>([\s\S]*?)<\/article>/g,(match,attrs,body)=>{
  if(!body.includes('Coming Soon'))return match;
  const dom=new JSDOM('<article>'+body+'</article>');const title=dom.window.document.querySelector('h3')?.textContent.trim();dom.window.close();
  const quiz=catalog.find(q=>q.category===category&&q.title===title);assert(quiz,title+' missing catalog entry');
  return '<a href="'+quiz.slug+'.html" aria-label="Explore '+escape(title)+' quiz"'+attrs.replace('cursor-default','cursor-pointer')+'>'+body.replace('Coming Soon','Explore topic')+'</a>';
 });
 fs.writeFileSync(path.join(root,category+'.html'),html);
}
fs.writeFileSync(path.join(root,'content/quizzes/catalog.json'),JSON.stringify(catalog.map(({existing,...q})=>q),null,2)+'\n');
console.log(`Built 42 new quizzes (${total} questions); all 48 topic cards are active.`);
