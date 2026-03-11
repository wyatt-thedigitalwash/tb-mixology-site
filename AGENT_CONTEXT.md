# TB Mixology — Agent Context

## Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Email:** Resend (`RESEND_API_KEY` env var)
- **Icons:** Lucide React

## Design System

### Colors
| Token            | Value                          |
|------------------|--------------------------------|
| `bg`             | `#faf7f2` (warm cream/linen)   |
| `surface`        | `#f0ebe2` (soft sand)          |
| `terracotta`     | `#c4714f` (primary accent)     |
| `sage`           | `#7a8c6e` (secondary accent)   |
| `sand`           | `#e8ddd0` (borders/dividers)   |
| `text`           | `#2d3a28` (deep olive)         |
| `text-muted`     | `#7a6e62` (warm taupe-gray)    |
| `hover`          | `#d4956f` (lighter terracotta) |

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Jost (sans-serif)
- **Labels:** Uppercase Jost, letter-spaced

### Aesthetic
- Fresh & botanical, craft-forward
- Subtle linen/paper grain texture overlays
- Warm sand dividers between sections
- Fade-in animations on scroll (Intersection Observer)
- Soft border-radius (6–8px), terracotta buttons with cream text
- Botanical line-art SVG decorations (leaf sprigs, citrus slices)

## Pages

| Route       | Page              |
|-------------|-------------------|
| `/`         | Home              |
| `/services` | Services          |
| `/drinks`   | Drink Catalog     |
| `/faq`      | FAQ               |
| `/contact`  | Book Your Event   |

## API Routes

| Route            | Method | Description                        |
|------------------|--------|------------------------------------|
| `/api/contact`   | POST   | Sends event inquiry via Resend     |

## Components (`src/components/`)
- `Navbar.tsx` — Sticky navbar with Home, Services, Drinks, FAQ, Book Now links + mobile hamburger
- `Footer.tsx` — Logo, nav (all pages), socials, contact info, copyright
- `TierCard.tsx` — Service tier card with sage left border, features, and "perfect for" callout
- `SectionLabel.tsx` — Uppercase sage label used above headings
- `GoldDivider.tsx` — Thin warm sand horizontal rule
- `ContactForm.tsx` — Full event questionnaire with Resend API integration
- `SuccessMessage.tsx` — Post-submit confirmation
- `FadeIn.tsx` — Intersection Observer fade-in animation wrapper
- `Accordion.tsx` — Accessible expand/collapse FAQ accordion with smooth height animation

## Business Info
- **Brand:** TB Mixology
- **Service Area:** Tampa, St. Pete, Clearwater, Sarasota
- **Email:** emma@tbmixology.com
- **Phone 1:** (614) 634-1126
- **Phone 2:** (727) 337-4215
- **Instagram:** https://www.instagram.com/tbmixology/
- **Facebook:** https://www.facebook.com/p/TB-Mixology-100093284260144/
- **TikTok:** https://www.tiktok.com/@tbmixology

## Environment Variables
- `RESEND_API_KEY` — Required for contact form email delivery
