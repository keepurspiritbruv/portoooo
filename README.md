# murguy. — Portfolio
Personal portfolio website of **Dhimas Nurhanindya Putra**, a Full-stack Software Developer and Gadjah Mada University graduate based in Bantul, Yogyakarta.
The site presents professional and volunteer experience, academic work, projects, skills, and contact details in a single-page layout.
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
│   │   ├── experience.ts    # Professional, academic, volunteer, and leadership entries
│   │   ├── education.ts     # Education and achievement data
│   │   ├── projects.ts      # Project data
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
- **Single-page portfolio** — The navigation links scroll to sections on one page.
- **Automatic Intro** — An animated opening transitions into the portfolio.
- **Scroll Reveals** — Sections and project cards animate as they enter view.
- **Expandable Projects** — Project details, available screenshots, and links appear when a project is opened.
- **Responsive Design** — Mobile-first with hamburger nav, adaptive typography via `clamp()`.
- **Notebook-inspired Theme** — Warm paper tones, near-black text, and yellow accents.
---
## Color Palette
| Token             | Value     | Usage                     |
|-------------------|-----------|---------------------------|
| `--color-surface` | `#FAF9F6` | Page background           |
| `--color-surface-card` | `#FFFEFA` | Card backgrounds     |
| `--color-ink`     | `#191A18` | Primary text              |
| `--color-accent`  | `#F7CB45` | Accent (yellow)           |
---
## Contact
- **Email:** [dhimasnurhanindya@gmail.com](mailto:dhimasnurhanindya@gmail.com)
- **Phone:** +62 823-2941-4146
- **LinkedIn:** [linkedin.com/in/dhimasnp](https://linkedin.com/in/dhimasnp/)
- **GitHub:** [github.com/keepurspiritbruv](https://github.com/keepurspiritbruv)
