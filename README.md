# Ursa Major — Benefits Section · Parallax Build

Implementation of the Mountain Glow "Benefits" section from the team Figma file ([PDP / LPs · Aug 2025](https://www.figma.com/design/BfiAHlvvgrzkDq886k6gLJ/)) — deep-blue band, five benefit rows around an arch-cropped product photo, with a **gentle scroll parallax** on the photo (it travels slower than the page).

**Live:** https://itomblack.github.io/ursa-major/

## Run locally

The page is self-contained — open `index.html` directly in a browser (keep the `assets/` folder beside it), or:

```sh
node .claude/static-server.js   # → http://localhost:8753
```

## Implementation notes

- Parallax is scroll-driven via `requestAnimationFrame`, transform-only (compositor-friendly), clamped so the photo never exposes an edge, and disabled under `prefers-reduced-motion`.
- Tune the effect with `STRENGTH` in the inline script (currently `0.82`); the image's `width: 260%` sets the available travel headroom.
- Headings target **Publico Text**, body **Founders Grotesk** (both commercial); Google-font fallbacks (Source Serif 4, Hanken Grotesk) are wired in until the licensed faces are self-hosted.
- Grey blocks above/below are placeholder context sections from the Figma frame, kept so the parallax can be felt.
- The earlier LP concept explorations that previously lived in this repo are preserved in git history (first commit).
