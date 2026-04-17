export const categories = [
  "All",
  "Weddings",
  "Corporate",
  "Private Parties",
  "Cocktail Classes",
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
  | "three-portrait"
  | "three-top-portrait-bottom"
  | "grid-2x2-plus-3";

export interface EventData {
  title: string;
  category: Exclude<Category, "All">;
  layout: EventLayout;
  images: EventImage[];
}

export const events: EventData[] = [
  {
    title: "Halloween Soir\u00e9e",
    category: "Private Parties",
    layout: "three-equal",
    images: [
      { src: "/images/halloween-red-martini-skull-decor.webp", alt: "Halloween-themed red martini with dry ice smoke and skull decor", width: 1765, height: 1176 },
      { src: "/images/halloween-layered-purple-martini-pour.webp", alt: "Layered purple martini being poured at a Halloween party", width: 1401, height: 934 },
      { src: "/images/halloween-group-cocktail-party.webp", alt: "Large group at a Halloween cocktail party at night", width: 1280, height: 853 },
    ],
  },
  {
    title: "Corporate Holiday Party",
    category: "Corporate",
    layout: "portrait-right-3",
    images: [
      { src: "/images/friends-cheers-cocktails-upscale-venue.webp", alt: "Friends cheersing cocktails at an upscale venue", width: 1332, height: 888 },
      { src: "/images/holiday-cocktails-rosemary-garnish.webp", alt: "Holiday cocktails with rosemary and espresso martini", width: 1678, height: 1118 },
      { src: "/images/gentlemen-cheers-cocktails-formal-event.webp", alt: "Gentlemen in suits cheersing cocktails and beer at a formal event", width: 1363, height: 1817 },
      { src: "/images/espresso-martinis-pair-bar-ambiance.webp", alt: "Two espresso martinis on a bar with warm ambient lighting", width: 2301, height: 1534 },
    ],
  },
  {
    title: "Wedding Reception",
    category: "Weddings",
    layout: "two-portrait-two-landscape",
    images: [
      { src: "/images/bride-wedding-reception-dance-floor.webp", alt: "Bride at wedding reception dance floor", width: 930, height: 1396 },
      { src: "/images/wedding-party-toast-formal-reception.webp", alt: "Wedding party raising drinks in a formal toast at the reception", width: 1354, height: 902 },
      { src: "/images/old-fashioned-berry-cocktail-fireside.webp", alt: "Old fashioned and berry cocktail by the fireside", width: 1682, height: 1121 },
      { src: "/images/martini-glasses-event-setup.webp", alt: "Rows of martini glasses ready for a wedding event", width: 734, height: 1101 },
    ],
  },
  {
    title: "Bachelorette Party",
    category: "Private Parties",
    layout: "portrait-left-2",
    images: [
      { src: "/images/girlfriends-cheers-evening-patio-party.webp", alt: "Girlfriends cheersing cocktails at an evening patio party", width: 913, height: 1369 },
      { src: "/images/strawberry-margaritas-tajin-rim.webp", alt: "Strawberry margaritas with Taj\u00edn rim closeup", width: 2301, height: 1534 },
      { src: "/images/friends-laughing-cheers-cocktails-night.webp", alt: "Friends laughing and cheersing cocktails at night", width: 1396, height: 931 },
    ],
  },
  {
    title: "Birthday Party",
    category: "Private Parties",
    layout: "grid-2x2",
    images: [
      { src: "/images/events/birthday-party/group-cheers-shots-behind-bar.webp", alt: "Group raising cocktails and shots for cheers behind bar at birthday party", width: 1920, height: 1280 },
      { src: "/images/events/birthday-party/charcuterie-spread-outdoor-night-party.webp", alt: "Elaborate charcuterie spread at outdoor birthday party with purple uplighting", width: 1920, height: 1280 },
      { src: "/images/events/birthday-party/guests-cheers-cocktails-rooftop-night.webp", alt: "Guests holding craft cocktails at upscale rooftop birthday party", width: 1920, height: 1280 },
      { src: "/images/events/birthday-party/bartenders-behind-bar-smiling.webp", alt: "Two bartenders smiling behind marble bar with cocktails at birthday party", width: 1920, height: 1280 },
    ],
  },
  {
    title: "Christmas Party",
    category: "Private Parties",
    layout: "portrait-left-3",
    images: [
      { src: "/images/events/christmas-party/cranberry-rosemary-cocktail-ice-sphere.webp", alt: "Tall cocktail with ice sphere, cranberries, and rosemary sprig", width: 1280, height: 1920 },
      { src: "/images/events/christmas-party/sips-of-the-season-cocktail-menu.webp", alt: "Custom Sips of the Season cocktail menu with disco ball and Christmas decor", width: 1920, height: 1280 },
      { src: "/images/events/christmas-party/smoked-cranberry-cocktails-rosemary.webp", alt: "Smoked cranberry cocktails with rosemary garnish at Christmas party", width: 1920, height: 1280 },
    ],
  },
  {
    title: "Gasparilla Party",
    category: "Private Parties",
    layout: "three-portrait",
    images: [
      { src: "/images/events/gasparilla/gasparilla-cocktail-lime-pirate-flags.webp", alt: "Lime cocktail with gold coins and pirate flags at Gasparilla party", width: 1080, height: 1920 },
      { src: "/images/events/gasparilla/guest-pirate-costume-cocktail-skeleton.webp", alt: "Guest in pirate outfit holding cocktail at Gasparilla party", width: 1080, height: 1920 },
      { src: "/images/events/gasparilla/paloma-tajin-rim-grapefruit-closeup.webp", alt: "Spicy paloma cocktail with tajin rim and grapefruit at Gasparilla party", width: 1080, height: 1920 },
    ],
  },
  {
    title: "Grand Prix",
    category: "Private Parties",
    layout: "grid-2x2-plus-3",
    images: [
      { src: "/images/events/grand-prix/cocktails-cheers-marina-aerial-view.webp", alt: "Cocktails cheersing with aerial marina and Tampa Bay view", width: 1920, height: 1280 },
      { src: "/images/events/grand-prix/friends-racing-outfits-cocktails-cheers.webp", alt: "Friends in Grand Prix racing themed outfits toasting cocktails", width: 1920, height: 1280 },
      { src: "/images/events/grand-prix/couple-cocktails-highrise-penthouse.webp", alt: "Couple posing with craft cocktails in highrise penthouse", width: 1920, height: 1280 },
      { src: "/images/events/grand-prix/three-friends-cocktails-ocean-view-balcony.webp", alt: "Three friends holding cocktails on ocean view balcony", width: 1920, height: 1280 },
      { src: "/images/events/grand-prix/cocktails-cheers-closeup-ocean-view.webp", alt: "Closeup of friends cheersing cocktails with ocean view", width: 1920, height: 1280 },
      { src: "/images/events/grand-prix/bartender-pouring-cocktail-skyline-view.webp", alt: "Bartender pouring cocktail with marina and skyline view", width: 1280, height: 1920 },
      { src: "/images/events/grand-prix/couple-drinks-colorful-dress-penthouse.webp", alt: "Couple posing with drinks in colorful outfit at penthouse party", width: 1280, height: 1920 },
    ],
  },
  {
    title: "Kawha Coffee Collaboration",
    category: "Cocktail Classes",
    layout: "three-equal",
    images: [
      { src: "/images/events/kawha-collaboration/kawha-roastery-cocktail-class-setup.webp", alt: "Cocktail class bar setup at Kawha Coffee Roastery", width: 1920, height: 1280 },
      { src: "/images/events/kawha-collaboration/kawha-cocktail-class-group-photo.webp", alt: "Group of women at Kawha coffee roastery cocktail class", width: 1920, height: 1280 },
      { src: "/images/events/kawha-collaboration/group-cheers-espresso-martinis-kawha.webp", alt: "Group raising espresso martinis for cheers at Kawha cocktail class", width: 1920, height: 1280 },
    ],
  },
  {
    title: "Tampa Bay Rays Team Event",
    category: "Cocktail Classes",
    layout: "grid-2x2",
    images: [
      { src: "/images/events/rays-corporate/instructor-cheers-rays-logo-background.webp", alt: "TB Mixology instructor raising glass with Rays logo in background", width: 1920, height: 1280 },
      { src: "/images/events/rays-corporate/rays-team-mixing-cocktails-group.webp", alt: "Full Rays staff group mixing cocktails at team building event", width: 1920, height: 1280 },
      { src: "/images/events/rays-corporate/four-craft-cocktails-lineup-bar.webp", alt: "Four craft cocktails lined up at Rays corporate cocktail class", width: 1920, height: 1280 },
      { src: "/images/events/rays-corporate/bartenders-cheers-hugo-spritz-margarita.webp", alt: "TB Mixology bartenders cheersing hugo spritz and margarita at Rays venue", width: 1920, height: 1280 },
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
