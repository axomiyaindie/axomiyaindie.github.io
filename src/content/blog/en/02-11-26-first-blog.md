---
title: "Post #1: Why I Built This Site"
description: "Why I built my own corner of the internet, the problems I faced, and how Astro, GitHub Actions, Git history, and four AI coding assistants helped me ship it fast."
link: "https://youtube.com/@axomiyaindie"
image: "/blog/02-11-26-first-blog.png"
---

## Why I built this

For a long time, I didn't have a central place to show what I was building. My projects were scattered across GitHub, my thoughts were lost in Twitter threads, and I wanted a space that was truly my own: free from algorithms, ads, and distractions.

But there was a bigger reason: **language**.

Assam is rich in culture and language, but the internet is overwhelmingly English-first. I wanted a site that treats Assamese and English as equals. Not as an afterthought, and not as a "translate" button that spits out broken grammar, but as a first-class citizen from day one.

So I set out to build a personal site that:

- **Lists all my projects** in one clean, accessible place.
- **Works natively in both English and Assamese**, with proper URLs and no cheap tricks.
- **Shows real dates** without me typing "Published on..." every time.
- **Deploys automatically** whenever I push, so I can focus on writing, not deploying.
- **Gets built fast**, because an idea that takes six months to ship usually never ships.

## The stack (and why I chose it)

I didn't want a heavy CMS like WordPress. I didn't want a bloated React single-page app. I wanted speed, simplicity, and the ability to write in plain Markdown.

Here is what this site runs on.

### 1. Astro: the framework

[Astro](https://astro.build) is the core. I chose it because it ships **zero JavaScript by default**. When you visit a page, you get pure HTML and CSS: fast, SEO-friendly, and accessible.

I also use Astro's **Content Collections**. Every blog post and project is just a `.md` file in a folder. Astro reads the frontmatter (the part between the `---` lines) and generates the pages for me.

### 2. Tailwind CSS: the styling

I started with plain CSS, but as the site grew, I was drowning in custom classes. I migrated to **[Tailwind CSS v4](https://tailwindcss.com/)**, which lets me style everything directly in the HTML with utility classes like `bg-meta-blue` or `text-text-main`. The design stays consistent and the codebase stays clean.

### 3. i18n routing: the bilingual engine

This was the hardest part. I didn't want a simple JavaScript toggle that swaps text on the fly. I wanted **real, separate URLs**:

- English lives at `axomiyaindie.github.io/`
- Assamese lives at `axomiyaindie.github.io/as/`

The header has a language switcher that keeps you on the same page when you change languages (for example, from `/blog/post-1` to `/as/blog/post-1`).

### 4. GitHub Actions: the deployment pipeline

Every time I push a commit, a robot wakes up. It installs the dependencies, builds the static site, and deploys it to GitHub Pages. The whole process takes about 60 seconds, and I never deploy by hand.

### 5. Git log: the smart dates

I didn't want to type `date: "2026-11-02"` into every Markdown file. It's easy to get wrong, and I always forget. Instead, I wrote a small Node.js script that runs during the build. It uses `execSync('git log ...')` to read the real Git history of each file:

- If the file has only one commit, it shows **"Published on [first commit date]"**.
- If the file has been updated since, it switches to **"Updated on [last commit date]"**.

### 6. The design

The design is heavily inspired by the **Meta AI Blog**: clean typography (the Inter font), plenty of white space, and a focus on readability. The hero section is a custom carousel built with pure CSS and a tiny bit of vanilla JavaScript.

### 7. AI coding assistants: my co-pilots

I'm an independent developer, so I don't have a team. What I do have is a set of AI assistants that helped me turn this idea into a working site in a short time:

- **Claude**: planning the structure, writing and reviewing code, and polishing text.
- **ChatGPT**: brainstorming, quick fixes, and explaining errors.
- **Google Gemini**: a second opinion and a different angle when I was stuck.
- **DeepSeek**: more code help and cross-checking solutions.

Using several of them was useful because each one thinks a little differently. When one gave me a weak answer, another often gave me a better one.

One rule I followed: **AI writes drafts, I make decisions.** I read and tested every change, and I fixed the things they got wrong. The ideas, the mission, and the responsibility for the site are mine. The AI just made it possible to build in days what might have taken weeks.

## What I learned

1. **Linux is case-sensitive.** A file named `Layout.astro` works on Windows but breaks your build on GitHub Actions. Keep everything lowercase.
2. **Bilingual sites are hard.** Handling missing translations gracefully, with a custom 404 page that offers the other language, is crucial.
3. **Automation saves time.** Once the Git dates and GitHub Actions were set up, I stopped thinking about deployment entirely.
4. **AI is a multiplier, not a replacement.** It speeds you up when you know what you want to build. It doesn't decide that for you.

## What's next?

This site is a living project. I'll keep adding projects, writing more, and completing the Assamese translations of every post.

If you want to see how it's built, the entire codebase is open source on [GitHub](https://github.com/axomiyaindie/axomiyaindie.github.io). Feel free to fork it, translate it, or just say hi.

*Built with love from Assam.*