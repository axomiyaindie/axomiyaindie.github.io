# Axomiya Indie Portfolio

> **Building for Assam, for the Future.** 
> An independent developer's portfolio and blog, built to make high-quality information universally accessible in Assamese and English.

## 🚀 Features

- **Bilingual (English / Assamese):** One-click language toggle.
- **Dynamic Content:** Projects and blog posts are generated from Markdown files (`src/content/`).
- **Auto-Generated Dates:** Uses Git history to display the "Published" or "Updated" date on every post/project.
- **Meta AI Inspired Design:** Clean, light theme, mobile-first typography (Inter font).
- **Hero Carousel:** 3-slide animated carousel with full background images.
- **SEO & Social Sharing:** Dynamic Open Graph images for every project and blog post.
- **CI/CD:** Automatic deployment to GitHub Pages on every push.

## 🛠 Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Styling:** Vanilla CSS (Mobile-first, CSS Variables)
- **Font:** Inter (via Google Fonts)
- **Deployment:** GitHub Pages + GitHub Actions

## 📂 Project Structure

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