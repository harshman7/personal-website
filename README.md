# Portfolio website

Single-page portfolio built with **Next.js** (App Router), **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide** icons. Content is defined in TypeScript under `src/lib/` (no database).

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this repo to GitHub and import the project in [Vercel](https://vercel.com).
2. Framework preset: **Next.js**. Build: `next build`, Output: default.

## Edit content

Update the data files in `src/lib/` (for example `profile.ts`, `projects.ts`, `experience.ts`, `skills.ts`, `certifications.ts`, `education.ts`) and redeploy. Add images under `public/` and reference them as `/images/...` in the data types where applicable.

## Scripts

| Command   | Description        |
| --------- | ------------------ |
| `npm run dev`   | Development server |
| `npm run build` | Production build   |
| `npm run start` | Run production     |
| `npm run lint`  | ESLint             |
