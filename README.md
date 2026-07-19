# Lumen Screen

Lumen Screen is an original European streaming and publishing product. It demonstrates discovery, personalised watchlists, progress-aware content, and a creator studio without copying an existing media brand.

[Watch the running product demo](docs/demo.webm)

## Business problem

Media organisations need both a compelling viewer experience and a manageable editorial workflow. Lumen Screen connects audiences discovering programmes with publishing teams preparing original releases.

## Intended users

- Viewers discovering European programmes
- Editorial and production teams managing a release slate
- Media organisations building accessible direct-to-audience products

## Key workflows

- Search and filter programmes by title and genre
- Review viewing progress and metadata
- Add or remove programmes from a watchlist
- Create a validated programme draft
- Review production status

## Vue technical highlights

- Vue 3 Composition API and typed single-file components
- Pinia for catalogue, watchlist, and publishing state
- Vue Router for Discover, My List, and Creator Studio
- Reusable media-card component
- Computed discovery filters and watchlist selectors
- Vitest store coverage

## Architecture and data flow

Pinia owns the programme catalogue and user/editor actions. Route views consume the typed store, computed selectors derive collections, and reusable media cards communicate focused user intent.

## Accessibility and responsive behaviour

Search and filter controls are labelled, actions have descriptive names, status is textual, and layouts adapt from desktop grids to single-column mobile browsing.

## Project structure

- `src/views/DiscoverView.vue` — discovery and filtering
- `src/views/WatchlistView.vue` — personal library
- `src/views/StudioView.vue` — publishing workflow
- `src/components/MediaCard.vue` — reusable programme card
- `src/store.ts` — media-domain state
- `docs/demo.webm` — recorded workflow

## Run locally

```bash
npm ci
npm test
npm run build
npm run dev
```

## Tradeoffs

Programme metadata and progress are local scenarios. Production would add authentication, streaming delivery, rights management, recommendations, telemetry, moderation, and content encoding.

## Roadmap

- Accessible player with captions and audio description
- Profiles and parental controls
- Editorial scheduling and localisation
- Privacy-aware recommendations
- Playback quality reporting
