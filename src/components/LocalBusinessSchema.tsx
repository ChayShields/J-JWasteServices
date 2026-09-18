import { headers } from "next/headers";
import { business, services } from "@/lib/business";

export default async function LocalBusinessSchema() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.legalName,
    image: `${business.siteUrl}/logo.jpg`,
    url: business.siteUrl,
    telephone: business.phone,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      addressCountry: business.addressCountry,
    },
    areaServed: business.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: [business.social.facebook],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
