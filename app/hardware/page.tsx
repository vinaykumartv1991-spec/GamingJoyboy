import type { Metadata } from "next";
import { hotDeals, pcBuilds } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gaming Hardware & Deals — Best Prices in India",
  description:
    "Best gaming peripherals and hardware deals for Indian gamers. Keyboards, mice, headsets, monitors, gaming phones — lowest prices on Flipkart & Amazon India.",
};

const categories = ["All", "Peripherals", "Mobile", "Monitors", "Components", "Audio"];

const peripheralGuide = [
  { emoji: "⌨️", name: "Keyboard", budget: "₹1,500–₹4,000", rec: "Ant Esports MK3400W / Cosmic Byte CB-GK-02" },
  { emoji: "🖱️", name: "Mouse", budget: "₹800–₹2,500", rec: "Cosmic Byte CB-M22 / HP M150" },
  { emoji: "🎧", name: "Headset", budget: "₹1,000–₹3,000", rec: "boAt Immortal 1000D / HyperX Cloud Core" },
  { emoji: "🖥️", name: "Monitor", budget: "₹10,000–₹18,000", rec: "LG 24MP400 / HP V24i" },
  { emoji: "📱", name: "Gaming Phone", budget: "₹15,000–₹30,000", rec: "POCO X6 Pro / Realme GT 6T" },
];

export default function HardwarePage() {
  return (
    <>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg,#001018,#001a25,#001018)",
          borderBottom: "1px solid rgba(0,212,255,.15)",
          padding: "48px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src="/images/hero-hardware.jpg"
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.1, pointerEvents: "none" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 60% 50%,rgba(0,212,255,.08) 0%,transparent 55%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "14px", flexWrap: "wrap" }}>
            <span className="tag tag-secondary">🖥️ Hardware</span>
            <span className="tag tag-success">Deals Updated Daily</span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
              fontSize: "clamp(32px, 5vw, 52px)",
              color: "#fff",
              marginBottom: "8px",
            }}
          >
            Best Gaming Hardware Deals in India
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "15px",
              maxWidth: "560px",
              lineHeight: 1.7,
              marginBottom: "24px",
            }}
          >
            Curated deals on Flipkart & Amazon India — keyboards, mice, headsets, monitors,
            gaming phones. Updated daily by Karnataka gamers for Indian gamers.
          </p>

          {/* EMI Banner */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(0,200,83,.1)",
              border: "1px solid rgba(0,200,83,.2)",
              borderRadius: "var(--radius)",
              padding: "10px 16px",
            }}
          >
            <span>💳</span>
            <span style={{ color: "var(--text-secondary)", fontSize: "13px" }}>
              No-Cost EMI on orders above ₹5,000 · UPI 5% cashback · COD available
            </span>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
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
          {categories.map((c, i) => (
            <button key={c} className={`filter-chip${i === 0 ? " active" : ""}`}>
              {c}
            </button>
          ))}
          <div style={{ flex: 1 }} />
          <button className="filter-chip">
            Price: Low to High ▼
          </button>
          <button className="filter-chip">
            🔔 Alert me
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="container section">
        <div className="main-grid">
          {/* Left / main */}
          <div>
            <h2 className="section-title cyan">🔥 Hot Deals</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "16px",
                marginBottom: "40px",
              }}
            >
              {hotDeals.map((deal) => (
                <div key={deal.id} className="card deal-card">
                  <div className="deal-img" style={{ background: deal.gradient }}>
                    {deal.emoji}
                  </div>
                  <div className="deal-body">
                    <div className="tag tag-dark" style={{ marginBottom: "8px", fontSize: "10px" }}>
                      {deal.category}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#fff",
                        marginBottom: "8px",
                        lineHeight: 1.3,
                      }}
                    >
                      {deal.name}
                    </div>
                    <div className="deal-price">
                      <span className="deal-price-new">
                        ₹{deal.priceNew.toLocaleString("en-IN")}
                      </span>
                      <span className="deal-price-old">
                        ₹{deal.priceOld.toLocaleString("en-IN")}
                      </span>
                      <span className="deal-discount">{deal.discount}% off</span>
                    </div>
                    <div className="deal-rating" style={{ margin: "6px 0" }}>
                      {"★".repeat(Math.round(deal.rating))}
                      {"☆".repeat(5 - Math.round(deal.rating))}
                      <span
                        style={{
                          color: "var(--text-muted)",
                          fontSize: "11px",
                          marginLeft: "4px",
                        }}
                      >
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

            {/* PC Build Guide */}
            <h2 className="section-title purple">🖥️ PC Build Guide — 2026</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                marginBottom: "40px",
              }}
            >
              {pcBuilds.map((build) => (
                <div
                  key={build.tier}
                  className="card"
                  style={{
                    borderColor:
                      build.tier === "Mid-Range" ? "rgba(255,107,0,.25)" : undefined,
                  }}
                >
                  <div
                    style={{
                      height: "100px",
                      background: build.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "44px",
                    }}
                  >
                    {build.emoji}
                  </div>
                  <div className="card-body">
                    {build.tier === "Mid-Range" && (
                      <span className="tag tag-primary" style={{ marginBottom: "8px", display: "inline-flex" }}>
                        ⭐ Best Value
                      </span>
                    )}
                    <h3
                      style={{
                        fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
                        fontSize: "20px",
                        color: "#fff",
                        marginBottom: "4px",
                      }}
                    >
                      {build.tier}
                    </h3>
                    <div
                      style={{
                        fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
                        color: "var(--brand-primary)",
                        fontSize: "18px",
                        fontWeight: 700,
                        marginBottom: "12px",
                      }}
                    >
                      {build.budget}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {Object.entries(build.parts).map(([part, spec]) => (
                        <div
                          key={part}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: "12px",
                            paddingBottom: "5px",
                            borderBottom: "1px solid rgba(255,255,255,.05)",
                          }}
                        >
                          <span style={{ color: "var(--text-muted)" }}>{part}</span>
                          <span style={{ color: "var(--text-secondary)", fontWeight: 600, maxWidth: "120px", textAlign: "right" }}>
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div
                      style={{
                        marginTop: "12px",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "4px",
                      }}
                    >
                      {build.games.map((g) => (
                        <span key={g} className="tag tag-dark" style={{ fontSize: "10px" }}>
                          {g}
                        </span>
                      ))}
                    </div>
                    <button
                      className="btn btn-secondary btn-full"
                      style={{ marginTop: "14px", fontSize: "12px" }}
                    >
                      View Full Parts List →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Peripheral Buying Guide */}
            <h2 className="section-title">🛒 Peripheral Buying Guide</h2>
            <div
              style={{
                background: "var(--bg-surface)",
                border: "1px solid rgba(255,255,255,.06)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
              }}
            >
              {peripheralGuide.map((item, i) => (
                <div
                  key={item.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "14px 18px",
                    borderBottom:
                      i < peripheralGuide.length - 1
                        ? "1px solid rgba(255,255,255,.05)"
                        : "none",
                  }}
                >
                  <span style={{ fontSize: "28px", flexShrink: 0 }}>{item.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: "#fff", fontSize: "14px" }}>
                      {item.name}
                    </div>
                    <div style={{ color: "var(--text-secondary)", fontSize: "12px", marginTop: "2px" }}>
                      {item.rec}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
                      color: "var(--success)",
                      fontWeight: 700,
                      fontSize: "14px",
                      flexShrink: 0,
                    }}
                  >
                    {item.budget}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Price Alert */}
            <div
              className="sidebar-card"
              style={{
                background: "linear-gradient(135deg,rgba(0,200,83,.07),rgba(0,212,255,.04))",
                borderColor: "rgba(0,200,83,.2)",
              }}
            >
              <div style={{ fontSize: "36px", textAlign: "center", marginBottom: "10px" }}>🔔</div>
              <h3 style={{ textAlign: "center" }}>Price Drop Alerts</h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                  textAlign: "center",
                  marginBottom: "14px",
                  lineHeight: 1.6,
                }}
              >
                Get notified when your wishlist items drop in price on Flipkart or Amazon.
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                className="input"
                style={{ marginBottom: "8px" }}
              />
              <button className="btn btn-success btn-full">Enable Alerts</button>
            </div>

            {/* Where to Buy */}
            <div className="sidebar-card">
              <h3>🏪 Where to Buy in Bengaluru</h3>
              {[
                { name: "SP Road", desc: "Wholesale PC components & peripherals" },
                { name: "National Market", desc: "Laptops, pre-builds & accessories" },
                { name: "Croma Orion Mall", desc: "Gaming laptops & consoles" },
                { name: "Games2Win (Koramangala)", desc: "Gaming accessories & chairs" },
                { name: "SMR Mall (Electronics)", desc: "Budget peripherals & cables" },
              ].map((place) => (
                <div
                  key={place.name}
                  style={{
                    padding: "9px 0",
                    borderBottom: "1px solid rgba(255,255,255,.05)",
                  }}
                >
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: "13px" }}>
                    📍 {place.name}
                  </div>
                  <div style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "2px" }}>
                    {place.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* GST tip */}
            <div
              className="sidebar-card callout callout-info"
              style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.65 }}
            >
              <strong style={{ color: "#fff", display: "block", marginBottom: "6px" }}>
                💡 GST on Gaming Gear
              </strong>
              Gaming peripherals (keyboards, mice, headsets) attract 18% GST in India. Always buy
              from authorized sellers to claim warranty & GST invoice for business deductions.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
