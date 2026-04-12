# Yudha Pradana — Portfolio 2025

A minimal dark/light portfolio built with **Next.js 14 · TypeScript · Tailwind CSS**.

## Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS custom properties (theme vars)
- **Fonts**: Bebas Neue (display) · Syne (sans) · DM Mono (mono)
- **Data**: `src/data/portfolio.json` — edit this file to update all content

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

## Project Structure

```
src/
  app/
    layout.tsx        — Root layout with ThemeProvider
    page.tsx          — Main page orchestrator
    globals.css       — Theme variables + animations
  components/
    Navbar.tsx        — Top nav with theme toggle
    Hero.tsx          — Landing / boot screen
    ProfileSection.tsx — About, skills, education
    ProjectSection.tsx — Project grid with category filter
    ContactSection.tsx — Socials + thank you screen
    Marquee.tsx       — Scrolling skills ticker
  data/
    portfolio.json    — ALL content lives here (edit freely)
  hooks/
    useTheme.tsx      — Dark/Light theme context
  types/
    index.ts          — TypeScript interfaces
```

## Theme System

Toggle between **Dark Minimal** and **Light Minimal** themes via the top-right button.

Theme is persisted in `localStorage`. CSS custom properties in `globals.css`:

```css
[data-theme='dark']  { --bg: #0a0a0a; --text: #f0f0f0; ... }
[data-theme='light'] { --bg: #f7f7f5; --text: #0f0f0f; ... }
```

## Customizing Data

Edit `src/data/portfolio.json` to update:
- Profile info (name, bio, stats, socials)
- Software skills & language proficiency
- Education & experience
- Projects (title, category, description, tags, author)

## Adding Real Images

Replace gradient placeholders by adding actual images to `/public/projects/`:
```json
{ "cover": "/projects/your-image.jpg" }
```
Then update `ProjectSection.tsx` to use `<Image>` from `next/image`.

## Build for Production

```bash
npm run build
npm run start
```
