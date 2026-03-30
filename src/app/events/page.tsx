import type { Metadata } from "next";
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
      </section>

      {/* Gallery */}
      <section className="px-6 pb-24 md:pb-32 max-w-7xl mx-auto">
        <EventGallery />
      </section>

      {/* Menu Examples */}
      <section id="menus" className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Custom Menus"
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
    </main>
  );
}
