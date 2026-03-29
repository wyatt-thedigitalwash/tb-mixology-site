import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Batched Cocktails | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Handcrafted batched cocktails mixed, prepped, and delivered to your door in Tampa & St. Pete. Each batch makes 26\u201330 drinks.",
  openGraph: {
    title: "Batched Cocktails | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Handcrafted batched cocktails mixed, prepped, and delivered to your door in Tampa & St. Pete. Each batch makes 26\u201330 drinks.",
  },
};

const details = [
  "Each batch makes ~26\u201330 drinks",
  "Free delivery in Tampa & St. Pete",
  "Glass bottles with pour spouts",
  "Pickup next day at your convenience",
  "Happy to assist with setup",
  "All garnishes included & prepped",
  "Custom printed recipe & instruction cards",
];

export default function BatchedPage() {
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
              Batched Cocktails
            </h1>
            <p className="font-accent text-lg md:text-xl text-warm-gray max-w-2xl mx-auto">
              Handcrafted cocktail batches mixed, prepped, and delivered to your
              door — ready to pour and enjoy.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Details + Image */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase font-body mb-3 text-accent">
                What&apos;s Included
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-6">
                Everything You Need
              </h2>
              <ul className="space-y-3 mb-8">
                {details.map((detail) => (
                  <li
                    key={detail}
                    className="text-secondary/70 font-body text-sm flex items-start gap-3"
                  >
                    <span className="text-accent mt-0.5 shrink-0">&#8226;</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <Link
                href="/drinks"
                className="inline-block text-accent font-body text-sm tracking-wide hover:text-accent/80 transition-colors"
              >
                View Full Flavor Menu &rarr;
              </Link>
            </FadeIn>
            <FadeIn delay="delay-100">
              <PlaceholderImage
                label="Photo — Batched Cocktails"
                className="rounded-sm"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Pricing"
              title="Simple, Transparent Pricing"
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
                    <td className="px-6 py-4">1 batch (~26\u201330 drinks)</td>
                    <td className="px-6 py-4 text-right font-accent text-accent">
                      $120\u2013$150
                    </td>
                  </tr>
                  <tr className="border-b border-warm-gray/15">
                    <td className="px-6 py-4">2+ batches (each)</td>
                    <td className="px-6 py-4 text-right font-accent text-accent">
                      $110\u2013$130
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Half batch</td>
                    <td className="px-6 py-4 text-right font-accent text-accent">
                      $70\u2013$85
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Batched bottles ready for delivery", "Pour spout close-up"].map(
              (label, i) => (
                <FadeIn key={label} delay={i === 1 ? "delay-100" : ""}>
                  <PlaceholderImage
                    label={`Photo — ${label}`}
                    className="rounded-sm"
                  />
                </FadeIn>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
              Order Batched Cocktails
            </h2>
            <p className="font-body text-warm-gray mb-8 max-w-xl mx-auto">
              Tell us how many guests you&apos;re expecting and we&apos;ll
              recommend the right number of batches and flavors.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-10 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors"
            >
              Place an Order
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
