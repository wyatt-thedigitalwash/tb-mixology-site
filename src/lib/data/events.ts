export const categories = [
  "All",
  "Weddings",
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
  | "wedding"
  | "christmas"
  | "birthday"
  | "grand-prix"
  | "gasparilla"
  | "halloween"
  | "rays"
  | "mocktail"
  | "kawha"
  | "med-spa"
  | "three-equal"
  | "three-portrait"
  | "portrait-left-2";

export interface EventData {
  title: string;
  category: Exclude<Category, "All">;
  layout: EventLayout;
  images: EventImage[];
}

export const events: EventData[] = [
  {
    title: "Wedding Reception",
    category: "Weddings",
    layout: "wedding",
    images: [
      // Row 1: four portraits
      { src: "/images/bride-wedding-reception-dance-floor.webp", alt: "Bride at wedding reception dance floor", width: 930, height: 1396 },
      { src: "/images/girlfriends-cheers-evening-patio-party.webp", alt: "Girlfriends cheersing cocktails at an evening wedding patio party", width: 913, height: 1369 },
      { src: "/images/events/wedding/wedding-guests-fist-bump-string-lights.webp", alt: "Wedding guests posing with fist bump under string lights", width: 800, height: 1200 },
      { src: "/images/events/wedding/wedding-bride-groom-dance-floor-laughing.webp", alt: "Bride and groom laughing on the dance floor at wedding reception", width: 800, height: 1200 },
      // Row 2: two bar landscapes
      { src: "/images/events/wedding/wedding-bar-cocktail-menu-orchid-display.webp", alt: "Wedding bar with cocktail menu display and orchid arrangement", width: 1200, height: 800 },
      { src: "/images/events/wedding/wedding-mobile-bar-setup-floral-arrangement.webp", alt: "Wedding mobile bar setup with floral arrangement and cocktail shakers", width: 1200, height: 800 },
      // Row 3: toast (L) + bride-at-bar (L) + martini (P, same height)
      { src: "/images/wedding-party-toast-formal-reception.webp", alt: "Wedding party raising drinks in a formal toast at the reception", width: 1354, height: 902 },
      { src: "/images/events/wedding/wedding-bride-drinking-at-mobile-bar.webp", alt: "Bride drinking at the mobile bar during wedding reception", width: 1200, height: 800 },
      { src: "/images/martini-glasses-event-setup.webp", alt: "Rows of martini glasses ready for a wedding event", width: 734, height: 1101 },
    ],
  },
  {
    title: "Christmas Party",
    category: "Private Parties",
    layout: "christmas",
    images: [
      // Row 1: menu + sparkle guest + feather boa
      { src: "/images/events/christmas-party/sips-of-the-season-cocktail-menu.webp", alt: "Custom Sips of the Season cocktail menu with disco ball and Christmas decor", width: 1920, height: 1280 },
      { src: "/images/events/christmas-party/guest-holding-martini-sparkle-headband.webp", alt: "Guest in sparkle headband holding lemon drop martini at Christmas party", width: 1920, height: 1280 },
      { src: "/images/events/christmas-party/friends-cocktails-holiday-feather-boa.webp", alt: "Two friends posing with cranberry cocktails wearing holiday feather boa", width: 1616, height: 1080 },
      // Row 2: group toast + ice sphere crafting
      { src: "/images/events/christmas-party/christmas-group-toast-sparkly-dresses-night.webp", alt: "Group of friends toasting cocktails in sparkly dresses at Christmas party", width: 1200, height: 802 },
      { src: "/images/events/christmas-party/christmas-cranberry-cocktail-ice-sphere-crafting.webp", alt: "Bartender crafting cranberry cocktail with ice sphere garnish at Christmas party", width: 1200, height: 800 },
      // Row 3: smoked cranberry hero (9col) + ice sphere (P, 3col 2row)
      { src: "/images/events/christmas-party/smoked-cranberry-cocktails-rosemary.webp", alt: "Smoked cranberry cocktails with rosemary garnish at Christmas party", width: 1920, height: 1280 },
      { src: "/images/events/christmas-party/cranberry-rosemary-cocktail-ice-sphere.webp", alt: "Tall cocktail with ice sphere, cranberries, and rosemary sprig", width: 1280, height: 1920 },
      // Row 4: laughing cheers + fireside + bartender portrait
      { src: "/images/events/christmas-party/friends-laughing-cheers-cocktails-night.webp", alt: "Friends laughing and cheersing cocktails at Christmas party", width: 1396, height: 931 },
      { src: "/images/events/christmas-party/old-fashioned-berry-cocktail-fireside.webp", alt: "Old fashioned and berry cocktail by the fireside at Christmas party", width: 1682, height: 1121 },
      { src: "/images/events/christmas-party/bartender-holding-two-rosemary-cocktails.webp", alt: "Bartender holding two rosemary garnished cocktails at Christmas party", width: 1080, height: 1616 },
    ],
  },
  {
    title: "Birthday Party",
    category: "Private Parties",
    layout: "birthday",
    images: [
      // Row 1: friends cheers hero (L, 2col) + bartenders (L, 1col)
      { src: "/images/events/birthday-party/friends-cheers-cocktails-upscale-venue.webp", alt: "Friends cheersing cocktails at an upscale birthday venue", width: 1332, height: 888 },
      { src: "/images/events/birthday-party/bartenders-behind-bar-smiling.webp", alt: "Two bartenders smiling behind marble bar with cocktails at birthday party", width: 1920, height: 1280 },
      // Row 2: three equal
      { src: "/images/events/birthday-party/group-cheers-shots-behind-bar.webp", alt: "Group raising cocktails and shots for cheers behind bar at birthday party", width: 1920, height: 1280 },
      { src: "/images/events/birthday-party/charcuterie-spread-outdoor-night-party.webp", alt: "Elaborate charcuterie spread at outdoor birthday party with purple uplighting", width: 1920, height: 1280 },
      { src: "/images/events/birthday-party/guests-cheers-cocktails-rooftop-night.webp", alt: "Guests holding craft cocktails at upscale rooftop birthday party", width: 1920, height: 1280 },
    ],
  },
  {
    title: "Mocktail Events",
    category: "Private Parties",
    layout: "mocktail",
    images: [
      // Row 1: pink mural (P) | trio rustic (L, 2col) | purple industrial (P)
      { src: "/images/events/mocktail-events/mocktail-pink-drink-blue-mural-art-heals.webp", alt: "Pink mocktail held against blue geometric mural at Art Heals event", width: 800, height: 1200 },
      { src: "/images/events/mocktail-events/mocktail-trio-art-heals-rustic-industrial.webp", alt: "Three Art Heals mocktails with garnishes on rustic industrial backdrop", width: 1200, height: 800 },
      { src: "/images/events/mocktail-events/mocktail-purple-cup-art-heals-industrial.webp", alt: "Purple mocktail with Art Heals branding against industrial metal backdrop", width: 800, height: 1200 },
      // Row 2: garnished pair (L) | pink purple duo (P) | pineapple mural (P, existing)
      { src: "/images/events/mocktail-events/mocktail-purple-pineapple-garnished-pair.webp", alt: "Purple and pineapple garnished mocktail pair at Art Heals event", width: 1200, height: 800 },
      { src: "/images/events/mocktail-events/mocktail-pink-purple-duo-concrete-rustic.webp", alt: "Pink and purple mocktail duo on concrete with rustic metal backdrop", width: 800, height: 1200 },
      { src: "/images/pineapple-cocktail-art-heals-mural.webp", alt: "Pineapple mocktail held against colorful mural at Art Heals event", width: 800, height: 1200 },
      // Row 3: corporate trio (L) | group photo (P) | garnish station (~sq) | tropical trio (L)
      { src: "/images/events/mocktail-events/mocktail-trio-blue-green-lineup-corporate.webp", alt: "Three blue and green mocktails lined up at corporate event", width: 1200, height: 800 },
      { src: "/images/events/mocktail-events/mocktail-group-photo-dell-corporate-event.webp", alt: "Group of women holding colorful mocktails at Dell corporate event", width: 800, height: 1200 },
      { src: "/images/events/iconcierge-med-spa/med-spa-garnish-station-overhead-colorful.webp", alt: "Colorful garnish station overhead with edible flowers and dried citrus", width: 1200, height: 963 },
      { src: "/images/tropical-cocktails-trio-art-heals-event.webp", alt: "Trio of tropical purple and pink mocktails at Art Heals event", width: 1200, height: 800 },
    ],
  },
  {
    title: "Grand Prix",
    category: "Private Parties",
    layout: "grand-prix",
    images: [
      // Rows 1-2: couple penthouse (L) + couple dress (P, rows 1-2) + cheers closeup (L)
      { src: "/images/events/grand-prix/couple-cocktails-highrise-penthouse.webp", alt: "Couple posing with craft cocktails in highrise penthouse", width: 1920, height: 1280 },
      { src: "/images/events/grand-prix/couple-drinks-colorful-dress-penthouse.webp", alt: "Couple posing with drinks in colorful outfit at penthouse party", width: 1280, height: 1920 },
      { src: "/images/events/grand-prix/cocktails-cheers-closeup-ocean-view.webp", alt: "Closeup of friends cheersing cocktails with ocean view", width: 1920, height: 1280 },
      // Row 3: marina aerial hero (4col) + bartender pour (P, rows 3-4)
      { src: "/images/events/grand-prix/cocktails-cheers-marina-aerial-view.webp", alt: "Cocktails cheersing with aerial marina and Tampa Bay view", width: 1920, height: 1280 },
      { src: "/images/events/grand-prix/bartender-pouring-cocktail-skyline-view.webp", alt: "Bartender pouring cocktail with marina and skyline view", width: 1280, height: 1920 },
      // Row 4: racing outfits + balcony friends
      { src: "/images/events/grand-prix/friends-racing-outfits-cocktails-cheers.webp", alt: "Friends in Grand Prix racing themed outfits toasting cocktails", width: 1920, height: 1280 },
      { src: "/images/events/grand-prix/three-friends-cocktails-ocean-view-balcony.webp", alt: "Three friends holding cocktails on ocean view balcony", width: 1920, height: 1280 },
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
    title: "Halloween Soir\u00e9e",
    category: "Private Parties",
    layout: "halloween",
    images: [
      // Row 1: purple pour hero (L, full width)
      { src: "/images/halloween-layered-purple-martini-pour.webp", alt: "Layered purple martini being poured at a Halloween party", width: 1401, height: 934 },
      // Row 2: red martini + group photo
      { src: "/images/halloween-red-martini-skull-decor.webp", alt: "Halloween-themed red martini with dry ice smoke and skull decor", width: 1765, height: 1176 },
      { src: "/images/halloween-group-cocktail-party.webp", alt: "Large group at a Halloween cocktail party at night", width: 1280, height: 853 },
    ],
  },
  {
    title: "Tampa Bay Rays Team Event",
    category: "Cocktail Classes",
    layout: "rays",
    images: [
      // Row 1: instructor hero (L, 2col) + cocktails lineup hero (L, 2col)
      { src: "/images/events/rays-corporate/instructor-cheers-rays-logo-background.webp", alt: "TB Mixology instructor raising glass with Rays logo in background", width: 1920, height: 1280 },
      { src: "/images/events/rays-corporate/four-craft-cocktails-lineup-bar.webp", alt: "Four craft cocktails lined up at Rays corporate cocktail class", width: 1920, height: 1280 },
      // Row 2: bartenders cheers + team mixing + spritz cheers
      { src: "/images/events/rays-corporate/bartenders-cheers-hugo-spritz-margarita.webp", alt: "TB Mixology bartenders cheersing hugo spritz and margarita at Rays venue", width: 1920, height: 1280 },
      { src: "/images/events/rays-corporate/rays-team-mixing-cocktails-group.webp", alt: "Full Rays staff group mixing cocktails at team building event", width: 1920, height: 1280 },
      { src: "/images/events/rays-corporate/bartenders-drinking-hugo-spritz-cheers.webp", alt: "Two TB Mixology bartenders drinking hugo spritz cocktails at end of class", width: 1920, height: 1280 },
      // Row 3: two supporting
      { src: "/images/events/rays-corporate/rays-staff-pouring-jigger-cocktail.webp", alt: "Rays staff member pouring from jigger into shaker at cocktail class", width: 1920, height: 1280 },
      { src: "/images/events/rays-corporate/two-women-pouring-cocktails-rays.webp", alt: "Two women pouring cocktails together at Rays cocktail class", width: 1920, height: 1280 },
    ],
  },
  {
    title: "Kawha Coffee Collaboration",
    category: "Cocktail Classes",
    layout: "kawha",
    images: [
      // Row 1: espresso cheers hero (L, full width)
      { src: "/images/events/kawha-collaboration/group-cheers-espresso-martinis-kawha.webp", alt: "Group raising espresso martinis for cheers at Kawha cocktail class", width: 1920, height: 1280 },
      // Row 2: setup + group photo
      { src: "/images/events/kawha-collaboration/kawha-roastery-cocktail-class-setup.webp", alt: "Cocktail class bar setup at Kawha Coffee Roastery", width: 1920, height: 1280 },
      { src: "/images/events/kawha-collaboration/kawha-cocktail-class-group-photo.webp", alt: "Group of women at Kawha coffee roastery cocktail class", width: 1920, height: 1280 },
    ],
  },
  {
    title: "iConcierge Med Spa Grand Reopening",
    category: "Brand Collaborations",
    layout: "med-spa",
    images: [
      // Row 1: caviar prep (P) | caviar guest (L) | champagne server (P)
      { src: "/images/events/iconcierge-med-spa/med-spa-caviar-prep-tent-event.webp", alt: "TB Mixology team member preparing caviar bites under tent at med spa event", width: 800, height: 1200 },
      { src: "/images/events/iconcierge-med-spa/med-spa-caviar-service-guest-closeup.webp", alt: "Caviar service closeup with guest at med spa grand reopening event", width: 1200, height: 800 },
      { src: "/images/events/iconcierge-med-spa/med-spa-server-champagne-tray-tent.webp", alt: "Server carrying gold tray of champagne flutes at med spa grand reopening", width: 800, height: 1200 },
      // Row 2: water dispensers (P) | bartender shaking (L)
      { src: "/images/events/iconcierge-med-spa/med-spa-infused-water-dispensers-bar-cart.webp", alt: "Infused water dispensers on mobile bar cart at med spa grand reopening", width: 800, height: 1200 },
      { src: "/images/events/iconcierge-med-spa/med-spa-bartender-shaking-cocktail-mobile-cart.webp", alt: "TB Mixology bartender shaking cocktail at mobile bar cart during med spa grand reopening", width: 1200, height: 800 },
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
  { src: "/menu-examples/cocktail-menu-campfire-autumn-leaves.webp", alt: "Campfire and cocktails autumn menu with copper leaf illustrations", width: 928, height: 1200 },
  { src: "/menu-examples/cocktail-menu-personalized-party-casual.webp", alt: "Personalized party drink menu with watermark cocktail glass illustrations", width: 728, height: 1200 },
  { src: "/menu-examples/cocktail-menu-rattan-floral-elegant.webp", alt: "Elegant cocktail menu with rattan border and floral illustration", width: 928, height: 1200 },
  { src: "/menu-examples/cocktail-menu-christmas-holly-spritz.webp", alt: "Christmas cocktail menu with holly branches and red bow", width: 927, height: 1200 },
  { src: "/menu-examples/cocktail-menu-christmas-greenery-festive.webp", alt: "Festive Christmas cocktail menu with watercolor greenery and berries", width: 928, height: 1200 },
  { src: "/menu-examples/cocktail-menu-pickleball-tournament-green.webp", alt: "Pickleball tournament themed cocktail menu with green background", width: 675, height: 1200 },
  { src: "/menu-examples/cocktail-menu-gold-arch-art-deco.webp", alt: "Art deco cocktail menu with gold arch and geometric accents", width: 927, height: 1200 },
  { src: "/menu-examples/cocktail-menu-grand-prix-racing-retro.webp", alt: "Grand Prix racing themed cocktail menu with checkered flag", width: 927, height: 1200 },
  { src: "/menu-examples/cocktail-menu-japanese-minimalist-red.webp", alt: "Japanese inspired minimalist cocktail menu with bold red typography", width: 900, height: 1200 },
  { src: "/menu-examples/cocktail-menu-wellness-retro-red.webp", alt: "Wellness themed retro cocktail menu with red illustrations", width: 927, height: 1200 },
  { src: "/menu-examples/cocktail-menu-corporate-tech-mocktail.webp", alt: "Corporate tech mocktail menu with blue hexagonal graphics", width: 900, height: 1200 },
  { src: "/menu-examples/cocktail-menu-christmas-candy-cane-border.webp", alt: "Christmas cocktail menu with candy cane striped border", width: 927, height: 1200 },
  { src: "/menu-examples/cocktail-menu-sports-illustrated-monochrome.webp", alt: "Sports themed cocktail menu with hand-drawn monochrome illustrations", width: 927, height: 1200 },
];

export const cocktailPhotos = [
  { src: "/images/craft-cocktails-trio-closeup.webp", alt: "Three handcrafted cocktails at a party", width: 2099, height: 1399 },
  { src: "/images/strawberry-margaritas-tajin-rim.webp", alt: "Strawberry margaritas with Tajín rim", width: 2301, height: 1534 },
  { src: "/images/old-fashioned-berry-cocktail-fireside.webp", alt: "Old fashioned and berry cocktail by the fireside", width: 1682, height: 1121 },
  { src: "/images/holiday-cocktails-rosemary-garnish.webp", alt: "Holiday cocktails with rosemary garnish", width: 1678, height: 1118 },
  { src: "/images/pink-cocktail-lineup-lime-garnish.webp", alt: "Pink cocktail lineup with lime garnishes", width: 1348, height: 898 },
  { src: "/images/green-cocktail-spiral-garnish.webp", alt: "Green cocktail with spiral garnish", width: 1078, height: 1617 },
  { src: "/images/bartenders-cheers-colorful-cocktail-lineup.webp", alt: "Bartenders cheersing with a colorful cocktail lineup", width: 1487, height: 991 },
  { src: "/images/cocktail-cheers-closeup-ocean-backdrop.webp", alt: "Cocktail cheers with ocean backdrop", width: 1704, height: 1136 },
  { src: "/images/events/christmas-party/cranberry-rosemary-cocktail-ice-sphere.webp", alt: "Cranberry rosemary cocktail with ice sphere", width: 1600, height: 1600 },
  { src: "/images/events/christmas-party/lemon-drop-martini-bar-closeup.webp", alt: "Lemon drop martini closeup at the bar", width: 1600, height: 1600 },
  { src: "/images/halloween-red-martini-skull-decor.webp", alt: "Halloween red martini with skull decor", width: 1600, height: 1600 },
  { src: "/images/pineapple-cocktail-art-heals-mural.webp", alt: "Pineapple cocktail held against colorful mural at Art Heals event", width: 800, height: 1200 },
  { src: "/images/red-martini-dry-ice-halloween-decor.webp", alt: "Red martini with dry ice smoke and Halloween skull decor", width: 1200, height: 800 },
  { src: "/images/three-cocktails-cheers-overhead.webp", alt: "Three cocktails held together in a cheers from overhead", width: 900, height: 1200 },
  { src: "/images/cranberry-rosemary-highball-bar-setup.webp", alt: "Cranberry rosemary highball with mini bottle at bar setup", width: 1200, height: 800 },
  { src: "/images/tropical-cocktails-trio-art-heals-event.webp", alt: "Trio of tropical purple and pink cocktails at Art Heals event", width: 1200, height: 800 },
  { src: "/images/berry-cocktail-espresso-martini-cheers.webp", alt: "Berry cocktail and espresso martini cheers at night event", width: 1200, height: 800 },
  { src: "/images/rosemary-cranberry-sparkling-highball.webp", alt: "Sparkling rosemary and cranberry highball cocktail", width: 800, height: 1200 },
  { src: "/images/formal-event-cocktails-cheers-suits.webp", alt: "Formal event cocktails cheers with guests in suits", width: 900, height: 1200 },
  { src: "/images/events/mocktail-events/mocktail-pink-drink-blue-mural-art-heals.webp", alt: "Pink mocktail held against blue geometric mural at Art Heals event", width: 800, height: 1200 },
  { src: "/images/events/mocktail-events/mocktail-trio-art-heals-rustic-industrial.webp", alt: "Three Art Heals mocktails with garnishes on rustic industrial backdrop", width: 1200, height: 800 },
  { src: "/images/events/mocktail-events/mocktail-purple-pineapple-garnished-pair.webp", alt: "Purple and pineapple garnished mocktail pair at Art Heals event", width: 1200, height: 800 },
  { src: "/images/events/mocktail-events/mocktail-trio-blue-green-lineup-corporate.webp", alt: "Three blue and green mocktails lined up at corporate event", width: 1200, height: 800 },
  { src: "/images/events/mocktail-events/mocktail-pink-purple-duo-concrete-rustic.webp", alt: "Pink and purple mocktail duo on concrete with rustic metal backdrop", width: 800, height: 1200 },
];
