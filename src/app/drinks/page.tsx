import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import GoldDivider from "@/components/GoldDivider";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Drinks | TB Mixology — Tampa Bay Event Bartending",
  description:
    "Explore the kinds of handcrafted cocktails and mocktails TB Mixology creates — from garden-fresh spritzes to elevated classics and crowd-pleasing batches.",
};

interface Drink {
  name: string;
  note: string;
}

interface Category {
  name: string;
  description: string;
  accent: "terracotta" | "sage";
  drinks: Drink[];
}

const categories: Category[] = [
  {
    name: "Garden Fresh",
    description:
      "Light, bright, and herbaceous. Perfect for afternoon parties, bridal showers, and outdoor events.",
    accent: "sage",
    drinks: [
      { name: "Cucumber Elderflower Spritz", note: "Crisp, floral, effervescent" },
      { name: "Basil Lemon Smash", note: "Bright citrus with a fresh herb finish" },
      { name: "Watermelon Mint Cooler", note: "Sweet, refreshing, crowd-pleasing" },
      { name: "Honeydew Jalapeño Margarita", note: "Sweet heat with a tropical twist" },
    ],
  },
  {
    name: "Citrus & Sunshine",
    description:
      "Bold citrus flavors with a Florida-fresh feel. Great for beach events, casual celebrations, and brunches.",
    accent: "terracotta",
    drinks: [
      { name: "Tampa Sunrise", note: "Blood orange, prosecco, and a hint of ginger" },
      { name: "Grapefruit Paloma", note: "Tart and slightly smoky with a salted rim" },
      { name: "Lemon Drop Martini", note: "Classic, clean, always a hit" },
      { name: "Pineapple Rum Punch", note: "Tropical, fruity, made for a crowd" },
    ],
  },
  {
    name: "Elevated Classics",
    description:
      "Timeless cocktails made with premium ingredients and a thoughtful touch. Perfect for weddings, galas, and formal events.",
    accent: "sage",
    drinks: [
      { name: "Espresso Martini", note: "Rich, smooth, and dangerously good" },
      { name: "Classic Negroni", note: "Bitter, balanced, beautifully stirred" },
      { name: "French 75", note: "Champagne, gin, lemon — effortlessly elegant" },
      { name: "Whiskey Sour", note: "Perfectly balanced with a frothy egg-white top" },
    ],
  },
  {
    name: "Batch & Crowd Pleasers",
    description:
      "Built for volume without sacrificing quality. These are our go-to batched cocktails for larger events.",
    accent: "terracotta",
    drinks: [
      { name: "Signature Sangria", note: "Red or white, seasonal fruit, always a conversation starter" },
      { name: "Tropical Punch", note: "Rum-based, big batch, endlessly customizable" },
      { name: "Sparkling Rosé Lemonade", note: "Light, beautiful, and Instagram-ready" },
      { name: "Moscow Mule Bar", note: "Guests pour their own from a copper-accented station" },
    ],
  },
  {
    name: "Mocktail Menu",
    description:
      "Because everyone deserves a beautiful drink. Our mocktails are crafted with the same care as everything else.",
    accent: "sage",
    drinks: [
      { name: "Virgin Cucumber Spritz", note: "Spa-day in a glass" },
      { name: "Citrus Hibiscus Fizz", note: "Floral, tart, stunning color" },
      { name: "Pineapple Ginger Lemonade", note: "Tropical and refreshing" },
      { name: "Lavender Lemonade", note: "Delicate, fragrant, crowd favorite" },
    ],
  },
];

export default function DrinksPage() {
  return (
    <main className="pt-28 pb-20 md:pb-28">
      {/* Hero / Intro */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <SectionLabel>The Craft</SectionLabel>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-text mb-6">
              Drinks That Tell
              <br />
              <span className="text-terracotta">a Story</span>
            </h1>
            <p className="text-text-muted font-body text-lg max-w-2xl mx-auto">
              Every event gets a custom menu — here&apos;s a taste of what&apos;s possible.
              From refreshing citrus spritzes to rich smoky old fashioneds, we build menus
              around your vibe, your guests, and your occasion.
            </p>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* Drink Categories */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {categories.map((category, i) => (
            <FadeIn key={category.name} delay={i % 2 === 1 ? "delay-100" : ""}>
              <div
                className={`bg-surface rounded-lg p-8 md:p-10 border-l-4 ${
                  category.accent === "sage" ? "border-sage" : "border-terracotta"
                }`}
              >
                <h2
                  className={`font-heading text-3xl md:text-4xl mb-2 ${
                    category.accent === "sage" ? "text-text" : "text-text"
                  }`}
                >
                  {category.name}
                </h2>
                <p className="text-text-muted font-body text-sm italic mb-8">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                  {category.drinks.map((drink) => (
                    <div key={drink.name} className="flex items-baseline gap-3">
                      <span
                        className={`shrink-0 ${
                          category.accent === "sage" ? "text-sage" : "text-terracotta"
                        }`}
                      >
                        —
                      </span>
                      <div>
                        <span className="font-body font-medium text-text text-sm">
                          {drink.name}
                        </span>
                        <span className="text-text-muted font-body text-sm">
                          {" "}· {drink.note}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <GoldDivider />

      {/* Bottom CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <SectionLabel>Your Menu, Your Way</SectionLabel>
            <h2 className="font-heading text-3xl md:text-5xl text-text mb-4">
              Ready to Build Your Menu?
            </h2>
            <p className="text-text-muted font-body mb-8 max-w-lg mx-auto">
              Every menu is custom-built for your event. Tell us your vibe and
              we&apos;ll handle the rest.
            </p>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-block bg-terracotta text-bg px-10 py-4 text-sm tracking-[0.15em] uppercase font-body rounded-md hover:bg-hover transition-colors"
            >
              Start Planning
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
