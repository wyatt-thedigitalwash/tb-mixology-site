export const services = [
  {
    title: "Bartending Services",
    description:
      "Full-service bartending with custom cocktail menus, professional bartenders, and complete setup — tailored to your event and guest count.",
    href: "/services/bartending",
    imageLabel: "Photo — Event Bartending",
    imageSrc: "/images/bartender-shaking-cocktail-mobile-bar.webp",
    imageAlt: "TB Mixology bartender shaking a cocktail at a mobile bar",
  },
  {
    title: "Batch Cocktails",
    description:
      "Pre-mixed, ready-to-pour cocktails made with fresh, high-quality ingredients. Ideal for hosting with ease while still offering a polished, consistent drink experience.",
    href: "/services/batched",
    imageLabel: "Photo — Batched Cocktails",
    imageSrc: "/images/beverage-dispenser-station-fruit-garnishes.webp",
    imageAlt: "Beverage dispenser station with fresh fruit garnishes",
  },
  {
    title: "Cocktail Classes",
    description:
      "Interactive, hands-on cocktail classes in a guided social setting. Equal parts fun and elevated.",
    href: "/services/classes",
    imageLabel: "Photo — Cocktail Class",
    imageSrc: "/images/cocktail-class-group-espresso-martinis.webp",
    imageAlt: "Group at a cocktail class holding espresso martinis",
  },
];

export const addOnServices = [
  {
    title: "Caviar Service",
    description:
      "An all-inclusive, elevated tasting experience — available as an add-on to any service or as a standalone booking.",
    href: "/services/caviar",
    imageLabel: "Photo — Caviar Service",
    imageSrc: "/images/caviar-service/caviar-service-couple-tasting.webp",
    imageAlt: "Couple tasting caviar at a TB Mixology event",
  },
  {
    title: "Glassware Rental",
    description:
      "Trade the plastic for real glassware — coupes, rocks glasses, highballs, and more for your event.",
    href: "/services/glassware",
    imageLabel: "Photo — Glassware Rental",
    imageSrc: "/images/martini-glasses-event-setup.webp",
    imageAlt: "Rows of martini glasses set up for an event",
  },
];

export const barSetupAddOns = [
  { name: "Alcohol Purchase & Transport", price: "Cost + 10%" },
  { name: "Glassware Rental", price: "$3\u2013$5/pp" },
  { name: "Large Ice Cubes", price: "$50+" },
  { name: "Dry Ice", price: "$50+" },
  { name: "Water Station", price: "$1/pp" },
];

export const serviceEnhancements = [
  { name: "Additional Bartender", price: "$75/hr" },
  { name: "Bar Back", price: "$50/hr" },
  { name: "Custom Wooden Bar Rental", price: "$200+" },
];

export const experienceAddOns = [
  { name: "All-Inclusive Caviar Service", price: "$25\u2013$40/pp" },
  { name: "Smoker", price: "$25" },
  { name: "Drink Bubbler", price: "$35" },
  { name: "Citrus Branding", price: "$80+" },
  { name: "Champagne Toast", price: "Ask for pricing" },
];

export const mainAddOns = [
  { name: "Wooden Bar Rental", description: "A beautiful custom wooden bar to anchor your setup.", price: "$200+" },
  { name: "Caviar Service", description: "An all-inclusive, elevated tasting experience for your guests.", price: "$25\u2013$40/pp" },
  { name: "Champagne Toast", description: "A sparkling moment for your celebration.", price: "Ask for pricing" },
  { name: "Water Station", description: "Self-serve hydration station, especially great for outdoor events.", price: "$1/pp" },
  { name: "Additional Bartender", description: "Extra bartenders to keep the line moving at larger events.", price: "$75/hr" },
  { name: "Bar Back", description: "Extra hands to keep the bar running smoothly.", price: "$50/hr" },
  { name: "Alcohol Purchase & Transport", description: "We handle the shopping and transport so you don\u2019t have to.", price: "Cost + 10%" },
  { name: "Glassware Rental", description: "Real glassware \u2014 coupes, rocks glasses, highballs, and more.", price: "$3\u2013$5/pp" },
];

export const barExtras = [
  { name: "Smoker", description: "Dramatic smoked finishes for cocktails right at the bar.", price: "$25" },
  { name: "Drink Bubbler", description: "Add a fizzy, effervescent effect directly into your cocktails.", price: "$35" },
  { name: "Dry Ice", description: "Dramatic fog effect for cocktails and displays.", price: "$50+" },
  { name: "Large Ice Cubes", description: "Premium ice for cocktails that look and taste better.", price: "$50+" },
  { name: "Citrus Branding", description: "Custom names, logos, or messages seared into citrus garnishes.", price: "$80+" },
];

export const addOnOverviewItems = [...mainAddOns, ...barExtras];
