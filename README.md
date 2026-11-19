# CURIO

Learn the world, one question at a time.

[Visit CURIO](https://zahidallahverdiyevv.github.io/CURIO/) · [Development guide](#development) · [Report a security issue](SECURITY.md)

CURIO is a quiz platform covering history, geography, science, philosophy, art and culture, and technology. Each answer comes with an explanation, and an interactive world map lets you practise finding countries.

## Features

- **48 topic quizzes** with 15 questions each, answer explanations and a results review.
- **Find the Country**, a 15-question map game with hints, zoom controls and scoring.
- **Daily Six**, a short six-question selection across the curriculum.
- **User accounts** with email confirmation, password recovery and profile editing.

All learning activities are available without an account. Scores reset when the page reloads; account progress is not saved. Daily Six currently uses a fixed question set.

## Development

Requires Node.js 22 or 24.

```sh
npm ci
npm start
```

Open [127.0.0.1:3000](http://127.0.0.1:3000). Authentication setup and local callback URLs are covered in the [authentication guide](docs/AUTH-SETUP.md).

## Stack and structure

The site uses HTML, JavaScript and Tailwind CSS, with Supabase Authentication for accounts. Node.js provides the local development server and build tools. GitHub Pages serves the production build.

| Directory | Purpose |
| --- | --- |
| `assets/` | Shared scripts, styles, images and map data |
| `content/quizzes/` | Editable quiz content and topic catalogue |
| `scripts/` | Content generation, validation and production build |
| `tests/` | Quiz, map, authentication and server checks |
| `docs/` | Setup, design, deployment and content references |

Pages live in the repository root. Production CSS and the Supabase SDK are bundled locally.

## Checks and build

```sh
npm test
npm run build
npm run test:production
```

The build writes the publishable site to `dist/`. Pull requests run checks on Node.js 22 and 24; merges to `main` trigger deployment to GitHub Pages.

For content changes, see the [quiz editing guide](docs/quiz-review/README.md). For hosting configuration and rollback, see the [deployment guide](docs/DEPLOYMENT.md).

## Documentation

- [Authentication](docs/AUTH-SETUP.md)
- [Design](docs/DESIGN.md)
- [World map and data attribution](docs/WORLD-MAP.md)
- [Quiz references](docs/quiz-review/sources.md)
- [Security policy](SECURITY.md)

## Contact

Questions and support: [curiolearn.help@gmail.com](mailto:curiolearn.help@gmail.com).
