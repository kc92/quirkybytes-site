"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Window, Button, FancyHR } from "@/components/ui";
import { EraSlider } from "@/components/EraSlider";
import { CRTEffect } from "@/components/effects/CRTEffect";
import { MouseTrail } from "@/components/effects/MouseTrail";

function ContactForm() {
  const searchParams = useSearchParams();
  const era = searchParams.get("era") || "geocities";
  const showEffects = era === "geocities";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", projectType: "", budget: "", message: "", website: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Dawn era - simple HTML style
  if (era === "dawn") {
    return (
      <div style={{ backgroundColor: "#c0c0c0", minHeight: "100vh", fontFamily: "Times New Roman, serif", padding: "20px" }}>
        <EraSlider />
        <div style={{ maxWidth: "600px", margin: "60px auto 0", backgroundColor: "#fff", padding: "20px", border: "1px solid #808080" }}>
          <h1 style={{ textAlign: "center", borderBottom: "2px solid #808080", paddingBottom: "10px" }}>
            ✉️ Contact Us
          </h1>
          <p style={{ textAlign: "center" }}>Please fill out the form below to send us a message.</p>
          <hr />
          
          {status === "sent" ? (
            <div style={{ textAlign: "center", padding: "20px" }}>
              <p style={{ color: "green", fontWeight: "bold" }}>✓ Message sent successfully!</p>
              <p>You will receive a response from @quirkybytes.com</p>
              <p><a href="/era/dawn" style={{ color: "#0000ff" }}>← Return to Home</a></p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p><b>Your Name:</b> *<br />
                <input type="text" required maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ width: "100%", padding: "4px", border: "1px solid #808080" }} />
              </p>
              <p><b>Your Email:</b> *<br />
                <input type="email" required maxLength={254} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: "100%", padding: "4px", border: "1px solid #808080" }} />
              </p>
              <p><b>Project Type:</b><br />
                <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} style={{ width: "100%", padding: "4px", border: "1px solid #808080" }}>
                  <option value="">Select...</option>
                  <option value="website">Website</option>
                  <option value="webapp">Web Application</option>
                  <option value="game">Game</option>
                  <option value="ai">AI / Automation</option>
                  <option value="other">Other</option>
                </select>
              </p>
              <p><b>Budget Range:</b><br />
                <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} style={{ width: "100%", padding: "4px", border: "1px solid #808080" }}>
                  <option value="">Select...</option>
                  <option value="under5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </p>
              <p><b>Your Message:</b> *<br />
                <textarea required maxLength={2000} rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ width: "100%", padding: "4px", border: "1px solid #808080" }} />
              </p>
              <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                <input type="text" name="website" tabIndex={-1} value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
              </div>
              {status === "error" && <p style={{ color: "red" }}>Error sending message. Please try again.</p>}
              <p><input type="submit" value={status === "sending" ? "Sending..." : "Send Message"} disabled={status === "sending"} /></p>
            </form>
          )}
          
          <hr />
          <p style={{ fontSize: "12px", color: "#666", textAlign: "center" }}>You will receive a response from @quirkybytes.com within 24-48 hours.</p>
          <p style={{ textAlign: "center" }}><a href="/era/dawn" style={{ color: "#0000ff" }}>← Back to Home</a></p>
        </div>
      </div>
    );
  }

  // Geocities style (default)
  return (
    <>
      <EraSlider />
      {showEffects && <CRTEffect />}
      {showEffects && <MouseTrail />}
      
      <main style={{ minHeight: "100vh", padding: "60px 20px 40px", backgroundColor: "#000033", backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000066' fill-opacity='0.4'%3E%3Cpath d='M20 20.5V1h1v19.5h18.5v1H21v18.5h-1V21.5H1v-1h19.5z'/%3E%3C/g%3E%3C/svg%3E")` }}>
        <div style={{ maxWidth: "768px", margin: "0 auto", padding: "0 20px" }}>
          <Window title="✉️ C:\\QuirkyBytes\\Contact\\README.txt">
            <div style={{ background: "linear-gradient(to bottom, #000033, #000066)", textAlign: "center", padding: "40px" }}>
              <div className="animate-spin3d" style={{ fontSize: "60px", marginBottom: "16px", display: "inline-block" }}>📧</div>
              <h1 className="animate-glow" style={{ fontFamily: "'Silkscreen', monospace", fontSize: "24px", color: "#00ffff", marginBottom: "16px" }}>GET IN TOUCH</h1>
              <p style={{ fontFamily: "'VT323', monospace", fontSize: "20px", color: "#fff" }}>Got a project? Let&apos;s talk.</p>
            </div>
          </Window>

          <FancyHR />

          <Window title="📝 NEW_MESSAGE.exe">
            <div style={{ padding: "24px", backgroundColor: "#ffffcc" }}>
              {status === "sent" ? (
                <div style={{ textAlign: "center", padding: "40px" }}>
                  <div style={{ fontSize: "60px", marginBottom: "16px" }}>✅</div>
                  <h2 style={{ fontFamily: "'Silkscreen', monospace", fontSize: "16px", color: "#00ff00", marginBottom: "16px" }}>MESSAGE SENT!</h2>
                  <p style={{ fontFamily: "'VT323', monospace", fontSize: "18px", marginBottom: "24px" }}>We&apos;ll get back to you within 24 hours.</p>
                  <Button onClick={() => setStatus("idle")}>SEND ANOTHER</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div>
                    <label style={{ fontFamily: "'Silkscreen', monospace", fontSize: "10px", color: "#000080", display: "block", marginBottom: "8px" }}>YOUR NAME: *</label>
                    <input type="text" required maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ width: "100%", padding: "12px", fontFamily: "'VT323', monospace", fontSize: "18px", border: "2px solid #808080", backgroundColor: "#fff" }} placeholder="Enter your name..." />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Silkscreen', monospace", fontSize: "10px", color: "#000080", display: "block", marginBottom: "8px" }}>YOUR EMAIL: *</label>
                    <input type="email" required maxLength={254} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: "100%", padding: "12px", fontFamily: "'VT323', monospace", fontSize: "18px", border: "2px solid #808080", backgroundColor: "#fff" }} placeholder="you@example.com" />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Silkscreen', monospace", fontSize: "10px", color: "#000080", display: "block", marginBottom: "8px" }}>PROJECT TYPE:</label>
                    <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} style={{ width: "100%", padding: "12px", fontFamily: "'VT323', monospace", fontSize: "18px", border: "2px solid #808080", backgroundColor: "#fff" }}>
                      <option value="">Select a type...</option>
                      <option value="website">🌐 Website</option>
                      <option value="webapp">⚡ Web Application</option>
                      <option value="game">🎮 Game</option>
                      <option value="ai">🤖 AI / Automation</option>
                      <option value="other">💡 Something Else</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Silkscreen', monospace", fontSize: "10px", color: "#000080", display: "block", marginBottom: "8px" }}>BUDGET RANGE:</label>
                    <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} style={{ width: "100%", padding: "12px", fontFamily: "'VT323', monospace", fontSize: "18px", border: "2px solid #808080", backgroundColor: "#fff" }}>
                      <option value="">Select a range...</option>
                      <option value="under5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Silkscreen', monospace", fontSize: "10px", color: "#000080", display: "block", marginBottom: "8px" }}>YOUR MESSAGE: *</label>
                    <textarea required rows={6} maxLength={2000} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ width: "100%", padding: "12px", fontFamily: "'VT323', monospace", fontSize: "18px", border: "2px solid #808080", backgroundColor: "#fff", resize: "none" }} placeholder="Tell us about your project..." />
                    <div style={{ textAlign: "right", fontSize: "12px", color: "#666", marginTop: "4px" }}>{formData.message.length}/2000</div>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px", opacity: 0, pointerEvents: "none" }}>
                    <input type="text" name="website" tabIndex={-1} value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
                  </div>
                  <div style={{ textAlign: "center", paddingTop: "16px" }}>
                    <button type="submit" disabled={status === "sending"} style={{ padding: "16px 32px", background: "linear-gradient(to bottom, #ef4444, #dc2626)", color: "#fff", fontFamily: "'VT323', monospace", fontSize: "20px", border: "3px solid", borderTopColor: "#fca5a5", borderLeftColor: "#fca5a5", borderBottomColor: "#991b1b", borderRightColor: "#991b1b", cursor: status === "sending" ? "wait" : "pointer", opacity: status === "sending" ? 0.5 : 1 }}>
                      {status === "sending" ? "SENDING..." : "📨 SEND MESSAGE"}
                    </button>
                  </div>
                  {status === "error" && <p style={{ textAlign: "center", color: "#dc2626", fontFamily: "'VT323', monospace" }}>❌ Something went wrong. Please try again.</p>}
                </form>
              )}
            </div>
          </Window>

          <Window title="📬 WHAT_HAPPENS_NEXT.txt">
            <div style={{ padding: "24px", backgroundColor: "#c0c0c0", textAlign: "center" }}>
              <p style={{ fontFamily: "'VT323', monospace", fontSize: "18px", marginBottom: "8px" }}>✅ Once you submit your inquiry, we&apos;ll review it and get back to you.</p>
              <p style={{ fontFamily: "'VT323', monospace", fontSize: "16px", color: "#666" }}>You&apos;ll receive a response from <strong>@quirkybytes.com</strong> within 24-48 hours.</p>
            </div>
          </Window>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Button href={`/era/${era}`}>← BACK TO HOME</Button>
          </div>
        </div>
      </main>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", backgroundColor: "#000033", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}
