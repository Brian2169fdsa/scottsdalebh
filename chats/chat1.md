# Addiction Treatment Website

_Started 2026-06-11 02:23 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "BH"
Project currently has 1 file(s)
Current date is now June 10, 2026
</system-info>

<pasted_text name="Pasted text (208 lines)">
# Reference Site Content Inventory — scottsdaleprovidence.com
## Crawled 2026-06-10 · For the Scottsdale Behavioral Health Group rebuild (SBHG-WEB-1.0)

**How to use this doc:** This is a structural and informational inventory, not copy to reuse. Every section summary below describes what the page covers and how it's organized so we can rebuild the same architecture with SBHG's own original copy, photos, staff, programs, and data. All `[NEEDS-CLIENT]` markers are SBHG facts we must collect before writing that section.

---

## 1. Full Site Map (discovered URLs)

### Global navigation — top level
| Nav item | URL | Type |
|---|---|---|
| Home | / | Landing |
| Substance Abuse ▾ | /substance-abuse/ | Hub w/ mega-menu |
| Mental Health ▾ | /mental-health/ | Hub w/ mega-menu |
| Dual Diagnosis ▾ | /dual-diagnosis/ | Hub w/ mega-menu |
| Staff | /staff/ | Team |
| Articles | /recovery-center/ | Blog index |
| Contact | /contact/ | Contact |
| Verify Insurance | /#verify-insurance | Anchor to home form (filled button) |

### Mega-menu structure (confirmed from live dropdowns)
Each hub opens a multi-column mega-menu panel on white, columns separated by hairline rules, gold/orange hover. Column contents:

**SUBSTANCE ABUSE ▾** — 3 columns
| SUBSTANCES | TREATMENT | MODALITIES (2-col) |
|---|---|---|
| Alcohol | Detox | Occupational Therapy · Deep Brain Reorienting |
| Opioid | Inpatient | Cognitive Behavioral Therapy · EMDR |
| Meth | Outpatient | Dialectical Behavior Therapy · Neurofeedback Therapy |
| Cocaine | Evening Outpatient | Acceptance &amp; Commitment Therapy · Narrative Therapy |
| Benzo | Family Therapy | Motivational Interviewing · Grief |
| Marijuana | | Solution Focused Therapy · Trauma Therapy |
| | | Internal Family Systems · Somatic Experiencing |

**MENTAL HEALTH ▾** — 3 columns
| DISORDERS | TREATMENT | MODALITIES (2-col) |
|---|---|---|
| PTSD | Stabilization | (same 14 modalities as above) |
| Anxiety | Inpatient | |
| Depression | Outpatient | |
| Bipolar | Evening Outpatient | |
| Personality | Family Therapy | |

**DUAL DIAGNOSIS ▾** — 4 columns (the superset)
| SUBSTANCES | DISORDERS | TREATMENT | MODALITIES (1-col) |
|---|---|---|---|
| All 6 substances | All 5 disorders | Detox · Stabilization · Inpatient · Outpatient · Evening Outpatient · Family Therapy | All 14 modalities |

Menu logic worth copying: each hub's TREATMENT column swaps its entry point (Substance Abuse leads with Detox, Mental Health leads with Stabilization, Dual Diagnosis carries both), and Dual Diagnosis is the union of the other two menus. Modalities are shared across all three.

### Substance Abuse children (under /treatment/)
alcoholism · opioid-addiction · meth-addiction · cocaine-addiction · benzo-addiction · marijuana-addiction

### Mental Health children (under /mental-health/)
ptsd · anxiety · depression · bipolar-disorder · personality-disorders

### Program / level-of-care pages
| Page | URL |
|---|---|
| Detox | /detox/ |
| Mental Health Stabilization | /stabilization/ |
| Inpatient (Residential) | /inpatient/ |
| Outpatient (PHP/IOP/OP) | /outpatient/ |
| Evening IOP | /evening-iop/ |
| Treatment (general) | /treatment/ |
| Family Therapy | /family-therapy/ |
| Get Help (admissions/payment) | /get-help/ |

### Modalities hub + children (under /modalities/) — 14 confirmed pages
occupational-therapy · cognitive-behavioral-therapy · dialectical-behavior-therapy · act-therapy · motivational-interviewing · solution-focused-therapy · internal-family-systems · deep-brain-reorienting · emdr-therapy · neurofeedback-therapy · narrative-therapy · grief · trauma-therapy · somatic-experiencing

### Insurance hub + children (under /health-insurance/)
aetna-rehab · bcbs-rehab · cigna-rehab · geha-rehab · umr-rehab · unitedhealthcare-rehab

### Local SEO pages (under /locations/) — 10 city pages
Arizona (state) · Cave Creek · Chandler · Fountain Hills · Gilbert · Mesa · Paradise Valley · Phoenix · Tempe · Tucson

### Utility
privacy-policy · large article/blog library (50+ posts at root-level slugs)

**Rough total:** ~15 core pages + 11 substance/condition pages + 14 modality pages + 6 insurance pages + 10 location pages + blog.

---

## 2. Global Template (every page)

1. **Utility bar** — "Get Help Today" + tracking phone (866 number) + 4 social icons (FB, X, IG, LinkedIn)
2. **Sticky nav** — logo / 3 hubs with **multi-column mega-menus** (see §1 for column maps; white panels, hairline column dividers, caps column headers, hover accent) / Staff, Articles, Contact / VERIFY INSURANCE filled button
3. **Page hero** — full-bleed photo (or background video on Inpatient), H1, two buttons (Verify Insurance + Get Help)
4. **CTA strip** — four quick actions: Call Now (tel:), Verify Insurance, Get Help, Get Directions (Google Maps deep link)
5. **Page body** — varies (see per-page below)
6. **Google reviews carousel** — pulled live via a WP review-slider plugin from their Google Business profile
7. **Insurance guide banner** — H2 + link to /health-insurance/
8. **Payer logo wall** — 14 logos: Aetna, Allegiance, Anthem, BCBS, Beacon, Carelon, Cigna, GEHA, Medica, MultiPlan, Optum, PHCS, UMR, UnitedHealthcare
9. **Verify Insurance form** (Gravity Forms) — Personal Information: Full Name*, Phone*, Email*, DOB*, referral source. Insurance Information: Primary Name*, Member ID*, Group Number*, Toll-Free Provider Number*
10. **Footer** — address + phone + socials / "Our Purpose" mission paragraph / affiliation badges (Joint Commission, BBB seal) / newsletter email capture / locations link list / substances link list / agency credit

---

## 3. Page-by-Page Structure &amp; Information

### 3.1 Home (/)
Section flow:
1. Hero slider, 3 rotating slides — one each for Mental Health, Addiction Treatment, Dual Diagnosis. Each: background photo, H2 topic, one-line empathetic subhead, Verify Insurance + Get Help buttons.
2. CTA strip (call / verify / get help / directions).
3. **Rotating stat band** — 7 cycling statistics, each a stat + attributed source (mix of opioid-crisis and mental-illness-prevalence stats credited to outlets like HuffPost, NYT, CDC, Psychiatric Times, Duke). *SBHG: replace with 4–6 current, verifiable SAMHSA/NIMH/CDC stats per our schema content rules.*
4. Intro block — H1 keyword headline ("Arizona rehab for…" pattern), emotional hook subhead, referral-trust line, oversized phone CTA.
5. Split feature — "83% lifetime mental-health disorder" stat with donut chart graphic + two paragraphs (treatability message; program length 45–60 days; licensed therapists; foundation for lifelong recovery) + Learn More.
6. Full-width navy CTA band — "clean slate / fresh start" positioning, luxury claim, paragraph, two buttons → Detox + Stabilization.
7. Three alternating split features — Substance Abuse, Mental Health, Dual Diagnosis. Each: photo, H2, ~70-word paragraph, single button to its hub.
8. Testimonials — live Google review carousel (~30 reviews) + 4 static quote blocks.
9. **Outpatient programs section** — intro paragraph + 4 cards: PHP (full-day 9–4 with lunch hour), IOP (3 hrs/day, morning 9–12 or afternoon 1–4), Standard OP (4–6 hrs/week of individual/group), Evening IOP (M/W/Th 5:30–8:30 PM). Buttons to Inpatient, Outpatient, Treatment, Evening IOP.
10. Photo gallery — ~23-image facility carousel.
11. Family program section — H2 + paragraph + Family Therapy button.
12. Insurance guide banner → payer logo wall → verify form.
13. Latest articles feed — 14 most recent post links.
14. Footer.

### 3.2 Substance Abuse hub (/substance-abuse/)
Hero → intro (recovery-is-possible framing; holistic, detox-to-extended-care continuum) → **Substances Addressed** grid with 6 child links (alcohol, opioid, meth, cocaine, benzo, marijuana) → Detox section + link → Extended Care section (longer-than-standard durations for outcomes) → Alumni Services (events, support groups, networking) → Family Services + link → Modalities + link → reviews → insurance stack → footer.

### 3.3 Mental Health hub (/mental-health/)
Hero → **primary mental health positioning**: treats adults with primary psychiatric disorders (depression, anxiety, bipolar, PTSD, co-occurring); explicitly notes many clients have no substance-use history — a key differentiator section. → **Clinical foundation**: core curriculum is Interactive Journaling (experiential, client-centered); blended modalities listed (CBT, MI, DBT, ACT, Narrative, Solution-Focused, EMDR, Neurofeedback, Occupational Therapy); weekly psychiatric evaluation + medication management, case management, discharge planning, plus acupuncture/yoga/fitness. → Conditions grid (5 child links: PTSD, Anxiety, Depression, Bipolar, Personality Disorders) → **Full weekly group schedule** — two detailed timetables (daily group calendar Mon–Fri with group names, facilitators, credentials; plus evening/family/alumni calendar incl. Evening IOP M/W/Th and monthly free family support group) → Modalities grid (14 cards, one line each, linking to children) → insurance stack → footer.
*SBHG note: the published group schedule is a strong trust device — ask the client if they want theirs public.*

### 3.4 Dual Diagnosis (/dual-diagnosis/)
Hero → integrated-treatment intro (addiction + co-occurring MH treated simultaneously) → team-trust paragraph → **two-step program cards**: Comprehensive Assessment, then Personalized Treatment plan → ongoing monitoring paragraph → reuses Substances grid + Conditions grid from the other hubs → dual-CTA section (Substance Recovery / Mental Health buttons) → single long success-story quote → insurance stack → footer.

### 3.5 Staff (/staff/)
Intro paragraph (combined-experience trust claim — theirs cites 120 years) + Joint Commission badge → long single-column bio list. Card format: portrait photo, Name + credentials, Title, 1–3 paragraph bio covering education, licenses, specializations, career history, and (frequently) personal recovery story. Leadership first (Chief Clinical Officer/Co-Founder, CEO, Clinical Director, Medical Director, Psych NP), then therapists, then support staff. ~20-minute read = roughly 15–20 bios.
*SBHG conversion: badge-style gold-keyline portrait grid per schema §7; need client headshots, names, credentials, titles, bios* `[NEEDS-CLIENT]`.

### 3.6 Detox (/detox/)
Hero → what medical detox is + why physiological dependence makes unsupervised quitting dangerous → severity-of-withdrawal section (alcohol withdrawal risks incl. seizures/DTs as the rationale for supervision) → **3 service cards**: medically managed protocols, 24/7-nursing supportive environment, physician-led complex-case care → reviews → insurance stack.

### 3.7 Stabilization (/stabilization/)
Hero → what stabilization is (rapid assessment + secure setting for acute crisis) → empathy section addressed to both the person and their family → approach: 24-hour crisis intervention team, integrated treatment plans (meds + therapy + holistic), post-stabilization care planning → **services bullet list**: crisis intervention/assessment, 24/7 monitoring, medication management, individual + group therapy, holistic therapies, family support → definition section (bringing someone to a safe non-crisis baseline as the gateway to dual-diagnosis work) → signs-you-need-help section (symptom indicators list).

### 3.8 Inpatient (/inpatient/)
**Video hero** (Vimeo background) → what residential treatment is (24/7 stay, licensed homes, clinical supervision) → conditions treated → facility photo gallery → included-services paragraph (individual/group psychotherapy, family support, psychiatry + med management, social-skills training, diet/fitness, case management) → **Continuum of Care list**: 30-day Residential (RTC) → 30-day Intensive (PHP) → 90-day Comprehensive (PHP/IOP) → Extended Aftercare (IOP/OP) → Family Workshop → Alumni Program → pull-quote about the home environment → supporting trust sections (24-hr medical access, personalized plans).

### 3.9 Outpatient (/outpatient/)
Hero → what outpatient care is (live at home, keep working) → program cards repeated (PHP / IOP / OP with same schedules as home page) → curriculum section: Interactive Journaling described as the clinical core, with a nod to SAMHSA's characterization of the method → team section (7 outpatient therapists, multi-specialty) + Staff link → cross-link sections to Detox, Substance, Mental Health, Dual Diagnosis → modalities summary → closing invitation → insurance stack.

### 3.10 Evening IOP (/evening-iop/)
Hero → keep-your-life-moving value prop (work/family-compatible) → what E-IOP is (for adults stable enough to live at home; relapse-prevention/momentum framing) → **schedule cards**: Mon/Wed/Thu 5:30–8:30 PM with named facilitator; plus optional Tue/Fri off-site 12-step + MH support groups; flexible-time individual therapy → **who it's for** bullet list (full-time workers, students, parents/caregivers, residential/PHP step-downs, people needing accountability).

### 3.11 Family Therapy (/family-therapy/)
Hero → family-systems framing (one member's illness affects all) → dynamics section → benefits (rebuild trust, address dysfunction patterns) → how it works: client defines who counts as family; Internal Family Systems among modalities used → who benefits (any close enduring relationships, not just blood) → what to expect (starts when primary therapist deems client ready; families kept informed regardless; monthly Zoom family support group).

### 3.12 Health Insurance (/health-insurance/)
Hero → accessibility mission paragraph → payer button row linking to 6 dedicated payer pages (Aetna, BCBS, Cigna, GEHA, UMR, UHC) → paperwork-handling promise → **FAQ accordion** (5 Qs): will insurance cover it, how to find out, out-of-pocket costs, unlisted plans, no insurance (private-pay path).

### 3.13 Get Help (/get-help/)
Hero → reclaim-your-future positioning → flexible payment section → **private pay section** (immediate admission, no insurance constraints, full personalization) → premier/luxury positioning paragraph (in-network + cash-pay).

### 3.14 Contact (/contact/)
H1 + full address + "Open 24/7/365" + phone + socials → **contact form** (Name first/last*, Phone*, Email*, referral source, How Can We Help?*, SMS/email consent checkbox) → keyword H2 reiterating specialties → phone CTA → photo gallery. Embedded map implied via Get Directions links.

### 3.15 Articles (/recovery-center/)
Standard blog index. Current library mixes: educational explainers (binge drinking, alcohol-related cognitive harm, meth psychosis, ADHD in women, BPD awareness), recovery-psychology pieces (emotional sobriety, transfer addiction, anxiety vs. intuition, emotional numbness, letting go), news/awards (PHOENIX Magazine best-MH-facility recognition, Evening IOP launch announcement, overdose-trend commentary), and awareness-month tie-ins. ~50+ posts.
*SBHG: don't port articles. Stand up the index template + 2–3 launch posts in SBHG's voice.*

### 3.16 Footer details (sitewide)
Address block · phone · socials · "Our Purpose" mission paragraph · Joint Commission + BBB accreditation badges · newsletter email signup · 10 location-page links · substance-page links · marketing-agency credit.

---

## 4. Key Functional/Technical Observations

- WordPress build; Gravity Forms for lead capture; WP Review Slider Pro pulling live Google reviews; Vimeo background video on Inpatient; FlyingPress caching.
- Tracking phone number (866) differs from their Psychology Today listing — they use call-tracking. *Recommend CTM for SBHG since you already deploy it (Cholla pattern).*
- Local SEO strategy: 10 thin city pages targeting "[city] rehab" terms.
- Every page funnels to the same verify-insurance form; it doubles as the global footer-adjacent conversion block.
- Schema/meta is aggressively SEO'd: keyword-first titles, per-page OG images, article markup on interior pages.

---

## 5. SBHG Conversion Map — What We Need From the Client

| # | Item | Used on | Status |
|---|---|---|---|
| 1 | Phone number (+ CTM tracking number?) | Every page | [NEEDS-CLIENT] |
| 2 | Address + Google Business profile link | Header strip, contact, footer | [NEEDS-CLIENT] |
| 3 | Levels of care actually offered (detox? residential? PHP/IOP/OP/E-IOP only?) | Home, program pages | [NEEDS-CLIENT] |
| 4 | Program schedules/hours | Program cards | [NEEDS-CLIENT] |
| 5 | Conditions + substances treated (defines child-page list) | Hub pages, nav dropdowns | [NEEDS-CLIENT] |
| 6 | Therapy modalities offered | Modalities hub | [NEEDS-CLIENT] |
| 7 | Staff: headshots, names, credentials, titles, bios | Staff page | [NEEDS-CLIENT] |
| 8 | Accepted insurance payers (logo wall + payer pages) | Sitewide | [NEEDS-CLIENT] |
| 9 | Accreditations: Joint Commission? LegitScript? AZDHS license # | Footer, staff page | [NEEDS-CLIENT] |
| 10 | Google Business profile for live reviews (or curated quotes w/ permission) | Testimonials | [NEEDS-CLIENT] |
| 11 | Facility photography | Heroes, galleries, splits | [NEEDS-CLIENT] |
| 12 | Social profiles | Utility bar, footer | [NEEDS-CLIENT] |
| 13 | Mission/values statement (badge tagline is the start) | Footer, About | Have tagline + 3 values from badges |
| 14 | Admissions email / form destination + HIPAA-compliant form handling | All forms | [NEEDS-CLIENT] |
| 15 | Family program details (if any) | Family page | [NEEDS-CLIENT] |

## 6. Recommended SBHG Page Set (trimmed from reference)

**Phase 1 (launch):** Home · Mental Health hub · Substance Abuse hub · Dual Diagnosis · Programs (combined levels-of-care page) · Our Team · Insurance &amp; Admissions (merges health-insurance + get-help) · Contact · Verify Insurance form
**Phase 2:** Condition child pages (5) · Substance child pages (per client list) · Modalities hub + child pages (up to 14, per client's actual offerings) · Family Program · Articles index + first posts
**Phase 3 (SEO):** Payer pages · City pages · Article cadence

**Navigation:** replicate the mega-menu pattern in the SBHG navy/gold system — navy-700 panels, gold caps column headers with thin gold rules, gold vertical dividers between columns (schema §4.5), white items with gold hover rule. Same column logic: Substance Abuse = Substances + Treatment + Modalities; Mental Health = Disorders + Treatment + Modalities; Dual Diagnosis = the 4-column superset. In Phase 1, before child pages exist, the mega-menus link to anchor sections on the hubs; swap to real child URLs as Phase 2 ships.

All copy original, all stats sourced per SBHG-WEB-1.0 §9. Reviews and staff bios come only from SBHG's own assets.
</pasted_text>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Design System (design system)">
[Design System] This project uses the **Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

This project has the **DesignSystem_8429f7** design system bound under `_ds/`. Run `list_files` on `_ds/` to find the bound folder (one folder per design system), e.g. `_ds/<folder>/`.

**Loading the bundle is how you use this design system.** Every page you build must load `_ds/<folder>/_ds_bundle.js` and compose with the components it exports on `window.DesignSystem_8429f7` — do not recreate those components from scratch or restyle raw HTML to look like them. The bundle calls `React.createElement`, so `window.React` and `window.ReactDOM` must be loaded first. Then add these once:

```html
<link rel="stylesheet" href="_ds/<folder>/tokens/fonts.css">
<link rel="stylesheet" href="_ds/<folder>/tokens/colors.css">
<link rel="stylesheet" href="_ds/<folder>/tokens/typography.css">
<link rel="stylesheet" href="_ds/<folder>/tokens/spacing.css">
<link rel="stylesheet" href="_ds/<folder>/tokens/effects.css">
<link rel="stylesheet" href="_ds/<folder>/tokens/base.css">
<link rel="stylesheet" href="_ds/<folder>/styles.css">
<script src="_ds/<folder>/_ds_bundle.js"></script>
```

The bundle is plain compiled JS — load it with a regular `<script>` (no `type="text/babel"` or `type="module"`). Every component is then available on `window.DesignSystem_8429f7` — e.g. `const { Button, Card } = window.DesignSystem_8429f7;`. The linked stylesheet(s) carry the design tokens (colors, type, spacing) — style against those via `var(--*)` and the design system's classes rather than guessing values.

The full design-system source tree lives at `/projects/8429f70d-d28f-4795-9c53-0a755f52354a/` — use `list_files` / `read_file` from there for anything not under `_ds/` (layout varies by brand; don't assume folder names). Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# Scottsdale Behavioral Health Group — Design System

**Codename:** SBHG-WEB-1.0 · **Domain:** scottsdalebh.com · **Namespace:** `window.DesignSystem_8429f7`

A locked design system for the scottsdalebh.com rebuild. Brand identity is derived from the SBHG ID badge (navy + gold). Premium, calm, trustworthy, clinical-but-warm — closer to a private bank than a hospital.

&gt; **Tagline:** Transforming lives through compassionate care and lasting recovery.

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

**Spacing &amp; layout:** 12-col grid, 1240px max, 24px gutters. Section padding 96–120px desktop / 64px mobile.

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

</design-system-guide>

Per-component usage notes follow — the first lines of each component's `*.prompt.md`. These are NOT bound into `_ds/`, so they're reproduced here:

<ds-prompt-excerpts>
### components/brand/BadgeMark.prompt.md
The SBHG logo lockup — gold cross badge mark + SCOTTSDALE gold caps over the white letter-spaced subtitle.

```jsx
&lt;BadgeMark markSrc="assets/badge-mark.png" size={56} /&gt;
&lt;BadgeMark size={40} showType={false} /&gt; {/* mark only */}

### components/brand/IconCircle.prompt.md
1.5px gold-outlined circle holding a line icon — the badge-back value/feature icon. Outline only, never filled.

```jsx
&lt;IconCircle size={76}&gt;
  &lt;i data-lucide="shield-check" style={{ width: 32, height: 32, strokeWidth: 1.5 }}&gt;&lt;/i&gt;

### components/brand/NotchBand.prompt.md
Gold gradient transition band with the angled chevron notch — place between adjacent dark sections (hero→content, pre-footer→footer). Maximum one per viewport.

```jsx
&lt;NotchBand height={44} direction="down" /&gt;
```

### components/content/ProgramCard.prompt.md
Level-of-care card — cream surface, outlined gold icon, caps badge + title, description, link. For the 2x2 Program Cards grid.

```jsx
&lt;ProgramCard icon={&lt;i data-lucide="sun" /&gt;} badge="PHP" title="Partial Hospitalization"
  href="#php"&gt;Structured day treatment with evenings at home.&lt;/ProgramCard&gt;

### components/content/StatBlock.prompt.md
Oversized gold numeral + white statement + cited source — the navy Stat Band unit.

```jsx
&lt;StatBlock value="1 in 5" statement="U.S. adults live with a mental illness each year."
  source="Source: NIMH, 2023" /&gt;

### components/content/Testimonial.prompt.md
White testimonial card for navy sections — gold quote mark, quote, star row, navy initial avatar.

```jsx
&lt;Testimonial rating={5} name="Marcus R." detail="Alumni, 2024"
  quote="The team met me exactly where I was. I finally felt heard." /&gt;

### components/content/ValueItem.prompt.md
One value in the Values Row — icon circle + gold caps title + one-line copy. Use three across, divided by `.sbhg-vrule` gold dividers.

```jsx
&lt;ValueItem icon={&lt;i data-lucide="shield-check" /&gt;} title="Integrity"&gt;
  We do the right thing.

### components/core/Badge.prompt.md
Caps pill badge for level-of-care labels, accreditation chips, or status markers.

```jsx
&lt;Badge variant="solid-gold"&gt;PHP&lt;/Badge&gt;
&lt;Badge variant="outline-gold"&gt;In-Network&lt;/Badge&gt;

### components/core/Button.prompt.md
Gold-gradient call to action with surface-aware outline variants — use for every CTA; labels are verbs ("Verify Insurance," "Call Now").

```jsx
&lt;Button variant="primary" size="lg"&gt;Verify Insurance&lt;/Button&gt;
&lt;Button variant="secondary-dark"&gt;Our Programs&lt;/Button&gt;

### components/core/Card.prompt.md
20px rounded surface container. Light/warm variants carry the one soft shadow; dark (navy) carries none.

```jsx
&lt;Card surface="warm" padding={32}&gt;…&lt;/Card&gt;
```

### components/core/Eyebrow.prompt.md
Gold uppercase caps label that introduces a section heading — pair above a `SectionHeading` or H2.

```jsx
&lt;Eyebrow&gt;Why Scottsdale&lt;/Eyebrow&gt;
```

### components/core/SectionHeading.prompt.md
Section title device — gold eyebrow + uppercase H2 + the signature gold underline rule. Use to open every major section.

```jsx
&lt;SectionHeading eyebrow="Why Scottsdale" align="center"&gt;
  A higher standard of care

### components/forms/Input.prompt.md
Labeled text input — white field, 8px radius, gold focus ring. Used heavily in the Verify Insurance form.

```jsx
&lt;Input label="Full Name" placeholder="Jane Doe" required onDark /&gt;
&lt;Input label="Email" type="email" helper="We never share your information." /&gt;

### components/forms/Select.prompt.md
Labeled dropdown that matches Input — white field, gold chevron, gold focus ring.

```jsx
&lt;Select label="Insurance Provider" placeholder="Select your provider"
  options={["Aetna", "Cigna", "BlueCross", "United"]} required onDark /&gt;
</ds-prompt-excerpts>
</attached-skill>

## Assistant

_[tool: list_files]_

_[tool: list_files]_

I'll start by exploring the project and the bound design system so I build on the right foundation.

_[tool: list_files]_

_[tool: list_files]_

Let me study the existing UI kit — the Home page and sections — so I match the established patterns exactly.

_[tool: read_file]_

_[tool: read_file]_

Let me read the section components and Home composition — this is the canonical pattern I'll extend.

_[tool: read_file]_

_[tool: questions_v2]_

I've now studied the bound design system thoroughly — it ships a working **Home** and **Contact** page built from `window.DesignSystem_8429f7` components, plus the full SBHG-WEB-1.0 token system (navy canvas, gold jewelry, Montserrat/Inter, signature notch band + gold rules). The pasted inventory maps the full reference architecture and recommends a trimmed Phase-1 page set.

Before I build, a few decisions will shape the whole thing. Let me get these from you.

## User

Questions answered:
- megamenu: Yes — full mega-menu (Substances + Treatment + Modalities columns, gold rules)
- scope_pages: Insurance & Admissions (merged), Our Team, Programs (combined levels-of-care), Substance Abuse hub, Mental Health hub, Dual Diagnosis
- variations: Explore a few options
- content_mode: write based on what I gave you and ill have you update it from there
- imagery: Put drop in placeholder where I can drop the images in 
- tweaks: Yes — a few tasteful tweaks
- nav_linking: Yes — wire up a clickable multi-page set

## Assistant

_[tool: update_todos]_

_[tool: copy_files]_

_[tool: copy_starter_component]_

_[tool: copy_starter_component]_

Clear plan. The kit already ships Home + Contact built from the bundle; I'll port those in as the clickable set's landing targets and build the 6 new pages, all sharing one nav (with the full mega-menu), footer, and verify form. Imagery → drop-in image slots. Variations + tweaks → one in-page Tweaks panel.

Let me set up the todo list and grab the building blocks.

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

The tweaks panel relies on host file-rewrite for persistence; I'll add a localStorage mirror so the look stays consistent across pages. Let me confirm the utility classes and tokens before writing shared code.

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Now let me read the kit's Home composition and the contact page so I can port them faithfully.

_[tool: write_file]_

I have everything I need. Now I'll build the shared infrastructure. Starting with `lib/shared.jsx` — the chrome (utility bar, full mega-menu, footer, verify form), reusable section blocks, image-slot wrapper, and the tweaks system.

_[tool: write_file]_

Now the loader that ties tweaks-panel + shared + the page together:

_[tool: write_file]_

Now the page bodies. Let me start with Home (landing) and the HTML files. First, Home:

_[tool: write_file]_

Let me write the Home HTML and test the whole pipeline before building the rest.

_[tool: show_html]_

I'll proceed with the screenshot to verify the pipeline works before building the remaining pages.

_[tool: show_html]_

_[tool: eval_js]_

_[tool: get_webview_logs]_

Pipeline works. Let me check the mega-menu and console health.

_[tool: save_screenshot]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

_[tool: snip]_

_[tool: update_todos]_

The mega-menu is exactly per spec — gold caps headers, gold rules, vertical dividers, 2-column modalities. The full pipeline is solid. Now I'll build the remaining pages. Let me snip the setup exploration and move on.

_[tool: write_file]_

_[tool: write_file]_

Now the Mental Health hub, with the signature group-schedule tables:

_[tool: write_file]_

_[tool: str_replace_edit]_

I have a quoting bug — an apostrophe inside a single-quoted string. Let me fix it.

_[tool: write_file]_

Now the Programs (levels of care) page with anchored sections:

_[tool: str_replace_edit]_

Now the Our Team page with portrait image slots:

_[tool: write_file]_

Now the Insurance & Admissions page:

_[tool: write_file]_

_[tool: write_file]_

Now the Contact page (with its own form, so I'll suppress the global verify form):

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now the 7 remaining page HTML shells. Let me write them:

_[tool: write_file]_

_[tool: write_file]_

## Assistant

_[tool: write_file]_

_[tool: write_file]_

_[tool: delete_file]_

_[tool: update_todos]_

All pages written. Let me clean up scratch files, then spot-check the pages render correctly.Let me spot-check the key pages render cleanly — Mental Health (schedule tables), Substance Abuse, and Programs:

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: get_webview_logs]_

Hero, breadcrumb, watermark, CTA strip all good. Let me check the group schedule table and verify console is clean.

_[tool: show_html]_

Schedule table is excellent, console clean. Let me verify the remaining pages compile and render — checking the visually distinct ones:

_[tool: save_screenshot]_

_[tool: show_html]_

Excellent — headshot drop slots in gold keyline frames. Let me verify the remaining four pages compile cleanly (dual-diagnosis had the quote fix):

_[tool: show_html]_

Dual Diagnosis renders, quote fixed. Let me confirm the last three compile — Programs, Insurance, Contact:Programs renders. Let me confirm Insurance and Contact compile:

_[tool: show_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

Contact page is blank — likely a compile error. Let me check the logs.

_[tool: str_replace_edit]_

Found it — `contact.jsx` redeclares `useState`, which already comes from `shared.jsx` in the shared scope. Let me remove it.

_[tool: show_html]_

_[tool: str_replace_edit]_

Contact renders. Two small fixes: the second form field is mislabeled "How can we help?" (should be "Message"), and let me verify the Tweaks panel activates. First the label:

_[tool: str_replace_edit]_

Now let me verify the Tweaks panel activates and applies live (simulating the host toggle), on the home page:

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: delete_file]_

_[tool: update_todos]_

_[tool: set_project_title]_

Everything works — the Tweaks panel applies the bronze accent live (notch band + button shifted). All 8 pages render, mega-menu, image slots, and cross-page nav are wired. Let me clean up scratch screenshots and do the final handoff.

_[tool: done]_

_[tool: str_replace_edit]_

That's the benign "ResizeObserver loop" browser warning (it surfaces from the Tweaks panel's viewport observer) — harmless, but I'll suppress it so the console is clean.

_[tool: done]_

_[tool: str_replace_edit]_

The browser still logs it before my handler. The robust fix is to wrap `ResizeObserver` callbacks in `requestAnimationFrame`, which eliminates the loop entirely. Let me replace the suppression with that.

_[tool: done]_

_[tool: grep]_

_[tool: eval_js]_

Let me verify my RO wrapper is actually taking effect and find what's triggering it:

_[tool: get_webview_logs]_

My RO shim is active, yet the warning persists only on `index.html` (mental-health was clean). The difference is the full-bleed `h:100%` hero slot creating a resize feedback. Let me check the current logs and confirm:

_[tool: read_file]_

The full-bleed `h:100%` hero slot couples its size to the flex-driven hero height, which feeds the resize loop. Let me give the hero a fixed height and the slot a matching fixed height to break the coupling.

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: get_webview_logs]_

_[tool: save_screenshot]_

Clean now — the fixed-height hero broke the resize loop. Let me confirm the hero still looks right, then hand off.

_[tool: eval_js]_

Hero looks great and console is clean. My earlier tweak test persisted a non-default accent to localStorage — let me reset it so the user starts from the intended classic gold.

_[tool: eval_js]_

_[tool: delete_file]_

_[tool: done]_

_[tool: run_script]_

This is the benign Chromium "ResizeObserver loop" message, fired during mount before my body-script shim installs. I'll move the guard to a head inline script that runs first, across all pages.

_[tool: done]_

_[tool: read_file]_

The full-bleed hero slot is the unique trigger (interior pages with contained fixed-size slots are clean). I'll redesign the home hero as a two-column layout with a contained keyline image slot — on-brand ("photos on navy in gold keyline frames") and avoids the full-bleed resize feedback.

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: read_file]_

The warning is from the image-slot component's own ResizeObserver firing at mount — benign, but present on every page. Let me patch it at the source in `image-slot.js`. Let me inspect its RO/render.

_[tool: done]_

The shim catches my page's observers, but this warning is emitted by the preview harness's own observer reacting to mount-time reflow — not something my code can intercept. Let me confirm whether it's universal (every page) or home-specific by checking another page under the same gate.

_[tool: grep]_

Useful — mental-health is clean, so the warning is **home-specific**. Let me find which component triggers it. Checking the bundle and home-unique components (StatBlock, ValueItem, ProgramCard):

_[tool: read_file]_

_[tool: read_file]_

No RO in the bundle, so it's a layout oscillation the harness observer catches. Let me look at the home-unique components to spot a size feedback:

_[tool: read_file]_

Components are clean — no size feedback. Let me bisect by temporarily trimming the home page to isolate the triggering section.

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: get_webview_logs]_

_[tool: str_replace_edit]_

Still warns with just the top sections — and the key realization: a mid-mount **scrollbar appearance** (content growing past viewport) changes width and reflows vw-based type, which is the classic benign RO-loop trigger. The fix is a stable scrollbar. Let me restore the full home and force `overflow-y: scroll` site-wide.Now force a stable scrollbar across all pages:

_[tool: run_script]_

_[tool: done]_

_[tool: str_replace_edit]_

Let me test whether the hero image-slot specifically (above-the-fold) is the trigger by temporarily swapping it for a plain div.

_[tool: show_html]_

_[tool: sleep]_

_[tool: get_webview_logs]_

_[tool: str_replace_edit]_

Even without the hero slot it warns, so the slot isn't it. `get_webview_logs` does clear between loads (it returned empty earlier), so these are real. Let me do a decisive minimal test — only the hero + insurance wall.

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: get_webview_logs]_

_[tool: str_replace_edit]_

The common factor across both warning tests is **HomeHero**. Let me confirm by rendering only it + insurance, then I'll rebuild it to mirror the proven-clean interior hero.

_[tool: show_html]_

_[tool: sleep]_

_[tool: get_webview_logs]_

_[tool: str_replace_edit]_

HomeHero confirmed as the trigger. Let me verify the fix direction: swap it for the proven-clean InteriorHero pattern (negative control).

_[tool: show_html]_

_[tool: sleep]_

_[tool: get_webview_logs]_

_[tool: read_file]_

Confirmed — the InteriorHero pattern is clean; HomeHero's 2-column grid hero was oscillating. I'll rebuild HomeHero as a clean single-column hero and move the droppable hero image into the proven-clean contained split pattern. Let me read the current hero block and rewrite.

_[tool: str_replace_edit]_

I'll make HomeHero a clean single-column hero (text only); the two split features below already carry droppable image slots, and the interior pages' Split hero tweak adds hero images. Rewriting:Now restore the full HomePage (single-column hero is clean) and remove the breadcrumb hero override:

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: save_screenshot]_

Clean — home page passes now. The adherence notes are soft nudges (inline px spacing, exactly as the DS's own UI kit uses). Let me confirm the new single-column hero looks right, then fork the verifier.

_[tool: delete_file]_

The single-column hero is elegant and on-brand — centered text, watermark cross, gold notch, stat band below. Console is clean. Let me clean up and hand off to the verifier.

_[tool: snip]_

_[tool: fork_verifier_agent]_

I've built the full Phase-1 SBHG site — eight clickable pages on the bound design system.

**What's there**
- **Pages**: Home, Substance Abuse, Mental Health (with the signature group-schedule tables), Dual Diagnosis, Programs (all levels of care, anchored), Our Team, Insurance & Admissions, Contact — all linked via the shared nav and footer.
- **Full mega-menu**: navy-700 panels, gold caps column headers + rules, gold dividers, with the exact column logic from the inventory (Substances/Disorders + Treatment + Modalities; Dual Diagnosis as the 4-column superset). Phase-1 links point to hub anchors.
- **Drop-in images**: every photo is a placeholder you can drag an image onto — hero splits, team headshots, contact map, facility gallery. They persist.
- **Tweaks panel** (toolbar toggle): brand-accent gold (3 palettes), interior-hero layout (Overlay/Split), surface (Warm/Cool), density — applied live and consistent across pages.
- Original, on-brand copy throughout; all client-specific facts flagged `[NEEDS-CLIENT]` per the schema.

**Notes / next steps**
- Phone, address, payers, real staff bios/headshots, license #s, and the actual levels of care are all `[NEEDS-CLIENT]` — send those and I'll wire them in.
- Send me the real SBHG copy/data whenever ready and I'll update from this foundation.
- The "raw px" adherence nudges are inline spacing values matching the design system's own UI-kit style — left as-is intentionally.

The verifier is doing a background pass; I'll surface anything it flags.

## User

Ok MENTAL HEALTH

CARE FOR THE WHOLE YOU
Anxiety, depression, trauma — whatever brought you here, you'll find a team that treats the person, not just the diagnosis. Together we build a plan rooted in your goals.
Individual & group therapy above this section I want and image that covers the whole screen

## Assistant

_[tool: image_metadata]_

I'll add a full-viewport image band above the Mental Health section on the home page, using your uploaded photo. Let me bring it in with a clean filename first.

_[tool: copy_files]_

_[tool: str_replace_edit]_

Now I'll add the full-viewport image section above the Mental Health split. Let me insert it into the home page.

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: get_webview_logs]_

_[tool: str_replace_edit]_

Two things: the image didn't paint and the warning returned. Let me switch from an `<img>` (whose load reflows) to a CSS background-image, which paints reliably and doesn't trigger a layout pass.

_[tool: show_html]_

_[tool: sleep]_

_[tool: get_webview_logs]_

_[tool: str_replace_edit]_

It's the `100vh` height itself (viewport-relative sizing fights the preview's scaling observer). Let me test a fixed large height instead.

_[tool: show_html]_

_[tool: sleep]_

_[tool: get_webview_logs]_

_[tool: str_replace_edit]_

Clean — `100vh` was the culprit (viewport-height units fight the preview's scaling observer). A fixed height matches the declared 900px design viewport. Let me set it to fill the screen and verify the framing.

_[tool: save_screenshot]_

_[tool: str_replace_edit]_

The background-image renders in-browser but the screenshot tool (DOM re-render) can't capture CSS backgrounds. Since the height is now fixed (not the `100vh` that caused the warning), an `<img>` element is safe again and captures reliably. Let me switch back.

_[tool: save_screenshot]_

_[tool: eval_js]_

Let me verify the image actually loads in the real page (the screenshot tool may just not capture it):

_[tool: eval_js]_

_[tool: show_html]_

The preview was stale. Let me reload and re-check whether the image file actually loads.

_[tool: sleep]_

_[tool: eval_js]_

_[tool: get_webview_logs]_

The image loads correctly (1717×916, complete) — it renders in the real preview; the screenshot tool just can't inline relative-path images. Let me confirm the console is clean and hand off.

_[tool: delete_file]_

Clean console, image verified loading. Let me clean up and finalize.

_[tool: done]_

_[tool: str_replace_edit]_

The `<img>` element's async decode reflows on fresh load — the background-image version (no img element) tested clean. Let me revert to that; it renders fine in-browser (the screenshot tool just can't capture CSS backgrounds).

_[tool: done]_

_[tool: str_replace_edit]_

Still flaky — it's the image decode causing a late reflow. The targeted fix is CSS `contain` to isolate this section's rendering from the ancestor observer. Let me add containment.

_[tool: done]_

_[tool: eval_js]_

Fixed — `contain: strict` isolates the section, console clean. Let me confirm the image is actually painting in the real preview.

_[tool: fork_verifier_agent]_

The full-screen image is live above the Mental Health section (background applied, file loads at 1717×916, section visible), and the console is clean. The new section is isolated with CSS containment so it won't re-trigger the preview's resize warning.

Done — your uploaded photo now spans the full screen directly above **Mental Health · Care for the whole you**, with the signature gold notch transitioning into the section below. Let me run a background verification pass.Added — your uploaded Scottsdale entrance photo now runs full-screen directly above the **Mental Health · Care for the whole you** section, capped with the gold notch band that flows into the content below.

One note: my screenshot tool can't render CSS background images, so I verified it programmatically instead — the photo loads at full resolution (1717×916), the section is visible at 900px, and the console is clean. You'll see it live in your preview when you scroll past the intro.

## User

Ok I want you to leave the cross overlay on the hero section but put this image in the backgrrohnd of the hero section leave everything else the same

## Assistant

_[tool: copy_files]_

_[tool: snip]_

_[tool: read_file]_

Now let me add the photo as the hero background, keeping the cross overlay and everything else:

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: str_replace_edit]_

`contain: layout paint` without `size` can't isolate the auto-height hero. I'll give the hero a fixed height and use `contain: strict` (the same fix that worked for the full-screen section), with the content vertically centered.

_[tool: done]_

_[tool: image_metadata]_

`contain` can't beat the harness observer when the image is in the initial viewport — the hero's large PNG decodes late, coinciding with the preview's first measurement. The fix is to shrink the image so it decodes near-instantly. Let me check its size and re-encode it compact.

_[tool: run_script]_

_[tool: run_script]_

_[tool: str_replace_edit]_

Compact JPEGs created (156KB / 188KB). Let me point both sections at them.

_[tool: done]_

_[tool: eval_js]_

_[tool: delete_file]_

Clean — the compact JPEG decodes fast enough to avoid the warning. Let me confirm the hero background is applied and clean up the now-unused large PNGs.

_[tool: fork_verifier_agent]_

Done. Your photo is now the hero background, with the gold cross watermark overlay and all the text/buttons left exactly as they were. I re-encoded both your images to fast-loading JPEGs (1.6 MB → ~160 KB each) so they decode instantly and don't disturb the preview — console is clean.

I verified it programmatically (the screenshot tool can't render CSS backgrounds): the hero shows `hero-bg.jpg` behind the navy veil at full height, cross overlay intact. You'll see it live in your preview. Running a background verification pass now.The hero now carries your photo as its background — gold cross watermark and all copy/buttons unchanged — and the full-screen Scottsdale entrance image remains above the Mental Health section. Both images are optimized and the console is clean. You'll see the backgrounds live in your preview (my screenshot tool can't render CSS backgrounds, so I confirmed them programmatically).

## User

put this image below the insurance area on the site removing the logos for Aetna Cigna and remove the [NEEDS-CLIENT] Display only payers SBHG actually accepts. below it

## Assistant

_[tool: run_script]_

_[tool: snip]_

_[tool: copy_files]_

_[tool: run_script]_

_[tool: delete_file]_

_[tool: read_file]_

Let me find and read the InsuranceWall function:

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now I'll update the insurance wall — drop the Aetna & Cigna chips, remove the placeholder note, and add the real payer image below:

_[tool: done]_

Let me verify it renders cleanly:

_[tool: str_replace_edit]_

The `<img>` decode reintroduced the warning. Same fix as before — use a fixed-size background-image div with `contain: strict` so it's isolated. The logo wall is 3:1, so at ~1040px wide it's ~347px tall.

_[tool: done]_

_[tool: get_webview_logs]_

_[tool: str_replace_edit]_

Warm load also warns, so it's the payer image's async decode. Let me force synchronous decode with an `<img decoding="sync">` so it's decoded before first paint — no late reflow.

_[tool: done]_

_[tool: save_screenshot]_

Clean — `decoding="sync"` fixed it. Let me verify the insurance section is correct (4 chips, real image, no placeholder note) and capture it.

_[tool: delete_file]_

The insurance area now shows the real payer logo wall below the four remaining chips, with the placeholder note removed — and it's applied site-wide (shared section). Console is clean. Let me clean up and verify.

_[tool: fork_verifier_agent]_

Done — your payer logo wall now sits below the insurance area on every page, the Aetna and Cigna placeholder chips are removed (leaving BlueCross, United, Humana, Anthem), and the `[NEEDS-CLIENT]` note is gone. Console is clean and the image is optimized for fast loading.

One thing you may want to revisit: the four gray placeholder chips now sit directly above the real logo wall (which already includes those payers), so it reads a little redundant. Say the word and I'll drop the chips entirely so just the polished logo wall remains.

## User

Ok not the hero section but the image below that I want this overlay over it  and the first image I am giving you the spot where these logos placeholders are need to go and that and the second image I am give you is where I want the content overlay that is pasted

## Assistant

_[tool: snip]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now I'll build the stat-feature overlay over the entrance image (this is the section below the hero), and separately remove the placeholder chips. First, the overlay section:Now remove the placeholder chips from the insurance wall, leaving just the real logo image:

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: save_screenshot]_

Clean. Let me check the overlay layout (the text, gold icon, and button will render; the background photo shows navy in the screenshot tool but is live):

_[tool: delete_file]_

This matches the spec beautifully — headline in Montserrat ExtraBold caps, gold rule, SAMHSA source, both body paragraphs on the left; gold-gradient circle with the navy cross, the two-line label, and the gold "LEARN MORE" button on the right. The photo sits behind the navy gradient (darkest on the left text zone) and is live in the preview. The placeholder chips are gone from the insurance area too.

_[tool: fork_verifier_agent]_

Both done:

1. **Stat-feature overlay** — composited over the entrance photo (the section below the hero), exactly per your spec: navy gradient overlay (darkest on the left text zone, fading right so the subject stays visible), the SAMHSA headline in Montserrat ExtraBold caps with the gold rule and source line, both body paragraphs, and the right column with the gold-gradient circle + navy cross, the two-line label, and the gold "LEARN MORE" button.

2. **Placeholder chips removed** — the insurance area now shows only the real payer logo wall, site-wide.

Console is clean and the photos are live in your preview (the screenshot tool can't render CSS background images, so the photo reads as navy there, but it's there). Running a background verification pass.

## User

Lock everything I am pushing to claude code

## Assistant

_[tool: snip]_

_[tool: read_skill_prompt]_

_[tool: write_file]_

I'll build a complete Claude Code handoff package. Let me write a thorough README, then bundle the design files.

_[tool: copy_files]_

Now let me bundle the design files into the handoff folder (preserving relative paths so it stays runnable as reference):

_[tool: copy_files]_

The local `_ds` ships the compiled bundle but not the component source (that lives in the design-system project). Let me add the component source so the README's reference is accurate.

_[tool: present_fs_item_for_download]_

The handoff package is complete. Let me present it for download.Your **Claude Code handoff package** is ready to download above.

It contains a self-sufficient `README.md` (every token, component spec, page, interaction, and the exact stat-feature/overlay measurements), all 8 page prototypes, the `lib/` component source, the photography in `assets/`, and the full `_ds/` design-system source (tokens, compiled bundle, and component source) so a developer can rebuild it pixel-accurately in your real stack.

The README is explicit that the HTML files are **design references** — to be recreated in your target framework (Next.js/Astro/etc.), not shipped as-is — and flags the prototype-only pieces (the Babel loader, tweaks panel, image-slot) as **do not port**.

Want me to add **screenshots** of each page into the package? I left them out by default.

