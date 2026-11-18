# Authentication setup

CURIO uses Supabase Authentication from the browser. The server serves static files; it does not hold credentials or proxy account requests.

## Browser configuration

`assets/auth/config.js` contains a Supabase project URL, a frontend publishable key and the Google-provider feature flag. Public keys are not authorization controls: keep application-table policies and function permissions appropriate to the data being exposed. Never put a secret/service_role key, SMTP password or access token in this file.

The Supabase JavaScript SDK is pinned to 2.102.0. `client.js` creates the client with persisted sessions, refresh and PKCE. URL exchange is handled explicitly so password recovery depends on the stored verifier and SDK redirect type rather than a user-supplied URL flag.

## Dashboard configuration

1. Enable the Email provider and require email confirmation.
2. Configure custom SMTP with the sender authorized by its provider. Enter credentials only in the provider/Supabase dashboard.
3. Set Site URL to the actual site origin. For local development, use the port selected when starting the server.
4. Allow the exact `auth-callback.html` and `reset-password.html` URLs, including any hosting subdirectory. Keep production entries precise.
5. Review backend password policy, rate limits and bot protection. A frontend cooldown does not replace backend enforcement.

Custom SMTP has been configured for the current development project. Successful saving is not proof of inbox delivery. Do not copy historical local URLs into production configuration.

Google sign-in remains disabled. Enable the frontend flag only after configuring the provider and testing its callback; no OAuth secret belongs in the repository.

## Account behavior

- Signup sends name metadata, email and password directly to Supabase.
- Confirmation and password recovery use PKCE; open the email link in the browser where the request began. A confirmed user can subsequently sign in with a password in another browser.
- The profile validates the account with `getUser()` and edits only `full_name` metadata. Metadata is displayed as text, not used for authorization.
- Sign out is available on the profile and uses local-session scope. Clearing a session does not delete an account.
- Quiz results are not uploaded or synchronized. Public learning content is accessible without signing in.

## Verification

`npm test` covers handler validation, pending and error states, session controls, safe profile rendering and pinned-SDK PKCE behavior with mocked HTTP. It does not create real users or send real email.

Before launch, use an account and inbox controlled by the tester to verify signup, confirmation, reload, cross-tab state, sign out, recovery, expired/reused links and old/new password behavior on the actual HTTPS host. SMTP delivery, provider availability and callback configuration must be checked separately from unit tests.

Official references: [password auth](https://supabase.com/docs/guides/auth/passwords), [redirect URLs](https://supabase.com/docs/guides/auth/redirect-urls), [SMTP](https://supabase.com/docs/guides/auth/auth-smtp), [password security](https://supabase.com/docs/guides/auth/password-security).
