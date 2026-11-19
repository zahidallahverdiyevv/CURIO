# Design guide

CURIO uses warm neutral backgrounds, dark typography and coral accents. Keep pages consistent with the homepage, category pages and shared components.

## Palette

| Role | Color |
| --- | --- |
| Page background | `#F5F5F2` |
| Card and input surface | `#FFFFFF` |
| Primary text | `#16181D` |
| Secondary text | `#565B66` |
| Primary button | `#20232B` |
| Button hover | `#323744` |
| Brand accent | `#FF5C3A` |
| Border | `#DEDED8` |
| Focus and secondary accent | `#4D63A8` |
| Correct answer | `#1E7A4F` |
| Incorrect answer | `#B3261E` |

Use color alongside text or icons when communicating answer states.

## Typography and layout

- Use Plus Jakarta Sans, with a sans-serif fallback.
- Keep body text readable and headings concise. Use small uppercase labels sparingly.
- The homepage uses a content width of up to 1200px. Match the width and spacing of the page being extended.
- Stack content on narrow screens and allow navigation labels to wrap or simplify without hiding essential actions.
- Buttons and inputs generally use an 8px radius; cards use 12px, with larger feature panels at 16px.

## Interaction

Provide visible hover, keyboard focus, active and disabled states. Shared header links and quiz navigation controls have a minimum 44px target size. Keep focus indicators visible against both light and dark surfaces.

Quiz feedback includes the selected answer, correctness and an explanation. Preserve these states while moving between questions. Controls must not allow duplicate submissions or skip questions during a transition.

Use short transitions for feedback and card emphasis. Respect `prefers-reduced-motion`; the shared stylesheet disables nonessential animation and smooth scrolling when requested.

## Implementation

| File | Responsibility |
| --- | --- |
| `assets/site/site.css` | Shared focus, navigation and responsive adjustments |
| `assets/quiz/quiz.css` | Quiz components and answer states |
| `assets/quiz/world-map.css` | Map layout and controls |
| Root HTML pages | Page layout and Tailwind theme configuration |

Check new UI at narrow and wide viewport sizes, with keyboard navigation and reduced motion. Use the current source and rendered pages as the reference when a component differs from this guide.
