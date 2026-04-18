const siteUrl = "https://tb-mixology-site.vercel.app";

const localBusiness = {
  "@type": "EventPlanningService",
  "@id": `${siteUrl}/#business`,
  name: "TB Mixology",
  description:
    "Woman-owned mobile bartending company based in St. Petersburg, FL. Custom cocktails, private event bartending, cocktail classes, and batch cocktails serving Tampa Bay.",
  url: siteUrl,
  telephone: "(614) 634-1126",
  email: "emma@tbmixology.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "St. Petersburg",
    addressRegion: "FL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.7676,
    longitude: -82.6403,
  },
  areaServed: [
    { "@type": "City", name: "St. Petersburg" },
    { "@type": "City", name: "Tampa" },
    { "@type": "City", name: "Clearwater" },
    { "@type": "City", name: "Sarasota" },
  ],
  priceRange: "$$",
  image: `${siteUrl}/og-image.png`,
  sameAs: [
    "https://www.instagram.com/tbmixology/",
    "https://www.facebook.com/p/TB-Mixology-100093284260144/",
    "https://www.tiktok.com/@tbmixology",
  ],
};

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          ...localBusiness,
        }),
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; href: string }[] }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
  );
}

export function ServiceJsonLd({ name, description }: { name: string; description: string }) {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "EventPlanningService",
      "@id": `${siteUrl}/#business`,
      name: "TB Mixology",
    },
    areaServed: {
      "@type": "Place",
      name: "Tampa Bay, FL",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
    />
  );
}
