"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { href: "/services/bartending", label: "Bartending Services" },
  { href: "/services/batched", label: "Batch Cocktails" },
  { href: "/services/classes", label: "Cocktail Classes" },
  { href: "/services/glassware", label: "Glassware Rental" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", dropdown: true },
  { href: "/drinks", label: "Drinks" },
  { href: "/events", label: "Events" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ease-out ${
        scrolled
          ? "bg-secondary/95 backdrop-blur-md border-b border-warm-gray/20"
          : "bg-secondary/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl text-primary tracking-wide">
          TB Mixology
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.href} ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-sm font-body text-warm-gray hover:text-primary transition-colors duration-200 ease-out tracking-wide flex items-center gap-1"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ease-out ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 bg-secondary border border-warm-gray/20 rounded-sm shadow-lg py-2 min-w-[220px]">
                    <Link
                      href="/services"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-sm font-body text-primary hover:text-accent hover:bg-primary/5 transition-colors duration-200 ease-out"
                    >
                      All Services
                    </Link>
                    <div className="h-px bg-warm-gray/15 my-1" />
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2 text-sm font-body text-warm-gray hover:text-accent hover:bg-primary/5 transition-colors duration-200 ease-out"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-body text-warm-gray hover:text-primary transition-colors duration-200 ease-out tracking-wide"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="text-sm font-body text-secondary bg-primary hover:bg-accent transition-colors duration-200 ease-out px-5 py-2 rounded-sm tracking-[0.1em] uppercase"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary active:opacity-70"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-[opacity,transform] duration-300 ease-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="bg-secondary/98 backdrop-blur-md border-t border-warm-gray/20 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-body text-warm-gray hover:text-primary active:text-primary transition-colors duration-200 ease-out tracking-wide"
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={closeMenu}
                      className="text-sm font-body text-warm-gray/70 hover:text-primary active:text-primary transition-colors duration-200 ease-out"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="inline-block text-center text-sm font-body text-secondary bg-primary hover:bg-accent active:bg-accent transition-colors duration-200 ease-out px-5 py-3 rounded-sm tracking-[0.1em] uppercase mt-2"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
