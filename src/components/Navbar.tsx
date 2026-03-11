"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/95 backdrop-blur-md border-b border-border-gold" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl text-text tracking-wide">
          TB Mixology
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-body text-text-muted hover:text-text transition-colors tracking-wide"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-body text-text-muted hover:text-text transition-colors tracking-wide"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm font-body text-bg bg-gold hover:bg-champagne transition-colors px-5 py-2 tracking-[0.1em] uppercase"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg/98 backdrop-blur-md border-t border-border-gold">
          <div className="px-6 py-6 flex flex-col gap-5">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-body text-text-muted hover:text-text transition-colors tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-body text-text-muted hover:text-text transition-colors tracking-wide"
            >
              Services
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block text-center text-sm font-body text-bg bg-gold hover:bg-champagne transition-colors px-5 py-3 tracking-[0.1em] uppercase"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
