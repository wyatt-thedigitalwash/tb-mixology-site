import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import EventGallery from "@/components/EventGallery";
import MenuExamples from "@/components/MenuExamples";

export const metadata: Metadata = {
  title: "Events | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Browse our event gallery featuring weddings, corporate events, private parties, and brand collaborations across Tampa Bay.",
};

export default function EventsPage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <SectionHeading
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
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl text-primary mb-8">
              Your event deserves a great bar.
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-10 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
            >
              Tell Us About Your Event
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
