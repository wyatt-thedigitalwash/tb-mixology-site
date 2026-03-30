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

export type EventLayout =
  | "grid-2x2"
  | "portrait-left-3"
  | "portrait-right-3"
  | "two-portrait-two-landscape"
  | "portrait-left-2"
  | "hero-top-2"
  | "landscape-top-2-portrait"
  | "three-equal"
  | "three-top-portrait-bottom";

export interface EventData {
  title: string;
  category: Exclude<Category, "All">;
  layout: EventLayout;
  images: EventImage[];
}

export const events: EventData[] = [
  {
    title: "Rooftop Cocktail Party",
    category: "Private Parties",
    layout: "grid-2x2",
    images: [
      { src: "/images/cocktails-highrise-marina-ocean-view.webp", alt: "Cocktails with marina and ocean view from a high-rise rooftop", width: 1200, height: 800 },
      { src: "/images/guests-cocktails-ocean-view-rooftop.webp", alt: "Guests enjoying cocktails at an oceanview rooftop party", width: 1200, height: 800 },
      { src: "/images/cocktail-cheers-closeup-ocean-backdrop.webp", alt: "Cocktail cheers closeup with ocean backdrop", width: 1200, height: 800 },
      { src: "/images/craft-cocktails-trio-closeup.webp", alt: "Three handcrafted cocktails held up at a rooftop party", width: 1200, height: 800 },
    ],
  },
  {
    title: "Halloween Soir\u00e9e",
    category: "Private Parties",
    layout: "three-top-portrait-bottom",
    images: [
      { src: "/images/halloween-red-martini-skull-decor.webp", alt: "Halloween-themed red martini with dry ice smoke and skull decor", width: 1200, height: 800 },
      { src: "/images/halloween-layered-purple-martini-pour.webp", alt: "Layered purple martini being poured at a Halloween party", width: 1200, height: 800 },
      { src: "/images/halloween-group-cocktail-party.webp", alt: "Large group at a Halloween cocktail party at night", width: 1200, height: 800 },
      { src: "/images/pirate-skeleton-cocktail-menu-display.webp", alt: "Pirate skeleton holding a themed cocktail menu", width: 675, height: 1200 },
    ],
  },
  {
    title: "Corporate Holiday Party",
    category: "Corporate",
    layout: "portrait-right-3",
    images: [
      { src: "/images/friends-cheers-cocktails-upscale-venue.webp", alt: "Friends cheersing cocktails at an upscale venue", width: 1200, height: 800 },
      { src: "/images/holiday-cocktails-rosemary-garnish.webp", alt: "Holiday cocktails with rosemary and espresso martini", width: 1200, height: 800 },
      { src: "/images/gentlemen-cheers-cocktails-formal-event.webp", alt: "Gentlemen in suits cheersing cocktails and beer at a formal event", width: 900, height: 1200 },
      { src: "/images/espresso-martinis-pair-bar-ambiance.webp", alt: "Two espresso martinis on a bar with warm ambient lighting", width: 1920, height: 1280 },
    ],
  },
  {
    title: "Wedding Reception",
    category: "Weddings",
    layout: "two-portrait-two-landscape",
    images: [
      { src: "/images/bride-wedding-reception-dance-floor.webp", alt: "Bride at wedding reception dance floor", width: 800, height: 1200 },
      { src: "/images/wedding-party-toast-formal-reception.webp", alt: "Wedding party raising drinks in a formal toast at the reception", width: 1200, height: 800 },
      { src: "/images/old-fashioned-berry-cocktail-fireside.webp", alt: "Old fashioned and berry cocktail by the fireside", width: 1200, height: 800 },
      { src: "/images/martini-glasses-event-setup.webp", alt: "Rows of martini glasses ready for a wedding event", width: 800, height: 1200 },
    ],
  },
  {
    title: "Bachelorette Party",
    category: "Private Parties",
    layout: "portrait-left-2",
    images: [
      { src: "/images/girlfriends-cheers-evening-patio-party.webp", alt: "Girlfriends cheersing cocktails at an evening patio party", width: 800, height: 1200 },
      { src: "/images/strawberry-margaritas-tajin-rim.webp", alt: "Strawberry margaritas with Taj\u00edn rim closeup", width: 1200, height: 800 },
      { src: "/images/friends-laughing-cheers-cocktails-night.webp", alt: "Friends laughing and cheersing cocktails at night", width: 1200, height: 800 },
    ],
  },
  {
    title: "Kawha Coffee Collaboration",
    category: "Brand Collaborations",
    layout: "three-equal",
    images: [
      { src: "/images/cocktail-class-setup-kahwa-station.webp", alt: "Cocktail class setup at Kawha coffee shop bar station", width: 1200, height: 800 },
      { src: "/images/bartenders-cheers-colorful-cocktail-lineup.webp", alt: "Bartenders cheersing with a colorful cocktail lineup", width: 1200, height: 800 },
      { src: "/images/pink-cocktail-lineup-lime-garnish.webp", alt: "Pink cocktail lineup with lime garnishes on the bar", width: 1200, height: 800 },
    ],
  },
  {
    title: "Costume Party",
    category: "Private Parties",
    layout: "three-equal",
    images: [
      { src: "/images/costume-party-guests-craft-cocktails.webp", alt: "Guests in costume holding craft cocktails at a themed party", width: 1200, height: 800 },
      { src: "/images/green-cocktail-spiral-garnish.webp", alt: "Green cocktail with spiral garnish closeup", width: 800, height: 1200 },
      { src: "/images/spicy-paloma-tajin-rim-closeup.webp", alt: "Spicy paloma cocktail with Taj\u00edn rim", width: 675, height: 1200 },
    ],
  },
];

export const menuExamples = [
  { src: "/menu-examples/cocktail-menu-minimal-elegant.webp", alt: "Minimal elegant black and white cocktail menu", width: 927, height: 1200 },
  { src: "/menu-examples/cocktail-menu-gold-frame-wedding.webp", alt: "Wedding-style cocktail menu with gold frame border", width: 927, height: 1200 },
  { src: "/menu-examples/cocktail-menu-autumn-leaves-rustic.webp", alt: "Autumn cocktail menu with oak leaf illustrations", width: 927, height: 1200 },
  { src: "/menu-examples/cocktail-menu-green-gold-formal.webp", alt: "Green and gold formal cocktail menu with ornate border", width: 800, height: 1200 },
  { src: "/menu-examples/cocktail-menu-halloween-spooky.webp", alt: "Halloween cocktail menu with spiderwebs on dark chalkboard", width: 857, height: 1200 },
  { src: "/menu-examples/cocktail-menu-holiday-berry-winter.webp", alt: "Holiday cocktail menu with red berry and evergreen border", width: 927, height: 1200 },
  { src: "/menu-examples/cocktail-menu-pirate-theme.webp", alt: "Pirate-themed cocktail menu on aged parchment", width: 857, height: 1200 },
  { src: "/menu-examples/custom-cocktail-menu-nautical-theme.webp", alt: "Nautical themed cocktail menu with ship wheel illustration", width: 927, height: 1200 },
];
