"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type RevealTextProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function RevealText({
  children,
  className,
  delay = 0,
}: RevealTextProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={reduceMotion ? undefined : { opacity: 1, transform: "translateY(0px)" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
