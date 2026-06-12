# Brand Refinement Pass — match real Ursa Major identity

Apply this to the existing prototype WITHOUT changing its layout, UX flow, copy, or bundle mechanics. This pass only corrects **typography, color, and texture** so the page reads as authentically Ursa Major (reference: their live PDP + brand font spec).

## What's changing and why
My first pass used per-concept display fonts and a heavy warm-earthy palette (dominant cream + pine green + clay grain). The real brand is **cleaner and cooler**: lots of near-white space, a signature **deep navy** for dark/feature sections and footer, **gold** reserved as a product accent, editorial serif headings + neutral grotesque body. Fix it.

---

## 1. Typography — unify to the real brand stack (all concepts use the SAME pairing now)

Replace whatever display/body fonts this file currently uses. Distinctiveness now comes from layout, not type.

**Load (replace the existing Google Fonts `<link>`):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400&display=swap" rel="stylesheet">
```

**Font stacks (name the real licensed fonts first, free fallback second):**
```css
/* HEADINGS — real brand font is Publico Text */
--serif: 'Publico Text', 'Source Serif 4', Georgia, 'Times New Roman', serif;
/* BODY — real brand font is Founders Grotesk */
--sans:  'Founders Grotesk', 'Hanken Grotesk', ui-sans-serif, system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif;
```
- Point ALL heading/display elements (h1–h4, big numbers, pull quotes, the brand wordmark) at `--serif`.
- Point ALL body/UI/labels/buttons at `--sans`.
- Remove the old display-font variable and its usages (Fraunces / Newsreader / Bricolage Grotesque / Cormorant / Instrument Serif / Spectral — whichever this file used).
- Publico Text is a sturdy, moderate-contrast editorial serif — keep heading weights at 400–600 (not ultra-thin), letter-spacing near 0 to slightly negative on large sizes. It should feel like a refined newspaper/editorial serif, not a high-contrast Didone.

## 2. Color — adopt the real palette

Update this file's `:root` tokens to these values (keep the file's existing token NAMES, just repoint them to the nearest value below; add `--navy` if missing):
```css
--paper:    #FBFAF7;  /* near-white page base, barely warm — DOMINANT background */
--bone:     #F2EFE8;  /* light section surface */
--cream:    #EDE8DC;  /* warm card tint — use SPARINGLY, not page-wide */
--ink:      #16242E;  /* deep navy-charcoal — primary text + dark UI */
--navy:     #122A3D;  /* signature brand deep blue — feature bands, footer */
--navy-2:   #1C3A52;  /* lifted navy for gradients/hover */
--gold:     #C28A3D;  /* Mountain Glow hero accent (keep your existing ~#C99A4B if already used) */
--gold-deep:#A6732C;
--moss:     #56654A;  /* supporting natural green — small touches ONLY */
--clay:     #B0714B;  /* warm accent — small touches ONLY */
--stone:    #687078;  /* secondary text, cool grey */
--line:     #E4E0D6;  /* hairlines */
```

### Color principles (this is the core of the fix)
1. **Backgrounds are predominantly near-white** (`--paper`), with generous whitespace like the real PDP. Cream is an occasional section tint, never the whole page.
2. **Every dark / feature / "moment" section that was pine-green becomes NAVY** (`--navy`, white text). Navy is the brand's signature dark — feature quote bands, founder spotlight on dark, footer, the dark builder panel (concept 3), etc.
3. **Gold is the Mountain Glow signal** — use it deliberately for: the hero product highlight, the locked-anchor state, key numbers/savings, and the primary "add/buy" CTA accent. Don't spray gold everywhere.
4. **Primary buttons:** solid `--ink`/`--navy` with white text for general CTAs; the hero/commit CTA may be solid `--gold` on dark or `--ink`. Premium, clean, keep existing radii.
5. **Greens and clay recede** to small supporting roles (a tag, a vessel hue), not dominant bands.
6. **Texture:** reduce paper grain to barely perceptible (opacity ≤ .22) or remove it. The real site is clean — favor whitespace and hairlines over heavy texture.
7. Keep good contrast (WCAG AA): navy text on paper, white text on navy, gold used where it passes on its background.

## 3. Product vessel hues — keep, but slightly cooler/cleaner
Keep the distinct per-product vessels, but set them against clean light surfaces. Mountain Glow stays golden amber. Others can lean a touch cooler/more muted so the page doesn't read overly earthy.

---

## Hard constraints
- DO NOT change layout, section order, copy, interactions, or the discount math.
- DO NOT touch the `#proto-switch` block near `</body>` (the prototype switcher tool) — leave it exactly as is.
- Keep it a single self-contained file; only external resource is the Google Fonts link.
- Preserve accessibility (focus states, aria, reduced-motion, ≥44px targets).
- After editing, sanity-check: no broken CSS var references, JS still parses, all three bundle states still work.
