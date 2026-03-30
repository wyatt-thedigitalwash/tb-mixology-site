import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";
import { details } from "@/lib/data/batched";

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

export default function BatchedPage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <SectionHeading
          label="Services"
          title="Batched Cocktails"
          subtitle="Handcrafted cocktail batches mixed, prepped, and delivered to your door — ready to pour and enjoy."
        />
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
          >
            Place an Order
          </Link>
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
                className="inline-block text-accent font-body text-sm tracking-wide hover:text-accent/80 transition-colors duration-200 ease-out"
              >
                View Full Flavor Menu &rarr;
              </Link>
            </FadeIn>
            <FadeIn delay="delay-100">
              <div className="relative aspect-video rounded-sm overflow-hidden">
                <Image
                  src="/images/mimosa-bloody-mary-bar-setup.webp"
                  alt="Batch cocktail bar setup with fresh juices, bottles, and garnishes ready to serve"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
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
                    <td className="px-6 py-4">1 batch (~26–30 drinks)</td>
                    <td className="px-6 py-4 text-right font-accent text-accent">
                      $120–$150
                    </td>
                  </tr>
                  <tr className="border-b border-warm-gray/15">
                    <td className="px-6 py-4">2+ batches (each)</td>
                    <td className="px-6 py-4 text-right font-accent text-accent">
                      $110–$130
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Half batch</td>
                    <td className="px-6 py-4 text-right font-accent text-accent">
                      $70–$85
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
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-4 leading-tight">
              Order Batch Cocktails
            </h2>
            <p className="font-accent text-lg md:text-xl text-white/70 mb-10">
              Tell us how many guests and we&rsquo;ll recommend the perfect flavors.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-12 py-5 text-sm tracking-[0.2em] uppercase font-body font-medium rounded-sm hover:bg-white hover:text-primary transition-colors duration-300 ease-out"
            >
              Place an Order
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
