---
title: "PrepBuddy"
description: "A full-stack EdTech platform for competitive exam preparation in Assam — monorepo, multi-client, production-grade from day one."
link: "https://github.com/axomiyaindie/prepbuddy"
logo: "/projects/prepbuddy.png"
---

# PrepBuddy — Building a Production-Grade EdTech Platform for Assam

When I set out to build PrepBuddy, I had one rule: no shortcuts that would hurt students in six months. Assam has hundreds of thousands of aspirants preparing for exams like Assam Police SI, ADRE, and APSC — and they deserve software that is fast, reliable, and built to last. This post documents every major engineering decision, what I built, why I built it that way, and what I learned.

---

## The Problem

Exam preparation in Assam is fragmented. Students switch between a YouTube channel for video lectures, a Telegram group for PDFs, a random website for MCQs, and a WhatsApp group for job notifications. There is no single, structured platform that combines curriculum-aligned practice, timed mock tests, video courses, career opportunity tracking, and a native mobile experience — while understanding the regional context of Assamese students.

PrepBuddy is my attempt to fix that.

---

## What PrepBuddy Does

PrepBuddy is a unified learning and exam preparation platform. Here is what a student can do on it today:

**Curriculum & Practice**
A student picks an exam — say, ADRE Grade III — and gets a structured breakdown of its syllabus into Subjects and Topics. Under each topic, they find a curated bank of previous-year questions (PYQs) and original MCQs with explanations. The question engine supports single-choice, multiple-choice, true/false, numerical, image-based, case-based, matching, and ordering question types.

**Mock Tests**
Students can take full-length timed mock tests simulating official exam conditions. The engine supports three modes: `practice` (untimed, instant feedback), `timed` (overall countdown), and `full_length` (strict exam simulation with negative marking). After submission, they see a detailed result card with score, platform rank, percentile, and category-wise breakdowns.

**Video Courses & Skills**
Instructors can publish structured video courses (modules → lessons) and hands-on skill tracks (step-by-step competency paths with completion certificates). Students purchase these through a cart and checkout flow backed by Razorpay and Stripe.

**Opportunity Tracker**
The platform aggregates verified government vacancies, private jobs, apprenticeships, and internships. Students get automated push notification reminders when application deadlines are 3, 2, 1, or 0 days away — handled by a daily scheduled job.

**Instructor Ecosystem**
Approved instructors author and publish content from within the same student app — there is no separate instructor portal. Earnings are tracked per enrollment and disbursed automatically every month via RazorpayX direct-to-bank transfers.

---

## Architecture Overview

PrepBuddy is a full-stack monorepo managed with **pnpm workspaces** and **Turborepo**. Every application — web, admin, and mobile — shares types, a database client, and a single backend API.

```
prepbuddy/
├── apps/
│   ├── web/         Next.js 16 — student and instructor web portal
│   ├── admin/       Next.js 16 — staff CMS and operations panel
│   └── mobile/      Flutter — native Android student app
├── services/
│   └── api/         NestJS 12 — central REST API, /api/v1
└── packages/
    ├── database/    Drizzle ORM — schema, migrations, seeds
    └── types/       Shared TypeScript interfaces and DTOs
```

The build dependency chain is strict: `packages/database` compiles first, then `packages/types`, and then all consumer applications. Turborepo's pipeline caching means this only re-runs when files actually change.

**One backend, three clients.** There is no duplication of business logic. The web app, admin panel, and Flutter app all call the same NestJS API over HTTP. The database is the single source of truth for user progress, purchases, enrollments, and permissions.

---

## The Tech Stack — With Real Versions

I want to be specific here because version details matter and most portfolio posts are vague.

| Layer | What I Used | Version |
|---|---|---|
| Student Web | Next.js App Router, React, Tailwind CSS v4, shadcn/ui, TipTap, KaTeX | Next.js 16.4.1 / React 19.2.8 |
| Admin Panel | Next.js App Router, React, Tailwind CSS v4, shadcn/ui, TipTap | Next.js 16.4.1 / React 19.2.8 |
| Mobile | Flutter, Dart, Riverpod, GoRouter, Dio | Dart SDK ^3.13.0 |
| Backend API | NestJS, TypeScript, Passport JWT, class-validator | NestJS 12.2.0 |
| ORM & Migrations | Drizzle ORM, Drizzle Kit | drizzle-orm 0.45.3 / drizzle-kit 0.31.11 |
| Database | PostgreSQL | 17 (docker: postgres:17-alpine) |
| Object Storage | Cloudflare R2 via AWS SDK v3 | @aws-sdk/client-s3 ^3.1157.0 |
| Antivirus | ClamAV sidecar (Docker) | clamav:stable |
| Authentication | Argon2, Passport JWT, HttpOnly cookies, Google OAuth | argon2 ^0.45.1 |
| Push Notifications | Firebase Cloud Messaging, firebase-admin | firebase-admin ^13.10.0 |
| Student Payments | Razorpay (INR), Stripe (USD) | razorpay ^2.9.8 |
| Instructor Payouts | RazorpayX (NEFT/UPI direct transfer) | razorpayx-sdk ^0.1.1 |
| Email | Nodemailer via Resend SMTP | nodemailer ^10.2.0 |
| Monorepo Tooling | pnpm workspaces, Turborepo | pnpm 10.34.2 / turbo ^2.11.10 |
| Testing (API & Web) | Vitest, Supertest, React Testing Library | vitest ^4.1.12 |
| Linting (API) | oxlint | oxlint ^1.89.0 |

---

## The Database — 90+ Tables Across 33 Migrations

The database schema is the most important technical decision in this project. I designed it to be genuinely exam-agnostic from day one.

### The Content Hierarchy

Instead of hardcoding "Assam Police" anywhere, every piece of content flows through a five-tier hierarchy:

```
Education Category (Competitive Exams, School Boards)
  └── Education Level (Graduate Level, 10th Standard)
        └── Exam (Assam Police SI, ADRE Grade III, APSC CCE)
              └── Subject (General Knowledge, Mathematics)
                    └── Topic (Assam History, Ratio & Proportion)
                          ├── Questions / Practice Sets
                          └── Mock Tests
```

Adding UPSC, NEET, or any state-level exam in the future requires zero schema changes — just seed data.

### Commerce Schema

The payment system spans eight tables: `commerce_orders`, `commerce_order_items`, `commerce_payment_attempts`, `payments`, `cart_items`, `coupons`, `coupon_redemptions`, `scholarship_programs`, and `scholarship_applications`. Every monetary amount is stored in integer paisa/cents. The `commerce_orders` table enforces idempotency via a unique `idempotency_key` column, so a retry from the client never creates a duplicate order.

### RBAC Schema

Permissions are fully dynamic. There are five tables: `roles`, `permissions`, `role_permissions`, `user_roles`, and `user_permissions`. Permissions follow a dot-notation key format like `commerce.coupon.manage` or `question.manage`. A new permission can be created and granted to a role at runtime without a code deploy. Users can also hold multiple roles — a student can be a simultaneously approved instructor — and switch their active role context via a single API call.

---

## The API — NestJS 12 Modular Monolith

The API lives in `services/api` and exposes all routes under the global prefix `/api/v1`. It is organized into 27 feature modules under `src/v1/`.

### Guard Architecture

Every protected route passes through a sequential three-tier guard stack:

```
Request → JwtAuthGuard → RolesGuard → PermissionsGuard → Controller
```

`JwtAuthGuard` validates the Bearer token or HttpOnly cookie. `RolesGuard` checks the active role claim in the JWT. `PermissionsGuard` checks the `@RequirePermissions()` decorator on the handler against the user's role and direct permission grants.

File upload routes additionally pass through `FileScanGuard`, which streams the multipart buffer through a ClamAV TCP socket before allowing the upload to proceed to Cloudflare R2.

### Authentication

I implemented four authentication methods:

**Email & Password** — Registration and login with Argon2-hashed passwords. Access tokens live 15 minutes; refresh tokens live 30 days and are stored HttpOnly with `SameSite=Strict`. Every active refresh token is hashed and tracked in `user_sessions`, so a password change can instantly revoke all sessions.

**Google OAuth (Web)** — Standard Passport `GoogleOAuthGuard` browser redirect flow.

**Google OAuth (Mobile)** — Flutter handles Google Sign-In natively on-device and forwards the Firebase-verified `idToken` to `POST /api/v1/auth/google`. The backend validates it via `firebase-admin`, no browser redirect needed.

**Magic Links** — `POST /api/v1/auth/magic-link/request` sends a time-limited token by email. The link deep-links into the Flutter app via Android App Links. Web users consume it at `/auth/magic`.

### Scheduled Background Jobs

Two cron schedulers run in-process via `@nestjs/schedule`:

**`JobsScheduler`** fires every day at 9 AM IST. It queries the database for published opportunities with application deadlines exactly 3, 2, 1, or 0 days ahead, then dispatches personalized FCM push notifications to subscribed students.

**`MonthlyPayoutScheduler`** fires on the 1st of every month at 2 AM IST (`0 2 1 * *`). It processes each eligible instructor's pending earnings ledger and initiates a direct-to-bank RazorpayX payout. The RazorpayX webhook (`payout.processed`, `payout.failed`, `payout.reversed`) reconciles the ledger asynchronously.

---

## File Storage & Antivirus

I designed a bifurcated upload pipeline to balance security and performance:

**Small files (≤ 50 MB)** — Multipart uploads hit the NestJS API, stream through ClamAV via `FileScanGuard`, and are stored in Cloudflare R2 with a `PutObjectCommand`. The client gets back a permanent public URL.

**Large files (> 50 MB, up to 4 GB)** — The client requests a presigned PUT URL from the API. The API validates the MIME type and size cap, generates a 4-hour presigned URL via `@aws-sdk/s3-request-presigner`, and the client uploads binary data directly to R2. The API never sees the file bytes, so there is no memory pressure from large video uploads.

Object keys follow a deterministic structure:
```
{folder}/{userId}/{uuid}.{ext}
```

This makes it trivial to enumerate or revoke a user's uploaded files if necessary.

---

## The Mobile App — Flutter with Riverpod

The Android app is a feature-first Flutter application. Every feature lives under `lib/features/` with its own screens, providers, and widgets:

- `auth/` — Login, registration, Google sign-in, magic link deep link handler
- `catalog/` — Skills and courses browsing (explicitly separate UI — skills feel like a do-the-work path; courses feel like a traditional catalog)
- `exams/` — Exam detail, subject drill-down, topic viewer
- `mock_tests/` — Catalog, session screen with question navigator, result card with percentile
- `practice/` — Practice question sets with instant answer validation
- `learning/` — Video, PDF, audio, text, and quiz lesson renderers unified in a single player
- `commerce/` — Cart, checkout, Razorpay Flutter SDK integration
- `opportunities/` — Job listings with deadline countdown
- `notifications/` — In-app inbox and FCM background message handler
- `instructor/` — Embedded via a sub-package (`apps/mobile/packages/instructor`) sharing the parent app's authenticated Dio client

State management uses Riverpod throughout. HTTP is handled by Dio with an interceptor that injects the Bearer token from `FlutterSecureStorage` on every request and handles 401 → token refresh transparently.

The Android emulator on Windows + AMD GPU had persistent white-screen rendering failures (`Gralloc4 format unsupported` in eglStream). I switched to physical device development via USB ADB early in the project and documented the exact setup in `apps/mobile/docs/DEV_SETUP.md` so future contributors hit the ground running.

---

## The Admin Panel — Next.js 16 App Router

The admin panel is a separate Next.js 16 application on port 3002. It shares zero session storage with the student web app — separate cookie names, separate JWT secrets, separate Tailwind config.

Route protection uses Next.js Middleware and server-side session verification. All routes under `/admin/(authed)/**` require a valid `prepbuddy_admin_access` cookie verified by the same JWT secret configured in the API.

The panel covers:
- User management with role and permission editors
- Question bank — create, edit, bulk import via CSV/JSON
- Mock test builder — assign questions, set scoring rules
- Course and skill content review queue for instructor submissions
- Commerce — coupon builder, order tracking, scholarship program management
- Refund workflow — review, approve, or reject with entitlement revocation
- Instructor payout oversight — view pending ledger, manually trigger payouts
- Audit log — every admin action records actor ID, IP, target entity, and a diff payload

---

## Payments — Three Layers

Payments in PrepBuddy are deliberately separated into three distinct subsystems:

**Student Checkout (Razorpay / Stripe)**
An order goes through a strict state machine: `pending_payment → paid → refunded`. Idempotency keys prevent duplicate orders on retry. Razorpay signature verification uses HMAC-SHA256 over the raw `razorpay_order_id|razorpay_payment_id` string. Stripe webhook events are verified against the raw request buffer. `PAYMENT_PROVIDER=disabled` mode disables all payment processing for local dev without needing test credentials.

**Scholarship Grants**
Students can apply for scholarship access to specific courses or skills. Staff review applications, and approval automatically creates an entitlement without a payment transaction.

**Instructor Payouts (RazorpayX)**
This is the most complex piece. Every course enrollment or sale accrues a ledger entry in `instructor_earnings_ledger`. On the 1st of each month, the scheduler aggregates pending earnings above the minimum payout threshold (configurable via `RAZORPAYX_MIN_PAYOUT_PAISE`) and initiates a RazorpayX fund transfer to the instructor's verified bank account. The payout status is reconciled asynchronously via the RazorpayX webhook.

---

## Security — Defence in Depth

**Dependency overrides** — `pnpm-workspace.yaml` pins several transitive dependencies to patched versions: `multer ≥ 2.5.0` (DoS fix), `postcss ≥ 8.5.23`, `undici ≥ 6.28.1`, `gaxios>uuid ≥ 11.1.1`. These are enforced at install time for every developer.

**HTTPS enforcement** — If `PAYMENT_MODE=live` is set, the API crashes at boot if `API_BASE_URL` or `WEB_APP_URL` uses `http://`. This prevents accidentally running production in plaintext.

**Antivirus on every multipart upload** — `FileScanGuard` streams the buffer to ClamAV via TCP socket before any file reaches R2. Infected files are rejected with a `400` and never stored.

**Audit logging** — Every admin action — user suspension, role change, scholarship decision, coupon creation — records the actor ID, target entity, client IP address, and a change payload in `audit_logs`. This cannot be bypassed; it is enforced in the service layer, not the controller.

**Cookie isolation** — Student and admin sessions use entirely separate cookie names and are scoped to separate domains, so a student's compromised session cannot escalate to admin access.

---

## Content Model — Exam-Agnostic By Design

Every slug is a first-class URL citizen. Public content maps cleanly to SEO-friendly URLs:

| Content | URL Pattern |
|---|---|
| Exam | `/exams/assam-police-si` |
| Subject | `/exams/assam-police-si/subjects/general-knowledge` |
| Topic | `.../topics/assam-history` |
| Course | `/courses/complete-assam-gk-masterclass` |
| Skill | `/skills/frontend-development` |
| Mock Test | `/mock-tests/adre-full-mock-1` |
| Opportunity | `/opportunities/apsc-cce-2026-recruitment` |
| Blog | `/blog/how-to-prepare-for-adre-2026` |

The web app uses Next.js `generateMetadata()` on every dynamic page, with Open Graph images, `JobPosting` and `Course` JSON-LD structured data, and a dynamically generated sitemap at `/sitemap.xml` querying published slugs from the API.

---

## What I'd Do Differently

**Rate limiting from day one.** I deferred `@nestjs/throttler` on public auth and search endpoints. It is the first thing I will wire before the public launch. Building it in after the fact is more work than it would have been upfront.

**Vitest fixtures for the API.** Unit tests exist, but the integration test coverage against a real PostgreSQL instance is thin. A proper test database lifecycle — seed, test, rollback — would catch data integrity bugs that unit mocks miss.

**Type-safe API client.** The web and mobile apps make raw HTTP calls with manually typed response interfaces. Moving to a generated client from OpenAPI or `ts-rest` would eliminate an entire class of client-server type drift bugs.

**ClamAV startup time.** The ClamAV container takes up to 3 minutes to finish loading virus definitions before it starts accepting connections (`start_period: 180s` in `docker-compose.yml`). For local dev this is acceptable. For production on Render, the API service waits for the healthcheck, which delays cold boots significantly. Separating ClamAV into its own persistent service would help.

---

## Numbers

- **90+ relational tables** across 33 Drizzle migrations
- **27 NestJS feature modules** under `/api/v1`
- **65+ controller actions** across public, `/me`, `/admin`, and webhook namespaces
- **76 web routes** (public, learning, checkout, instructor authoring)
- **46 mobile screens** (catalog, exams, mock tests, courses, skills, opportunities, notifications, commerce)
- **38 admin operation screens** (content, commerce, users, roles, analytics)
- **2 scheduled cron jobs** (opportunity deadline notifier, monthly instructor payouts)
- **3 payment providers** integrated (Razorpay, Stripe, RazorpayX)

---

## Current Status

PrepBuddy is in closed testing on Google Play, serving real students across Assam. The seed catalog includes Assam Police SI, ADRE Grade III, and APSC CCE exams with practice question banks, mock tests, and verified job listings.

The production infrastructure runs on Render (API), Netlify (Web + Admin), Neon (managed PostgreSQL 17), and Cloudflare R2 (storage). The Flutter app is distributed via Google Play's closed testing track.

---

## Repository

The full source is at [github.com/axomiyaindie/prepbuddy](https://github.com/axomiyaindie/prepbuddy).

If you are building something similar — a structured monorepo EdTech product, a payment + payout system, or a Flutter app that shares a backend with a Next.js web product — I am happy to talk through what worked and what did not.
