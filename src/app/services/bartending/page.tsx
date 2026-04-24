import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import AddOnsGrid from "@/components/AddOnsGrid";
import { MessageSquare, BookOpen, User, Wrench, Leaf, Snowflake, FileText, GlassWater, Martini, Table } from "lucide-react";
import { LocalBusinessJsonLd, BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { packages, included } from "@/lib/data/bartending";

const includedIcons = [MessageSquare, BookOpen, User, Wrench, Leaf, Snowflake, FileText, GlassWater, Martini, Table];

export const metadata: Metadata = {
  title: "Bartending Services | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Professional mobile bartending for events of all sizes — custom cocktail menus, full bar setup, and seamless service. Serving Tampa, St. Pete, Clearwater, and Sarasota.",
  openGraph: {
    title: "Bartending Services | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Professional mobile bartending for events of all sizes — custom cocktail menus, full bar setup, and seamless service. Serving Tampa, St. Pete, Clearwater, and Sarasota.",
    images: [{ url: "/og-image.png" }],
  },
  alternates: {
    canonical: "https://tbmixology.com/services/bartending",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bartending Services | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Professional mobile bartending for events of all sizes — custom cocktail menus, full bar setup, and seamless service. Serving Tampa, St. Pete, Clearwater, and Sarasota.",
  },
};

export default function BartendingPage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <SectionHeading
          as="h1"
          label="Services"
          title="Bartending Services"
          subtitle="Professional mobile bartending tailored to your event, your style, and your guest count. Every detail handled with care."
        />
        <div className="text-center mt-8">
          <Link
            href="/contact?service=bartending"
            className="inline-block bg-accent text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
          >
            Book Your Bar
          </Link>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="The Experience"
              title="What&rsquo;s Included"
              subtitle="Every bartending package comes with everything you need for a seamless bar experience."
              light
            />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => {
              const Icon = includedIcons[i];
              return (
                <FadeIn key={item.title} delay={i % 3 === 1 ? "delay-100" : i % 3 === 2 ? "delay-200" : ""}>
                  <div className="border border-white/10 rounded-sm p-6 text-center hover:border-accent/30 transition-colors duration-200 ease-out">
                    <Icon size={28} className="text-accent mx-auto mb-4" strokeWidth={1.5} />
                    <h3 className="font-body text-sm font-semibold text-secondary mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Pricing"
              title="Packages by Guest Count"
            />
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {packages.map((pkg) => (
                <PricingCard
                  key={pkg.guests}
                  name={pkg.guests}
                  price={pkg.starting}
                  note={`${pkg.bartenders} · ${pkg.rate}`}
                />
              ))}
            </div>
            <p className="text-center text-warm-gray font-body text-xs mt-4">
              Based on a 4-hour event. Our pricing is built to ensure fast, seamless service.
            </p>
          </FadeIn>

          {/* Add-Ons & Extras */}
          <div className="mt-16">
            <FadeIn>
              <SectionHeading
                label="Extras"
                title="Add-Ons & Extras"
              />
            </FadeIn>
            <AddOnsGrid />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading label="Gallery" title="Our Bartenders in Action" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/images/bartender-shaking-cocktail-mobile-bar.webp", alt: "TB Mixology bartender shaking a cocktail at a mobile bar" },
              { src: "/images/events/grand-prix/bartender-pouring-cocktail-skyline-view.webp", alt: "Bartender pouring cocktail with marina and skyline view" },
              { src: "/images/bartender-pouring-cocktails-private-event.webp", alt: "Bartender pouring cocktails at a private event" },
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

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-4 leading-tight">
              Ready to Book Your Bar?
            </h2>
            <p className="font-body text-base text-white/70 mb-10">
              Tell us about your event and we&rsquo;ll recommend the perfect package.
            </p>
            <Link
              href="/contact?service=bartending"
              className="inline-block bg-accent text-primary px-12 py-5 text-sm tracking-[0.2em] uppercase font-body font-medium rounded-sm hover:bg-white hover:text-primary transition-colors duration-300 ease-out"
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
          { name: "Bartending Services", href: "/services/bartending" },
        ]}
      />
      <ServiceJsonLd
        name="Mobile Event Bartending"
        description="Professional mobile bartending with custom cocktail menus, full bar setup, and seamless service for events across Tampa Bay."
      />
    </main>
  );
}
