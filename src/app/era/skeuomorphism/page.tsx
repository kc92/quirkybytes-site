"use client";

import { EraSlider } from "@/components/EraSlider";
import { siteContent } from "@/lib/content";

export default function SkeuomorphismEraPage() {
  const { company, services, portfolio, testimonials } = siteContent;

  return (
    <>
      <EraSlider />
      
      {/* Era 4: 2008-2012 - Skeuomorphism */}
      {/* Realistic textures, leather, wood, iOS-style, detailed shadows */}
      <div
        style={{
          minHeight: "100vh",
          paddingTop: "60px",
          background: "#c5ccd4",
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            )
          `,
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          color: "#333",
        }}
      >
        {/* Leather Header */}
        <header
          style={{
            background: `
              linear-gradient(180deg, #654321 0%, #3d2817 50%, #2d1810 100%)
            `,
            padding: "24px 20px",
            borderBottom: "4px solid #1a0f08",
            boxShadow: "0 4px 12px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.1)",
            position: "relative",
          }}
        >
          {/* Stitching effect */}
          <div
            style={{
              position: "absolute",
              top: "8px",
              left: "20px",
              right: "20px",
              height: "1px",
              backgroundImage: "repeating-linear-gradient(90deg, #8b7355 0px, #8b7355 4px, transparent 4px, transparent 8px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "8px",
              left: "20px",
              right: "20px",
              height: "1px",
              backgroundImage: "repeating-linear-gradient(90deg, #8b7355 0px, #8b7355 4px, transparent 4px, transparent 8px)",
            }}
          />
          
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                {/* App Icon Style Logo */}
                <div
                  style={{
                    width: "57px",
                    height: "57px",
                    background: "linear-gradient(180deg, #4cd964 0%, #2ecc40 50%, #27ae60 100%)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "32px",
                    boxShadow: `
                      0 4px 8px rgba(0,0,0,0.4),
                      inset 0 1px 0 rgba(255,255,255,0.4),
                      inset 0 -1px 0 rgba(0,0,0,0.2)
                    `,
                    border: "1px solid rgba(0,0,0,0.3)",
                  }}
                >
                  🌐
                </div>
                <div>
                  <h1
                    style={{
                      fontSize: "26px",
                      fontWeight: "500",
                      color: "#fff",
                      textShadow: "0 -1px 0 rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.1)",
                      margin: 0,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {company.name}
                  </h1>
                  <p style={{ fontSize: "13px", color: "#a89078", margin: 0, textShadow: "0 -1px 0 rgba(0,0,0,0.3)" }}>
                    {company.tagline}
                  </p>
                </div>
              </div>

              {/* Navigation Pills */}
              <nav
                style={{
                  display: "flex",
                  background: "rgba(0,0,0,0.3)",
                  borderRadius: "6px",
                  padding: "3px",
                  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)",
                }}
              >
                {["Home", "Services", "Work", "Contact"].map((item, i) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    style={{
                      padding: "8px 18px",
                      background: i === 0 
                        ? "linear-gradient(180deg, #6d8fad 0%, #4a6b8a 100%)"
                        : "transparent",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: "500",
                      borderRadius: "4px",
                      textShadow: "0 -1px 0 rgba(0,0,0,0.3)",
                      boxShadow: i === 0 ? "0 1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)" : "none",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content Area - Paper/Notepad Style */}
        <main style={{ maxWidth: "960px", margin: "40px auto", padding: "0 20px" }}>
          {/* Hero Card */}
          <section
            style={{
              background: "#fff",
              borderRadius: "8px",
              boxShadow: `
                0 1px 0 rgba(255,255,255,0.8),
                0 4px 12px rgba(0,0,0,0.15),
                0 1px 3px rgba(0,0,0,0.1)
              `,
              marginBottom: "30px",
              overflow: "hidden",
            }}
          >
            {/* Linen texture header */}
            <div
              style={{
                background: `
                  linear-gradient(180deg, #e8e4df 0%, #d8d4cf 100%)
                `,
                padding: "40px",
                textAlign: "center",
                borderBottom: "1px solid #c5c1bc",
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h6v6H0z' fill='%23d5d1cc' fill-opacity='.3'/%3E%3C/svg%3E")`,
              }}
            >
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "300",
                  color: "#333",
                  marginBottom: "12px",
                  textShadow: "0 1px 0 #fff",
                }}
              >
                Crafting Digital Experiences
              </h2>
              <p style={{ fontSize: "17px", color: "#666", maxWidth: "500px", margin: "0 auto 24px" }}>
                {company.description}
              </p>
              
              {/* iOS-style button */}
              <a
                href="#work"
                style={{
                  display: "inline-block",
                  padding: "12px 40px",
                  background: "linear-gradient(180deg, #4cd964 0%, #2ecc40 50%, #27ae60 100%)",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "17px",
                  fontWeight: "500",
                  borderRadius: "8px",
                  border: "1px solid #1d8348",
                  boxShadow: `
                    0 4px 8px rgba(0,0,0,0.2),
                    inset 0 1px 0 rgba(255,255,255,0.3)
                  `,
                  textShadow: "0 -1px 0 rgba(0,0,0,0.2)",
                }}
              >
                Explore Our Work
              </a>
            </div>
          </section>

          {/* Services - Notepad Style */}
          <section id="services" style={{ marginBottom: "30px" }}>
            <div
              style={{
                background: "#fffef5",
                borderRadius: "4px",
                boxShadow: `
                  0 1px 0 rgba(255,255,255,0.8),
                  0 4px 12px rgba(0,0,0,0.1),
                  inset 0 0 0 1px rgba(0,0,0,0.05)
                `,
                overflow: "hidden",
              }}
            >
              {/* Yellow header strip */}
              <div
                style={{
                  background: "linear-gradient(180deg, #fcf8b4 0%, #f5e87b 100%)",
                  padding: "16px 24px",
                  borderBottom: "1px solid #d4c85a",
                }}
              >
                <h3 style={{ fontSize: "18px", color: "#5a4a00", margin: 0, fontWeight: "600" }}>
                  📋 Our Services
                </h3>
              </div>
              
              {/* Lined paper content */}
              <div
                style={{
                  padding: "24px",
                  backgroundImage: `repeating-linear-gradient(
                    transparent,
                    transparent 27px,
                    #e0d9d0 27px,
                    #e0d9d0 28px
                  )`,
                  backgroundPosition: "0 8px",
                }}
              >
                {services.map((service, i) => (
                  <div
                    key={service.id}
                    style={{
                      display: "flex",
                      gap: "16px",
                      marginBottom: i < services.length - 1 ? "28px" : 0,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "linear-gradient(180deg, #007aff 0%, #0056b3 100%)",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                        flexShrink: 0,
                        boxShadow: `
                          0 2px 4px rgba(0,0,0,0.2),
                          inset 0 1px 0 rgba(255,255,255,0.3)
                        `,
                      }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "16px", color: "#333", marginBottom: "4px", fontWeight: "600" }}>
                        {service.name}
                      </h4>
                      <p style={{ fontSize: "14px", color: "#666", margin: 0, lineHeight: "1.5" }}>
                        {service.shortDesc} — <span style={{ color: "#007aff" }}>{service.price}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio - Photo Stack Style */}
          <section id="work" style={{ marginBottom: "30px" }}>
            <h3
              style={{
                fontSize: "20px",
                color: "#333",
                marginBottom: "20px",
                fontWeight: "300",
                textShadow: "0 1px 0 #fff",
              }}
            >
              Featured Projects
            </h3>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {portfolio.map((project, i) => (
                <div
                  key={project.id}
                  style={{
                    background: "#fff",
                    padding: "12px 12px 16px 12px",
                    borderRadius: "2px",
                    boxShadow: `
                      0 2px 8px rgba(0,0,0,0.15),
                      0 1px 2px rgba(0,0,0,0.1)
                    `,
                    transform: `rotate(${i === 0 ? -2 : i === 2 ? 2 : 0}deg)`,
                  }}
                >
                  <div
                    style={{
                      height: "140px",
                      background: project.id === "desperados-destiny"
                        ? "linear-gradient(135deg, #d4a76a 0%, #8b6914 100%)"
                        : project.id === "wardian"
                          ? "linear-gradient(135deg, #5a8fbe 0%, #2d5a8a 100%)"
                          : "linear-gradient(135deg, #9b6bb3 0%, #5a3d73 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "56px",
                      marginBottom: "12px",
                      boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
                    }}
                  >
                    {project.icon}
                  </div>
                  <h4 style={{ fontSize: "15px", color: "#333", marginBottom: "4px", fontWeight: "500" }}>
                    {project.name}
                  </h4>
                  <p style={{ fontSize: "12px", color: "#888", margin: 0 }}>
                    {project.shortDesc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials - Sticky Notes */}
          <section style={{ marginBottom: "30px" }}>
            <h3
              style={{
                fontSize: "20px",
                color: "#333",
                marginBottom: "20px",
                fontWeight: "300",
                textShadow: "0 1px 0 #fff",
              }}
            >
              Client Notes
            </h3>
            
            <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    width: "200px",
                    padding: "20px 16px",
                    background: i === 0 ? "#fff7a1" : i === 1 ? "#a1d9ff" : "#ffa1d9",
                    boxShadow: "2px 4px 8px rgba(0,0,0,0.2)",
                    transform: `rotate(${i === 0 ? -3 : i === 2 ? 3 : 0}deg)`,
                    fontFamily: "'Marker Felt', 'Comic Sans MS', cursive",
                  }}
                >
                  <p style={{ fontSize: "14px", color: "#333", marginBottom: "12px" }}>
                    &ldquo;{t.message}&rdquo;
                  </p>
                  <p style={{ fontSize: "12px", color: "#666" }}>
                    — {t.name}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact - Card Style */}
          <section id="contact">
            <div
              style={{
                background: "linear-gradient(180deg, #4a6b8a 0%, #3d5a73 100%)",
                borderRadius: "8px",
                padding: "40px",
                textAlign: "center",
                boxShadow: `
                  0 4px 12px rgba(0,0,0,0.2),
                  inset 0 1px 0 rgba(255,255,255,0.1)
                `,
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  color: "#fff",
                  marginBottom: "12px",
                  fontWeight: "300",
                  textShadow: "0 -1px 0 rgba(0,0,0,0.3)",
                }}
              >
                Let&apos;s Build Something Amazing
              </h3>
              <p style={{ fontSize: "15px", color: "#b8d0e8", marginBottom: "24px" }}>
                Ready to bring your vision to life? Submit an inquiry.
              </p>
              <a
                href="/contact?era=skeuomorphism"
                style={{
                  display: "inline-block",
                  padding: "14px 36px",
                  background: "linear-gradient(180deg, #fff 0%, #e8e8e8 100%)",
                  color: "#333",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "500",
                  borderRadius: "8px",
                  boxShadow: `
                    0 4px 8px rgba(0,0,0,0.3),
                    inset 0 1px 0 rgba(255,255,255,0.8)
                  `,
                }}
              >
                Submit Inquiry
              </a>
              <p style={{ fontSize: "13px", color: "#8aa8c8", marginTop: "16px" }}>
                You&apos;ll receive a response from @quirkybytes.com
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer
          style={{
            background: `linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%)`,
            padding: "30px 20px",
            textAlign: "center",
            borderTop: "1px solid #444",
          }}
        >
          <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>
            © 2008-2026 {company.name}. All rights reserved.
          </p>
          <p style={{ fontSize: "11px", color: "#555" }}>
            Designed for iPhone • iPad • iPod touch
          </p>
        </footer>
      </div>
    </>
  );
}
