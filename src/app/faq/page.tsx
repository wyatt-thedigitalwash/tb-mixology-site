import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "FAQ | TB Mixology — Tampa Bay Event Bartending",
};

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
            {faqs.map((faq) => (
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
              className="mt-8 inline-block bg-accent text-primary px-10 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-md hover:bg-accent/90 transition-colors duration-200 ease-out"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </section>
      </main>
    </>
  );
}
