# Portfolio Opening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the manual Enter splash with a polished automatic cinematic intro that reveals the portfolio homepage.

**Architecture:** Keep the existing `App` ownership of `introComplete`. Refactor `LoadingScreen` into a timer-driven state machine with reduced-motion timing, and adjust `Hero` reveal timing/styles so it lands cleanly after the intro completes.

**Tech Stack:** Vite, React 19, TypeScript, Framer Motion, React Router, Tailwind CSS v4, local CSS keyframes.

## Global Constraints

- The opening must auto-complete without requiring a click.
- The full-screen intro lasts about 2.5 seconds for normal motion users.
- The intro uses transform and opacity animation, not layout-changing animation.
- The intro respects `prefers-reduced-motion` and still completes automatically.
- The homepage hero reveal starts after `introComplete`.
- Navigation and CTA links retain visible focus states.
- Run `npm run lint` and `npm run build` after implementation.
- Manually verify mobile and desktop homepage widths after implementation.

---

## File Structure

- Modify `src/components/LoadingScreen.tsx`: remove click-to-enter behavior, implement automatic timeline, add visual stage/progress details, and use reduced-motion detection.
- Modify `src/components/Hero.tsx`: synchronize reveal delays with the automatic intro, improve focus/hover states, and keep responsive text stable.
- Modify `src/index.css`: add any reusable animation helpers and reduced-motion safeguards that are easier to keep global.
- No new runtime dependency is required.

## Task 1: Automatic Cinematic Loading Screen

**Files:**
- Modify: `src/components/LoadingScreen.tsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `LoadingScreenProps` with `onComplete: () => void`
- Produces: `LoadingScreen` still calls `onComplete()` exactly once when the intro has finished.

- [ ] **Step 1: Establish the existing behavior baseline**

Run:

```bash
npm run build
```

Expected: the current app builds before behavior changes. If it fails, record the existing failure before editing.

- [ ] **Step 2: Refactor `LoadingScreen` state**

In `src/components/LoadingScreen.tsx`, replace the existing click-driven `showButton` flow with this state shape:

```tsx
type Phase = 'preloader' | 'curtain-in' | 'curtain-out' | 'done'

const INTRO_DURATION_MS = 2500
const REDUCED_INTRO_DURATION_MS = 900
const CURTAIN_IN_DURATION_MS = 650
const CURTAIN_OUT_DURATION_MS = 850
```

Add reduced-motion detection:

```tsx
const getPrefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

- [ ] **Step 3: Implement automatic phase transitions**

Use `useEffect` timers:

```tsx
useEffect(() => {
  if (phase !== 'preloader') return
  const introDuration = prefersReducedMotion ? REDUCED_INTRO_DURATION_MS : INTRO_DURATION_MS
  const timer = window.setTimeout(() => setPhase('curtain-in'), introDuration)
  return () => window.clearTimeout(timer)
}, [phase, prefersReducedMotion])

useEffect(() => {
  if (phase !== 'curtain-in') return
  const timer = window.setTimeout(() => setPhase('curtain-out'), CURTAIN_IN_DURATION_MS)
  return () => window.clearTimeout(timer)
}, [phase])

useEffect(() => {
  if (phase !== 'curtain-out') return
  const timer = window.setTimeout(() => {
    setPhase('done')
    onComplete()
  }, CURTAIN_OUT_DURATION_MS)
  return () => window.clearTimeout(timer)
}, [phase, onComplete])
```

- [ ] **Step 4: Replace the manual button UI**

Remove `buttonVariants`, `showButton`, and `handleEnter`. Replace the lower prompt with a non-interactive progress label:

```tsx
<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: prefersReducedMotion ? 0 : 1.9, duration: 0.45 }}
  className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45"
>
  Opening portfolio
</motion.div>
```

Add a progress bar whose `scaleX` reaches `1` over the intro duration:

```tsx
<div className="h-[1px] w-48 overflow-hidden bg-white/10">
  <motion.div
    className="h-full origin-left bg-white/60"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{
      duration: prefersReducedMotion ? 0.35 : INTRO_DURATION_MS / 1000,
      ease: 'easeInOut',
    }}
  />
</div>
```

- [ ] **Step 5: Improve the cinematic stage**

Keep the wordmark and role line. Add restrained visual layers with fixed dimensions and opacity:

```tsx
<div className="pointer-events-none absolute inset-0">
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
  <motion.div
    initial={{ opacity: 0, scale: 0.94 }}
    animate={{ opacity: prefersReducedMotion ? 0.08 : 0.16, scale: 1 }}
    transition={{ duration: prefersReducedMotion ? 0.2 : 1.2 }}
    className="absolute left-1/2 top-1/2 h-[min(72vw,520px)] w-[min(72vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
  />
</div>
```

- [ ] **Step 6: Add reduced-motion global safeguards**

In `src/index.css`, add:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .animate-slide-down,
  .animate-clip-reveal,
  .animate-fade-in-up,
  .ornament-draw.animate {
    animation-duration: 1ms;
    animation-iteration-count: 1;
  }
}
```

- [ ] **Step 7: Verify the task**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands exit `0`.

## Task 2: Hero Reveal Synchronization

**Files:**
- Modify: `src/components/Hero.tsx`

**Interfaces:**
- Consumes: `introComplete: boolean`
- Produces: Hero content remains hidden until `introComplete` is true, then reveals in a sequenced timeline.

- [ ] **Step 1: Adjust headline timing**

Keep `lineVariants`, but align the delays to start promptly after intro completion:

```tsx
const lineVariants = {
  hidden: { y: '110%' },
  visible: (i: number) => ({
    y: '0%',
    transition: {
      delay: 0.12 + i * 0.12,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
}
```

- [ ] **Step 2: Refine first-viewport hierarchy**

Use the existing hero copy and links, but make the stage feel like the post-intro landing state:

```tsx
<section className="relative min-h-dvh md:min-h-[108vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
```

Keep the first viewport uncluttered and avoid nested cards. Ensure CTAs stay visible and do not overlap the scroll cue on mobile.

- [ ] **Step 3: Improve CTA accessibility and interaction polish**

Add visible focus styles and pointer cursor to the two `Link` elements:

```tsx
className="cursor-pointer rounded-full ... focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
```

Use the existing primary/secondary visual distinction. Keep hover transitions within 150-300ms.

- [ ] **Step 4: Verify the task**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands exit `0`.

## Task 3: Runtime Visual Verification

**Files:**
- No code changes unless verification reveals a defect.

**Interfaces:**
- Consumes: completed `LoadingScreen` and `Hero`.
- Produces: verified local preview URL and notes about any residual risk.

- [ ] **Step 1: Run the dev server**

Run:

```bash
npm run dev -- --host 127.0.0.1
```

Expected: Vite prints a local URL, usually `http://127.0.0.1:5173/`.

- [ ] **Step 2: Manually verify normal motion**

Open the local URL and confirm:

- The intro starts automatically.
- No Enter button appears.
- The progress line completes.
- The curtain reveal happens automatically.
- The hero content appears after the curtain reveal.
- CTA links remain clickable.

- [ ] **Step 3: Manually verify reduced motion**

Enable reduced motion in the browser or OS and reload the page. Confirm:

- The intro completes automatically.
- Decorative movement is shortened or minimized.
- The homepage remains usable.

- [ ] **Step 4: Final verification**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands exit `0`.
