(() => {
  'use strict';
  const config = window.CURIO_CONFIG;
  if (!window.supabase || !config || !config.publishableKey.startsWith('sb_publishable_')) return;
  window.curioAuth = window.supabase.createClient(config.url, config.publishableKey, {
    auth: {persistSession: true, autoRefreshToken: true, detectSessionInUrl: false, flowType: 'pkce'}
  });
  // Own PKCE exchange: SDK 2.102.0 automatic URL handling discards redirectType.
  // The SDK gets this type from its stored verifier, never from an untrusted URL flag.
  window.curioAuthReady = (async () => {
    try {
      const params = new URLSearchParams(location.search);
      if (params.has('code')) {
        const result = await window.curioAuth.auth.exchangeCodeForSession(params.get('code'));
        return {...result, recovery: !result.error && result.data?.redirectType === 'recovery' && Boolean(result.data?.session)};
      }
      return await window.curioAuth.auth.getSession();
    } catch { return {data: {session: null}, error: {message: 'Unable to initialize authentication. Request a fresh link and use the same browser.'}}; }
  })();
})();
