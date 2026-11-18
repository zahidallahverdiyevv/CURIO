const {JSDOM}=require('jsdom');
const fs=require('fs'),path=require('path'),assert=require('node:assert/strict');
const read=f=>fs.readFileSync(path.join(__dirname,'..',f),'utf8');
const sdk=fs.readFileSync(path.join(path.dirname(require.resolve('@supabase/supabase-js')),'umd/supabase.js'),'utf8');
async function test(type,fail=false,auto=false){
 const dom=new JSDOM(read('reset-password.html'),{url:'http://127.0.0.1:3000/reset-password.html?code=mock-code',runScripts:'outside-only'}),w=dom.window;
 try{
  w.fetch=async(url)=>{assert(String(url).includes('/token?grant_type=pkce'));return new Response(JSON.stringify(fail?{error:'invalid_grant',error_description:'Expired test code'}:{access_token:'mock-token',refresh_token:'mock-refresh',expires_in:3600,token_type:'bearer',user:{id:'mock-user'}}),{status:fail?400:200,headers:{'content-type':'application/json'}})};
  w.Response=Response;w.Request=Request;w.Headers=Headers;w.TextEncoder=TextEncoder;w.TextDecoder=TextDecoder;
  w.localStorage.setItem('sb-test-auth-token-code-verifier',JSON.stringify('mock-verifier'+(type?'/'+type:'')));
  w.eval(sdk);w.CURIO_CONFIG={url:'https://test.supabase.co',publishableKey:'sb_publishable_test',googleEnabled:false};
  let recovery=false;
  if(auto){w.curioAuth=w.supabase.createClient(w.CURIO_CONFIG.url,w.CURIO_CONFIG.publishableKey,{auth:{flowType:'pkce',detectSessionInUrl:true,autoRefreshToken:false}});w.curioAuth.auth.onAuthStateChange(e=>{if(e==='PASSWORD_RECOVERY')recovery=true});assert((await w.curioAuth.auth.getSession()).data.session);assert.equal(recovery,false);}
  else {w.eval(read('assets/auth/client.js'));const result=await w.curioAuthReady;assert.equal(Boolean(result.recovery),type==='recovery'&&!fail);w.eval(read('assets/auth/auth.js'));await new Promise(r=>setImmediate(r));assert.equal(w.document.querySelector('[type=submit]').disabled,type!=='recovery'||fail);assert.equal(w.location.search,'');}
 }finally{w.curioAuth?.auth.stopAutoRefresh();w.close();}
}
async function otherBrowser(file){
 const dom=new JSDOM(read(file),{url:'http://127.0.0.1:3000/'+file+'?code=mock-cross-browser-code',runScripts:'outside-only'}),w=dom.window;
 try{
  w.fetch=async()=>{throw Error('Missing verifier must not reach a token exchange request');};
  w.Response=Response;w.Request=Request;w.Headers=Headers;w.TextEncoder=TextEncoder;w.TextDecoder=TextDecoder;
  w.eval(sdk);w.CURIO_CONFIG={url:'https://test.supabase.co',publishableKey:'sb_publishable_test',googleEnabled:false};
  w.eval(read('assets/auth/client.js'));const result=await w.curioAuthReady;
  assert.equal(result.error.code,'pkce_code_verifier_not_found');assert(!result.recovery);
  w.eval(read('assets/auth/auth.js'));await new Promise(r=>setImmediate(r));
  const status=w.document.getElementById('auth-status').textContent;
  assert.doesNotMatch(status,/PKCE|SSR|@supabase/);assert.equal(w.location.search,'');
  if(file==='auth-callback.html'){assert.match(status,/email and password/);assert(!w.document.getElementById('callback-signin').hidden);assert.equal(w.document.getElementById('auth-heading').textContent,'Sign in to continue');}
  else{assert(w.document.querySelector('[type=submit]').disabled);assert.match(status,/recovery link/);}
 }finally{w.curioAuth?.auth.stopAutoRefresh();w.close();}
}
(async()=>{await test('recovery',false,true);await test('recovery');await test('signup');await test('');await test('recovery',true);await otherBrowser('auth-callback.html');await otherBrowser('reset-password.html');console.log('PASS: real SDK 2.102.0 PKCE recovery gating; cross-browser confirmation offers password sign-in without exposing SDK internals; missing-verifier recovery stays locked. HTTP mocked; no real emails or accounts.');})().catch(e=>{console.error(e);process.exitCode=1});
