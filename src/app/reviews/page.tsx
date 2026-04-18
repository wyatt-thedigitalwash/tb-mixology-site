import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ReviewCard from "@/components/ReviewCard";
import FadeIn from "@/components/FadeIn";
import { reviews } from "@/lib/data/reviews";
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Reviews | TB Mixology — Tampa Bay Event Bartending",
  description:
    "See what our clients are saying about TB Mixology. Five-star reviews from weddings, corporate events, and private parties across Tampa Bay.",
  openGraph: {
    title: "Reviews | TB Mixology — Tampa Bay Event Bartending",
    description:
      "See what our clients are saying about TB Mixology. Five-star reviews from weddings, corporate events, and private parties across Tampa Bay.",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reviews | TB Mixology — Tampa Bay Event Bartending",
    description:
      "See what our clients are saying about TB Mixology. Five-star reviews from weddings, corporate events, and private parties across Tampa Bay.",
  },
  alternates: {
    canonical: "https://tbmixology.com/reviews",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TB Mixology",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "10",
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: r.name,
    },
    reviewBody: r.quote,
  })),
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-secondary">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
          <SectionHeading
            as="h1"
            label="Testimonials"
            title="Kind Words"
            subtitle="Hear from the hosts, couples, and brands we've had the pleasure of working with"
          />
        </section>

        {/* TODO: integrate Google Places Reviews API for real reviews */}

        {/* Aggregate Rating */}
        <section className="px-6 pb-12 max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="fill-accent text-accent"
                />
              ))}
            </div>
            <p className="font-heading text-3xl md:text-4xl text-primary mb-2">
              5.0
            </p>
            <p className="font-body text-sm text-warm-gray tracking-wide">
              Average from Google Reviews
            </p>
          </FadeIn>
        </section>

        {/* Reviews Grid */}
        <section className="px-6 pb-24 md:pb-32 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {reviews.map((review, i) => (
              <FadeIn key={review.name} delay={i % 2 === 1 ? "delay-100" : ""}>
                <ReviewCard
                  quote={review.quote}
                  name={review.name}
                  eventType={review.eventType}
                />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-primary">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-4 leading-tight">
                Ready to Experience It?
              </h2>
              <p className="font-accent text-lg md:text-xl text-white/70 mb-10">
                Join the list of happy hosts.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-accent text-primary px-12 py-5 text-sm tracking-[0.2em] uppercase font-body font-medium rounded-sm hover:bg-white hover:text-primary transition-colors duration-300 ease-out"
              >
                Get in Touch
              </Link>
            </FadeIn>
          </div>
        </section>

        <LocalBusinessJsonLd />
        <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Reviews", href: "/reviews" }]} />
      </main>
    </>
  );
}
