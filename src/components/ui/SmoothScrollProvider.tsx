"use client";

import { ReactNode, useEffect } from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  useEffect(() => {
    const getOffset = () => (window.innerWidth >= 768 ? 96 : 84);

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const target = document.querySelector(hash);
      if (!(target instanceof HTMLElement)) return;

      const top = target.getBoundingClientRect().top + window.scrollY - getOffset();
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    };

    const timer = window.setTimeout(scrollToHash, 80);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return <>{children}</>;
}
