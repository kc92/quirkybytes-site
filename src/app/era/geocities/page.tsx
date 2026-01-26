"use client";

import { EraSlider } from "@/components/EraSlider";
import { Window, Button, Badge, Marquee, MarqueeItem, FancyHR, VisitorCounter } from "@/components/ui";
import { CRTEffect } from "@/components/effects/CRTEffect";
import { MouseTrail } from "@/components/effects/MouseTrail";

export default function GeocitiesEraPage() {
  return (
    <>
      <EraSlider />
      <CRTEffect />
      <MouseTrail />
      
      <main style={{ minHeight: "100vh", paddingTop: "50px", backgroundColor: "#000033", backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000066' fill-opacity='0.4'%3E%3Cpath d='M20 20.5V1h1v19.5h18.5v1H21v18.5h-1V21.5H1v-1h19.5z'/%3E%3C/g%3E%3C/svg%3E")` }}>
        {/* Marquee Banner */}
        <Marquee>
          <MarqueeItem>★ WELCOME TO QUIRKYBYTES ★</MarqueeItem>
          <MarqueeItem hot>HOT!</MarqueeItem>
          <MarqueeItem>DIGITAL STUDIO</MarqueeItem>
          <MarqueeItem>★ WEBSITES ★ APPS ★ GAMES ★</MarqueeItem>
          <MarqueeItem hot>NEW!</MarqueeItem>
          <MarqueeItem>HIRE US TODAY!</MarqueeItem>
        </Marquee>

        {/* Under Construction Banner */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            padding: "8px",
            background: "repeating-linear-gradient(45deg, #ffcc00, #ffcc00 10px, #000 10px, #000 20px)",
          }}
        >
          <span style={{ fontSize: "24px" }}>🚧</span>
          <span className="hot-badge" style={{ fontSize: "12px", padding: "6px 12px" }}>
            SITE UNDER CONSTRUCTION
          </span>
          <span style={{ fontSize: "24px" }}>👷</span>
          <span className="hot-badge" style={{ fontSize: "12px", padding: "6px 12px" }}>
            PARDON OUR DUST
          </span>
          <span style={{ fontSize: "24px" }}>🚧</span>
        </div>

        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
          {/* Hero Window */}
          <Window title="🌐 QuirkyBytes Digital Studio - Welcome!">
            <div
              style={{
                background: "linear-gradient(to bottom, #000033, #000066)",
                textAlign: "center",
                padding: "48px 24px",
              }}
            >
              <div className="animate-spin3d" style={{ fontSize: "60px", marginBottom: "16px", display: "inline-block" }}>
                🌐
              </div>
              <h1
                className="animate-glow"
                style={{
                  fontFamily: "'Silkscreen', monospace",
                  fontSize: "32px",
                  color: "#00ffff",
                  marginBottom: "16px",
                  letterSpacing: "2px",
                }}
              >
                QUIRKYBYTES
              </h1>
              <p style={{ fontFamily: "'VT323', monospace", fontSize: "28px", color: "#00ff00", marginBottom: "16px" }}>
                [ DIGITAL STUDIO ] <span className="hot-badge">HOT!</span>
              </p>
              <p style={{ fontFamily: "'VT323', monospace", fontSize: "22px", color: "#fff", maxWidth: "500px", margin: "0 auto 32px" }}>
                We build websites, apps, and games that stand out. Quality work. No shortcuts.
              </p>
              <FancyHR />
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <Button href="#work" variant="hot">👁️ VIEW OUR WORK</Button>
                <Button href="#contact">📧 HIRE US</Button>
              </div>
            </div>
          </Window>

          {/* Awards Section */}
          <Window title="🏆 Awards">
            <div style={{ padding: "20px", backgroundColor: "#c0c0c0" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
                {[
                  { icon: "🏆", title: "BEST OF WEB", subtitle: "1999" },
                  { icon: "⭐", title: "5 STAR SITE", subtitle: "AWARD" },
                  { icon: "🎖️", title: "COOL SITE", subtitle: "OF THE DAY" },
                  { icon: "💎", title: "WEBMASTER", subtitle: "EXCELLENCE" },
                ].map((award, i) => (
                  <div
                    key={i}
                    style={{
                      background: "linear-gradient(to bottom, #fcd34d, #ca8a04)",
                      border: "3px solid #92400e",
                      padding: "16px 20px",
                      textAlign: "center",
                      boxShadow: "4px 4px 0 rgba(0,0,0,0.3)",
                      minWidth: "120px",
                    }}
                  >
                    <div style={{ fontSize: "36px", marginBottom: "8px" }}>{award.icon}</div>
                    <div style={{ fontFamily: "'Silkscreen', monospace", fontSize: "12px", color: "#000", fontWeight: "bold", lineHeight: "1.4" }}>
                      {award.title}<br />{award.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Window>

          {/* Portfolio Section */}
          <Window title="📂 Portfolio">
            <div id="work" style={{ padding: "20px", backgroundColor: "#c0c0c0" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
                {/* Desperado's Destiny */}
                <Window title="desperados.exe">
                  <div style={{ height: "140px", background: "linear-gradient(to bottom right, #8b4513, #d2691e)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "48px" }}>
                    🤠
                  </div>
                  <div style={{ padding: "16px", backgroundColor: "#ffffcc", borderTop: "2px solid #808080" }}>
                    <h3 style={{ fontFamily: "'Silkscreen', monospace", fontSize: "14px", color: "#000080", marginBottom: "8px" }}>
                      DESPERADO&apos;S DESTINY <span className="hot-badge">HOT!</span>
                    </h3>
                    <p style={{ fontFamily: "'VT323', monospace", fontSize: "18px" }}>Wild West MMORPG adventure!</p>
                    <span className="status-live" style={{ display: "inline-block", marginTop: "8px", padding: "4px 12px", fontFamily: "'Silkscreen', monospace", fontSize: "10px" }}>● ONLINE</span>
                  </div>
                </Window>

                {/* Wardian */}
                <Window title="wardian.exe">
                  <div style={{ height: "140px", background: "linear-gradient(to bottom right, #001a33, #003366)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "48px" }}>
                    📊
                  </div>
                  <div style={{ padding: "16px", backgroundColor: "#ffffcc", borderTop: "2px solid #808080" }}>
                    <h3 style={{ fontFamily: "'Silkscreen', monospace", fontSize: "14px", color: "#000080", marginBottom: "8px" }}>
                      WARDIAN
                    </h3>
                    <p style={{ fontFamily: "'VT323', monospace", fontSize: "18px" }}>Dashboard platform</p>
                    <span className="status-live" style={{ display: "inline-block", marginTop: "8px", padding: "4px 12px", fontFamily: "'Silkscreen', monospace", fontSize: "10px" }}>● ONLINE</span>
                  </div>
                </Window>

                {/* AstroGenesis */}
                <Window title="astro.exe">
                  <div style={{ height: "140px", background: "linear-gradient(to bottom right, #1a0033, #4a0080)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "48px" }}>
                    🚀
                  </div>
                  <div style={{ padding: "16px", backgroundColor: "#ffffcc", borderTop: "2px solid #808080" }}>
                    <h3 style={{ fontFamily: "'Silkscreen', monospace", fontSize: "14px", color: "#000080", marginBottom: "8px" }}>
                      ASTROGENESIS <span className="hot-badge">NEW!</span>
                    </h3>
                    <p style={{ fontFamily: "'VT323', monospace", fontSize: "18px" }}>Coming soon...</p>
                    <span className="status-soon" style={{ display: "inline-block", marginTop: "8px", padding: "4px 12px", fontFamily: "'Silkscreen', monospace", fontSize: "10px" }}>◐ SOON</span>
                  </div>
                </Window>
              </div>
            </div>
          </Window>

          <FancyHR />

          {/* Services Section */}
          <Window title="📋 Services">
            <div id="services">
              <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff" }}>
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "#000080", color: "#fff", padding: "12px", fontFamily: "'Silkscreen', monospace", fontSize: "12px", textAlign: "left" }}>SERVICE</th>
                    <th style={{ backgroundColor: "#000080", color: "#fff", padding: "12px", fontFamily: "'Silkscreen', monospace", fontSize: "12px", textAlign: "left" }}>WHAT WE DO</th>
                  </tr>
                </thead>
                <tbody style={{ fontFamily: "'VT323', monospace", fontSize: "18px" }}>
                  {[
                    { icon: "🌐", name: "WEBSITES", desc: "Custom sites that load fast and look amazing" },
                    { icon: "⚡", name: "WEB APPS", desc: "Full-stack applications built to scale" },
                    { icon: "🎮", name: "GAMES", desc: "Browser games to full MMORPGs" },
                    { icon: "🤖", name: "AI TOOLS", desc: "Smart automation and chatbots" },
                  ].map((service, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#f3f4f6" }}>
                      <td style={{ padding: "12px", borderBottom: "1px solid #808080" }}>{service.icon} {service.name}</td>
                      <td style={{ padding: "12px", borderBottom: "1px solid #808080" }}>{service.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Window>

          {/* Guestbook Preview */}
          <Window title="📝 Guestbook">
            <div style={{ padding: "20px", backgroundColor: "#c0c0c0" }}>
              <p style={{ textAlign: "center", fontFamily: "'VT323', monospace", fontSize: "22px", marginBottom: "16px" }}>
                ✍️ <b>SIGN OUR GUESTBOOK!</b> ✍️
              </p>
              <div style={{ backgroundColor: "#fff", border: "2px solid #808080", padding: "16px", maxHeight: "240px", overflowY: "auto" }}>
                {[
                  { name: "~*CyberSurfer99*~", date: "Jan 15, 2026", msg: "OMG this site is SO cool!!! ⭐⭐⭐⭐⭐" },
                  { name: "WebMaster2000", date: "Jan 10, 2026", msg: "Great portfolio! Bookmarked! 🔥" },
                  { name: "xX_DarkAngel_Xx", date: "Jan 5, 2026", msg: "finally a site that gets it... 💀🖤" },
                ].map((entry, i) => (
                  <div key={i} style={{ paddingBottom: "12px", marginBottom: "12px", borderBottom: i < 2 ? "1px dashed #ccc" : "none" }}>
                    <span style={{ fontWeight: "bold", color: "#000080", fontSize: "18px" }}>{entry.name}</span>
                    <span style={{ color: "#666", fontSize: "14px", marginLeft: "8px" }}>{entry.date}</span>
                    <p style={{ fontFamily: "'Comic Neue', cursive", marginTop: "4px", fontSize: "18px" }}>{entry.msg}</p>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "center", marginTop: "16px" }}>
                <Button href="/guestbook">✏️ SIGN GUESTBOOK</Button>
              </div>
            </div>
          </Window>

          {/* Contact Section */}
          <Window title="✉️ Contact">
            <div id="contact" style={{ background: "linear-gradient(to bottom, #000033, #000066)", textAlign: "center", padding: "40px 20px" }}>
              <div className="animate-spin3d" style={{ fontSize: "48px", marginBottom: "16px", display: "inline-block" }}>📧</div>
              <h2 style={{ fontFamily: "'Silkscreen', monospace", fontSize: "24px", color: "#ff00ff", marginBottom: "16px" }}>
                GET IN TOUCH!
              </h2>
              <p style={{ color: "#fff", fontFamily: "'VT323', monospace", fontSize: "22px", marginBottom: "24px" }}>
                Ready to build something amazing? Let&apos;s talk!
              </p>
              <Button href="mailto:hello@quirkybytes.com?subject=Project%20Inquiry" variant="hot">
                📨 EMAIL US NOW!
              </Button>
            </div>
          </Window>
        </div>

        {/* Visitor Counter */}
        <VisitorCounter />

        {/* Webring */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            padding: "16px",
            background: "linear-gradient(to right, #330066, #000066, #330066)",
            borderTop: "2px solid #6666ff",
            borderBottom: "2px solid #6666ff",
            flexWrap: "wrap",
          }}
        >
          <a href="#" style={{ color: "#00ffff", textDecoration: "none", padding: "8px 16px", border: "2px solid #6666ff", backgroundColor: "rgba(0,0,100,0.5)", fontFamily: "'VT323', monospace", fontSize: "18px" }}>← PREV</a>
          <span style={{ fontSize: "30px" }} className="animate-spin3d">🔗</span>
          <span style={{ fontFamily: "'Silkscreen', monospace", fontSize: "10px", color: "#fff" }}>COOL SITES WEBRING</span>
          <span style={{ fontSize: "30px" }} className="animate-spin3d">🔗</span>
          <a href="#" style={{ color: "#00ffff", textDecoration: "none", padding: "8px 16px", border: "2px solid #6666ff", backgroundColor: "rgba(0,0,100,0.5)", fontFamily: "'VT323', monospace", fontSize: "18px" }}>RANDOM</a>
          <a href="#" style={{ color: "#00ffff", textDecoration: "none", padding: "8px 16px", border: "2px solid #6666ff", backgroundColor: "rgba(0,0,100,0.5)", fontFamily: "'VT323', monospace", fontSize: "18px" }}>NEXT →</a>
        </div>

        {/* Footer Badges */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", padding: "32px", backgroundColor: "#000" }}>
          <Badge variant="notepad">MADE WITH<br />NOTEPAD 📝</Badge>
          <Badge variant="netscape">BEST VIEWED<br />ANY BROWSER</Badge>
          <Badge variant="bobby">BOBBY<br />APPROVED ♿</Badge>
          <Badge variant="html">HTML 5.0<br />CERTIFIED</Badge>
          <Badge variant="cool">CERTIFIED<br />COOL SITE ⭐</Badge>
          <Badge variant="y2k">Y2K<br />COMPLIANT</Badge>
        </div>

        {/* Copyright */}
        <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#000", color: "#9ca3af", fontFamily: "'VT323', monospace", borderTop: "1px solid #374151", fontSize: "18px" }}>
          © 2026 QuirkyBytes Digital Studio | All Rights Reserved
          <br />
          <span style={{ fontSize: "16px" }}>Built with 🔥 and mass amounts of coffee</span>
        </div>
      </main>
    </>
  );
}
