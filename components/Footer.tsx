import Link from "next/link";

const footerLinks = {
  Games: [
    { label: "BGMI", href: "/games/bgmi" },
    { label: "Valorant", href: "/games/valorant" },
    { label: "Free Fire MAX", href: "/games/free-fire-max" },
    { label: "CS2", href: "/games/cs2" },
    { label: "All Games", href: "/games" },
  ],
  Esports: [
    { label: "Tournaments", href: "/esports" },
    { label: "Karnataka Events", href: "/esports?filter=karnataka" },
    { label: "Leaderboards", href: "/esports/leaderboards" },
    { label: "Team Finder", href: "/community/team-finder" },
  ],
  Hardware: [
    { label: "PC Builds", href: "/hardware?cat=pc-builds" },
    { label: "Gaming Phones", href: "/hardware?cat=phones" },
    { label: "Peripherals", href: "/hardware?cat=peripherals" },
    { label: "Hot Deals", href: "/hardware?cat=deals" },
  ],
  ಕನ್ನಡ: [
    { label: "ಕನ್ನಡ ಗೈಡ್ಸ್", href: "/kannada" },
    { label: "ಕರ್ನಾಟಕ ಈವೆಂಟ್ಸ್", href: "/kannada#events" },
    { label: "ಗ್ಲಾಸರಿ", href: "/kannada#glossary" },
    { label: "ಬರಹಗಾರರಾಗಿ ಸೇರಿ", href: "/write-for-us" },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand col */}
        <div>
          <div className="footer-logo">
            Gaming<span>India</span>
          </div>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "13px",
              lineHeight: 1.7,
              marginBottom: "16px",
              maxWidth: "280px",
            }}
          >
            India&apos;s premier gaming portal — BGMI guides, esports coverage,
            hardware reviews in English and Kannada. Made in Bengaluru 🇮🇳
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["YouTube", "Instagram", "Twitter", "Discord"].map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: "6px",
                  padding: "6px 12px",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  transition: "color 0.15s",
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Link cols */}
        {Object.entries(footerLinks).map(([col, links]) => (
          <div className="footer-col" key={col}>
            <h4
              style={{
                fontFamily:
                  col === "ಕನ್ನಡ"
                    ? "var(--font-noto-kannada, sans-serif)"
                    : "inherit",
              }}
            >
              {col}
            </h4>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>© 2026 GamingIndia. Made with ❤️ in Bengaluru, Karnataka.</p>
        <div style={{ display: "flex", gap: "20px" }}>
          {["Privacy Policy", "Terms", "Contact", "Advertise"].map((l) => (
            <a
              key={l}
              href="#"
              style={{
                color: "var(--text-muted)",
                fontSize: "12px",
                transition: "color 0.15s",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
