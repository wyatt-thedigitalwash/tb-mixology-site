import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PricingCard from "@/components/PricingCard";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { Gem, UtensilsCrossed, GlassWater, HandPlatter, Sparkles, Users } from "lucide-react";
import CaviarInquiry from "@/components/CaviarInquiry";
import { LocalBusinessJsonLd, BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Caviar Service | TB Mixology — Tampa Bay Event Bartending",
  description:
    "All-inclusive caviar service for weddings, corporate events, and private parties in Tampa Bay. Premium caviar, accompaniments, and professional tableside service — $25–$40 per person.",
  openGraph: {
    title: "Caviar Service | TB Mixology — Tampa Bay Event Bartending",
    description:
      "All-inclusive caviar service for weddings, corporate events, and private parties in Tampa Bay.",
    images: [{ url: "/og-image.png" }],
  },
  alternates: {
    canonical: "https://tb-mixology-site.vercel.app/services/caviar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caviar Service | TB Mixology — Tampa Bay Event Bartending",
    description:
      "All-inclusive caviar service for weddings, corporate events, and private parties in Tampa Bay. Premium caviar, accompaniments, and professional tableside service.",
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


export default function CaviarPage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <SectionHeading
          as="h1"
          label="Add-On or Standalone"
          title="All-Inclusive Caviar Service"
          subtitle="An elevated tasting experience for your guests — premium caviar served tableside with all the classic accompaniments. Available as an add-on to any bartending package or as a standalone booking."
        />
        <div className="max-w-sm mx-auto mt-8 mb-8">
          <PricingCard name="All-Inclusive Caviar Service" price="$25–$40/pp" />
        </div>
        <div className="text-center">
          <Link
            href="/contact?service=caviar"
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
                  src="/images/caviar-service/caviar-service-couple-tasting.webp"
                  alt="Couple tasting caviar being served on hand at a TB Mixology event"
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
                Perfect for wedding cocktail hours, corporate receptions, VIP events,
                and intimate dinner parties. Book it as an add-on to your bartending
                package or as a standalone experience &mdash; either way, we handle
                everything.
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

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading label="Gallery" title="The Caviar Experience" light />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/images/caviar-service/caviar-bump-serving-guest-closeup.webp", alt: "Server offering caviar bump to guest at event" },
              { src: "/images/caviar-service/bride-groom-caviar-bump-wedding.webp", alt: "Bride and groom enjoying caviar bumps at wedding celebration" },
              { src: "/images/caviar-service/guest-enjoying-caviar-outdoor-tent.webp", alt: "Guest enjoying caviar service under outdoor tent" },
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

      {/* How to Book */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Get Started"
              title="How Are You Looking to Book?"
            />
          </FadeIn>
          <FadeIn>
            <CaviarInquiry />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-4 leading-tight">
              Add Caviar to Your Event
            </h2>
            <p className="font-accent text-lg md:text-xl text-white/70 mb-10">
              Book as an add-on to bartending or as a standalone experience.
            </p>
            <Link
              href="/contact?service=caviar"
              className="inline-block bg-accent text-primary px-12 py-5 text-sm tracking-[0.2em] uppercase font-body font-medium rounded-sm hover:bg-accent/90 transition-colors duration-300 ease-out"
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
          { name: "Caviar Service", href: "/services/caviar" },
        ]}
      />
      <ServiceJsonLd
        name="All-Inclusive Caviar Service"
        description="Premium caviar service for weddings, corporate events, and private parties in Tampa Bay. Tableside service with all accompaniments included."
      />
    </main>
  );
}
