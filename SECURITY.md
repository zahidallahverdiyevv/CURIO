# Security policy

## Reporting a vulnerability

Please do not publish passwords, tokens, account data or exploit details in a public issue. Use this repository's private vulnerability reporting option when available, or email **curiolearn.help@gmail.com** with a short description and safe reproduction steps. Never include a real password or secret key.

Reports should identify the affected page or file, the expected and observed behavior, and the potential impact. Use accounts and data you control. Do not access other users' data or run disruptive tests.

## Project status

CURIO is under active development and has not launched as a production service. Security fixes target the current main branch; historical snapshots are not maintained releases. No response-time guarantee or paid bug bounty is offered.

## Credentials and public content

The Supabase URL and publishable key in browser configuration are intentionally public. Secret/service_role keys, SMTP credentials and account exports must never be committed. Learning questions and client-side answers are public content, not a protected assessment service.

If a credential is accidentally published, revoke or rotate it at its provider. Removing a file in a later commit does not remove it from Git history or existing copies.
