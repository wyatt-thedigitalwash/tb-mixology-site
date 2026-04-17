import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import {
  services,
  addOnServices,
  addOnOverviewItems,
} from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Our Services | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Bartending services, batch cocktails, cocktail classes, caviar service, glassware rental, and bar rental — explore the full range of TB Mixology services in Tampa Bay.",
  openGraph: {
    title: "Our Services | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Bartending services, batch cocktails, cocktail classes, caviar service, glassware rental, and bar rental — explore the full range of TB Mixology services in Tampa Bay.",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <SectionHeading
          label="What We Offer"
          title="Our Services"
          subtitle="From full-service bartending and batch cocktails to hands-on classes and premium add-ons — TB Mixology has everything you need to elevate your next event."
        />
      </section>

      {/* Core Services + Add-On Services */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading label="Core Services" title="What We Do" light />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...services, ...addOnServices].map((service, i) => (
              <FadeIn key={service.title} delay={i % 3 === 1 ? "delay-100" : i % 3 === 2 ? "delay-200" : ""}>
                <ServiceCard {...service} light />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons & Extras */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <SectionHeading label="Extras" title="Add-Ons & Extras" />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {addOnOverviewItems.map((item) => (
              <FadeIn key={item.name}>
                <div className="border border-warm-gray/30 rounded-sm px-4 py-3">
                  <p className="font-body text-sm font-semibold text-primary">{item.name}</p>
                  <p className="font-body text-sm text-warm-gray mt-1">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="text-center mt-8">
              <Link
                href="/services/bartending"
                className="font-body text-sm text-primary hover:text-accent transition-colors duration-200 ease-out tracking-wide"
              >
                See Full Pricing &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-4">
              Ready to Elevate Your Event?
            </h2>
            <p className="font-body text-base text-white/70 mb-8 max-w-xl mx-auto">
              Tell us about your event and we&apos;ll build the perfect bar
              experience for you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-10 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-white hover:text-primary transition-colors duration-200 ease-out"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
