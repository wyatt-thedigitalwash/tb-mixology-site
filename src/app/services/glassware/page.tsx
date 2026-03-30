import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import { glasswareTypes } from "@/lib/data/glassware";

export const metadata: Metadata = {
  title: "Glassware Rental | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Rent real glassware for your event — coupes, rocks glasses, highballs, martini glasses, and more. Serving Tampa, St. Pete, and surrounding areas.",
  openGraph: {
    title: "Glassware Rental | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Rent real glassware for your event — coupes, rocks glasses, highballs, martini glasses, and more. Serving Tampa, St. Pete, and surrounding areas.",
  },
};

export default function GlasswarePage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <SectionHeading
          label="Services"
          title="Glassware Rental"
          subtitle="Trade the plastic for real glassware. Elevate the look and feel of your bar with curated glass options for every type of cocktail."
        />
      </section>

      {/* Glassware Grid */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Our Collection"
              title="Available Glassware"
              light
            />
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {glasswareTypes.map((glass, i) => (
              <FadeIn
                key={glass}
                delay={
                  i % 5 === 1
                    ? "delay-100"
                    : i % 5 === 2
                      ? "delay-200"
                      : i % 5 === 3
                        ? "delay-300"
                        : i % 5 === 4
                          ? "delay-400"
                          : ""
                }
              >
                <div className="text-center group">
                  <PlaceholderImage
                    label={glass}
                    className="rounded-sm group-hover:opacity-80 transition-opacity duration-200 ease-out"
                    aspect="square"
                  />
                  <h3 className="font-heading text-lg text-secondary mt-3">
                    {glass}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="text-center text-secondary/50 font-accent italic text-sm mt-10">
              More styles coming soon.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <SectionHeading
              label="Pricing"
              title="Pricing Coming Soon"
              subtitle="We're finalizing our rental pricing. In the meantime, reach out and we'll put together a custom quote based on your event size and glassware needs."
            />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-4">
              Rent Glassware for Your Event
            </h2>
            <p className="font-body text-secondary/70 mb-8 max-w-xl mx-auto">
              Let us know your event size and cocktail menu and we&apos;ll
              recommend the right glassware and quantities.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-10 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
            >
              Get a Quote
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
