# murguy. — Portfolio

The personal portfolio of **Dhimas Nurhanindya Putra**, a full-stack software developer and Gadjah Mada University graduate based in Bantul, Yogyakarta. The site brings professional and volunteer experience, projects, education, skills, and contact links together in a responsive, single-page layout.

## Website

- **Notebook-inspired design:** ruled paper, warm colors, handwritten accents, and a mix of existing DM Sans and DM Serif Display with Inter, Caveat, Space Mono, and Press Start 2P.
- **Single-page navigation:** the top navigation scrolls to the Home, About, Projects, Experience, Skills, and Contact sections.
- **Project showcase:** select a project to view its description, technology stack, images, and available live or GitHub links.
- **Experience and education:** a timeline and education card, with the English Proficiency Test certification link.
- **Responsive and accessible interactions:** mobile navigation, keyboard focus styles, and reduced-motion support.
- **Content data:** portfolio entries are maintained in TypeScript files under `src/data/`.

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS 4, custom CSS tokens |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | DM Sans, DM Serif Display, Inter, Caveat, Space Mono, Press Start 2P |
| Build tool | Vite 6 |
| Linting | ESLint |

## Run Locally

Requires Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL when the server starts (usually `http://localhost:5173`).

```bash
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Project Structure

```text
src/
├── assets/       # Portfolio and project images
├── components/   # Page sections and shared UI
├── data/         # Experience, education, projects, and skills
├── hooks/        # Shared React hooks
├── types/        # TypeScript data interfaces
├── App.tsx       # Single-page portfolio composition
└── index.css     # Tailwind setup and notebook theme styles
tokens.css        # Color, typography, spacing, and motion tokens
index.html        # Document metadata and font loading
```

## Contact

- **Email:** [dhimasnurhanindya@gmail.com](mailto:dhimasnurhanindya@gmail.com)
- **Phone:** +62 823-2941-4146
- **LinkedIn:** [linkedin.com/in/dhimasnp](https://linkedin.com/in/dhimasnp/)
- **GitHub:** [github.com/keepurspiritbruv](https://github.com/keepurspiritbruv)
