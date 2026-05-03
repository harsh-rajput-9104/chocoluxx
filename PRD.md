# PRD.md — House of Bakes Portfolio Website
**Version:** 1.0  
**Prepared for:** Diya Shah — House of Bakes  
**Prepared by:** Claude (Anthropic)  
**Date:** May 2026

---

## 1. Project Overview

**Business Name:** House of Bakes — BY Shah  
**Sub-tagline:** *Baked with Love, Served with Joy*  
**Owner:** Diya Shah  
**Business Type:** Local custom cake studio — cakes, cookies, and chocolate gift products  
**Instagram:** [@house_of_bakes__](https://www.instagram.com/house_of_bakes__)  
**Phone:** +91 99999 99999  
**WhatsApp:** +91 99999 99999

### Goal
Deliver a fully production-ready, client-facing portfolio website for House of Bakes that is visually stunning, mobile-first, and drives direct customer contact (WhatsApp / Call) with zero friction.

---

## 2. Target Audience & Primary Device

- **Primary users:** Local customers, gifting buyers, event planners (primarily mobile users)
- **Primary device:** Mobile (≥ 70% traffic) — design mobile-first, desktop as enhancement
- **Action goal:** User sees cakes → gets excited → taps WhatsApp/Call → places order

---

## 3. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | CSS Modules + Global CSS (no Tailwind) |
| Animation | Framer Motion |
| 3D Effects | Three.js (subtle — hero background only) |
| Deployment | Vercel (recommended) |
| Images | Local only — `public/images/` folder |
| Videos | Local only — `public/images/` folder |
| External UI libs | None — fully custom |

---

## 4. Color Palette & Design System

### Primary Colors
| Token | Hex | Usage |
|---|---|---|
| `--cedar` | `#4A6444` | Primary brand green — headers, CTAs, borders |
| `--cedar-dark` | `#2E3D2B` | Deep backgrounds, footer |
| `--cedar-mid` | `#5C7A55` | Hover states, dividers |
| `--cedar-light` | `#7A9973` | Subtle accents, icons |
| `--silk` | `#F5E5B1` | Primary warm cream — backgrounds, text on dark |
| `--silk-light` | `#FBF3D5` | Card backgrounds, highlights |
| `--silk-dark` | `#DEC882` | Gold accent, borders, shimmer |

### Typography
- **Display / Logo:** `Playfair Display` (Google Fonts) — elegant serif for headings, hero
- **Subheadings:** `Cormorant Garamond` — refined italic serif
- **Body:** `DM Sans` — clean, modern, readable on mobile
- **Accent / Tagline:** `Great Vibes` — cursive script for romantic taglines

### Design Language
- **Style:** Organic luxury — warm, handcrafted, feminine, editorial
- **Layout:** Asymmetric grids, overlapping elements, broken-grid sections
- **Effects:** Glassmorphism cards, scroll-triggered animations, parallax layers, staggered reveals
- **Textures:** Subtle grain overlay on backgrounds, soft vignettes on images
- **Three.js:** Floating soft bokeh particle field in hero background (green + gold particles, slow drift)
- **Motion philosophy:** Scroll-triggered Framer Motion variants — fade-up, scale-in, stagger children. All motion must be GPU-accelerated, no janky JS scroll listeners.

---

## 5. Pages & Detailed Specifications

---

### 5.1 Page: Home (`/`)

**Purpose:** First impression — emotionally hook the user and drive them to gallery or contact.

#### Sections (top to bottom):

**A. Navbar**
- Fixed, glassmorphic (`backdrop-filter: blur`) with `--cedar-dark` tint
- Logo text left: `House of Bakes` + small `BY Shah` below
- Nav links right: Home | Gallery | Contact
- On mobile: hamburger icon → full-screen overlay menu with smooth Framer Motion slide-in
- On scroll: navbar shrinks slightly (padding reduces) with smooth transition

**B. Hero Section**
- Layout: LEFT = Text block | RIGHT = Logo / Brand graphic (large)
- Left block:
  - Small script label: *"Baked with Love, Served with Joy"* (`Great Vibes` font, `--silk-dark` color)
  - H1: `House of Bakes` (`Playfair Display`, large, `--silk` on dark bg)
  - Sub-H1: `BY Shah` (`Cormorant Garamond`, italic, lighter weight)
  - Short tagline: `Custom cakes crafted for your most precious moments.`
  - Two CTA buttons: `[ View Gallery ]` | `[ Order on WhatsApp ]`
- Right block:
  - Business logo OR a large circular/rounded cake image with ring border in `--cedar` + `--silk-dark`
  - Floating subtle shadow and soft glow ring animation (CSS keyframe pulse)
- Background: Three.js canvas — slow-drifting soft bokeh particles in `#4A6444` and `#DEC882` on deep `#2E3D2B` background
- Mobile: Stack vertically — Right (logo image) on top, Left (text) below
- Entry animation: Framer Motion staggered — headline slides up, logo fades in with scale

**C. About Strip**
- Full-width asymmetric band — `--cedar` background
- Left: Large decorative quote mark + *"Every cake tells a story. Let us tell yours."*
- Right: Small paragraph about Diya Shah and House of Bakes (handcrafted, local, made-to-order)
- Parallax: section moves at 0.7x scroll speed vs page
- Mobile: stacked, centered

**D. Signature Products Section**
- Title: `What We Make` — centered, `Playfair Display`
- 3-card grid (horizontal scroll on mobile — snap scroll):
  - Card 1: Custom Cakes
  - Card 2: Cookies & Treats
  - Card 3: Chocolate Gift Boxes
- Each card:
  - Glassmorphic card (`background: rgba(245,229,177,0.08)`, `backdrop-filter: blur(12px)`, border `1px solid rgba(245,229,177,0.2)`)
  - Local image from `public/images/`
  - Category name + short one-line description
  - Hover: card lifts (translateY -8px), image zooms slightly
- Scroll-triggered: cards fade-up with stagger (0.15s delay between each)

**E. Featured Cakes Gallery Strip**
- Title: `Recent Creations`
- Asymmetric masonry-style image grid (CSS grid with `grid-row: span 2` for featured images)
- 6–8 images from `public/images/`
- On hover: image darkens slightly + small label fades in (`Custom Order`, `Birthday Cake`, etc.)
- Scroll-triggered parallax — images move at slightly different speeds
- `[ See Full Gallery ]` CTA button below
- Mobile: 2-column grid, no parallax (performance)

**F. Instagram CTA Section**
- Background: `--silk` cream
- Centered text: `Follow our sweet journey` + Instagram handle `@house_of_bakes__`
- Large Instagram icon + button `[ Follow on Instagram ]` → opens `https://www.instagram.com/house_of_bakes__`
- Decorative: small floating cake illustration (CSS or SVG) with gentle float animation

**G. Footer**
- Dark background `--cedar-dark`
- Left: Logo + tagline
- Center: Nav links
- Right: Phone + WhatsApp + Instagram icons with links
- Bottom bar: `© 2025 House of Bakes by Diya Shah. All rights reserved.`
- Thin top border: `--silk-dark` gold line

---

### 5.2 Page: Cake Gallery (`/gallery`)

**Purpose:** Showcase all work — build trust, inspire orders.

#### Layout:
- Page title: `Our Creations` — large centered hero text with soft `--cedar` underline accent
- Sub-title: *"Every order is made with love — here's a peek inside our kitchen."*

#### Tab / Filter Bar:
- 4 filter tabs (no routing — JS state filter):
  - `All` | `Cakes` | `Cookies & Treats` | `Chocolates & Gifts`
- Active tab: filled `--cedar` background, `--silk` text
- Inactive: transparent with `--cedar` border
- Framer Motion `AnimatePresence` on tab switch — items fade+scale out/in

#### Media Grid:
- **Images:** CSS Masonry grid (columns: 2 on mobile, 3 on tablet, 4 on desktop)
- **Videos:** Inline `<video>` elements with `autoPlay muted loop playsInline` — embedded naturally in grid
- All media sourced from `public/images/` — NO external URLs
- On click: Lightbox modal opens — full-screen with close button, prev/next arrows, ESC to close
- Lightbox: glassmorphic overlay, image/video centered, soft backdrop blur
- Scroll-triggered: each item fades up as it enters viewport (Intersection Observer via Framer Motion `whileInView`)
- Mobile: 2-column grid, lightbox fills full screen

---

### 5.3 Page: Contact (`/contact`)

**Purpose:** Make it effortless to reach Diya Shah — NO form, direct action only.

#### Layout:
- Hero: Page title `Get in Touch` + subline: *"Ready to order your dream cake? Let's talk!"*
- Owner Info Card:
  - Glassmorphic card, centered
  - Name: `Diya Shah`
  - Role: `Founder & Baker — House of Bakes`
  - Optional small portrait image if available in `public/images/`
- Two large CTA buttons:
  - `📞 Call Now` → `tel:+919999999999`
  - `💬 WhatsApp Us` → `https://wa.me/919999999999`
  - Button style: full-width on mobile, pill-shaped, `--cedar` filled with `--silk` text
  - Hover: subtle glow shadow in `--cedar-light`
- Hours / Note block: *"We take custom orders 7 days a week. Reach out for pricing and availability."*
- Instagram block: `[ Follow us @house_of_bakes__ ]` with icon

#### No contact form. No email field. Direct action only.

---

## 6. Global Floating Action Buttons (FAB)

- **Position:** Fixed, bottom-right corner, always visible on all pages
- **Two buttons stacked vertically:**
  - Top: 📞 Call button → `tel:+919999999999` — `--cedar` background
  - Bottom: 💬 WhatsApp button → `https://wa.me/919999999999?text=Hi! I'd like to place a cake order.` — `#25D366` WhatsApp green background
- **Design:** Circular, 56px diameter, box shadow with brand color glow
- **Animation:** Entry — slide-in from right on page load (Framer Motion). Hover — slight scale-up pulse
- **Mobile:** Same position, slightly smaller (48px)
- **Z-index:** 9999 — always above all content

---

## 7. Animations & Motion Specification

| Effect | Implementation | Trigger |
|---|---|---|
| Hero text reveal | Framer Motion stagger (children, 0.1s delay) | Page load |
| Hero logo scale-in | `initial: scale(0.8) opacity(0)` → `scale(1) opacity(1)` | Page load |
| Navbar shrink | CSS transition on scroll class toggle | Scroll |
| Section fade-up | `whileInView={{ opacity:1, y:0 }}` | Scroll into view |
| Card hover lift | `whileHover={{ y: -8 }}` | Hover |
| Gallery item reveal | Staggered `whileInView` with 0.08s delay | Scroll |
| Parallax sections | Framer Motion `useScroll` + `useTransform` | Scroll |
| Three.js particles | Continuous idle animation | Always |
| Tab switch (Gallery) | `AnimatePresence` fade+scale | Click |
| Mobile menu | Slide-down overlay | Hamburger tap |
| FAB entry | Slide from right, delay 1s | Page load |
| Image hover overlay | CSS opacity transition | Hover |

**Mobile Performance Rule:** Disable Three.js and heavy parallax on devices where `window.innerWidth < 768` or `prefers-reduced-motion` is set. Use CSS-only fallbacks.

---

## 8. File & Folder Structure

```
house-of-bakes/
├── public/
│   └── images/           ← ALL local images & videos (do not modify)
│       ├── *.jpg / *.png / *.webp   (cake photos, product photos)
│       └── *.mp4 / *.mov            (order videos)
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← Root layout (Navbar + FAB + Footer)
│   │   ├── page.tsx             ← Home page
│   │   ├── gallery/
│   │   │   └── page.tsx         ← Gallery page
│   │   └── contact/
│   │       └── page.tsx         ← Contact page
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── FAB.tsx              ← Floating Action Buttons
│   │   ├── HeroSection.tsx
│   │   ├── ThreeBackground.tsx  ← Three.js bokeh canvas
│   │   ├── ProductCards.tsx
│   │   ├── FeaturedGrid.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── Lightbox.tsx
│   │   ├── FilterTabs.tsx
│   │   └── InstagramCTA.tsx
│   ├── styles/
│   │   ├── globals.css          ← CSS variables, resets, grain texture
│   │   ├── navbar.module.css
│   │   ├── hero.module.css
│   │   ├── gallery.module.css
│   │   ├── contact.module.css
│   │   ├── fab.module.css
│   │   └── footer.module.css
│   ├── lib/
│   │   └── getLocalMedia.ts     ← Utility to list images/videos from public/images
│   └── types/
│       └── index.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 9. Assets Strategy

- **All images and videos** come from `public/images/` — scan this folder at build time
- Use Next.js `<Image>` component for all images (automatic optimization, lazy loading, WebP conversion)
- Use native `<video>` for videos with `autoPlay muted loop playsInline`
- Create a `lib/getLocalMedia.ts` utility that returns arrays of image paths and video paths from `public/images/`
- Do NOT use any external image URLs, stock photos, or placeholder images
- If a specific image is needed (e.g., owner portrait) and not found, gracefully skip that section

---

## 10. SEO & Meta

```tsx
// app/layout.tsx metadata
export const metadata = {
  title: 'House of Bakes — BY Shah | Custom Cakes Vadodara',
  description: 'House of Bakes by Diya Shah — Custom cakes, cookies, and chocolate gifts baked with love in Vadodara. Order your dream cake today!',
  keywords: ['custom cakes', 'cake Vadodara', 'birthday cake', 'House of Bakes', 'Diya Shah'],
  openGraph: {
    title: 'House of Bakes — BY Shah',
    description: 'Baked with Love, Served with Joy',
    url: 'https://houseofbakes.in',
    images: ['/images/og-image.jpg'],
  }
}
```

---

## 11. Performance Requirements

- Lighthouse mobile score target: ≥ 85
- All images: Next.js `<Image>` with `sizes` prop and lazy loading
- Three.js: loaded dynamically (`dynamic(() => import(...), { ssr: false })`)
- Framer Motion: used only client-side (`'use client'`)
- No layout shift (CLS < 0.1)
- First Contentful Paint target: < 2s on 4G mobile

---

## 12. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|---|---|---|
| Mobile | < 640px | Single column, no parallax, compact FAB |
| Tablet | 640px – 1024px | 2-column grids, partial parallax |
| Desktop | > 1024px | Full asymmetric layouts, all effects active |

---

## 13. Accessibility

- All images: meaningful `alt` text
- FAB buttons: `aria-label="Call us"` and `aria-label="WhatsApp us"`
- Color contrast: `--silk` on `--cedar-dark` passes WCAG AA
- Focus states: visible ring on all interactive elements
- `prefers-reduced-motion`: disable all motion animations

---

## 14. Deployment

- **Platform:** Vercel
- **Domain:** Custom domain (client to configure)
- **Build command:** `next build`
- **Output:** Static + SSR hybrid (default Next.js)
- No backend required — fully static with client-side interactions

---

## 15. Deliverable Checklist

- [ ] Next.js 14 project with TypeScript configured
- [ ] Global CSS variables matching exact color palette
- [ ] Three.js bokeh background in hero (desktop only)
- [ ] Navbar — glassmorphic, responsive, mobile hamburger menu
- [ ] Home page — all 6 sections complete
- [ ] Gallery page — masonry grid, filter tabs, lightbox, video support
- [ ] Contact page — owner card, Call + WhatsApp CTAs
- [ ] FAB — always-visible WhatsApp + Call buttons (all pages)
- [ ] Footer — complete with links and branding
- [ ] All images/videos sourced only from `public/images/`
- [ ] Framer Motion animations on all sections
- [ ] Full mobile responsiveness (tested at 375px, 390px, 414px)
- [ ] SEO metadata configured
- [ ] Production build with zero errors (`next build` passes)
