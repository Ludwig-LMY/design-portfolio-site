"use client";

import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Loader } from "@/components/ui/Loader";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <SmoothScrollProvider>
      <Loader />
      <div className="site-shell relative min-h-screen overflow-x-clip">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
