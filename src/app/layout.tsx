import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import GlobalFooter from "@/components/GlobalFooter";
import "./globals.css";

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
  title: "New York Sash - Your Adirondack Home Improvement Specialists | Windows, Bathrooms, Siding & Doors",
  description: "New York Sash expands to the Adirondacks! Trusted for 35+ years for windows, one-day bathroom remodels, premium siding, and quality doors. Lifetime warranty included.",
  keywords: "New York Sash, Adirondack windows, bathroom remodel, siding installation, door replacement, Boonville, Old Forge, Inlet, Eagle Bay",
  authors: [{ name: "New York Sash" }],
  openGraph: {
    title: "New York Sash - Your Adirondack Home Improvement Specialists",
    description: "Bringing 35+ years of trusted home improvement expertise to the Adirondack region",
    type: "website",
    locale: "en_US",
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
