export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://fairwoodsolutions.com/#business",
        name: "Fairwood Solutions",
        legalName: "Fairwood Residential Estates Ltd",
        description:
          "Government-accredited EPC assessors providing fast, accurate Energy Performance Certificates for domestic and commercial properties across Wales and the South West. Certificates typically issued within 24 hours of assessment.",
        url: "https://fairwoodsolutions.com",
        telephone: "+441267241291",
        email: "Lloyd@FairwoodSolutions.co.uk",
        priceRange: "££",
        currenciesAccepted: "GBP",
        paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Prenteg, Heol Smyrna",
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
          { "@type": "AdministrativeArea", name: "Cardiff" },
          { "@type": "AdministrativeArea", name: "Newport" },
          { "@type": "AdministrativeArea", name: "Powys" },
          { "@type": "AdministrativeArea", name: "Wales" },
          { "@type": "AdministrativeArea", name: "Bristol" },
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
                  "Government-registered Energy Performance Certificate for residential properties. Required by law when selling or renting. Typically issued within 24 hours of assessment.",
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
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Air Tightness Testing",
                description:
                  "Accredited air permeability testing for new build and refurbishment projects. Required under Building Regulations Part L. Same-day results.",
              },
            },
          ],
        },

        sameAs: [],
      },

      {
        "@type": "WebSite",
        "@id": "https://fairwoodsolutions.com/#website",
        url: "https://fairwoodsolutions.com",
        name: "Fairwood Solutions",
        publisher: { "@id": "https://fairwoodsolutions.com/#business" },
        inLanguage: "en-GB",
      },

      {
        "@type": "FAQPage",
        "@id": "https://fairwoodsolutions.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is an Energy Performance Certificate (EPC)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An EPC is a legal document that rates a property's energy efficiency on a scale from A (most efficient) to G (least efficient). It's required by law when selling, letting, or building a property in the UK. Our government-accredited assessors carry out a non-invasive survey and lodge the certificate on the national register — valid for 10 years.",
            },
          },
          {
            "@type": "Question",
            name: "How long does an EPC assessment take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most domestic assessments take 45–90 minutes depending on the size and type of property. Our DEAs are efficient and thorough — we measure the building's dimensions, inspect insulation, glazing, heating systems, and renewables without any disruption to the property.",
            },
          },
          {
            "@type": "Question",
            name: "How quickly will I receive my EPC certificate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In the vast majority of cases we deliver your EPC within 24 hours of the assessment — often the same day. Occasionally it can take a little longer, for example where additional information about the property is required. The certificate is emailed directly to you and simultaneously lodged on the Government's national EPC register, making it immediately verifiable by estate agents, letting agents, and buyers.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need an EPC to sell or rent my property?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. In England and Wales, an EPC is a legal requirement before marketing a property for sale or rent. Rental properties must achieve a minimum E rating under MEES (Minimum Energy Efficiency Standards) regulations. Failure to comply can result in fines of up to £5,000.",
            },
          },
          {
            "@type": "Question",
            name: "What is the minimum EPC rating required for rental properties?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Under current MEES regulations, all rental properties in England and Wales must have a minimum EPC rating of E. The Government has proposed raising this to C in the future. We can assess your property and advise on the most cost-effective improvements to meet or exceed the threshold.",
            },
          },
          {
            "@type": "Question",
            name: "What areas of Wales do you cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We cover all of Wales, with particular strength across Carmarthenshire, Pembrokeshire, Ceredigion, Swansea, Bridgend, Cardiff, and surrounding areas. We also serve parts of the South West of England including Bristol and Bath. Contact us to confirm availability for your specific location.",
            },
          },
          {
            "@type": "Question",
            name: "Can an EPC help reduce my energy bills?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. Every EPC includes a detailed recommendations section showing specific improvements — such as loft insulation, cavity wall fill, or a more efficient boiler — along with the potential energy and cost savings each measure could deliver. Our assessors are happy to walk you through these findings.",
            },
          },
        ],
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
