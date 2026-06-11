# Scottsdale Behavioral Health Group — Design System

**Codename:** SBHG-WEB-1.0 · **Domain:** scottsdalebh.com · **Namespace:** `window.DesignSystem_8429f7`

A locked design system for the scottsdalebh.com rebuild. Brand identity is derived from the SBHG ID badge (navy + gold). Premium, calm, trustworthy, clinical-but-warm — closer to a private bank than a hospital.

> **Tagline:** Transforming lives through compassionate care and lasting recovery.

## Sources provided
- `uploads/scottsdalebh.png.avif` — the SBHG logo (gold cross badge + "SCOTTSDALE" gold caps; the "BEHAVIORAL HEALTH GROUP" subtitle is white and only visible on dark). The circular badge mark was extracted to `assets/badge-mark.png`.
- A written schema (SBHG-WEB-1.0) specifying colors, type, signature devices, layout, components, page map, motion, and content rules. This README encodes it.
- Structural reference only: scottsdaleprovidence.com (section flow). **No copy, imagery, stats, or reviews from any reference site are reused** — all content here is original and illustrative.

---

## CONTENT FUNDAMENTALS
**Voice:** direct, warm, second person. Talk to "**you**" and "**your recovery**" — never "patients" in marketing copy. No fear-based language, ever.

**Examples (the right tone):**
- "Your path to lasting recovery starts here."
- "You deserve more than a program — you deserve a team that sees you."
- "We're here whenever you're ready."

**Casing:** Display headings are **UPPERCASE** (Montserrat, tracked). Eyebrows are gold UPPERCASE labels. Body is sentence case. H3 may be title case.

**CTAs are verbs:** "Verify Insurance," "Call Now," "Start Today," "Send Message."

**Statistics:** sourced and verifiable only (SAMHSA, NIMH, NIH), with the source cited in caption type beneath. No invented numbers.

**Emoji:** never. **Tone of imagery:** warm, candid, desert-Southwest — no clinical white-coat stock.

**Placeholders:** anything client-specific (phone, address, license #s, accepted payers, exact levels of care) is flagged `[NEEDS-CLIENT]` until confirmed.

---

## VISUAL FOUNDATIONS
**Color philosophy:** Navy is the canvas, gold is the jewelry. Target ~80% navy/neutral, ~15% white space, ~5% gold. Navy and gold never appear at equal weight. Gold is **never** body text — gold text is caps-only, ≥14px, letter-spaced.

- **Navy:** `--navy-900 #0E1B33` (dark sections, footer, overlays), `--navy-800 #13234A` (nav, dark cards), `--navy-700 #1B2F5C` (hover).
- **Gold:** `--gold-500 #C9A24B` (primary), `--gold-300 #E3C778` (highlight/hover), `--gold-700 #A87F2F` (shadow/pressed).
- **Neutrals:** `--white`, `--cream-50 #F8F6F1` (warm light bg), `--gray-200` (borders), `--gray-600` (body), `--ink-900 #1A2233` (headings). **No pure black anywhere.**

**Signature gradients:** `--grad-gold` (135° A87F2F→E3C778→C9A24B) on the logo circle, notch bands, primary CTAs, photo keylines. `--grad-navy-fade` veils photos on dark hero/CTA sections.

**Type:** Display/H1–H2 = **Montserrat** 700/800 UPPERCASE, tracking 0.04–0.08em. Body = **Inter** 400/500, line-height 1.65. Stat numerals = Montserrat 800, tabular-nums, oversized. Every H2 carries the **signature gold underline rule** (64×3px, `--grad-gold`) — the recurring identity thread, drawn in left-to-right on reveal.

**Backgrounds:** full-bleed color fields, contained content (1240px). Section rhythm alternates `navy-800 → white → cream-50 → navy-900`; never two navy sections adjacent without a Notch Band between. Photos are warm; on navy they sit in gold keyline frames.

**Spacing & layout:** 12-col grid, 1240px max, 24px gutters. Section padding 96–120px desktop / 64px mobile.

**Radius:** 20px cards/photos, 8px buttons/inputs, full circle for icon chips.

**Shadows:** exactly one — `--shadow-soft 0 8px 24px rgba(14,27,51,.08)` — on **light sections only**. **No drop shadows on navy.** No glassmorphism, no neon, no purple gradients.

**Borders:** 1px `--gray-200` on light; 3px `--grad-gold` keyline on photos; 1.5px gold outline on icon circles; 1px gold vertical dividers between value/stat groups.

**Buttons:** Primary = `--grad-gold` bg, navy text, Montserrat 700 caps, 0.06em tracking. Secondary (dark) = transparent + 2px gold border → fills gold on hover. Secondary (light) = transparent + 2px navy border.

**Motion:** scroll-reveal = 24px rise + fade, 450ms ease-out `cubic-bezier(.22,1,.36,1)`, once per **section** (not every child). Gold H2 rule draws in on reveal. Buttons transition 150ms (no transforms on nav). `prefers-reduced-motion` → instant opacity, no rise.

**Hover/press:** primary button → gold-300 bg on hover; outline buttons fill on hover; pressed states use gold-700. Nav items get a gold left-rule on hover.

---

## SIGNATURE VISUAL ELEMENTS
1. **Notch Band** — gold gradient band with an angled chevron notch; transition device between dark sections. Max one per viewport. → `NotchBand`
2. **Gold Keyline Frames** — photos on navy in 20px rounded frames with a 3px `--grad-gold` border. → `.sbhg-keyline`
3. **Outlined Icon Circles** — 1.5px gold-outlined circles with line icons; never filled, never multicolor. → `IconCircle`
4. **Watermark Cross** — oversized brand cross at 6–8% opacity bleeding off a navy edge. Max one per page.
5. **Gold Vertical Dividers** — 1px gold rules between value/stat groups. → `.sbhg-vrule`

---

## ICONOGRAPHY
- **System:** [Lucide](https://lucide.dev) — thin, line-style icons (stroke-width ~1.5), no fill, monochrome gold. This matches the badge-back "outlined icon circle" language exactly. Loaded from CDN (`unpkg.com/lucide`) — **flagged substitution:** the brand has no proprietary icon font; Lucide is the closest line-icon match. Swap for a custom set if one is commissioned.
- **Treatment:** icons live inside `IconCircle` (gold outline) for values/features, or inline at gold-700 (light) / gold-300 (dark). Stars in testimonials are simple gold/gray SVG paths.
- **Emoji:** never used. **Unicode glyphs:** only arrows (→) and quote marks (") as typographic accents — not as UI icons.
- **No multicolor or filled icons.** No hand-drawn SVG illustrations.
- **Brand mark:** `assets/badge-mark.png` (extracted gold cross badge, transparent circular PNG). The full lockup is rendered by the `BadgeMark` component (mark + SCOTTSDALE gold caps + white tracked subtitle) — type is live, not baked into the image, so it stays crisp at any size.

---

## INDEX / MANIFEST
**Root**
- `styles.css` — global entry (import this one file). `@import`s every token file.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill wrapper.

**`tokens/`** — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css` (Google Fonts: Montserrat + Inter), `base.css` (element resets + signature utilities: `.sbhg-container`, `.sbhg-eyebrow`, `.sbhg-rule`, `.sbhg-h2`, `.sbhg-keyline`, `.sbhg-vrule`, `.sbhg-reveal`).

**`assets/`** — `badge-mark.png` (brand mark), `logo-original.png` (source logo).

**`components/`** (14, namespace `window.DesignSystem_8429f7`)
- `core/` — `Button`, `Eyebrow`, `SectionHeading`, `Card`, `Badge`
- `forms/` — `Input`, `Select`
- `brand/` — `BadgeMark`, `IconCircle`, `NotchBand`
- `content/` — `StatBlock`, `ValueItem`, `Testimonial`, `ProgramCard`

**`ui_kits/website/`** — `index.html` (Home), `contact.html` (interior page), `sections.jsx`, `Home.jsx`, `README.md`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

### Page map (build order)
Home → Substance Abuse → Mental Health → Dual Diagnosis → Our Team → Articles → Contact → Verify Insurance. Every page ends with the Verify Form + Footer stack; every interior page opens with a short navy hero (photo + overlay + H1 + breadcrumb).

### Don'ts
No gold body text · no gold-on-gold · no drop shadows on navy · no glassmorphism/neon/purple gradients · max one Notch Band or watermark cross per viewport · no emoji · no filled/multicolor icons · never reuse reference-site copy, imagery, stats, or reviews.
