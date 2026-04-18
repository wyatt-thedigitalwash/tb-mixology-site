import type { Metadata } from "next";
import { Playfair_Display, Libre_Franklin, Cormorant_Garamond } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const libre = Libre_Franklin({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TB Mixology | Tampa Bay Event Bartending",
  description:
    "Woman-owned mobile bartending serving St. Pete, Tampa, Clearwater & Sarasota. Fresh ingredients, custom cocktail menus, and unforgettable bar experiences for every event.",
  metadataBase: new URL("https://tb-mixology-site.vercel.app"),
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "TB Mixology | Tampa Bay Event Bartending",
    description:
      "Woman-owned mobile bartending serving St. Pete, Tampa, Clearwater & Sarasota. Fresh ingredients, custom cocktail menus, and unforgettable bar experiences.",
    url: "https://tb-mixology-site.vercel.app",
    siteName: "TB Mixology",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TB Mixology | Tampa Bay Event Bartending",
    description:
      "Woman-owned mobile bartending serving St. Pete, Tampa, Clearwater & Sarasota.",
    images: ["/og-image.png"],
  },
  other: {
    "theme-color": "#1a1a1a",
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
        <a href="#main-content" className="skip-nav">Skip to main content</a>
        <Navigation />
        <div id="main-content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
