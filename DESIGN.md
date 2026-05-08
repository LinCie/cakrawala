---
name: CRN Advisory Systems
description: Governed intelligence for resilient enterprise operations.
colors:
  brand-50: "#F3F7FA"
  brand-100: "#E2ECF3"
  brand-500: "#2F6F8F"
  brand-700: "#174B68"
  brand-900: "#0B2A3D"
  brand-950: "#071A26"
  teal-500: "#1E8A83"
  teal-700: "#0F625E"
  accent-500: "#C49A45"
  accent-700: "#8B6827"
  neutral-50: "#F8FAFC"
  neutral-100: "#F1F5F9"
  neutral-200: "#E2E8F0"
  neutral-500: "#64748B"
  neutral-700: "#334155"
  neutral-900: "#0F172A"
  neutral-950: "#020617"
  surface: "#FFFFFF"
  surface-inverse: "#071A26"
  success-500: "#16835B"
  warning-500: "#B7791F"
  error-500: "#C2413A"
  info-500: "#2563A8"
typography:
  display:
    fontFamily: '"Satoshi", "Inter", ui-sans-serif, system-ui, sans-serif'
    fontSize: "clamp(3.5rem, 7vw, 6.5rem)"
    fontWeight: 650
    lineHeight: 0.95
    letterSpacing: "-0.045em"
  headline:
    fontFamily: '"Satoshi", "Inter", ui-sans-serif, system-ui, sans-serif'
    fontSize: "clamp(2.75rem, 5vw, 4.75rem)"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"
  label:
    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif'
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "0.02em"
  data:
    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif'
    fontSize: "2.25rem"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.03em"
rounded:
  field: "0.75rem"
  card: "1.25rem"
  panel: "1.75rem"
  button: "999px"
spacing:
  section-sm: "4rem"
  section-md: "6rem"
  section-lg: "8rem"
  card: "1.5rem"
  field: "0.875rem"
  gutter: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.brand-700}"
    textColor: "{colors.surface}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-900}"
    textColor: "{colors.surface}"
    rounded: "{rounded.button}"
    padding: "0.75rem 1.5rem"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.brand-900}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "0.75rem 1.5rem"
  button-secondary-hover:
    backgroundColor: "{colors.brand-50}"
    textColor: "{colors.brand-900}"
    rounded: "{rounded.button}"
    padding: "0.75rem 1.5rem"
  field-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral-900}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0.75rem 1rem"
  field-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.field}"
    padding: "0.75rem 1rem"
  card-service:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
  badge-trust:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral-700}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0.375rem 0.75rem"
---

# Design System: CRN Advisory Systems

## 1. Overview

**Creative North Star: "The Boardroom Assurance Packet"**

CRN Advisory Systems should feel like the briefing deck and diligence packet that lands on an executive committee table before a regulated program is approved. The design is premium, but the premium signal comes from discipline, not spectacle. Structure, spacing, contrast, and language should reduce perceived risk before they ask for attention.

This is a light-first enterprise system anchored by dark navy control surfaces. White and cool slate carry the reading experience; navy concentrates authority in headers, heroes, and primary conversion moments; muted gold and restrained teal operate as evidence markers rather than decorative flourish. The overall atmosphere is analytical, credible, and board-ready, with enough technical sharpness to reassure CIO, CISO, and procurement audiences.

The system explicitly rejects the posture of a generic digital agency, a hype-driven AI startup, and a consumer-tech marketing site. It also rejects vague transformation theater, flashy novelty, and empty premium cues that do not reduce perceived risk. Every layout, token, and component should look plausible for a focused 185-person Indonesian enterprise advisory firm, not for a global consultancy playing at impossible scale.

**Key Characteristics:**

- Controlled contrast with light reading surfaces and navy authority bands
- Evidence-led hierarchy built for scanning, proof, and next-step clarity
- Premium restraint, where gold and teal are signals, not decoration
- Bilingual enterprise readability with generous body leading and tight headline tracking
- Motion that supports comprehension, never performance for its own sake

## 2. Colors

The palette is restrained on most surfaces, but firmly committed at moments of authority: navy owns trust, teal marks technical capability, and muted gold signals executive emphasis.

### Primary

- **Command Navy** (`#174B68`): the default conversion and authority color. Use it for primary buttons, key navigation actions, dark-on-light emphasis, and disciplined enterprise framing.
- **Boardroom Ink** (`#0B2A3D`): the headline and structural dark. Use it for major headings, legal or trust-adjacent emphasis, and dark mode text hierarchy.
- **Midnight Control** (`#071A26`): the deepest surface color. Reserve it for hero bands, footer shells, and high-trust sections that need weight without drama.

### Secondary

- **Governance Teal** (`#1E8A83`): the technical-accent color. Use it for data, AI, or control-state emphasis where the interface needs modern capability without startup energy.
- **Deep Teal Control** (`#0F625E`): the darker teal for secondary CTA states, diagrams, and denser technical moments.

### Tertiary

- **Executive Brass** (`#C49A45`): the premium highlight. Use it for eyebrow text, proof-strip emphasis, and small-value accents that reward attention.
- **Aged Brass** (`#8B6827`): the divider and badge version of the accent. Use it for borders, fine separators, and mature premium signals.

### Neutral

- **Cloud Paper** (`#F8FAFC`): the default page background. It should feel cooler and more corporate than cream.
- **Quiet Panel** (`#F1F5F9`): subdued panel fill for tables, supporting sections, and muted information zones.
- **Control Line** (`#E2E8F0`): the standard border and gridline color. It should separate information without becoming a graphic event.
- **Executive Slate** (`#334155`): strong body-adjacent text for summaries and metadata.
- **Working Slate** (`#64748B`): secondary copy, helper text, and label support.

### Named Rules

**The Muted Gold Rule.** Gold is a signal, not a surface. Use `#C49A45` and `#8B6827` in small amounts for emphasis, never as large promotional fills.

**The Trust-First Rule.** Primary CTA states use `#174B68` at rest and `#0B2A3D` on hover. When a surface asks for action, the navy scale carries the weight.

## 3. Typography

**Display Font:** Satoshi, with Inter fallback
**Body Font:** Inter, with system sans fallback
**Label/Mono Font:** IBM Plex Mono for technical labels and data references

**Character:** The system pairs premium compression in headlines with sober, highly readable body copy. Headings feel executive and deliberate; paragraphs feel calm, operational, and easy to scan across English and Bahasa Indonesia.

### Hierarchy

- **Display** (`650`, `clamp(3.5rem, 7vw, 6.5rem)`, `0.95`): reserved for hero statements and major brand moments. It should feel compact and expensive, never theatrical.
- **Headline** (`650`, `clamp(2.75rem, 5vw, 4.75rem)`, `1`): page titles and critical sectional headlines. Use this tier when the user needs immediate framing.
- **Title** (`600`, `1.25rem`, `1.35`): component headings, service cards, and proof modules. Tight enough to feel sharp, loose enough to stay readable.
- **Body** (`400`, `1rem`, `1.7`): the default reading layer. Keep long-form measure near `68ch` to `72ch`, especially for governance and procurement copy.
- **Label** (`500`, `0.75rem`, `0.02em`): eyebrows, metadata, small controls, and compact trust labels. Use uppercase only when the label is short and structural.
- **Data** (`650`, `2.25rem`, `1`): quantitative proof points and maturity scores. Pair with tabular numerals so evidence reads as disciplined, not decorative.

### Named Rules

**The Board Packet Rule.** Headlines may tighten tracking, but paragraphs must breathe. Dense enterprise content becomes credible only when body copy keeps generous leading and a disciplined line length.

**The Bilingual Breathing Rule.** Bahasa paragraphs should default to relaxed leading. Do not compress long Indonesian copy to chase a tighter page.

## 4. Elevation

This system uses a hybrid depth model: flat by default, lifted only when interaction or proof needs reinforcement. Most enterprise surfaces should communicate confidence through tone, border, and spacing first. Shadows appear when a component needs to feel actionable, selectable, or materially above the page.

### Shadow Vocabulary

- **Micro Trace** (`0 1px 2px rgb(15 23 42 / 0.05)`): use for small pills, inputs, and low-stakes controls that need definition without obvious lift.
- **Proof Card** (`0 18px 45px rgb(15 23 42 / 0.08)`): the standard card shadow. Use on service cards, resource cards, and evidence modules.
- **Elevated Panel** (`0 24px 70px rgb(15 23 42 / 0.12)`): use for hero-side diagrams, major overlays, and high-importance panels where depth supports hierarchy.
- **Action Shadow** (`0 10px 24px rgb(23 75 104 / 0.22)`): the dedicated button shadow. It should make primary actions feel confident, not loud.

### Named Rules

**The Proof-First Lift Rule.** If a surface looks lifted, it must earn that privilege through action or evidence. Decorative floating cards are prohibited.

## 5. Components

For each component, the feel should be calm, exact, and procurement-ready. The interface should look like it has been reviewed by both design and risk teams.

### Buttons

- **Shape:** pill geometry for primary conversion (`999px radius`) and compact, deliberate silhouettes.
- **Primary:** `#174B68` background with white text, `0.75rem 1.5rem` padding, and the dedicated action shadow. This is the default conversion button.
- **Hover / Focus:** primary hover shifts to `#0B2A3D`; focus uses a `2px` visible outline in brand navy on light surfaces and muted gold on dark ones.
- **Secondary / Ghost / Download:** secondary buttons keep a white surface with navy border and text; ghost buttons invert for dark sections with translucent white hover fill; download buttons can use `#0F172A` with a navy hover state.

### Cards / Containers

- **Character:** service and proof cards should feel solid, document-like, and lightly elevated.
- **Corner Style:** softly rounded cards (`1.25rem`) and larger strategic panels (`1.75rem`).
- **Background:** white or quiet neutral backgrounds on light pages; dark navy panels only when anchoring a hero or footer.
- **Shadow Strategy:** default to the proof-card shadow; promote to elevated-panel only for hero-side diagrams or major proof moments.
- **Internal Padding:** `1.5rem` card padding is the base rhythm.

### Inputs / Fields

- **Style:** white field surface, `1px` neutral border, `0.75rem` field radius, and restrained micro shadow.
- **Focus:** shift border to `#2F6F8F` and add a soft `4px` focus ring tint. The focus state should feel exact and accessible, not flashy.
- **Error / Disabled:** error states use `#C2413A` plus explanatory text; disabled states reduce opacity and pointer interaction together.

### Navigation

- **Style, typography, default/hover/active states, mobile treatment:** the header is sticky, lightly translucent, and blurred over content. Desktop navigation uses quiet text with navy hover emphasis and a smaller CTA button. Mobile navigation should move into a slide panel with clear focus order, not a decorative overlay.

### Trust Badges and Data Blocks

- **Style:** trust badges use pill geometry, light border definition, and compact label typography. Data cards pair caption labels with large tabular numerals and restrained explanatory copy.
- **State:** these modules are informational, not playful. Use color for semantic emphasis only when it conveys status or maturity.

## 6. Do's and Don'ts

### Do:

- **Do** use `#F8FAFC` or `#FFFFFF` for default reading surfaces, and reserve `#071A26` for high-trust sectional anchors such as heroes and footers.
- **Do** keep primary CTA states on the navy scale: `#174B68` at rest, `#0B2A3D` on hover, with a visible `2px` focus outline.
- **Do** keep body measure near `68ch` to `72ch`, with relaxed leading for long governance, procurement, and Bahasa content.
- **Do** use muted gold (`#C49A45`) for compact highlights, eyebrow labels, and selective proof emphasis, not for large background blocks.
- **Do** use motion in short, controlled durations: `160ms` for buttons and hover states, `420ms` to `520ms` for reveal patterns, always with reduced-motion fallbacks.
- **Do** keep proof modules evidence-driven: direct labels, tabular numerals, light gridlines, and text alternatives for charts.

### Don't:

- **Don't** make this look like a generic digital agency.
- **Don't** make this feel like a hype-driven AI startup.
- **Don't** drift into a consumer-tech marketing site posture.
- **Don't** use vague transformation language, gimmicky motion, flashy novelty, or empty premium cues that do not reduce perceived risk.
- **Don't** imitate the scale or visual posture of a global consultancy beyond what a fictional 185-person firm could credibly support.
- **Don't** copy any real competitor directly.
- **Don't** put gradients inside the logo, add drop shadows to the logo, stretch it, or place it on low-contrast or busy photo backgrounds.
- **Don't** use color alone to communicate error, risk, or data interpretation.
