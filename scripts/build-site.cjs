const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const postcss = require('postcss');
const tailwind = require('tailwindcss');
const {JSDOM} = require('jsdom');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const origin = new URL(process.env.SITE_URL || 'https://zahidallahverdiyevv.github.io/CURIO/');
if (origin.protocol !== 'https:' || origin.search || origin.hash) throw Error('SITE_URL must be an HTTPS site base URL');
if (!origin.pathname.endsWith('/')) origin.pathname += '/';
const hash = s => crypto.createHash('sha256').update(s).digest('base64');
const files = fs.readdirSync(root).filter(f => f.endsWith('.html'));
const themes = new Map();
const authPages = new Set(['signin.html','signup.html','auth-callback.html','reset-password.html','profile.html','404.html']);
const content = [
  ...files.map(f => ({raw:fs.readFileSync(path.join(root,f),'utf8'),extension:'html'})),
  ...['assets/quiz/quiz.js','assets/quiz/world-map.js'].map(f => ({raw:fs.readFileSync(path.join(root,f),'utf8').replaceAll('\\"','"').replaceAll('\\n','\n'),extension:'html'}))
];

async function build() {
  // Remove only the verified generated output directory, never the source tree.
  if (path.dirname(output) !== root || path.basename(output) !== 'dist') throw Error('Unsafe output path');
  fs.rmSync(output,{recursive:true,force:true});
  fs.mkdirSync(path.join(output,'assets','generated'),{recursive:true});
  fs.cpSync(path.join(root,'assets'),path.join(output,'assets'),{recursive:true});
  const vendor = path.join(output,'assets','vendor');
  fs.mkdirSync(vendor,{recursive:true});
  const sdk = path.join(path.dirname(require.resolve('@supabase/supabase-js')),'umd','supabase.js');
  fs.copyFileSync(sdk,path.join(vendor,'supabase-2.102.0.js'));
  const publicURLs=[];
  for (const file of files) {
    const dom=new JSDOM(fs.readFileSync(path.join(root,file),'utf8'));
    const d=dom.window.document;
    let themeURL;
    for (const script of [...d.querySelectorAll('script')]) {
      if (script.src.startsWith('https://cdn.tailwindcss.com')) {script.remove();continue;}
      if (/^\s*tailwind\.config\s*=/.test(script.textContent)) {
        const sandbox={tailwind:{}};
        vm.runInNewContext(script.textContent,sandbox,{timeout:1000});
        const config=JSON.parse(JSON.stringify(sandbox.tailwind.config));
        const key=crypto.createHash('sha256').update(JSON.stringify(config)).digest('hex').slice(0,12);
        themeURL='assets/generated/theme-'+key+'.css';
        if (!themes.has(key)) {
          const result=await postcss([tailwind({...config,content})]).process('@tailwind base;\n@tailwind components;\n@tailwind utilities;',{from:undefined});
          fs.writeFileSync(path.join(output,themeURL),result.css);
          themes.set(key,true);
        }
        script.remove();
      } else if (script.src.includes('cdn.jsdelivr.net/npm/@supabase/supabase-js@')) {
        script.setAttribute('src','assets/vendor/supabase-2.102.0.js');
      } else if (script.hasAttribute('src') && /^https?:/.test(script.src)) throw Error(file+': unexpected external script');
    }
    if (themeURL) {
      const link=d.createElement('link');link.rel='stylesheet';link.href=themeURL;
      // Compiled Tailwind must precede the existing page-specific overrides.
      const before=d.head.querySelector('style,link[href^="assets/"]');
      d.head.insertBefore(link,before);
    }
    const meta=(name,value,property=false)=>{
      const attr=property?'property':'name';
      let el=d.head.querySelector('meta['+attr+'="'+name+'"]');
      if(!el){el=d.createElement('meta');el.setAttribute(attr,name);d.head.append(el);}
      el.content=value;
    };
    const canonical=new URL(file==='index.html'?'':file,origin).href;
    const title=d.title.trim();
    const description=d.querySelector('meta[name="description"]')?.content ||
      (file==='index.html'?'Explore history, geography, science, philosophy, art and technology with CURIO quizzes and an interactive world map.':
       'Explore '+(d.querySelector('h1')?.textContent.replace(/\s+/g,' ').trim()||title)+' with CURIO. Learn through questions, answers and explanations.');
    meta('description',description);meta('referrer','no-referrer');meta('theme-color','#20232B');
    meta('og:title',title,true);meta('og:description',description,true);meta('og:type','website',true);meta('og:url',canonical,true);
    meta('twitter:card','summary');
    if(authPages.has(file))meta('robots','noindex, nofollow');else publicURLs.push(canonical);
    const link=d.createElement('link');link.rel='canonical';link.href=canonical;d.head.append(link);
    const favicon=d.createElement('link');favicon.rel='icon';favicon.type='image/svg+xml';favicon.href='assets/site/favicon.svg';d.head.append(favicon);
    const main=d.querySelector('main');
    if(main){if(!main.id)main.id='main-content';const skip=d.createElement('a');skip.className='skip-link';skip.href='#'+main.id;skip.textContent='Skip to content';d.body.prepend(skip);}
    for(const img of d.images){img.decoding='async';if(!img.hasAttribute('loading'))img.loading='lazy';}
    // A hash permits the exact quiz initializer without allowing arbitrary inline JS.
    const hashes=[...d.querySelectorAll('script:not([src])')].map(s=>"'sha256-"+hash(s.textContent)+"'");
    const policy=["default-src 'self'","script-src 'self' "+hashes.join(' '),"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com","font-src 'self' https://fonts.gstatic.com","img-src 'self' data: https://lh3.googleusercontent.com","connect-src 'self' https://jjrgizykmkzfdbyzzpzd.supabase.co","object-src 'none'","base-uri 'self'","form-action 'self'","upgrade-insecure-requests"].join('; ');
    const csp=d.createElement('meta');csp.httpEquiv='Content-Security-Policy';csp.content=policy;
    d.head.insertBefore(csp,d.head.firstChild);
    fs.writeFileSync(path.join(output,file),dom.serialize());
    dom.window.close();
  }
  // Unknown deep URLs must return to the project base, not /missing/path/index.html.
  const notFound=path.join(output,'404.html');
  let html=fs.readFileSync(notFound,'utf8');
  html=html.replace(/href="(?!https?:|mailto:|#)([^"]+)"/g,(_,p)=>'href="'+new URL(p,origin).href+'"');
  fs.writeFileSync(notFound,html);
  fs.writeFileSync(path.join(output,'.nojekyll'),'');
  fs.writeFileSync(path.join(output,'robots.txt'),'User-agent: *\n'+[...authPages].map(f=>'Disallow: '+origin.pathname+f).join('\n')+'\nSitemap: '+new URL('sitemap.xml',origin).href+'\n');
  fs.writeFileSync(path.join(output,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+publicURLs.map(u=>'<url><loc>'+u+'</loc></url>').join('')+'</urlset>\n');
  console.log(`Built ${files.length} production pages with ${themes.size} local themes; only public assets included.`);
}
build().catch(error=>{console.error(error);process.exitCode=1;});
