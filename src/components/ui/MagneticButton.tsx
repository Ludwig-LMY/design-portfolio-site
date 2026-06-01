"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

type MagneticButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export function MagneticButton({
  href,
  label,
  variant = "primary",
  external = false,
}: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.16;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.16;
    setOffset({ x, y });
  };

  const handleLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const className =
    variant === "primary"
      ? "bg-foreground text-paper hover:bg-olive"
      : "border border-line bg-white/40 text-foreground hover:bg-olive-soft";

  return (
    <motion.div
      animate={reduceMotion ? {} : { x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.5 }}
      className="inline-flex"
    >
      <Link
        ref={ref}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${className}`}
      >
        {label}
      </Link>
    </motion.div>
  );
}
