import type { Metadata } from "next";
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
    <main className="pt-28 pb-24">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase font-body mb-3 text-warm-gray">
              Cocktail Menu
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
              Our Drinks
            </h1>
            <p className="font-accent text-lg md:text-xl text-warm-gray max-w-2xl mx-auto">
              An extensive cocktail menu crafted with fresh ingredients,
              house-made syrups, and premium spirits — with dozens of flavor
              options for every palate.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tabbed Drink Menu */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <DrinkMenu />
        </div>
      </section>
    </main>
  );
}
