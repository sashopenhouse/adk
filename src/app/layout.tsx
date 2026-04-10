import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import GlobalFooter from "@/components/GlobalFooter";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif-alt',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "New York Sash | Adirondack Property Protection Specialists - We Protect Year-Round",
    template: "%s | New York Sash Adirondacks",
  },
  description:
    "We protect your Adirondack property year-round, even when you're away. 35+ years of weatherproof windows, storm siding, secure doors, moisture-resistant bathrooms. Serving Boonville, Old Forge, Inlet, Eagle Bay with lifetime warranties.",
  keywords: [
    "Adirondack property protection",
    "vacation home security",
    "weatherproof windows Adirondacks",
    "storm resistant siding",
    "secure doors installation",
    "moisture resistant bathrooms",
    "seasonal property protection",
    "New York Sash",
    "Boonville property protection",
    "Old Forge lakefront security",
    "Inlet luxury protection",
    "Eagle Bay wilderness security",
    "North Country home improvement",
    "lifetime warranty",
  ],
  authors: [{ name: "New York Sash Property Protection Specialists" }],
  creator: "New York Sash",
  publisher: "New York Sash",
  category: "Home Improvement & Property Protection",
  classification: "Property Protection Services",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  verification: {
    google: "your-google-site-verification",
  },
  openGraph: {
    title: "New York Sash | Adirondack Property Protection Specialists",
    description:
      "We protect your property year-round, even when you're away. 35+ years protecting Adirondack homes with weatherproof systems, storm barriers, and security installations.",
    url: "https://www.newyorksash-adirondacks.com/",
    siteName: "New York Sash - Adirondack Property Protection",
    images: [
      {
        url: "/images/adk-landscape-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Adirondack property protection services - weatherproof windows, storm siding, secure installations by New York Sash",
        type: "image/jpeg",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "New York Sash | Adirondack Property Protection",
    description:
      "Property protection year-round: weatherproof windows, storm siding, secure doors for Adirondack homes with lifetime warranty.",
    images: ["/images/adk-landscape-hero.jpg"],
    creator: "@NewYorkSash",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full scroll-smooth ${playfairDisplay.variable} ${cormorantGaramond.variable}`}>
      <body className="min-h-full flex flex-col bg-creamy-white">
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-69QYXR8DBP" strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', 'G-69QYXR8DBP', { anonymize_ip: true });`}
          </Script>
        </>
        <main className="flex-1">
          {children}
        </main>
        <GlobalFooter />
        <Script src="https://sash-board-2-0.vercel.app/nys-track.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
