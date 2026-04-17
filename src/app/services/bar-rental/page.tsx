import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PricingCard from "@/components/PricingCard";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { Truck, Ruler, PaintBucket, Wrench, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Bar Rental | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Rent a custom portable wooden bar for your next event in Tampa Bay. Beautiful 4-foot white bar with canopy, delivered, set up, and broken down by TB Mixology.",
  openGraph: {
    title: "Bar Rental | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Rent a custom portable wooden bar for your next event in Tampa Bay. Beautiful 4-foot white bar with canopy, delivered and set up by TB Mixology.",
  },
};

const details = [
  { icon: Ruler, title: "4-Foot Custom Bar", description: "A beautifully crafted portable bar that anchors your event setup" },
  { icon: PaintBucket, title: "Clean, Modern Design", description: "White finish with a canopy and rattan lanterns that complement any event aesthetic" },
  { icon: Truck, title: "Delivery & Pickup", description: "We deliver, set up, and break down the bar — you just enjoy the party" },
  { icon: Wrench, title: "Full Setup Included", description: "Bar mat, garnish trays, tools, and everything needed for service" },
  { icon: Clock, title: "Available All Day", description: "Keep the bar for the full duration of your event at no extra hourly charge" },
  { icon: ShieldCheck, title: "Fully Insured", description: "Covered under our $2,000,000 liability insurance for your peace of mind" },
];

export default function BarRentalPage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <SectionHeading
          label="Add-On or Standalone"
          title="Custom Bar Rental"
          subtitle="A beautiful, portable wooden bar to anchor your event. Available as an add-on to any bartending package or as a standalone rental for DIY setups."
        />
        <div className="max-w-sm mx-auto mt-8 mb-8">
          <PricingCard name="Custom 4&prime; Wooden Bar" price="$200+" />
        </div>
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
          >
            Inquire About Bar Rental
          </Link>
        </div>
      </section>

      {/* Image + Description */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="/images/bar-rentals/white-mobile-bar-outdoor-event-setup.webp"
                  alt="Custom white portable bar set up outdoors for an event"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay="delay-100">
              <p className="text-xs tracking-[0.25em] uppercase font-body mb-3 text-accent">
                The Setup
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-6">
                Your Bar, Delivered
              </h2>
              <p className="font-body text-secondary/70 leading-relaxed mb-6">
                Our custom-built portable bar gives your event a polished,
                professional look without the hassle. The 4-foot white wooden bar
                features a canopy with rattan lantern accents, creating a stunning
                focal point for any setting &mdash; backyard parties, waterfront
                events, corporate gatherings, or weddings.
              </p>
              <p className="font-body text-secondary/70 leading-relaxed">
                We handle delivery, setup, and breakdown so you can focus on
                enjoying the event. Pair it with our bartending services for a
                full-service experience, or rent it standalone for your own DIY bar
                setup.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading label="Gallery" title="The Bar in Action" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/images/bar-rentals/canopy-bar-cart-waterfront-palm-trees.webp", alt: "White bar cart with canopy and rattan lanterns on waterfront lawn with palm trees" },
              { src: "/images/bar-rentals/rolling-bar-cart-canopy-outdoor.webp", alt: "Rolling white bar cart with canopy on wheels among palm trees" },
              { src: "/images/bar-rentals/mobile-bar-garnish-station-closeup.webp", alt: "Bartender at mobile bar with garnish station, citrus, and water dispensers" },
            ].map((img, i) => (
              <FadeIn key={img.src} delay={i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}>
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Details"
              title="What&rsquo;s Included"
              light
            />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.map((item, i) => (
              <FadeIn key={item.title} delay={i % 3 === 1 ? "delay-100" : i % 3 === 2 ? "delay-200" : ""}>
                <div className="border border-white/10 rounded-sm p-6 text-center hover:border-accent/30 transition-colors duration-200 ease-out">
                  <item.icon size={28} className="text-accent mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-lg text-secondary mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pairs Well With */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Pairs Well With"
              title="Complete Your Setup"
            />
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <PricingCard name="Bartending Service" price="Starting at $600" note="Full-service bartending for your event" />
              <PricingCard name="Glassware Rental" price="$3–$5/pp" note="Real glassware to elevate the experience" />
              <PricingCard name="Water Station" price="$1/pp" note="Self-serve hydration, great for outdoors" />
              <PricingCard name="Large Ice Cubes" price="$50+" note="Premium ice for cocktails" />
            </div>
          </FadeIn>
          <FadeIn>
            <div className="text-center mt-8">
              <Link
                href="/services/bartending"
                className="font-body text-sm text-primary hover:text-accent transition-colors duration-200 ease-out tracking-wide"
              >
                See Full Bartending Packages &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-4 leading-tight">
              Rent the Bar for Your Event
            </h2>
            <p className="font-accent text-lg md:text-xl text-white/70 mb-10">
              Standalone or paired with bartending &mdash; we handle delivery, setup, and breakdown.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-12 py-5 text-sm tracking-[0.2em] uppercase font-body font-medium rounded-sm hover:bg-white hover:text-primary transition-colors duration-300 ease-out"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
