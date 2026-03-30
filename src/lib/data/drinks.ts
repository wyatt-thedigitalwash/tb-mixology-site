export interface Drink {
  name: string;
  base: string;
  flavors: string[];
}

export interface BuildYourOwn {
  name: string;
  base: string;
  sections: { label: string; items: string[] }[];
  note: string;
}

export const TABS = ["Vodka", "Tequila", "Gin", "Bourbon", "Build Your Own"] as const;
export type Tab = (typeof TABS)[number];

export const spiritDrinks: Record<Exclude<Tab, "Build Your Own">, Drink[]> = {
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
        "Honey Pear", "Blueberry", "Guava", "Jalape\u00f1o", "Lavender",
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
        "Classic", "Jalape\u00f1o", "Blood Orange", "Mango", "Passionfruit",
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
        "Blood Orange", "Blackberry", "Cucumber", "Jalape\u00f1o",
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
        "Honey Pear", "Blueberry", "Guava", "Jalape\u00f1o", "Lavender",
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
      base: "Bourbon, Fruit Pur\u00e9e, Lemon, Soda",
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

export const buildYourOwn: BuildYourOwn[] = [
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
          "Jalape\u00f1os", "Cherry Tomatoes", "Bacon", "Salami", "Shrimp",
          "Cubed Cheese", "Fresh Herbs",
        ],
      },
      {
        label: "Rim Options",
        items: [
          "Classic Salt", "Taj\u00edn", "Spicy Salt", "Smoked Salt",
          "Everything Bagel Seasoning",
        ],
      },
    ],
    note: "Bloody Mary bar comes with 6 garnishes & 2 rims",
  },
];
