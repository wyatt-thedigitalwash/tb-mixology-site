export const categories = [
  "All",
  "Weddings",
  "Corporate",
  "Private Parties",
  "Brand Collaborations",
] as const;

export type Category = (typeof categories)[number];

export interface EventImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface EventData {
  title: string;
  category: Exclude<Category, "All">;
  images: EventImage[];
}

export const events: EventData[] = [
  {
    title: "Rooftop Cocktail Party",
    category: "Private Parties",
    images: [
      { src: "/images/cocktails-highrise-marina-ocean-view-md.webp", alt: "Cocktails with marina and ocean view from a high-rise rooftop", width: 800, height: 533 },
      { src: "/images/guests-cocktails-ocean-view-rooftop-md.webp", alt: "Guests enjoying cocktails at an oceanview rooftop party", width: 800, height: 533 },
      { src: "/images/cocktail-cheers-closeup-ocean-backdrop-md.webp", alt: "Cocktail cheers closeup with ocean backdrop", width: 800, height: 533 },
      { src: "/images/craft-cocktails-trio-closeup-party-md.webp", alt: "Three handcrafted cocktails held up at a rooftop party", width: 800, height: 533 },
    ],
  },
  {
    title: "Halloween Soir\u00e9e",
    category: "Private Parties",
    images: [
      { src: "/images/halloween-themed-red-martini-skull-decor-md.webp", alt: "Halloween-themed red martini with dry ice smoke and skull decor", width: 800, height: 533 },
      { src: "/images/halloween-layered-purple-martini-pour-md.webp", alt: "Layered purple martini being poured at a Halloween party", width: 800, height: 533 },
      { src: "/images/halloween-group-cocktail-party-night-md.webp", alt: "Large group at a Halloween cocktail party at night", width: 800, height: 533 },
      { src: "/images/pirate-theme-cocktail-menu-display-md.webp", alt: "Pirate skeleton holding a themed cocktail menu", width: 451, height: 800 },
    ],
  },
  {
    title: "Corporate Holiday Party",
    category: "Corporate",
    images: [
      { src: "/images/friends-cheers-cocktails-upscale-venue-md.webp", alt: "Friends cheersing cocktails at an upscale venue", width: 800, height: 533 },
      { src: "/images/espresso-martinis-pair-bar-ambiance-md.webp", alt: "Two espresso martinis on a bar with warm ambient lighting", width: 800, height: 533 },
      { src: "/images/holiday-cocktails-rosemary-espresso-martini-md.webp", alt: "Holiday cocktails with rosemary and espresso martini", width: 800, height: 533 },
      { src: "/images/gentlemen-cheers-cocktails-beer-formal-md.webp", alt: "Gentlemen in suits cheersing cocktails and beer at a formal event", width: 533, height: 800 },
    ],
  },
  {
    title: "Wedding Reception",
    category: "Weddings",
    images: [
      { src: "/images/wedding-party-toast-formal-reception-md.webp", alt: "Wedding party raising drinks in a formal toast at the reception", width: 800, height: 533 },
      { src: "/images/bride-wedding-reception-dance-floor-md.webp", alt: "Bride at wedding reception dance floor", width: 800, height: 533 },
      { src: "/images/old-fashioned-berry-cocktail-fireside-md.webp", alt: "Old fashioned and berry cocktail by the fireside", width: 800, height: 533 },
      { src: "/images/martini-glasses-event-setup-red-tablecloth-md.webp", alt: "Rows of martini glasses ready for a wedding event", width: 533, height: 800 },
    ],
  },
  {
    title: "Bachelorette Party",
    category: "Private Parties",
    images: [
      { src: "/images/girlfriends-cheers-evening-patio-party-md.webp", alt: "Girlfriends cheersing cocktails at an evening patio party", width: 800, height: 533 },
      { src: "/images/strawberry-margaritas-tajin-rim-closeup-md.webp", alt: "Strawberry margaritas with Tajín rim closeup", width: 800, height: 533 },
      { src: "/images/friends-laughing-cheers-cocktails-night-md.webp", alt: "Friends laughing and cheersing cocktails at night", width: 800, height: 533 },
    ],
  },
  {
    title: "Kawha Coffee Collaboration",
    category: "Brand Collaborations",
    images: [
      { src: "/images/cocktail-class-setup-kahwa-bar-station-md.webp", alt: "Cocktail class setup at Kawha coffee shop bar station", width: 800, height: 533 },
      { src: "/images/bartenders-cheers-colorful-cocktail-lineup-md.webp", alt: "Bartenders cheersing with a colorful cocktail lineup", width: 800, height: 533 },
      { src: "/images/pink-cocktail-lineup-lime-garnish-bar-md.webp", alt: "Pink cocktail lineup with lime garnishes on the bar", width: 800, height: 533 },
    ],
  },
  {
    title: "Costume Party",
    category: "Private Parties",
    images: [
      { src: "/images/costume-party-guests-craft-cocktails-md.webp", alt: "Guests in costume holding craft cocktails at a themed party", width: 800, height: 533 },
      { src: "/images/green-cocktail-spiral-garnish-closeup-md.webp", alt: "Green cocktail with spiral garnish closeup", width: 800, height: 533 },
      { src: "/images/spicy-paloma-tajin-rim-closeup-md.webp", alt: "Spicy paloma cocktail with Tajín rim", width: 451, height: 800 },
    ],
  },
];
