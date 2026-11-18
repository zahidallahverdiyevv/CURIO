(() => {
  'use strict';
  const client = window.curioAuth;
  if (!client) return;
  const accounts = [...document.querySelectorAll('a[aria-label="Account access"]')];
  const links = [...document.querySelectorAll('a[href="signin.html"]')].filter(link => !accounts.includes(link));
  client.auth.onAuthStateChange((_event, session) => {
    accounts.forEach(link => { link.href = session ? 'profile.html' : 'signin.html'; link.setAttribute('aria-label', session ? 'Your profile' : 'Account access'); });
    links.forEach(link => { link.hidden = Boolean(session); });
  });
})();
