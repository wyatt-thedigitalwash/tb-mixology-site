"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Mode = null | "addon" | "standalone";

export default function GlasswareInquiry() {
  const [mode, setMode] = useState<Mode>(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={() => setMode("addon")}
          className={`border rounded-sm p-6 text-left cursor-pointer transition-all duration-200 ease-out hover:-translate-y-0.5 ${
            mode === "addon"
              ? "border-accent bg-accent/5"
              : "border-warm-gray/30 hover:border-accent/50 hover:shadow-md"
          }`}
        >
          <h3 className="font-heading text-lg text-primary mb-2">
            Add-On to Bartending
          </h3>
          <p className="font-body text-sm text-warm-gray leading-relaxed mb-3">
            I&rsquo;m booking bartending services and want to add glassware rental.
          </p>
          <span className="inline-flex items-center gap-1 text-xs tracking-[0.15em] uppercase font-body text-accent">
            {mode === "addon" ? "Selected" : "Select"}
            <ChevronRight size={14} />
          </span>
        </button>
        <button
          onClick={() => setMode("standalone")}
          className={`border rounded-sm p-6 text-left cursor-pointer transition-all duration-200 ease-out hover:-translate-y-0.5 ${
            mode === "standalone"
              ? "border-accent bg-accent/5"
              : "border-warm-gray/30 hover:border-accent/50 hover:shadow-md"
          }`}
        >
          <h3 className="font-heading text-lg text-primary mb-2">
            Standalone Rental
          </h3>
          <p className="font-body text-sm text-warm-gray leading-relaxed mb-3">
            I just need glassware rental without bartending services.
          </p>
          <span className="inline-flex items-center gap-1 text-xs tracking-[0.15em] uppercase font-body text-accent">
            {mode === "standalone" ? "Selected" : "Select"}
            <ChevronRight size={14} />
          </span>
        </button>
      </div>

      {mode === "addon" && (
        <div className="mt-8 border border-warm-gray/30 rounded-sm p-6">
          <h4 className="font-heading text-xl text-primary mb-3">
            Glassware as an Add-On
          </h4>
          <p className="font-body text-primary mb-2">
            <span className="font-accent text-primary text-lg">$3–$5 per person</span>
          </p>
          <p className="font-body text-sm text-warm-gray leading-relaxed mb-4">
            Pricing is based on guest count and glassware selection. Glassware rental includes delivery, setup, and pickup — we handle everything.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary px-8 py-3 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
          >
            Add to Your Bartending Package
          </Link>
        </div>
      )}

      {mode === "standalone" && (
        <div className="mt-8 border border-warm-gray/30 rounded-sm p-6">
          <h4 className="font-heading text-xl text-primary mb-3">
            Standalone Glassware Rental
          </h4>
          <p className="font-body text-sm text-warm-gray leading-relaxed mb-4">
            We offer standalone glassware rental for events where you&rsquo;re handling the bar yourself. Pricing varies based on quantity, glassware types, and event details. Reach out and we&rsquo;ll put together a custom quote.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary px-8 py-3 text-sm tracking-[0.15em] uppercase font-body rounded-sm hover:bg-accent/90 transition-colors duration-200 ease-out"
          >
            Request a Quote
          </Link>
        </div>
      )}
    </div>
  );
}
