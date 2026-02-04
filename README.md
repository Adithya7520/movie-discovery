# 🎬 React Native Movie Discovery App

A feature-rich movie discovery mobile application built using **React Native (Expo)** and **The Movie Database (TMDB) API** as part of the Book An Artist frontend coding challenge.

---

## 🚀 Features

- 🔥 Popular movies list with infinite scroll (pagination)
- 🔍 Movie search with debouncing
- 🎥 Movie details screen with:
  - Poster & backdrop
  - Ratings and metadata
  - Cast list (horizontal scroll)
  - Reviews (paginated list)
- ⚡ Optimized FlatList usage
- 🖼️ Lazy-loaded images
- 📱 Android APK build using EAS

---

## 🛠 Tech Stack

- **React Native** (Expo)
- **Expo Router** (file-based navigation)
- **TMDB API**
- **EAS Build** (APK generation)

---

## 📂 Project Structure

app/
├── \_layout.tsx
├── index.tsx # Popular Movies Screen
├── search.tsx # Search Screen
└── movie/
└── [id].tsx # Movie Details Screen

src/
├── components/
│ ├── MovieCard.tsx
│ ├── CastCard.tsx
│ └── MovieDetailsCard.tsx
├── constants/
│ └── api.ts
└── services/
└── tmdb.ts

---

## 🔐 Environment Variables

API keys are managed using environment variables.

### `.env.example`

```env
EXPO_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
EXPO_PUBLIC_TMDB_READ_ACCESS_TOKEN=your_read_access_token_here
```
