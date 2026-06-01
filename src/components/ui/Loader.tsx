"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-paper">
      <div className="flex flex-col items-center gap-5 text-center">
        <p className="text-[clamp(2.2rem,5vw,4rem)] font-semibold tracking-[-0.08em]">
          李明岩
        </p>
        <p className="max-w-sm text-sm leading-7 text-[color:rgba(30,33,27,0.66)] sm:text-base">
          设计不是装饰，是让复杂变得可感知。
        </p>
      </div>
    </div>
  );
}
