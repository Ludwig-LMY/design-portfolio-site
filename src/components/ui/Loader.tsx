"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1450);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -24 }}
          transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-paper"
        >
          <div className="flex flex-col items-center gap-5 text-center">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-[-0.08em]"
            >
              李明岩
            </motion.p>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? {} : { opacity: 0.72, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-sm text-sm leading-7 text-[color:rgba(30,33,27,0.66)] sm:text-base"
            >
              设计不是装饰，是让复杂变得可感知。
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
