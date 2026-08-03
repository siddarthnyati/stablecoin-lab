# Crypto & Stablecoin Portfolio — Siddarth Nyati

Static site: five stablecoin POCs (one fully interactive) built around the thesis
that stablecoins are a rails change, not a problem change. Built from
[FABLE_BRIEF.md](FABLE_BRIEF.md); unresolved facts are tracked in
[OPEN_ITEMS.md](OPEN_ITEMS.md).

## Structure

- No build step. Plain HTML + one shared stylesheet (`assets/site.css`) + minimal JS.
- Every route is a folder with an `index.html`; all asset paths are relative, so the
  site works at any GitHub Pages subpath. `.nojekyll` is present.
- `404.html` resolves its links at runtime to survive project-page subpaths.

## Develop

```bash
python3 -m http.server 8734
```

then open http://localhost:8734.

## Deploy

Push to a GitHub repo, enable Pages on the `main` branch, root folder. Before
sharing: resolve the `[[TK]]` markers listed in OPEN_ITEMS.md (resume link,
LinkedIn URL).
