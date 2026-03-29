import type { Metadata } from "next";
import { Playfair_Display, Libre_Franklin, Cormorant_Garamond } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const libre = Libre_Franklin({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TB Mixology | Tampa Bay Event Bartending",
  description:
    "Woman-owned mobile bartending serving St. Pete, Tampa, Clearwater & Sarasota. Fresh ingredients, custom cocktail menus, and unforgettable bar experiences for every event.",
  metadataBase: new URL("https://tb-mixology-site.vercel.app"),
  openGraph: {
    title: "TB Mixology | Tampa Bay Event Bartending",
    description:
      "Woman-owned mobile bartending serving St. Pete, Tampa, Clearwater & Sarasota. Fresh ingredients, custom cocktail menus, and unforgettable bar experiences.",
    url: "https://tb-mixology-site.vercel.app",
    siteName: "TB Mixology",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${libre.variable} ${cormorant.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
