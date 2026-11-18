---
name: Curio — Contemporary Explorer
source_of_truth: current root HTML pages and shared assets
colors:
  background: '#F5F5F2'
  surface: '#F5F5F2'
  surface-bright: '#F5F5F2'
  surface-container-lowest: '#FFFFFF'
  surface-container-low: '#EEEEEA'
  surface-container: '#EAEAE5'
  surface-container-high: '#EAEAE5'
  surface-container-highest: '#E2E3E0'
  surface-variant: '#EEEEEA'
  surface-dim: '#DADAD7'
  on-background: '#16181D'
  on-surface: '#16181D'
  on-surface-variant: '#565B66'
  primary: '#20232B'
  primary-container: '#20232B'
  on-primary: '#FFFFFF'
  secondary: '#4D63A8'
  on-secondary: '#FFFFFF'
  brand-coral: '#FF5C3A'
  outline: '#8A8D94'
  outline-variant: '#DEDED8'
  semantic-correct: '#1E7A4F'
  semantic-error: '#B3261E'
  button-hover: '#323744'
  button-active: '#0C0E12'
typography:
  fontFamily: Plus Jakarta Sans
  display-hero: {fontSize: 56px, fontWeight: 800, lineHeight: 64px, letterSpacing: '-0.03em'}
  display-hero-mobile: {fontSize: 38px, fontWeight: 800, lineHeight: 44px, letterSpacing: '-0.025em'}
  headline-lg: {fontSize: 36px, fontWeight: 700, lineHeight: 44px, letterSpacing: '-0.02em'}
  headline-lg-mobile: {fontSize: 28px, fontWeight: 700, lineHeight: 34px, letterSpacing: '-0.015em'}
  headline-md: {fontSize: 24px, fontWeight: 700, lineHeight: 32px, letterSpacing: '-0.015em'}
  headline-sm: {fontSize: 20px, fontWeight: 600, lineHeight: 28px, letterSpacing: '-0.01em'}
  title-card: {fontSize: 18px, fontWeight: 600, lineHeight: 26px, letterSpacing: '-0.005em'}
  body-lg: {fontSize: 18px, fontWeight: 400, lineHeight: 28px}
  body-md: {fontSize: 16px, fontWeight: 400, lineHeight: 24px}
  body-sm: {fontSize: 14px, fontWeight: 400, lineHeight: 20px, letterSpacing: '0.005em'}
  label-lg: {fontSize: 14px, fontWeight: 600, lineHeight: 20px, letterSpacing: '0.01em'}
  label-md: {fontSize: 12px, fontWeight: 600, lineHeight: 16px, letterSpacing: '0.03em'}
  label-coord: {fontSize: 11px, fontWeight: 700, lineHeight: 14px, letterSpacing: '0.08em'}
rounded_tailwind:
  DEFAULT: 0.25rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-mobile: 1rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

> **Implementation note:** This edition is aligned to the uploaded `code(1).html` snapshot, including its inline Tailwind configuration, CSS, and Daily Six JavaScript. It is not a live inspection of the running Antigravity project. Preserve actual working behavior; if the deployed project differs, re-check its source before changing this document. `server(1).js` is a simple static HTTP server and does not define UI styling.

## Brand & Style
The design system reflects the identity of a premium, forward-thinking educational exploration platform. It combines intellectual curiosity with editorial rigor and refined digital craftsmanship. The visual aesthetic draws from contemporary editorial design and modern Swiss utility: structured, ultra-legible, expansive, and free of superficial decoration.

The experience must feel deliberate, confident, and warm rather than sterile or gamified. We lean into architectural balance: generous whitespace, high-contrast typographic pairings, tactile surfaces with subtle architectural borders, and precise hits of vibrant coral to direct focus and celebrate discovery moments.

## Colors
The palette balances grounding neutral tones against focused dynamic accents.

- **Canvas & Surfaces:** Canvas foundation defaults to `#F5F5F2` (Warm Sand), establishing an organic, non-glare editorial base. Elevated surfaces and cards use `#FFFFFF`.
- **Typography & Structure:** Primary copy sits at `#16181D` for crisp contrast without harsh digital black; secondary metadata and supportive captions rest at `#565B66`.
- **Brand & Action:** The primary interactive anchor is `#20232B` (Obsidian), transitioning to `#323744` on hover and `#0C0E12` on active press. `#4D63A8` serves as the secondary structural brand tone for analytical markers and secondary interaction tiers.
- **Accents:** `#FF5C3A` (Vibrant Coral) is reserved strictly for high-impact calls to attention, exploratory discoveries, and primary milestones.
- **Borders & Dividers:** Outlines use `#DEDED8` for standard boundaries and `#8A8D94` for strong structural anchors, active states, and emphasis dividers.
- **Semantic Feedback:**
  - Success: `#1E7A4F`
  - Error: `#B3261E`
  - Warning: `#8A5A00`
  - Info: `#1F5FA8`

## Typography
Plus Jakarta Sans drives the typographic system across all interfaces. Its contemporary geometric cut and subtle humanist nuances allow headlines to feel bold and architectural, while body text retains high legibility across long-form instructional content.

- **Display & Headlines:** Tightly tracked headings (-0.025em to -0.03em) establish confident presence and structure.
- **Body:** Standard prose leverages comfortable line-height multipliers (1.55 to 1.6) to support sustained reading comprehension.
- **Labels & Overlines:** Upper and small-scale labels use widened letter tracking (+0.02em to +0.04em) and medium/bold weights to preserve legibility in tight analytical contexts.

## Layout & Spacing
The layout adheres to a structured responsive grid with deliberate editorial breathing room.

- **Desktop (1024px+):** 12-column grid with a maximum content container of **1200px** (`max-w-[1200px]`), **24px horizontal padding** (`px-6`) and **32px from `lg`** (`lg:px-8`).
- **Tablet (640px - 1023px):** Responsive stacking uses Tailwind `sm`/`md` utilities; the source does not define a global 8-column grid.
- **Mobile (<640px):** Single-column sections and category cards; the source does not define a global 4-column grid.

Vertical rhythm follows an 8px baseline framework. Element groupings within cards rely on `space-xs` and `space-sm`, module internal padding uses `space-md` to `space-lg`, and major structural segmenting scales to `space-xl`.

## Elevation & Depth
Depth is articulated primarily through surface value separation and crisp hairline boundaries rather than dramatic shadows, reinforcing a clean, modern aesthetic.

- **Surface Layers:**
  - Base: Canvas `#F5F5F2`.
  - Cards and Modules: `#FFFFFF` paired with a 1px border of `#DEDED8`.
  - Floating / Overlays: Elevated modals and floating sheets use `#FFFFFF` accented with a delicate ambient diffusion (`0 12px 32px -8px rgba(22, 24, 29, 0.08)`) and a 1px border of `#DEDED8`.
- **States & Hover:** Interactive surface cards transition their border from `#DEDED8` to `#8A8D94` while subtly lifting via a micro-shadow (`0 4px 12px -2px rgba(22, 24, 29, 0.06)`).

## Shapes
Shapes employ rounded geometry (`roundedness: 2`, 0.5rem / 8px default radius) that balances contemporary precision with tactile approachability.

- **Micro elements & inputs:** 8px (`0.5rem`) for form inputs, chips, checkboxes, and buttons.
- **Cards & containers:** Existing category and step cards use `rounded-xl` = **12px**; the Daily Six card uses `rounded-2xl` = **16px** (Tailwind defaults).
- **Hero units & modals:** No universal 24px rule is established in this source. Match each existing component rather than inventing a new radius.

## Components

### Buttons
- **Primary:** Background `#20232B`, text `#FFFFFF`, `rounded-lg` = 8px. Hover: `#323744`. Active: `#0C0E12`. The current Homepage uses context-specific padding (`px-5 py-2.5` in header, `px-6 py-3.5` in hero), **not** a universal 44px height.
- **Secondary:** Surface `#FFFFFF`, border 1px `#DEDED8`, text `#16181D`. Hover: border `#8A8D94`, surface `#F5F5F2`.
- **Accent (Curio Highlight):** Background `#FF5C3A`, text `#FFFFFF`. Hover: `#E54D2D`. Reserved for pivotal calls to action and progression triggers.

### Cards & Exploratory Units
- Base surface `#FFFFFF`, 1px border `#DEDED8`, `rounded-xl` = 12px, padding `p-6` (24px). Daily Six is `rounded-2xl` = 16px, `p-6 lg:p-7`.
- Focus modules include an optional left vertical status notch (3px thick) tinted with `#4D63A8` or semantic indicators.

### Chips & Tags
- Height 28px, border-radius 8px, padding 0 `space-sm`.
- Category Chip: Background `#F5F5F2`, text `#565B66`, border 1px `#DEDED8`.
- Active Selection: Background `#20232B`, text `#FFFFFF`, border 1px `#20232B`.

### Form Inputs
- Height 44px, surface `#FFFFFF`, border 1px `#DEDED8`, border-radius 8px, text `#16181D`, placeholder `#565B66`.
- Focus state: Border 1px `#20232B`, outline 2px solid rgba(32, 35, 43, 0.15).

### Checkboxes & Radios
- 20px x 20px, border 1.5px `#8A8D94`, radius 6px (checkbox) or circular (radio).
- Checked: Background `#20232B`, border-color `#20232B`, inner icon/dot `#FFFFFF`.

### Educational Progress & Feedback Panels
- **Inline Feedback Banners:** Minimalist left-bordered container with `#FFFFFF` background, 1px border `#DEDED8`, and a 4px leading edge:
  - Correct: `#1E7A4F` edge, `#1E7A4F` title icon.
  - Incorrect: `#B3261E` edge, `#B3261E` title icon.
  - Info: `#1F5FA8` edge, `#1F5FA8` title icon.

## Motion & Interaction Standards

Motion should be subtle, purposeful, and consistent with Curio's editorial aesthetic. **The timings below are read from `code(1).html`, not guessed design targets.** Some interactions have different fade-out and fade-in phases.

| Interaction | Observed duration | Easing / behavior |
|---|---:|---|
| Global `a, button` transitions | **180ms** | `cubic-bezier(0.4, 0, 0.2, 1)`; explicit Tailwind utility classes may override |
| Primary CTA Tailwind transitions | **150ms** | `duration-150`, hover `-translate-y-0.5` (2px), subtle shadow |
| Category card hover | **200ms** | `translateY(-3px)` with shadow; border color **180ms** |
| Category image hover zoom | **300ms** | Tailwind `duration-300` transform |
| Quiz answer hover | **180ms** for colors/shadow; **150ms** transform | `translateY(-1px)` while enabled |
| Answer feedback labels and icons | **180ms** | `opacity` ease-out |
| Explanation reveal | **200ms** | `opacity` ease-out (inline initial style says 250ms, JS overrides it) |
| Next question transition | **90ms out + 150ms in** | opacity fade; total **240ms** |
| Daily Six completion | **100ms out + 200ms in** | opacity fade; total **300ms** |
| Same-page anchor navigation | Native smooth scroll | `scroll-behavior: smooth`; `scroll-padding-top: 5.5rem` (88px) |
| Reduced motion | **no animation** | CSS disables key transitions; JS skips quiz fades and uses instant scrolling |

### Interaction rules

- **Navigation:** In-page links must target existing section IDs. Account-related controls must not navigate to unrelated sections. Do not invent pages or authentication flows.
- **Scrolling:** Use `scroll-behavior: smooth` for same-page navigation where appropriate, and `scroll-margin-top` on destinations to avoid hiding headings behind the sticky header. Confirm that browser history and keyboard navigation remain usable.
- **Buttons:** Provide distinct hover, focus-visible, active, and disabled states. Preserve clear keyboard focus outlines; hover must never be the sole feedback mechanism.
- **Cards:** Slight elevation and border emphasis are acceptable; avoid large transforms, aggressive scaling, or distracting continuous animations.
- **Daily Six quiz:** Answer selection, correctness feedback, explanation, and Next Question must continue working. Transitions must not clear selection prematurely, double-submit answers, or allow rapid clicks to skip quiz state.
- **Accessibility:** Support `prefers-reduced-motion: reduce`; disable nonessential movement and use instant scrolling for users who request reduced motion. Keep semantic button/link roles and sufficient contrast.
- **Performance:** Prefer `opacity` and `transform` for animation; avoid expensive layout-triggering transitions where possible.

### Current implementation reference (documentation only)

```css
html { scroll-behavior: smooth; scroll-padding-top: 5.5rem; }
a, button {
  transition-duration: 180ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
#categories article {
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 200ms cubic-bezier(0.16, 1, 0.3, 1),
              border-color 180ms ease;
}
#categories article:hover { transform: translateY(-3px); }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto !important; }
  /* Existing source disables transitions/animations on quiz, cards and controls. */
}
```

**Do not paste these declarations over the working code.** This excerpt records its behavior; the full implementation also includes Tailwind utilities and JavaScript-driven transitions. The sticky header is `h-20` (80px); scroll padding is 88px and target sections also use `scroll-mt-24` (96px).


## Integration guidance

Preserve the homepage hero, six category cards, Daily Six interactions and How It Works section. Account behavior is documented in AUTH-SETUP.md; use the current HTML and assets as the implementation reference. Category cards and footer links are functional. Quiz data is public and progress is not persisted. Keep visual updates separate from changes to learning behavior.

## Design Consistency Checklist

Before accepting a new Stitch page or Antigravity integration, confirm that it uses the canonical colors, Plus Jakarta Sans, matching corner radii and spacing, accessible focus states, restrained motion, and consistent responsive behavior. Inspect the running page rather than assuming a generated file exactly matches this specification.
