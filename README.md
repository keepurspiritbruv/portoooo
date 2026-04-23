# murguy. — Portfolio
Personal portfolio website of **Dhimas Nurhanindya Putra**, a Frontend Engineer & UI/UX Designer based in Yogyakarta, Indonesia.
Built with a cinematic intro sequence, smooth page transitions, and a minimalist light aesthetic.
---
## Tech Stack
| Layer         | Technology                          |
|---------------|-------------------------------------|
| Framework     | React 19 + TypeScript               |
| Routing       | React Router v7                     |
| Styling       | Tailwind CSS v4                     |
| Animation     | Framer Motion                       |
| Icons         | Lucide React                        |
| Fonts         | DM Serif Display + DM Sans          |
| Build Tool    | Vite 6                              |
| Linting       | ESLint                              |
---
## Getting Started
### Prerequisites
- Node.js 18+ 
- npm or yarn
### Install
```bash
npm install
```
### Development
```bash
npm run dev
```
Opens at `http://localhost:5173`
### Production Build
```bash
npm run build
```
### Preview Production Build
```bash
npm run preview
```
### Lint
```bash
npm run lint
```
---
## Project Structure
```
portofolioku/
├── public/
├── src/
│   ├── assets/              # Images (project thumbnails, photos)
│   ├── components/
│   │   ├── About.tsx        # Bio section with social links
│   │   ├── Contact.tsx      # CTA with email & location
│   │   ├── Experience.tsx   # Work experience timeline
│   │   ├── Footer.tsx       # 3-column footer with links
│   │   ├── Hero.tsx         # Hero section with line-by-line text reveal
│   │   ├── LoadingScreen.tsx # Cinematic intro with "Enter" button + curtain transition
│   │   ├── Navbar.tsx       # Fixed nav with active route indicator
│   │   ├── PageTransition.tsx # Framer Motion page wrapper
│   │   ├── ProjectItem.tsx  # Expandable project card
│   │   ├── Projects.tsx     # Vertical project list
│   │   └── Skills.tsx       # Skill category cards with hover reveals
│   ├── data/
│   │   ├── experience.ts    # Experience entries
│   │   ├── projects.ts      # Project data (11 projects)
│   │   └── skills.ts        # Skill categories
│   ├── hooks/
│   │   └── useScrollReveal.ts # Scroll-triggered animation hook
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── ExperiencePage.tsx
│   │   ├── HomePage.tsx
│   │   ├── ProjectsPage.tsx
│   │   └── SkillsPage.tsx
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   ├── App.tsx              # Router + intro state management
│   ├── index.css            # Tailwind import, theme tokens, custom animations
│   └── main.tsx             # Entry point with font imports
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.js
```
---
## Features
- **Cinematic Intro** — Full-screen dark preloader with letter-by-letter "murguy" animation, film grain texture, and an "Enter" button. On click, curtain panels sweep in then split apart to reveal content.
- **Page Transitions** — Framer Motion AnimatePresence with fade + slide between routes.
- **Line-by-Line Hero** — Each line of the hero heading reveals sequentially with overflow clip animation.
- **Staggered Content Reveal** — Hero, navbar, and scroll indicator only animate after the intro is dismissed.
- **Multi-Page Routing** — 6 dedicated routes (Home, About, Projects, Experience, Skills, Contact).
- **Responsive Design** — Mobile-first with hamburger nav, adaptive typography via `clamp()`.
- **Minimalist Light Theme** — Warm off-white background (`#FAFAF8`), near-black text, teal accent.
---
## Color Palette
| Token             | Value     | Usage                     |
|-------------------|-----------|---------------------------|
| `--color-surface` | `#FAFAF8` | Page background           |
| `--color-surface-card` | `#F0F0EE` | Card backgrounds     |
| `--color-ink`     | `#1a1a1a` | Primary text              |
| `--color-accent`  | `#2DD4BF` | Accent (teal)             |
---
## Contact
- **Email:** dhimasnurhanindya@gmail.com
- **LinkedIn:** [linkedin.com/in/dhimasnp](https://www.linkedin.com/in/dhimasnp/)
- **Instagram:** [@murguy.jpg](https://instagram.com/murguy.jpg)