export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://fairwoodenergy.com/#business",
        name: "Fairwood Solutions",
        legalName: "Fairwood Solutions Ltd",
        description:
          "Government-accredited EPC assessors providing fast, accurate Energy Performance Certificates for domestic and commercial properties across Wales and the South West. 24-hour turnaround.",
        url: "https://fairwoodenergy.com",
        telephone: "+441267241291",
        email: "info@fairwoodenergy.com",
        priceRange: "££",
        currenciesAccepted: "GBP",
        paymentAccepted: "Cash, Credit Card, Bank Transfer",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Heol Smyrna",
          addressLocality: "Llangain",
          addressRegion: "Carmarthenshire",
          postalCode: "SA33 5AD",
          addressCountry: "GB",
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: 51.8286825,
          longitude: -4.343122,
        },

        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
          },
        ],

        areaServed: [
          { "@type": "AdministrativeArea", name: "Carmarthenshire" },
          { "@type": "AdministrativeArea", name: "Pembrokeshire" },
          { "@type": "AdministrativeArea", name: "Ceredigion" },
          { "@type": "AdministrativeArea", name: "Swansea" },
          { "@type": "AdministrativeArea", name: "Neath Port Talbot" },
          { "@type": "AdministrativeArea", name: "Bridgend" },
          { "@type": "AdministrativeArea", name: "Powys" },
          { "@type": "AdministrativeArea", name: "Wales" },
          { "@type": "AdministrativeArea", name: "South West England" },
        ],

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "EPC Assessment Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Domestic EPC Certificate",
                description:
                  "Government-registered Energy Performance Certificate for residential properties. Required by law when selling or renting. 24-hour turnaround.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial EPC Certificate",
                description:
                  "Non-domestic Energy Performance Certificate for offices, retail, warehouses and all commercial property types. Display Energy Certificates also available.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SAP Calculation — New Build",
                description:
                  "Standard Assessment Procedure calculations for new builds and major renovations. Required for Building Regulations Part L compliance.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "MEES Compliance Assessment",
                description:
                  "Minimum Energy Efficiency Standards assessment and advice for landlords. Identify at-risk properties and most cost-effective improvement routes.",
              },
            },
          ],
        },

        sameAs: [],
      },

      {
        "@type": "WebSite",
        "@id": "https://fairwoodenergy.com/#website",
        url: "https://fairwoodenergy.com",
        name: "Fairwood Solutions",
        publisher: { "@id": "https://fairwoodenergy.com/#business" },
        inLanguage: "en-GB",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
