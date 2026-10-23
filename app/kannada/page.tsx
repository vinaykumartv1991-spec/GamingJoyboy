import type { Metadata } from "next";
import { kannadaArticles, gamingGlossary } from "@/lib/data";

export const metadata: Metadata = {
  title: "ಕನ್ನಡ ಗೇಮಿಂಗ್ — Karnataka Gaming News in Kannada",
  description:
    "ಕನ್ನಡದಲ್ಲಿ ಗೇಮಿಂಗ್ ಸುದ್ದಿ, BGMI ಗೈಡ್, ಇ-ಸ್ಪೋರ್ಟ್ಸ್ ವರದಿ. Karnataka gamers ಗಾಗಿ.",
};

const topics = ["ಎಲ್ಲಾ", "BGMI", "ಇ-ಸ್ಪೋರ್ಟ್ಸ್", "ಹಾರ್ಡ್‌ವೇರ್", "ಗೈಡ್", "ಕರ್ನಾಟಕ"];

const communityLinks = [
  { label: "BGMI Karnataka WhatsApp Group", emoji: "💬", members: "8,400" },
  { label: "Bengaluru Gamers Discord", emoji: "🎮", members: "24,000" },
  { label: "Karnataka Esports Facebook", emoji: "📘", members: "15,200" },
  { label: "r/KarnatakaGaming Reddit", emoji: "🔴", members: "3,800" },
];

export default function KannadaPage() {
  return (
    <>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg,#001500,#002200,#001500)",
          borderBottom: "1px solid rgba(0,200,83,.15)",
          padding: "48px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 40% 50%,rgba(0,200,83,.08) 0%,transparent 55%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
            <span className="tag" style={{ background: "rgba(0,200,83,.15)", color: "var(--success)" }}>
              🗺️ Karnataka
            </span>
            <span className="tag tag-dark">ಕನ್ನಡ Content</span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-noto-kannada, sans-serif)",
              fontSize: "clamp(28px, 5vw, 48px)",
              color: "#fff",
              marginBottom: "10px",
              lineHeight: 1.2,
            }}
          >
            ಕನ್ನಡ ಗೇಮಿಂಗ್ ಕೇಂದ್ರ
          </h1>
          <p
            style={{
              fontFamily: "var(--font-noto-kannada, sans-serif)",
              color: "var(--text-secondary)",
              fontSize: "16px",
              lineHeight: 1.75,
              maxWidth: "520px",
              marginBottom: "20px",
            }}
          >
            ಕರ್ನಾಟಕದ ಗೇಮರ್‌ಗಳಿಗಾಗಿ — BGMI ಟಿಪ್ಸ್, ಇ-ಸ್ಪೋರ್ಟ್ಸ್ ಸುದ್ದಿ,
            ಹಾರ್ಡ್‌ವೇರ್ ರಿವ್ಯೂ ಮತ್ತು ಟೂರ್ನಮೆಂಟ್ ಮಾಹಿತಿ.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button className="btn btn-success">ಲೇಖನಗಳನ್ನು ಓದಿ</button>
            <button className="btn btn-secondary">ಸಮುದಾಯ ಸೇರಿ</button>
          </div>
        </div>
      </div>

      {/* Topic filter */}
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
          {topics.map((t, i) => (
            <button
              key={t}
              className={`filter-chip${i === 0 ? " active" : ""}`}
              style={{ fontFamily: "var(--font-noto-kannada, sans-serif)" }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container section">
        <div className="main-grid">
          {/* Main */}
          <div>
            {/* Kannada Articles */}
            <h2
              className="section-title green"
              style={{ fontFamily: "var(--font-noto-kannada, sans-serif)" }}
            >
              📰 ಇತ್ತೀಚಿನ ಲೇಖನಗಳು
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
              {kannadaArticles.map((article) => (
                <div key={article.id} className="card" style={{ padding: "20px" }}>
                  <div style={{ display: "flex", gap: "16px" }}>
                    <div
                      style={{
                        width: "90px",
                        height: "90px",
                        borderRadius: "var(--radius)",
                        background: "linear-gradient(135deg,var(--bg-elevated),var(--bg-overlay))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "40px",
                        flexShrink: 0,
                      }}
                    >
                      {article.emoji}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: "6px", marginBottom: "8px", flexWrap: "wrap" }}>
                        <span
                          className="tag tag-success"
                          style={{ fontSize: "10px", fontFamily: "var(--font-noto-kannada, sans-serif)" }}
                        >
                          {article.categoryKn}
                        </span>
                        <span className="tag tag-dark" style={{ fontSize: "10px" }}>
                          {article.readTime} ನಿಮಿಷ
                        </span>
                      </div>
                      <h3
                        style={{
                          fontFamily: "var(--font-noto-kannada, sans-serif)",
                          fontSize: "17px",
                          fontWeight: 700,
                          color: "#fff",
                          lineHeight: 1.4,
                          marginBottom: "6px",
                        }}
                      >
                        {article.titleKn}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-noto-kannada, sans-serif)",
                          color: "var(--text-secondary)",
                          fontSize: "13px",
                          lineHeight: 1.7,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {article.excerptKn}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "12px",
                          marginTop: "10px",
                          fontSize: "12px",
                          color: "var(--text-muted)",
                        }}
                      >
                        <span>{article.author}</span>
                        <span>·</span>
                        <span style={{ fontFamily: "var(--font-noto-kannada, sans-serif)" }}>
                          {article.dateKn}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gaming Glossary */}
            <h2
              className="section-title"
              style={{ fontFamily: "var(--font-noto-kannada, sans-serif)" }}
            >
              📖 ಗೇಮಿಂಗ್ ಶಬ್ದಕೋಶ
            </h2>
            <div
              style={{
                background: "var(--bg-surface)",
                border: "1px solid rgba(255,255,255,.06)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                marginBottom: "40px",
              }}
            >
              {gamingGlossary.map((entry, i) => (
                <div
                  key={entry.termKn}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    padding: "16px 20px",
                    borderBottom:
                      i < gamingGlossary.length - 1
                        ? "1px solid rgba(255,255,255,.05)"
                        : "none",
                    alignItems: "start",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-noto-kannada, sans-serif)",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "var(--success)",
                        marginBottom: "4px",
                      }}
                    >
                      {entry.termKn}
                    </div>
                    <div style={{ color: "var(--text-muted)", fontSize: "12px" }}>
                      {entry.term}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-noto-kannada, sans-serif)",
                      color: "var(--text-secondary)",
                      fontSize: "13px",
                      lineHeight: 1.7,
                    }}
                  >
                    {entry.definitionKn}
                  </div>
                </div>
              ))}
            </div>

            {/* Contribute CTA */}
            <div
              style={{
                background: "linear-gradient(135deg,rgba(0,200,83,.07),rgba(0,212,255,.04))",
                border: "1px dashed rgba(0,200,83,.25)",
                borderRadius: "var(--radius)",
                padding: "28px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "12px" }}>✍️</div>
              <h3
                style={{
                  fontFamily: "var(--font-noto-kannada, sans-serif)",
                  fontSize: "20px",
                  color: "#fff",
                  marginBottom: "8px",
                }}
              >
                ಕನ್ನಡದಲ್ಲಿ ಬರೆಯಿರಿ
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-noto-kannada, sans-serif)",
                  color: "var(--text-secondary)",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  marginBottom: "16px",
                  maxWidth: "400px",
                  margin: "0 auto 16px",
                }}
              >
                ನಿಮ್ಮ ಗೇಮಿಂಗ್ ಅನುಭವ, ರಿವ್ಯೂ ಅಥವಾ ಗೈಡ್ ಕನ್ನಡದಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ.
                50,000+ ಕರ್ನಾಟಕ ಗೇಮರ್‌ಗಳನ್ನು ತಲುಪಿ.
              </p>
              <button className="btn btn-success">ಯೋಗದಾನ ಮಾಡಿ →</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Community */}
            <div className="sidebar-card">
              <h3 style={{ fontFamily: "var(--font-noto-kannada, sans-serif)" }}>
                🤝 ಸಮುದಾಯ ಗುಂಪುಗಳು
              </h3>
              {communityLinks.map((link) => (
                <div
                  key={link.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "11px 0",
                    borderBottom: "1px solid rgba(255,255,255,.05)",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>{link.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "#fff", fontSize: "13px", fontWeight: 600 }}>
                      {link.label}
                    </div>
                    <div style={{ color: "var(--text-muted)", fontSize: "11px" }}>
                      {link.members} members
                    </div>
                  </div>
                  <span style={{ color: "var(--brand-secondary)", fontSize: "18px" }}>→</span>
                </div>
              ))}
            </div>

            {/* Districts map widget */}
            <div className="sidebar-card">
              <h3 style={{ fontFamily: "var(--font-noto-kannada, sans-serif)" }}>
                🗺️ ಕರ್ನಾಟಕ ಗೇಮರ್ ನಕ್ಷೆ
              </h3>
              {[
                { city: "ಬೆಂಗಳೂರು", en: "Bengaluru", count: "18,200" },
                { city: "ಮೈಸೂರು", en: "Mysuru", count: "4,100" },
                { city: "ಮಂಗಳೂರು", en: "Mangaluru", count: "2,800" },
                { city: "ಹುಬ್ಬಳ್ಳಿ", en: "Hubballi", count: "1,950" },
                { city: "ಶಿವಮೊಗ್ಗ", en: "Shivamogga", count: "1,200" },
              ].map(({ city, en, count }) => (
                <div
                  key={en}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "9px 0",
                    borderBottom: "1px solid rgba(255,255,255,.05)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-noto-kannada, sans-serif)",
                      color: "var(--text-secondary)",
                      fontSize: "13px",
                    }}
                  >
                    {city}
                  </span>
                  <span style={{ color: "var(--success)", fontWeight: 700, fontSize: "13px" }}>
                    {count}
                  </span>
                </div>
              ))}
              <p style={{ color: "var(--text-muted)", fontSize: "11px", marginTop: "10px" }}>
                Active gamers by city (Oct 2026)
              </p>
            </div>

            {/* Language toggle */}
            <div
              className="sidebar-card callout callout-success"
              style={{ textAlign: "center" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-noto-kannada, sans-serif)",
                  fontSize: "15px",
                  color: "#fff",
                  lineHeight: 1.7,
                  marginBottom: "14px",
                }}
              >
                ಕನ್ನಡ ಓದಲು ಕಷ್ಟವಾಗುತ್ತಿದೆಯೇ? ಇಂಗ್ಲೀಷ್‌ಗೆ ಬದಲಾಯಿಸಿ.
              </p>
              <button className="btn btn-secondary btn-sm">Switch to English</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
