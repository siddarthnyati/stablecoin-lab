# Fable Brief — Crypto & Stablecoin Portfolio

**Owner:** Siddarth Nyati · **Mode:** autonomous. Owner is unavailable; do not block on questions.

## 0. How to use this brief

This is **intent and constraints, not a spec.** You own craft, layout, copy voice, component choices, and visual execution — make those decisions yourself and make them well.

What you do **not** own: the thesis (§2), the honesty rules (§7), and the factual claims. Those are fixed.

**Unknown-fact protocol.** If you need a number, date, or claim that isn't in this brief, do **not** invent one. Insert a visible [[TK: what's needed]] marker in the page and log it in OPEN_ITEMS.md at the repo root. A page with three honest gaps is shippable; a page with three invented statistics is not.

**Definition of done:** all routes in §3 exist and are complete, POC 5 (§5) is interactive, the labelling audit in §7 passes, Lighthouse ≥ 95 on performance and accessibility, and OPEN_ITEMS.md lists everything you couldn't source.

## 1. Who this is for

Hiring manager, **Visa — Manager, Stablecoin Labs (REF077615W)**, Commercial & Money Movement. Their job is to run a stablecoin innovation roadmap: discovery, POCs with success criteria, validation, and scale/no-scale business cases. Secondary reader: Sr TPM, Treasury Digital Assets.

They skim for forty seconds, then read one case study or leave. Optimise for that.

## 2. The thesis (fixed — the site's spine)

Stablecoins are a rails change, not a problem change. Whoever moves money still has to answer the three questions card networks spent thirty years on: is this credential real, is this person real, and who eats the loss when it isn't. I spent the last year on exactly those questions inside Visa's 3DS platform — network tokenization, passkey authentication, enriched authorization data, merchant acceptance economics. These are the same questions asked on the other side of the rail.

State it once in the hero, in the owner's voice. Never repeat it verbatim elsewhere.

**Second belief, stated once on the homepage:** people do not adopt financial products they cannot practise first. It shows up independently in two of the POCs; name it as a point of view rather than a coincidence.

## 3. Routes

    /                        Hero · credibility strip · POC cards · CTA
    /from-card-rails         Why the card-network background transfers (~400 words)
    /work/stablecoin-settle  POC 5 — build this, interactive (§5)
    /work/cryptopos          POC 2 — merchant crypto acceptance + rewards
    /work/defilend           POC 1 — Aave reimagined
    /work/coinbase           POC 3 — Coinbase retail gaps
    /work/nft-lending        POC 4 — NFT-collateralised lending
    /how-i-run-programs      Discovery → POC → validation → scale (§6)
    /about                   Bio, contact, resume link

## 4. Case-study structure (same skeleton, vary the execution)

Premise → why it's hard → the insight → what was built (annotated) → success criteria with a north star and why the obvious metric is wrong → what I'd do next / what I got wrong → live prototype link.

The "what I got wrong" block is mandatory on every case study. It is the highest-credibility element on the site.

### Content already available

**DeFiLend (Aave reimagined)** — five gaps identified: onboarding & education (no in-app tutorials or contextual nudges), insurance/protection (no decentralised insurance integration), confidence building (no paper trading — users fear losing funds with no way to practise), social/community (no forums, XP, leaderboards), AI/smart automation (no risk-tiered strategies; new users don't know what to do with idle assets). Features built: insurance layer, on-demand Learn Mode with contextual tooltips, market simulator with virtual assets, AI portfolio optimisation with risk-appetite rebalancing, social layer with contests and leaderboards, stock-backed loans against brokerage and wrapped-stock collateral, RWA/real-estate tokens, pre-vetted community vaults ("Stable Yield", "Web3 Innovation", "RWA Income"), crypto card rewards aggregation. Growth levers each carry a tracked metric: stock-collateral TVL and new-to-crypto users onboarded; NFT floor-price collateralisation, loan volume and default rates; activation rate and reduction in user errors/liquidations; reward inflows and % converted to deposits. Live: https://lovable.dev/preview/rMxkYMWPAXx0HH3pwYtnzfnhtGYl3l9A

**CryptoPos** — Merchant Mode (accept crypto, configure rewards) and User Wallet; BTC, ETH, USDC, SOL. The insight: stablecoin acceptance fails on merchant economics, not technology — settlement volatility, refund semantics, and no dispute rail. Card-rails parallel is direct: merchants change behaviour when the economics pay for it, which is exactly how enriched-data programs work on card rails (merchants send more data in exchange for interchange relief priced in basis points). Live: https://lovable.dev/preview/2PPeMp5KfySdjx2olWqeOC2v9u5gUVrz

**Coinbase** — additions were events/prediction trading, derivatives, portfolio analysis, paper trading, and a learning module. ⚠️ Coinbase has offered US futures since ~2023. Do **not** write that Coinbase lacked derivatives. Frame every addition as a gap in the *retail experience* — discoverability, comprehension, practice — not a gap in their product line. Any claim of the form "company X didn't have Y" that you cannot verify becomes a [[TK]]. Live: https://lovable.dev/preview/H0XJvqngNehQeC9mXD0cVk53voNqN4Am

**NFT lending** — collateral with no reliable price; the hard parts are oracle design and liquidity, not UI. Card-rails parallel: thin-file underwriting, deciding on an asset you can't value in real time. Metrics: LTV accuracy vs realised sale price, time-to-liquidate, bad-debt rate. Live: https://lovable.dev/preview/un4p3mBj7gU0PxBceKTH09RP5wwAmbhn

## 5. POC 5 — build this one, interactive

**Working name:** Parity. (Change it if you find better — the idea is parity between stablecoin acceptance and card acceptance economics.)

**Why it exists:** the req's preferred quals ask for stablecoin mechanics — reserve models, custody, mint/burn flows — and experience with issuers and processors. The other four POCs treat USDC as a payment asset, not as an instrument with a balance sheet behind it. This closes that gap, and it's the only POC that speaks directly to Commercial & Money Movement's remit.

**Premise:** a merchant can accept a stablecoin in thirty seconds. Deciding what to *do* with it afterwards is the actual product, and nobody builds for that.

Build it as an interactive demo inside the site — not a static mockup, not a separate app. Six surfaces:

1. **Settlement console.** Merchant accepts USDC and chooses to hold, convert to fiat, or split. Show the all-in cost of each path side by side against card interchange as the benchmark. This comparison is the centrepiece of the whole POC — make it the thing people screenshot.
2. **Reserve & attestation.** What actually backs the balance being held: issuer, reserve composition, last attestation date, and what "fully reserved" does and doesn't guarantee. Merchants holding stablecoin are taking credit exposure they usually don't realise.
3. **Redemption path.** Visualise mint/burn — what happens mechanically when the merchant converts to fiat, which party burns, which banking rail carries it, and the timing versus card settlement.
4. **Custody choice.** Self-custody versus qualified custodian, and what each changes for control, insurance, operational burden and regulatory posture. Present as a decision, not a feature list.
5. **Refund & dispute.** The missing chargeback rail. Propose a mechanism — escrow window, merchant-funded refund reserve, delivery attestation — and be explicit about who bears the loss in each. **This is the section that proves the card-rails background.** Give it the most room.
6. **Treasury view.** Exposure while holding, auto-sweep rules by threshold, and the volatility question even a "stable" balance carries.

**Success criteria to state:** merchant activation rate; share of volume settling to stablecoin vs fiat; all-in cost delta versus interchange; refund resolution time; disputed volume as a percentage of accepted volume. North star should be **repeat acceptance** — a merchant who accepts twice has actually adopted; one who accepts once has run an experiment.

All figures illustrative and labelled per §7.

## 6. /how-i-run-programs

Take CryptoPos and show it as the req's own lifecycle: discovery → POC with success criteria → validation → scale/no-scale business case. Include a milestone map with entry and exit criteria per gate; a dependency graph (custody provider, on/off-ramp, chain finality, BSA and compliance review, tax reporting); a risk register of five or six rows with likelihood, blast radius, mitigation and owner; a KPI tree with north star and instrumentation notes; and a governance model — reuse the owner's real seven-gate human review process (feature definition, acceptance criteria, design, code, test, dependencies, PRs), which was applied across four platform initiatives with 104 acceptance criteria.

Diagrams, not paragraphs.

## 7. Honesty rules (fixed — audit before you call it done)

- Persistent **"Concept prototype — illustrative data"** badge on every screen and every embedded figure.
- All numbers in the prototypes are demo values — $2.4B TVL, $12.5M supplied, 15.2% APY, 50K users, health factor 2.4, and anything you generate for POC 5. Label them inline. Unlabelled, they read as fabricated traction and end the conversation.
- **Never blur network tokenization with asset tokenization.** The owner's tokenization experience is payment-credential tokenization on card rails. On-chain asset tokenization is adjacent knowledge, not hands-on experience. Say so plainly wherever tokenization appears.
- No employer-internal architecture, endpoints, specification language, or unreleased roadmap. Public product names and open standards only: Visa Payment Passkey, Visa TMS, EMV 3DS, FIDO/WebAuthn.
- Nothing may imply these POCs shipped, had users, or were commissioned.
- Do not mention interview processes at any company.
- Every unverifiable claim becomes [[TK]] plus a line in OPEN_ITEMS.md.

## 8. Make it beautiful — this matters

The quality bar is **Linear, Stripe, Vercel** — restraint, typographic confidence, and obvious craft. Not a crypto site. No neon gradients, no glassmorphism, no glowing orbs, no animated price tickers, no floating 3D coins.

- **One signature device.** Build a recurring **rails diagram**: the same transaction traversing card rails versus stablecoin rails, with the three questions (credential real / person real / who eats the loss) marked at the points where each rail answers them. It anchors the hero, carries /from-card-rails, and returns in miniature at the top of each case study. One memorable visual beats five forgettable ones — invest here.
- **Type does the work.** A real modular scale, two weights maximum per screen, long-form copy at 65–75 characters per line. Editorial, not dashboard.
- **Dark, but properly.** Near-black rather than pure black, one accent colour used sparingly enough that it still means something, and genuine AA+ contrast on body text.
- **Space is the luxury signal.** Consistent 8px rhythm, generous section padding, nothing cramped.
- **Prototype screens as artifacts.** Soft frame, subtle border, numbered callouts pointing at *decisions* rather than features. Never a raw screenshot dropped on a background.
- **Motion, barely.** Short scroll-reveals and honest state transitions. No parallax, no scroll-jacking, nothing that delays reading.
- **Mobile is a first-class layout**, not a squeeze. It will be opened on a phone.
- Craft details that separate good from excellent: real favicon and OG image, considered 404, focus states that look designed, prefers-reduced-motion honoured, no layout shift on load.

## 9. Technical

Static site deployable to GitHub Pages at siddarthnyati.github.io/\<repo\>. No build step that can rot; inline or co-located CSS/JS. .nojekyll present. External prototype links open in new tabs. Semantic headings, alt text on every image, full keyboard navigation. Sub-1s first paint.

## 10. Build order

1. Skeleton, routing, design tokens, the rails diagram.
2. Homepage.
3. **POC 5 (Parity)** — interactive, in full. Highest value.
4. CryptoPos case study.
5. /how-i-run-programs.
6. DeFiLend (content largely liftable from §4).
7. Coinbase and NFT lending.
8. /from-card-rails, /about.
9. Accessibility, performance, labelling audit, OPEN_ITEMS.md.
