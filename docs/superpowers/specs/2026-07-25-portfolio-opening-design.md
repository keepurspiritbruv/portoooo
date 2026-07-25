# Portfolio Opening Design

## Goal

Create a polished auto cinematic opening for the portfolio homepage. The opening should make the first visit feel intentional and premium without requiring a click before visitors can access the site.

## Product Context

The project is a Vite React portfolio using Framer Motion, React Router, Tailwind CSS, Lucide icons, and locally loaded DM Sans / DM Serif Display fonts. The current homepage already has a `LoadingScreen` gate and a hero reveal controlled by `introComplete`.

The UI/UX Pro Max design-system recommendation for this project is a motion-driven creative portfolio: restrained monochrome, a clear accent color, strong name/role hierarchy, smooth entrance animation, and reduced-motion support.

## Experience

On initial page load, the site displays a full-screen dark intro for about 2.5 seconds. It contains:

- A subtle high-contrast stage with texture, grid, or line work.
- An animated `murguy` wordmark.
- A short role line: `Frontend Engineer & Designer`.
- A slim progress indicator that communicates the automatic transition.

After the intro, a split-curtain transition reveals the homepage automatically. The visitor does not need to press an Enter button.

The homepage hero reveal begins after the intro finishes:

- Eyebrow metadata fades in first.
- Headline lines rise in sequentially.
- Supporting copy fades up after the headline.
- Primary and secondary calls to action appear last.
- Scroll cue appears after the main content is readable.

## Component Boundaries

`LoadingScreen` owns the intro timeline and calls `onComplete` when the automatic intro finishes. It should no longer render an Enter button or depend on manual user action.

`App` keeps the existing `introComplete` state and continues passing it to `Navbar` and `HomePage`.

`Hero` keeps the existing `introComplete` contract but can be refined so its reveal timing feels synchronized with the new automatic intro.

Global CSS may add reusable keyframes or reduced-motion rules if needed.

## Accessibility And Performance

- Respect `prefers-reduced-motion` by shortening or removing decorative movement while still completing the intro automatically.
- Keep the intro non-interactive unless a control is necessary.
- Avoid animations that change layout dimensions; use transform and opacity.
- Preserve visible focus states for navigation and CTA links after the intro.
- Keep text contrast at WCAG AA levels.
- Ensure the intro cannot trap visitors if timers run more slowly than expected.

## Responsive Behavior

The opening must work at mobile and desktop widths. Typography should scale via existing clamp patterns or fixed responsive classes, not viewport-width-only font sizing. The dark intro should not create horizontal scroll at small mobile widths.

## Verification

Run lint and production build after implementation. Manually verify the homepage at least at mobile and desktop widths, including the automatic intro transition and reduced-motion behavior.
