<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your app

This contains everything you need to run your app locally.

## Leads Sheet

https://docs.google.com/spreadsheets/d/1A7eovPPn55j_gokzFe4dcEE_hjxZAEyToBTiJQ3oIb8/edit?gid=585886812#gid=585886812

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Create `.env.local` based on `.env.example` and set:
   `GOOGLE_SCRIPT_URL`
   Optional for Telegram notifications: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
3. Run the API server (local dev only):
   `npm run api`
4. Run the app:
   `npm run dev`

## Deploy to Cloudflare Pages

1. Build the app:
   `npm run build`
2. Create a Pages project and deploy:
   `npx wrangler pages project create executive2`
   `npx wrangler pages deploy dist`
3. Set the Pages environment variables:
   `npx wrangler pages secret put GOOGLE_SCRIPT_URL`
   `npx wrangler pages secret put TELEGRAM_BOT_TOKEN`
   `npx wrangler pages secret put TELEGRAM_CHAT_ID`

The API endpoint will be available at `/api/leads` via Pages Functions.
