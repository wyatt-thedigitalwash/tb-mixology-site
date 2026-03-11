import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import GoldDivider from "@/components/GoldDivider";
import Accordion from "@/components/Accordion";
import FadeIn from "@/components/FadeIn";
import BotanicalOverlay from "@/components/BotanicalOverlay";

export const metadata: Metadata = {
  title: "FAQ | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Frequently asked questions about TB Mixology's event bartending services, booking process, tiers, and more.",
};

const bookingFaqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 4–6 weeks in advance, especially for weekends and peak event season (spring and fall). That said, reach out even if your event is coming up soon — we'll always do our best to accommodate last-minute bookings.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Tampa, St. Pete, Clearwater, Sarasota, and the surrounding areas. Not sure if we cover your location? Just ask — we're flexible.",
  },
  {
    question: "Do you require a deposit?",
    answer:
      "Yes, a deposit is required to secure your date. We'll go over all the details during your initial consultation call.",
  },
  {
    question: "How long does setup and breakdown take?",
    answer:
      "For Tier 3 and Tier 4, we typically arrive 1–1.5 hours before the event for setup and stay for breakdown after. We handle everything so you don't have to.",
  },
];

const servicesFaqs = [
  {
    question: "I'm not sure which tier is right for me. Can you help?",
    answer:
      "Absolutely — that's what our initial consultation is for. Fill out our event questionnaire and Emma will reach out to walk you through the best option for your event, budget, and guest count.",
  },
  {
    question: "Do you provide the alcohol?",
    answer:
      "Tier 4 (Luxury Open Bar) includes all alcohol. For Tiers 1–3, we provide everything except the alcohol itself — though we'll give you a detailed shopping list so you know exactly what to get.",
  },
  {
    question: "Can you accommodate non-drinkers or guests who don't drink alcohol?",
    answer:
      "Always. We offer a full mocktail menu and can ensure every guest has a beautiful, crafted drink in hand regardless of whether they drink alcohol.",
  },
  {
    question: "Do you offer cocktail classes?",
    answer:
      "Yes! Cocktail classes are available as an add-on or standalone experience. They're a great option for bachelorette parties, team events, or anyone who just wants to learn the craft. Ask about availability when you book.",
  },
];

const practicalFaqs = [
  {
    question: "What do you need from the venue?",
    answer:
      "Generally we need a flat surface for the bar setup, access to water, and a power outlet nearby. We'll go through all venue requirements during your consultation.",
  },
  {
    question: "Do you bring your own bar setup and glassware?",
    answer:
      "Tier 3 and Tier 4 include bar décor and glassware. We also offer glassware rental as a standalone add-on. For Tiers 1 and 2, we can discuss what you already have available.",
  },
  {
    question: "Can you create a custom cocktail menu themed to our event?",
    answer:
      "Yes — and we love doing it. Whether you want a signature drink named after the bride, a menu that matches your color palette, or cocktails that tie into your event theme, we're all in.",
  },
  {
    question: "What is your service area travel fee?",
    answer:
      "Travel within the Tampa Bay area is typically included. For events outside our standard radius, a small travel fee may apply. We'll always be upfront about this during the consultation.",
  },
];

export default function FaqPage() {
  return (
    <main className="pt-28 pb-20 md:pb-28">
      {/* Hero / Intro */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <BotanicalOverlay />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <SectionLabel>Got Questions?</SectionLabel>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-text mb-6">
              We&apos;ve Got
              <br />
              <span className="text-terracotta">Answers</span>
            </h1>
            <p className="text-text-muted font-body text-lg max-w-2xl mx-auto">
              Everything you need to know before booking. Still have questions?
              We&apos;re always happy to chat.
            </p>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* FAQ Sections */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {/* Booking & Logistics */}
          <FadeIn>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-text mb-6">
                Booking & Logistics
              </h2>
              <Accordion items={bookingFaqs} />
            </div>
          </FadeIn>

          {/* Services & Tiers */}
          <FadeIn>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-text mb-6">
                Services & Tiers
              </h2>
              <Accordion items={servicesFaqs} />
            </div>
          </FadeIn>

          {/* Practical Questions */}
          <FadeIn>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-text mb-6">
                Practical Questions
              </h2>
              <Accordion items={practicalFaqs} />
            </div>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* Bottom CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <SectionLabel>Still Curious?</SectionLabel>
            <h2 className="font-heading text-3xl md:text-5xl text-text mb-4">
              Still Have Questions?
            </h2>
            <p className="text-text-muted font-body mb-8 max-w-lg mx-auto">
              We&apos;d love to hear from you. Fill out our event questionnaire and
              Emma will be in touch within 1–2 business days.
            </p>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-block bg-terracotta text-bg px-10 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-md hover:bg-hover transition-colors"
            >
              Get In Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
