import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { business } from "@/lib/business";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | Waste Removal & Man with a Van in Lowestoft`,
    template: `%s | ${business.name}`,
  },
  description:
    "Wheelie bin emptying, man and van collections, house and shed clearances, and general waste and appliance removal across Lowestoft, Suffolk. Reliable, fully licensed, affordable prices.",
  keywords: [
    "waste removal Lowestoft",
    "man and van Lowestoft",
    "wheelie bin emptying Lowestoft",
    "house clearance Lowestoft",
    "rubbish removal Suffolk",
    "appliance disposal Lowestoft",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: business.name,
    title: `${business.name} | Waste Removal & Man with a Van in Lowestoft`,
    description:
      "Wheelie bin emptying, man and van collections, house and shed clearances, and general waste and appliance removal across Lowestoft, Suffolk.",
    url: business.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Waste Removal & Man with a Van in Lowestoft`,
    description:
      "Wheelie bin emptying, man and van collections, house and shed clearances, and general waste and appliance removal across Lowestoft, Suffolk.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-black-950">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
