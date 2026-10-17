"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

import "./StackSection.css";

type StackSectionProps = {
  children: ReactNode;
  index: number;
};

export default function StackSection({ children, index }: StackSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Section screen se lamba ho to uska bottom screen ke bottom par aakar ruke
    const update = () => {
      const height = el.offsetHeight;
      const viewport = window.innerHeight;
      el.style.top = `${Math.min(0, viewport - height)}px`;
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className="stack-item" style={{ zIndex: index + 1 }}>
      {children}
    </div>
  );
}