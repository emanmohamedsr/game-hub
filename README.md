<h1>
  <img src="./src/assets/logo.webp" alt="logo" width="48" valign="middle" />
  <span>GameHub</span>
</h1>

Game Hub displays games, supports searching, filtering by platform/genre, and shows game details. The app uses React Query for data fetching and caching, Chakra UI for the design system, and axios for API requests.

## [Live Demo](https://game-hub-two-sandy.vercel.app/)

## Tech stack

- React ^19.1.1
- Vite ^7.1.7
- TypeScript ~5.8.3
- @tanstack/react-query ^5.90.2
- @chakra-ui/react ^3.27.0
- @emotion/react ^11.14.0
- axios ^1.12.2
- react-router-dom ^7.9.4
- zustand ^5.0.8
- react-icons ^5.5.0

## High-level project layout

```
/ (repo root)
├─ index.html
├─ package.json
├─ vite.config.ts
├─ tsconfig.json
├─ public/
└─ src/
   ├─ main.tsx             # Application entry (providers + router)
   ├─ routes/              # Router and route configuration
   ├─ pages/               # Route page components (index, GameDetail, NotFound)
   ├─ components/          # Reusable components (GameCard, GameGrid, etc.)
   ├─ providers/           # Chakra, Network, QueryClient provider wrappers
   ├─ services/            # API-Client.ts (axios instance) and service helpers
   ├─ hooks/               # Custom hooks (useGames, useGame, useGenres, etc.)
   ├─ store/               # zustand stores
   ├─ theme/               # Chakra UI theme overrides
   ├─ utils/               # Utility helpers
   └─ interfaces/          # TypeScript interfaces
```

## Screenshots

Home / main views

![Home - Light](./src/assets/screenshots/home-light.png)

Network Connection

![Home - Light](./src/assets/screenshots/offline-actions-light.png)
![Home - Light](./src/assets/screenshots/connection-back.png)
![Home - Light](./src/assets/screenshots/offline-actions-dark.png)
![Home - Light](./src/assets/screenshots/connection-back-dark.png)

Search & results

![Search - Light](./src/assets/screenshots/search-light.png)
![Search results - Light](./src/assets/screenshots/search-result-light.png)

Game details

![Game details - Dark](./src/assets/screenshots/game-details-pgae-dark.png)
![Game details - Light](./src/assets/screenshots/game-details-pgae-light.png)

genre/ Platform / sort - filtering

![Select genre - Dark](./src/assets/screenshots/select-genre-dark.png)
![Platform sorting & filtering - Light](./src/assets/screenshots/platform-sorting-filtering-light.png)
![Platform filtering results - Light](./src/assets/screenshots/platform-sorting-filtering-results-light.png)

Mobile / drawer

![Mobile genres drawer](./src/assets/screenshots/mobile-genres-drawer.png)
