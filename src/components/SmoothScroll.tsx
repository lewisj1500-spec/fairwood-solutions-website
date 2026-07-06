"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Touch devices have excellent native momentum scroll — Lenis adds no benefit
    // and burns battery with a constant 60fps RAF loop
    if (window.matchMedia("(hover: none)").matches) return;

    const lenis = new Lenis({ duration: 0.9, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    let raf: number;
    function animate(time: number) { lenis.raf(time); raf = requestAnimationFrame(animate); }
    raf = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);

  return <>{children}</>;
}
