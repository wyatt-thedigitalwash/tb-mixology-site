import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import DrinkMenu from "@/components/DrinkMenu";
import MenuExamples from "@/components/MenuExamples";
import DrinkPhotos from "@/components/DrinkPhotos";
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Drinks & Menus | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Every TB Mixology event gets a fully custom cocktail menu built from scratch. Explore past menus and our batch cocktail flavor options.",
  openGraph: {
    title: "Drinks & Menus | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Every TB Mixology event gets a fully custom cocktail menu built from scratch. Explore past menus and our batch cocktail flavor options.",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drinks & Menus | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Every TB Mixology event gets a fully custom cocktail menu built from scratch. Explore past menus and our batch cocktail flavor options.",
  },
  alternates: {
    canonical: "https://tbmixology.com/drinks",
  },
};

export default function DrinksPage() {
  return (
    <main className="bg-secondary">
      {/* ── Intro (light) ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            as="h1"
            label="Bartending Services"
            title="Your Event, Your Menu"
          />
          <p className="font-body text-warm-gray text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center -mt-4">
            We don&rsquo;t work from a fixed list. Every bartending menu is designed from
            scratch &mdash; cocktails named after the people who matter, colors matched
            to your decor, flavors built around your theme. From elegant wedding receptions
            to wild costume parties, no two menus are the same.
          </p>
        </div>
      </section>

      {/* ── Gallery (dark) ── */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase font-body text-accent text-center mb-10">
              Menu Examples
            </p>
          </FadeIn>

          {/* Menu examples gallery */}
          <FadeIn delay="delay-100">
            <MenuExamples />
          </FadeIn>

          {/* Cocktail photos carousel */}
          <div className="mt-20">
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase font-body text-accent text-center mb-10">
                A Taste of What We&rsquo;ve Made
              </p>
            </FadeIn>
            <FadeIn delay="delay-100">
              <DrinkPhotos />
            </FadeIn>
          </div>

          <FadeIn delay="delay-200">
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-block bg-accent text-primary px-10 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-white hover:text-primary transition-colors duration-200 ease-out"
              >
                Let&rsquo;s Build Your Menu
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Batch Cocktail Flavors — REFERENCE SECTION ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Batch Cocktails"
              title="Batch Cocktail Menu"
              subtitle="Ordering batch cocktails? Here are your flavor options. These are our batch cocktail flavors — pre-mixed and delivered ready to pour. Many of these can also be incorporated into your bartending service menu."
            />
          </FadeIn>
          <DrinkMenu />
          <FadeIn>
            <div className="text-center mt-10">
              <Link
                href="/services/batched"
                className="font-body text-sm text-primary hover:text-accent transition-colors duration-200 ease-out tracking-wide"
              >
                Learn More About Batch Cocktails &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-4 leading-tight">
              Ready to Build Your Menu?
            </h2>
            <p className="font-accent text-lg md:text-xl text-white/70 mb-10">
              Let&rsquo;s create something unforgettable for your event.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-12 py-5 text-sm tracking-[0.2em] uppercase font-body font-medium rounded-sm hover:bg-white hover:text-primary transition-colors duration-300 ease-out"
            >
              Tell Us About Your Event
            </Link>
          </FadeIn>
        </div>
      </section>

      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Drinks", href: "/drinks" }]} />
    </main>
  );
}
