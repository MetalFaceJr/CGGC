import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calhoun GA Grappling Club | Brazilian Jiu-Jitsu & Grappling",
  description:
    "Premier submission grappling and Brazilian Jiu-Jitsu training in Calhoun, Georgia. All experience levels welcome. Classes for kids and adults.",
  keywords: [
    "Brazilian Jiu-Jitsu",
    "Grappling",
    "Submission Wrestling",
    "Martial Arts",
    "Calhoun GA",
    "Self Defense",
    "MMA",
    "Mixed Martial Arts",
    "Wrestling",
    "Submission Fighting"
  ],
  openGraph: {
    title: "Calhoun GA Grappling Club | Brazilian Jiu-Jitsu & Grappling",
    description: "Premier submission grappling and Brazilian Jiu-Jitsu training in Calhoun, Georgia. All experience levels welcome. Classes for kids and adults.",
    url: "https://calhoungagrapplingclub.com",
    siteName: "Calhoun GA Grappling Club",
    images: [
      {
        url: "https://calhoungagrapplingclub.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Calhoun GA Grappling Club logo and facility"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Calhoun GA Grappling Club | Brazilian Jiu-Jitsu & Grappling",
    description: "Premier submission grappling and Brazilian Jiu-Jitsu training in Calhoun, Georgia. All experience levels welcome. Classes for kids and adults.",
    images: ["https://calhoungagrapplingclub.com/og-image.jpg"]
  }
};


// JSON-LD LocalBusiness Schema
export const schema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Calhoun GA Grappling Club",
  "description": "Premier submission grappling and Brazilian Jiu-Jitsu training in Calhoun, Georgia. All experience levels welcome. Classes for kids and adults.",
  "image": "https://calhoungagrapplingclub.com/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Inside Seo's Martial Arts & SMA Athletics",
    "addressLocality": "Calhoun",
    "addressRegion": "GA",
    "postalCode": "30701",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.5027,
    "longitude": -84.9503
  },
  "telephone": "+1-706-629-7367",
  "url": "https://calhoungagrapplingclub.com",
  "priceRange": "$$",
  "servesCuisine": [
    "Brazilian Jiu-Jitsu",
    "Grappling",
    "Martial Arts Training",
    "Self Defense"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "https://schema.org/Wednesday",
        "https://schema.org/Friday",
        "https://schema.org/Saturday"
      ],
      "opens": "17:00",
      "closes": "21:00"
    }
  ]
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark-bg">
        <Script id="localbusiness-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
