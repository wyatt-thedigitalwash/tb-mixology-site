import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
          label="Add-On Service"
          title="Glassware Rental"
          subtitle="Elevate your bar with real glassware — coupes, rocks glasses, highballs, and more. Available as an add-on to any bartending package at $3–$5 per person."
        />
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
          >
            Get a Quote
          </Link>
        </div>
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
              title="$3–$5 Per Person"
              subtitle="Pricing is based on guest count and glassware selection. Reach out and we'll put together a custom quote for your event."
            />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/martini-glasses-event-setup.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-4 leading-tight">
              Elevate Your Bar Setup
            </h2>
            <p className="font-accent text-lg md:text-xl text-white/70 mb-10">
              Real glassware makes all the difference.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-12 py-5 text-sm tracking-[0.2em] uppercase font-body font-medium rounded-sm hover:bg-white hover:text-primary transition-colors duration-300 ease-out"
            >
              Get a Quote
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
