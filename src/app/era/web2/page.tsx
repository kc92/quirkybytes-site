"use client";

import { EraSlider } from "@/components/EraSlider";
import { siteContent } from "@/lib/content";

export default function Web2EraPage() {
  const { company, services, portfolio, testimonials } = siteContent;

  return (
    <>
      <EraSlider />
      
      {/* Era 3: 2003-2007 - Web 2.0 */}
      {/* Glossy buttons, rounded corners, gradients, reflections, "Beta" badges */}
      <div
        style={{
          minHeight: "100vh",
          paddingTop: "60px",
          background: "linear-gradient(180deg, #e8f4fc 0%, #ffffff 100%)",
          fontFamily: "'Lucida Grande', 'Trebuchet MS', Verdana, sans-serif",
          color: "#333",
        }}
      >
        {/* Header */}
        <header
          style={{
            background: "linear-gradient(180deg, #4a90c2 0%, #2d6da3 100%)",
            padding: "20px 0",
            borderBottom: "3px solid #1a4d73",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {/* Logo */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "linear-gradient(135deg, #ff9500 0%, #ff5e00 100%)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                  }}
                >
                  🌐
                </div>
                <div>
                  <h1
                    style={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      color: "#fff",
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      margin: 0,
                    }}
                  >
                    {company.name}
                    <sup
                      style={{
                        fontSize: "10px",
                        background: "linear-gradient(180deg, #ff6b6b 0%, #ee5a5a 100%)",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        marginLeft: "6px",
                        verticalAlign: "top",
                      }}
                    >
                      BETA
                    </sup>
                  </h1>
                  <p style={{ fontSize: "12px", color: "#b8d4e8", margin: 0 }}>
                    {company.tagline}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <nav style={{ display: "flex", gap: "4px" }}>
                {["Home", "Services", "Portfolio", "Contact"].map((item, i) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    style={{
                      padding: "8px 16px",
                      background: i === 0 
                        ? "linear-gradient(180deg, #fff 0%, #e0e0e0 100%)"
                        : "transparent",
                      color: i === 0 ? "#333" : "#fff",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: "bold",
                      borderRadius: "6px 6px 0 0",
                      border: i === 0 ? "1px solid #ccc" : "none",
                      borderBottom: "none",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section
          style={{
            background: "linear-gradient(180deg, #fff 0%, #f5f5f5 100%)",
            padding: "60px 20px",
            textAlign: "center",
            borderBottom: "1px solid #ddd",
          }}
        >
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "42px",
                color: "#2d6da3",
                marginBottom: "16px",
                fontWeight: "normal",
                textShadow: "0 1px 0 #fff",
              }}
            >
              Building the Web, <span style={{ fontStyle: "italic" }}>Together</span>
            </h2>
            <p style={{ fontSize: "18px", color: "#666", lineHeight: "1.6", marginBottom: "30px" }}>
              {company.description} Join thousands of satisfied clients who have discovered the power of Web 2.0.
            </p>
            
            {/* Glossy Buttons */}
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <a
                href="#portfolio"
                style={{
                  display: "inline-block",
                  padding: "14px 32px",
                  background: "linear-gradient(180deg, #6cb533 0%, #4a9119 50%, #3d7a14 100%)",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  border: "1px solid #2d5a0d",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
                  textShadow: "0 -1px 0 rgba(0,0,0,0.3)",
                }}
              >
                View Our Work →
              </a>
              <a
                href="#contact"
                style={{
                  display: "inline-block",
                  padding: "14px 32px",
                  background: "linear-gradient(180deg, #fff 0%, #f0f0f0 50%, #ddd 100%)",
                  color: "#333",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  border: "1px solid #bbb",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 20px" }}>
          {/* Features/Services */}
          <section id="services" style={{ marginBottom: "60px" }}>
            <h3
              style={{
                fontSize: "24px",
                color: "#2d6da3",
                marginBottom: "30px",
                paddingBottom: "10px",
                borderBottom: "2px solid #ddd",
              }}
            >
              Our Services
            </h3>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
              {services.map((service) => (
                <div
                  key={service.id}
                  style={{
                    background: "linear-gradient(180deg, #fff 0%, #f9f9f9 100%)",
                    border: "1px solid #ddd",
                    borderRadius: "12px",
                    padding: "24px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #4a90c2 0%, #2d6da3 100%)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "28px",
                      marginBottom: "16px",
                      boxShadow: "0 3px 6px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h4 style={{ fontSize: "18px", color: "#333", marginBottom: "8px" }}>
                    {service.name}
                  </h4>
                  <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.5", marginBottom: "12px" }}>
                    {service.longDesc}
                  </p>
                  <p style={{ fontSize: "13px", color: "#4a90c2", fontWeight: "bold" }}>
                    {service.price}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Portfolio */}
          <section id="portfolio" style={{ marginBottom: "60px" }}>
            <h3
              style={{
                fontSize: "24px",
                color: "#2d6da3",
                marginBottom: "30px",
                paddingBottom: "10px",
                borderBottom: "2px solid #ddd",
              }}
            >
              Featured Projects
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              {portfolio.map((project) => (
                <div
                  key={project.id}
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid #ddd",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Project Image */}
                  <div
                    style={{
                      height: "120px",
                      background: project.id === "desperados-destiny"
                        ? "linear-gradient(135deg, #c9a227 0%, #8b6914 100%)"
                        : project.id === "wardian"
                          ? "linear-gradient(135deg, #4a90c2 0%, #2d5a8a 100%)"
                          : "linear-gradient(135deg, #7b4bb3 0%, #4a2d73 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "48px",
                      position: "relative",
                    }}
                  >
                    {project.icon}
                    {/* Reflection effect */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "40px",
                        background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.2) 100%)",
                      }}
                    />
                  </div>
                  
                  <div style={{ padding: "16px" }}>
                    <h4 style={{ fontSize: "16px", color: "#333", marginBottom: "4px" }}>
                      {project.name}
                    </h4>
                    <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>
                      {project.shortDesc}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span
                        style={{
                          fontSize: "11px",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          background: project.status === "live" 
                            ? "linear-gradient(180deg, #6cb533 0%, #4a9119 100%)"
                            : "linear-gradient(180deg, #ffb347 0%, #ff9500 100%)",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      >
                        {project.status === "live" ? "● Live" : "◐ Coming Soon"}
                      </span>
                      <span style={{ fontSize: "12px", color: "#999" }}>{project.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section style={{ marginBottom: "60px" }}>
            <h3
              style={{
                fontSize: "24px",
                color: "#2d6da3",
                marginBottom: "30px",
                paddingBottom: "10px",
                borderBottom: "2px solid #ddd",
              }}
            >
              What People Are Saying
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    background: "linear-gradient(180deg, #fffef5 0%, #fff9e6 100%)",
                    border: "1px solid #e6d9a8",
                    borderRadius: "8px",
                    padding: "20px",
                  }}
                >
                  <div style={{ display: "flex", marginBottom: "12px" }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} style={{ color: "#ffb347", fontSize: "16px" }}>★</span>
                    ))}
                  </div>
                  <p style={{ fontSize: "14px", color: "#555", fontStyle: "italic", marginBottom: "12px" }}>
                    &ldquo;{t.message}&rdquo;
                  </p>
                  <p style={{ fontSize: "12px", color: "#888", fontWeight: "bold" }}>
                    — {t.name}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact">
            <h3
              style={{
                fontSize: "24px",
                color: "#2d6da3",
                marginBottom: "30px",
                paddingBottom: "10px",
                borderBottom: "2px solid #ddd",
              }}
            >
              Get In Touch
            </h3>

            <div
              style={{
                background: "linear-gradient(180deg, #f5f9fc 0%, #e8f0f5 100%)",
                border: "1px solid #c8dbe8",
                borderRadius: "12px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "18px", color: "#555", marginBottom: "24px" }}>
                Ready to start your next project? Submit an inquiry!
              </p>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <a
                  href="/contact?era=web2"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    background: "linear-gradient(180deg, #4a90c2 0%, #2d6da3 100%)",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    border: "1px solid #1a4d73",
                    boxShadow: "0 3px 6px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  ✉️ Submit Inquiry
                </a>
                <p style={{ fontSize: "13px", color: "#888" }}>
                  You&apos;ll receive a response from @quirkybytes.com
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer
          style={{
            background: "linear-gradient(180deg, #3d3d3d 0%, #2d2d2d 100%)",
            color: "#999",
            padding: "40px 20px",
            textAlign: "center",
            borderTop: "3px solid #555",
          }}
        >
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            {/* Social icons row */}
            <div style={{ marginBottom: "20px" }}>
              {["📧", "💬", "📰"].map((icon, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-flex",
                    width: "36px",
                    height: "36px",
                    background: "linear-gradient(180deg, #555 0%, #444 100%)",
                    borderRadius: "6px",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 6px",
                    fontSize: "18px",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}
                >
                  {icon}
                </span>
              ))}
            </div>
            
            <p style={{ fontSize: "12px", marginBottom: "8px" }}>
              © 2003-2026 {company.name}. All rights reserved.
            </p>
            <p style={{ fontSize: "11px", color: "#666" }}>
              Powered by AJAX • Valid XHTML 1.0 • RSS 2.0 Feed Available
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
