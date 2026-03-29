"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Drink {
  name: string;
  base: string;
  flavors: string[];
}

interface BuildYourOwn {
  name: string;
  base: string;
  sections: { label: string; items: string[] }[];
  note: string;
}

const TABS = ["Vodka", "Tequila", "Gin", "Bourbon", "Build Your Own"] as const;
type Tab = (typeof TABS)[number];

const spiritDrinks: Record<Exclude<Tab, "Build Your Own">, Drink[]> = {
  Vodka: [
    {
      name: "Espresso Martini",
      base: "Vodka, Simple Syrup, Coffee Liqueur, Fresh Espresso",
      flavors: [
        "Classic", "Vanilla Bean", "Salted Caramel", "Hazelnut",
        "Toasted Marshmallow", "Mocha", "Coconut", "Almond", "Orange Cream",
        "Cherry Vanilla", "Chocolate Covered Strawberry", "Peanut Butter Cup",
        "Lavender Honey", "Cinnamon Dolce",
      ],
    },
    {
      name: "Moscow Mule",
      base: "Vodka, Fresh Lime Juice, Ginger Beer",
      flavors: [
        "Classic", "Blackberry", "Mango", "Pineapple", "Passionfruit",
        "Strawberry", "Raspberry", "Peach", "Cucumber Mint", "Watermelon",
        "Honey Pear", "Blueberry", "Guava", "Jalapeño", "Lavender",
      ],
    },
    {
      name: "Spritz",
      base: "Vodka, Juice, Sparkling Wine",
      flavors: [
        "Aperol Orange", "Peach Bellini", "Pineapple Coconut",
        "Strawberry Lemon", "Raspberry Lime", "Passionfruit", "Mango Citrus",
        "Pomegranate", "Blood Orange", "Grapefruit", "Hibiscus", "Guava",
        "Watermelon Mint",
      ],
    },
    {
      name: "Signature Martinis",
      base: "Vodka, Juice, Liqueur",
      flavors: [
        "Cosmopolitan", "Lemon Drop", "French Martini", "Key Lime Pie",
        "Pineapple", "Strawberry Shortcake", "Blueberry Lemon",
        "Orange Creamsicle", "Raspberry Vanilla", "Passionfruit", "Lychee",
        "Cucumber Melon",
      ],
    },
  ],
  Tequila: [
    {
      name: "Paloma",
      base: "Tequila, Grapefruit, Fresh Lime, Agave, Soda",
      flavors: [
        "Classic", "Jalapeño", "Blood Orange", "Mango", "Passionfruit",
        "Pineapple", "Guava", "Hibiscus", "Blackberry", "Watermelon",
        "Rosemary", "Cucumber", "Lavender Honey",
      ],
    },
    {
      name: "Margarita",
      base: "Tequila, Agave, Lime",
      flavors: [
        "Classic", "Strawberry", "Mango", "Passionfruit", "Pineapple",
        "Peach", "Raspberry", "Watermelon", "Guava", "Coconut",
        "Blood Orange", "Blackberry", "Cucumber", "Jalapeño",
        "Lavender Honey", "Blueberry", "Dragonfruit",
      ],
    },
    {
      name: "Tequila Sour",
      base: "Tequila, Lemon, Egg White, Simple",
      flavors: [
        "Blackberry", "Raspberry", "Peach", "Pineapple", "Lavender", "Honey",
        "Passionfruit", "Blood Orange", "Mango", "Vanilla", "Hibiscus",
      ],
    },
    {
      name: "Mexican Mule",
      base: "Tequila, Lime, Ginger Beer",
      flavors: [
        "Classic", "Blackberry", "Mango", "Pineapple", "Passionfruit",
        "Strawberry", "Raspberry", "Peach", "Cucumber Mint", "Watermelon",
        "Honey Pear", "Blueberry", "Guava", "Jalapeño", "Lavender",
      ],
    },
  ],
  Gin: [
    {
      name: "Gimlet",
      base: "Gin, Lime, Simple",
      flavors: [
        "Classic", "Cucumber", "Basil", "Rosemary Grapefruit",
        "Blackberry Vanilla", "Lavender", "Elderflower", "Passionfruit",
        "Pineapple", "Strawberry", "Watermelon",
      ],
    },
    {
      name: "Tom Collins",
      base: "Gin, Lemon, Honey Syrup, Soda",
      flavors: [
        "Classic", "Raspberry", "Strawberry", "Peach", "Blueberry",
        "Blackberry", "Mango", "Passionfruit", "Lavender", "Hibiscus",
        "Cucumber", "Blood Orange", "Grapefruit", "Guava",
      ],
    },
    {
      name: "French 75",
      base: "Gin, Fresh Lemon, Simple Syrup, Sparkling Wine",
      flavors: [
        "Classic", "Lavender", "Honey", "Elderflower", "Strawberry",
        "Raspberry", "Blackberry", "Blood Orange", "Grapefruit",
        "Passionfruit", "Mango", "Pineapple", "Guava", "Peach",
        "Pear Ginger", "Hibiscus", "Rose", "Cucumber Mint", "Pomegranate",
        "Lychee",
      ],
    },
  ],
  Bourbon: [
    {
      name: "Bourbon Smash",
      base: "Bourbon, Fruit Purée, Lemon, Soda",
      flavors: [
        "Blackberry", "Peach", "Strawberry", "Pineapple", "Mango",
        "Blueberry", "Raspberry", "Lemon Basil", "Watermelon Mint",
        "Blood Orange", "Honey Ginger", "Maple", "Fig",
      ],
    },
    {
      name: "Old Fashioned",
      base: "Bourbon, Simple Syrup, Bitters",
      flavors: [
        "Classic", "Orange", "Maple", "Honey", "Smoked", "Vanilla", "Fig",
        "Chocolate", "Coffee", "Cherry", "Peach", "Blackberry", "Coconut",
        "Spiced Honey", "Brown Sugar",
      ],
    },
    {
      name: "Whiskey Sour",
      base: "Bourbon, Lemon, Egg White, Simple",
      flavors: [
        "Blackberry", "Raspberry", "Peach", "Honey", "Lavender", "Pineapple",
        "Mango", "Blood Orange", "Cherry", "Vanilla", "Maple",
      ],
    },
  ],
};

const buildYourOwn: BuildYourOwn[] = [
  {
    name: "Mimosa Bar",
    base: "Sparkling Wine + Juices + Fresh Fruit Garnishes",
    sections: [
      {
        label: "Juice Options",
        items: [
          "Orange", "Blood Orange", "Pineapple", "Mango", "Guava",
          "Passionfruit", "Peach", "Strawberry", "Watermelon", "Grapefruit",
          "Pomegranate", "Cranberry", "Apple Cider", "Lemonade",
          "Raspberry Lemon", "Coconut Pineapple",
        ],
      },
      {
        label: "Fresh Fruit Garnishes",
        items: [
          "Strawberries", "Raspberries", "Blueberries", "Blackberries",
          "Orange Slices", "Blood Orange", "Pineapple", "Mango",
          "Peach Slices", "Pomegranate Seeds", "Kiwi", "Mint", "Rosemary",
          "Edible Flowers",
        ],
      },
    ],
    note: "Mimosa bar comes with 6 juices & 4 fresh fruit garnishes",
  },
  {
    name: "Bloody Mary Bar",
    base: "Vodka + House Bloody Mix + Garnish Options",
    sections: [
      {
        label: "Mix Options",
        items: ["Classic", "Spicy", "Extra Spicy"],
      },
      {
        label: "Garnish Bar",
        items: [
          "Celery", "Lemon & Lime Wedges", "Pickles", "Olives",
          "Blue Cheese Stuffed Olives", "Cocktail Onions", "Pepperoncini",
          "Jalapeños", "Cherry Tomatoes", "Bacon", "Salami", "Shrimp",
          "Cubed Cheese", "Fresh Herbs",
        ],
      },
      {
        label: "Rim Options",
        items: [
          "Classic Salt", "Tajín", "Spicy Salt", "Smoked Salt",
          "Everything Bagel Seasoning",
        ],
      },
    ],
    note: "Bloody Mary bar comes with 6 garnishes & 2 rims",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

function FlavorChip({ label }: { label: string }) {
  return (
    <span className="bg-primary/5 text-primary text-xs px-3 py-1 rounded-full">
      {label}
    </span>
  );
}

export default function DrinkMenu() {
  const [active, setActive] = useState<Tab>("Vodka");

  return (
    <div>
      {/* Tabs */}
      <div className="flex overflow-x-auto gap-6 border-b border-warm-gray/20 mb-12 -mx-6 px-6 scrollbar-hide">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`whitespace-nowrap pb-3 text-sm tracking-[0.1em] uppercase font-body transition-colors ${
              active === tab
                ? "border-b-2 border-accent text-primary"
                : "text-warm-gray hover:text-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Spirit tabs */}
      {active !== "Build Your Own" &&
        spiritDrinks[active].map((drink) => (
          <FadeIn key={drink.name}>
            <div className="border-b border-warm-gray/15 pb-6 mb-6 last:border-0">
              <h3 className="font-heading text-2xl text-primary mb-1">
                {drink.name}
              </h3>
              <p className="font-accent italic text-warm-gray mb-4">
                {drink.base}
              </p>
              <div className="flex flex-wrap gap-2">
                {drink.flavors.map((f) => (
                  <FlavorChip key={f} label={f} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}

      {/* Build Your Own tab */}
      {active === "Build Your Own" &&
        buildYourOwn.map((item) => (
          <FadeIn key={item.name}>
            <div className="border-b border-warm-gray/15 pb-6 mb-6 last:border-0">
              <h3 className="font-heading text-2xl text-primary mb-1">
                {item.name}
              </h3>
              <p className="font-accent italic text-warm-gray mb-4">
                {item.base}
              </p>

              {item.sections.map((section) => (
                <div key={section.label} className="mb-4">
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-warm-gray mb-2">
                    {section.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((i) => (
                      <FlavorChip key={i} label={i} />
                    ))}
                  </div>
                </div>
              ))}

              <p className="font-accent text-sm text-accent mt-2">
                {item.note}
              </p>
            </div>
          </FadeIn>
        ))}

      {/* Mocktail note */}
      <FadeIn>
        <div className="mt-12 text-center border border-warm-gray/20 rounded-sm p-8">
          <p className="font-heading text-lg text-primary mb-2">
            Mocktails Available
          </p>
          <p className="font-accent text-warm-gray">
            We always accommodate non-drinkers with crafted mocktail versions of
            any cocktail on our menu.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
