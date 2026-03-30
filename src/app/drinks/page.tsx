import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
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
