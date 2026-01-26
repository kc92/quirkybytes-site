"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Window, Button, FancyHR } from "@/components/ui";
import { EraSlider } from "@/components/EraSlider";
import { CRTEffect } from "@/components/effects/CRTEffect";
import { MouseTrail } from "@/components/effects/MouseTrail";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function GuestbookContent() {
  const searchParams = useSearchParams();
  const era = searchParams.get("era") || "geocities";
  const showEffects = era === "geocities";
  
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const res = await fetch("/api/guestbook");
      const data = await res.json();
      setEntries(data);
    } catch {
      console.error("Failed to fetch guestbook entries");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setMessage("");
        fetchEntries();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong");
        setStatus("error");
      }
    } catch {
      setError("Failed to submit. Please try again.");
      setStatus("error");
    }
  };

  // Dawn era - simple HTML style
  if (era === "dawn") {
    return (
      <div style={{ backgroundColor: "#c0c0c0", minHeight: "100vh", fontFamily: "Times New Roman, serif", padding: "20px" }}>
        <EraSlider />
        <div style={{ maxWidth: "600px", margin: "60px auto 0", backgroundColor: "#fff", padding: "20px", border: "1px solid #808080" }}>
          <h1 style={{ textAlign: "center", borderBottom: "2px solid #808080", paddingBottom: "10px" }}>📝 Guestbook</h1>
          <p style={{ textAlign: "center" }}>Please sign our guestbook!</p>
          <hr />
          
          <form onSubmit={handleSubmit}>
            <p><b>Your Name:</b><br />
              <input type="text" required maxLength={50} value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "4px", border: "1px solid #808080" }} />
            </p>
            <p><b>Your Message:</b><br />
              <textarea required maxLength={500} rows={4} value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: "100%", padding: "4px", border: "1px solid #808080" }} />
            </p>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {status === "success" && <p style={{ color: "green" }}>Thank you for signing!</p>}
            <p><input type="submit" value={status === "submitting" ? "Signing..." : "Sign Guestbook"} disabled={status === "submitting"} /></p>
          </form>
          
          <hr />
          <h2>Recent Signatures:</h2>
          {entries.map((entry) => (
            <div key={entry.id} style={{ marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px dashed #ccc" }}>
              <b>{entry.name}</b> - <i>{formatDate(entry.createdAt)}</i>
              <p>{entry.message}</p>
            </div>
          ))}
          <p style={{ fontSize: "12px", color: "#666", textAlign: "center" }}>* Sample entries for era authenticity</p>
          <hr />
          <p style={{ textAlign: "center" }}><a href="/era/dawn" style={{ color: "#0000ff" }}>← Back to Home</a></p>
        </div>
      </div>
    );
  }

  // Geocities era (default)
  return (
    <>
      <EraSlider />
      {showEffects && <CRTEffect />}
      {showEffects && <MouseTrail />}
      
      <main style={{ minHeight: "100vh", padding: "60px 20px 40px", backgroundColor: "#000033", backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000066' fill-opacity='0.4'%3E%3Cpath d='M20 20.5V1h1v19.5h18.5v1H21v18.5h-1V21.5H1v-1h19.5z'/%3E%3C/g%3E%3C/svg%3E")` }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Window title="📝 C:\\QuirkyBytes\\Guestbook\\README.txt">
            <div style={{ background: "linear-gradient(to bottom, #000033, #000066)", textAlign: "center", padding: "40px" }}>
              <div className="animate-spin3d" style={{ fontSize: "60px", marginBottom: "16px", display: "inline-block" }}>📝</div>
              <h1 className="animate-glow" style={{ fontFamily: "'Silkscreen', monospace", fontSize: "24px", color: "#00ffff", marginBottom: "16px" }}>GUESTBOOK</h1>
              <p style={{ fontFamily: "'VT323', monospace", fontSize: "20px", color: "#fff" }}>Sign our guestbook! Leave a message for the world to see. 🌍</p>
            </div>
          </Window>

          <FancyHR />

          <Window title="✏️ SIGN_GUESTBOOK.exe">
            <div style={{ padding: "24px", backgroundColor: "#ffffcc" }}>
              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "24px" }}>
                  <div style={{ fontSize: "48px", marginBottom: "8px" }}>✅</div>
                  <p style={{ fontFamily: "'Silkscreen', monospace", fontSize: "12px", color: "#00ff00" }}>THANKS FOR SIGNING!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ fontFamily: "'Silkscreen', monospace", fontSize: "10px", color: "#000080", display: "block", marginBottom: "4px" }}>YOUR NAME:</label>
                    <input type="text" required maxLength={50} value={name} onChange={(e) => setName(e.target.value)} placeholder="~*YourCoolName*~" style={{ width: "100%", padding: "12px", fontFamily: "'VT323', monospace", fontSize: "18px", border: "2px solid #808080", backgroundColor: "#fff" }} />
                  </div>
                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ fontFamily: "'Silkscreen', monospace", fontSize: "10px", color: "#000080", display: "block", marginBottom: "4px" }}>YOUR MESSAGE:</label>
                    <textarea required maxLength={500} rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="This site is so cool! ⭐⭐⭐" style={{ width: "100%", padding: "12px", fontFamily: "'VT323', monospace", fontSize: "18px", border: "2px solid #808080", backgroundColor: "#fff", resize: "none" }} />
                  </div>
                  {error && <p style={{ color: "#dc2626", fontFamily: "'VT323', monospace", fontSize: "14px", marginBottom: "16px" }}>❌ {error}</p>}
                  <button type="submit" disabled={status === "submitting"} style={{ width: "100%", padding: "12px", background: "linear-gradient(to bottom, #4ade80, #16a34a)", color: "#fff", fontFamily: "'VT323', monospace", fontSize: "20px", border: "3px solid", borderTopColor: "#86efac", borderLeftColor: "#86efac", borderBottomColor: "#166534", borderRightColor: "#166534", cursor: status === "submitting" ? "wait" : "pointer", opacity: status === "submitting" ? 0.5 : 1 }}>
                    {status === "submitting" ? "SIGNING..." : "✍️ SIGN GUESTBOOK"}
                  </button>
                </form>
              )}
            </div>
          </Window>

          <Window title="📖 GUESTBOOK_ENTRIES.html">
            <div style={{ padding: "16px", backgroundColor: "#fff", maxHeight: "600px", overflowY: "auto" }}>
              {entries.length === 0 ? (
                <p style={{ textAlign: "center", fontFamily: "'VT323', monospace", color: "#666", padding: "32px" }}>Loading entries...</p>
              ) : (
                <div>
                  {entries.map((entry) => (
                    <div key={entry.id} style={{ padding: "16px", marginBottom: "16px", background: "linear-gradient(to right, #ffffee, #ffffcc)", border: "2px solid #808080" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                        <span style={{ fontWeight: "bold", color: "#000080", fontSize: "18px" }}>{entry.name}</span>
                        <span style={{ fontFamily: "'VT323', monospace", fontSize: "14px", color: "#666" }}>{formatDate(entry.createdAt)}</span>
                      </div>
                      <p style={{ fontFamily: "'Comic Neue', cursive", fontSize: "18px" }}>{entry.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Window>

          <Window title="📊 STATS.ini">
            <div style={{ padding: "16px", backgroundColor: "#000", textAlign: "center" }}>
              <p style={{ fontFamily: "'VT323', monospace", color: "#00ff00", fontSize: "18px" }}>📝 Total Signatures: <b>{entries.length}</b> | 🌍 Visitors from around the world!</p>
              <p style={{ fontFamily: "'VT323', monospace", color: "#666", fontSize: "12px", marginTop: "8px" }}>* Sample entries shown for era authenticity</p>
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

export default function GuestbookPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", backgroundColor: "#000033", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>Loading...</div>}>
      <GuestbookContent />
    </Suspense>
  );
}
