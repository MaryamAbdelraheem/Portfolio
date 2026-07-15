# Maryam Abdelraheem — Portfolio

A React + Vite portfolio site.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Deploy to Vercel

**Option A — GitHub + Vercel dashboard (recommended, no CLI needed)**

1. Create a new repo on GitHub and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Go to https://vercel.com and sign in (you can sign in with your GitHub account).
3. Click **Add New... → Project**.
4. Select the repo you just pushed.
5. Vercel auto-detects Vite — leave the default settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `dist` (auto-filled)
6. Click **Deploy**. In about a minute you'll get a live URL like `your-project.vercel.app`.
7. Any future `git push` to `main` will auto-redeploy the site.

**Option B — Vercel CLI (no GitHub needed)**

1. Install the CLI:
   ```bash
   npm install -g vercel
   ```
2. From this project folder, run:
   ```bash
   vercel
   ```
3. Follow the prompts (log in / sign up, confirm project settings — defaults are fine).
4. It deploys and gives you a live URL immediately. Run `vercel --prod` to push to your production URL.

## Before you publish

- Update the placeholder email in `src/App.jsx` (search for `your-email@example.com`)
- Double check the LinkedIn URL in `src/App.jsx` (search for `linkedin.com/in/maryam-abdelraheem`)
