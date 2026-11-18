# CURIO audit and repair — 2 November 2026

> Correction: the audit image replacements were subsequently reverted at the owner's request. All original image mappings are restored. See IMAGE-RESTORATION.md in the project or CURIO-image-restoration.md in the delivered outputs. Six original Google-hosted images require sign-in; no replacements are approved. Historical image-repair observations below describe the earlier state.

Work performed directly in `C:\Users\zahid\OneDrive\Desktop\CURIO`. Existing layout, colors, typography and quiz content retained. No production data, account, Dashboard setting or deployment changed.

## Confirmed findings and repairs

| Priority | Finding / root cause | Result |
|---|---|---|
| High | Supabase SDK 2.102.0 automatic PKCE callback exchanges the code, emits SIGNED_IN, and returns redirectType=null. CURIO enabled password updates only on PASSWORD_RECOVERY. A valid recovery session could therefore leave Update Password disabled. | Reproduced using the actual pinned SDK with mocked HTTP. CURIO now explicitly exchanges the PKCE code and reads the recovery type returned from the SDK's stored verifier. Signup and ordinary sessions do not unlock recovery. |
| High | Static server served root JavaScript and scripts under node_modules, including server.js. | Public routes now limited to root HTML and assets, with real-path checks retained. Internal source, tests and backups denied. Added frame protection. |
| Medium | localhost and 127.0.0.1 have separate storage, so a PKCE verifier created on one is unavailable on the other. The reported historical Dashboard redirect fallback cannot be verified from local source. | New server redirects localhost to 127.0.0.1 before pages initialize. SDK redirects use the current origin. Dashboard allowlist values documented below. Old links/verifiers are not transferable; request a fresh link after canonical configuration. |
| Medium | Daily Six allowed unanswered Next and rapid clicks during transitions; countries/capitals also allowed unanswered advancement. | Answer gates, disabled controls and transition guards added. Correct/incorrect scores, repeated clicks and restart verified. |
| Medium | Category/quiz footer legal links and other navigation pointed to #; profile buttons had no action; Daily Six subject links always led to category list. | Existing About/How It Works and category sections reused as destinations; Terms/Privacy linked to their real pages; account controls linked to Sign In; subject links lead to their respective categories. No new content invented. |
| Medium | History used remote image URLs despite eight corresponding local image files already existing. Browser inspection found failed images. | All eight cards now use existing assets/history images. Browser recheck: eight local images, zero failed images. |
| Low | Email-request buttons could immediately send repeated requests, worsening the reported email limit. | Added a one-minute in-page cooldown shared by resend and forgot-password actions. This reduces accidental requests; it does not reset or replace Supabase's server limits. |
| Low | Geography answer controls used pointer-events without disabled state and long text could truncate. | Controls now disable after selection, chosen answer state is updated, and generated answer text wraps. |

## Validation

Final `npm test` covers:

- Existing validator: six categories, 48 cards, six quizzes, 90 questions; 50 quiz simulations plus 50 restart simulations, both motion preferences, scores, answer locking and rapid Next.
- Existing auth DOM suite: registration payload/validation, password clearing, resend, unavailable Google flow, login errors, recovery request/gate/update/sign-out, callback success/error cleanup, missing SDK, session controls, local HTML links and duplicate IDs. Added repeated recovery-email cooldown assertion.
- New actual-SDK regression: recreates 2.102.0 automatic PKCE recovery-event loss and verifies explicit exchange; signup/ordinary verifier and expired code do not unlock recovery. The real SDK runs against mocked HTTP, with synthetic tokens and users only.
- New real DOM quiz suite: 28 runs across Daily Six and all six quizzes, all-correct/all-incorrect scores, both motion preferences, unanswered/rapid Next, answer locking and restart. The old validator's printed limitation about Geography and Daily Six is addressed by this separate suite.
- Server suite: isolated port 3087; pages/scripts, security headers, hidden/internal/missing/malformed routes, rejected methods and localhost canonical redirect.
- Dependency install/audit: zero known reported vulnerabilities across 52 installed packages. The pinned SDK is a development dependency for reproducible tests; production pages retain their pinned CDN SDK.

Real browser checks:

- Daily Six completed through all six questions; displayed `2 / 6 correct` when choosing the first option each time. Screenshot provided separately.
- Home, categories, six quiz pages, authentication/callback pages, Terms and Privacy opened. No JavaScript errors were returned by the inspected browser error log.
- Mobile viewport requested at 390×844; Home, Sign In, Sign Up, Reset Password, countries/capitals, ancient civilizations and Geography checked for horizontal overflow and failed images. None detected in those checks. This is a targeted check, not an exhaustive device/accessibility certification.
- Password reset without a recovery link displays fresh-link guidance and keeps Update Password disabled.
- Desktop 1440×900 reset layout and default-width home/history inspected visually. History local-image repair verified after reload.

## Supabase and remaining verification

No real authentication emails were sent, no test accounts were created and no real passwords were changed. Registration, login/logout, persistence, refresh and recovery are tested at handler/SDK levels with mocks; delivery and a real inbox-to-password-change flow remain unverified in this audit. Earlier user-reported working auth behavior is context, not a new live test result.

Dashboard was not inspected or modified. Review these settings in Authentication → URL Configuration:

- Site URL: `http://127.0.0.1:3000`
- Additional redirect URL: `http://127.0.0.1:3000/auth-callback.html`
- Additional redirect URL: `http://127.0.0.1:3000/reset-password.html`

Keep email confirmation enabled. Review recovery/confirmation templates so their ConfirmationURL preserves the requested redirect. Review SMTP/provider restrictions and the current server email limit before one controlled live test. The client cooldown does not cure an already exhausted limit. Google remains disabled; provider setup and activation require a separate authorized configuration change.

After restarting the server and configuring URLs, request one fresh recovery link from 127.0.0.1 in the browser that will open the email. PKCE requires that browser's verifier. Test update success, old-password rejection, new-password login, reused/expired links and refresh. Do not reuse previously failed localhost links. Reset-page reload intentionally requires a fresh recovery link; recovery capability is not persisted by custom application storage.

Reference: [Supabase PKCE flow](https://supabase.com/docs/guides/auth/sessions/pkce-flow), [password recovery API](https://supabase.com/docs/reference/javascript/auth-resetpasswordforemail), [redirect URLs](https://supabase.com/docs/guides/auth/redirect-urls). The version-specific failure above was verified against the installed 2.102.0 SDK, rather than inferred only from current documentation.

## Database and unfinished functionality

No quiz-progress database writes or reads exist in the project. Scores remain in page memory and reset on reload. Current public quizzes do not have a private backend data boundary. Dashboard database schemas and RLS cannot be verified from this frontend-only integration.

Minimum proposed schema, not applied: `quiz_attempts(id uuid primary key, user_id uuid references auth.users(id), quiz_slug text, correct_count integer, question_count integer, completed_at timestamptz default now())`. Require non-null fields, positive question_count and `0 <= correct_count <= question_count`. Enable RLS; grant authenticated users SELECT/INSERT only with `auth.uid() = user_id`; do not grant anonymous/private-progress access. Start with immutable attempts and no UPDATE/DELETE grants. Define retention, repeat-attempt semantics and whether resume-in-progress is needed before implementation. Client-submitted scores are suitable for personal practice only; competitive rankings would require server-side validation.

42 subtopic cards are deliberately marked Coming Soon (seven per category). They remain unfinished. Daily Six contains a fixed six-question dataset; daily rotation/content scheduling is not implemented despite the existing daily copy. No replacement questions were invented. Operator/contact/age/retention placeholders in legal pages remain owner decisions; those texts were not substantively rewritten.

The UI still relies on external Tailwind, font and SDK CDNs; a fully offline build and production asset pipeline are outside these local repairs. Static unsafe-looking innerHTML uses in quiz renderers currently interpolate repository-owned quiz strings or constant SVGs; do not reuse them for untrusted database/user content without safe DOM construction.

## Files changed / added

Changed: `.gitignore`; `assets/auth/client.js`; `assets/auth/auth.js`; `server.js`; `package.json`; `package-lock.json`; `test-auth.cjs`; `test-server.cjs`; `index.html`; `history.html`; `geography.html`; `science.html`; `philosophy.html`; `art-culture.html`; `technology.html`; `ancient-civilizations.html`; `countries-capitals.html`; `physics-fundamentals.html`; `ancient-philosophy.html`; `art-history.html`; `computer-fundamentals.html`; `privacy.html`; `terms.html`; `AUTH-SETUP.md` (link to current report).

Added: `test-recovery-sdk.cjs`; `test-quiz-dom.cjs`; `AUDIT-REPORT.md` (project copy of this report). Installed development test dependencies update node_modules and the lockfile.

Recoverable pre-edit checkpoint: `.curio-backups/before-audit-20261102/` contains original root files and assets, excluding node_modules. Backups are ignored by Git and denied by the updated server. No existing files or production data were deleted.

## Local start

In PowerShell:

```powershell
Set-Location 'C:\Users\zahid\OneDrive\Desktop\CURIO'
npm start
```

Open `http://127.0.0.1:3000`. If an existing CURIO server owns port 3000, stop it in its original terminal and restart it so the server.js changes take effect. Its running process was not terminated by this audit. Browser checks used the already-running static server, which reads updated page/assets files; the new server behavior was verified independently on port 3087.

Run `npm test` for regression checks. Use `npm ci` first on a fresh checkout. Real Supabase email delivery, Dashboard/RLS verification, cloud progress and daily rotation remain the outstanding limitations; the site is not claimed fully integration-tested.
