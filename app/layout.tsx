import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientMotion from "../components/ClientMotion";

export const metadata: Metadata = {
  title: {
    default: "Salientix — Intelligent Software Systems",
    template: "%s | Salientix",
  },
  description:
    "Salientix is a software company building intelligent AI-driven systems that help businesses sell, operate, and scale securely.",
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
