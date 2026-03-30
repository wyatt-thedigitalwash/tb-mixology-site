"use client";

import { useEffect, useRef, useState } from "react";

export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [visible]);

  return (
    <div ref={containerRef}>
      {visible ? (
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/emmanichter/tb-mixology-consultation"
          style={{ minWidth: "280px", height: "630px" }}
        />
      ) : (
        <div
          className="bg-[#3a3a3a] flex items-center justify-center"
          style={{ minWidth: "280px", height: "630px" }}
        >
          <span className="text-white/50 text-sm font-body">Loading scheduler...</span>
        </div>
      )}
    </div>
  );
}
