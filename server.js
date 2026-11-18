const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const ROOT = __dirname;
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon'};
const server = http.createServer((req,res) => {
  if (/^localhost(?::\d+)?$/i.test(req.headers.host || '')) {
    res.writeHead(307, {Location: 'http://127.0.0.1:' + server.address().port + req.url}); res.end(); return;
  }
  res.setHeader('X-Frame-Options','DENY');
  res.setHeader('Referrer-Policy','no-referrer');
  res.setHeader('X-Content-Type-Options','nosniff');
  res.setHeader('Cache-Control','no-store');
  if (!['GET','HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return; }
  let pathname;
  try { pathname = decodeURIComponent(req.url.split('?')[0]); } catch { res.writeHead(400); res.end(); return; }
  if (pathname === '/') pathname = '/index.html';
  // Strip trailing slashes so relative assets and links keep resolving at the root.
  if (/^\/[a-z0-9][a-z0-9-]*\/$/.test(pathname)) {
    const query = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '';
    res.writeHead(307, {Location: pathname.slice(0, -1) + query}); res.end(); return;
  }
  if (/^\/[a-z0-9][a-z0-9-]*\/?$/.test(pathname)) pathname = pathname.replace(/\/$/, '') + '.html';
  const file = path.resolve(ROOT, '.' + pathname);
  const relative = path.relative(ROOT,file);
  if (relative.startsWith('..') || path.isAbsolute(relative) || relative.split(/[\\/]/).some(p=>p.startsWith('.')) || !types[path.extname(file).toLowerCase()]) { res.writeHead(403); res.end(); return; }
  const publicFile = rel => !rel.split(/[\\/]/).some(p => p.startsWith('.')) &&
    ((path.dirname(rel) === '.' && path.extname(rel) === '.html') || rel.replaceAll('\\','/').startsWith('assets/'));
  if (!publicFile(relative)) { res.writeHead(403); res.end(); return; }
  fs.realpath(file,(err,real) => {
    if (err) { res.writeHead(404); res.end(); return; }
    const rel = path.relative(ROOT,real);
    if (rel.startsWith('..') || path.isAbsolute(rel) || !publicFile(rel)) { res.writeHead(403); res.end(); return; }
    fs.readFile(real,(error,content) => {
      if (error) { res.writeHead(404); res.end(); return; }
      res.writeHead(200,{'Content-Type':types[path.extname(file).toLowerCase()]});
      res.end(req.method === 'HEAD' ? undefined : content);
    });
  });
});
server.listen(Number(process.env.PORT || 3000),'127.0.0.1',() => console.log('CURIO: http://127.0.0.1:' + server.address().port));
