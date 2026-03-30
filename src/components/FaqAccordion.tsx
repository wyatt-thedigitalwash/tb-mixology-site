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
          className={`text-warm-gray shrink-0 transition-transform duration-300 ease-out ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div className="accordion-body" data-open={open}>
        <div>
          <p className="text-warm-gray font-body text-sm leading-relaxed pb-5">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
