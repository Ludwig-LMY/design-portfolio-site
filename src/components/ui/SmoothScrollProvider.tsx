"use client";

import Lenis from "lenis";
import { ReactNode, useEffect } from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const getOffset = () => (window.innerWidth >= 768 ? -96 : -84);
    let lenis: Lenis | null = null;

    const scrollToHash = (behavior: "instant" | "smooth" = "instant") => {
      const hash = window.location.hash;
      if (!hash) return;

      const target = document.querySelector(hash);
      if (!(target instanceof HTMLElement)) return;

      if (reduceMotion) {
        const top =
          target.getBoundingClientRect().top + window.scrollY + getOffset();
        window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
        return;
      }

      lenis?.scrollTo(target, {
        offset: getOffset(),
        immediate: behavior === "instant",
        duration: behavior === "instant" ? 0 : 0.9,
      });
    };

    if (reduceMotion) {
      const timer = window.setTimeout(() => scrollToHash("instant"), 60);
      const onHashChange = () => scrollToHash("smooth");

      window.addEventListener("hashchange", onHashChange);

      return () => {
        window.clearTimeout(timer);
        window.removeEventListener("hashchange", onHashChange);
      };
    }

    lenis = new Lenis({
      duration: 1.12,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
    });

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    frame = window.requestAnimationFrame(raf);

    const timer = window.setTimeout(() => scrollToHash("instant"), 120);
    const onHashChange = () => scrollToHash("smooth");

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", onHashChange);
      window.cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
