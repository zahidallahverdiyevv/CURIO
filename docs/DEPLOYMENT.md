# Production deployment

CURIO is published from `main` through GitHub Pages at [zahidallahverdiyevv.github.io/CURIO](https://zahidallahverdiyevv.github.io/CURIO/).

## Build and preview

```sh
npm ci --ignore-scripts
npm test
npm run build
npm run test:production
node scripts/preview-site.cjs
```

The local production preview runs at `http://127.0.0.1:3090/CURIO/`, including the repository base path. Use it for interface checks; this port is not an approved authentication callback destination.

The build regenerates only `dist/`. It includes root HTML pages and public assets, compiles the six Tailwind themes to local CSS and copies the pinned Supabase SDK from the installed package. It excludes docs, quiz exports, tests, server source, credentials and Git metadata. Deploy the generated bundle, not the repository root.

The output includes page descriptions, canonical URLs, account-page noindex, sitemap, favicon, a 404 page and a script hash CSP. Hashes permit only the exact inline initializers; other JavaScript is local. Remaining Google font/image hosts and the configured Supabase API are explicitly allowed. GitHub Pages controls HTTP headers and caching. The HTML CSP does not control framing or transport-security headers.

## Release path

Develop on a branch and open a pull request. Both `Tests (Node 22)` and `Tests (Node 24)` must pass before merging. The `Publish website` workflow repeats checks on main, builds the artifact and publishes only `dist/` using the `github-pages` environment. Deployment write permissions belong only to the deploy job. PR builds do not receive production credentials.

The configured base URL is `https://zahidallahverdiyevv.github.io/CURIO/`. For a different host, supply an HTTPS `SITE_URL`, including the correct directory, and update the corresponding URL checks and Supabase configuration.

Supabase Site URL must match the published base, with these exact redirect destinations:

```text
https://zahidallahverdiyevv.github.io/CURIO/auth-callback.html
https://zahidallahverdiyevv.github.io/CURIO/reset-password.html
```

Retain local callbacks only while needed. Do not add a broad production wildcard or put SMTP/OAuth secrets into source/workflows.

## Smoke check and rollback

After deployment, check HTTPS home, category/quiz feedback, map, guest profile, forms, legal/contact links and a missing URL. Inspect browser errors and confirm no runtime Tailwind/external SDK loads.

Auth unit/SDK tests use mocked HTTP. Actual confirmation email delivery and password recovery require a tester-controlled inbox and account. PKCE links should be opened in the browser that initiated the request. A successful build does not prove email delivery.

Rollback by reverting the release through a PR and letting the same tested pipeline publish it. Confirm that the deployment completes successfully and check the live URL after rollback.
