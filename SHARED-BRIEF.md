# Shared Build Brief — Mountain Glow Regimen Bundle Builder

All 5 concept prototypes share this foundation. Each concept differs in **UX paradigm**, not in product data, pricing, or brand identity. Read this fully before building.

---

## Brand Identity (Ursa Major)

Warm editorial · Vermont outdoor · natural textures · founder-led authenticity · premium but human.
AVOID: DTC bro-growth, countdown timers, fake urgency, badge spam, over-gamification, purple gradients, generic AI aesthetics.

### Color tokens (use as CSS variables, base palette shared across all concepts)
```
--cream:      #F4EFE6   /* page base, warm paper */
--bone:       #FBF8F2   /* lighter surface */
--ink:        #20221C   /* near-black, warm green-black text */
--pine:       #2E3B2C   /* deep forest green */
--moss:       #5B6B4E   /* muted sage-green */
--clay:       #B5754E   /* terracotta accent */
--gold:       #C99A4B   /* Mountain Glow golden hour accent — the hero color */
--stone:      #8C857A   /* warm grey for secondary text */
--line:       #DED6C7   /* hairline borders */
```
Each concept MAY shift emphasis (e.g. darker, more editorial, more clinical) but must stay inside this earthy warm family. Mountain Glow's signature color is `--gold`.

### Typography
- Use Google Fonts. Display = a characterful serif. Body = a refined humanist sans.
- DO NOT use Inter, Roboto, Arial, or Space Grotesk.
- Each concept should pick a DIFFERENT but on-brand pairing so the five feel distinct. Suggested options to choose from: Fraunces, Newsreader, Hanken Grotesk, Cormorant, Spectral, Libre Caslon, Bricolage Grotesque, Hanken, Instrument Serif, Source Serif 4.

### Product imagery
Do NOT depend on external image URLs (they break). Build product "bottles/jars" as **CSS/SVG** stylized vessels — minimal apothecary forms in earthy fills, each product a distinct hue. This looks intentional and on-brand. Optionally add subtle grain/noise via SVG filter or data-URI.

---

## Product Set & Pricing (IDENTICAL across all concepts)

| Step | Product | Role | Price | Vessel hue | Short benefit |
|------|---------|------|-------|-----------|---------------|
| 1 | Milky Cleanser | Cleanse | $24 | soft cream/oat | Gentle milk-to-foam cleanse, never stripping |
| 2 | **Mountain Glow Golden Serum** ⭐ HERO | Treat | $58 | golden amber (--gold) | Anti-aging serum for mature skin — fine lines, firmness, radiance |
| 3 | Alpine Rich Cream | Moisturize | $54 | sage/moss | Rich alpine moisture, all-day barrier support |
| 4 | Forest Alchemy Eye Cream | Eyes | $46 | deep pine | Brightens, de-puffs, smooths crow's-feet |
| 5 | Body Butter | Body | $32 | clay/terracotta | Whipped, fast-absorbing full-body hydration |

Full regimen list price = 24+58+54+46+32 = **$214**.

### HERO RULE (non-negotiable across all 5)
- Mountain Glow Golden Serum is the lead and the emotional anchor of every page.
- In the bundle builder, Mountain Glow is **pre-selected and locked** (cannot be removed — it's the base everyone builds around). Visually distinguished.
- Never feels like bait-and-switch: additional products are framed as "completing the routine Mountain Glow belongs to," expert-curated, never random cross-sell.

---

## Bundle Builder — Discount Logic (IDENTICAL across all concepts)

"Build your routine" energy, not "add random products." Mirror ursamajorvt.com/pages/build-your-own-bundle (buy-more-save-more).

Tiers by **number of products in bundle** (Mountain Glow counts as 1):
```
1 product   →  0% off   (just the serum)
2 products  →  10% off
3 products  →  15% off
4 products  →  20% off
5 products  →  25% off  + free shipping  (full ritual)
```
- Show: items added, running subtotal, current discount %, amount saved, and "add 1 more to save X%" nudge (helpful, not aggressive — no timers).
- Discount applies to whole bundle subtotal.

### Required builder states (every concept must show all three)
- **Empty/base**: only Mountain Glow selected (0% off). CTA still works — "Add just the serum."
- **Partial**: 2–4 products, discount climbing, gentle nudge toward the next tier.
- **Full**: all 5, max 25% off + free shipping, celebratory but calm confirmation.

---

## Required modules on every page (vary the FORM per concept, not the presence)
1. Hero — Mountain Glow front and center (founder/UGC/anti-aging messaging).
2. Founder storytelling module (Emily Doyle voice, creation story).
3. Mountain Glow product education (what it is + benefits: fine lines, wrinkles, firmness, hydration, radiance).
4. The "alone vs. as part of a routine" transition moment — the conceptual bridge from single → regimen.
5. The 5-step regimen presented as intentional/curated/expert-recommended.
6. Bundle builder with discount progression + the 3 states above.
7. Sticky component (sticky cart bar / sticky add-to-bundle / sticky progress).
8. Cart interaction (drawer or summary with running total + discount).

## Technical requirements
- Single self-contained `.html` file per concept. Embedded `<style>` + `<script>`. No build step, no external JS libs (Google Fonts link OK).
- **Mobile-first**, then desktop adaptation via media queries. Must look intentional at 390px AND 1280px+.
- Real, written copy throughout — no lorem ipsum.
- Working interactivity: selecting/deselecting products updates count, subtotal, discount %, savings, nudge, and sticky bar live. Cart drawer opens/closes.
- Accessible: semantic HTML, focus states, aria where it matters, prefers-reduced-motion respected, tap targets ≥44px.
- High craft: staggered load reveals, considered motion, real hierarchy. No AI-slop.
