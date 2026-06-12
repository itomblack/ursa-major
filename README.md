# Ursa Major — Benefits Section · Parallax Build

Implementation of the Mountain Glow "Benefits" section, in two switchable variants (toggle bar at the top of the page): **A · Parallax** — the photo drifts slower than the page; **B · Image transition** — the serum photo hands off to a botanical ingredients shot as you scroll, in three styles: **Dissolve** (filmic crossfade with counter-zoom), **Veil** (soft-edged mask sweeps up), and **Depth** (serum lifts out faster than scroll while botanicals rise beneath). Design source: the team Figma file ([PDP / LPs · Aug 2025](https://www.figma.com/design/BfiAHlvvgrzkDq886k6gLJ/)) — deep-blue band, five benefit rows around an arch-cropped product photo.

**Live:** https://itomblack.github.io/ursa-major/

## Run locally

The page is self-contained — open `index.html` directly in a browser (keep the `assets/` folder beside it), or:

```sh
node .claude/static-server.js   # → http://localhost:8753
```

## Implementation notes

- Variant B needs `assets/ingredients.jpg` (the botanical shot); until it exists the page shows a small notice in mode B.
- All motion is scroll-driven via `requestAnimationFrame`, transform-only (compositor-friendly), clamped so the photo never exposes an edge, and disabled under `prefers-reduced-motion`.
- Tune the effect with `STRENGTH` in the inline script (currently `0.82`); the image's `width: 260%` sets the available travel headroom.
- Headings target **Publico Text**, body **Founders Grotesk** (both commercial); Google-font fallbacks (Source Serif 4, Hanken Grotesk) are wired in until the licensed faces are self-hosted.
- Grey blocks above/below are placeholder context sections from the Figma frame, kept so the parallax can be felt.
- The earlier LP concept explorations that previously lived in this repo are preserved in git history (first commit).
