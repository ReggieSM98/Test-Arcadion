# Test-Arcadion

A Next.js (Pages Router) currency exchange app that proxies Fixer API rates and displays converted values for popular currencies.

## Features
- Fixed header with dropdown navigation (Home/Info).
- Currency cards for USD, GBP, JPY, AUD, CAD with live conversions from EUR.
- Fixer API proxy route (`/api/rates`) that filters requested currency codes.
- Last-updated timestamp and formatted currency display.
- Info page with responsive layout and a remote cat image.
- SCSS modules with a single breakpoint for desktop vs mobile/tablet.

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

## Production Build
```bash
npm run build
npm start
```
