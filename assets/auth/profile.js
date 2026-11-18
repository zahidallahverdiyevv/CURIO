(() => {
 'use strict';
 const $=id=>document.getElementById(id),client=window.curioAuth;
 let user=null,busy=false,revision=0;
 const say=message=>{$('profile-status').textContent=message;};
 function lock(value){busy=value;$('profile-save').disabled=value;$('profile-logout').disabled=value;}
 function render(next){
  user=next;$('profile-content').hidden=!user;$('profile-guest').hidden=Boolean(user);
  if(!user){$('profile-fullname').value='';$('profile-email-display').value='';$('profile-name').textContent='';$('profile-email').textContent='';$('profile-since').textContent='';$('profile-avatar').textContent='C';return;}
  const name=typeof user.user_metadata?.full_name==='string'?user.user_metadata.full_name:'';
  $('profile-fullname').value=name;$('profile-name').textContent=name.trim()||'Curious learner';
  $('profile-avatar').textContent=name.trim().split(/\s+/).slice(0,2).map(s=>Array.from(s)[0]).join('').toUpperCase()||'C';
  $('profile-email').textContent=user.email||'';$('profile-email-display').value=user.email||'';
  $('profile-verified').textContent=user.email_confirmed_at?'Email verified':'Email verification pending';
  const date=new Date(user.created_at);$('profile-since').textContent=Number.isNaN(date.getTime())?'—':date.toLocaleDateString('en-GB',{month:'long',year:'numeric'});
 }
 if(!client){say('Your profile could not load. Check your connection and reload.');return;}
 client.auth.onAuthStateChange((event,session)=>{
  if(event==='SIGNED_OUT'){revision++;render(null);lock(false);say('You are signed out.');}
  if(event==='SIGNED_IN')setTimeout(load,0);
  // SDK callbacks stay synchronous; validate sessions through getUser below.
 });
 async function load(){const current=++revision;try{await window.curioAuthReady;const {data,error}=await client.auth.getUser();if(current!==revision)return;if(error){render(null);say(error.name==='AuthSessionMissingError'?'Sign in to view your account.':'Unable to verify your account. Sign in or reload to try again.');return;}render(data.user);say(data.user?'':'Sign in to view your account.');}catch{if(current===revision){render(null);say('Your profile could not load. Check your connection and reload.');}}}
 $('profile-form').addEventListener('submit',async event=>{
  event.preventDefault();if(busy||!user)return;const name=$('profile-fullname').value.trim();
  const invalid=!name||name.length>100;$('profile-name-error').hidden=!invalid;$('profile-name-error').textContent=invalid?'Enter a name between 1 and 100 characters.':'';$('profile-fullname').setAttribute('aria-invalid',String(invalid));
  if(invalid){$('profile-fullname').focus();return;}
  lock(true);say('Saving your changes…');const current=revision;
  try{const {data,error}=await client.auth.updateUser({data:{full_name:name}});if(current!==revision)return;if(error)throw error;render(data.user);say('Your profile has been updated.');}catch{if(current===revision)say('Could not save your name. Please try again.');}finally{if(current===revision)lock(false);}
 });
 $('profile-logout').addEventListener('click',async()=>{if(busy)return;lock(true);try{const {error}=await client.auth.signOut({scope:'local'});if(error)throw error;revision++;render(null);say('You are signed out.');}catch{say('Sign-out failed. Please try again.');}finally{lock(false);}});
 load();
})();
