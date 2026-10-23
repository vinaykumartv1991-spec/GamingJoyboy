import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "GamingIndia — India's #1 Gaming Portal",
    template: "%s | GamingIndia",
  },
  description:
    "India's premier gaming portal for Indian gamers. BGMI guides, esports coverage, hardware reviews in English and Kannada. Karnataka gaming events.",
  keywords: ["BGMI", "gaming india", "esports", "gaming PC", "Karnataka gaming", "ಕನ್ನಡ gaming"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
