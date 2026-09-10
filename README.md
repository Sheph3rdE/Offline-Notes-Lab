# Offline Notes Lab

A quiet place to keep notes before they're ready for anyone else — styled like an old library card catalog.

Secret Shelf is a small React + TypeScript app for jotting down raw thoughts and working them into shape through a five-step workshop process: **Jot → Sort → Draft → Revise → Shelve**. Everything is saved locally in your browser, so it works offline and keeps your notes private to your own device.

## Features

- **Add notes** — a simple title + body form for capturing thoughts quickly
- **Local persistence** — notes are saved to `localStorage`, so they survive page reloads and browser restarts
- **Online/offline indicator** — a status stamp in the sidebar reflects your connection in real time, using `navigator.onLine` and the browser's `online`/`offline` events
- **Workshop tracker** — a five-step sidebar tracker (Jot, Sort, Draft, Revise, Shelve) to mark where a note currently stands; your progress is remembered between visits
- **Two-column layout** — notes and the add-note form on the left, status and tracker in a sticky sidebar on the right, collapsing to a single column on smaller screens

## Tech stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for development and bundling
- Plain CSS (no framework) — a custom paper/ink/brass design system
- No backend, no database — all state lives in the browser via `localStorage`

## Getting started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Sheph3rdE/secret-shelf.git
cd secret-shelf
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open the local URL Vite prints in your terminal (typically `http://localhost:5173`).

Build for production:

```bash
npm run build
```

The compiled site is output to `dist/`.

## Project structure

```
secret-shelf/
├── src/
│   ├── components/
│   │   ├── NoteForm.tsx        # Form for adding a new note
│   │   ├── NoteList.tsx        # Renders saved notes as cards
│   │   ├── StatusStamp.tsx     # Online/offline indicator
│   │   └── WorkshopTracker.tsx # 5-step progress tracker
│   ├── hooks/
│   │   ├── useNotes.ts         # Notes state, persisted to localStorage
│   │   ├── useOnlineStatus.ts  # Wraps navigator.onLine
│   │   └── useWorkshopStep.ts  # Tracks and persists the active workshop step
│   ├── pages/
│   │   └── Home.tsx            # Main page, composes everything into the layout
│   ├── styles/
│   │   └── global.css          # Design system: colors, type, layout
│   ├── types/
│   │   └── index.ts            # Shared TypeScript types
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── wrangler.jsonc              # Cloudflare Workers static asset config
```

## Deployment

This project is deployed as a Cloudflare Worker serving static assets. The `wrangler.jsonc` file at the repo root points Wrangler at the `dist` folder produced by `npm run build`, so no server-side code is needed:

```jsonc
{
  "name": "secretshelf",
  "compatibility_date": "2026-09-10",
  "assets": {
    "directory": "./dist"
  }
}
```

Pushing to `main` triggers an automatic build and deploy through Cloudflare's Git integration:

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`

## Design notes

The visual language draws from library card catalogs and commonplace books — warm paper tones, hairline rules instead of card shadows, a serif display face for headings, and a monospace face for small labels like dates and step numbers. No blue or purple anywhere in the palette; accents are forest green, brass, and burgundy.


