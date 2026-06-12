# Ursa Major — Mountain Glow LP Design Exploration

High-fidelity, interactive HTML prototypes for a paid-social acquisition landing page leading with **Mountain Glow Golden Serum**, exploring how to carry a single-product visitor toward a complete anti-aging regimen bundle.

## Viewing

Every page is a self-contained HTML file — open any of them directly in a browser, or serve the folder:

```sh
node .claude/static-server.js   # → http://localhost:8753
```

Start at **[index.html](index.html)** (overview hub with the concept critique). A slim switcher bar at the top of every page jumps between variants.

## Contents

| Page | What it is |
|------|------------|
| `index.html` | Overview hub — all concepts with critique |
| `concept-1-progressive-reveal.html` | Pure PDP first; regimen reveals on intent |
| `concept-2-skin-consult.html` | 3-question consult builds the regimen for you |
| `concept-3-layered-routine.html` | Spatial layering builder; serum as locked anchor |
| `concept-4-tiered-ritual.html` | Good/better/best tiers → live customizable builder |
| `concept-5-founder-editorial.html` | Long-form founder essay with companion ledger |
| `reels-lab.html` | Section lab: 6 ways to pair the 5 products with founder video reels |
| `benefits-parallax.html` | Figma "Benefits" section build with gentle scroll parallax |

Shared specs: `SHARED-BRIEF.md` (products, pricing, discount ladder), `BRAND-REFINEMENT.md` (type + color system), `ELEVATION-PASS.md` (craft bar), `REELS-LAB-BRIEF.md`.

## Notes

- All bundles share one mechanic: 1 product 0% → 2/10% → 3/15% → 4/20% → 5 products 25% + free shipping, with Mountain Glow pre-selected and locked.
- Headings target **Publico Text**, body **Founders Grotesk** — both commercial; Google-font fallbacks (Source Serif 4, Hanken Grotesk) are wired in until the licensed faces are self-hosted.
- Product photography in `assets/` was exported from the team Figma file; product "vessel" illustrations are CSS/SVG.
- These are design prototypes — no real cart/checkout integration.
