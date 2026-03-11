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
| `bg`             | `#0a0a0a`                      |
| `surface`        | `#111111`                      |
| `surface-light`  | `#1a1a1a`                      |
| `gold`           | `#c9a84c`                      |
| `champagne`      | `#e8d5a3`                      |
| `text`           | `#f5f0e8`                      |
| `text-muted`     | `#8a8278`                      |
| `border-gold`    | `rgba(201, 168, 76, 0.2)`     |

### Typography
- **Headings:** Cormorant Garamond (serif)
- **Body:** DM Sans (sans-serif)
- **Labels:** Uppercase DM Sans, letter-spaced

### Aesthetic
- Dark luxury editorial
- Subtle noise texture overlays
- Gold rule dividers between sections
- Fade-in animations on scroll (Intersection Observer)
- Sharp or very slightly rounded corners — no pill buttons

## Pages

| Route       | Page              |
|-------------|-------------------|
| `/`         | Home              |
| `/services` | Services          |
| `/contact`  | Book Your Event   |

## API Routes

| Route            | Method | Description                        |
|------------------|--------|------------------------------------|
| `/api/contact`   | POST   | Sends event inquiry via Resend     |

## Components (`src/components/`)
- `Navbar.tsx` — Sticky navbar, transparent → solid on scroll, mobile hamburger
- `Footer.tsx` — Logo, nav, socials, contact info, copyright
- `TierCard.tsx` — Service tier card with features and "perfect for" callout
- `SectionLabel.tsx` — Uppercase gold label used above headings
- `GoldDivider.tsx` — Thin horizontal gold gradient rule
- `ContactForm.tsx` — Full event questionnaire with Resend API integration
- `SuccessMessage.tsx` — Post-submit confirmation
- `FadeIn.tsx` — Intersection Observer fade-in animation wrapper

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
