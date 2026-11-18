const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const {JSDOM}=require('jsdom');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist');
const pages=fs.readdirSync(root).filter(f=>f.endsWith('.html'));
const read=f=>fs.readFileSync(path.join(dist,f),'utf8');
let references=0;
for(const file of pages){
 const dom=new JSDOM(read(file)),d=dom.window.document;
 assert(d.querySelector('meta[http-equiv="Content-Security-Policy"]'),file+' CSP');
 const csp=d.querySelector('meta[http-equiv="Content-Security-Policy"]').content;
 assert(!/script-src[^;]*unsafe-(inline|eval)/.test(csp),file+' unsafe scripts');
 for(const script of d.querySelectorAll('script')){
  if(script.hasAttribute('src'))assert(!/^https?:/.test(script.getAttribute('src')),file+' external script');
  else assert(csp.includes("'sha256-"+crypto.createHash('sha256').update(script.textContent).digest('base64')+"'"),file+' initializer hash');
 }
 assert(!read(file).includes('cdn.tailwindcss.com'),file+' runtime Tailwind');
 assert(![...d.querySelectorAll('script')].some(s=>/^\s*tailwind\.config/.test(s.textContent)),file+' runtime config');
 assert(d.querySelector('link[rel="canonical"]')?.href.startsWith('https://'),file+' canonical');
 assert(d.querySelector('link[rel="icon"]'),file+' favicon');
 for(const e of d.querySelectorAll('[src],[href]')){
  const url=e.getAttribute('src')||e.getAttribute('href');
  if(/^(https?:|mailto:|#)/.test(url))continue;
  const target=path.resolve(dist,url.split('#')[0]);
  assert(target.startsWith(dist+path.sep),file+' escaped asset');
  assert(fs.statSync(target).isFile(),file+' missing '+url);references++;
 }
 if(/signin|signup|auth-callback|reset-password|profile|404/.test(file))assert(d.querySelector('meta[name="robots"]')?.content.includes('noindex'),file+' private indexing');
 dom.window.close();
}
for(const forbidden of ['docs','tests','scripts','content','.git','.env','package.json','server.js'])assert(!fs.existsSync(path.join(dist,forbidden)),forbidden+' published');
assert(read('404.html').includes('href="https://zahidallahverdiyevv.github.io/CURIO/index.html"'),'404 base path');
// Exercise the exact built quiz and its local initializer under a repository base path.
const dom=new JSDOM(read('ancient-civilizations.html'),{url:'https://zahidallahverdiyevv.github.io/CURIO/ancient-civilizations.html',runScripts:'outside-only'});
const w=dom.window;
w.eval(read('assets/quiz/quiz.js'));
for(const script of w.document.querySelectorAll('script:not([src])'))w.eval(script.textContent);
assert.equal(w.document.querySelectorAll('.cq-option').length,4);
w.document.querySelector('.cq-option').click();
assert(w.document.querySelector('.cq-explanation')?.textContent);
assert(!w.document.querySelector('.cq-actions button').disabled);
w.document.querySelector('.cq-actions button').click();
assert.match(w.document.querySelector('#question-counter').textContent,/2 of 15/i);
w.close();
console.log(`PASS: ${pages.length} production pages, ${references} local references, script CSP hashes, local SDK/themes, safe publish boundary and built quiz behavior.`);
