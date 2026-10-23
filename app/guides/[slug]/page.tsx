import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgress from "@/components/ReadingProgress";
import { trendingArticles } from "@/lib/data";

export const instant = false;

type Props = PageProps<"/guides/[slug]">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = trendingArticles.find((a) => a.slug === slug);
  return {
    title: article
      ? `${article.title} — GamingIndia`
      : "Article — GamingIndia",
    description: article?.excerpt ?? "Read gaming guides, tips and esports coverage for Indian gamers.",
  };
}

// Static params for the mock articles
export function generateStaticParams() {
  return trendingArticles.map((a) => ({ slug: a.slug }));
}

const relatedPosts = [
  { title: "BGMI Weapon Tier List — Season 7", emoji: "⚔️", readTime: 6, slug: "bgmi-weapon-meta" },
  { title: "Best Budget Gaming Phones Under ₹15k", emoji: "📱", readTime: 8, slug: "budget-gaming-phones-15k-india" },
  { title: "How to Start Your Esports Career in India", emoji: "🎓", readTime: 10, slug: "esports-career-guide-india-2026" },
];

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const article = trendingArticles.find((a) => a.slug === slug) ?? trendingArticles[0];

  return (
    <>
      <ReadingProgress />

      {/* Breadcrumb */}
      <div
        style={{
          background: "var(--bg-surface)",
          borderBottom: "1px solid rgba(255,255,255,.05)",
          padding: "10px 24px",
        }}
      >
        <div className="container" style={{ padding: 0 }}>
          <span style={{ color: "var(--text-muted)", fontSize: "13px" }}>
            <Link href="/" style={{ color: "var(--text-muted)" }}>Home</Link>
            {" / "}
            <Link href="/guides" style={{ color: "var(--text-muted)" }}>Guides</Link>
            {" / "}
            <span style={{ color: "var(--text-secondary)" }}>{article.title}</span>
          </span>
        </div>
      </div>

      {/* Article hero */}
      <div
        style={{
          height: "280px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={article.image}
          alt={article.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,.1) 0%, rgba(0,0,0,.6) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Article body */}
      <div className="container section">
        <div className="main-grid">
          {/* Main */}
          <article>
            {/* Tags row */}
            <div style={{ display: "flex", gap: "6px", marginBottom: "14px", flexWrap: "wrap" }}>
              <span className={`tag ${article.categoryColor}`}>{article.category}</span>
              {article.isKarnataka && (
                <span className="tag tag-gold">🗺️ Karnataka</span>
              )}
              <span className="tag tag-dark">{article.readTime} min read</span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
                fontSize: "clamp(24px, 4vw, 40px)",
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: "14px",
              }}
            >
              {article.title}
            </h1>

            {/* Meta */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "var(--brand-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                {article.author.charAt(0)}
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: "13px" }}>
                  {article.author}
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "12px" }}>
                  {article.date} · {article.readTime} min read
                </div>
              </div>
              <div style={{ flex: 1 }} />
              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  className="btn btn-sm"
                  style={{ background: "var(--bg-elevated)", color: "var(--text-secondary)" }}
                >
                  Share
                </button>
                <button
                  className="btn btn-sm"
                  style={{ background: "var(--bg-elevated)", color: "var(--text-secondary)" }}
                >
                  Bookmark
                </button>
              </div>
            </div>

            {/* Lead */}
            <p
              style={{
                fontSize: "17px",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                borderLeft: "3px solid var(--brand-primary)",
                paddingLeft: "18px",
                marginBottom: "28px",
              }}
            >
              {article.excerpt}
            </p>

            {/* Body content (mock) */}
            <div
              style={{
                color: "var(--text-secondary)",
                fontSize: "15px",
                lineHeight: 1.85,
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
                  fontSize: "24px",
                  color: "#fff",
                  marginBottom: "12px",
                  marginTop: "32px",
                }}
              >
                Why This Matters for Indian Gamers
              </h2>
              <p style={{ marginBottom: "16px" }}>
                India&apos;s gaming market has grown to 580 million players in 2026, with Karnataka
                and Bengaluru leading in competitive esports participation. Understanding the
                latest updates and strategies can give you an edge in ranked matches and local
                tournaments.
              </p>
              <p style={{ marginBottom: "16px" }}>
                Whether you&apos;re grinding ranked on a ₹12,000 phone or preparing for the
                Karnataka Gamers Cup at KTPO, the tips in this guide apply at every level.
              </p>

              <h2
                style={{
                  fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
                  fontSize: "24px",
                  color: "#fff",
                  marginBottom: "12px",
                  marginTop: "32px",
                }}
              >
                Key Takeaways
              </h2>
              <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
                {[
                  "Budget phones (₹12k–₹18k) can achieve 40–60 FPS with optimized settings",
                  "Gyan Boosts and daily login rewards are still the best free UC alternatives",
                  "Karnataka players qualify for regional seats at India-level tournaments",
                  "Scrimmage Discord servers are the fastest path from casual to competitive",
                ].map((point) => (
                  <li key={point} style={{ marginBottom: "10px" }}>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Callout */}
              <div className="callout callout-info" style={{ marginBottom: "24px" }}>
                <strong style={{ color: "#fff", fontWeight: 700 }}>Pro tip: </strong>
                Always check{" "}
                <span style={{ color: "var(--brand-secondary)" }}>bgmi.in</span> for official
                server maintenance schedules before a rank session. Indian servers go down
                between 2–5 AM IST on patch days.
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
                  fontSize: "24px",
                  color: "#fff",
                  marginBottom: "12px",
                  marginTop: "32px",
                }}
              >
                Detailed Breakdown
              </h2>
              <p style={{ marginBottom: "16px" }}>
                In the competitive Indian mobile gaming scene, ping is king. Bengaluru players
                typically get 18–35ms on central India servers — significantly better than
                Tier-2 cities which average 45–80ms. If you&apos;re on Jio or Airtel 5G in
                Karnataka&apos;s major cities, you&apos;re already at an advantage.
              </p>
              <p style={{ marginBottom: "16px" }}>
                The meta shift in Season 7 favors aggressive early-game rotations. The new
                Kalahari map rewards players who control the North Camp and Gas Station zones
                in the first two circles. Karnataka teams at the regional level have been
                practicing this rotation since the season dropped.
              </p>
              <p>
                For budget players: the POCO X6 Pro and Realme GT 6T continue to be the best
                value picks for competitive BGMI in 2026. Both run Ultra graphics at 60 FPS
                and have the thermal management needed for 2+ hour sessions.
              </p>
            </div>

            {/* Tags footer */}
            <div
              style={{
                marginTop: "36px",
                paddingTop: "24px",
                borderTop: "1px solid rgba(255,255,255,.07)",
                display: "flex",
                gap: "6px",
                flexWrap: "wrap",
              }}
            >
              {["BGMI", "India Gaming", "Karnataka", "Esports", "Mobile Gaming"].map((tag) => (
                <span key={tag} className="tag tag-dark">
                  #{tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Author */}
            <div className="sidebar-card">
              <div style={{ textAlign: "center", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "var(--brand-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 auto 10px",
                  }}
                >
                  {article.author.charAt(0)}
                </div>
                <div style={{ fontWeight: 700, color: "#fff" }}>{article.author}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "2px" }}>
                  Senior Gaming Editor
                </div>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "13px", textAlign: "center", lineHeight: 1.65 }}>
                Bengaluru-based gamer & writer. Covering BGMI, Valorant & Karnataka esports since 2021.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="sidebar-card">
              <h3>📋 Table of Contents</h3>
              {[
                "Why This Matters for Indian Gamers",
                "Key Takeaways",
                "Detailed Breakdown",
              ].map((section, i) => (
                <div
                  key={section}
                  style={{
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(255,255,255,.05)",
                    color: "var(--text-secondary)",
                    fontSize: "13px",
                    cursor: "pointer",
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <span style={{ color: "var(--brand-primary)", fontWeight: 700 }}>
                    {i + 1}.
                  </span>
                  <span>{section}</span>
                </div>
              ))}
            </div>

            {/* Related */}
            <div className="sidebar-card">
              <h3>📚 Related Guides</h3>
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/guides/${post.slug}`}
                  style={{
                    display: "flex",
                    gap: "10px",
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(255,255,255,.05)",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>{post.emoji}</span>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 600, fontSize: "13px", lineHeight: 1.3 }}>
                      {post.title}
                    </div>
                    <div style={{ color: "var(--text-muted)", fontSize: "11px", marginTop: "3px" }}>
                      {post.readTime} min read
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
