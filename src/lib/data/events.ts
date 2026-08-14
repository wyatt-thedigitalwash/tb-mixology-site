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
  | "six-portrait"
  | "eight-portrait"
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
  {
    title: "Wedding Champagne Tower",
    category: "Weddings",
    layout: "eight-portrait",
    images: [
      { src: "/images/events/wedding-champagne-tower/wedding-couple-pouring-champagne-tower.webp", alt: "Bride and groom pouring champagne into a coupe tower at their wedding reception", width: 1024, height: 1365 },
      { src: "/images/events/wedding-champagne-tower/wedding-champagne-tower-pour-closeup.webp", alt: "Close-up of champagne being poured into the top coupe of a wedding champagne tower", width: 1024, height: 1365 },
      { src: "/images/events/wedding-champagne-tower/wedding-couple-champagne-tower-floral-arch.webp", alt: "Wedding couple pouring a champagne tower beside a white floral arch", width: 1024, height: 1366 },
      { src: "/images/events/wedding-champagne-tower/wedding-champagne-cascading-coupe-tower.webp", alt: "Champagne cascading down a stacked coupe tower at a wedding reception", width: 1024, height: 1536 },
      { src: "/images/events/wedding-champagne-tower/wedding-bride-groom-celebrating-champagne-coupes.webp", alt: "Bride and groom celebrating with champagne coupes at dusk", width: 1024, height: 1536 },
      { src: "/images/events/wedding-champagne-tower/wedding-completed-champagne-coupe-tower.webp", alt: "Completed champagne coupe tower at a wedding reception", width: 1024, height: 1365 },
      { src: "/images/events/wedding-champagne-tower/wedding-bride-hand-ring-champagne-coupe.webp", alt: "Bride's hand with wedding ring holding a fluted champagne coupe", width: 1024, height: 1366 },
      { src: "/images/events/wedding-champagne-tower/wedding-guest-drinking-champagne-bottle-reception.webp", alt: "Wedding guest in bow tie and suspenders drinking champagne at the reception", width: 1024, height: 1365 },
    ],
  },
  {
    title: "La Dolce Forty Birthday",
    category: "Private Parties",
    layout: "six-portrait",
    images: [
      { src: "/images/events/la-dolce-forty/la-dolce-forty-cocktail-menu-spritz-pair.webp", alt: "La Dolce Forty custom cocktail menu beside two spritzes at the bar", width: 1440, height: 1920 },
      { src: "/images/events/la-dolce-forty/la-dolce-forty-bartender-outdoor-bar-disco-ball.webp", alt: "TB Mixology bartender at a white outdoor bar under a disco ball and bougainvillea", width: 1125, height: 1500 },
      { src: "/images/events/la-dolce-forty/la-dolce-forty-edible-flower-cocktails-cheers.webp", alt: "Three cocktails topped with edible flowers held together over a green lawn", width: 1440, height: 1920 },
      { src: "/images/events/la-dolce-forty/la-dolce-forty-caviar-bump-service-guests.webp", alt: "TB Mixology staff serving caviar bumps to guests at a garden birthday party", width: 1440, height: 1920 },
      { src: "/images/events/la-dolce-forty/la-dolce-forty-saxophonist-disco-performer-party.webp", alt: "Saxophonist and mirrorball performer entertaining guests at a poolside birthday party", width: 959, height: 1278 },
      { src: "/images/events/la-dolce-forty/la-dolce-forty-guest-straw-hat-palm-trees.webp", alt: "Guest in a straw hat holding a cocktail among palm trees", width: 1125, height: 1500 },
    ],
  },
  {
    title: "Toast the Hostess",
    category: "Cocktail Classes",
    layout: "six-portrait",
    images: [
      { src: "/images/events/toast-the-hostess/toast-the-hostess-guests-crafting-cocktails-table.webp", alt: "Guests crafting strawberry cocktails together at a hosted cocktail class", width: 1440, height: 1920 },
      { src: "/images/events/toast-the-hostess/toast-the-hostess-pouring-prosecco-cocktail-class.webp", alt: "Host pouring prosecco into a coupe during a hosted cocktail class", width: 1440, height: 1920 },
      { src: "/images/events/toast-the-hostess/toast-the-hostess-cocktail-kit-menu-instructions.webp", alt: "Cocktail kit flat lay with recipe instruction cards, berries, and bar tools", width: 1440, height: 1920 },
      { src: "/images/events/toast-the-hostess/toast-the-hostess-summer-menu-citrus-bowl.webp", alt: "Summer cocktail menu card beside a bowl of lemons and limes", width: 1440, height: 1920 },
      { src: "/images/events/toast-the-hostess/toast-the-hostess-berry-cocktail-mint-lemon.webp", alt: "Red berry cocktail garnished with mint, lemon wheel, and cherry", width: 1440, height: 1920 },
      { src: "/images/events/toast-the-hostess/toast-the-hostess-blackberry-cocktail-dried-citrus.webp", alt: "Deep blackberry cocktail with dried citrus wheel and fresh mint", width: 1440, height: 1920 },
    ],
  },
  {
    title: "Smith & Associates — Summer Soirée",
    category: "Brand Collaborations",
    layout: "six-portrait",
    images: [
      { src: "/images/events/smith-associates-art-house/summer-soiree-balcony-bar-waterfront-view.webp", alt: "White mobile bar on a highrise balcony with poppies and a waterfront view", width: 1440, height: 1920 },
      { src: "/images/events/smith-associates-art-house/summer-soiree-menu-poppies-balcony.webp", alt: "Framed Summer Soirée cocktail menu with poppies and striped straws", width: 1080, height: 1920 },
      { src: "/images/events/smith-associates-art-house/summer-soiree-bartender-pouring-prosecco-skyline.webp", alt: "TB Mixology bartender pouring prosecco into a spritz above the Tampa skyline", width: 1080, height: 1920 },
      { src: "/images/events/smith-associates-art-house/summer-soiree-guest-ordering-at-mobile-bar.webp", alt: "Guest in a blue floral dress ordering at the white mobile bar", width: 1080, height: 1920 },
      { src: "/images/events/smith-associates-art-house/summer-soiree-sarti-rosa-strawberry-spritz.webp", alt: "Sarti Rosa strawberry spritz served in a wine glass on the bar mat", width: 1080, height: 1920 },
      { src: "/images/events/smith-associates-art-house/summer-soiree-sarti-aperol-bottles-citrus.webp", alt: "Sarti Rosa and Aperol bottles with lemons, mint, and grapefruit on the bar", width: 1440, height: 1920 },
    ],
  },
  {
    title: "Power Design Corporate Event",
    category: "Brand Collaborations",
    layout: "eight-portrait",
    images: [
      { src: "/images/events/power-design/power-design-corporate-event-bar-setup-space.webp", alt: "Corporate event space with black cocktail tables and full TB Mixology bar setup", width: 1440, height: 1920 },
      { src: "/images/events/power-design/power-design-the-bar-menu-signature-mocktail.webp", alt: "The Bar menu sign with a raspberry peach spritzer signature mocktail", width: 1440, height: 1920 },
      { src: "/images/events/power-design/power-design-employees-cheers-mocktails-office.webp", alt: "Three employees toasting mint-garnished mocktails at a corporate event", width: 1440, height: 1919 },
      { src: "/images/events/power-design/power-design-employees-smiling-craft-mocktails.webp", alt: "Two employees smiling with craft mocktails at a company event", width: 1440, height: 1920 },
      { src: "/images/events/power-design/power-design-guest-sipping-bulb-glass-cocktail.webp", alt: "Employee sipping a mocktail from a light-bulb glass at a corporate event", width: 1440, height: 1920 },
      { src: "/images/events/power-design/power-design-coworkers-enjoying-drinks-lounge.webp", alt: "Two coworkers enjoying drinks in the office lounge at a corporate event", width: 1440, height: 1920 },
      { src: "/images/events/power-design/power-design-team-group-photo-cocktails.webp", alt: "Four team members posing with cocktails at a Power Design company event", width: 982, height: 1310 },
      { src: "/images/events/power-design/power-design-sips-worth-sharing-sign-cocktail.webp", alt: "Sips Worth Sharing signage with fresh flowers and a violet cocktail", width: 1030, height: 1373 },
    ],
  },
  {
    title: "LoveShackFancy Tampa",
    category: "Brand Collaborations",
    layout: "three-portrait",
    images: [
      { src: "/images/events/loveshackfancy/loveshackfancy-guests-cocktail-tray-boutique.webp", alt: "Guests taking cocktails from a silver tray inside the LoveShackFancy boutique", width: 1080, height: 1920 },
      { src: "/images/events/loveshackfancy/loveshackfancy-malibu-pink-lemonade-cocktails.webp", alt: "Malibu Pink Lemonade cocktails garnished with dried flowers in branded cups", width: 1080, height: 1920 },
      { src: "/images/events/loveshackfancy/loveshackfancy-tampa-pink-cocktails-tray.webp", alt: "Overhead tray of pink cocktails with orange slices and a LoveShackFancy Tampa napkin", width: 1080, height: 1920 },
    ],
  },
  {
    title: "BODYROK Tampa Bay",
    category: "Brand Collaborations",
    layout: "three-portrait",
    images: [
      { src: "/images/events/bodyrok/bodyrok-guests-cheers-functional-mocktails.webp", alt: "Three guests toasting functional mocktails at the BODYROK studio bar", width: 1280, height: 1920 },
      { src: "/images/events/bodyrok/bodyrok-tb-mixology-branded-cocktail-cups.webp", alt: "Co-branded BODYROK Tampa Bay and TB Mixology cocktail cups held up close", width: 1280, height: 1920 },
      { src: "/images/events/bodyrok/bodyrok-fitness-class-group-workout.webp", alt: "Group fitness class at BODYROK Tampa Bay before the cocktail service", width: 1280, height: 1920 },
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
  { src: "/menu-examples/summer-soiree-cocktail-menu-yellow-stripe.webp", alt: "Summer Soirée cocktail menu with yellow stripes and a wavy border", width: 1484, height: 1920 },
  { src: "/menu-examples/la-dolce-forty-cocktail-menu-design.webp", alt: "La Dolce Forty pink striped birthday cocktail menu", width: 1484, height: 1920 },
  { src: "/menu-examples/le-bar-burgundy-cocktail-wine-beer-menu.webp", alt: "Le Bar burgundy striped menu with cocktail, wine, and beer sections", width: 1484, height: 1920 },
  { src: "/menu-examples/baby-shower-cocktail-menu-seashells-bows.webp", alt: "Baby shower cocktail menu with pastel seashells and bows", width: 1484, height: 1920 },
  { src: "/menu-examples/blacktop-surf-shop-cocktail-menu.webp", alt: "Blacktop Surf Shop cocktail menu with orange and pink stripes", width: 1484, height: 1920 },
  { src: "/menu-examples/tpa-lux-cocktail-menu-luxury-vehicles.webp", alt: "TPA LUX black cocktail menu with luxury vehicle sponsorship", width: 1484, height: 1920 },
  { src: "/menu-examples/patriotic-fourth-of-july-bar-menu.webp", alt: "Patriotic Fourth of July bar menu with firework illustration", width: 1358, height: 1920 },
  { src: "/menu-examples/soccer-watch-party-cocktail-menu.webp", alt: "Soccer watch party cocktail menu with stadium artwork and country flags", width: 1484, height: 1920 },
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
