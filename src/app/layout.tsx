import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sulistyo Wahyu Sasongko | Android Developer",
  description: "Android Developer with 5+ years of experience building and maintaining mobile applications across fintech, enterprise, and live-streaming industries.",
  keywords: ["Android Developer", "Kotlin", "Java", "Sulistyo Wahyu Sasongko", "Portfolio", "Mobile App Developer"],
  authors: [{ name: "Sulistyo Wahyu Sasongko" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
