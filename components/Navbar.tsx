"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/90 backdrop-blur border-b border-white/10"
            : "bg-black"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="font-semibold tracking-tight text-lg">
          <span style={{ color: "#2563eb" }}>Salientix</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 text-sm text-white/60">
          <Link href="/products" className="hover:text-blue-500 transition">
            Products
          </Link>
          <Link href="/about" className="hover:text-blue-500 transition">
            Company
          </Link>
        </nav>

        {/* Contact */}
        <a
          href="mailto:contact@salientix.com"
          className="text-sm px-4 py-2 border border-white/20 rounded-md hover:border-white/40 transition"
        >
          Contact
        </a>

      </div>
    </header>
  );
}
