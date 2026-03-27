import type { Metadata } from "next";
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
    default: "New York Sash | Adirondack Home Improvement Specialists",
    template: "%s | New York Sash Adirondacks",
  },
  description:
    "Trusted for 35+ years in windows, one-day bathroom remodels, premium siding, and doors across the Adirondacks, including Boonville, Old Forge, Inlet, and Eagle Bay.",
  keywords: [
    "New York Sash",
    "Adirondack home improvement",
    "replacement windows Adirondacks",
    "bathroom remodel Adirondacks",
    "siding installation Adirondacks",
    "door replacement Adirondacks",
    "Boonville",
    "Old Forge",
    "Inlet",
    "Eagle Bay",
  ],
  authors: [{ name: "New York Sash" }],
  alternates: {
    canonical: "/adk",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "New York Sash | Adirondack Home Improvement Specialists",
    description:
      "Bringing 35+ years of trusted home improvement expertise to Adirondack homeowners.",
    url: "/adk",
    siteName: "New York Sash",
    images: [
      {
        url: "/images/adk-landscape-hero-original.jpg",
        width: 1200,
        height: 630,
        alt: "Adirondack landscape with New York Sash home improvement services",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "New York Sash | Adirondack Home Improvement Specialists",
    description:
      "Windows, bathrooms, siding, and doors for Adirondack homes with a lifetime warranty.",
    images: ["/images/adk-landscape-hero-original.jpg"],
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
        <main className="flex-1">
          {children}
        </main>
        <GlobalFooter />
      </body>
    </html>
  );
}
