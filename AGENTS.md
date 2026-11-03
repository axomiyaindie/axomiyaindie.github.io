# AI Agent Instructions

This is an Astro project for Axomiya Indie. When making changes, follow the guidelines below for this repository.

## Development Commands

This project uses **`pnpm`** (not `npm` or `yarn`).

```sh
# Start the dev server (port 4321)
pnpm run dev

# Build for production
pnpm run build

# Preview the production build
pnpm run preview
```

## Architecture and Key Files

- **Built-in i18n Routing:** We use Astro's native `i18n` routing (`defaultLocale: 'en'`, `locales: ['en', 'as']`).
  - English is served at the root (e.g., `/`, `/about`, `/projects`, `/blog`).
  - Assamese is served under the `/as/` prefix (e.g., `/as/`, `/as/about`, `/as/projects`, `/as/blog`).
  - CSS-based language toggles (`.en-text`, `.as-text`, `.lang-as`) have been completely removed.
  - The language toggle in `src/components/header.astro` links directly between `/` and `/as/`.
  - `src/layouts/layout.astro` accepts a `lang` prop (`"en"` or `"as"`, default `"en"`), sets `<html lang={lang}>`, and passes it to `<Header />` and `<Footer />`.

- **Content Collections:**
  - Configured in `src/content.config.ts` using Astro's `glob` loader (`**/*.md`).
  - Content files are separated into language subdirectories:
    - Projects: `src/content/projects/en/` and `src/content/projects/as/`
    - Blog: `src/content/blog/en/` and `src/content/blog/as/`
  - Content IDs include the language prefix (e.g. `en/prepbuddy`, `as/prepbuddy`).
  - Pages filter content using `entry.id.startsWith('en/')` or `entry.id.startsWith('as/')`.
  - Schema contains single-language fields (`title`, `description`, `link`, `logo`, `image`). The legacy `_as` suffix fields are removed.

- **Dynamic Routes:**
  - English detail pages: `src/pages/projects/[slug].astro` and `src/pages/blog/[slug].astro`.
  - Assamese detail pages: `src/pages/as/projects/[slug].astro` and `src/pages/as/blog/[slug].astro`.
  - `getStaticPaths()` strips the locale prefix from the slug (e.g., `p.id.replace('en/', '')` or `p.id.replace('as/', '')`) so URLs remain clean (e.g., `/projects/prepbuddy/`, `/as/projects/prepbuddy/`).

- **Dynamic OG Image Generation:**
  - `src/pages/og/projects/[slug].png.ts` and `src/pages/og/blog/[slug].png.ts` generate social preview images dynamically using Satori and `@resvg/resvg-js`.

- **Smart Dates:** Detail pages use a Node.js script (`execSync('git log ...')`) in `getFileDates()` to fetch the "Published" (first commit) and "Updated" (latest commit) dates from Git history. Only one badge shows at a time.

- **Styling:** Tailwind CSS v4 configured via `@tailwindcss/vite` and `@import "tailwindcss";` in `src/styles/global.css`. Theme colors (like `--color-meta-blue`, `--color-text-main`, `--color-card-border`) are defined under `@theme`.

## Guidelines for Changes

1. **Filenames:** All filenames and import paths **must be lowercase**. We deploy to Linux (GitHub Actions), which is case-sensitive.
2. **Images:** Static assets (hero images, blog covers, project logos) go in the `public/` directory and are referenced with absolute paths (e.g., `/hero/jhapi.jpg`).
3. **Git Dates:** If you modify the date logic, make sure `fetch-depth: 0` remains in `.github/workflows/deploy.yml`. Without it, the Git dates will fail in CI.
4. **Font:** The site uses **Inter**, loaded via Google Fonts in `layout.astro`.
5. **i18n Consistency:** When creating or editing pages or content, always maintain parity across both English (`/` and `en/`) and Assamese (`/as/` and `as/`).

## Documentation References

- [Astro i18n Routing](https://docs.astro.build/en/guides/internationalization/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Dynamic Routing](https://docs.astro.build/en/guides/routing/)
- [Astro Components](https://docs.astro.build/en/basics/astro-components/)
