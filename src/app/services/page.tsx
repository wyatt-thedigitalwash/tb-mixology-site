import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services | TB Mixology — Tampa Bay Event Bartending",
  description:
    "From DIY cocktail kits to luxury open bars, cocktail classes, batched cocktails, and glassware rental — explore the full range of TB Mixology services in Tampa Bay.",
  openGraph: {
    title: "Our Services | TB Mixology — Tampa Bay Event Bartending",
    description:
      "From DIY cocktail kits to luxury open bars, cocktail classes, batched cocktails, and glassware rental — explore the full range of TB Mixology services in Tampa Bay.",
  },
};

const services = [
  {
    title: "Private Event Bartending",
    description:
      "Four tiers of service from DIY recipes to a fully staffed luxury open bar — tailored to your event and guest count.",
    href: "/services/bartending",
    imageLabel: "Photo — Event Bartending",
  },
  {
    title: "Cocktail Classes",
    description:
      "Interactive, hands-on cocktail classes in a guided social setting. Equal parts fun and elevated.",
    href: "/services/classes",
    imageLabel: "Photo — Cocktail Class",
  },
  {
    title: "Batched Cocktails",
    description:
      "Handcrafted cocktail batches mixed, prepped, and delivered to your door — ready to pour and enjoy.",
    href: "/services/batched",
    imageLabel: "Photo — Batched Cocktails",
  },
  {
    title: "Glassware Rental",
    description:
      "Trade the plastic for real glassware — coupes, rocks glasses, highballs, and more for your event.",
    href: "/services/glassware",
    imageLabel: "Photo — Glassware Rental",
  },
];

const experienceAddOns = [
  { name: "Caviar Service", note: "An elevated tasting experience" },
  { name: "Champagne Toast", note: null },
  { name: "Cocktail Smoker", note: "Theatrical smoked cocktails" },
  { name: "Bubble Gun", note: "Fun playful moments for photos" },
  { name: "Branding Tool", note: "Custom branded orange slices" },
  { name: "Mid-Event Restock", note: "Fresh supplies delivered during your event" },
];

const equipmentAddOns = [
  { name: "Cocktail shaker & strainer set", price: "$5/each" },
  { name: "Glass beverage dispenser", price: "$20/each" },
  { name: "Garnish tray", price: "$10/each" },
  { name: "Marble menu & instruction holder", price: "$5" },
  { name: "Additional flavors", price: "$5\u2013$10/each" },
  { name: "Disposable cups", price: "Pricing varies" },
  { name: "Delivery outside Tampa Bay/St Pete", price: "$10/30 min" },
];

export default function ServicesPage() {
  return (
    <main className="pt-28 pb-24">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase font-body mb-3 text-warm-gray">
              What We Offer
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
              Our Services
            </h1>
            <p className="font-accent text-lg md:text-xl text-warm-gray max-w-2xl mx-auto">
              From handcrafted recipes and batched cocktails to fully staffed bars
              and hands-on classes — TB Mixology has everything you need to
              elevate your next event.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i > 0 ? `delay-${i * 100}` : ""}>
                <ServiceCard {...service} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Add-Ons"
              title="Enhance Your Event"
              subtitle="Take your event to the next level with curated extras and premium touches."
            />
          </FadeIn>

          {/* Experience Add-Ons */}
          <FadeIn>
            <h3 className="font-heading text-2xl text-primary mb-6">
              Experience Add-Ons
            </h3>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {experienceAddOns.map((addon, i) => (
              <FadeIn key={addon.name} delay={i % 3 === 1 ? "delay-100" : i % 3 === 2 ? "delay-200" : ""}>
                <div className="border border-warm-gray/30 rounded-sm p-5 hover:border-accent/50 transition-colors">
                  <h4 className="font-heading text-lg text-primary mb-1">
                    {addon.name}
                  </h4>
                  {addon.note && (
                    <p className="text-warm-gray font-body text-sm">
                      {addon.note}
                    </p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Equipment & Extras */}
          <FadeIn>
            <h3 className="font-heading text-2xl text-primary mb-6">
              Equipment &amp; Extras
            </h3>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipmentAddOns.map((addon, i) => (
              <FadeIn key={addon.name} delay={i % 3 === 1 ? "delay-100" : i % 3 === 2 ? "delay-200" : ""}>
                <div className="border border-warm-gray/30 rounded-sm p-5 hover:border-accent/50 transition-colors flex justify-between items-start gap-4">
                  <h4 className="font-body text-sm text-primary">
                    {addon.name}
                  </h4>
                  <span className="font-accent text-accent text-sm whitespace-nowrap">
                    {addon.price}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-4">
              Ready to Elevate Your Event?
            </h2>
            <p className="font-body text-secondary/70 mb-8 max-w-xl mx-auto">
              Tell us about your event and we&apos;ll build the perfect bar
              experience for you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-10 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
