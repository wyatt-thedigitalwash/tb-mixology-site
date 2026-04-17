"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navColumns = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "All Services" },
      { href: "/services/bartending", label: "Bartending Services" },
      { href: "/services/batched", label: "Batch Cocktails" },
      { href: "/services/classes", label: "Cocktail Classes" },
      { href: "/services/glassware", label: "Glassware Rental" },
      { href: "/services/bar-rental", label: "Bar Rental" },
      { href: "/services/caviar", label: "Caviar Service" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/drinks", label: "Drinks" },
      { href: "/events", label: "Events" },
      { href: "/reviews", label: "Reviews" },
      { href: "/about", label: "About" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function FooterNav() {
  const pathname = usePathname();

  return (
    <>
      {navColumns.map((col) => (
        <div key={col.title}>
          <h4 className="text-xs tracking-[0.25em] uppercase text-white/40 font-body mb-5">
            {col.title}
          </h4>
          <div className="flex flex-col gap-3">
            {col.links.map((link) => {
              const isActive = pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-body transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-white/60 hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
