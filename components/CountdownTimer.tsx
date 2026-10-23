"use client";

import { useEffect, useState } from "react";

interface Props {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: Props) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const items = [
    { label: "Days", val: t.d },
    { label: "Hrs", val: t.h },
    { label: "Min", val: t.m },
    { label: "Sec", val: t.s },
  ];

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {items.map(({ label, val }) => (
        <div
          key={label}
          style={{
            background: "var(--bg-elevated)",
            borderRadius: "var(--radius)",
            padding: "10px 12px",
            textAlign: "center",
            minWidth: "56px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
              fontSize: "26px",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1,
            }}
          >
            {String(val).padStart(2, "0")}
          </div>
          <div
            style={{ fontSize: "10px", color: "var(--text-muted)", marginTop: "4px" }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
