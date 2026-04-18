import type { Metadata } from "next";
import { Suspense } from "react";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Contact TB Mixology to plan your next event. Fill out our event questionnaire or book a free consultation with Emma. Serving Tampa Bay.",
  openGraph: {
    title: "Contact | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Contact TB Mixology to plan your next event. Fill out our event questionnaire or book a free consultation with Emma. Serving Tampa Bay.",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Get in touch with TB Mixology to plan your next Tampa Bay event.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tbmixology.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="py-24 md:py-32 text-center px-6">
        <FadeIn>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary">
            Let&rsquo;s Plan Your Event
          </h1>
        </FadeIn>
      </section>

      {/* Two-column layout */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Event Questionnaire */}
          <FadeIn>
            <div>
              <h2 className="font-heading text-3xl text-primary mb-8">
                Event Questionnaire
              </h2>
              <Suspense><ContactForm /></Suspense>
            </div>
          </FadeIn>

          {/* Right — Calendly */}
          <FadeIn delay="delay-100">
            <div>
              <h2 className="font-heading text-3xl text-primary mb-2">
                Prefer to Schedule a Call?
              </h2>
              <p className="text-warm-gray font-body mb-8">
                Book a free 15-minute consultation with Emma.
              </p>
              <CalendlyEmbed />
            </div>
          </FadeIn>
        </div>
      </section>

      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
    </main>
  );
}
