# Ateeq Rehman Wazir — Portfolio

Personal portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://ateeqrehman.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)

## Overview

Professional portfolio showcasing AI engineering, data science, and full stack development work. Built with a focus on performance, accessibility, and developer experience.

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Database | Supabase (review system) |
| Deployment | Vercel |

## Features

- Premium dark UI with glassmorphism effects
- Animated hero with real profile photography
- Filterable projects portfolio
- Interactive resume page
- Review/feedback system with admin moderation
- Contact form with project type and budget fields
- SEO optimized with structured data
- Fully responsive (mobile to 4K)
- Accessible keyboard navigation

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── admin/          # Admin review dashboard
│   ├── api/            # API routes (reviews, admin)
│   ├── about/
│   ├── contact/
│   ├── projects/
│   ├── resume/
│   └── services/
├── components/
│   ├── layout/         # Navbar, Footer
│   ├── reviews/        # Feedback system components
│   ├── sections/       # Page section components
│   └── ui/             # Reusable UI primitives
├── data/               # Static data (projects, resume, skills)
└── lib/                # Utilities (images, supabase, reviews)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/ateeqkhan9891/portfolio.git
cd portfolio-next
npm install
```

### Environment Variables

Copy the example and fill in your values:

```bash
cp .env.local.example .env.local
```

Required variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
ADMIN_SECRET=your_admin_password
```

**Without Supabase**: The review system falls back to local file storage (`data/pending-reviews.json`). All other pages work without any environment variables.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

## Review System

The portfolio includes a full review/feedback system:

1. Visitors submit feedback via the modal
2. Reviews save as `pending` (Supabase or local file)
3. Admin approves at `/admin` with password
4. Approved reviews appear publicly on the home page

**Admin access**: `localhost:3000/admin` — enter your `ADMIN_SECRET`

### Database Setup (Supabase)

Run the SQL schema in your Supabase dashboard:

```bash
# Schema file location:
supabase/schema.sql
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository at [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables on Vercel

Add these in Vercel project settings > Environment Variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_SECRET`

## Customization

### Update personal info

Edit `src/data/resume.ts` for all personal information.

### Update projects

Edit `src/data/projects.ts` to add/modify projects.

### Update images

Place images in `public/images/profile/` and `public/images/about/`.
Update paths in `src/lib/images.ts`.

### Add resume PDF

Place your PDF at `public/resume.pdf`.

## License

MIT License — feel free to use as a template with attribution.

---

Built by [Ateeq Rehman Wazir](https://github.com/ateeqkhan9891)
