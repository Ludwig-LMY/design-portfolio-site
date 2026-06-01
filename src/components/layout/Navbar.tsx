"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#projects", label: "作品" },
  { href: "#about", label: "关于" },
  { href: "#timeline", label: "经历" },
  { href: "#skills", label: "方法" },
  { href: "#contact", label: "联系" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="section-shell pt-4 sm:pt-6">
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
          <Link
            href="#top"
            className="group flex items-center gap-3 text-sm font-medium text-foreground"
          >
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-olive" />
            <span className="tracking-[0.18em] text-[11px] uppercase text-warm-gray">
              李明岩
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative overflow-hidden text-sm text-[color:rgba(30,33,27,0.84)] transition-colors hover:text-foreground"
              >
                <span className="block transition-transform duration-200 group-hover:-translate-y-0.5">
                  {item.label}
                </span>
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-foreground transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-foreground md:hidden"
            aria-expanded={open}
            aria-label={open ? "关闭菜单" : "打开菜单"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="section-shell pt-3 md:hidden">
          <div className="glass-panel rounded-[28px] p-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-[color:rgba(30,33,27,0.8)] transition-colors hover:bg-olive-soft hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
