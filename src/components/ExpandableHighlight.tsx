"use client";

import { useState } from "react";
import { ChevronDown, Palette, Leaf, Sparkles, Tag, Heart, ShieldCheck } from "lucide-react";

const iconMap = {
  Palette,
  Leaf,
  Sparkles,
  Tag,
  Heart,
  ShieldCheck,
} as const;

interface Props {
  iconName: keyof typeof iconMap;
  title: string;
  description: string;
  detail: string;
}

export default function ExpandableHighlight({ iconName, title, description, detail }: Props) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[iconName];

  return (
    <button
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className="border border-white/10 rounded-sm p-6 text-center hover:border-accent/30 transition-colors duration-200 ease-out w-full cursor-pointer"
    >
      <Icon size={28} className="text-accent mx-auto mb-4" strokeWidth={1.5} />
      <h3 className="font-heading text-lg text-secondary mb-2">{title}</h3>
      <p className="font-body text-sm text-white/60 leading-relaxed">{description}</p>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-body text-sm text-white/50 leading-relaxed border-t border-white/10 pt-4">
          {/* TODO: Replace placeholder detail text with client-provided copy */}
          {detail}
        </p>
      </div>
      <ChevronDown
        size={16}
        className={`text-accent mx-auto mt-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      />
    </button>
  );
}
