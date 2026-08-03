# OPEN_ITEMS

Everything the build could not source, per the brief's unknown-fact protocol (§0).
Each visible `[[TK]]` marker on the site has a line here; items without markers are
build/deploy decisions awaiting the owner.

## Visible [[TK]] markers

1. **Resume PDF link** — `/about`. No resume file or URL was provided. Add the file
   (e.g. `assets/resume.pdf`) or a link, then replace the marker.
2. ~~LinkedIn profile URL~~ — resolved 2026-08-03; owner supplied
   `linkedin.com/in/siddarth-nyati` (now on /about and the homepage footer).
12. **Timeline dates** — homepage journey uses owner-stated years (2014 engineering,
    2018 Infosys, 2021 Dartmouth, 2022 Motional). The healthcare-resupply and Visa
    chapters are shown without years because none were provided — confirm order/dates.
13. **Infosys attribution** — the tax achievements (600K users/~$10M saved; 71 forms,
    5M+ users; −30% effort; CSAT +11%) were owner-supplied without an employer name;
    they are attributed to the 2018 Infosys chapter by inference. Confirm.

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

14. **"What I got wrong" removed from all pages by owner direction (2026-08-03)** —
    brief §4 made the block mandatory per case study. The content survives at
    `/retro/` but is intentionally unlinked from the site. If the §4 requirement
    should win, re-add a link (footer suggestion: "Build journal →").

## Build decisions made under autonomy (flagging, not asking)

- Site name/wordmark is simply "Siddarth Nyati"; POC 5 kept the working name
  **Parity** (brief allowed renaming; the name survived scrutiny).
- The signature rails diagram renders the three questions as filled (answered),
  half (cryptography-only), and hollow (open) dots; that visual grammar is used
  consistently everywhere, including the favicon and OG image.
- The Coinbase case study's "what I got wrong" openly includes the corrected
  derivatives claim, per brief §4's warning — treated as a feature, not a bug.

15. **Honesty badge removed site-wide by owner direction (2026-08-03)** — brief §7
    required the "Concept prototype — illustrative data" badge on every screen.
    Removed everywhere per owner; the footer disclosure line ("Concept prototypes
    with illustrative data throughout — nothing shipped, had users, or was
    commissioned") remains on every page and now carries the §7 duty alone.
    The /about "two rules" paragraph was also removed by owner direction.
16b. **DeFiLend live embed restored via PUBLISHED app (2026-08-03)** — discovered
    `https://aave-reimagined-nyati.lovable.app` is already published and serves
    with no X-Frame-Options and no frame-ancestors: embeddable anywhere,
    permanent, token-free. DeFiLend's case page now embeds it by default and
    all its links point there. **Publish the other three projects in Lovable**
    (CryptoPos, Coinbase concept, NFT marketplace) and send the URLs to get the
    same treatment — until then those pages keep slideshows + preview links.
16a. **Live embeds reverted (2026-08-03)** — Lovable's inner app sends a
    frame-ancestors policy that rejects any ancestor chain outside lovable.dev,
    so in-page embeds show "refused to connect" in real browsers (my preview
    pane did not enforce ancestor CSP — verified broken on production, reverted
    same day). Case pages use auto-cycling screenshot slideshows + an
    "Open the live prototype" button. To get true in-page embeds: hit
    **Publish** in Lovable for each project and send the permanent URLs;
    published apps can then be tested for embeddability.
16. **Visa (Cardinal/DCAP) and Motional achievement details** are owner-supplied
    resume content, published as provided. Confirm public-shareability of the
    Cardinal/DCAP program names and figures (8B+, ~5%, 280bps, 50bps, 30% MoM).
