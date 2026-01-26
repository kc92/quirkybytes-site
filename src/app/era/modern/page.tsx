"use client";

import { EraSlider } from "@/components/EraSlider";
import { siteContent } from "@/lib/content";

export default function ModernEraPage() {
  const { company, services, portfolio, testimonials } = siteContent;

  return (
    <>
      <EraSlider />
      
      {/* Era 6: 2018-2022 - Modern Dark / Neubrutalism / Glassmorphism */}
      {/* Dark mode, glassmorphism, bold type, gradients, blob shapes */}
      <div
        style={{
          minHeight: "100vh",
          paddingTop: "60px",
          background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d0d1f 100%)",
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background blob shapes */}
        <div
          style={{
            position: "fixed",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
            top: "-200px",
            right: "-200px",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "fixed",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)",
            bottom: "-150px",
            left: "-150px",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        {/* Glassmorphism Header */}
        <header
          style={{
            position: "sticky",
            top: "50px",
            zIndex: 100,
            padding: "0 24px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "16px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                🌐
              </div>
              <span style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "-0.5px" }}>
                {company.name}
              </span>
            </div>

            {/* Navigation */}
            <nav style={{ display: "flex", gap: "8px" }}>
              {["Home", "Services", "Work", "Contact"].map((item, i) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    padding: "10px 20px",
                    background: i === 0 ? "rgba(139,92,246,0.2)" : "transparent",
                    color: i === 0 ? "#a78bfa" : "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "500",
                    borderRadius: "8px",
                    transition: "all 0.2s",
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* Hero Section - Bold Typography */}
        <section style={{ padding: "120px 24px", position: "relative" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ maxWidth: "800px" }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  background: "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(236,72,153,0.2) 100%)",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#a78bfa",
                  marginBottom: "24px",
                  border: "1px solid rgba(139,92,246,0.3)",
                }}
              >
                ✨ Digital Studio
              </div>
              
              <h1
                style={{
                  fontSize: "72px",
                  fontWeight: "800",
                  lineHeight: "1.05",
                  marginBottom: "24px",
                  letterSpacing: "-2px",
                  background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                We craft digital experiences that{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  matter
                </span>
              </h1>
              
              <p
                style={{
                  fontSize: "20px",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: "1.7",
                  marginBottom: "40px",
                  maxWidth: "600px",
                }}
              >
                {company.description}
              </p>
              
              {/* Modern Buttons */}
              <div style={{ display: "flex", gap: "16px" }}>
                <a
                  href="#work"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "16px 32px",
                    background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: "600",
                    borderRadius: "12px",
                  }}
                >
                  View Work <span>→</span>
                </a>
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "16px 32px",
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: "600",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Bento Grid */}
        <section id="services" style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#8b5cf6",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                Services
              </h2>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: "700",
                  letterSpacing: "-1px",
                }}
              >
                What we do best
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
              }}
            >
              {services.map((service, i) => (
                <div
                  key={service.id}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    padding: "32px",
                    gridColumn: i === 0 ? "span 2" : "span 1",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      background: `linear-gradient(135deg, ${i % 2 === 0 ? "#8b5cf6" : "#ec4899"} 0%, ${i % 2 === 0 ? "#6366f1" : "#f472b6"} 100%)`,
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "28px",
                      marginBottom: "20px",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: i === 0 ? "28px" : "22px",
                      fontWeight: "700",
                      marginBottom: "12px",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: "1.6",
                      marginBottom: "16px",
                    }}
                  >
                    {service.longDesc}
                  </p>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#8b5cf6",
                    }}
                  >
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio - Cards with Hover */}
        <section id="work" style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#ec4899",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                Portfolio
              </h2>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: "700",
                  letterSpacing: "-1px",
                }}
              >
                Recent projects
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
            >
              {portfolio.map((project) => (
                <div
                  key={project.id}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                >
                  <div
                    style={{
                      height: "200px",
                      background: project.id === "desperados-destiny"
                        ? "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
                        : project.id === "wardian"
                          ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
                          : "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "72px",
                    }}
                  >
                    {project.icon}
                  </div>
                  <div style={{ padding: "24px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <h3 style={{ fontSize: "20px", fontWeight: "700" }}>
                        {project.name}
                      </h3>
                      <span
                        style={{
                          fontSize: "12px",
                          padding: "4px 12px",
                          background: project.status === "live"
                            ? "rgba(34,197,94,0.2)"
                            : "rgba(234,179,8,0.2)",
                          color: project.status === "live" ? "#22c55e" : "#eab308",
                          borderRadius: "100px",
                          fontWeight: "500",
                        }}
                      >
                        {project.status === "live" ? "Live" : "Soon"}
                      </span>
                    </div>
                    <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)" }}>
                      {project.shortDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ marginBottom: "48px", textAlign: "center" }}>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "700",
                  letterSpacing: "-1px",
                }}
              >
                Loved by clients
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    padding: "24px",
                  }}
                >
                  <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} style={{ color: "#fbbf24", fontSize: "16px" }}>★</span>
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: "1.7",
                      marginBottom: "16px",
                    }}
                  >
                    &ldquo;{t.message}&rdquo;
                  </p>
                  <p style={{ fontSize: "14px", fontWeight: "600", color: "#8b5cf6" }}>
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(236,72,153,0.2) 100%)",
                border: "1px solid rgba(139,92,246,0.3)",
                borderRadius: "24px",
                padding: "64px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "42px",
                  fontWeight: "800",
                  marginBottom: "16px",
                  letterSpacing: "-1px",
                }}
              >
                Got a project?
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: "32px",
                }}
              >
                Tell us what you need. We&apos;ll tell you if we can help.
              </p>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <a
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "16px 32px",
                    background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: "600",
                    borderRadius: "12px",
                  }}
                >
                  ✉️ Submit Inquiry
                </a>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>
                  You&apos;ll receive a response from @quirkybytes.com
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            padding: "40px 24px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
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
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>
              © 2018-2026 {company.name}
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              {["Twitter", "Discord", "GitHub"].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.4)",
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
