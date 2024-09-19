# Project Description
# The Wild Oasis - Hotel Management Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Frontend:
- Framework: React, Next.js (App Router)
- Styling: Tailwind CSS, responsive design

### Features:
- Cabin Exploration: Users can browse available cabins, view details, and images.
- Account Creation: Users can create accounts using Google authentication through NextAuth.js.
- Booking System: Users can book cabins with an optimistic UI, providing immediate feedback before confirmation.

### Backend:
- Database: SupaBase
- Authentication: NextAuth.js with Google Provider
- Server Actions: Handle server-side logic for cabin availability, booking, and account creation.

In essence, this application will provide a user-friendly interface for exploring and booking cabins at the Wild Oasis hotel, leveraging modern web development technologies and a robust backend for authentication and data management.



<img src="project screenshots/1.png" alt="drawing"/>
<img src="project screenshots/2.png" alt="drawing"/>
<img src="project screenshots/3.png" alt="drawing"/>
<img src="project screenshots/4.png" alt="drawing"/>
<img src="project screenshots/5.png" alt="drawing"/>
<img src="project screenshots/6.png" alt="drawing"/>
<img src="project screenshots/7.png" alt="drawing"/>
<img src="project screenshots/8.png" alt="drawing"/>
<img src="project screenshots/9.png" alt="drawing"/>
<img src="project screenshots/10.png" alt="drawing"/>
<img src="project screenshots/11.png" alt="drawing"/>
<img src="project screenshots/12.png" alt="drawing"/>
<img src="project screenshots/13.png" alt="drawing"/>
<img src="project screenshots/14.png" alt="drawing"/>
<img src="project screenshots/15.png" alt="drawing"/>
<img src="project screenshots/16.png" alt="drawing"/>
<img src="project screenshots/17.png" alt="drawing"/>
<img src="project screenshots/18.png" alt="drawing"/>
<img src="project screenshots/19.png" alt="drawing"/>
<img src="project screenshots/20.png" alt="drawing"/>
<img src="project screenshots/21.png" alt="drawing"/>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
# Running Locally
Create a .env.local file in your root directory. Then insert these variables:

SUPABASE_URL=

SUPABASE_KEY=

NEXTAUTH_URL=

NEXTAUTH_SECRET=

AUTH_GOOGLE_ID=

AUTH_GOOGLE_SECRET=

*leak to public in the browser: NEXT_PUBLIC_SOME_VAR=

configure these settings using Supabase, NextAuth.js and Google Developer Console

command (dev mode): npm run dev

command (production): npm run prod

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Deployed App:
https://nextjs-the-wild-oasis-mu.vercel.app/
