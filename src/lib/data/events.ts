export const categories = [
  "All",
  "Weddings",
  "Corporate",
  "Private Parties",
  "Brand Collaborations",
] as const;

export type Category = (typeof categories)[number];

export interface EventData {
  title: string;
  category: Exclude<Category, "All">;
  images: string[];
}

export const events: EventData[] = [
  {
    title: "Yacht Party",
    category: "Private Parties",
    images: [
      "Yacht party photo 1 \u2014 replace",
      "Yacht party photo 2 \u2014 replace",
      "Yacht party photo 3 \u2014 replace",
      "Yacht party photo 4 \u2014 replace",
    ],
  },
  {
    title: "Halloween Soir\u00e9e",
    category: "Private Parties",
    images: [
      "Halloween soir\u00e9e photo 1 \u2014 replace",
      "Halloween soir\u00e9e photo 2 \u2014 replace",
      "Halloween soir\u00e9e photo 3 \u2014 replace",
    ],
  },
  {
    title: "Corporate Event",
    category: "Corporate",
    images: [
      "Corporate event photo 1 \u2014 replace",
      "Corporate event photo 2 \u2014 replace",
      "Corporate event photo 3 \u2014 replace",
    ],
  },
  {
    title: "Wedding Reception",
    category: "Weddings",
    images: [
      "Wedding reception photo 1 \u2014 replace",
      "Wedding reception photo 2 \u2014 replace",
      "Wedding reception photo 3 \u2014 replace",
      "Wedding reception photo 4 \u2014 replace",
    ],
  },
  {
    title: "Bachelorette Party",
    category: "Private Parties",
    images: [
      "Bachelorette party photo 1 \u2014 replace",
      "Bachelorette party photo 2 \u2014 replace",
      "Bachelorette party photo 3 \u2014 replace",
    ],
  },
  {
    title: "Kawha Coffee Collaboration",
    category: "Brand Collaborations",
    images: [
      "Kawha Coffee collab photo 1 \u2014 replace",
      "Kawha Coffee collab photo 2 \u2014 replace",
      "Kawha Coffee collab photo 3 \u2014 replace",
    ],
  },
  {
    title: "Tampa Bay Rays Event",
    category: "Brand Collaborations",
    images: [
      "Tampa Bay Rays event photo 1 \u2014 replace",
      "Tampa Bay Rays event photo 2 \u2014 replace",
      "Tampa Bay Rays event photo 3 \u2014 replace",
    ],
  },
];
