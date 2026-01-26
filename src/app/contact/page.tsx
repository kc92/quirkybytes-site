"use client";

import { useState } from "react";
import { Window, Button, FancyHR } from "@/components/ui";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
    website: "", // Honeypot field - should remain empty
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

  return (
    <main className="min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-5">
        {/* Header */}
        <Window title="✉️ C:\\QuirkyBytes\\Contact\\README.txt">
          <div className="bg-gradient-to-b from-retro-dark to-[#000066] text-center p-10">
            <div className="text-6xl animate-spin3d inline-block mb-4">📧</div>
            <h1 className="font-pixel text-2xl text-neon-blue animate-glow mb-4">
              GET IN TOUCH
            </h1>
            <p className="font-terminal text-xl text-white max-w-xl mx-auto">
              Got a project? Let&apos;s talk.
            </p>
          </div>
        </Window>

        <FancyHR />

        {/* Contact Form */}
        <Window title="📝 NEW_MESSAGE.exe">
          <div className="p-6 bg-[#ffffcc]">
            {status === "sent" ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="font-pixel text-lg text-neon-green mb-4">
                  MESSAGE SENT!
                </h2>
                <p className="font-terminal text-lg mb-6">
                  We&apos;ll get back to you within 24 hours. Thanks for reaching out!
                </p>
                <Button onClick={() => setStatus("idle")}>SEND ANOTHER</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="font-pixel text-[0.6rem] text-win-blue block mb-2">
                    YOUR NAME: *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 font-terminal text-lg border-2 border-win-dark bg-white focus:border-neon-blue outline-none"
                    placeholder="Enter your name..."
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-pixel text-[0.6rem] text-win-blue block mb-2">
                    YOUR EMAIL: *
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 font-terminal text-lg border-2 border-win-dark bg-white focus:border-neon-blue outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="font-pixel text-[0.6rem] text-win-blue block mb-2">
                    PROJECT TYPE:
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full p-3 font-terminal text-lg border-2 border-win-dark bg-white focus:border-neon-blue outline-none"
                  >
                    <option value="">Select a type...</option>
                    <option value="website">🌐 Website</option>
                    <option value="webapp">⚡ Web Application</option>
                    <option value="game">🎮 Game</option>
                    <option value="ai">🤖 AI / Automation</option>
                    <option value="other">💡 Something Else</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="font-pixel text-[0.6rem] text-win-blue block mb-2">
                    BUDGET RANGE:
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full p-3 font-terminal text-lg border-2 border-win-dark bg-white focus:border-neon-blue outline-none"
                  >
                    <option value="">Select a range...</option>
                    <option value="under5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-pixel text-[0.6rem] text-win-blue block mb-2">
                    YOUR MESSAGE: *
                  </label>
                  <textarea
                    required
                    rows={6}
                    maxLength={2000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 font-terminal text-lg border-2 border-win-dark bg-white focus:border-neon-blue outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.message.length}/2000
                  </div>
                </div>

                {/* Honeypot - hidden from humans, bots fill it */}
                <div 
                  aria-hidden="true" 
                  style={{ 
                    position: "absolute", 
                    left: "-9999px", 
                    top: "-9999px",
                    opacity: 0,
                    pointerEvents: "none",
                  }}
                >
                  <label htmlFor="website">Website (leave blank)</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    autoComplete="off"
                    tabIndex={-1}
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>

                {/* Submit */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="px-8 py-4 bg-gradient-to-b from-red-400 to-red-600 text-white font-terminal text-xl border-[3px] border-t-red-300 border-l-red-300 border-b-red-800 border-r-red-800 cursor-pointer disabled:opacity-50"
                  >
                    {status === "sending" ? "SENDING..." : "📨 SEND MESSAGE"}
                  </button>
                </div>

                {status === "error" && (
                  <p className="text-center text-red-600 font-terminal mt-4">
                    ❌ Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </Window>

        {/* Response Info */}
        <Window title="📬 WHAT_HAPPENS_NEXT.txt">
          <div className="p-6 bg-win-bg text-center">
            <p className="font-terminal text-lg mb-2">
              ✅ Once you submit your inquiry, we&apos;ll review it and get back to you.
            </p>
            <p className="font-terminal text-base text-gray-600">
              You&apos;ll receive a response from <strong>@quirkybytes.com</strong> within 24-48 hours.
            </p>
          </div>
        </Window>

        {/* Back Link */}
        <div className="text-center mt-8">
          <Button href="/">← BACK TO HOME</Button>
        </div>
      </div>
    </main>
  );
}
