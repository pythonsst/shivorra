# CuePilot Studio — site

Static services site. No build step, no dependencies: plain HTML + one stylesheet.

## Files

- `index.html` — the whole page
- `styles.css` — design tokens and layout
- `.nojekyll` — tells GitHub Pages to serve the files as-is

## Local preview

```sh
python3 -m http.server 8000 --directory docs
# then open http://localhost:8000
```

## Hosting

GitHub Pages, served from `main` → `/docs`. Pushing to `main` redeploys.

## Before sharing with clients

The contact block and the service table carry placeholder values — email,
availability, timezone, practices, and week ranges. Replace them in
`index.html`, and delete the `.placeholder` note once they are real.
