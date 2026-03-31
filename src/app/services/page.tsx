import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import {
  services,
  addOnServices,
  barSetupAddOns,
  serviceEnhancements,
  experienceAddOns,
} from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Our Services | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Bartending services, batch cocktails, cocktail classes, caviar service, and glassware rental — explore the full range of TB Mixology services in Tampa Bay.",
  openGraph: {
    title: "Our Services | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Bartending services, batch cocktails, cocktail classes, caviar service, and glassware rental — explore the full range of TB Mixology services in Tampa Bay.",
  },
};

const addOnCategories = [
  { title: "Bar Set Up & Essentials", items: barSetupAddOns },
  { title: "Service Enhancements", items: serviceEnhancements },
  { title: "Experience Add-Ons", items: experienceAddOns },
];

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

      {/* Core Services + Add-Ons */}
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

          <div className="mt-20">
            <FadeIn>
              <SectionHeading label="Add-On Services" title="Enhance Your Event" light />
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {addOnServices.map((service, i) => (
                <FadeIn key={service.title} delay={i === 1 ? "delay-100" : ""}>
                  <ServiceCard {...service} light />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Pricing */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading label="Pricing" title="Add-Ons & Extras" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOnCategories.map((category) => (
              <FadeIn key={category.title}>
                <div>
                  <h3 className="font-heading text-xl text-primary mb-5">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((addon) => (
                      <div
                        key={addon.name}
                        className="border border-warm-gray/30 rounded-sm p-4 flex justify-between items-start gap-4"
                      >
                        <span className="font-body text-base text-primary">
                          {addon.name}
                        </span>
                        <span className="font-accent text-accent text-lg whitespace-nowrap">
                          {addon.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
              Ready to Elevate Your Event?
            </h2>
            <p className="font-body text-warm-gray mb-8 max-w-xl mx-auto">
              Tell us about your event and we&apos;ll build the perfect bar
              experience for you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-10 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
