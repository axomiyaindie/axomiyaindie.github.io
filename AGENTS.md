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

- **Content Collections:** Markdown files in `src/content/blog/` and `src/content/projects/` drive the site.
- **Dynamic Routes:** `src/pages/projects/[slug].astro` and `src/pages/blog/[slug].astro` generate detail pages from the Markdown files.
- **Bilingual (EN/AS):** We do *not* use Astro's built-in i18n routing. Instead, we use the CSS classes `.en-text` (English) and `.as-text` (Assamese). A script in `layout.astro` toggles them by adding `.lang-as` to the `<body>` tag.
- **Smart Dates:** Detail pages use a Node.js script (`execSync('git log ...')`) to fetch the "Published" (first commit) and "Updated" (latest commit) dates from the Git history. Only one badge shows at a time.
- **Styling:** Pure CSS in `src/styles/global.css`. We use CSS variables for colors and `clamp()` for responsive typography.

## Guidelines for Changes

1. **Filenames:** All filenames and import paths **must be lowercase**. We deploy to Linux (GitHub Actions), which is case-sensitive.
2. **Images:** Static assets (hero images, blog covers, project logos) go in the `public/` directory and are referenced with absolute paths (e.g., `/hero/jhapi.jpg`).
3. **Git Dates:** If you modify the date logic, make sure `fetch-depth: 0` remains in `.github/workflows/deploy.yml`. Without it, the Git dates will fail in CI.
4. **Font:** The site uses **Inter**, loaded via Google Fonts in `layout.astro`.

## Documentation References

- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Dynamic Routing](https://docs.astro.build/en/guides/routing/)
- [Astro Components](https://docs.astro.build/en/basics/astro-components/)