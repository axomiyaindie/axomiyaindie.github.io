# How You Can Help

Whether or not you know how to code, there are several ways to contribute to this project. This guide is for everyone.

## Table of Contents

- [Ways to Help (No Code Required)](#ways-to-help)
- [For Developers (Setup and Contributing)](#for-developers)
- [Translation Guide](#translation-guide)
- [Project Structure](#project-structure)
- [How to Add Content](#how-to-add-content-for-the-project-team)
- [Testing Your Changes](#testing-your-changes)
- [Reporting Mistakes](#reporting-mistakes)
- [Suggesting Improvements](#suggesting-improvements)
- [What NOT to Do](#what-not-to-do)
- [Questions?](#questions)

---

## Ways to Help

Even if you've never written a line of code, you can help:

1. **Translate content** — Assamese ↔ English
2. **Report mistakes** — typos, broken links, wrong information
3. **Suggest improvements** — design, content, features
4. **Spread the word** — share the project with people who would find it useful

---

## For Developers

If you're comfortable with a terminal, here's how to set up the project and start making changes.

### Prerequisites

You'll need:

- **[Node.js](https://nodejs.org/)** (version 22 or newer — Astro requires it)
- **[pnpm](https://pnpm.io/)** (a package manager that is faster than npm)
- **[Git](https://git-scm.com/)** (version control)
- A text editor — **[VS Code](https://code.visualstudio.com/)** is recommended

Verify your setup:

```sh
node --version    # should print v22.x.x or higher
pnpm --version    # should print 9.x.x or higher
git --version     # should print git version 2.x.x
```

### Getting Started

1. **Fork the repository** — click the "Fork" button at the top right of the GitHub page.
2. **Clone your fork**:
   ```sh
   git clone https://github.com/YOUR_USERNAME/axomiyaindie.github.io.git
   cd axomiyaindie.github.io
   ```
3. **Install dependencies**:
   ```sh
   pnpm install
   ```
4. **Start the dev server**:
   ```sh
   pnpm run dev
   ```
   Open `http://localhost:4321` in your browser. Changes reload automatically.

### Making Changes

1. **Create a new branch** for your work:
   ```sh
   git checkout -b fix/update-blog-translation
   ```
2. **Make your changes** in your editor.
3. **Test locally**:
   ```sh
   pnpm run build
   ```
   If the build succeeds, you're good to go.
4. **Commit and push**:
   ```sh
   git add .
   git commit -m "Add Assamese translation for PrepBuddy"
   git push origin fix/update-blog-translation
   ```
5. **Open a Pull Request** on GitHub. The project owner will review it.

### Available Commands

| Command            | What it does                                  |
| :----------------- | :-------------------------------------------- |
| `pnpm install`     | Installs all dependencies                     |
| `pnpm run dev`     | Starts a local dev server at `localhost:4321` |
| `pnpm run build`   | Builds the site to `./dist/`                  |
| `pnpm run preview` | Previews the built site locally               |

---

## Translation Guide

The site needs Assamese and English versions of every post and project.

### Structure

```
src/content/projects/
├── en/
│   ├── prepbuddy.md
│   └── axomiyagpt.md
└── as/
    ├── prepbuddy.md
    └── axomiyagpt.md

src/content/blog/
├── en/
│   └── 02-11-26-first-blog.md
└── as/
    └── 02-11-26-first-blog.md
```

Each `.md` file has **frontmatter** (title, description) at the top, followed by the article body.

### Translating a Post

1. Find a file in `en/` that has no matching file in `as/`.
2. Copy the file and save it in `as/` with the **same filename**.
3. Translate:
   - `title` — the post title
   - `description` — a short summary
   - The body content below the `---`
4. Don't change `link`, `logo`, or `image`. Those stay the same.

**Example frontmatter:**

```markdown
---
title: "My First Blog Post"
description: "How I built this website using Astro."
image: "/blog/02-11-26-first-blog.png"
---
```

Don't worry about perfect grammar. Submit what you have, and we'll polish it together.

---

## Project Structure

```
/
├── public/                    # Static files (images, icons)
│   ├── hero/                  # Hero carousel images
│   ├── projects/              # Project logos
│   ├── blog/                  # Blog cover images
│   └── social/                # Social media icons
├── src/
│   ├── components/            # Reusable UI pieces
│   │   ├── header.astro       # Top navigation
│   │   ├── footer.astro       # Bottom section
│   │   └── hero.astro         # Landing carousel
│   ├── content/               # Markdown content
│   │   ├── projects/
│   │   │   ├── en/            # English projects
│   │   │   └── as/            # Assamese projects
│   │   └── blog/
│   │       ├── en/            # English blog posts
│   │       └── as/            # Assamese blog posts
│   ├── layouts/               # Page templates
│   │   └── layout.astro       # Main HTML shell
│   ├── pages/                 # All routes
│   │   ├── index.astro        # Homepage (English)
│   │   ├── about.astro        # About (English)
│   │   ├── 404.astro          # Not found page
│   │   ├── projects/          # English project pages
│   │   ├── blog/              # English blog pages
│   │   └── as/                # Assamese counterparts
│   ├── styles/
│   │   └── global.css         # Global styles
│   └── utils/
│       └── formatdate.ts      # Date formatting helper
└── package.json
```

### What each folder does

- **`public/`** — Files served as they are. Images go here.
- **`src/components/`** — Reusable Astro components (header, footer, etc.).
- **`src/content/`** — Markdown files. Each has an `en/` (English) and an `as/` (Assamese) version.
- **`src/layouts/`** — Wraps every page. Loads fonts and applies global styles.
- **`src/pages/`** — Each file becomes a URL. For example, `blog/index.astro` becomes `/blog/`. The `as/` folder mirrors everything in Assamese.
- **`src/styles/`** — Global CSS (colors, typography, layout).
- **`src/utils/`** — Helper functions shared across pages.

---

## How to Add Content (for the project team)

### Add a New Blog Post

1. Create `src/content/blog/en/your-post-title.md`.
2. Create `src/content/blog/as/your-post-title.md` (the Assamese translation).
3. Add a cover image to `public/blog/` (optional).
4. Fill in the frontmatter:
   ```markdown
   ---
   title: "My Post Title"
   description: "A short summary of what this post is about."
   image: "/blog/your-image.png"
   ---
   ```
5. Write the body below the `---`.
6. Build locally: `pnpm run build`.
7. Commit and push.

### Add a New Project

1. Create `src/content/projects/en/project-name.md`.
2. Create `src/content/projects/as/project-name.md` (the Assamese translation).
3. Add a logo to `public/projects/`.
4. Fill in the frontmatter:
   ```markdown
   ---
   title: "Project Name"
   description: "What this project does."
   link: "https://github.com/axomiyaindie/project-name"
   logo: "/projects/project-name.png"
   ---
   ```
5. Write the body below the `---`.
6. Commit and push.

---

## Testing Your Changes

Before submitting a pull request, **always test locally**:

1. **Build the site**:
   ```sh
   pnpm run build
   ```
   You should see `Complete!` with no errors.

2. **Preview the build**:
   ```sh
   pnpm run preview
   ```
   Open `http://localhost:4321`. This serves the *built* version, not the dev version.

3. **Check both languages**:
   - Open `/` (English).
   - Open `/as/` (Assamese).
   - Click the language toggle to make sure it switches correctly.

4. **Check the 404 page**:
   - Visit `http://localhost:4321/blog/nonexistent-post`. It should show the friendly 404 page.

If everything looks good, commit and push.

---

## Reporting Mistakes

Spotted a typo, a broken link, or wrong information?

1. Open a [new issue](https://github.com/axomiyaindie/axomiyaindie.github.io/issues) on GitHub.
2. Describe what's wrong and where you found it.

You don't need a GitHub account to read issues, but you need one to post. Creating an account takes about 30 seconds.

---

## Suggesting Improvements

Have an idea for the design, a feature, or the content?

- Open an [issue](https://github.com/axomiyaindie/axomiyaindie.github.io/issues) with a clear description.
- Or start a [discussion](https://github.com/axomiyaindie/axomiyaindie.github.io/discussions).

Even small ideas matter.

---

## What NOT to Do

- Don't paste content from other websites without permission (copyright).
- Don't add sensitive or private information.
- Don't add spammy links or ads.
- Don't change the site's fundamental structure without discussing it first.
- Don't commit broken builds. Always run `pnpm run build` before pushing.
- Don't use uppercase filenames. Linux is case-sensitive.

---

## Questions?

If you're stuck or unsure about anything, open an issue or message the project owner on [X (Twitter)](https://x.com/AxomiyaIndie) or [GitHub](https://github.com/axomiyaindie).

We're here to help. Every contribution, no matter how small, makes this project better.

---

*This project is small and made with love. Thank you for reading this far.* 🙏