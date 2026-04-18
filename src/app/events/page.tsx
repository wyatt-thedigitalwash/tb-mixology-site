import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import EventGallery from "@/components/EventGallery";
import MenuExamples from "@/components/MenuExamples";
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Events | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Browse our event gallery featuring weddings, corporate events, private parties, and brand collaborations across Tampa Bay.",
  openGraph: {
    title: "Events | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Browse our event gallery featuring weddings, corporate events, private parties, and brand collaborations across Tampa Bay.",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Browse our event gallery featuring weddings, corporate events, private parties, and brand collaborations across Tampa Bay.",
  },
  alternates: {
    canonical: "https://tbmixology.com/events",
  },
};

export default function EventsPage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <SectionHeading
          as="h1"
          label="Our Work"
          title="Events & Gallery"
          subtitle="A look at some of our favorite events across Tampa Bay"
        />
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
          >
            Tell Us About Your Event
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 pb-24 md:pb-32 max-w-7xl mx-auto">
        <EventGallery />
      </section>

      {/* Menu Examples */}
      <section id="menu-examples" className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Menu Examples"
              title="A Menu for Every Event"
              subtitle="Every event gets a fully custom cocktail menu. Here are a few examples from past events."
              light
            />
          </FadeIn>
          <FadeIn delay="delay-100">
            <MenuExamples />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-4 leading-tight">
              Your Event Deserves This
            </h2>
            <p className="font-accent text-lg md:text-xl text-white/70 mb-10">
              Every detail handled. Every drink handcrafted.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-12 py-5 text-sm tracking-[0.2em] uppercase font-body font-medium rounded-sm hover:bg-white hover:text-primary transition-colors duration-300 ease-out"
            >
              Tell Us About Your Event
            </Link>
          </FadeIn>
        </div>
      </section>

      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Events", href: "/events" }]} />
    </main>
  );
}
