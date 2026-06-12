# Reels Lab — brief for a single showcase page of 6 founder-video section prototypes

## Purpose
A sixth page in the Mountain Glow prototype set. Unlike concepts 1–5 (full landing pages), this is a **section lab**: SIX different working prototypes of a "5 routine products × founder video reels" section, stacked on one long page, each fully interactive, so the team can compare approaches for combining product showcase with Emily Doyle's social-video content.

Read for context (brand + products are LOCKED):
- `/Users/itomblack/Library/CloudStorage/Dropbox/11-Repos/ursa-major/SHARED-BRIEF.md` — products, prices, regimen order, hero rule
- `/Users/itomblack/Library/CloudStorage/Dropbox/11-Repos/ursa-major/BRAND-REFINEMENT.md` — fonts (Publico Text/Source Serif 4 headings; Founders Grotesk/Hanken Grotesk body), palette (paper #FBFAF7 base, navy #122A3D dark, gold #C28A3D = Mountain Glow signal)
- `/Users/itomblack/Library/CloudStorage/Dropbox/11-Repos/ursa-major/ELEVATION-PASS.md` — the craft bar (vessel illustration quality, motion, spacing discipline)

## Page structure
1. **Lab masthead**: kicker "Section Lab · Founder Video", headline (e.g. "Five products. Emily on camera. Six ways to combine them."), short lede explaining what this page is, and an anchor nav of 6 chips that smooth-scroll to each section.
2. **Six lab sections**, each opening with a compact lab header: big index numeral (01–06), section name, one-line hypothesis, and two small chips — "Why it works: …" and "Watch out: …" (content given below). Then the full working module at production fidelity.
3. Slim footer.

Alternate light/dark treatment thoughtfully (e.g. Story Mode and Split Stage benefit from navy; Shelf and Timeline from paper).

## SIMULATED VIDEO — critical, no real assets exist
Build a reusable "reel" component that convincingly fakes a 9:16 founder video:
- Poster state: a styled vertical card — soft Vermont-toned gradient scene (each product gets its own hue family from its vessel color), the product's vessel illustration prominent, a circular "ED" avatar chip (gold ring), duration chip ("0:42"), play button.
- Playing state (on tap): poster dims slightly, a subtle Ken-Burns/parallax drift animates the scene, a thin gold progress bar fills over ~8s (sped-up stand-in), **caption lines appear in sync** (2–3 short captions per reel, styled like burned-in social captions — white text on soft navy scrim, sans, bold), a mute/unmute toggle (visual only), pause on second tap. At end: "replay" state + the product's add CTA brightens.
- Respect prefers-reduced-motion (no drift; captions still step).
- Write REAL caption copy in Emily's voice for each of the 5 products (e.g. Mountain Glow: "I made this one for my own skin at 47." / "Two winters of formulation." / "Watch how little you need.").
Keep this component consistent across all six sections so the comparison is about UX, not video styling.

## A tiny shared "routine" state
A slim sticky pill (bottom right, navy): "Your routine · N products · $X". Every "Add" button across all six sections feeds the same state (Mountain Glow pre-added & locked, per hero rule). Discount ladder math from the shared brief applies (1→0%,2→10%,3→15%,4→20%,5→25%+free ship). Clicking the pill opens a minimal drawer listing items + total. This makes every module's CTA feel real without rebuilding the full builders.

## The six sections (build ALL, in this order)

**01 · The Reel Rail** — horizontal scroll-snap rail of five 9:16 reel cards in routine order (01–05 step chips). Next card peek-cropped. Active card plays inline; under it a persistent "+ Add — $XX" button. Desktop: all five visible (center one slightly larger); mobile: snap carousel with dots.
Chips — Why: "Zero learning curve — the exact grammar of the feed they came from." Watch out: "Rails get skimmed; products 4–5 risk never being seen."

**02 · Story Mode** — an entry card ("Watch my 4-minute morning · with Emily", big play affordance, five tiny chapter dots). Tap opens a full-screen stories player (modal): five auto-advancing chapters (use the ~8s fake reels), progress dashes at top, chapter label ("Step 2 · The serum"), and at each chapter's end a 2s hold with a large "Add this step +" button before auto-advance. Tap right/left half to skip/back, X or Esc to close. On close, a small toast reflects what was added. Body scroll locked while open; restore focus on close.
Chips — Why: "Strongest narrative transportation — the regimen becomes one 4-minute ritual." Watch out: "It's a modal; the entry card has to be irresistible or no one sees it."

**03 · Split Stage** — navy section. Desktop: sticky 9:16 player left; right column lists the five products as rows (vessel chip, name, step, price, add toggle). Selecting a row swaps the player's reel (with a quick crossfade) and highlights the row; the playing product's add button is emphasized. Mobile: player on top (16:10-ish crop), product tabs as a scrollable chip row directly beneath, list below.
Chips — Why: "Watching and adding are the same surface — no context switch to lose them in." Watch out: "Heaviest build; on mobile the player must not bury the product list."

**04 · The Founder's Shelf** — paper/editorial. A styled shelf still-life of the five vessels (your best illustration work — shelf line, soft shadows, Mountain Glow subtly haloed). Hover (desktop) or tap (mobile) a vessel: it crossfades into a vignette reel for that product playing in place, with Emily's handwritten-feeling field note beneath in italic serif (write 5 real one-liners, e.g. "I put this on before my first coffee."). On mobile, auto-cycle gently through products every ~6s until first touch.
Chips — Why: "The most premium treatment — video without the feed aesthetic." Watch out: "Lowest video prominence; the affordance must be unmissable on touch."

**05 · Routine Timeline** — a vertical morning timeline: 6:45 AM Cleanse → 6:46 The Serum (gold, largest) → 6:47 Moisturize → 6:48 Eyes → 6:49 Body. Each stop: timestamp, step name, a circular video token (small looping poster) that expands inline to the playing reel on tap, one-line benefit, add button. A running "total: 4 minutes" framing line at the end ("The whole ritual takes less time than your coffee brews.").
Chips — Why: "Reframes five products as four minutes — attacks the 'too much effort' objection head-on." Watch out: "Timeline metaphors drift decorative; keep it ruthlessly simple."

**06 · Proof Pairing** — for each product, a duo card: Emily's reel ("why I made it") beside a customer UGC reel (different poster style: rounded amateur-feeling frame, name/age chip like "Linda, 63 · 4 months in", star row). Write real short UGC caption copy for all five. Layout: alternating rows on desktop, stacked pairs on mobile. One shared add button per product row.
Chips — Why: "Founder authority + proof from people who look like the buyer, in one module." Watch out: "Doubles the content ask — and density can get heavy; let it breathe."

## Output & constraints
- ONE self-contained file: `/Users/itomblack/Library/CloudStorage/Dropbox/11-Repos/ursa-major/reels-lab.html` (embedded style+script, Google Fonts link only — same font URL as the other pages).
- Do NOT include any prototype-switcher bar — it gets injected separately afterward.
- Mobile-first perfection at 390px AND desktop at 1280px+. Tap targets ≥44px. Semantic HTML, aria for the modal/player controls, focus management, prefers-reduced-motion.
- All interactivity working: six modules + shared routine state + drawer. No console errors. After writing, extract and `node --check` the script.
- Craft bar = the elevated concepts. No generic AI-slop layouts; every section needs a point of view.
