import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import GoldDivider from "@/components/GoldDivider";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Book Your Event | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Tell us about your event and we'll craft the perfect bar experience. Serving Tampa, St. Pete, Clearwater, and Sarasota.",
};

export default function ContactPage() {
  return (
    <main className="pt-28 pb-20 md:pb-28">
      <section className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <SectionLabel>Get in Touch</SectionLabel>
              <h1 className="font-heading text-4xl md:text-6xl text-text mb-4">
                Let&apos;s Plan Your Bar
              </h1>
              <p className="text-text-muted font-body text-lg max-w-xl mx-auto">
                Share some details about your event and we&apos;ll get back to you
                with ideas. Still figuring things out? That&apos;s totally fine — we
                love brainstorming.
              </p>
            </div>
          </FadeIn>

          <GoldDivider className="my-10" />

          <FadeIn>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
