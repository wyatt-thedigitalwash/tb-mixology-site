import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { Gem, UtensilsCrossed, GlassWater, HandPlatter, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Caviar Service | TB Mixology — Tampa Bay Event Bartending",
  description:
    "All-inclusive caviar service for weddings, corporate events, and private parties in Tampa Bay. Premium caviar, accompaniments, and professional tableside service — $25–$40 per person.",
  openGraph: {
    title: "Caviar Service | TB Mixology — Tampa Bay Event Bartending",
    description:
      "All-inclusive caviar service for weddings, corporate events, and private parties in Tampa Bay.",
  },
};

const details = [
  { icon: Gem, title: "Premium Caviar", description: "Carefully sourced, high-quality caviar selection" },
  { icon: UtensilsCrossed, title: "Classic Accompaniments", description: "Crème fraîche, blini, chives, egg — all the traditions" },
  { icon: GlassWater, title: "Elegant Service Ware", description: "Beautiful presentation that matches your event's aesthetic" },
  { icon: HandPlatter, title: "Tableside Service", description: "Professional service from setup through breakdown" },
  { icon: Sparkles, title: "Fully All-Inclusive", description: "Nothing extra to source — we bring everything" },
  { icon: Users, title: "Any Event Size", description: "Intimate dinners to large-scale receptions" },
];

const perfectFor = [
  "Weddings",
  "Corporate Events",
  "VIP Receptions",
  "Private Parties",
];

export default function CaviarPage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <SectionHeading
          label="Add-On Service"
          title="All-Inclusive Caviar Service"
          subtitle="An elevated tasting experience for your guests — premium caviar served tableside with all the classic accompaniments."
        />
        <div className="text-center mt-6">
          <p className="font-accent text-2xl md:text-3xl text-accent mb-8">
            $25&ndash;$40 per person
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
          >
            Book Caviar Service
          </Link>
        </div>
      </section>

      {/* Image + Description */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="/images/guest-enjoying-caviar-service.webp"
                  alt="Guest enjoying the all-inclusive caviar service at a TB Mixology event"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay="delay-100">
              <p className="text-xs tracking-[0.25em] uppercase font-body mb-3 text-accent">
                The Experience
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-6">
                Premium, All-Inclusive Service
              </h2>
              <p className="font-body text-secondary/70 leading-relaxed mb-6">
                Our caviar service is designed to be a seamless, all-inclusive
                experience. Everything is provided &mdash; premium caviar,
                traditional accompaniments, elegant service ware, and
                professional tableside service. There&rsquo;s nothing extra to
                source or coordinate.
              </p>
              <p className="font-body text-secondary/70 leading-relaxed">
                Whether it&rsquo;s a wedding cocktail hour, a corporate
                reception, or an intimate dinner party, caviar adds a refined,
                memorable touch that elevates the entire event.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What's Included — Card Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Details"
              title="What&rsquo;s Included"
            />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.map((item, i) => (
              <FadeIn key={item.title} delay={i % 3 === 1 ? "delay-100" : i % 3 === 2 ? "delay-200" : ""}>
                <div className="border border-warm-gray/20 rounded-sm p-6 text-center hover:border-accent/40 transition-colors duration-200 ease-out">
                  <item.icon size={28} className="text-accent mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-lg text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-warm-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Ideal For"
              title="Perfect For"
              subtitle="Caviar service is a memorable premium touch for any celebration."
              light
            />
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {perfectFor.map((item, i) => (
              <FadeIn key={item} delay={i === 1 ? "delay-100" : i === 2 ? "delay-200" : i === 3 ? "delay-300" : ""}>
                <div className="border border-white/15 rounded-sm p-6 text-center hover:border-accent/40 transition-colors duration-200 ease-out">
                  <h3 className="font-heading text-lg text-secondary">{item}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-4 leading-tight">
              Add Caviar to Your Event
            </h2>
            <p className="font-accent text-lg md:text-xl text-warm-gray mb-10">
              The perfect premium touch for any celebration.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-12 py-5 text-sm tracking-[0.2em] uppercase font-body font-medium rounded-sm hover:bg-accent/90 transition-colors duration-300 ease-out"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
