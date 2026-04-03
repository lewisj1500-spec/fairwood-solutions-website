import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "@/components/JsonLd";
import ScrollProgress from "@/components/ScrollProgress";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://fairwoodenergy.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Fairwood Solutions | EPC Assessors in Wales — Fast 24hr Certificates",
    template: "%s | Fairwood Solutions",
  },

  description:
    "Government-accredited EPC assessors based in Carmarthen. Fast, accurate Energy Performance Certificates for domestic and commercial properties across Wales and the South West. 24-hour turnaround. Call +44 1267 241 291.",

  keywords: [
    "EPC certificate Wales",
    "energy performance certificate Carmarthen",
    "domestic EPC assessor Wales",
    "commercial EPC Wales",
    "SAP calculation new build Wales",
    "MEES compliance Wales",
    "EPC assessor Carmarthenshire",
    "energy performance certificate Swansea",
    "DEA accredited assessor Wales",
    "EPC certificate 24 hours Wales",
    "EPC Pembrokeshire",
    "EPC Ceredigion",
    "Fairwood Solutions",
  ],

  authors: [{ name: "Fairwood Solutions", url: SITE_URL }],
  creator: "Fairwood Solutions",
  publisher: "Fairwood Solutions",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Fairwood Solutions",
    title: "Fairwood Solutions | EPC Assessors in Wales — Fast 24hr Certificates",
    description:
      "Government-accredited EPC assessors. Fast, accurate Energy Performance Certificates for domestic and commercial properties across Wales. 24-hour turnaround.",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fairwood Solutions — EPC Assessors in Wales",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fairwood Solutions | EPC Assessors in Wales",
    description:
      "Government-accredited EPC assessors. Fast, accurate Energy Performance Certificates across Wales. 24-hour turnaround.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="geo.region" content="GB-CMN" />
        <meta name="geo.placename" content="Carmarthen, Wales" />
        <meta name="geo.position" content="51.8286825;-4.343122" />
        <meta name="ICBM" content="51.8286825, -4.343122" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body bg-[#030804] text-[#e8f5e9] antialiased`}
      >
        <ScrollProgress />
        <JsonLd />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
