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
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
          <SectionHeading
            label="Support"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about working with TB Mixology"
          />
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
        <section className="py-24 md:py-32 bg-primary">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-4 leading-tight">
                Still Have Questions?
              </h2>
              <p className="font-accent text-lg md:text-xl text-white/70 mb-10">
                We&rsquo;d love to hear about your event.
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
      </main>
    </>
  );
}
