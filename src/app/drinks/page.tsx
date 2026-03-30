import type { Metadata } from "next";
import Link from "next/link";
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

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl text-secondary mb-4">
              Love What You See?
            </h2>
            <p className="font-body text-secondary/70 mb-8 max-w-xl mx-auto">
              Every cocktail menu is fully customized for your event. Tell us
              what you&apos;re looking for and we&apos;ll build something
              special.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-10 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
            >
              Tell Us About Your Event
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
