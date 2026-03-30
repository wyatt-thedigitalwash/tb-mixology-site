"use client";

import { useEffect, useRef } from "react";

let observer: IntersectionObserver | null = null;
const callbacks = new Map<Element, () => void>();

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target);
          if (cb) {
            cb();
            callbacks.delete(entry.target);
            observer!.unobserve(entry.target);
          }
        }
      }
    },
    { threshold: 0.15 }
  );
  return observer;
}

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

export default function FadeIn({ children, className = "", delay = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = getObserver();
    callbacks.set(el, () => el.classList.add("visible"));
    obs.observe(el);

    return () => {
      callbacks.delete(el);
      obs.unobserve(el);
    };
  }, []);

  return (
    <div ref={ref} className={`fade-in ${delay} ${className}`}>
      {children}
    </div>
  );
}
