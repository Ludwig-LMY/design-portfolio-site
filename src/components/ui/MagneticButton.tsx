"use client";

import Link from "next/link";

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
  const className =
    variant === "primary"
      ? "bg-foreground text-paper hover:bg-olive"
      : "border border-line bg-white/40 text-foreground hover:bg-olive-soft";

  return (
    <span className="inline-flex">
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ${className}`}
      >
        {label}
      </Link>
    </span>
  );
}
