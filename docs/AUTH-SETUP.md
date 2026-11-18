> Latest auth update: [18 November 2026](AUTH-2026-11-18.md). The report below is a historical snapshot; its dashboard settings and live-test status have been superseded.

> Current site audit: [13 November 2026](SITE-AUDIT-2026-11-13.md). PKCE recovery correction: [2 November audit](archive/AUDIT-REPORT-2026-11-02.md). The report below describes the earlier implementation; test files now live in `tests/`. The current preview uses port 3001; ensure Supabase allows that origin for callbacks and password recovery.

# CURIO Supabase authentication — implementation report

Implemented directly in C:\Users\zahid\OneDrive\Desktop\CURIO on 2 November 2026.

## Implemented

Official Supabase JavaScript SDK 2.102.0 (version-pinned CDN), frontend publishable configuration, email/password registration with full_name metadata, login, confirmation callback, resend verification, forgot password, recovery-only password update form, persisted SDK sessions, automatic refresh, auth-state-driven Sign Out controls, and sign-out error handling. Passwords are cleared after submission and never manually persisted. Google OAuth handler is prepared but googleEnabled remains false. Existing authentication page artwork, typography, colors, layout and password toggles were retained. Recovery and confirmation pages reuse that design.

The development server binds to 127.0.0.1, supports PORT, returns real missing-file errors, rejects hidden/traversal paths and unsupported methods, and sends no-store/no-referrer/nosniff headers. Quiz data remains public and quiz results remain in page memory; authentication does not add protected backend records or cloud progress.

Privacy and account-related Terms text now describe actual authentication behavior. Operator identity, privacy contact, deletion request process, age eligibility, retention and provider arrangements remain pre-launch decisions. This is a factual code update, not a legal compliance assessment.

## Created files

- assets/auth/config.js
- assets/auth/client.js
- assets/auth/session.js
- auth-callback.html
- reset-password.html
- package.json
- package-lock.json
- .gitignore
- test-auth.cjs
- test-server.cjs
- AUTH-SETUP.md (this report)

## Modified files

- assets/auth/auth.js
- server.js
- signin.html and signup.html
- privacy.html and terms.html
- index.html
- history.html, geography.html, science.html, philosophy.html, art-culture.html, technology.html
- ancient-civilizations.html, countries-capitals.html, physics-fundamentals.html, ancient-philosophy.html, art-history.html, computer-fundamentals.html

Public pages load session controls; placeholder Sign In links were connected to signin.html. node_modules contains installed development test dependencies and is Git-ignored. No Git commit was made.

## Local use

The server was started and verified at http://127.0.0.1:3000.

From the project directory:

    npm start
    npm test

For a fresh checkout, run npm ci first. Use the same origin and browser throughout email flows. localhost and 127.0.0.1 have separate browser storage. PKCE links must be opened in the browser that requested them. A reset page reload requires a fresh recovery link. Internet access is needed for Supabase and the existing CDN resources.

## Tests completed

- npm test: PASS using installed local dependencies.
- Existing validator: six categories, 48 cards, six quizzes, 90 questions; 50 simulated quiz runs and 50 restart runs; links and inline syntax.
- Auth DOM tests: registration validation/payload, password clearing, verification resend, disabled Google, login error, recovery email request, recovery access gate, password update and logout, callback success/error cleanup, missing SDK, session/logout UI, HTML local links and duplicate IDs.
- Server smoke tests on isolated port 3087: pages/scripts, headers, missing/hidden/malformed URLs, HTTP methods. Test server stopped afterward.
- Official CDN SDK fetched successfully (HTTP 200); actual SDK plus config/client initialized in a DOM with an anonymous session.
- Supabase public settings endpoint HTTP 200: email enabled; signup enabled; email confirmation required; Google disabled.
- Dependency installation audit: zero reported vulnerabilities.
- Default development server started on 127.0.0.1:3000.

Auth operation tests use SDK mocks. They test handlers, not live account creation or email delivery. No real users were created and no real passwords were changed. No visual browser test was performed; the blocked browser interaction was not retried.

## Remaining Dashboard configuration (not changed)

In Authentication > URL Configuration, review and set the local Site URL to:

    http://127.0.0.1:3000

Allow these exact additional redirect URLs:

    http://127.0.0.1:3000/auth-callback.html
    http://127.0.0.1:3000/reset-password.html

If deliberately using localhost instead, also configure the corresponding localhost URLs and stay on that origin throughout each flow. No wildcard redirects are needed. Retain email confirmation. Review email templates so their confirmation link preserves the requested redirect; default ConfirmationURL templates support the SDK flow. These security-sensitive settings were not inspected or altered through Dashboard.

Review SMTP configuration and recipient restrictions. Supabase's built-in email service has testing restrictions; configure an appropriate mail provider in Dashboard for wider delivery, keeping SMTP credentials out of frontend files.

## Google OAuth preparation

Before activation, configure Google's consent screen and a Web application OAuth client. Use the Supabase callback as Google's authorized redirect URI:

    https://jjrgizykmkzfdbyzzpzd.supabase.co/auth/v1/callback

Configure the appropriate app origin and test users in Google Cloud. Enter the Google client ID and client secret in Supabase's Google provider configuration; the secret must never go in CURIO browser code. After those settings and app callback allowlisting have been reviewed and approved, enable the provider and set googleEnabled to true in assets/auth/config.js. Update privacy disclosures for the actual Google account fields received before activation. No credentials were invented and Google was not activated.

## Still requires live verification

Create a test account with an inbox you control; verify pending registration cannot log in until confirmation; open the verification link in the same browser; test login, refresh, cross-tab session updates and logout. Request recovery, open its email link in the same browser, update the password, verify the old password fails and the new password works. Check reused/expired links, network failures, delivery limits, and mobile/desktop rendering. Test Google only after proper OAuth setup. No public deployment is authorized or performed.

Official references:

- https://supabase.com/docs/guides/auth/redirect-urls
- https://supabase.com/docs/guides/auth/auth-smtp
- https://supabase.com/docs/guides/auth/social-sign-in/auth-google
- https://supabase.com/docs/reference/javascript/auth-resetpasswordforemail

