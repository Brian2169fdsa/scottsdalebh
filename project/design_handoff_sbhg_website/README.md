# Handoff: Scottsdale Behavioral Health Group — Marketing Website

## Overview
A full marketing website for **Scottsdale Behavioral Health Group (SBHG)**, a premium behavioral-health provider in Scottsdale, AZ. Brand feel: deep navy + metallic gold — calm, trustworthy, "private bank, not hospital." The site is an 8-page, clickable, multi-page set covering programs, conditions, team, insurance/admissions, and contact, all driven by a locked design system (codename **SBHG-WEB-1.0**, namespace `window.DesignSystem_8429f7`).

## About the Design Files
The files in this bundle are **design references created in HTML/React (via in-browser Babel)** — high-fidelity prototypes that show the intended look, content, and behavior. **They are not production code to ship directly.** The task is to **recreate these designs in your target codebase's environment** (Next.js, Astro, plain React, Vue, a CMS theme, etc.) using its established patterns, routing, image pipeline, and component conventions. If no codebase exists yet, choose an appropriate framework (a static/SSG stack like Next.js or Astro fits this marketing site well) and implement there.

The prototypes use a runtime loader that fetches `.jsx` files and transforms them with Babel in the browser. **Do not replicate that loader in production** — it exists only so the prototype renders without a build step. Port the components to your framework's normal build.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, components, and interactions are all specified. Recreate the UI pixel-accurately using the tokens and component specs below. Photography is the client's own (provided as optimized JPEGs in `assets/`).

---

## Design System (SBHG-WEB-1.0)

**Philosophy:** Navy is the canvas, gold is the jewelry. ~80% navy/neutral, ~15% white space, ~5% gold. Navy and gold never appear at equal weight. **Gold is never body text** — gold text is caps-only, ≥14px, letter-spaced. No pure black anywhere. No emoji. Line-style icons only (Lucide), monochrome gold, never filled/multicolor.

### Color tokens (exact)
| Token | Hex | Use |
|---|---|---|
| `--navy-900` | `#0E1B33` | Dark sections, footer, hero overlays |
| `--navy-800` | `#13234A` | Nav bar, dark cards, CTA bands |
| `--navy-700` | `#1B2F5C` | Hover on navy, mega-menu panel |
| `--gold-500` | `#C9A24B` | Primary gold — rules, icons, accents |
| `--gold-300` | `#E3C778` | Highlight / hover gold |
| `--gold-700` | `#A87F2F` | Shadow / pressed gold |
| `--white` | `#FFFFFF` | — |
| `--cream-50` | `#F8F6F1` | Warm light section background |
| `--gray-200` | `#E2E4E9` | Borders/dividers on light |
| `--gray-600` | `#5A6373` | Body text on light |
| `--ink-900` | `#1A2233` | Headings on light |
| `--grad-gold` | `linear-gradient(135deg, #A87F2F 0%, #E3C778 45%, #C9A24B 100%)` | Logo circle, notch bands, primary CTAs, photo keylines, rules |
| `--grad-navy-fade` | `linear-gradient(180deg, rgba(14,27,51,.92), rgba(14,27,51,.65))` | Veils photos on dark hero/CTA sections |

### Typography
- **Display / H1–H2:** Montserrat 700/800, **UPPERCASE**, tracking 0.04–0.08em.
- **Body:** Inter 400/500, line-height 1.65.
- **Eyebrows:** Montserrat 600, gold (`--gold-500`/`--gold-300` on dark), UPPERCASE, 14px, tracking 0.12em.
- Type scale (CSS clamp): `--display-xl: clamp(36px,4.2vw,56px)` (hero H1), `--display-lg: clamp(30px,3.2vw,40px)` (section H2), `--heading-md: clamp(22px,2.2vw,28px)`, `--body-lg: clamp(17px,1.4vw,19px)`, `--body: 17px`, `--caption: 14px`.
- Every section H2 carries the **signature gold underline rule** (64×3px, `--grad-gold`), drawn left-to-right on scroll reveal.

### Spacing / layout
- 12-col grid, **1240px** max content width (`--content-max`), 24px gutters.
- Section padding `--section-pad-y: clamp(64px,8vw,120px)` desktop / 64px mobile.
- Radius: cards/photos **20px** (`--radius-card`), buttons/inputs **8px** (`--radius-input`), icon chips full circle.
- **Shadow:** exactly one — `--shadow-soft: 0 8px 24px rgba(14,27,51,.08)` — on **light sections only**. No drop shadows on navy. No glassmorphism, no neon.

### Signature visual elements
1. **Notch Band** — gold gradient band with an angled chevron notch; transition device between dark sections (e.g. hero→content, pre-footer→footer). Max one per viewport.
2. **Gold Keyline Frames** — photos on navy in 20px rounded frames with a 3px `--grad-gold` border (`.sbhg-keyline`: `border-radius:20px; padding:3px; background:var(--grad-gold)`; inner element radius = 17px).
3. **Outlined Icon Circles** — 1.5px gold-outlined circles holding a line icon; never filled.
4. **Watermark Cross** — oversized brand cross at ~6% opacity bleeding off a navy edge. Max one per page.
5. **Gold Vertical Dividers** — 1px gold rules between value/stat groups (`.sbhg-vrule`).

### Buttons
- **Primary:** `--grad-gold` background, navy text, Montserrat 700 caps, tracking 0.06em, 8px radius, no shadow. Hover → `--gold-300` fill.
- **Secondary (on dark):** transparent + 2px gold border → fills gold on hover.
- **Secondary (on light):** transparent + 2px navy border.
- CTA labels are always verbs: "Verify Insurance," "Call Now," "Learn More," "Send Message."

### Motion
- Scroll reveal: 24px rise + fade, 450ms ease-out `cubic-bezier(.22,1,.36,1)`, **once per section** (not per child). Gold H2 rule draws in on reveal.
- `prefers-reduced-motion` → instant opacity, no rise.
- Buttons transition 150ms. Nav items get a gold left-rule on hover.

### Iconography
[Lucide](https://lucide.dev) line icons, stroke-width ~1.5, monochrome gold. No filled/multicolor icons. Only typographic glyphs used: → and ". Brand mark is `assets/badge-mark.png` (gold cross badge, transparent PNG); full lockup = mark + "SCOTTSDALE" gold caps + "BEHAVIORAL HEALTH GROUP" white tracked subtitle (live type, not baked).

---

## Voice & Content
Direct, warm, second person — talk to "**you**" and "**your recovery**," never "patients." No fear-based language. Display headings UPPERCASE; body sentence case. Statistics must be sourced/verifiable (SAMHSA/NIMH/NIH) with the citation in caption type. Anything client-specific is marked **`[NEEDS-CLIENT]`** in the prototype copy and must be confirmed before launch (phone, address, license #s, accepted payers, exact levels of care, staff bios/headshots, real reviews).

---

## Site Map / Pages
All pages share: **Utility Bar → Sticky Header w/ mega-menu → (page content) → Verify Insurance form → Footer + closing notch.** Interior pages open with a short navy hero (gradient + watermark cross + breadcrumb + H1 + gold rule + subhead + two CTAs).

| File | Page | Purpose |
|---|---|---|
| `index.html` | **Home** | Hero, stat band, intro, full-bleed stat-feature over photo, two split features, navy CTA band, values row, testimonials, program cards, insurance wall |
| `substance-abuse.html` | **Substance Abuse hub** | CTA strip, continuum intro, substances grid (6), detox, extended care, alumni, family, modalities, testimonials, insurance |
| `mental-health.html` | **Mental Health hub** | Primary-MH positioning, clinical foundation cards, conditions grid (5), **weekly group schedule table**, evening/family/alumni calendar, modalities, testimonials, insurance |
| `dual-diagnosis.html` | **Dual Diagnosis** | Integrated-care intro, two-step model cards, substances + conditions grids, dual-path CTA, success story, modalities, insurance |
| `programs.html` | **Programs (levels of care)** | Continuum overview cards (6), anchored detail sections: detox, stabilization, inpatient, continuum timeline, outpatient (PHP/IOP/OP cards), evening IOP, family therapy, CTA band, insurance |
| `our-team.html` | **Our Team** | Intro + accreditation badges, 2-col bio grid with headshot slots, CTA band |
| `insurance-admissions.html` | **Insurance & Admissions** | Accessibility mission, payer logo wall, 3-step admissions, private-pay split, FAQ accordion |
| `contact.html` | **Contact** | Info rows + map slot + contact form, specialties chips, facility gallery (no global verify form on this page) |

---

## Global Components

### Utility Bar
Navy-900, 44px tall. Left: gold phone link "Get Help Today · (480) 555-0100" with `phone-call` icon. Right: facebook / instagram / linkedin gold line icons. Container max 1240.

### Header + Mega-Menu (sticky)
- Navy-800, 80px tall, sticky top, 1px bottom border `rgba(255,255,255,.06)`. Left: brand lockup (links Home). Center: nav items (Montserrat 600, 13.5px, white; active item gold-300 with 2px gold bottom border). Right: primary "Verify Insurance" button.
- **Mega-menu:** hovering a hub item (Substance Abuse / Mental Health / Dual Diagnosis) opens a full-width **navy-700** panel below the header, top border `rgba(201,162,75,.25)`, shadow `0 28px 50px rgba(0,0,0,.4)`. Inner container = columns separated by 1px gold vertical dividers (`.sbhg-vrule`). Each column: gold-300 caps header (12px, tracking 0.14em) over a 1px gold-bottom rule, then link list. Modalities column is double-width with a 2-column link grid. Items: white 82% opacity, hover → gold left-rule (2px `--gold-500`), bg `rgba(255,255,255,.05)`, text white.
- **Column logic:** Substance Abuse = Substances + Treatment + Modalities; Mental Health = Disorders + Treatment + Modalities; Dual Diagnosis = Substances + Disorders + Treatment + Modalities (the superset). Panel closes on mouse-leave of the header.
- **Data:** Substances = Alcohol, Opioids, Methamphetamine, Cocaine, Benzodiazepines, Marijuana. Disorders = PTSD & Trauma, Anxiety, Depression, Bipolar Disorder, Personality Disorders. Modalities (14) = Occupational Therapy, CBT, DBT, Acceptance & Commitment, Motivational Interviewing, Solution-Focused, Internal Family Systems, Deep Brain Reorienting, EMDR, Neurofeedback, Narrative, Grief, Trauma, Somatic Experiencing. In Phase 1 these link to hub-page anchors; swap to real child-page URLs as those ship.

### Verify Insurance Form (`#verify`)
Navy-900 section, 2-col: left = eyebrow "No obligation" + H2 "Verify your insurance" + paragraph + "HIPAA-compliant & secure" gold caps with `lock` icon. Right = navy-800 card (radius 20, 1px `rgba(201,162,75,.18)` border, 36px padding) with a 2-col form: Full Name*, Phone*, Email, Date of Birth, Insurance Provider (select), Member ID, optional message (full width), primary submit "Verify My Benefits" (full width), HIPAA disclaimer. On submit → success state (gold check IconCircle + "Thank you").

### Footer
Navy-900, 4-col: brand lockup + mission line + accreditation chips (Joint Commission, LegitScript, AZDHS — gold outline pills) / Programs links / Explore links / Contact (address `[NEEDS-CLIENT]`, phone, email). Bottom row: copyright + "AZDHS License #[NEEDS-CLIENT]" and Privacy/Terms/Accessibility. Followed by a closing **up**-direction Notch Band.

### CTA Strip (hub pages)
Navy-900 row of 4 quick actions, each: gold outlined-circle icon + caps title + sub-label, divided by 1px gold borders: **Call Now** (tel), **Verify Insurance** (#verify), **Get Help** (contact), **Get Directions** (maps).

### Reusable section blocks
- **SplitFeature** — 2-col (text + gold-keyline photo), alternating `flip`, cream/white backgrounds. Eyebrow + H2 + gold rule + body + check-bullets (gold `check` icons) + secondary-light button.
- **ChipGrid** — grid of linked cards (substances/disorders): gold outlined-circle icon + title + one-line desc; hover lifts 3px + gold border.
- **ModalitiesGrid** — auto-fill grid of 14 line-item cards (`check-circle` gold icon + label).
- **CtaBand** — navy-800, centered eyebrow + H2 + body + primary/secondary buttons, watermark cross.
- **FaqAccordion** — single-open accordion; white cards, gold `plus`/`minus` toggles.
- **Testimonials** — navy-900, 3 white quote cards (gold quote mark, 5 gold stars, navy initial avatar).
- **InsuranceWall** — white section, eyebrow "Coverage" + H2 "Most major insurance accepted" + paragraph + the payer logo wall image (`assets/payers.jpg`, 14 payer logos, max-width 1040, centered).

---

## Featured / Signature Sections

### Home — Hero
Fixed 660px tall, `contain: strict`. Background photo `assets/hero-bg.jpg` (`background-size: cover; background-position: center 30%`) under `--grad-navy-fade` overlay. Centered content: brand mark (80px), H1 `--display-xl` "YOUR PATH TO LASTING RECOVERY STARTS HERE", subhead, primary "Verify Insurance" + secondary-dark "Call Now". Watermark cross bleeds off the right. Closing down-notch (42px). **Note:** the fixed height + `contain: strict` + a small/optimized background image are intentional — they prevent layout-shift jitter; replicate the spirit (reserve the box, optimize the image) in production however your stack prefers.

### Home — Stat-Feature over photo (below hero)
Full-width section, fixed 900px, `contain: strict`, background `assets/mh-entrance.jpg` (`cover`, `center 40%`). **Overlay:** `linear-gradient(90deg, rgba(14,27,51,.94) 0%, rgba(14,27,51,.86) 42%, rgba(14,27,51,.6) 100%)` (darkest over the left text zone, subject stays visible right-center). Container 1240, 2-col grid `1.4fr 0.6fr`, vertically centered.
- **Left block (max 700px):** H2 Montserrat 800 caps white, tracking 0.05em, `clamp(28px,2.9vw,42px)`, line-height 1.16 — "RECOVERY ISN'T RARE. 73% OF ADULTS WHO'VE FACED A SUBSTANCE USE PROBLEM SAY THEY'RE IN RECOVERY — OR RECOVERED." → 64×3 gold rule → source line (Inter 14px, white 70%) "Source: SAMHSA, National Survey on Drug Use and Health" → body para 1 + body para 2 (Inter 16.5px, line-height 1.65, white 90%, max-width 620).
- **Right column (centered):** 220px circle filled with `--grad-gold` containing a navy (`#13234A`) medical cross (SVG plus path) → label Montserrat 700 caps white 18px "UNDERSTAND MORE ABOUT / OUR APPROACH TO RECOVERY" → primary button "LEARN MORE" (min-width 220, tracking 0.06em).
- Closing down-notch.

### Mental Health — Weekly Group Schedule (signature trust device)
White-on-cream table inside a rounded bordered card. Header row navy-800 with gold-300 caps column heads (Time, Mon–Fri). Rows alternate white / cream-50; first cell = gold-700 time (Montserrat 700) + group name beneath; cells = group names. `[NEEDS-CLIENT]` caption to confirm real calendar/facilitators/credentials and whether to publish. Followed by an **Evening/Family/Alumni calendar** (navy-900 rows: Evening IOP Mon/Wed/Thu 5:30–8:30 PM, monthly Family Support Group, monthly Alumni Night).

---

## Interactions & Behavior
- **Mega-menu:** open on hover of a hub nav item; panel swaps by hovered item; closes on header mouse-leave. (For production add keyboard focus/`:focus-within` + Esc and mobile tap behavior.)
- **Scroll reveal:** every `<section>` fades+rises 24px once when it enters the viewport (IntersectionObserver), respecting `prefers-reduced-motion`.
- **Forms (Verify + Contact):** client-side only in the prototype — `preventDefault` → swap to a success panel. Wire to your real HIPAA-compliant lead handler / CRM (e.g. CallTrackingMetrics + a secure form endpoint). Required fields marked with `*`.
- **FAQ accordion:** single open item; click toggles.
- **Image slots (prototype only):** team headshots, contact map, facility gallery use a drag-and-drop `<image-slot>` web component so the client can drop images in-browser. In production replace with normal `<img>`/`<picture>` (or CMS-managed media).
- **Tweaks panel (prototype only):** a floating dev panel toggles brand-accent gold (3 palettes), interior-hero layout (Overlay/Split), surface (Warm/Cool), and density. **Do not port** — it's an authoring affordance, not a site feature. The default/locked values are: accent = classic gold (`#C9A24B`/`#E3C778`/`#A87F2F`), hero = Overlay, surface = Warm, density = Cozy.

## State Management
Minimal. Per-page React state only: mega-menu open item, accordion open index, form submitted boolean. No global store, no data fetching in the design (everything is static marketing content). In production, content (programs, team, modalities, payers, schedule) is a strong fit for a CMS or typed content collections.

## Responsive Behavior
Designed desktop-first at 1320px. Container caps at 1240px and centers. For production, collapse: mega-menu → mobile accordion/drawer; 2-col splits/grids → single column; stat-feature 2-col → stacked; nav → hamburger. Hit targets ≥44px. Keep type ≥16px on mobile.

## Design Tokens
All tokens live in `_ds/design-system-8429f70d-d28f-4795-9c53-0a755f52354a/tokens/` (`colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`, `base.css`). Import map and full values are summarized in the **Design System** section above. Fonts: Google Fonts **Montserrat** (400/500/600/700/800) + **Inter** (400/500).

## Assets
All in `assets/` (client-provided photography, optimized to ~150–190KB JPEGs for fast decode):
- `badge-mark.png` — gold cross brand mark (transparent PNG).
- `hero-bg.png` is **not** used; hero uses `hero-bg.jpg` — man approaching the SBHG entrance (home hero background).
- `mh-entrance.jpg` — client walking through SBHG glass doors (home stat-feature background, below hero).
- `payers.jpg` — accepted-insurance logo wall (Aetna, Allegiance, Anthem, BlueCross BlueShield, Beacon, Carelon, Cigna, GEHA, Medica, MultiPlan, Optum, PHCS, UMR, UnitedHealthcare).
Icons: Lucide via CDN in the prototype — use your codebase's Lucide package in production.

## Files in this bundle
- `index.html`, `substance-abuse.html`, `mental-health.html`, `dual-diagnosis.html`, `programs.html`, `our-team.html`, `insurance-admissions.html`, `contact.html` — the 8 page shells (thin loaders that mount the React components).
- `lib/` — page bodies + shared chrome: `shared.jsx` (utility bar, mega-menu header, footer, verify form, interior hero, reusable section blocks, tweaks wiring), `home.jsx`, `substance-abuse.jsx`, `mental-health.jsx`, `dual-diagnosis.jsx`, `programs.jsx`, `our-team.jsx`, `insurance-admissions.jsx`, `contact.jsx`, `loader.js` (prototype runtime — **do not port**).
- `tweaks-panel.jsx`, `image-slot.js` — prototype-only authoring helpers (**do not port**).
- `assets/` — brand mark + photography.
- `_ds/.../` — the bound design-system source: `styles.css` + `tokens/*.css` (the source of truth for all tokens), `readme.md` (full brand guide), `_ds_bundle.js` (compiled components), `components/*` (Button, SectionHeading, Eyebrow, Badge, Card, Input, Select, BadgeMark, IconCircle, NotchBand, StatBlock, ValueItem, Testimonial, ProgramCard — read these to match exact component styling).

> Implement against the tokens in `_ds/.../tokens/*.css` and the component specs in `_ds/.../components/`. The HTML pages are your visual + content reference; the README is the source of truth for measurements and behavior.
