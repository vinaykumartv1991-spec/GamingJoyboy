import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BGMI Guide Hub — Best Tips, Tier Lists & Settings",
  description:
    "Everything BGMI — beginner to advanced guides, weapon tier lists, graphics settings for budget phones, UC price tracker, and upcoming tournaments.",
};

const guides = [
  { emoji: "🔰", title: "BGMI Beginners Guide 2026", level: "Beginner", color: "var(--success)", bg: "rgba(0,200,83,.12)", readTime: 8, slug: "bgmi-beginners-guide" },
  { emoji: "🗺️", title: "Best Drop Locations Season 7", level: "Beginner", color: "var(--success)", bg: "rgba(0,200,83,.12)", readTime: 5, slug: "bgmi-best-drop-locations" },
  { emoji: "🔫", title: "Weapon Meta & Best Loadout Guide", level: "Intermediate", color: "var(--brand-secondary)", bg: "rgba(0,212,255,.1)", readTime: 10, slug: "bgmi-weapon-meta" },
  { emoji: "🏅", title: "Rank Push from Platinum to Diamond", level: "Intermediate", color: "var(--brand-secondary)", bg: "rgba(0,212,255,.1)", readTime: 7, slug: "bgmi-rank-push" },
  { emoji: "🧠", title: "Advanced Positioning & Rotations", level: "Advanced", color: "var(--brand-primary)", bg: "rgba(255,107,0,.12)", readTime: 12, slug: "bgmi-advanced-positioning" },
  { emoji: "👑", title: "Conqueror Guide: Plays of Top Players", level: "Advanced", color: "var(--brand-primary)", bg: "rgba(255,107,0,.12)", readTime: 15, slug: "bgmi-conqueror-guide" },
];

const weaponTiers = [
  { tier: "S", color: "#FF6B00", weapons: ["M416", "Groza", "AWM", "M24", "PP19 Bizon"] },
  { tier: "A", color: "#00D4FF", weapons: ["AKM", "SCAR-L", "SKS", "Mini14", "UZI"] },
  { tier: "B", color: "#00C853", weapons: ["QBZ", "DP-28", "SLR", "M249", "Tommy Gun"] },
  { tier: "C", color: "#FFAB00", weapons: ["VSS", "QBU", "MKIII", "S1897"] },
  { tier: "D", color: "#A0A0B0", weapons: ["R45", "Crossbow", "Win94"] },
];

const ucPrices = [
  { uc: "60 UC", price: "₹75" },
  { uc: "325 UC", price: "₹380" },
  { uc: "660 UC", price: "₹760" },
  { uc: "1800 UC", price: "₹1,900" },
  { uc: "3850 UC", price: "₹3,500" },
  { uc: "8100 UC", price: "₹7,000" },
];

const phoneSettings = [
  { model: "Redmi 12 5G / Note 13", fps: "Smooth 40 FPS", settings: "Low graphics, Medium anti-aliasing" },
  { model: "POCO X6 Pro / Realme GT 6T", fps: "Smooth 60 FPS", settings: "High graphics, Ultra shadows" },
  { model: "iQOO Z9 / OnePlus Nord 4", fps: "Ultra HD 60 FPS", settings: "Ultra graphics, High anti-aliasing" },
];

const gameTabs = ["Overview", "Guides", "News", "Tier List", "Tournaments", "Settings", "ಕನ್ನಡ"];

export default function BGMIHubPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div style={{ background: "var(--bg-surface)", borderBottom: "1px solid rgba(255,255,255,.05)", padding: "10px 24px" }}>
        <div className="container" style={{ padding: 0 }}>
          <span style={{ color: "var(--text-muted)", fontSize: "13px" }}>
            <Link href="/" style={{ color: "var(--text-muted)" }}>Home</Link> / <Link href="/games" style={{ color: "var(--text-muted)" }}>Games</Link> / <span style={{ color: "var(--brand-primary)" }}>BGMI</span>
          </span>
        </div>
      </div>

      {/* Game Hero */}
      <div style={{ background: "linear-gradient(135deg,#080010,#120020,#1a0030)", borderBottom: "1px solid rgba(123,47,255,.2)", padding: "40px 24px 0", position: "relative", overflow: "hidden" }}>
        <img
          src="/images/hero-bgmi.jpg"
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.12, pointerEvents: "none" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 30% 50%,rgba(123,47,255,.15) 0%,transparent 55%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <div style={{ display: "flex", gap: "28px", alignItems: "center", marginBottom: "28px" }}>
            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "20px",
                background: "linear-gradient(135deg,rgba(123,47,255,.3),rgba(0,212,255,.2))",
                border: "2px solid rgba(123,47,255,.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "60px",
                flexShrink: 0,
              }}
            >
              🔫
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", gap: "8px", marginBottom: "8px", flexWrap: "wrap" }}>
                <span className="tag tag-tertiary">Battle Royale</span>
                <span className="tag tag-success">India Exclusive</span>
                <span className="tag tag-dark">Mobile</span>
                <span className="tag tag-primary">🔥 #1 in India</span>
              </div>
              <h1 style={{ fontSize: "42px", fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)", color: "#fff", marginBottom: "6px" }}>
                Battlegrounds Mobile India
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                100M+ Indian players · Season 7 · Updated Oct 2026
              </p>
              <div style={{ display: "flex", gap: "6px", marginTop: "10px" }}>
                {["★", "★", "★", "★", "½"].map((s, i) => (
                  <span key={i} style={{ color: "var(--gold)", fontSize: "18px" }}>{s}</span>
                ))}
                <span style={{ color: "var(--text-muted)", fontSize: "13px", marginLeft: "4px", alignSelf: "center" }}>4.5 / 5</span>
              </div>
            </div>
            <div className="hide-mobile">
              <a
                href="https://bgmi.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Download BGMI
              </a>
            </div>
          </div>

          {/* Game tabs */}
          <div style={{ display: "flex", gap: "0", borderBottom: "none", overflowX: "auto" }}>
            {gameTabs.map((tab, i) => (
              <button
                key={tab}
                style={{
                  padding: "12px 20px",
                  background: "none",
                  border: "none",
                  borderBottom: i === 0 ? "2px solid var(--brand-primary)" : "2px solid transparent",
                  color: i === 0 ? "var(--brand-primary)" : "var(--text-muted)",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  fontFamily: tab === "ಕನ್ನಡ" ? "var(--font-noto-kannada, sans-serif)" : "inherit",
                  transition: "color 0.15s",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container section">
        <div className="main-grid">
          {/* Main */}
          <div>
            {/* Guides Grid */}
            <h2 className="section-title">📖 Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", marginBottom: "40px" }}>
              {guides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="card"
                  style={{ padding: "16px", display: "flex", gap: "14px", alignItems: "center" }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "10px",
                      background: g.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "28px",
                      flexShrink: 0,
                    }}
                  >
                    {g.emoji}
                  </div>
                  <div>
                    <span className="tag" style={{ background: g.bg, color: g.color, marginBottom: "6px", fontSize: "10px" }}>
                      {g.level}
                    </span>
                    <div style={{ fontWeight: 700, color: "#fff", fontSize: "14px", lineHeight: 1.3 }}>{g.title}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "4px" }}>{g.readTime} min read</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Weapon Tier List */}
            <h2 className="section-title">⚔️ Weapon Tier List — Season 7</h2>
            <div
              style={{
                background: "var(--bg-surface)",
                border: "1px solid rgba(255,255,255,.06)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                marginBottom: "40px",
              }}
            >
              {weaponTiers.map((row) => (
                <div
                  key={row.tier}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "12px 16px",
                    borderBottom: "1px solid rgba(255,255,255,.05)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "6px",
                      background: `${row.color}22`,
                      border: `2px solid ${row.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: row.color,
                      flexShrink: 0,
                    }}
                  >
                    {row.tier}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {row.weapons.map((w) => (
                      <span
                        key={w}
                        style={{
                          background: "var(--bg-elevated)",
                          border: "1px solid rgba(255,255,255,.07)",
                          borderRadius: "4px",
                          padding: "4px 10px",
                          fontSize: "12px",
                          color: "var(--text-secondary)",
                          fontWeight: 600,
                        }}
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Phone Settings */}
            <h2 className="section-title purple">📱 Best Settings by Phone</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {phoneSettings.map((ps) => (
                <div
                  key={ps.model}
                  className="card"
                  style={{
                    padding: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, color: "#fff", fontSize: "14px" }}>{ps.model}</div>
                    <div style={{ color: "var(--text-secondary)", fontSize: "13px", marginTop: "4px" }}>{ps.settings}</div>
                  </div>
                  <span className="tag tag-success">{ps.fps}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* UC Price Table */}
            <div className="sidebar-card">
              <h3>💎 UC Price in India</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {ucPrices.map((row, i) => (
                  <div
                    key={row.uc}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px 0",
                      borderBottom: i < ucPrices.length - 1 ? "1px solid rgba(255,255,255,.05)" : "none",
                    }}
                  >
                    <span style={{ color: "var(--text-secondary)", fontSize: "14px" }}>{row.uc}</span>
                    <span style={{ fontWeight: 700, color: "#fff", fontSize: "14px", fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)" }}>
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary btn-full" style={{ marginTop: "12px", fontSize: "13px" }}>
                Buy UC on midasbuy.com
              </button>
            </div>

            {/* Quick Facts */}
            <div className="sidebar-card">
              <h3>📊 Quick Facts</h3>
              {[
                { label: "Developer", val: "Krafton India" },
                { label: "Launched", val: "July 2021" },
                { label: "Genre", val: "Battle Royale" },
                { label: "Players", val: "100M+ India" },
                { label: "Platforms", val: "Android / iOS" },
                { label: "File Size", val: "~1.8 GB" },
              ].map(({ label, val }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(255,255,255,.05)",
                    fontSize: "13px",
                  }}
                >
                  <span style={{ color: "var(--text-muted)" }}>{label}</span>
                  <span style={{ color: "#fff", fontWeight: 600 }}>{val}</span>
                </div>
              ))}
            </div>

            {/* Community */}
            <div className="sidebar-card" style={{ background: "linear-gradient(135deg,rgba(123,47,255,.08),rgba(0,212,255,.05))", borderColor: "rgba(123,47,255,.2)" }}>
              <div style={{ fontSize: "36px", textAlign: "center", marginBottom: "10px" }}>💬</div>
              <h3 style={{ textAlign: "center" }}>BGMI Community</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "13px", textAlign: "center", marginBottom: "14px", lineHeight: 1.6 }}>
                Join 24,000+ Indian BGMI players on Discord.
              </p>
              <button className="btn btn-success btn-full">Join Discord</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
