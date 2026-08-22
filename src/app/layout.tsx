import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://mob-hub.com";
const siteTitle = "Mob Hub | Mobile Creative Production in Uganda";
const siteDescription =
  "Mobile podcast production, film support, voice-over recording, photography, videography and travel documentation across Uganda.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Mob Hub",
      url: siteUrl,
      logo: `${siteUrl}/brand/mob-hub-logo.webp`,
      image: `${siteUrl}/media/pic2.jpeg`,
      description: siteDescription,
      areaServed: {
        "@type": "Country",
        name: "Uganda",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+256780122080",
          contactType: "project enquiries",
          areaServed: "UG",
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+256787735756",
          contactType: "project enquiries",
          areaServed: "UG",
          availableLanguage: ["English"],
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Mob Hub creative production services",
        itemListElement: [
          "Podcast & Interview Production",
          "Film & Production Support",
          "Voice-Over Recording",
          "Photography & Videography",
          "Tourism & Travel Documentation",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            areaServed: {
              "@type": "Country",
              name: "Uganda",
            },
            provider: { "@id": `${siteUrl}/#organization` },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Mob Hub",
      description: siteDescription,
      inLanguage: "en-UG",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Mob Hub",
  title: {
    default: siteTitle,
    template: "%s | Mob Hub",
  },
  description: siteDescription,
  keywords: [
    "creative production Uganda",
    "podcast production Uganda",
    "film production support Uganda",
    "voice-over recording Uganda",
    "photography Uganda",
    "videography Uganda",
    "travel documentation Uganda",
    "mobile production Kampala",
  ],
  creator: "Mob Hub",
  publisher: "Mob Hub",
  category: "Creative production",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Mob Hub",
    locale: "en_UG",
    type: "website",
    images: [
      {
        url: "/media/pic2.jpeg",
        width: 1080,
        height: 810,
        alt: "Mob Hub mobile creative production setup in Uganda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/media/pic2.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-UG">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}