# OPEN_ITEMS

Everything the build could not source, per the brief's unknown-fact protocol (§0).
Each visible `[[TK]]` marker on the site has a line here; items without markers are
build/deploy decisions awaiting the owner.

## Visible [[TK]] markers

1. **Resume PDF link** — `/about`. No resume file or URL was provided. Add the file
   (e.g. `assets/resume.pdf`) or a link, then replace the marker.
2. **LinkedIn profile URL** — `/about`. Not provided in the brief; not guessed.

## Unsourced items handled without on-page markers

3. **GitHub profile URL** — footer and /about link to `github.com/siddarthnyati`,
   inferred from the GitHub Pages target `siddarthnyati.github.io` in brief §9.
   Verify the username is correct.
4. **Repo name / final URL** — brief §9 says `siddarthnyati.github.io/<repo>` without
   naming the repo. Local repo is `~/stablecoin-lab`; rename freely before pushing —
   nothing in the site depends on the repo name (all paths are relative; the 404 page
   detects the subpath at runtime).
5. **`og:image` absolute URL** — most social scrapers require an absolute URL.
   `assets/og.png` exists and is referenced relatively; once the final URL is known,
   consider replacing the relative references with absolute ones.
6. **Pitch.com deck** (`CB-Presentation…`) — not linked from any page, deliberately:
   its first 19 slides are the ResMed resupply story, which is outside this site's
   scope and involves a prior employer. Decide separately whether any public page
   should link the deck.
7. **Issuer reserve data** — Parity's reserve surface uses a *fictional composite*
   issuer profile, labelled as such, rather than quoting Circle/Tether attestation
   figures I could not verify offline. If you want real issuer data, source the
   latest attestation reports and replace the composite.
8. **Cost model rates** — card blended rate (2.6% + 10¢), off-ramp (0.50% + 0.10%),
   L2 fee (2¢), escrow float APR (5%), reserve multiple (2.5×) are all labelled
   demo values chosen for plausibility, not sourced quotes. Replace with cited
   figures if the console should argue with real numbers.
9. **Lighthouse** — run locally (see README). If the score reads below 95 on
   performance or accessibility in your environment, file the failing audit here.

10. **Prototype thumbnails** — `assets/shots/*.jpg` were captured 2026-08-03 from the
    four Lovable preview links via headless Chrome (the previews resolve to tokenized
    `id-preview--*.lovable.app` URLs; tokens expire, so re-capturing later needs the
    `lovable.dev/preview/...` links again). Each thumbnail is framed, flagged
    "Prototype · demo data", and alt-texted as illustrative. If a prototype's landing
    screen changes, re-capture for freshness.

11. **Tax card in the homepage career arc** — the owner stated the tax → healthcare
    → payments arc directly; the tax step is written without employer, product, or
    numbers because none were provided. Supply one line (org + a real outcome) to
    match the healthcare and payments cards.

## Build decisions made under autonomy (flagging, not asking)

- Site name/wordmark is simply "Siddarth Nyati"; POC 5 kept the working name
  **Parity** (brief allowed renaming; the name survived scrutiny).
- The signature rails diagram renders the three questions as filled (answered),
  half (cryptography-only), and hollow (open) dots; that visual grammar is used
  consistently everywhere, including the favicon and OG image.
- The Coinbase case study's "what I got wrong" openly includes the corrected
  derivatives claim, per brief §4's warning — treated as a feature, not a bug.
