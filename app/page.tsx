import type { Metadata } from "next";
import Link from "next/link";
import { trendingArticles, tournaments, hotDeals } from "@/lib/data";

export const metadata: Metadata = {
  title: "GamingIndia — India's #1 Gaming Portal",
  description:
    "India's premier destination for gaming news, BGMI guides, esports coverage, and hardware deals. Kannada gaming content for Karnataka gamers.",
};

const tickerItems = [
  "BGMI Season 7 Update brings new map Kalahari to Indian servers",
  "Karnataka Gamers Cup 2026 registration open — ₹25L prize pool",
  "Valorant Champions Tour India S2 teams announced",
  "boAt launches new gaming headset at ₹1,499 — Best budget pick",
  "Free Fire MAX India Cup 2026: ₹15L in prizes across 6 cities",
  "POCO X6 Pro gaming review: 120 FPS BGMI on a budget",
];

const karnatakaPosts = [
  {
    id: "k1",
    image: "/images/esports-arena.jpg",
    tag: "Karnataka Esports",
    tagColor: "#FFD700",
    tagBg: "rgba(255,215,0,.15)",
    title: "Karnataka Gamers Cup 2026 — ₹25 Lakh Prize Pool Tournament",
    excerpt: "The biggest Karnataka LAN event returns to Bengaluru's KTPO. Register now for BGMI, Valorant, and CS2 categories.",
    date: "Oct 22",
    readTime: 3,
  },
  {
    id: "k2",
    image: "/images/thumb-team.jpg",
    tag: "Career",
    tagColor: "var(--brand-secondary)",
    tagBg: "rgba(0,212,255,.12)",
    title: "BMS College Bengaluru Launches India's First Esports Degree Program",
    excerpt: "Karnataka's top engineering college partners with NODWIN Gaming to offer a B.Tech with esports specialization starting 2027.",
    date: "Oct 20",
    readTime: 4,
  },
  {
    id: "k3",
    image: "/images/thumb-mobile.jpg",
    tag: "ಕನ್ನಡ",
    tagColor: "var(--success)",
    tagBg: "rgba(0,200,83,.15)",
    title: "ಕನ್ನಡದಲ್ಲಿ BGMI ಟಿಪ್ಸ್ — ₹15,000 ಫೋನ್‌ನಲ್ಲಿ 60 FPS",
    excerpt: "ಬಜೆಟ್ ಫೋನ್‌ನಲ್ಲಿ BGMI ಉತ್ತಮವಾಗಿ ಆಡಲು ಸಂಪೂರ್ಣ ಗ್ರಾಫಿಕ್ಸ್ ಸೆಟ್ಟಿಂಗ್ಸ್ ಗೈಡ್.",
    date: "Oct 18",
    readTime: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Breaking News Ticker ── */}
      <div className="ticker-outer">
        <div className="ticker-label">🔴 LIVE</div>
        <div className="ticker-wrap">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="ticker-item">
                {item}
                <span className="ticker-sep"> ◆ </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hero ── */}
      <section
        style={{
          background: "var(--bg-base)",
          borderBottom: "1px solid rgba(255,255,255,.05)",
          padding: "56px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,107,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,0,.04) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 70% 50%,rgba(255,107,0,.1) 0%,transparent 55%),radial-gradient(ellipse at 20% 30%,rgba(123,47,255,.08) 0%,transparent 45%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,107,0,.12)",
                  border: "1px solid rgba(255,107,0,.25)",
                  borderRadius: "100px",
                  padding: "6px 14px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "var(--brand-primary)",
                  marginBottom: "18px",
                }}
              >
                🇮🇳 Made for Indian Gamers
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
                  fontSize: "clamp(36px, 5vw, 60px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: "#fff",
                  marginBottom: "16px",
                }}
              >
                India&apos;s #1{" "}
                <span style={{ color: "var(--brand-primary)" }}>Gaming</span>{" "}
                Portal
              </h1>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "17px",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  maxWidth: "480px",
                }}
              >
                BGMI guides, esports coverage, hardware reviews — all in{" "}
                <span style={{ color: "#fff", fontWeight: 600 }}>English</span>{" "}
                and{" "}
                <span
                  style={{
                    color: "var(--success)",
                    fontFamily: "var(--font-noto-kannada, sans-serif)",
                    fontWeight: 600,
                  }}
                >
                  ಕನ್ನಡ
                </span>
                .
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/games/bgmi" className="btn btn-primary">
                  🎮 Explore Games
                </Link>
                <Link href="/esports" className="btn btn-secondary">
                  🏆 View Tournaments
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  marginTop: "28px",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { n: "580M+", l: "Indian Gamers" },
                  { n: "₹2.4Cr+", l: "Active Prize Pools" },
                  { n: "75+", l: "Kannada Articles" },
                ].map(({ n, l }) => (
                  <div key={l}>
                    <div
                      style={{
                        fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
                        fontSize: "26px",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {n}
                    </div>
                    <div
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "12px",
                        marginTop: "2px",
                      }}
                    >
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Hero art */}
            <div
              className="hide-mobile"
              style={{
                border: "1px solid rgba(255,107,0,.2)",
                borderRadius: "16px",
                height: "320px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src="/images/hero-esports.jpg"
                alt="Gaming setup"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg,rgba(255,107,0,.25),rgba(123,47,255,.15))",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trending Articles ── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Trending Now
            </h2>
            <div style={{ display: "flex", gap: "6px" }}>
              {["All", "Mobile", "PC", "Console", "Esports"].map((p) => (
                <span
                  key={p}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "100px",
                    background: p === "All" ? "var(--brand-primary)" : "var(--bg-elevated)",
                    color: p === "All" ? "#fff" : "var(--text-secondary)",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                  className="hide-mobile"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Hero article + grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: "16px",
            }}
          >
            {/* Hero article (spans 2 rows) */}
            <Link
              href={`/guides/${trendingArticles[0].slug}`}
              className="card"
              style={{ gridRow: "span 2", display: "flex", flexDirection: "column" }}
            >
              <div
                className="card-img"
                style={{
                  height: "280px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={trendingArticles[0].image}
                  alt={trendingArticles[0].title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,.75))",
                  }}
                />
              </div>
              <div className="card-body" style={{ flex: 1, padding: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    className={`tag ${trendingArticles[0].categoryColor}`}
                  >
                    {trendingArticles[0].category}
                  </span>
                  <span className="tag tag-primary">🔥 Trending</span>
                </div>
                <h2 style={{ fontSize: "22px", color: "#fff", marginBottom: "10px", lineHeight: 1.3 }}>
                  {trendingArticles[0].title}
                </h2>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                    lineHeight: 1.65,
                  }}
                >
                  {trendingArticles[0].excerpt}
                </p>
                <div className="article-meta" style={{ marginTop: "14px" }}>
                  <span>{trendingArticles[0].author}</span>
                  <span className="dot" />
                  <span>{trendingArticles[0].date}</span>
                  <span className="dot" />
                  <span>{trendingArticles[0].readTime} min read</span>
                </div>
              </div>
            </Link>

            {/* Smaller cards */}
            {trendingArticles.slice(1, 5).map((article) => (
              <Link
                key={article.id}
                href={`/guides/${article.slug}`}
                className="card"
                style={{ display: "flex", gap: "12px", padding: "14px" }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "6px",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ flex: 1, overflow: "hidden" }}>
                  <div style={{ marginBottom: "6px" }}>
                    <span className={`tag ${article.categoryColor}`} style={{ fontSize: "10px" }}>
                      {article.category}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#fff",
                      lineHeight: 1.35,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {article.title}
                  </h3>
                  <div className="article-meta">
                    <span>{article.author}</span>
                    <span className="dot" />
                    <span>{article.readTime} min</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Karnataka Spotlight ── */}
      <section
        style={{
          background: "var(--bg-surface)",
          borderTop: "1px solid rgba(255,255,255,.05)",
          borderBottom: "1px solid rgba(255,255,255,.05)",
        }}
        className="section"
      >
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
            <h2 className="section-title green" style={{ marginBottom: 0 }}>
              🗺️ Karnataka Spotlight
            </h2>
            <Link href="/kannada" style={{ color: "var(--success)", fontSize: "13px", fontWeight: 700 }}>
              ಎಲ್ಲಾ ನೋಡಿ →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {karnatakaPosts.map((post) => (
              <div
                key={post.id}
                className="card"
                style={{ borderColor: "rgba(0,200,83,.15)", cursor: "pointer" }}
              >
                <div
                  style={{
                    height: "140px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,.6))",
                    }}
                  />
                </div>
                <div className="card-body">
                  <span
                    className="tag"
                    style={{
                      background: post.tagBg,
                      color: post.tagColor,
                      marginBottom: "8px",
                      display: "inline-flex",
                      fontFamily:
                        post.id === "k3"
                          ? "var(--font-noto-kannada, sans-serif)"
                          : "inherit",
                    }}
                  >
                    {post.tag}
                  </span>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#fff",
                      lineHeight: 1.3,
                      marginBottom: "6px",
                      fontFamily:
                        post.id === "k3"
                          ? "var(--font-noto-kannada, sans-serif)"
                          : "var(--font-rajdhani, Rajdhani, sans-serif)",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "13px",
                      lineHeight: 1.65,
                      fontFamily:
                        post.id === "k3"
                          ? "var(--font-noto-kannada, sans-serif)"
                          : "inherit",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div className="article-meta">
                    <span>{post.date}</span>
                    <span className="dot" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tournaments ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
            <h2 className="section-title gold" style={{ marginBottom: 0 }}>
              🏆 Active Tournaments
            </h2>
            <Link href="/esports" style={{ color: "var(--gold)", fontSize: "13px", fontWeight: 700 }}>
              View All →
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {tournaments.slice(0, 4).map((t) => (
              <Link
                href="/esports"
                key={t.id}
                className="card tournament-card"
                style={{ textDecoration: "none" }}
              >
                <div className="tournament-icon" style={{ background: t.gradient, fontSize: "22px" }}>
                  {t.gameEmoji}
                </div>
                <div className="tournament-body">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span className="tournament-title">{t.title}</span>
                    {t.isKarnataka && (
                      <span className="tag tag-success" style={{ fontSize: "10px" }}>
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
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px", flexShrink: 0 }}>
                  <div className="tournament-prize">{t.prize}</div>
                  <span className={`status-pill status-${t.status}`}>{t.status.charAt(0).toUpperCase() + t.status.slice(1)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hot Deals ── */}
      <section
        style={{ background: "var(--bg-surface)", borderTop: "1px solid rgba(255,255,255,.05)" }}
        className="section"
      >
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
            <h2 className="section-title cyan" style={{ marginBottom: 0 }}>
              🔥 Hot Deals
            </h2>
            <Link href="/hardware" style={{ color: "var(--brand-secondary)", fontSize: "13px", fontWeight: 700 }}>
              View All →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {hotDeals.slice(0, 3).map((deal) => (
              <div key={deal.id} className="card deal-card">
                <div className="deal-img" style={{ background: deal.gradient }}>
                  {deal.emoji}
                </div>
                <div className="deal-body">
                  <div className="tag tag-dark" style={{ marginBottom: "8px", fontSize: "10px" }}>
                    {deal.category}
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#fff", marginBottom: "8px", lineHeight: 1.3 }}>
                    {deal.name}
                  </div>
                  <div className="deal-price">
                    <span className="deal-price-new">₹{deal.priceNew.toLocaleString("en-IN")}</span>
                    <span className="deal-price-old">₹{deal.priceOld.toLocaleString("en-IN")}</span>
                    <span className="deal-discount">{deal.discount}% off</span>
                  </div>
                  <div className="deal-rating" style={{ margin: "6px 0" }}>
                    {"★".repeat(Math.round(deal.rating))}{"☆".repeat(5 - Math.round(deal.rating))}
                    <span style={{ color: "var(--text-muted)", fontSize: "11px", marginLeft: "4px" }}>
                      ({deal.reviews.toLocaleString("en-IN")})
                    </span>
                  </div>
                  <div className="deal-actions">
                    <button className="btn btn-flipkart btn-sm">Flipkart</button>
                    <button className="btn btn-amazon btn-sm">Amazon</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* EMI Banner */}
          <div
            style={{
              marginTop: "20px",
              background: "linear-gradient(135deg,rgba(0,200,83,.06),rgba(0,212,255,.04))",
              border: "1px solid rgba(0,200,83,.2)",
              borderRadius: "var(--radius)",
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ fontSize: "24px" }}>💳</span>
            <div>
              <span style={{ fontWeight: 700, color: "#fff", fontSize: "14px" }}>No-Cost EMI Available</span>
              <span style={{ color: "var(--text-secondary)", fontSize: "13px", marginLeft: "8px" }}>
                on orders above ₹5,000 via HDFC, SBI, Axis Bank cards & Amazon Pay Later
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              background: "linear-gradient(135deg,rgba(255,107,0,.08),rgba(123,47,255,.06))",
              border: "1px solid rgba(255,107,0,.2)",
              borderRadius: "12px",
              padding: "40px",
              display: "flex",
              alignItems: "center",
              gap: "32px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: "240px" }}>
              <h2
                style={{
                  fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "8px",
                }}
              >
                📬 Weekly Gaming Digest
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.7 }}>
                Every Monday — top gaming news, deals & tournament alerts in English and Kannada.
                Join 12,000+ Indian gamers.
              </p>
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", flex: 1, minWidth: "280px" }}>
              <input
                type="email"
                placeholder="your@email.com"
                className="input"
                style={{ flex: 1, minWidth: "180px" }}
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
