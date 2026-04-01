import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import DrinkMenu from "@/components/DrinkMenu";
import MenuExamples from "@/components/MenuExamples";

export const metadata: Metadata = {
  title: "Drinks & Menus | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Every TB Mixology event gets a fully custom cocktail menu built from scratch. Explore past menus and our batch cocktail flavor options.",
  openGraph: {
    title: "Drinks & Menus | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Every TB Mixology event gets a fully custom cocktail menu built from scratch. Explore past menus and our batch cocktail flavor options.",
  },
};

const cocktailPhotos = [
  { src: "/images/craft-cocktails-trio-closeup.webp", alt: "Three handcrafted cocktails at a party", w: 2099, h: 1399 },
  { src: "/images/strawberry-margaritas-tajin-rim.webp", alt: "Strawberry margaritas with Tajín rim", w: 2301, h: 1534 },
  { src: "/images/old-fashioned-berry-cocktail-fireside.webp", alt: "Old fashioned and berry cocktail by the fireside", w: 1682, h: 1121 },
  { src: "/images/holiday-cocktails-rosemary-garnish.webp", alt: "Holiday cocktails with rosemary garnish", w: 1678, h: 1118 },
  { src: "/images/pink-cocktail-lineup-lime-garnish.webp", alt: "Pink cocktail lineup with lime garnishes", w: 1348, h: 898 },
  { src: "/images/green-cocktail-spiral-garnish.webp", alt: "Green cocktail with spiral garnish", w: 1078, h: 1617 },
  { src: "/images/bartenders-cheers-colorful-cocktail-lineup.webp", alt: "Bartenders cheersing with a colorful cocktail lineup", w: 1487, h: 991 },
  { src: "/images/cocktail-cheers-closeup-ocean-backdrop.webp", alt: "Cocktail cheers with ocean backdrop", w: 1704, h: 1136 },
];

export default function DrinksPage() {
  return (
    <main className="bg-secondary">
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <SectionHeading
          label="Drinks & Menus"
          title="What We Pour"
          subtitle="Every event gets its own custom cocktail menu. From classic favorites to creative originals, we build drinks around your vibe, your guests, and your occasion."
        />
      </section>

      {/* ── Custom Bartending Menus — THE MAIN EVENT ── */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Bartending Services"
              title="Your Event, Your Menu"
              light
            />
            <p className="font-body text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center -mt-4 mb-16">
              We don&rsquo;t work from a fixed list. Every bartending menu is designed from
              scratch &mdash; cocktails named after the people who matter, colors matched
              to your decor, flavors built around your theme. From elegant wedding receptions
              to wild costume parties, no two menus are the same.
            </p>
          </FadeIn>

          {/* Menu examples gallery */}
          <FadeIn delay="delay-100">
            <MenuExamples />
          </FadeIn>

          {/* Cocktail photos grid */}
          <div className="mt-16">
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase font-body text-accent text-center mb-8">
                A Taste of What We&rsquo;ve Made
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {cocktailPhotos.map((img, i) => (
                <FadeIn key={img.src} delay={i % 4 === 1 ? "delay-100" : i % 4 === 2 ? "delay-200" : i % 4 === 3 ? "delay-300" : ""}>
                  <div className="overflow-hidden rounded-sm relative aspect-square">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.w}
                      height={img.h}
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
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
              subtitle="Ordering batch cocktails? Here are your flavor options. These are specifically for our batch cocktail service — pre-mixed and delivered ready to pour."
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
    </main>
  );
}
