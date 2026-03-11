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
    "From DIY cocktail kits to full-service bars — explore our four tiers of handcrafted event bartending serving Tampa, St. Pete, Clearwater, and Sarasota.",
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
      "Hosts who love to mix it up themselves — with expert-level recipes and guidance",
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
      "Events where you have someone to pour but want the prep handled by people who care about flavor",
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
      "Hosts who want to enjoy the party without worrying about the bar — we take care of everything",
  },
  {
    tier: 4,
    name: "Luxury Open Bar",
    price: "Starting at $550 + cost of alcohol",
    features: [
      "Everything in Tier 3",
      "All alcohol provided and curated for your event",
      "The complete experience from first pour to last call",
    ],
    perfectFor:
      "The full experience — from selecting the spirits to cleaning up, it's all on us",
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
            Great Drinks,
            <br />
            <span className="text-terracotta">Your Way</span>
          </h1>
          <p className="text-text-muted font-body text-lg max-w-2xl mx-auto">
            We offer four tiers of service — from handcrafted recipes you can
            make at home to a fully staffed bar with all the details handled.
            Pick the one that feels right for your event.
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
              A Little Something Extra
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: GlassWater,
              title: "Glassware Rental",
              description:
                "Trade the plastic for real glassware — coupes, rocks glasses, highballs, and more.",
            },
            {
              icon: Beaker,
              title: "Batch Cocktails",
              description:
                "Add extra batches of handcrafted cocktails to any tier when you need more to go around.",
            },
            {
              icon: PartyPopper,
              title: "Cocktail Classes",
              description:
                "Turn your event into a hands-on experience with guided cocktail-making for your group.",
            },
          ].map((addon, i) => (
            <FadeIn key={addon.title} delay={i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}>
              <div className="bg-surface rounded-lg p-6 text-center">
                <addon.icon className="w-8 h-8 text-terracotta mx-auto mb-4" />
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
            Just mention add-ons when you reach out — we&apos;ll work them into your event plan.
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
            No problem — tell us about your event and we&apos;ll help you find the perfect fit.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-terracotta text-bg px-10 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-md hover:bg-hover transition-colors"
          >
            Let&apos;s Plan Your Bar
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
