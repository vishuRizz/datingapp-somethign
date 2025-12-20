# Pensyl Web - OAuth Handler

Simple Next.js web app that handles Google OAuth for the Pensyl Electron app.

## Setup

1. **Install dependencies:**
   ```bash
   
   npm install
   ```
   


   


2. **Configure environment variables:**
   
   Edit `.env.local` and add your Google OAuth credentials:
   ```env
   GOOGLE_CLIENT_ID=your-client-id
   GOOGLE_CLIENT_SECRET=your-client-secret
   ```

3. **Google Cloud Console setup:**
   - Create OAuth 2.0 Client ID (Web application type)
   - Add redirect URI: `http://localhost:5173/api/auth/callback/google`

## Running

```bash
npm run dev
```

App runs on: http://localhost:5173

## How it works


1. User opens Electron app
2. Electron opens this web app in a browser window
3. User clicks "Continue with Google"
4. Google OAuth flow completes
5. User is redirected to `/success` page
6. Success page communicates session back to Electron
7. Window closes automatically

## Endpoints

- `/` - Login page with Google OAuth button
- `/api/auth/signin/google` - Initiates Google OAuth
- `/api/auth/callback/google` - OAuth callback
- `/success` - Success page (shown after OAuth)

## Tech Stack



- Next.js 16 (App Router)
- BetterAuth (OAuth handling)
- Tailwind CSS (Styling)
- TypeScript
