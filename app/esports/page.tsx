import type { Metadata } from "next";
import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";
import { tournaments } from "@/lib/data";

export const metadata: Metadata = {
  title: "Esports & Tournaments — India Gaming Calendar 2026",
  description:
    "Live tournament calendar for BGMI, Valorant, Free Fire and CS2 in India. Karnataka esports events, prize pools, and team registration.",
};

const stats = [
  { n: "24", l: "Active Tournaments", color: "var(--brand-primary)" },
  { n: "₹2.4Cr+", l: "Total Prize Pool", color: "var(--gold)" },
  { n: "6", l: "Karnataka Events", color: "var(--success)" },
  { n: "1,200+", l: "Registered Teams", color: "var(--brand-secondary)" },
];

const games = ["All Games", "BGMI", "Valorant", "Free Fire MAX", "CS2"];
const locations = ["All Locations", "Karnataka", "Online", "LAN"];
const statuses = ["All Status", "Open Registration", "Ongoing", "Upcoming"];

const topTeams = [
  { rank: 1, name: "Team Mayhem", from: "Bengaluru", wins: 12, emoji: "🥇" },
  { rank: 2, name: "Karnataka Kings", from: "Mysuru", wins: 9, emoji: "🥈" },
  { rank: 3, name: "Velocity GC", from: "Mangaluru", wins: 7, emoji: "🥉" },
  { rank: 4, name: "Xspark India", from: "Mumbai", wins: 14, emoji: "4️⃣" },
  { rank: 5, name: "Global Esports", from: "Mumbai", wins: 11, emoji: "5️⃣" },
];

// Featured tournament (first open Karnataka event)
const featured = tournaments[0];

export default function EsportsPage() {
  return (
    <>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg,#0d0010,#180025,#0d0010)",
          borderBottom: "1px solid rgba(123,47,255,.2)",
          padding: "48px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src="/images/esports-arena.jpg"
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.1, pointerEvents: "none" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 30% 50%,rgba(123,47,255,.12) 0%,transparent 55%),radial-gradient(ellipse at 70% 30%,rgba(255,215,0,.06) 0%,transparent 45%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "14px", flexWrap: "wrap" }}>
            <span className="tag tag-tertiary">🏆 Esports</span>
            <span className="tag tag-success">Live Tournaments</span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
              fontSize: "clamp(32px, 5vw, 52px)",
              color: "#fff",
              marginBottom: "8px",
            }}
          >
            India Esports & Tournament Calendar
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px", marginBottom: "28px", maxWidth: "560px", lineHeight: 1.7 }}>
            From ₹25,000 local LAN parties to ₹50 lakh national championships — every tournament, in one place.
          </p>

          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {stats.map(({ n, l, color }) => (
              <div key={l}>
                <div
                  style={{
                    fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
                    fontSize: "32px",
                    fontWeight: 700,
                    color,
                  }}
                >
                  {n}
                </div>
                <div style={{ color: "var(--text-secondary)", fontSize: "12px", marginTop: "2px" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div
        style={{
          background: "var(--bg-surface)",
          borderBottom: "1px solid rgba(255,255,255,.06)",
          padding: "12px 24px",
          position: "sticky",
          top: "60px",
          zIndex: 50,
        }}
      >
        <div className="container" style={{ display: "flex", gap: "8px", flexWrap: "wrap", padding: 0 }}>
          {games.map((g, i) => (
            <button key={g} className={`filter-chip${i === 0 ? " active" : ""}`}>
              {g}
            </button>
          ))}
          <div style={{ width: "1px", background: "rgba(255,255,255,.08)", margin: "0 4px" }} />
          {locations.map((l) => (
            <button key={l} className="filter-chip">
              {l}
            </button>
          ))}
          <div style={{ width: "1px", background: "rgba(255,255,255,.08)", margin: "0 4px" }} />
          {statuses.map((s) => (
            <button key={s} className="filter-chip">
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container section">
        <div className="main-grid">
          {/* Main */}
          <div>
            {/* Featured Tournament */}
            <h2 className="section-title gold">⭐ Featured Tournament</h2>
            <div
              style={{
                background: `${featured.gradient}, var(--bg-surface)`,
                border: "1px solid rgba(255,215,0,.2)",
                borderRadius: "12px",
                padding: "28px",
                marginBottom: "28px",
              }}
            >
              <div style={{ display: "flex", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>
                <span className="tag tag-gold">🗺️ Karnataka Event</span>
                <span className="tag tag-success">Open Registration</span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
                  fontSize: "28px",
                  color: "#fff",
                  marginBottom: "6px",
                }}
              >
                {featured.title}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "20px", lineHeight: 1.6 }}>
                📅 {featured.date} · 📍 {featured.location} · 👥 {featured.format} · 🎮 {featured.game}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>
                    Registration closes in
                  </div>
                  <CountdownTimer targetDate="2026-11-15T00:00:00" />
                </div>
                <div style={{ flex: 1, minWidth: "160px" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
                      fontSize: "36px",
                      fontWeight: 700,
                      color: "var(--gold)",
                    }}
                  >
                    {featured.prize}
                  </div>
                  <div style={{ color: "var(--text-muted)", fontSize: "13px" }}>Prize Pool</div>
                </div>
                <button className="btn btn-primary">Register Now →</button>
              </div>
            </div>

            {/* Tournament List */}
            <h2 className="section-title">📅 All Tournaments</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {tournaments.map((t) => (
                <div
                  key={t.id}
                  className="card"
                  style={{
                    borderColor: t.isKarnataka ? "rgba(255,215,0,.15)" : undefined,
                  }}
                >
                  <div className="tournament-card">
                    <div
                      className="tournament-icon"
                      style={{ background: t.gradient, fontSize: "22px" }}
                    >
                      {t.gameEmoji}
                    </div>
                    <div className="tournament-body">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          flexWrap: "wrap",
                          marginBottom: "6px",
                        }}
                      >
                        <span className="tournament-title">{t.title}</span>
                        {t.isKarnataka && (
                          <span className="tag tag-gold" style={{ fontSize: "10px" }}>
                            🗺️ Karnataka
                          </span>
                        )}
                      </div>
                      <div className="tournament-meta">
                        <span>📅 {t.date}</span>
                        <span>📍 {t.location}</span>
                        <span>👥 {t.format}</span>
                        <span>🎮 {t.game}</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "8px",
                        flexShrink: 0,
                      }}
                    >
                      <div className="tournament-prize">{t.prize}</div>
                      <span className={`status-pill status-${t.status}`}>
                        {t.status === "open"
                          ? "Open Registration"
                          : t.status === "ongoing"
                          ? "Ongoing"
                          : "Upcoming"}
                      </span>
                      {t.status === "open" && (
                        <button className="btn btn-primary btn-sm">Register</button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Submit CTA */}
            <div
              style={{
                marginTop: "24px",
                background: "linear-gradient(135deg,rgba(0,212,255,.06),rgba(123,47,255,.04))",
                border: "1px dashed rgba(0,212,255,.2)",
                borderRadius: "var(--radius)",
                padding: "24px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>📣</div>
              <h3 style={{ fontSize: "18px", color: "#fff", marginBottom: "6px" }}>Organizing a Tournament?</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "13px", marginBottom: "14px", lineHeight: 1.6 }}>
                List your Karnataka / India gaming event here for free. Reach 50,000+ gamers.
              </p>
              <button className="btn btn-secondary">Submit Tournament →</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Top Teams */}
            <div className="sidebar-card">
              <h3>🏅 Top Karnataka Teams</h3>
              {topTeams.map((team) => (
                <div
                  key={team.rank}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(255,255,255,.05)",
                  }}
                >
                  <span style={{ fontSize: "20px", width: "28px" }}>{team.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: "#fff", fontSize: "14px" }}>{team.name}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "11px" }}>{team.from}</div>
                  </div>
                  <span style={{ color: "var(--gold)", fontWeight: 700, fontSize: "13px" }}>
                    {team.wins}W
                  </span>
                </div>
              ))}
              <Link
                href="/esports/leaderboards"
                style={{ display: "block", textAlign: "center", color: "var(--brand-secondary)", fontSize: "12px", fontWeight: 700, marginTop: "12px" }}
              >
                Full Leaderboard →
              </Link>
            </div>

            {/* Career Guide */}
            <div className="sidebar-card">
              <h3>🎓 Start Your Esports Career</h3>
              {[
                { step: "1", text: "Master one game (BGMI/Valorant)" },
                { step: "2", text: "Join scrimmage servers on Discord" },
                { step: "3", text: "Enter local tournaments (₹500–₹2k)" },
                { step: "4", text: "Build a team / join existing roster" },
                { step: "5", text: "Compete at state-level events" },
              ].map(({ step, text }) => (
                <div
                  key={step}
                  style={{
                    display: "flex",
                    gap: "10px",
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(255,255,255,.05)",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "var(--brand-primary)",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {step}
                  </span>
                  <span style={{ color: "var(--text-secondary)", fontSize: "13px", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
              <Link href="/guides/esports-career-guide-india-2026" style={{ display: "block", marginTop: "14px" }}>
                <button className="btn btn-secondary btn-full btn-sm">Full Career Guide →</button>
              </Link>
            </div>

            {/* Discord */}
            <div
              className="sidebar-card"
              style={{
                background: "linear-gradient(135deg,rgba(114,137,218,.12),rgba(123,47,255,.08))",
                borderColor: "rgba(114,137,218,.25)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "10px" }}>💬</div>
              <h3>India Gaming Discord</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "13px", marginBottom: "14px", lineHeight: 1.6 }}>
                48,000+ members · Team finder · Scrim channels · Karnataka LFG
              </p>
              <button className="btn btn-full" style={{ background: "rgb(88,101,242)", color: "#fff" }}>
                Join Discord Server
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
