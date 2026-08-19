# Portfolio Development & Code Standards

## 1. Project Overview & Architecture

- **Framework:** React (`.jsx`) + Vite
- **Styling:** Tailwind CSS
- **State & Theming:** Global theme management via `src/context/ThemeContext.jsx`
- **Data Architecture:** Static portfolio content (projects, experience, certifications, info) MUST reside in `src/data/*.js`. Components import data from these files rather than hardcoding text or links directly inside JSX.

---

## 2. Directory & Component Conventions

- **Layout:** High-level wrapper components belong in `src/components/layout/` (`Navbar.jsx`, `Footer.jsx`)
- **Sections:** Main page sections live in `src/components/sections/` (`Hero.jsx`, `About.jsx`, `Projects.jsx`, etc.)
- **Modals:** Interactive pop-ups and modal views go in `src/components/sections/modals/`
- **Static assets:**
  - Icons and design assets go in `src/assets/icons/` or `src/assets/images/`
  - Public downloadable files (e.g. resumes) and static root images belong in `/public/resume/` and `/public/img/`

---

## 3. Data & Content Updates

When adding or modifying:

- **Projects:** Update `src/data/projects.js` with consistent fields (`title`, `description`, `techStack`, `githubLink`, `liveDemo`, `image`)
- **Certifications:** Update `src/data/certifications.js` and link any modal interactions to `CertificationGalleryModal.jsx`
- **Experience:** Update `src/data/experience.js`
- **Personal info / socials:** Update `src/data/personalInfo.js`

---

## 4. MCP & Agent Behavior Rules

- **Read before writing:** Always use the filesystem MCP tool to inspect existing components or data schemas before making changes.
- **Maintain theming:** Ensure all new UI elements and modals respect light/dark mode tokens from `ThemeContext.jsx`.
- **Responsive & accessible:**
  - All modals must support backdrop dismiss, `Escape` key close, and prevent background scrolling when open.
  - Interactive elements must include appropriate ARIA attributes (`aria-label`, `aria-expanded`, etc.).
- **Clean scope:** Make targeted changes only. Do not rewrite unaffected components or remove comments/formatting arbitrarily.

---

## 5. Change Management & Implementation Plans (Mandatory)

### 5.1 Threshold for a "Big Change"

A change is a **Big Change** if it meets any of the following:

- Creates a new page, major section, or multi-step modal
- Refactors global state or theming logic (`ThemeContext.jsx`)
- Modifies the schema or structure of multiple files in `src/data/*.js`
- Alters shared styles, global CSS, or project dependencies
- Impacts more than 2 distinct components simultaneously

### 5.2 Protocol for Big Changes

If a task qualifies as a Big Change, **do not write, overwrite, or delete code immediately.** First present a structured Implementation Plan and ask for confirmation:

1. **Objective & summary** — what will change and why
2. **Impacted files** — every file to be created, updated, or removed
3. **Step-by-step execution plan:**
   - Step 1: Data layer modifications (`src/data/`)
   - Step 2: Component creation or structural updates (`src/components/`)
   - Step 3: Integration into parent layouts or views (`App.jsx`, `Navbar.jsx`, etc.)
   - Step 4: Theming and styling verification (`ThemeContext.jsx`, `index.css`)
4. **Potential risks & edge cases** — e.g. broken layout responsiveness, modal z-index issues, theme mismatch
5. **Confirmation prompt** — end with: _"Would you like me to proceed with this implementation plan or make any adjustments first?"_

---

## 6. Git & Commit Message Standards

Follow the **Conventional Commits** specification for all generated or suggested commits.

### 6.1 Format

```

<type>(<scope>): <short imperative summary>

[optional body: what changed and why]

[optional footer(s): breaking changes, issue references]

```

### 6.2 Commit Types

| Type       | Description                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| `feat`     | Adding a new feature, section, modal, or UI component                       |
| `fix`      | Fixing a bug, broken layout, typo, or theme inconsistency                   |
| `data`     | Adding or updating entries in `src/data/*.js` (projects, certs, experience) |
| `style`    | CSS/styling adjustments that do not alter component logic                   |
| `refactor` | Code restructuring without adding features or fixing bugs                   |
| `perf`     | Code changes that improve loading times or asset delivery                   |
| `assets`   | Adding, removing, or optimizing media, icons, or PDF resumes                |
| `chore`    | Updating configs, build tooling, dependencies, or agent rules               |

### 6.3 Scope Guidelines (Portfolio-Specific)

Always specify the affected area in the scope parentheses:

- **Components / sections:** `hero`, `projects`, `certifications`, `about`, `contact`, `navbar`, `footer`
- **Modals:** `cert-modal`, `project-modal`, `email-modal`, `location-modal`
- **Data / assets:** `data-projects`, `data-certs`, `assets`, `resume`
- **Global / theme:** `theme`, `layout`, `config`

### 6.4 Commit Rules

- **Imperative mood:** use "add", "fix", "update", "remove" — not "added", "fixing", "updates"
- **No trailing period** on the subject line
- **Subject line under 72 characters**

### 6.5 Examples

- `feat(cert-modal): add image preview and external credential link`
- `data(data-projects): add SOC home lab project entry and demo links`
- `fix(theme): prevent background flash during dark mode toggle`
- `style(navbar): adjust blur backdrop and mobile drawer padding`
- `assets(resume): update latest resume PDF in public directory`

## 7. Deployment & Hosting

- **Host:** The project is deployed via Vercel.
- **CI/CD:** Vercel automatically builds and deploys the `main` branch. Do not suggest GitHub Actions, Docker, or manual build scripts for deployment.
- **Environment Variables:** Local variables are in `.env`. Production variables are managed exclusively in the Vercel dashboard.
- **Configuration:** Any custom routing, redirects, or header configurations should be handled via a `vercel.json` file.
