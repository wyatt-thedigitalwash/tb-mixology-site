import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import GlasswareInquiry from "@/components/GlasswareInquiry";
import { glasswareTypes } from "@/lib/data/glassware";
import { LocalBusinessJsonLd, BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Glassware Rental | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Rent real glassware for your event — coupes, rocks glasses, highballs, martini glasses, and more. Serving Tampa, St. Pete, and surrounding areas.",
  openGraph: {
    title: "Glassware Rental | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Rent real glassware for your event — coupes, rocks glasses, highballs, martini glasses, and more. Serving Tampa, St. Pete, and surrounding areas.",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glassware Rental | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Rent real glassware for your event — coupes, rocks glasses, highballs, martini glasses, and more. Serving Tampa, St. Pete, and surrounding areas.",
  },
  alternates: {
    canonical: "https://tb-mixology-site.vercel.app/services/glassware",
  },
};

export default function GlasswarePage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <SectionHeading
          as="h1"
          label="Add-On Service"
          title="Glassware Rental"
          subtitle="Elevate your event with real glassware — coupes, rocks glasses, highballs, and more. Available as an add-on to bartending packages or as a standalone rental."
        />
        <div className="text-center mt-8">
          <Link
            href="/contact?service=glassware"
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
                key={glass.name}
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
                  <div className="aspect-square flex items-center justify-center p-6 rounded-sm border border-white/10 group-hover:border-accent/30 transition-colors duration-200 ease-out">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={glass.icon}
                      alt={glass.name}
                      width={120}
                      height={160}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full text-secondary/70 group-hover:text-secondary transition-colors duration-200 ease-out"
                    />
                  </div>
                  <h3 className="font-heading text-lg text-secondary mt-3">
                    {glass.name}
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

      {/* How Are You Looking to Rent? */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Get Started"
              title="How Are You Looking to Rent?"
            />
          </FadeIn>
          <FadeIn>
            <GlasswareInquiry />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-4 leading-tight">
              Elevate Your Bar Setup
            </h2>
            <p className="font-accent text-lg md:text-xl text-white/70 mb-10">
              Real glassware makes all the difference.
            </p>
            <Link
              href="/contact?service=glassware"
              className="inline-block bg-accent text-primary px-12 py-5 text-sm tracking-[0.2em] uppercase font-body font-medium rounded-sm hover:bg-white hover:text-primary transition-colors duration-300 ease-out"
            >
              Get a Quote
            </Link>
          </FadeIn>
        </div>
      </section>

      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Glassware Rental", href: "/services/glassware" }]} />
      <ServiceJsonLd name="Glassware Rental" description="Real glassware rental for events — coupes, rocks glasses, highballs, martini glasses and more. Serving Tampa Bay." />
    </main>
  );
}
