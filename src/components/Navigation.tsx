"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const serviceLinks = [
  { href: "/services/bartending", label: "Bartending Services" },
  { href: "/services/batched", label: "Batch Cocktails" },
  { href: "/services/classes", label: "Cocktail Classes" },
  { href: "/services/glassware", label: "Glassware Rental" },
  { href: "/services/bar-rental", label: "Bar Rental" },
  { href: "/services/caviar", label: "Caviar Service" },
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
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const transparent = isHome && !scrolled && !menuOpen;

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }, []);

  // Determine header colors based on state
  const headerBg = menuOpen
    ? "bg-primary"
    : transparent
      ? "bg-transparent"
      : scrolled
        ? "bg-secondary/95 backdrop-blur-md border-b border-warm-gray/20"
        : "bg-secondary/80 backdrop-blur-sm";

  const lightText = transparent || menuOpen;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 ${headerBg}`}>
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            onClick={menuOpen ? closeMenu : undefined}
            className={`font-heading text-2xl tracking-wide flex items-center gap-1 ${lightText ? "text-secondary" : "text-primary"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/tb-mixology-glass-logo.svg"
              alt=""
              className={`w-8 h-8 ${lightText ? "brightness-0 invert" : ""}`}
            />
            TB Mixology
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`text-sm font-body tracking-wide flex items-center gap-1 transition-colors duration-200 ${
                      transparent ? "text-white/70 hover:text-white" : "text-primary/70 hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-secondary border border-warm-gray/20 rounded-sm shadow-lg py-2 min-w-[220px]">
                        <Link
                          href="/services"
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2 text-sm font-body text-primary hover:text-accent hover:bg-primary/5 transition-colors duration-200"
                        >
                          All Services
                        </Link>
                        <div className="h-px bg-warm-gray/15 my-1" />
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setDropdownOpen(false)}
                            className="block px-4 py-2 text-sm font-body text-warm-gray hover:text-accent hover:bg-primary/5 transition-colors duration-200"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-body tracking-wide transition-colors duration-200 ${
                    transparent ? "text-white/70 hover:text-white" : "text-primary/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className={`text-sm font-body px-5 py-2 rounded-sm tracking-[0.1em] uppercase transition-colors duration-200 ${
                transparent ? "text-primary bg-white hover:bg-accent" : "text-secondary bg-primary hover:bg-accent"
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden z-50 ${lightText ? "text-secondary" : "text-primary"}`}
            onClick={() => {
              if (menuOpen) closeMenu();
              else setMenuOpen(true);
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu — full screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-primary md:hidden transition-all duration-500 ease-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className={`flex flex-col items-center justify-center h-full px-6 transition-transform duration-500 ease-out ${
          menuOpen ? "translate-y-0" : "-translate-y-6"
        }`}>
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link, i) => (
              <div
                key={link.href}
                className="flex flex-col items-center"
                style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
              >
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="font-heading text-2xl text-secondary hover:text-accent active:text-accent flex items-center gap-2"
                    >
                      {link.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ease-out ${
                      mobileServicesOpen ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                    }`}>
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={closeMenu}
                          className="font-body text-sm text-white/50 hover:text-accent active:text-accent"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="font-heading text-2xl text-secondary hover:text-accent active:text-accent"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-10 text-sm font-body text-primary bg-accent hover:bg-white px-8 py-3 rounded-sm tracking-[0.15em] uppercase"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
