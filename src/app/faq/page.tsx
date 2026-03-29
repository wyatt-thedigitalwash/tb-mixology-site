import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | TB Mixology — Tampa Bay Event Bartending",
};

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend 4\u20136 weeks in advance, especially for weekends and peak season (spring/fall). Reach out even for last-minute \u2014 we\u2019ll do our best.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "St. Pete, Tampa, Clearwater, Sarasota, and surrounding areas. We\u2019re also willing to travel \u2014 just ask!",
  },
  {
    question: "Do you require a deposit?",
    answer:
      "Yes, a deposit secures your date. Details covered during consultation.",
  },
  {
    question: "How long does setup/breakdown take?",
    answer:
      "For Tier 3 & 4, we arrive 1\u20131.5 hours early and stay for breakdown.",
  },
  {
    question: "I\u2019m not sure which tier is right for me?",
    answer:
      "That\u2019s what our consultation is for! Fill out the event questionnaire and Emma will walk you through options.",
  },
  {
    question: "Do you provide the alcohol?",
    answer:
      "Tier 4 includes all alcohol. Tiers 1\u20133 we provide everything except alcohol, with a detailed shopping list.",
  },
  {
    question: "Can you accommodate non-drinkers?",
    answer: "Always. Full mocktail menu available.",
  },
  {
    question: "Do you offer cocktail classes?",
    answer:
      "Yes! Add-on or standalone. Great for bachelorette parties, team events, and private gatherings.",
  },
  {
    question: "What do you need from the venue?",
    answer: "Flat surface, water access, power outlet nearby.",
  },
  {
    question: "Do you bring your own bar setup and glassware?",
    answer:
      "Tier 3 & 4 include bar d\u00e9cor and glassware. Also available as standalone rental add-on.",
  },
  {
    question: "Can you create a custom themed cocktail menu?",
    answer:
      "Yes \u2014 and we love doing it. Signature drinks named after people, themed menus, color-matched cocktails.",
  },
  {
    question: "What is your travel fee?",
    answer:
      "Travel within Tampa Bay typically included. Small fee for outside standard radius \u2014 always upfront.",
  },
  {
    question: "Are you insured?",
    answer:
      "Fully insured up to $2,000,000. Documentation available on request.",
  },
  {
    question: "What makes TB Mixology different?",
    answer:
      "Everything is fully custom. Our menus are made for each event with named cocktails, themed garnishes, and fresh ingredients. We put more work into it than companies that show up with liquor and soda and cheap juices.",
  },
  {
    question: "How does the Batch & Drop service work?",
    answer:
      "We deliver handcrafted batch cocktails in glass bottles with pour spouts. Free delivery in Tampa/St Pete. We pick up bottles the next day.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-secondary">
        {/* Hero */}
        <section className="py-24 md:py-32 text-center px-6">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary">
              Frequently Asked Questions
            </h1>
          </FadeIn>
        </section>

        {/* FAQ List */}
        <section className="max-w-3xl mx-auto px-6 pb-20 md:pb-28">
          <div className="divide-y divide-warm-gray/30">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.question}>
                <FaqAccordion
                  question={faq.question}
                  answer={faq.answer}
                />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20 md:py-28 px-6 text-center">
          <FadeIn>
            <SectionHeading
              title="Still Have Questions?"
              centered
              light
            />
            <Link
              href="/contact"
              className="mt-8 inline-block bg-accent text-primary px-10 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-md hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </section>
      </main>
    </>
  );
}
