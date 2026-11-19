# Security policy

## Reporting a vulnerability

Use [GitHub private vulnerability reporting](https://github.com/zahidallahverdiyevv/CURIO/security/advisories/new) or email [curiolearn.help@gmail.com](mailto:curiolearn.help@gmail.com).

Include the affected page or file, reproduction steps, expected and observed behavior, and potential impact. Remove passwords, tokens and personal account data from examples and screenshots. Please keep exploit details private while a report is being assessed.

Test only with accounts and data you control. Avoid disruptive testing or accessing another person's data.

## Supported version

Security fixes are applied to the current `main` branch. CURIO is a public beta; older commits are not maintained as separate releases.

## Credential handling

The browser uses a Supabase project URL and publishable key. Keep privileged keys, SMTP credentials and account exports out of source control. If a secret is exposed, revoke it at the provider and replace it in the relevant configuration.

Quiz questions and answers are public learning content. They are delivered to the browser and are not intended for secure examinations.
