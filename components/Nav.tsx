"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/games/bgmi", label: "🎮 Games" },
  { href: "/esports", label: "🏆 Esports" },
  { href: "/hardware", label: "🖥️ Hardware" },
  { href: "/kannada", label: "ಕನ್ನಡ", isKn: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="nav" style={{ position: "sticky", top: 0, zIndex: 100 }}>
        <Link href="/" className="nav-logo">
          Gaming<span>India</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links hide-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${link.isKn ? " nav-link-kn kn" : ""}${
                pathname === link.href ? " active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <div
            style={{
              display: "flex",
              gap: "4px",
              background: "var(--bg-elevated)",
              border: "1px solid var(--bg-overlay)",
              borderRadius: "100px",
              padding: "3px",
            }}
          >
            <span
              style={{
                padding: "4px 12px",
                borderRadius: "100px",
                background: "var(--success)",
                color: "#fff",
                fontSize: "12px",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "var(--font-noto-kannada, sans-serif)",
              }}
            >
              ಕನ್ನಡ
            </span>
            <span
              style={{
                padding: "4px 12px",
                borderRadius: "100px",
                color: "var(--text-muted)",
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              EN
            </span>
          </div>
          <Link href="#signin" className="btn btn-primary btn-sm hide-mobile">
            Sign In
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-secondary)",
              fontSize: "20px",
              padding: "4px 8px",
            }}
            className="show-mobile"
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "var(--bg-surface)",
            borderBottom: "1px solid rgba(255,255,255,.08)",
            padding: "12px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            position: "sticky",
            top: 60,
            zIndex: 99,
          }}
          className="show-mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                padding: "10px 14px",
                borderRadius: "6px",
                color:
                  pathname === link.href
                    ? "var(--brand-primary)"
                    : "var(--text-secondary)",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: link.isKn
                  ? "var(--font-noto-kannada, sans-serif)"
                  : "inherit",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
