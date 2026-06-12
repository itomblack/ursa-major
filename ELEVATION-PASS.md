# Elevation Pass — raise the design craft of an existing prototype

You are doing a **designer's polish pass** on a working, brand-correct prototype. The UX flow, copy structure, bundle mechanics, and brand system are approved and locked. Your job is to make the page feel like it was crafted by a senior brand designer — sharper hierarchy, finer details, more confident composition — not to redesign it.

Read these two files first for full context:
- `/Users/itomblack/Library/CloudStorage/Dropbox/11-Repos/ursa-major/SHARED-BRIEF.md` (product data, discount logic, required modules)
- `/Users/itomblack/Library/CloudStorage/Dropbox/11-Repos/ursa-major/BRAND-REFINEMENT.md` (locked brand system: Publico Text/Source Serif 4 headings, Founders Grotesk/Hanken Grotesk body, near-white #FBFAF7 base, navy #122A3D dark sections, gold #C28A3D as the Mountain Glow signal)

## What "elevated" means here (do these)

1. **Typographic rhythm.** Audit every text size/weight/leading against a consistent scale. Large serif display should be confident (clamp sizes generous on desktop), eyebrows/labels consistently sized and letter-spaced, body measure 60–72ch max. Kill any awkward orphan-prone line breaks in headlines with `text-wrap: balance` where supported.
2. **Spacing discipline.** Consistent vertical rhythm between sections (define a spacing scale and stick to it). More generous whitespace around hero and feature moments. No cramped cards.
3. **Product vessels.** Make the CSS/SVG bottles/jars noticeably more refined: subtler gradients, believable highlights/shadows, consistent label typography (serif product name, tiny sans sub-line), a soft contact shadow. They should look like a considered brand illustration system, not placeholder shapes. Mountain Glow's vessel should glow subtly (soft gold ambient halo) wherever it appears as the hero/anchor.
4. **Micro-interactions.** Tighten hover/active states on every interactive element (cards lift subtly, buttons have pressed states, toggles animate smoothly). Selection state changes in the builder should feel satisfying: a gentle scale/settle, a checkmark draw, the price ticking. Respect prefers-reduced-motion.
5. **The discount ladder.** Make the tier-progress visualization genuinely beautiful — a refined progress treatment (notched track, labeled stops at 10/15/20/25%, the current tier highlighted in gold, the next tier hinted). This is the conversion centerpiece; it should feel premium, not like a SaaS progress bar.
6. **Sticky components & cart drawer.** Polish: better internal alignment, clearer hierarchy (items → savings → total → CTA), navy surfaces with crisp white/gold text, smooth open/close (translate + fade, content staggers in slightly).
7. **Section transitions.** Where light sections meet navy sections, design the seam (generous padding, perhaps a hairline or a subtle radius on the band) so it feels intentional.
8. **Detail sweep.** Consistent border radii across the page (pick 2–3 radii max). Consistent shadow language (one soft ambient + one lifted). Hairlines at #E4E0D6. Focus-visible rings in gold. Buttons: consistent heights, padding, icon alignment.

## Hard constraints (do NOT)
- Do NOT change the UX paradigm, section order, copy meaning, or the consult/tier/layer/reveal/chapter logic.
- Do NOT change product data, prices, or the discount math (1→0%, 2→10%, 3→15%, 4→20%, 5→25% + free shipping).
- Do NOT change the brand system (fonts/palette as specced). No new fonts, no new colors beyond tints/shades of existing tokens.
- Do NOT touch the `#proto-switch` block near `</body>`.
- Keep the file self-contained (embedded style/script, Google Fonts only).
- Keep mobile-first excellence: verify the layout at 390px in your head as you work — tap targets ≥44px, no horizontal overflow, sticky bars never cover content irretrievably.
- Preserve all accessibility (aria, focus, reduced-motion).
- After editing: re-verify the embedded JS parses (`node --check` on the extracted script) and that all three bundle states still compute correctly.

## Quality bar
When you're done, the page should withstand a side-by-side with the real ursamajorvt.com PDP and feel like the same brand on its best day. If any module looks "AI-generated default" (generic card grids, flat equal-weight sections, timid type), rework its composition until it has a point of view.
