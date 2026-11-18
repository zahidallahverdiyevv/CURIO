const {spawn}=require('node:child_process');const assert=require('node:assert/strict');
(async()=>{const child=spawn(process.execPath,[require('node:path').join(__dirname,'..','server.js')],{env:{...process.env,PORT:'3087'},stdio:['ignore','pipe','pipe']});try{await new Promise((resolve,reject)=>{child.stdout.once('data',resolve);child.once('error',reject);child.once('exit',code=>reject(Error('Server exited '+code)));});
for(const page of ['index.html','signin.html','signup.html','reset-password.html','auth-callback.html','assets/auth/client.js']){const r=await fetch('http://127.0.0.1:3087/'+page);assert.equal(r.status,200);assert.equal(r.headers.get('referrer-policy'),'no-referrer');assert.equal(r.headers.get('cache-control'),'no-store')}
const fs=require('node:fs'),path=require('node:path'),root=path.resolve(__dirname,'..');
for(const page of fs.readdirSync(root).filter(f=>f.endsWith('.html'))){
 for(const route of [page,page.slice(0,-5),page.slice(0,-5)+'/'])assert.equal((await fetch('http://127.0.0.1:3087/'+route)).status,200,route);
}
const trailing=await fetch('http://127.0.0.1:3087/history/?from=topics',{redirect:'manual'});
assert.equal(trailing.status,307);assert.equal(trailing.headers.get('location'),'/history?from=topics');
for(const route of ['docs/DESIGN.md','docs/screenshots/home-original.png','tests/test-site.cjs','scripts/validate-curio.js'])assert.equal((await fetch('http://127.0.0.1:3087/'+route)).status,403,route);
for(const file of fs.readdirSync(path.join(root,'assets'),{recursive:true}).filter(f=>fs.statSync(path.join(root,'assets',f)).isFile())){
 assert.equal((await fetch('http://127.0.0.1:3087/assets/'+file.replaceAll('\\','/'))).status,200,file);
}
for(const [url,status] of [['missing.html',404],['.git/config',403],['server.js',403],['test-auth.cjs',403],['validate-curio.js',403],['node_modules/jsdom/lib/api.js',403],['.curio-backups/before-audit-20261102/index.html',403],['bad%ZZ',400]]){const r=await fetch('http://127.0.0.1:3087/'+url);assert.equal(r.status,status,url)}
const canonical=await new Promise((resolve,reject)=>{require('node:http').get({hostname:'127.0.0.1',port:3087,path:'/signin.html',headers:{Host:'localhost:3087'}},r=>{r.resume();resolve(r)}).on('error',reject)});assert.equal(canonical.statusCode,307);assert.equal(canonical.headers.location,'http://127.0.0.1:3087/signin.html');
assert.equal((await fetch('http://127.0.0.1:3087/signin.html',{method:'POST'})).status,405);console.log('PASS: isolated server port 3087; auth pages, scripts, security headers, missing/hidden/malformed routes and unsupported methods.');
}finally{child.kill()}})().catch(e=>{console.error(e);process.exitCode=1});
