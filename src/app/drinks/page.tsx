import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import DrinkMenu from "@/components/DrinkMenu";

export const metadata: Metadata = {
  title: "Drinks & Flavors | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Explore our extensive cocktail menu featuring handcrafted drinks with fresh ingredients — from espresso martinis and margaritas to build-your-own mimosa and Bloody Mary bars.",
  openGraph: {
    title: "Drinks & Flavors | TB Mixology — Tampa Bay Event Bartending",
    description:
      "Explore our extensive cocktail menu featuring handcrafted drinks with fresh ingredients — from espresso martinis and margaritas to build-your-own mimosa and Bloody Mary bars.",
  },
};

export default function DrinksPage() {
  return (
    <main className="bg-secondary">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <SectionHeading
          label="Cocktail Menu"
          title="Our Drinks"
          subtitle="An extensive cocktail menu crafted with fresh ingredients, house-made syrups, and premium spirits — with dozens of flavor options for every palate."
        />
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
          >
            Tell Us About Your Event
          </Link>
        </div>
      </section>

      {/* Tabbed Drink Menu */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <DrinkMenu />
        </div>
      </section>

      {/* Drink Photos */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: "/images/craft-cocktails-trio-closeup.webp", alt: "Three handcrafted cocktails at a party", w: 1510, h: 1006 },
              { src: "/images/strawberry-margaritas-tajin-rim.webp", alt: "Strawberry margaritas with Tajín rim", w: 1915, h: 1276 },
              { src: "/images/old-fashioned-berry-cocktail-fireside.webp", alt: "Old fashioned and berry cocktail by the fireside", w: 1218, h: 812 },
              { src: "/images/cocktail-cheers-closeup-ocean-backdrop.webp", alt: "Cocktail cheers with ocean backdrop", w: 1291, h: 861 },
              { src: "/images/holiday-cocktails-rosemary-garnish.webp", alt: "Holiday cocktails with rosemary garnish", w: 1242, h: 828 },
              { src: "/images/pink-cocktail-lineup-lime-garnish.webp", alt: "Pink cocktail lineup with lime garnishes", w: 1032, h: 688 },
            ].map((img) => (
              <FadeIn key={img.src}>
                <div className="overflow-hidden rounded-sm relative aspect-[3/2]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.w}
                    height={img.h}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="w-full h-full object-cover"
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
              Love What You See?
            </h2>
            <p className="font-accent text-lg md:text-xl text-white/70 mb-10">
              Every menu is fully customized for your event.
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
