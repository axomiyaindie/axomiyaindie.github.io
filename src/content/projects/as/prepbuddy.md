---
title: "PrepBuddy"
description: "অসমৰ প্ৰতিযোগিতামূলক পৰীক্ষাৰ প্ৰস্তুতিৰ বাবে এটা full-stack EdTech প্লেটফৰ্ম — monorepo, multi-client, আৰু প্ৰথম দিনৰ পৰাই production-grade।"
link: "https://github.com/axomiyaindie/prepbuddy"
logo: "/projects/prepbuddy.png"
---

# PrepBuddy — অসমৰ বাবে এটা Production-Grade EdTech প্লেটফৰ্ম নিৰ্মাণ

PrepBuddy নিৰ্মাণ কৰিবলৈ ওলাওঁতে মোৰ এটাই নিয়ম আছিল: এনে কোনো চৰ্টকাট নহয় যিয়ে ছমাহৰ পিছত ছাত্ৰ-ছাত্ৰীৰ ক্ষতি কৰিব। অসমত Assam Police SI, ADRE আৰু APSC-ৰ দৰে পৰীক্ষাৰ বাবে প্ৰস্তুতি লোৱা লাখ লাখ পৰীক্ষাৰ্থী আছে, আৰু সিহঁতে দ্ৰুত, নিৰ্ভৰযোগ্য আৰু দীৰ্ঘস্থায়ীকৈ সজা চফ্টৱেৰৰ যোগ্য। এই লেখাত মই প্ৰতিটো প্ৰধান ইঞ্জিনিয়াৰিং সিদ্ধান্ত, মই কি সাজিলোঁ, কিয় সেইদৰে সাজিলোঁ, আৰু কি শিকিলোঁ, সেয়া লিপিবদ্ধ কৰিছোঁ।

---

## সমস্যাটো

অসমত পৰীক্ষাৰ প্ৰস্তুতি বিচ্ছিন্ন। ছাত্ৰ-ছাত্ৰীয়ে ভিডিঅ' লেকচাৰৰ বাবে এটা YouTube চেনেল, PDF-ৰ বাবে এটা Telegram গ্ৰুপ, MCQ-ৰ বাবে কোনো এখন ৱেবছাইট, আৰু চাকৰিৰ জাননীৰ বাবে এটা WhatsApp গ্ৰুপ ব্যৱহাৰ কৰিবলগীয়া হয়। পাঠ্যক্ৰম অনুসৰি অনুশীলন, সময় নিৰ্ধাৰিত মক টেষ্ট, ভিডিঅ' কোৰ্ছ, চাকৰিৰ সুযোগৰ ট্ৰেকিং, আৰু নেটিভ মোবাইল অভিজ্ঞতা, সকলো এটাই গাঁথনিবদ্ধ প্লেটফৰ্মত দিয়া আৰু অসমীয়া ছাত্ৰ-ছাত্ৰীৰ আঞ্চলিক প্ৰসংগ বুজি পোৱা কোনো প্লেটফৰ্ম নাই।

PrepBuddy হৈছে সেয়া সমাধান কৰাৰ মোৰ প্ৰচেষ্টা।

---

## PrepBuddy-এ কি কৰে

PrepBuddy হৈছে এটা একীকৃত শিক্ষা আৰু পৰীক্ষা প্ৰস্তুতিৰ প্লেটফৰ্ম। আজি এজন ছাত্ৰ বা ছাত্ৰীয়ে ইয়াত যি যি কৰিব পাৰে, সেয়া তলত দিয়া হ'ল:

**পাঠ্যক্ৰম আৰু অনুশীলন**
ছাত্ৰ-ছাত্ৰীয়ে এটা পৰীক্ষা বাছি লয়, যেনে ADRE Grade III, আৰু তাৰ পাঠ্যক্ৰম বিষয় (Subject) আৰু বিষয়বস্তু (Topic)-ত ভাগ কৰা গাঁথনিৰ সৈতে পায়। প্ৰতিটো Topic-ৰ তলত আগৰ বছৰৰ প্ৰশ্ন (PYQ) আৰু ব্যাখ্যাসহ মৌলিক MCQ-ৰ এখন বাছনি কৰা ভঁৰাল থাকে। প্ৰশ্ন ইঞ্জিনে single-choice, multiple-choice, true/false, numerical, image-based, case-based, matching আৰু ordering ধৰণৰ প্ৰশ্ন সমৰ্থন কৰে।

**মক টেষ্ট**
ছাত্ৰ-ছাত্ৰীয়ে আধিকাৰিক পৰীক্ষাৰ পৰিস্থিতি অনুকৰণ কৰা সম্পূৰ্ণ-দৈৰ্ঘ্যৰ সময় নিৰ্ধাৰিত মক টেষ্ট দিব পাৰে। ইঞ্জিনে তিনিটা মোড সমৰ্থন কৰে: `practice` (সময় নিৰ্ধাৰণ নথকা, লগে লগে মতামত), `timed` (সামগ্ৰিক কাউণ্টডাউন), আৰু `full_length` (ঋণাত্মক নম্বৰসহ কঠোৰ পৰীক্ষা অনুকৰণ)। জমা দিয়াৰ পিছত তেওঁলোকে স্ক'ৰ, প্লেটফৰ্মৰ ৰেংক, পাৰ্চেণ্টাইল আৰু শ্ৰেণী অনুসৰি বিশ্লেষণসহ এখন বিস্তাৰিত ফলাফল কাৰ্ড দেখে।

**ভিডিঅ' কোৰ্ছ আৰু দক্ষতা**
প্ৰশিক্ষকে গাঁথনিবদ্ধ ভিডিঅ' কোৰ্ছ (module → lesson) আৰু সম্পূৰ্ণতাৰ প্ৰমাণপত্ৰসহ হাতে-কলমে দক্ষতাৰ পথ (step-by-step) প্ৰকাশ কৰিব পাৰে। ছাত্ৰ-ছাত্ৰীয়ে Razorpay আৰু Stripe-ৰ দ্বাৰা চলা কাৰ্ট আৰু চেকআউটৰ জৰিয়তে সেইবোৰ কিনিব পাৰে।

**সুযোগ ট্ৰেকাৰ**
প্লেটফৰ্মে প্ৰমাণিত চৰকাৰী খালী পদ, ব্যক্তিগত খণ্ডৰ চাকৰি, apprenticeship আৰু internship একত্ৰিত কৰে। আবেদনৰ শেষ তাৰিখ ৩, ২, ১ বা ০ দিন বাকী থাকিলে ছাত্ৰ-ছাত্ৰীয়ে স্বয়ংক্ৰিয় push notification পায়, যিটো এটা দৈনিক নিৰ্ধাৰিত কামে চলায়।

**প্ৰশিক্ষক ইকোচিস্টেম**
অনুমোদিত প্ৰশিক্ষকে একেটা ছাত্ৰ এপৰ ভিতৰতে বিষয়বস্তু ৰচনা আৰু প্ৰকাশ কৰে। কোনো পৃথক প্ৰশিক্ষক পৰ্টেল নাই। প্ৰতিটো নামভৰ্তিৰ ভিত্তিত উপাৰ্জন ট্ৰেক কৰা হয় আৰু RazorpayX-ৰ দ্বাৰা প্ৰতি মাহে প্ৰত্যক্ষভাৱে বেংকলৈ স্বয়ংক্ৰিয়ভাৱে পঠিওৱা হয়।

---

## আৰ্কিটেকচাৰৰ সাৰাংশ

PrepBuddy হৈছে **pnpm workspaces** আৰু **Turborepo**-ৰে পৰিচালিত এটা full-stack monorepo। প্ৰতিটো এপ্লিকেশ্বন, ৱেব, এডমিন আৰু মোবাইল, একেটা type, ডাটাবেছ ক্লায়েণ্ট আৰু একেটা backend API ভাগ-বতৰা কৰে।

```
prepbuddy/
├── apps/
│   ├── web/         Next.js 16 — ছাত্ৰ আৰু প্ৰশিক্ষকৰ ৱেব পৰ্টেল
│   ├── admin/       Next.js 16 — কৰ্মচাৰীৰ CMS আৰু পৰিচালনা পেনেল
│   └── mobile/      Flutter — নেটিভ Android ছাত্ৰ এপ
├── services/
│   └── api/         NestJS 12 — কেন্দ্ৰীয় REST API, /api/v1
└── packages/
    ├── database/    Drizzle ORM — schema, migration, seed
    └── types/       ভাগ-বতৰা কৰা TypeScript interface আৰু DTO
```

Build-ৰ নিৰ্ভৰতাৰ শৃংখলা কঠোৰ: প্ৰথমে `packages/database` কম্পাইল হয়, তাৰ পিছত `packages/types`, আৰু তাৰ পিছত আন সকলো এপ্লিকেশ্বন। Turborepo-ৰ pipeline caching-ৰ বাবে ফাইল সঁচাকৈ সলনি হ'লেহে ই পুনৰ চলে।

**এটা backend, তিনিটা ক্লায়েণ্ট।** ব্যৱসায়িক যুক্তিৰ কোনো পুনৰাবৃত্তি নাই। ৱেব এপ, এডমিন পেনেল আৰু Flutter এপ সকলোৱে HTTP-ৰ জৰিয়তে একেটা NestJS API-ক মাতে। ব্যৱহাৰকাৰীৰ অগ্ৰগতি, ক্ৰয়, নামভৰ্তি আৰু অনুমতিৰ একমাত্ৰ সত্যৰ উৎস হৈছে ডাটাবেছ।

---

## টেক ষ্টেক — প্ৰকৃত ভাৰ্ছনসহ

মই ইয়াত নিৰ্দিষ্টভাৱে লিখিব বিচাৰিছোঁ, কাৰণ ভাৰ্ছনৰ বিবৰণ গুৰুত্বপূৰ্ণ আৰু অধিকাংশ portfolio পোষ্ট অস্পষ্ট।

| স্তৰ | মই কি ব্যৱহাৰ কৰিলোঁ | ভাৰ্ছন |
|---|---|---|
| Student Web | Next.js App Router, React, Tailwind CSS v4, shadcn/ui, TipTap, KaTeX | Next.js 16.4.1 / React 19.2.8 |
| Admin Panel | Next.js App Router, React, Tailwind CSS v4, shadcn/ui, TipTap | Next.js 16.4.1 / React 19.2.8 |
| Mobile | Flutter, Dart, Riverpod, GoRouter, Dio | Dart SDK ^3.13.0 |
| Backend API | NestJS, TypeScript, Passport JWT, class-validator | NestJS 12.2.0 |
| ORM আৰু Migration | Drizzle ORM, Drizzle Kit | drizzle-orm 0.45.3 / drizzle-kit 0.31.11 |
| ডাটাবেছ | PostgreSQL | 17 (docker: postgres:17-alpine) |
| Object Storage | Cloudflare R2 via AWS SDK v3 | @aws-sdk/client-s3 ^3.1157.0 |
| Antivirus | ClamAV sidecar (Docker) | clamav:stable |
| Authentication | Argon2, Passport JWT, HttpOnly cookies, Google OAuth | argon2 ^0.45.1 |
| Push Notifications | Firebase Cloud Messaging, firebase-admin | firebase-admin ^13.10.0 |
| ছাত্ৰৰ পেমেণ্ট | Razorpay (INR), Stripe (USD) | razorpay ^2.9.8 |
| প্ৰশিক্ষকৰ পে-আউট | RazorpayX (NEFT/UPI প্ৰত্যক্ষ স্থানান্তৰ) | razorpayx-sdk ^0.1.1 |
| ইমেইল | Nodemailer via Resend SMTP | nodemailer ^10.2.0 |
| Monorepo সঁজুলি | pnpm workspaces, Turborepo | pnpm 10.34.2 / turbo ^2.11.10 |
| পৰীক্ষণ (API আৰু Web) | Vitest, Supertest, React Testing Library | vitest ^4.1.12 |
| Linting (API) | oxlint | oxlint ^1.89.0 |

---

## ডাটাবেছ — ৩৩টা Migration-ত ৯০টাতকৈ অধিক টেবুল

ডাটাবেছ schema হৈছে এই প্ৰকল্পৰ আটাইতকৈ গুৰুত্বপূৰ্ণ প্ৰযুক্তিগত সিদ্ধান্ত। মই ইয়াক প্ৰথম দিনৰ পৰাই প্ৰকৃততে পৰীক্ষা-নিৰপেক্ষ হিচাপে ডিজাইন কৰিছিলোঁ।

### বিষয়বস্তুৰ স্তৰবিন্যাস

"Assam Police"-ক ক'তো হাৰ্ডকোড নকৰি, প্ৰতিটো বিষয়বস্তু পাঁচ স্তৰীয়া এটা শ্ৰেণীবিন্যাসৰ মাজেদি যায়:

```
Education Category (Competitive Exams, School Boards)
  └── Education Level (Graduate Level, 10th Standard)
        └── Exam (Assam Police SI, ADRE Grade III, APSC CCE)
              └── Subject (General Knowledge, Mathematics)
                    └── Topic (Assam History, Ratio & Proportion)
                          ├── Questions / Practice Sets
                          └── Mock Tests
```

ভৱিষ্যতে UPSC, NEET বা আন যিকোনো ৰাজ্যিক পৰীক্ষা যোগ কৰিবলৈ schema-ত কোনো সলনি লাগিব নোৱাৰে, কেৱল seed data লাগিব।

### বাণিজ্য Schema

পেমেণ্ট ব্যৱস্থাটো আঠটা টেবুলত বিস্তৃত: `commerce_orders`, `commerce_order_items`, `commerce_payment_attempts`, `payments`, `cart_items`, `coupons`, `coupon_redemptions`, `scholarship_programs`, আৰু `scholarship_applications`। প্ৰতিটো আৰ্থিক পৰিমাণ integer paisa/cent-ত সংৰক্ষিত হয়। `commerce_orders` টেবুলে এটা unique `idempotency_key` স্তম্ভৰ জৰিয়তে idempotency নিশ্চিত কৰে, যাতে ক্লায়েণ্টৰ পুনৰ চেষ্টাই কেতিয়াও দুইটা অৰ্ডাৰ নবনায়।

### RBAC Schema

অনুমতিবোৰ সম্পূৰ্ণ গতিশীল। পাঁচটা টেবুল আছে: `roles`, `permissions`, `role_permissions`, `user_roles`, আৰু `user_permissions`। অনুমতিবোৰে `commerce.coupon.manage` বা `question.manage`-ৰ দৰে dot-notation key ৰূপ অনুসৰণ কৰে। কোড ডিপ্লয় নকৰাকৈয়ে runtime-ত নতুন অনুমতি সৃষ্টি কৰি এটা ভূমিকাক দিব পৰা যায়। ব্যৱহাৰকাৰীয়ে একাধিক ভূমিকাও ধাৰণ কৰিব পাৰে, অৰ্থাৎ এজন ছাত্ৰ একে সময়তে অনুমোদিত প্ৰশিক্ষকো হ'ব পাৰে, আৰু এটা API কলৰ জৰিয়তে নিজৰ সক্ৰিয় ভূমিকা সলনি কৰিব পাৰে।

---

## API — NestJS 12 Modular Monolith

API-টো `services/api`-ত থাকে আৰু সকলো ৰুট `/api/v1` global prefix-ৰ অধীনত প্ৰকাশ কৰে। ই `src/v1/`-ৰ অধীনত ২৭টা feature module-ত সজাই থোৱা হৈছে।

### Guard আৰ্কিটেকচাৰ

প্ৰতিটো সুৰক্ষিত ৰুটে ক্ৰমান্বয়ে তিনিটা স্তৰৰ guard স্তুপৰ মাজেদি যায়:

```
Request → JwtAuthGuard → RolesGuard → PermissionsGuard → Controller
```

`JwtAuthGuard`-এ Bearer token বা HttpOnly cookie বৈধ নে নহয় পৰীক্ষা কৰে। `RolesGuard`-এ JWT-ত থকা সক্ৰিয় ভূমিকাৰ claim পৰীক্ষা কৰে। `PermissionsGuard`-এ handler-ত থকা `@RequirePermissions()` decorator-ক ব্যৱহাৰকাৰীৰ ভূমিকা আৰু প্ৰত্যক্ষ অনুমতিৰ সৈতে মিলাই চায়।

ফাইল আপল'ডৰ ৰুটবোৰ অতিৰিক্তভাৱে `FileScanGuard`-ৰ মাজেদিও যায়, যিয়ে আপল'ড Cloudflare R2-লৈ যাবলৈ দিয়াৰ আগতে multipart buffer ClamAV TCP socket-ৰ মাজেদি পঠাই স্কেন কৰে।

### Authentication

মই চাৰিটা authentication পদ্ধতি প্ৰৱৰ্তন কৰিছোঁ:

**Email আৰু Password** — Argon2-ৰে hash কৰা password-ৰ সৈতে পঞ্জীয়ন আৰু লগইন। Access token ১৫ মিনিট বৈধ; refresh token ৩০ দিন বৈধ আৰু `SameSite=Strict`-ৰ সৈতে HttpOnly হিচাপে সংৰক্ষিত। প্ৰতিটো সক্ৰিয় refresh token hash কৰি `user_sessions`-ত ট্ৰেক কৰা হয়, যাতে password সলনি কৰিলে লগে লগে সকলো session বাতিল কৰিব পৰা যায়।

**Google OAuth (Web)** — সাধাৰণ Passport `GoogleOAuthGuard` brower redirect প্ৰবাহ।

**Google OAuth (Mobile)** — Flutter-এ ডিভাইচতে নেটিভভাৱে Google Sign-In পৰিচালনা কৰে আৰু Firebase-এ প্ৰমাণ কৰা `idToken` `POST /api/v1/auth/google`-লৈ পঠায়। Backend-এ ইয়াক `firebase-admin`-ৰ জৰিয়তে বৈধ কৰে, কোনো browser redirect লাগে নাই।

**Magic Links** — `POST /api/v1/auth/magic-link/request`-এ ইমেইলৰ জৰিয়তে সময়সীমাযুক্ত token পঠায়। লিংকটোৱে Android App Links-ৰ জৰিয়তে Flutter এপত সোজা প্ৰৱেশ কৰায়। ৱেব ব্যৱহাৰকাৰীয়ে `/auth/magic`-ত ইয়াক ব্যৱহাৰ কৰে।

### নিৰ্ধাৰিত Background Job

`@nestjs/schedule`-ৰ জৰিয়তে দুটা cron scheduler process-ৰ ভিতৰতে চলে:

**`JobsScheduler`** প্ৰতিদিনে IST ৰাতিপুৱা ৯ বজাত চলে। ই ডাটাবেছত আবেদনৰ শেষ তাৰিখ ঠিক ৩, ২, ১ বা ০ দিন বাকী থকা প্ৰকাশিত সুযোগবোৰ বিচাৰি উলিয়ায়, আৰু গ্ৰাহক হোৱা ছাত্ৰ-ছাত্ৰীলৈ ব্যক্তিগতকৃত FCM push notification পঠায়।

**`MonthlyPayoutScheduler`** প্ৰতি মাহৰ ১ তাৰিখে IST ৰাতি ২ বজাত (`0 2 1 * *`) চলে। ই প্ৰতিজন যোগ্য প্ৰশিক্ষকৰ বাকী থকা উপাৰ্জনৰ খতিয়ান প্ৰক্ৰিয়া কৰে আৰু প্ৰত্যক্ষ বেংকলৈ RazorpayX পে-আউট আৰম্ভ কৰে। RazorpayX webhook (`payout.processed`, `payout.failed`, `payout.reversed`)-এ খতিয়ানটো অসমকালীনভাৱে মিলাই লয়।

---

## ফাইল ষ্ট'ৰেজ আৰু এণ্টিভাইৰাছ

নিৰাপত্তা আৰু কাৰ্যক্ষমতাৰ মাজত ভাৰসাম্য ৰাখিবলৈ মই দুটা ভাগত বিভক্ত এটা আপল'ড pipeline ডিজাইন কৰিছোঁ:

**সৰু ফাইল (≤ ৫০ MB)** — Multipart আপল'ড NestJS API-ত পৰে, `FileScanGuard`-ৰ জৰিয়তে ClamAV-ৰ মাজেদি যায়, আৰু `PutObjectCommand`-ৰ সৈতে Cloudflare R2-ত সংৰক্ষিত হয়। ক্লায়েণ্টে এটা স্থায়ী public URL ঘূৰাই পায়।

**ডাঙৰ ফাইল (> ৫০ MB, ৪ GB লৈকে)** — ক্লায়েণ্টে API-ৰ পৰা এটা presigned PUT URL অনুৰোধ কৰে। API-এ MIME type আৰু আকাৰৰ সীমা বৈধ কৰে, `@aws-sdk/s3-request-presigner`-ৰ জৰিয়তে ৪ ঘণ্টীয়া presigned URL সৃষ্টি কৰে, আৰু ক্লায়েণ্টে binary data পোনপটীয়াকৈ R2-লৈ আপল'ড কৰে। API-ই ফাইলৰ bytes কেতিয়াও নেদেখে, গতিকে ডাঙৰ ভিডিঅ' আপল'ডৰ বাবে memory-ৰ ওপৰত কোনো চাপ নপৰে।

Object key-বোৰে এটা নিৰ্ধাৰিত গাঁথনি অনুসৰণ কৰে:
```
{folder}/{userId}/{uuid}.{ext}
```

ইয়াৰ ফলত প্ৰয়োজন হ'লে কোনো ব্যৱহাৰকাৰীৰ আপল'ড কৰা ফাইলবোৰ তালিকাভুক্ত বা বাতিল কৰাটো অতি সহজ হয়।

---

## মোবাইল এপ — Riverpod-ৰ সৈতে Flutter

Android এপটো এটা feature-first Flutter এপ্লিকেশ্বন। প্ৰতিটো feature `lib/features/`-ৰ অধীনত নিজৰ screen, provider আৰু widget-ৰ সৈতে থাকে:

- `auth/` — লগইন, পঞ্জীয়ন, Google sign-in, magic link deep link handler
- `catalog/` — দক্ষতা আৰু কোৰ্ছ ব্ৰাউজ কৰা (স্পষ্টভাৱে পৃথক UI: দক্ষতা কামৰ পথ যেন লাগে; কোৰ্ছ পৰম্পৰাগত catalog যেন লাগে)
- `exams/` — পৰীক্ষাৰ বিৱৰণ, বিষয় অনুসৰি বিস্তৃত চোৱা, topic viewer
- `mock_tests/` — catalog, প্ৰশ্ন navigator-সহ session screen, পাৰ্চেণ্টাইলসহ ফলাফল কাৰ্ড
- `practice/` — লগে লগে উত্তৰ বৈধ কৰা অনুশীলন প্ৰশ্নৰ গোট
- `learning/` — ভিডিঅ', PDF, অডিঅ', পাঠ আৰু quiz lesson renderer, সকলো এটাই প্লেয়াৰত একত্ৰিত
- `commerce/` — কাৰ্ট, চেকআউট, Razorpay Flutter SDK একীকৰণ
- `opportunities/` — শেষ তাৰিখৰ কাউণ্টডাউনসহ চাকৰিৰ তালিকা
- `notifications/` — এপৰ ভিতৰৰ ইনবক্স আৰু FCM background message handler
- `instructor/` — এটা sub-package (`apps/mobile/packages/instructor`)-ৰ জৰিয়তে সংযুক্ত, যিয়ে মূল এপৰ প্ৰমাণিত Dio ক্লায়েণ্ট ভাগ-বতৰা কৰে

State management-ৰ সকলো ঠাইতে Riverpod ব্যৱহাৰ কৰা হৈছে। HTTP Dio-ৰে পৰিচালিত, যাৰ interceptor-এ প্ৰতিটো অনুৰোধত `FlutterSecureStorage`-ৰ পৰা Bearer token সুমুৱাই দিয়ে আৰু 401 → token refresh নীৰৱে পৰিচালনা কৰে।

Windows + AMD GPU-ত Android emulator-ত বাৰে বাৰে বগা স্ক্ৰীণ rendering ব্যৰ্থতা (eglStream-ত `Gralloc4 format unsupported`) হৈছিল। মই প্ৰকল্পৰ আৰম্ভণিতেই USB ADB-ৰ জৰিয়তে প্ৰকৃত ডিভাইচত ডেভেলপমেণ্টলৈ সলনি কৰিলোঁ আৰু সঠিক ছেটআপ `apps/mobile/docs/DEV_SETUP.md`-ত লিপিবদ্ধ কৰিলোঁ, যাতে ভৱিষ্যতৰ অৱদানকাৰীয়ে সহজেই আৰম্ভ কৰিব পাৰে।

---

## এডমিন পেনেল — Next.js 16 App Router

এডমিন পেনেল হৈছে ৩০০২ পৰ্টত চলা এটা পৃথক Next.js 16 এপ্লিকেশ্বন। ই ছাত্ৰ ৱেব এপৰ সৈতে কোনো session storage ভাগ-বতৰা নকৰে: পৃথক cookie নাম, পৃথক JWT secret, পৃথক Tailwind config।

ৰুট সুৰক্ষা Next.js Middleware আৰু server-side session যাচাইৰ ওপৰত নিৰ্ভৰশীল। `/admin/(authed)/**`-ৰ অধীনৰ সকলো ৰুটে API-ত ছেট কৰা একেটা JWT secret-ৰে যাচাই কৰা বৈধ `prepbuddy_admin_access` cookie লাগে।

পেনেলে তলত দিয়াবোৰ সামৰি লয়:
- ভূমিকা আৰু অনুমতি সম্পাদকসহ ব্যৱহাৰকাৰী পৰিচালনা
- প্ৰশ্ন ভঁৰাল: সৃষ্টি, সম্পাদনা, CSV/JSON-ৰ জৰিয়তে bulk import
- মক টেষ্ট বিল্ডাৰ: প্ৰশ্ন নিৰ্ধাৰণ, স্ক'ৰিঙৰ নিয়ম ছেট কৰা
- প্ৰশিক্ষকৰ জমা দিয়া কোৰ্ছ আৰু দক্ষতাৰ বিষয়বস্তু পৰ্যালোচনা শাৰী
- বাণিজ্য: coupon বিল্ডাৰ, অৰ্ডাৰ ট্ৰেকিং, scholarship প্ৰ'গ্ৰাম পৰিচালনা
- ৰিফাণ্ড প্ৰবাহ: পৰ্যালোচনা, অনুমোদন বা প্ৰত্যাখ্যান আৰু entitlement বাতিল
- প্ৰশিক্ষকৰ পে-আউট তদাৰক: বাকী থকা খতিয়ান চোৱা, হাতেৰে পে-আউট আৰম্ভ কৰা
- Audit log: প্ৰতিটো এডমিন কাৰ্যই কৰ্তাৰ ID, IP, লক্ষ্য entity, আৰু diff payload লিপিবদ্ধ কৰে

---

## পেমেণ্ট — তিনিটা স্তৰ

PrepBuddy-ত পেমেণ্টক ইচ্ছাকৃতভাৱে তিনিটা পৃথক উপ-ব্যৱস্থাত ভাগ কৰা হৈছে:

**ছাত্ৰৰ চেকআউট (Razorpay / Stripe)**
এটা অৰ্ডাৰ কঠোৰ state machine-ৰ মাজেদি যায়: `pending_payment → paid → refunded`। Idempotency key-এ পুনৰ চেষ্টাত দুইটা অৰ্ডাৰ হোৱাত বাধা দিয়ে। Razorpay signature যাচাইত `razorpay_order_id|razorpay_payment_id` কেঁচা string-ৰ ওপৰত HMAC-SHA256 ব্যৱহাৰ কৰা হয়। Stripe webhook event-বোৰ কেঁচা request buffer-ৰ বিপৰীতে যাচাই কৰা হয়। `PAYMENT_PROVIDER=disabled` মোডে test credential নোলোৱাকৈয়ে local dev-ৰ বাবে সকলো পেমেণ্ট প্ৰক্ৰিয়া বন্ধ কৰে।

**Scholarship অনুদান**
ছাত্ৰ-ছাত্ৰীয়ে নিৰ্দিষ্ট কোৰ্ছ বা দক্ষতাৰ বাবে scholarship প্ৰৱেশৰ আবেদন কৰিব পাৰে। কৰ্মচাৰীয়ে আবেদন পৰ্যালোচনা কৰে, আৰু অনুমোদন দিলে পেমেণ্ট লেনদেন নোহোৱাকৈয়ে স্বয়ংক্ৰিয়ভাৱে entitlement সৃষ্টি হয়।

**প্ৰশিক্ষকৰ পে-আউট (RazorpayX)**
এইটো আটাইতকৈ জটিল অংশ। প্ৰতিটো কোৰ্ছ নামভৰ্তি বা বিক্ৰীয়ে `instructor_earnings_ledger`-ত এটা খতিয়ান প্ৰবিষ্টি যোগ কৰে। প্ৰতি মাহৰ ১ তাৰিখে scheduler-এ নিম্নতম পে-আউট সীমাৰ (`RAZORPAYX_MIN_PAYOUT_PAISE`-ৰ জৰিয়তে কনফিগাৰযোগ্য) ওপৰত থকা বাকী উপাৰ্জন একত্ৰিত কৰে আৰু প্ৰশিক্ষকৰ প্ৰমাণিত বেংক একাউণ্টলৈ RazorpayX fund transfer আৰম্ভ কৰে। পে-আউটৰ অৱস্থা RazorpayX webhook-ৰ জৰিয়তে অসমকালীনভাৱে মিলাই লোৱা হয়।

---

## নিৰাপত্তা — গভীৰ প্ৰতিৰক্ষা

**Dependency override** — `pnpm-workspace.yaml`-এ কেইবাটাও transitive dependency প্যাচ কৰা ভাৰ্ছনত লক কৰি ৰাখে: `multer ≥ 2.5.0` (DoS সমাধান), `postcss ≥ 8.5.23`, `undici ≥ 6.28.1`, `gaxios>uuid ≥ 11.1.1`। এইবোৰ প্ৰতিজন ডেভেলপাৰৰ ইনষ্টলৰ সময়তে প্ৰয়োগ হয়।

**HTTPS বাধ্যতামূলক** — যদি `PAYMENT_MODE=live` ছেট কৰা হয়, আৰু `API_BASE_URL` বা `WEB_APP_URL`-এ `http://` ব্যৱহাৰ কৰে, তেন্তে API বুটৰ সময়তে ক্ৰেচ কৰে। ইয়াৰ ফলত production ভুলতে plaintext-ত চলা প্ৰতিৰোধ হয়।

**প্ৰতিটো multipart আপল'ডত এণ্টিভাইৰাছ** — কোনো ফাইল R2-লৈ যোৱাৰ আগতে `FileScanGuard`-এ buffer ClamAV-লৈ TCP socket-ৰ জৰিয়তে পঠায়। সংক্ৰমিত ফাইল `400`-ৰ সৈতে প্ৰত্যাখ্যান কৰা হয় আৰু কেতিয়াও সংৰক্ষিত নহয়।

**Audit logging** — প্ৰতিটো এডমিন কাৰ্য, যেনে ব্যৱহাৰকাৰী নিলম্বন, ভূমিকা সলনি, scholarship সিদ্ধান্ত, coupon সৃষ্টি, `audit_logs`-ত কৰ্তাৰ ID, লক্ষ্য entity, ক্লায়েণ্টৰ IP ঠিকনা আৰু সলনিৰ payload লিপিবদ্ধ কৰে। ইয়াক এৰাব নোৱাৰি; ই controller-ত নহয়, service স্তৰতে বলৱৎ কৰা হয়।

**Cookie বিচ্ছিন্নকৰণ** — ছাত্ৰ আৰু এডমিন session-এ সম্পূৰ্ণ পৃথক cookie নাম ব্যৱহাৰ কৰে আৰু পৃথক domain-ত সীমিত, যাতে কোনো ছাত্ৰৰ আপোচ হোৱা session কেতিয়াও এডমিন প্ৰৱেশলৈ বাঢ়ি যাব নোৱাৰে।

---

## বিষয়বস্তুৰ মডেল — ডিজাইনতে পৰীক্ষা-নিৰপেক্ষ

প্ৰতিটো slug হৈছে এটা প্ৰথম শ্ৰেণীৰ URL। সৰ্বজনীন বিষয়বস্তু SEO-অনুকূল URL-লৈ পৰিষ্কাৰভাৱে ৰূপান্তৰিত হয়:

| বিষয়বস্তু | URL ধৰণ |
|---|---|
| পৰীক্ষা | `/exams/assam-police-si` |
| বিষয় | `/exams/assam-police-si/subjects/general-knowledge` |
| Topic | `.../topics/assam-history` |
| কোৰ্ছ | `/courses/complete-assam-gk-masterclass` |
| দক্ষতা | `/skills/frontend-development` |
| মক টেষ্ট | `/mock-tests/adre-full-mock-1` |
| সুযোগ | `/opportunities/apsc-cce-2026-recruitment` |
| ব্লগ | `/blog/how-to-prepare-for-adre-2026` |

ৱেব এপে প্ৰতিটো গতিশীল পৃষ্ঠাত Next.js `generateMetadata()` ব্যৱহাৰ কৰে, লগতে Open Graph ছবি, `JobPosting` আৰু `Course` JSON-LD structured data, আৰু API-ৰ পৰা প্ৰকাশিত slug সোধি `/sitemap.xml`-ত গতিশীলভাৱে সৃষ্টি হোৱা sitemap।

---

## মই যি বেলেগকৈ কৰিলোঁহেঁতেন

**প্ৰথম দিনৰ পৰাই ৰেট লিমিটিং।** মই public auth আৰু search endpoint-ত `@nestjs/throttler` পিছুৱাই থৈছিলোঁ। public লঞ্চৰ আগতে ই হৈছে মই প্ৰথমে সংযোগ কৰিবলগীয়া কাম। পিছত যোগ কৰাটো আগতেই কৰাতকৈ অধিক কষ্টকৰ।

**API-ৰ বাবে Vitest fixture।** Unit test আছে, কিন্তু প্ৰকৃত PostgreSQL instance-ৰ বিপৰীতে integration test-ৰ কভাৰেজ কম। এটা সঠিক test ডাটাবেছ জীৱনচক্ৰ (seed, test, rollback)-এ unit mock-এ ধৰিব নোৱাৰা ডাটাৰ অখণ্ডতাৰ ভুল ধৰিব পাৰিলেহেঁতেন।

**Type-safe API ক্লায়েণ্ট।** ৱেব আৰু মোবাইল এপে হাতেৰে type কৰা response interface-ৰ সৈতে কেঁচা HTTP কল কৰে। OpenAPI বা `ts-rest`-ৰ পৰা সৃষ্টি কৰা ক্লায়েণ্টলৈ গ'লে ক্লায়েণ্ট-ছাৰ্ভাৰ type পাৰ্থক্যৰ এক গোটেই শ্ৰেণীৰ bug আঁতৰ হ'ব।

**ClamAV আৰম্ভ হোৱাৰ সময়।** ClamAV container-এ সংযোগ গ্ৰহণ কৰাৰ আগতে virus definition লোড কৰিবলৈ ৩ মিনিটলৈকে সময় লয় (`docker-compose.yml`-ত `start_period: 180s`)। Local dev-ৰ বাবে এয়া গ্ৰহণযোগ্য। Render-ত production-ৰ বাবে API সেৱাই healthcheck-ৰ বাবে অপেক্ষা কৰে, যিয়ে cold boot যথেষ্ট পলম কৰে। ClamAV-ক নিজৰ স্থায়ী সেৱা হিচাপে পৃথক কৰিলে সহায় হ'ব।

---

## সংখ্যাত

- **৯০টাতকৈ অধিক relational টেবুল**, ৩৩টা Drizzle migration-ত
- `/api/v1`-ৰ অধীনত **২৭টা NestJS feature module**
- public, `/me`, `/admin` আৰু webhook namespace-ত **৬৫টাতকৈ অধিক controller action**
- **৭৬খন ৱেব ৰুট** (public, learning, checkout, instructor authoring)
- **৪৬খন মোবাইল screen** (catalog, exams, mock tests, courses, skills, opportunities, notifications, commerce)
- **৩৮খন এডমিন কাৰ্য screen** (content, commerce, users, roles, analytics)
- **২টা নিৰ্ধাৰিত cron job** (সুযোগৰ শেষ তাৰিখ জনোৱা, মাহেকীয়া প্ৰশিক্ষক পে-আউট)
- **৩টা পেমেণ্ট প্ৰদানকাৰী** একীভূত (Razorpay, Stripe, RazorpayX)

---

## বৰ্তমানৰ অৱস্থা

PrepBuddy Google Play-ত closed testing-ত আছে আৰু অসমৰ প্ৰকৃত ছাত্ৰ-ছাত্ৰীক সেৱা আগবঢ়াইছে। Seed catalog-ত অনুশীলন প্ৰশ্নৰ ভঁৰাল, মক টেষ্ট আৰু প্ৰমাণিত চাকৰিৰ তালিকাসহ Assam Police SI, ADRE Grade III আৰু APSC CCE পৰীক্ষা অন্তৰ্ভুক্ত।

Production অৱকাঠামো Render (API), Netlify (Web + Admin), Neon (পৰিচালিত PostgreSQL 17), আৰু Cloudflare R2 (storage)-ত চলে। Flutter এপ Google Play-ৰ closed testing track-ৰ জৰিয়তে বিতৰণ কৰা হৈছে।

---

## ৰিপজিটৰী

সম্পূৰ্ণ source [github.com/axomiyaindie/prepbuddy](https://github.com/axomiyaindie/prepbuddy)-ত আছে।

যদি আপুনি একেধৰণৰ কিবা সাজিছে, যেনে গাঁথনিবদ্ধ monorepo EdTech প্ৰডাক্ট, পেমেণ্ট + পে-আউট ব্যৱস্থা, বা Next.js ৱেব প্ৰডাক্টৰ সৈতে একেটা backend ভাগ-বতৰা কৰা Flutter এপ, তেন্তে কি কাম কৰিলে আৰু কি নকৰিলে, সেয়া আলোচনা কৰিবলৈ মই সুখী।