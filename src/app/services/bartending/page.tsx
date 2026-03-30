import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import TierCard from "@/components/TierCard";
import { tiers } from "@/lib/data/bartending";

export const metadata: Metadata = {
  title: "Private Event Bartending | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Four tiers of private event bartending — from DIY cocktail recipes to luxury open bars. Serving Tampa, St. Pete, Clearwater, and Sarasota.",
  openGraph: {
    title: "Private Event Bartending | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Four tiers of private event bartending — from DIY cocktail recipes to luxury open bars. Serving Tampa, St. Pete, Clearwater, and Sarasota.",
  },
};

export default function BartendingPage() {
  return (
    <main className="pt-28 pb-24">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase font-body mb-3 text-warm-gray">
              Services
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
              Private Event Bartending
            </h1>
            <p className="font-accent text-lg md:text-xl text-warm-gray max-w-2xl mx-auto">
              Four tiers of service designed to match your event, your style, and
              your budget. Every detail handled with care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Choose Your Tier"
              title="Four Levels of Service"
              light
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tiers.map((tier, i) => (
              <FadeIn key={tier.tier} delay={i % 2 === 1 ? "delay-100" : ""}>
                <TierCard {...tier} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pricing — Batch & Drop */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Tier 2 Pricing"
              title="Batch & Drop Details"
            />
          </FadeIn>
          <FadeIn>
            <div className="max-w-2xl mx-auto border border-warm-gray/30 rounded-sm overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-warm-gray/30">
                    <th className="px-6 py-4 font-body text-sm text-warm-gray uppercase tracking-wider">
                      Option
                    </th>
                    <th className="px-6 py-4 font-body text-sm text-warm-gray uppercase tracking-wider text-right">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm text-primary">
                  <tr className="border-b border-warm-gray/15">
                    <td className="px-6 py-4">1 batch (~26–30 drinks)</td>
                    <td className="px-6 py-4 text-right font-accent text-accent">$120–$150</td>
                  </tr>
                  <tr className="border-b border-warm-gray/15">
                    <td className="px-6 py-4">2+ batches (each)</td>
                    <td className="px-6 py-4 text-right font-accent text-accent">$110–$130</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Half batch</td>
                    <td className="px-6 py-4 text-right font-accent text-accent">$70–$85</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Detailed Pricing — Full Service & Luxury */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Tier 3 & 4 Pricing"
              title="Full Service & Luxury Pricing"
              subtitle="Tier 4 Luxury Open Bar uses the same guest-count pricing below, plus the cost of alcohol. No charge for unopened bottles."
            />
          </FadeIn>
          <FadeIn>
            <div className="max-w-2xl mx-auto border border-warm-gray/30 rounded-sm overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-warm-gray/30">
                    <th className="px-6 py-4 font-body text-sm text-warm-gray uppercase tracking-wider">
                      Event Size
                    </th>
                    <th className="px-6 py-4 font-body text-sm text-warm-gray uppercase tracking-wider text-right">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm text-primary">
                  <tr className="border-b border-warm-gray/15">
                    <td className="px-6 py-4">Small (under 20 guests)</td>
                    <td className="px-6 py-4 text-right font-accent text-accent">$600+</td>
                  </tr>
                  <tr className="border-b border-warm-gray/15">
                    <td className="px-6 py-4">Medium (20–40 guests)</td>
                    <td className="px-6 py-4 text-right font-accent text-accent">$600–$1,200+</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Large (40+ guests)</td>
                    <td className="px-6 py-4 text-right font-accent text-accent">Custom quote</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
              Not Sure Which Tier Is Right?
            </h2>
            <p className="font-body text-warm-gray mb-8 max-w-xl mx-auto">
              Tell us about your event and we&apos;ll recommend the perfect tier
              for your needs and budget.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-10 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
            >
              Let&apos;s Plan Your Bar
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
