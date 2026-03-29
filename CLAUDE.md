# TB Mixology

## Framework

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Email:** Resend
- **Icons:** Lucide React

## Pages

- `/` — Home (Hero, Services Overview, Tier Preview, Differentiator, Reviews, Instagram, CTA)
- `/services` — Services overview (4 services + add-ons)
- `/services/bartending` — Private Event Bartending (4 tiers with full pricing)
- `/services/classes` — Cocktail Classes
- `/services/batched` — Batched Cocktails (pricing + details)
- `/services/glassware` — Glassware Rental (10 types)
- `/drinks` — Drinks & Flavors (tabbed: Vodka, Tequila, Gin, Bourbon, Build Your Own)
- `/events` — Event photo galleries (filtered by category)
- `/reviews` — Reviews (8 placeholder reviews)
- `/about` — About Us (team + values)
- `/faq` — FAQ (15 accordion items)
- `/contact` — Contact (event questionnaire form + Calendly embed)

## Components

- `Navigation` — Sticky nav with services dropdown + mobile hamburger menu
- `Footer` — Dark footer with nav columns, contact info, socials
- `FadeIn` — Scroll-triggered fade-in animation wrapper (Intersection Observer)
- `SectionHeading` — Section header with optional label, title, subtitle
- `PlaceholderImage` — Dark gray placeholder div with centered label
- `ServiceCard` — Service preview card with image, title, description, link
- `TierCard` — Service tier display card
- `ReviewCard` — Review display with stars
- `FaqAccordion` — Expandable FAQ item
- `CalendlyEmbed` — Calendly inline widget wrapper (client component)
- `InstagramFeed` — Placeholder IG grid (6 squares)
- `DrinkMenu` — Tabbed drink menu (client component)
- `EventGallery` — Filtered event photo gallery (client component)
- `ContactForm` — Full event questionnaire with Resend integration

## Design System

### Colors

- Primary: `#1a1a1a` (black)
- Secondary: `#faf9f7` (warm off-white / cream)
- Accent: `#c9a96e` (warm gold)
- Warm Gray: `#a89f95` (muted text, borders)
- Background: `#faf9f7`
- Text: `#1a1a1a`

### Typography

- Headings: Playfair Display (serif) — `font-heading`
- Body: Libre Franklin (sans-serif) — `font-body`
- Accent/Quotes: Cormorant Garamond (serif) — `font-accent`

### Spacing / Layout

- Max content width: `max-w-7xl` (1280px)
- Section padding: `py-20 md:py-28` with `px-6`
- Components use `rounded-sm` for subtle rounding

## Business Info

### About

Woman-owned & operated mobile bartending company based in St. Pete, FL. Specializes in fresh, custom cocktails for events across Tampa Bay.

### Contact

- Email: emma@tbmixology.com
- Phone 1: (614) 634-1126
- Phone 2: (727) 337-4215

### Services

- Tier 1: DIY Bartender ($50+)
- Tier 2: Batch & Drop ($120–$150)
- Tier 3: Full Service Bar ($600+)
- Tier 4: Luxury Open Bar ($600+ + alcohol)
- Add-ons: Glassware Rental, Cocktail Classes, Caviar Service, Cocktail Smoker, etc.

### Social Media

- Instagram: https://www.instagram.com/tbmixology/
- Facebook: https://www.facebook.com/p/TB-Mixology-100093284260144/
- TikTok: https://www.tiktok.com/@tbmixology

## SEO

- Every page has unique metadata (title, description, openGraph)
- Sitemap at `/sitemap.xml`
- Robots at `/robots.txt`
- JSON-LD schema: LocalBusiness (home), FAQPage (faq), AggregateRating (reviews)
- Title format: "[Page] | TB Mixology — Tampa Bay Event Bartending"
