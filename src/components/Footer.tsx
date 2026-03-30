import Link from "next/link";
import { Instagram, Phone, Mail } from "lucide-react";

const navColumns = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "All Services" },
      { href: "/services/bartending", label: "Bartending Services" },
      { href: "/services/batched", label: "Batch Cocktails" },
      { href: "/services/classes", label: "Cocktail Classes" },
      { href: "/services/glassware", label: "Glassware Rental" },
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

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl mb-4">TB Mixology</h3>
            <p className="text-white/60 font-body text-sm leading-relaxed max-w-sm mb-6">
              Handcrafted cocktails and thoughtful bar experiences across Tampa
              Bay. Fresh ingredients, real care, your event.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <a
                href="mailto:emma@tbmixology.com"
                className="text-sm text-white/60 hover:text-accent transition-colors font-body flex items-center gap-2"
              >
                <Mail size={14} />
                emma@tbmixology.com
              </a>
              <a
                href="tel:+16146341126"
                className="text-sm text-white/60 hover:text-accent transition-colors font-body flex items-center gap-2"
              >
                <Phone size={14} />
                (614) 634-1126
              </a>
              <a
                href="tel:+17273374215"
                className="text-sm text-white/60 hover:text-accent transition-colors font-body flex items-center gap-2"
              >
                <Phone size={14} />
                (727) 337-4215
              </a>
            </div>
            <a
              href="https://www.instagram.com/tbmixology/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent transition-colors inline-flex items-center gap-2 text-sm font-body"
              aria-label="Instagram"
            >
              <Instagram size={18} />
              @tbmixology
            </a>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-[0.25em] uppercase text-white/40 font-body mb-5">
                {col.title}
              </h4>
              <div className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="h-px bg-white/10 mt-12 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-body">
            &copy; {new Date().getFullYear()} TB Mixology. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-body">
            Serving St. Pete &middot; Tampa &middot; Clearwater &middot; Sarasota
          </p>
          <p className="text-white/40 text-xs font-body">
            Fully insured up to $2,000,000
          </p>
        </div>
      </div>
    </footer>
  );
}
