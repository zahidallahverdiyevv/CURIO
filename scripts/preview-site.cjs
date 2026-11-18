// Preview only the generated public bundle, using the same repository base path.
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'../dist'),prefix='/CURIO/';
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
http.createServer((req,res)=>{
 res.setHeader('Referrer-Policy','no-referrer');res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Cache-Control','no-store');
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405).end();return;}
 let url;try{url=decodeURIComponent(req.url.split('?')[0]);}catch{res.writeHead(400).end();return;}
 if(url==='/CURIO'){res.writeHead(302,{Location:prefix}).end();return;}
 if(!url.startsWith(prefix)){res.writeHead(404).end();return;}
 let relative=url.slice(prefix.length)||'index.html';
 if(!path.extname(relative))relative+='.html';
 const file=path.resolve(root,relative);
 if(!file.startsWith(root+path.sep)||relative.split(/[\\/]/).some(p=>p.startsWith('.'))){res.writeHead(403).end();return;}
 fs.readFile(file,(error,data)=>{if(error){res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(fs.readFileSync(path.join(root,'404.html')));return;}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(req.method==='HEAD'?undefined:data);});
}).listen(3090,'127.0.0.1',()=>console.log('Production preview: http://127.0.0.1:3090/CURIO/'));
