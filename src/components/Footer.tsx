import Link from "next/link";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.19 8.19 0 0 0 4.76 1.52V6.79a4.83 4.83 0 0 1-1-.1Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-sand border-t border-sand">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl text-text mb-4">
              TB Mixology
            </h3>
            <p className="text-text-muted text-sm font-body leading-relaxed">
              Handcrafted cocktails and thoughtful bar experiences
              across Tampa Bay. Fresh ingredients, real care, your event.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-sage font-body mb-5">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-text-muted hover:text-text transition-colors font-body"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm text-text-muted hover:text-text transition-colors font-body"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-sm text-text-muted hover:text-text transition-colors font-body"
              >
                Book Your Event
              </Link>
            </div>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-sage font-body mb-5">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:emma@tbmixology.com"
                className="text-sm text-text-muted hover:text-text transition-colors font-body flex items-center gap-2"
              >
                <Mail size={14} className="text-sage" />
                emma@tbmixology.com
              </a>
              <a
                href="tel:+16146341126"
                className="text-sm text-text-muted hover:text-text transition-colors font-body flex items-center gap-2"
              >
                <Phone size={14} className="text-sage" />
                (614) 634-1126
              </a>
              <a
                href="tel:+17273374215"
                className="text-sm text-text-muted hover:text-text transition-colors font-body flex items-center gap-2"
              >
                <Phone size={14} className="text-sage" />
                (727) 337-4215
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/tbmixology/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-terracotta transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/p/TB-Mixology-100093284260144/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-terracotta transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@tbmixology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-terracotta transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="section-rule mt-12 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs font-body">
            © {new Date().getFullYear()} TB Mixology. All rights reserved.
          </p>
          <p className="text-text-muted text-xs font-body">
            Serving Tampa · St. Pete · Clearwater · Sarasota
          </p>
        </div>
      </div>
    </footer>
  );
}
