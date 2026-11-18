(() => {
  'use strict';
  const client = window.curioAuth;
  const form = document.querySelector('form');
  const status = document.getElementById('auth-status');
  const say = message => { if (status) status.textContent = message; };
  const signup = form?.id === 'signup-form';
  const reset = form?.id === 'reset-form';
  const fields = form ? [...form.querySelectorAll('input')] : [];
  const password = fields.find(f => f.name === 'password');
  const confirmation = document.getElementById('confirm-password');
  const email = fields.find(f => f.name === 'email');
  // Keep the repository directory when hosted at username.github.io/repository/.
  const redirect = page => new URL(page, location.href).href;
  const pending = document.getElementById('signup-pending');
  const continueLink = document.getElementById('auth-continue');
  const google = document.querySelector('[id^="google-"]');
  const googleEnabled = Boolean(window.CURIO_CONFIG?.googleEnabled);
  if (google) google.hidden = !googleEnabled;
  const divider = document.getElementById('auth-divider');
  if (divider) divider.hidden = !googleEnabled;
  let busy = false, ready = false, recovery = false;
  let nextEmailAt = 0;
  function emailAllowed() {
    if (busy || !ready) return false;
    if (Date.now() < nextEmailAt) { say('Please wait a minute before requesting another email.'); return false; }
    return true;
  }
  const emailSent = () => { nextEmailAt = Date.now() + 60000; };
  function showSignedIn() {
    if (continueLink) continueLink.hidden = false;
    if (signup) { form.hidden = true; if (pending) pending.hidden = true; }
  }
  const buttons = [...document.querySelectorAll('button')].filter(b => !b.id.startsWith('toggle-'));
  function lock(value) { busy = value; buttons.forEach(b => { b.disabled = value || !ready || (reset && !recovery); }); }
  function validate(field) {
    let message = '';
    if (!field.value.trim()) message = 'Please complete this field.';
    else if (field.type === 'email' && field.validity.typeMismatch) message = 'Enter a valid email address.';
    else if ((signup || reset) && field === password && field.value.length < 8) message = 'Use at least 8 characters.';
    else if (field === confirmation && field.value !== password.value) message = 'Passwords must match.';
    const error = document.getElementById(field.id + '-error');
    if (error) { error.textContent = message; error.hidden = !message; }
    field.setAttribute('aria-invalid', String(Boolean(message)));
    return !message;
  }
  function clearPasswords() { fields.filter(f => /password/.test(f.name)).forEach(f => { f.value = ''; }); }
  function linkErrorMessage(error) {
    if (error.code === 'pkce_code_verifier_not_found' || error.name === 'AuthPKCECodeVerifierMissingError') {
      return reset
        ? 'Open a fresh recovery link in the browser where you requested it. This link cannot reset your password here.'
        : 'This link could not sign you in automatically in this browser. Try signing in with your email and password. If your email still needs verification, request a new link from Sign In.';
    }
    if (['flow_state_not_found','flow_state_expired','bad_code_verifier','otp_expired'].includes(error.code)) return 'This link has expired or could not be verified. Sign in or request a fresh link.';
    return error.message || 'We could not check this link. Sign in or request a fresh one.';
  }
  function callbackState(signedIn) {
    if (form) return;
    const heading = document.getElementById('auth-heading');
    if (heading) heading.textContent = signedIn ? 'You’re ready to explore.' : 'Sign in to continue';
    const notice = document.querySelector('.auth-notice');
    if (notice) notice.textContent = signedIn ? 'Your account is ready to use.' : 'Use your email and password to continue to CURIO.';
    const signIn = document.getElementById('callback-signin');
    if (signIn) signIn.hidden = signedIn;
  }
  async function run(action) {
    if (busy || !ready) return;
    lock(true);
    try { await action(); }
    catch (error) {
      if (['over_email_send_rate_limit','over_request_rate_limit'].includes(error.code)) { emailSent(); say('Too many email requests. Please wait before trying again.'); }
      else if (error.code === 'email_address_not_authorized') say('Email delivery is not available for this address yet. Please contact CURIO support or try again after email setup is complete.');
      else if (error.code === 'invalid_credentials') say('The email or password is incorrect. Please try again.');
      else if (error.code === 'weak_password') say('Choose a stronger password. Use at least 8 characters and avoid common passwords.');
      else if (['pkce_code_verifier_not_found','flow_state_not_found','flow_state_expired','bad_code_verifier','otp_expired'].includes(error.code)) say(linkErrorMessage(error));
      else if (error.code === 'email_not_confirmed') say('Verify your email before signing in. Check your inbox and spam folder, or request a new verification email from Sign Up.');
      else say(error.message || 'Unable to reach authentication. Please try again.');
    }
    finally { lock(false); }
  }
  document.querySelectorAll('[id^="toggle-"]').forEach(button => {
    const input = button.parentElement.querySelector('input');
    button.setAttribute('aria-controls', input.id);
    button.addEventListener('click', () => {
      const visible = input.type === 'password';
      input.type = visible ? 'text' : 'password';
      button.setAttribute('aria-pressed', String(visible));
      button.setAttribute('aria-label', visible ? 'Hide password' : 'Show password');
    });
  });
  fields.forEach(f => f.addEventListener('blur', () => { if (f.value) validate(f); }));
  lock(true);
  if (!client) { say('Authentication could not load. Check your connection and reload.'); return; }
  client.auth.onAuthStateChange((event, session) => {
    if (event === 'PASSWORD_RECOVERY' && reset && session) { recovery = true; lock(false); say('Choose a new password.'); }
    if ((event === 'SIGNED_OUT' || !session) && reset) { recovery = false; lock(false); }
    if (event === 'SIGNED_IN' && session && !reset) { showSignedIn(); say('You are signed in. Continue to CURIO.'); }
  });
  async function initialize() {
    const params = new URLSearchParams(location.search);
    const hash = new URLSearchParams(location.hash.slice(1));
    const linkError = params.get('error_description') || hash.get('error_description');
    const result = await (window.curioAuthReady || client.auth.getSession());
    const { data, error } = result;
    if (reset && result.recovery) recovery = true;
    // The SDK consumes PKCE codes. Remove remaining auth parameters from browser history.
    if (params.has('code') || params.has('error') || params.has('error_description') || location.hash) history.replaceState(null, '', location.pathname);
    if (error || linkError) { recovery = false; callbackState(false); say(linkErrorMessage(error || {message:linkError,code:params.get('error_code') || hash.get('error_code')})); ready = true; lock(false); return; }
    ready = true; lock(false);
    if (reset) { if (!recovery) say('Request a fresh recovery link from Sign In and open it in the same browser.'); }
    else if (!form) {
      say(data?.session ? 'Account access confirmed. You can continue to CURIO.' : 'No active session. This link may have expired or already been used. Sign in or request a fresh verification email.');
      callbackState(Boolean(data?.session));
      if (data?.session) showSignedIn();
    }
    else if (data?.session) { showSignedIn(); say('You are already signed in. Continue to CURIO.'); }
  }
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (busy || !ready) return;
    const invalid = fields.filter(f => !validate(f));
    if (invalid.length) { say('Please correct the highlighted fields.'); invalid[0].focus(); return; }
    if (signup && !emailAllowed()) return;
    run(async () => {
      say(reset ? 'Updating your password…' : signup ? 'Creating your account…' : 'Signing you in…');
      try {
        if (reset) {
          if (!recovery) throw new Error('Open a valid password recovery link first.');
          const { error } = await client.auth.updateUser({ password: password.value });
          if (error) throw error;
          recovery = false;
          const { error: signoutError } = await client.auth.signOut({scope: 'local'});
          say(signoutError ? 'Password updated. Sign-out failed; please sign out before leaving this device.' : 'Password updated. You can now sign in with your new password.');
          const signInLink = document.getElementById('reset-signin');
          if (signInLink && !signoutError) signInLink.hidden = false;
        } else if (signup) {
          const { data, error } = await client.auth.signUp({ email: email.value.trim(), password: password.value, options: { data: {full_name: document.getElementById('fullname').value.trim()}, emailRedirectTo: redirect('auth-callback.html') } });
          if (error) throw error;
          if (data.session) showSignedIn();
          else {
            emailSent();
            if (pending) { pending.hidden = false; form.hidden = true; document.getElementById('signup-email').textContent = email.value.trim(); pending.focus({preventScroll:true}); }
          }
          say(data.session ? 'Account created and signed in. Continue from the CURIO home page.' : 'If registration is available for this address, check your inbox and spam folder for a verification link. Open it in this browser.');
        } else {
          const { error } = await client.auth.signInWithPassword({email: email.value.trim(), password: password.value});
          if (error) throw error;
          location.assign(redirect('index.html'));
        }
      } finally { clearPasswords(); }
    });
  });
  document.getElementById('forgot-password')?.addEventListener('click', () => {
    if (!validate(email)) { email.focus(); return; }
    if (!emailAllowed()) return;
    run(async () => {
      say('Requesting your recovery email…');
      const { error } = await client.auth.resetPasswordForEmail(email.value.trim(), {redirectTo: redirect('reset-password.html')});
      if (error) throw error;
      emailSent();
      say('If this address has an eligible account, a recovery email will arrive shortly. Open the link in this browser.');
    });
  });
  document.getElementById('resend-verification')?.addEventListener('click', () => {
    if (!validate(email)) { email.focus(); return; }
    if (!emailAllowed()) return;
    run(async () => {
      say('Requesting a verification email…');
      const { error } = await client.auth.resend({type: 'signup', email: email.value.trim(), options: {emailRedirectTo: redirect('auth-callback.html')}});
      if (error) throw error;
      emailSent();
      say('If verification is pending, check your email for a new link.');
    });
  });
  document.getElementById('change-signup-email')?.addEventListener('click', () => {
    if (busy) return;
    pending.hidden = true; form.hidden = false; say('Update your email address and create your account.'); email.focus();
  });
  google?.addEventListener('click', () => {
    if (!googleEnabled) return;
    run(async () => {
      const { error } = await client.auth.signInWithOAuth({provider: 'google', options: {redirectTo: redirect('auth-callback.html')}});
      if (error) throw error;
    });
  });
  initialize().catch(() => { say('Unable to initialize authentication. Reload and try again.'); });
})();
