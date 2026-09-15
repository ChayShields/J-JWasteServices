export const business = {
  name: "J&J Waste Services",
  legalName: "J and J Waste Services",
  phone: "07378 404591",
  whatsapp: "https://wa.me/447378404591",
  siteUrl: "https://jjwasteservices.co.uk",
  addressLocality: "Lowestoft",
  addressRegion: "Suffolk",
  addressCountry: "GB",
  areaServed: ["Lowestoft", "Suffolk"],
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61568393073001",
  },
} as const;

export interface ServiceDefinition {
  slug: string;
  name: string;
  fromPrice: string;
  description: string;
  bullets: string[];
}

export const services: ServiceDefinition[] = [
  {
    slug: "wheelie-bin-emptying",
    name: "Wheelie Bin Emptying",
    fromPrice: "From £45",
    description:
      "Weekly, fortnightly or monthly wheelie bin collection for businesses and homes across Lowestoft.",
    bullets: [
      "Small businesses, cake sheds and pop-up shop owners",
      "Airbnbs and private housing",
      "Caravans",
      "From £45 for 240L bins",
    ],
  },
  {
    slug: "man-and-van",
    name: "Man + Van",
    fromPrice: "From £20",
    description:
      "Single item to multi-item collection, house clearances and shed clearances with removals.",
    bullets: [
      "Single item to multi-item collection — from £20",
      "House clearance — from £30",
      "Shed clearance + removals — from £120",
    ],
  },
  {
    slug: "general-waste-appliance-clearance",
    name: "General Waste / Appliance Clearance",
    fromPrice: "From £30",
    description:
      "Removal of general, mixed non-recyclable waste, from a single item to a full load, including appliances and rip-outs.",
    bullets: [
      "Fridges, freezers, chiller units, chest freezers and fridge freezers",
      "Kitchen and bathroom rip-outs",
      "Single item to a full van load",
      "Prices from £30",
    ],
  },
  {
    slug: "green-waste-collections",
    name: "Green Waste Collections",
    fromPrice: "From £25",
    description:
      "Collection of soil, brick rubble and concrete from gardens and small building jobs.",
    bullets: [
      "Soil",
      "Brick rubble",
      "Concrete",
      "Prices from £25",
    ],
  },
];

export const trustBadges = [
  { label: "Reliable Service" },
  { label: "Fully Licensed" },
  { label: "Affordable Prices" },
];
