"use client";

import { EraSlider } from "@/components/EraSlider";
import { siteContent } from "@/lib/content";

export default function FlatEraPage() {
  const { company, services, portfolio, testimonials } = siteContent;

  // Flat UI Colors
  const colors = {
    turquoise: "#1abc9c",
    emerald: "#2ecc71",
    peterRiver: "#3498db",
    amethyst: "#9b59b6",
    wetAsphalt: "#34495e",
    sunFlower: "#f1c40f",
    carrot: "#e67e22",
    alizarin: "#e74c3c",
    clouds: "#ecf0f1",
    concrete: "#95a5a6",
  };

  return (
    <>
      <EraSlider />
      
      {/* Era 5: 2013-2017 - Flat Design */}
      {/* No shadows, bold colors, simple shapes, lots of whitespace, ghost buttons */}
      <div
        style={{
          minHeight: "100vh",
          paddingTop: "60px",
          background: "#fff",
          fontFamily: "'Open Sans', 'Roboto', -apple-system, sans-serif",
          color: colors.wetAsphalt,
        }}
      >
        {/* Clean Header */}
        <header
          style={{
            background: colors.peterRiver,
            padding: "0 20px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "70px",
            }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  background: "#fff",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                🌐
              </div>
              <span style={{ fontSize: "22px", fontWeight: "700", color: "#fff" }}>
                {company.name}
              </span>
            </div>

            {/* Navigation */}
            <nav style={{ display: "flex", gap: "32px" }}>
              {["Home", "Services", "Work", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* Hero Section - Big Bold */}
        <section
          style={{
            background: colors.peterRiver,
            padding: "100px 20px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "300",
                color: "#fff",
                marginBottom: "24px",
                lineHeight: "1.2",
              }}
            >
              We Build <span style={{ fontWeight: "700" }}>Amazing</span> Digital Products
            </h1>
            <p
              style={{
                fontSize: "20px",
                color: "rgba(255,255,255,0.85)",
                marginBottom: "40px",
                lineHeight: "1.6",
              }}
            >
              {company.description}
            </p>
            
            {/* Ghost Buttons */}
            <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
              <a
                href="#work"
                style={{
                  display: "inline-block",
                  padding: "16px 40px",
                  background: "#fff",
                  color: colors.peterRiver,
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  borderRadius: "4px",
                }}
              >
                View Work
              </a>
              <a
                href="#contact"
                style={{
                  display: "inline-block",
                  padding: "16px 40px",
                  background: "transparent",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  borderRadius: "4px",
                  border: "2px solid #fff",
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Services - Card Grid */}
        <section id="services" style={{ padding: "100px 20px", background: colors.clouds }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "300",
                  color: colors.wetAsphalt,
                  marginBottom: "16px",
                }}
              >
                What We Do
              </h2>
              <p style={{ fontSize: "18px", color: colors.concrete }}>
                Services tailored to your digital needs
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "24px",
              }}
            >
              {services.map((service, i) => {
                const serviceColors = [colors.turquoise, colors.emerald, colors.amethyst, colors.carrot];
                return (
                  <div
                    key={service.id}
                    style={{
                      background: "#fff",
                      padding: "40px 24px",
                      textAlign: "center",
                      borderTop: `4px solid ${serviceColors[i]}`,
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        background: serviceColors[i],
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "36px",
                        margin: "0 auto 24px",
                      }}
                    >
                      {service.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: colors.wetAsphalt,
                        marginBottom: "12px",
                      }}
                    >
                      {service.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: colors.concrete,
                        lineHeight: "1.6",
                        marginBottom: "16px",
                      }}
                    >
                      {service.shortDesc}
                    </p>
                    <span style={{ fontSize: "16px", fontWeight: "700", color: serviceColors[i] }}>
                      {service.price}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Portfolio - Metro Tiles */}
        <section id="work" style={{ padding: "100px 20px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "300",
                  color: colors.wetAsphalt,
                  marginBottom: "16px",
                }}
              >
                Our Work
              </h2>
              <p style={{ fontSize: "18px", color: colors.concrete }}>
                Projects we&apos;re proud of
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "4px",
              }}
            >
              {portfolio.map((project, i) => {
                const tileColors = [colors.carrot, colors.peterRiver, colors.amethyst];
                return (
                  <div
                    key={project.id}
                    style={{
                      background: tileColors[i],
                      padding: "60px 30px",
                      color: "#fff",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ fontSize: "64px", marginBottom: "20px", opacity: 0.3 }}>
                      {project.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        marginBottom: "8px",
                      }}
                    >
                      {project.name}
                    </h3>
                    <p style={{ fontSize: "14px", opacity: 0.9 }}>
                      {project.shortDesc}
                    </p>
                    <div
                      style={{
                        marginTop: "20px",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        opacity: 0.7,
                      }}
                    >
                      {project.status === "live" ? "● Live" : "◐ Coming Soon"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials - Minimal */}
        <section style={{ padding: "100px 20px", background: colors.wetAsphalt }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "300",
                  color: "#fff",
                  marginBottom: "16px",
                }}
              >
                Client Love
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: colors.turquoise,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      margin: "0 auto 20px",
                      color: "#fff",
                      fontWeight: "700",
                    }}
                  >
                    {t.name.charAt(0).toUpperCase()}
                  </div>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: "1.7",
                      marginBottom: "16px",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{t.message}&rdquo;
                  </p>
                  <p style={{ fontSize: "14px", color: colors.concrete, fontWeight: "600" }}>
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact - Full Width Color Block */}
        <section id="contact" style={{ padding: "100px 20px", background: colors.emerald }}>
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "300",
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              Let&apos;s Talk
            </h2>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.9)", marginBottom: "40px" }}>
              Have a project in mind? Submit an inquiry and we&apos;ll get back to you.
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <a
                href="/contact?era=flat"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "16px 32px",
                  background: "#fff",
                  color: colors.emerald,
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  borderRadius: "4px",
                }}
              >
                ✉️ Submit Inquiry
              </a>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                You&apos;ll receive a response from @quirkybytes.com
              </p>
            </div>
          </div>
        </section>

        {/* Footer - Minimal */}
        <footer
          style={{
            background: colors.wetAsphalt,
            padding: "40px 20px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginBottom: "24px" }}>
              {["📧", "💬", "📰", "🐦"].map((icon, i) => (
                <span
                  key={i}
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                  }}
                >
                  {icon}
                </span>
              ))}
            </div>
            <p style={{ fontSize: "14px", color: colors.concrete }}>
              © 2013-2026 {company.name}. Made with ❤️
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
