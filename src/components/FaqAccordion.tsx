"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  question: string;
  answer: string;
}

export default function FaqAccordion({ question, answer }: FaqAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-warm-gray/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
      >
        <h3 className="font-heading text-lg md:text-xl text-primary">{question}</h3>
        <ChevronDown
          size={20}
          className={`text-warm-gray shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-warm-gray font-body text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
