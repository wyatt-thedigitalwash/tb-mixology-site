import type { Metadata } from "next";
import Link from "next/link";
import { GlassWater, Beaker, PartyPopper } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import GoldDivider from "@/components/GoldDivider";
import TierCard from "@/components/TierCard";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Services | TB Mixology — Tampa Bay Event Bartending",
  description:
    "From DIY cocktail kits to full luxury open bars — explore our four tiers of event bartending services serving Tampa, St. Pete, Clearwater, and Sarasota.",
};

const tiers = [
  {
    tier: 1,
    name: "DIY Bartender",
    price: "Starting at $50",
    features: [
      "Virtual consult to build your custom cocktail menu",
      "Full instructions for each drink",
      "Shopping list — alcohol, mixers, and garnishes",
      "Printable menus to display at your bar",
    ],
    perfectFor:
      "Hosts who want to run their own bar but with professional recipes and style",
  },
  {
    tier: 2,
    name: "Batch & Drop",
    price: "Starting at $150",
    features: [
      "Everything in Tier 1",
      "Batches of cocktails mixed and delivered to your door",
      "Bar tools provided for the event",
      "Prepped garnishes ready to go",
      "Printable menus included",
      "Quick setup guide so anyone can serve",
    ],
    perfectFor:
      "Events where you have someone to pour but want the prep done by pros",
  },
  {
    tier: 3,
    name: "Full Service Bar",
    price: "Starting at $500",
    features: [
      "Everything in Tier 2",
      "Professional bartender service (1 or 2 bartenders)",
      "Full setup and breakdown",
      "Ice, mixers, and garnishes included",
      "Bar décor and glassware provided",
    ],
    perfectFor:
      "Hosts who want a stress-free, high-quality bar service without worrying about logistics",
  },
  {
    tier: 4,
    name: "Luxury Open Bar",
    price: "Starting at $550 + cost of alcohol",
    features: [
      "Everything in Tier 3",
      "All alcohol provided and curated for your event",
      "The complete luxury experience from start to finish",
    ],
    perfectFor:
      "The full experience — nothing to think about, everything taken care of",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-28 pb-24">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <FadeIn>
          <SectionLabel>Our Services</SectionLabel>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-text mb-6">
            Every Event Deserves
            <br />
            <span className="text-gold">a Better Bar</span>
          </h1>
          <p className="text-text-muted font-body text-lg max-w-2xl mx-auto">
            We offer four tiers of service — from professional cocktail recipes you can
            make yourself, to a fully staffed luxury open bar. Choose the level that fits
            your event, your budget, and your vibe.
          </p>
        </FadeIn>
      </section>

      <GoldDivider />

      {/* Tiers */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        {tiers.map((tier, i) => (
          <FadeIn key={tier.tier} delay={i % 2 === 1 ? "delay-100" : ""}>
            <TierCard {...tier} />
          </FadeIn>
        ))}
      </section>

      <GoldDivider />

      {/* Add-ons */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <FadeIn>
          <div className="text-center mb-12">
            <SectionLabel>Add-Ons</SectionLabel>
            <h2 className="font-heading text-3xl md:text-4xl text-text">
              Make It Even Better
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: GlassWater,
              title: "Glassware Rental",
              description:
                "Swap the plastic for premium glassware — coupes, rocks glasses, highballs, and more.",
            },
            {
              icon: Beaker,
              title: "Batch Cocktails",
              description:
                "Add extra batches of signature cocktails to any tier for larger parties.",
            },
            {
              icon: PartyPopper,
              title: "Cocktail Classes",
              description:
                "Turn your event into an interactive experience with guided cocktail-making.",
            },
          ].map((addon, i) => (
            <FadeIn key={addon.title} delay={i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}>
              <div className="border border-border-gold bg-surface p-6 text-center noise-overlay">
                <addon.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-heading text-xl text-text mb-2">
                  {addon.title}
                </h3>
                <p className="text-text-muted text-sm font-body leading-relaxed">
                  {addon.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="text-center text-text-muted text-sm font-body mt-8 italic">
            Ask about add-ons when you book — we&apos;ll tailor the details to your event.
          </p>
        </FadeIn>
      </section>

      <GoldDivider />

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
            Not sure which tier is right for you?
          </h2>
          <p className="text-text-muted font-body mb-8">
            Let&apos;s talk through your event and find the perfect fit.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-bg px-10 py-4 text-sm tracking-[0.15em] uppercase font-body hover:bg-champagne transition-colors"
          >
            Get in Touch
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
