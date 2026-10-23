"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setPct(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="reading-progress">
      <div
        style={{
          height: "100%",
          background:
            "linear-gradient(90deg, var(--brand-primary), var(--brand-secondary))",
          width: `${pct}%`,
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}
