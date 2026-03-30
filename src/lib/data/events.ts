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
  orientation: "landscape" | "portrait";
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
      { src: "/images/cocktails-highrise-marina-ocean-view.webp", alt: "Cocktails with marina and ocean view from a high-rise rooftop", width: 1200, height: 800, orientation: "landscape" },
      { src: "/images/guests-cocktails-ocean-view-rooftop.webp", alt: "Guests enjoying cocktails at an oceanview rooftop party", width: 1200, height: 800, orientation: "landscape" },
      { src: "/images/cocktail-cheers-closeup-ocean-backdrop.webp", alt: "Cocktail cheers closeup with ocean backdrop", width: 1200, height: 800, orientation: "landscape" },
      { src: "/images/craft-cocktails-trio-closeup.webp", alt: "Three handcrafted cocktails held up at a rooftop party", width: 1200, height: 800, orientation: "landscape" },
    ],
  },
  {
    title: "Halloween Soirée",
    category: "Private Parties",
    images: [
      { src: "/images/halloween-red-martini-skull-decor.webp", alt: "Halloween-themed red martini with dry ice smoke and skull decor", width: 1200, height: 800, orientation: "landscape" },
      { src: "/images/halloween-layered-purple-martini-pour.webp", alt: "Layered purple martini being poured at a Halloween party", width: 1200, height: 800, orientation: "landscape" },
      { src: "/images/halloween-group-cocktail-party.webp", alt: "Large group at a Halloween cocktail party at night", width: 1200, height: 800, orientation: "landscape" },
      { src: "/images/pirate-skeleton-cocktail-menu-display.webp", alt: "Pirate skeleton holding a themed cocktail menu", width: 675, height: 1200, orientation: "portrait" },
    ],
  },
  {
    title: "Corporate Holiday Party",
    category: "Corporate",
    images: [
      { src: "/images/friends-cheers-cocktails-upscale-venue.webp", alt: "Friends cheersing cocktails at an upscale venue", width: 1200, height: 800, orientation: "landscape" },
      { src: "/images/espresso-martinis-pair-bar-ambiance.webp", alt: "Two espresso martinis on a bar with warm ambient lighting", width: 1920, height: 1280, orientation: "landscape" },
      { src: "/images/holiday-cocktails-rosemary-garnish.webp", alt: "Holiday cocktails with rosemary and espresso martini", width: 1200, height: 800, orientation: "landscape" },
      { src: "/images/gentlemen-cheers-cocktails-formal-event.webp", alt: "Gentlemen in suits cheersing cocktails and beer at a formal event", width: 900, height: 1200, orientation: "portrait" },
    ],
  },
  {
    title: "Wedding Reception",
    category: "Weddings",
    images: [
      { src: "/images/wedding-party-toast-formal-reception.webp", alt: "Wedding party raising drinks in a formal toast at the reception", width: 1200, height: 800, orientation: "landscape" },
      { src: "/images/bride-wedding-reception-dance-floor.webp", alt: "Bride at wedding reception dance floor", width: 800, height: 1200, orientation: "portrait" },
      { src: "/images/old-fashioned-berry-cocktail-fireside.webp", alt: "Old fashioned and berry cocktail by the fireside", width: 1200, height: 800, orientation: "landscape" },
      { src: "/images/martini-glasses-event-setup.webp", alt: "Rows of martini glasses ready for a wedding event", width: 800, height: 1200, orientation: "portrait" },
    ],
  },
  {
    title: "Bachelorette Party",
    category: "Private Parties",
    images: [
      { src: "/images/girlfriends-cheers-evening-patio-party.webp", alt: "Girlfriends cheersing cocktails at an evening patio party", width: 800, height: 1200, orientation: "portrait" },
      { src: "/images/strawberry-margaritas-tajin-rim.webp", alt: "Strawberry margaritas with Tajín rim closeup", width: 1200, height: 800, orientation: "landscape" },
      { src: "/images/friends-laughing-cheers-cocktails-night.webp", alt: "Friends laughing and cheersing cocktails at night", width: 1200, height: 800, orientation: "landscape" },
    ],
  },
  {
    title: "Kawha Coffee Collaboration",
    category: "Brand Collaborations",
    images: [
      { src: "/images/cocktail-class-setup-kahwa-station.webp", alt: "Cocktail class setup at Kawha coffee shop bar station", width: 1200, height: 800, orientation: "landscape" },
      { src: "/images/bartenders-cheers-colorful-cocktail-lineup.webp", alt: "Bartenders cheersing with a colorful cocktail lineup", width: 1200, height: 800, orientation: "landscape" },
      { src: "/images/pink-cocktail-lineup-lime-garnish.webp", alt: "Pink cocktail lineup with lime garnishes on the bar", width: 1200, height: 800, orientation: "landscape" },
    ],
  },
  {
    title: "Costume Party",
    category: "Private Parties",
    images: [
      { src: "/images/costume-party-guests-craft-cocktails.webp", alt: "Guests in costume holding craft cocktails at a themed party", width: 1200, height: 800, orientation: "landscape" },
      { src: "/images/green-cocktail-spiral-garnish.webp", alt: "Green cocktail with spiral garnish closeup", width: 800, height: 1200, orientation: "portrait" },
      { src: "/images/spicy-paloma-tajin-rim-closeup.webp", alt: "Spicy paloma cocktail with Tajín rim", width: 675, height: 1200, orientation: "portrait" },
    ],
  },
];
