import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Playfair_Display, Inter } from "next/font/google";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "MuseMe DXB — Luxury Portrait & Branding Photography in Dubai",
  description:
    "Soft power, glamour, and elegance captured in timeless photography. MuseMe DXB serves Dubai with luxury portrait and branding sessions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="text-onyx font-sans">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
