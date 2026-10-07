# EPK GmbH

Website der EPK GmbH, Elektro-Fachbetrieb in Saarbrücken.

## Stack

- Next.js 16 (App Router)
- React 19, TypeScript
- Tailwind CSS
- Framer Motion

## Entwicklung

```bash
npm install
npm run dev
```

Der Dev-Server startet auf `http://localhost:3072`.

## Build

```bash
npm run build
npm start
```

## Struktur

- `app/` Routen (Start, Leistungen, Unternehmen, Kontakt, Impressum, Datenschutz)
- `components/` wiederverwendbare UI-Komponenten
- `lib/data.ts` Inhalte und Firmendaten
- `lib/images.ts` zentrale Bildquellen (aktuell Platzhalter, vor Live-Gang austauschen)
