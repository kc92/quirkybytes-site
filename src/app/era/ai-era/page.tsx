"use client";

import { EraSlider } from "@/components/EraSlider";
import { siteContent } from "@/lib/content";
import { useState } from "react";

export default function AIEraPage() {
  const { company, services, portfolio, testimonials } = siteContent;
  const [isDark, setIsDark] = useState(false);

  const theme = {
    bg: isDark ? "#0a0a0a" : "#fafafa",
    surface: isDark ? "#141414" : "#ffffff",
    surfaceAlt: isDark ? "#1a1a1a" : "#f5f5f5",
    border: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
    text: isDark ? "#ffffff" : "#0a0a0a",
    textMuted: isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
    accent: "#2563eb",
    accentLight: isDark ? "rgba(37,99,235,0.15)" : "rgba(37,99,235,0.08)",
  };

  return (
    <>
      <EraSlider />
      
      {/* Era 7: 2023+ - AI Era */}
      {/* Ultra-clean, accessible, intelligent, light/dark mode, bento boxes */}
      <div
        style={{
          minHeight: "100vh",
          paddingTop: "60px",
          background: theme.bg,
          fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
          color: theme.text,
          transition: "background 0.3s, color 0.3s",
        }}
      >
        {/* Clean Header */}
        <header
          style={{
            position: "sticky",
            top: "50px",
            zIndex: 100,
            padding: "12px 24px",
            background: theme.bg,
            borderBottom: `1px solid ${theme.border}`,
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: theme.accent,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                🌐
              </div>
              <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-0.3px" }}>
                {company.name}
              </span>
            </div>

            {/* Nav + Theme Toggle */}
            <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
              <nav style={{ display: "flex", gap: "24px" }}>
                {["Services", "Work", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: theme.textMuted,
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </nav>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                style={{
                  width: "36px",
                  height: "36px",
                  background: theme.surfaceAlt,
                  border: `1px solid ${theme.border}`,
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-label="Toggle dark mode"
              >
                {isDark ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </header>

        {/* Hero - Clean and Focused */}
        <section style={{ padding: "100px 24px 80px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            {/* AI Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 14px",
                background: theme.accentLight,
                borderRadius: "100px",
                fontSize: "13px",
                fontWeight: "500",
                color: theme.accent,
                marginBottom: "24px",
              }}
            >
              <span style={{ fontSize: "14px" }}>✨</span>
              AI-Powered Digital Studio
            </div>
            
            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: "700",
                lineHeight: "1.15",
                marginBottom: "20px",
                letterSpacing: "-1.5px",
              }}
            >
              Building the future,
              <br />
              <span style={{ color: theme.accent }}>one pixel at a time</span>
            </h1>
            
            <p
              style={{
                fontSize: "18px",
                color: theme.textMuted,
                lineHeight: "1.7",
                marginBottom: "36px",
                maxWidth: "560px",
                margin: "0 auto 36px",
              }}
            >
              {company.description} Powered by modern tech and a passion for craft.
            </p>
            
            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  background: theme.accent,
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "600",
                  borderRadius: "10px",
                }}
              >
                Start a Project
              </a>
              <a
                href="#work"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  background: theme.surface,
                  color: theme.text,
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "600",
                  borderRadius: "10px",
                  border: `1px solid ${theme.border}`,
                }}
              >
                View Work
              </a>
            </div>
          </div>
        </section>

        {/* Services - Bento Grid */}
        <section id="services" style={{ padding: "60px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ marginBottom: "40px" }}>
              <p style={{ fontSize: "13px", fontWeight: "600", color: theme.accent, marginBottom: "8px" }}>
                SERVICES
              </p>
              <h2 style={{ fontSize: "28px", fontWeight: "700", letterSpacing: "-0.5px" }}>
                What we offer
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(2, auto)",
                gap: "12px",
              }}
            >
              {services.map((service, i) => (
                <div
                  key={service.id}
                  style={{
                    background: theme.surface,
                    border: `1px solid ${theme.border}`,
                    borderRadius: "16px",
                    padding: "24px",
                    gridColumn: i === 0 ? "span 2" : "span 1",
                    gridRow: i === 0 ? "span 2" : "span 1",
                  }}
                >
                  <div
                    style={{
                      width: i === 0 ? "56px" : "44px",
                      height: i === 0 ? "56px" : "44px",
                      background: theme.accentLight,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: i === 0 ? "28px" : "22px",
                      marginBottom: "16px",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: i === 0 ? "22px" : "17px",
                      fontWeight: "600",
                      marginBottom: "8px",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: theme.textMuted,
                      lineHeight: "1.6",
                      marginBottom: i === 0 ? "16px" : "12px",
                    }}
                  >
                    {i === 0 ? service.longDesc : service.shortDesc}
                  </p>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: theme.accent }}>
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio - Clean Cards */}
        <section id="work" style={{ padding: "60px 24px", background: theme.surfaceAlt }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ marginBottom: "40px" }}>
              <p style={{ fontSize: "13px", fontWeight: "600", color: theme.accent, marginBottom: "8px" }}>
                PORTFOLIO
              </p>
              <h2 style={{ fontSize: "28px", fontWeight: "700", letterSpacing: "-0.5px" }}>
                Featured work
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              {portfolio.map((project) => (
                <div
                  key={project.id}
                  style={{
                    background: theme.surface,
                    border: `1px solid ${theme.border}`,
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "180px",
                      background: project.id === "desperados-destiny"
                        ? "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)"
                        : project.id === "wardian"
                          ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
                          : "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "64px",
                    }}
                  >
                    {project.icon}
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <h3 style={{ fontSize: "17px", fontWeight: "600" }}>
                        {project.name}
                      </h3>
                      <span
                        style={{
                          fontSize: "12px",
                          padding: "4px 10px",
                          background: project.status === "live"
                            ? "rgba(34,197,94,0.1)"
                            : "rgba(234,179,8,0.1)",
                          color: project.status === "live" ? "#16a34a" : "#ca8a04",
                          borderRadius: "6px",
                          fontWeight: "500",
                        }}
                      >
                        {project.status === "live" ? "Live" : "Soon"}
                      </span>
                    </div>
                    <p style={{ fontSize: "14px", color: theme.textMuted }}>
                      {project.shortDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Minimal */}
        <section style={{ padding: "60px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ marginBottom: "40px", textAlign: "center" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "700", letterSpacing: "-0.5px" }}>
                What clients say
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    background: theme.surface,
                    border: `1px solid ${theme.border}`,
                    borderRadius: "12px",
                    padding: "20px",
                  }}
                >
                  <div style={{ display: "flex", gap: "2px", marginBottom: "12px" }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} style={{ color: "#fbbf24", fontSize: "14px" }}>★</span>
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: theme.textMuted,
                      lineHeight: "1.6",
                      marginBottom: "12px",
                    }}
                  >
                    &ldquo;{t.message}&rdquo;
                  </p>
                  <p style={{ fontSize: "13px", fontWeight: "600" }}>
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact - Simple */}
        <section id="contact" style={{ padding: "60px 24px", background: theme.surfaceAlt }}>
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "12px",
                letterSpacing: "-0.5px",
              }}
            >
              Ready to start?
            </h2>
            <p style={{ fontSize: "16px", color: theme.textMuted, marginBottom: "28px" }}>
              Let&apos;s discuss your next project. We respond within 24 hours.
            </p>
            
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <a
                href={`mailto:${company.email}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  background: theme.accent,
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "600",
                  borderRadius: "10px",
                }}
              >
                ✉️ Email Us
              </a>
              <a
                href={company.discord}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  background: theme.surface,
                  color: theme.text,
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "600",
                  borderRadius: "10px",
                  border: `1px solid ${theme.border}`,
                }}
              >
                💬 Discord
              </a>
            </div>
          </div>
        </section>

        {/* Footer - Minimal */}
        <footer
          style={{
            padding: "32px 24px",
            borderTop: `1px solid ${theme.border}`,
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "13px", color: theme.textMuted }}>
              © 2023-2026 {company.name}. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              {["Privacy", "Terms", "Accessibility"].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    fontSize: "13px",
                    color: theme.textMuted,
                    textDecoration: "none",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
