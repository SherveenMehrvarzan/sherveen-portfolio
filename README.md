# Sherveen Portfolio (React + Vite + Tailwind)

## Quick start
```bash
npm install
npm run dev
```

Then visit http://localhost:5173

## Build & Deploy to GitHub Pages
1. Edit `package.json` and set:
   ```json
   "homepage": "https://<your-username>.github.io/sherveen-portfolio"
   ```
2. Build & deploy:
   ```bash
   npm run build
   npm run deploy
   ```

Vite is configured with `base: '/sherveen-portfolio/'` so assets resolve on GitHub Pages.

## Replace assets
- `public/portrait.jpg`
- `public/SherveenMehrvarzan_FinalResume.pdf`
- Logos & images in `public/images/*` (keep the filenames or update paths in `resumeData.js`).

## Where to edit content
- `src/data/resumeData.js` has all your experiences, highlights, skills, awards, and education.
