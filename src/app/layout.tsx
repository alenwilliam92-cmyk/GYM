import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GYM — Precision Athletic Conditioning & Wellness",
  description:
    "A welcoming fitness sanctuary designed for sustainable strength, thoughtful guidance, and lifelong vitality. Start where you are.",
  keywords: [
    "gym",
    "wellness",
    "personal training",
    "strength training",
    "functional fitness",
    "conditioning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} font-sans bg-page text-main antialiased selection:bg-accent selection:text-white flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
