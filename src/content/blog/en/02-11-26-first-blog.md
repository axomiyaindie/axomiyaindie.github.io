---
title: "My First Blog Post: Why I Built This Site"
description: "A deep dive into why I built my own corner of the internet, the problems I faced, and how Astro, GitHub Actions, and a bit of bash scripting made it happen."
link: "https://youtube.com/@axomiyaindie"
image: "/blog/02-11-26-first-blog.png"
---

## Why I built this

For a long time, I didn't have a central place to showcase what I was building. My projects were scattered across GitHub, my thoughts were lost in Twitter threads, and I wanted a space that was truly my own—free from algorithms, ads, and distractions.

But there was a bigger reason: **language**. 

Assam is rich in culture and language, but the internet is overwhelmingly English-first. I wanted to build a site that treated Assamese and English as equals. Not as an afterthought, not as a "translate" button that spits out broken grammar, but as a first-class citizen from day one.

So, I set out to build a personal site that:
- **Lists all my projects** in one clean, accessible place.
- **Works natively in both English and Assamese**, with proper URLs (no cheap CSS tricks).
- **Shows real dates** without me having to manually type "Published on..." every time.
- **Deploys automatically** whenever I push, so I can focus on writing, not deploying.

## The stack (and why I chose it)

I didn't want a heavy CMS like WordPress. I didn't want a bloated React Single Page App. I wanted speed, simplicity, and the ability to write in plain Markdown.

Here is exactly what this site runs on:

### 1. Astro (The Framework)
[Astro](https://astro.build) is the core. I chose it because it ships **zero JavaScript by default**. 
When you visit a page, it's just pure HTML and CSS. Fast, SEO-friendly, and accessible. 

I also used Astro's **Content Collections**. This means every blog post and project is just a `.md` file in a folder. Astro reads the frontmatter (the stuff between the `---`) and generates the pages for me.

### 2. Tailwind CSS (The Styling)
I started with plain CSS, but as the site grew, I was drowning in custom classes and inline styles. 
I migrated everything to **[Tailwind CSS v4](https://tailwindcss.com/)**. It allows me to style everything directly in the HTML using utility classes (like `bg-meta-blue` or `text-text-main`). It keeps the design consistent and the codebase incredibly clean.

### 3. i18n Routing (The Bilingual Engine)
This was the hardest part. I didn't want a simple JavaScript toggle that swaps text on the fly. I wanted **real, separate URLs**.
- English is at `axomiyaindie.github.io/`
- Assamese is at `axomiyaindie.github.io/as/`

I achieved this by duplicating the pages into an `as/` folder and using Astro's built-in i18n routing. The header has a language switcher that intelligently keeps you on the same page when you switch languages (e.g., from `/blog/post-1` to `/as/blog/post-1`).

### 4. GitHub Actions (The CI/CD Pipeline)
Every time I push a commit to GitHub, a robot wakes up. 
It installs the dependencies, builds the static site, and deploys it to GitHub Pages. The whole process takes about 60 seconds. I never have to manually deploy the site.

### 5. Git Log (The Smart Dates)
I didn't want to manually type `date: "2026-11-02"` in my Markdown files. It's prone to error, and I always forget.
Instead, I wrote a small Node.js script that runs during the build. It uses `execSync('git log ...')` to look at the actual Git history of the file. 
- If the file has only one commit, it shows **"Published on [First Commit Date]"**.
- If the file has been updated since, it automatically switches to **"Updated on [Last Commit Date]"**.

### 6. The Design
The design is heavily inspired by the **Meta AI Blog**. Clean typography (using the Inter font), plenty of white space, and a focus on readability. The hero section is a custom carousel built with pure CSS and a tiny bit of vanilla JavaScript.

## What I learned

1. **Linux is case-sensitive.** A file named `Layout.astro` works fine on Windows, but will break your build on GitHub Actions. Everything must be lowercase.
2. **Bilingual sites are hard.** Handling missing translations gracefully (with a custom 404 page that offers the other language) is crucial.
3. **Automation saves time.** Once the Git dates and GitHub Actions were set up, I stopped thinking about deployment entirely.

## What's next?

This site is a living project. I'll be adding more projects, writing more thoughts, and maybe even adding a full Assamese blog translation soon. 

If you want to see how it's built, the entire codebase is open-source on [GitHub](https://github.com/axomiyaindie/axomiyaindie.github.io). Feel free to fork it, translate it, or just say hi.

*Built with love from Assam.*