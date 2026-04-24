import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { LocalBusinessJsonLd, BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { services, addOnServices } from "@/lib/data/services";
import AddOnsGrid from "@/components/AddOnsGrid";

export const metadata: Metadata = {
  title: "Our Services | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Bartending services, batch cocktails, cocktail classes, caviar service, and glassware rental — explore the full range of TB Mixology services in Tampa Bay.",
  openGraph: {
    title: "Our Services | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Bartending services, batch cocktails, cocktail classes, caviar service, and glassware rental — explore the full range of TB Mixology services in Tampa Bay.",
    images: [{ url: "/og-image.png" }],
  },
  alternates: {
    canonical: "https://tbmixology.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Bartending services, batch cocktails, cocktail classes, caviar service, and glassware rental — explore the full range of TB Mixology services in Tampa Bay.",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <SectionHeading
          as="h1"
          label="What We Offer"
          title="Our Services"
          subtitle="From full-service bartending and batch cocktails to hands-on classes and premium add-ons — TB Mixology has everything you need to elevate your next event."
        />
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading label="Core Services" title="What We Do" light />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}>
                <ServiceCard {...service} light />
              </FadeIn>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-3xl mx-auto">
            {addOnServices.map((service, i) => (
              <FadeIn key={service.title} delay={i === 1 ? "delay-100" : ""}>
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
          <AddOnsGrid />

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

      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
    </main>
  );
}
