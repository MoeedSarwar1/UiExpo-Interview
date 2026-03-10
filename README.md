# UI Interview App

A clean React Native UI component showcase built with Expo, featuring reusable components and pagination support.

## Features

- **Header Component** - Theme-aware header with customizable left/right icons
- **Dummy Button Component** - Reusable button with multiple variants (primary, secondary, danger) and sizes
- **FlatList with Pagination** - Infinite scroll with pull-to-refresh support
- **Drawer Navigation** - Side navigation menu with custom drawer content
- **Loading & Empty States** - Comprehensive state management for initial load, refreshing, and empty data
- **Dark Mode Support** - Full theme switching support

## Project Structure

```
app/               # Main app routes
components/        # Reusable UI components
  ├── header.tsx         # Header component
  ├── dummy-button.tsx   # Button component
  ├── drawer.tsx         # Drawer content
  └── ui/                # UI sub-components
constants/         # App constants and theme
hooks/             # Custom React hooks
components/data/   # Dummy data and utilities
```

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

3. Choose platform:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web
   - Scan QR code with Expo Go app

## Available Components

### Header

```tsx
<Header
  title="My Title"
  leftIcon={<Icon />}
  leftIconOnPress={() => {}}
  rightIcon={<Icon />}
  rightIconOnPress={() => {}}
/>
```

### DummyButton

```tsx
<DummyButton
  title="Press Me"
  onPress={() => {}}
  variant="primary" // 'primary' | 'secondary' | 'danger'
  size="medium" // 'small' | 'medium' | 'large'
  disabled={false}
/>
```

## Technologies

- Expo Router (File-based routing)
- React Navigation (Drawer navigation)
- TypeScript
- React Hooks
- Safe Area Context
