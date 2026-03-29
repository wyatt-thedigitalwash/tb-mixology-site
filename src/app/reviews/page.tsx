import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ReviewCard from "@/components/ReviewCard";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Reviews | TB Mixology — Tampa Bay Event Bartending",
  description:
    "See what our clients are saying about TB Mixology. Five-star reviews from weddings, corporate events, and private parties across Tampa Bay.",
};

const reviews = [
  {
    quote:
      "TB Mixology made our wedding reception absolutely magical. The custom cocktail menu was gorgeous and every drink was perfection.",
    name: "Sarah M.",
    eventType: "Wedding Reception",
  },
  {
    quote:
      "Emma and her team went above and beyond for our corporate holiday party. Professional, creative, and the drinks were incredible.",
    name: "James T.",
    eventType: "Corporate Event",
  },
  {
    quote:
      "The Batch & Drop service was a game-changer for our housewarming. Fresh, delicious, and so easy. Will definitely order again!",
    name: "Rachel K.",
    eventType: "Housewarming Party",
  },
  {
    quote:
      "We booked the Full Service Bar for our daughter's engagement party and it was worth every penny. The themed cocktails were a huge hit.",
    name: "Linda P.",
    eventType: "Engagement Party",
  },
  {
    quote:
      "Best bachelorette party ever! The cocktail class was so fun and the drinks were amazing. Everyone is still talking about it.",
    name: "Ashley D.",
    eventType: "Bachelorette Party",
  },
  {
    quote:
      "I've worked with several mobile bar companies and TB Mixology is hands down the best. Fresh ingredients, beautiful presentation, genuinely caring team.",
    name: "Marcus W.",
    eventType: "Brand Event",
  },
  {
    quote:
      "The espresso martinis were out of this world. We had the salted caramel and vanilla bean flavors and both were perfect.",
    name: "Nicole S.",
    eventType: "Birthday Party",
  },
  {
    quote:
      "From the initial consultation to the last drink served, the experience was seamless. Emma thinks of everything.",
    name: "David & Maria R.",
    eventType: "Anniversary Party",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TB Mixology",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "8",
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
              <FadeIn key={review.name} delay={i % 2 === 1 ? "delay-150" : ""}>
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
        <section className="px-6 pb-32 md:pb-40 text-center">
          <FadeIn>
            <p className="font-accent text-xl md:text-2xl text-warm-gray italic mb-8">
              Ready to experience it yourself?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-white font-body text-sm tracking-widest uppercase px-10 py-4 hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </section>
      </main>
    </>
  );
}
