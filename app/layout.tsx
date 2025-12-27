import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientMotion from "../components/ClientMotion";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://salientix.com"),

  title: {
    default: "Salientix — Intelligent Software Systems",
    template: "%s | Salientix",
  },

  description:
    "Salientix is a software company building AI-driven systems that help businesses operate, sell, and scale with clarity and confidence.",

  keywords: [
    "Salientix",
    "AI software company",
    "business automation",
    "AI SaaS",
    "intelligent systems",
    "ecommerce AI",
    "customer automation",
  ],

  openGraph: {
    title: "Salientix — Intelligent Software Systems",
    description:
      "AI-driven software systems designed to help modern businesses operate, sell, and scale with confidence.",
    url: "https://salientix.com",
    siteName: "Salientix",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Salientix — Intelligent Software Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Salientix — Intelligent Software Systems",
    description:
      "Building intelligent software systems for modern businesses.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        <ClientMotion>
          {children}
        </ClientMotion>
        <Footer />
      </body>
    </html>
  );
}
