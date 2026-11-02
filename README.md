# Axomiya Indie Portfolio

> **Building for Assam, for the Future.** 
> An independent developer's portfolio and blog, built to make high-quality information universally accessible in Assamese and English.

## Features

- **Bilingual (English / Assamese):** One-click language toggle.
- **Dynamic Content:** Projects and blog posts are generated from Markdown files (`src/content/`).
- **Auto-Generated Dates:** Uses Git history to display the "Published" or "Updated" date on every post/project.
- **Meta AI Inspired Design:** Clean, light theme, mobile-first typography (Inter font).
- **Hero Carousel:** 3-slide animated carousel with full background images.
- **SEO & Social Sharing:** Dynamic Open Graph images for every project and blog post.
- **CI/CD:** Automatic deployment to GitHub Pages on every push.

## Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Styling:** Vanilla CSS (Mobile-first, CSS Variables)
- **Font:** Inter (via Google Fonts)
- **Deployment:** GitHub Pages + GitHub Actions

## Project Structure

```text
/
├── public/              # Static assets (logos, images, social icons)
├── src/
│   ├── components/      # Reusable UI (Header, Footer, Hero Carousel)
│   ├── content/         # Markdown files for Projects and Blog
│   │   ├── blog/        # e.g., 02-11-26-first-blog.md
│   │   └── projects/    # e.g., prepbuddy.md
│   ├── layouts/         # Base HTML shell & SEO tags
│   ├── pages/           # Routing (Home, /projects, /blog, /about)
│   ├── styles/          # Global CSS variables and typography
│   └── utils/           # Shared logic (e.g., date formatting)
└── package.json
```

## How to Add Content

**To add a new Blog Post:**
1. Create a file in `src/content/blog/` named `DD-MM-YY-title.md`.
2. Add the frontmatter (`title`, `title_as`, `description`, `description_as`, `image`).
3. Add your cover image to `public/blog/`.
4. Write your content below the `---`.
5. Push to GitHub.

**To add a new Project:**
1. Create a file in `src/content/projects/` named `project-name.md`.
2. Add the frontmatter (`title`, `title_as`, `description`, `description_as`, `link`, `logo`).
3. Add the logo to `public/projects/`.
4. Push to GitHub.

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm run dev`            | Starts local dev server at `localhost:4321`      |
| `pnpm run build`          | Build your production site to `./dist/`          |
| `pnpm run preview`        | Preview your build locally, before deploying     |

## Connect

- **Website:** [axomiyaindie.github.io](https://axomiyaindie.github.io)
- **GitHub:** [@axomiyaindie](https://github.com/axomiyaindie)
- **X (Twitter):** [@AxomiyaIndie](https://x.com/AxomiyaIndie)