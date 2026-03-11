"use client";

import { useState, useRef, useEffect } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div className="border-b border-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-body font-medium text-text text-base">
          {question}
        </span>
        <span
          className={`text-terracotta text-xl font-light shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? `${height}px` : "0px" }}
      >
        <div ref={contentRef} className="pb-5 pl-4 border-l-2 border-sage ml-1">
          <p className="text-text-muted font-body text-sm leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: AccordionItemProps[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div>
      {items.map((item) => (
        <AccordionItem key={item.question} {...item} />
      ))}
    </div>
  );
}
