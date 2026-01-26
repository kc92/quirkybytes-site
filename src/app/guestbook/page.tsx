"use client";

import { useState, useEffect } from "react";
import { Window, Button, FancyHR } from "@/components/ui";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function GuestbookPage() {
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

  return (
    <main style={{ minHeight: "100vh", padding: "40px 20px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Header */}
        <Window title="📝 C:\\QuirkyBytes\\Guestbook\\README.txt">
          <div style={{ background: "linear-gradient(to bottom, #000033, #000066)", textAlign: "center", padding: "40px" }}>
            <div className="animate-spin3d" style={{ fontSize: "60px", marginBottom: "16px", display: "inline-block" }}>📝</div>
            <h1 className="animate-glow" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "24px", color: "#00ffff", marginBottom: "16px" }}>
              GUESTBOOK
            </h1>
            <p style={{ fontFamily: "'VT323', monospace", fontSize: "20px", color: "#fff", maxWidth: "500px", margin: "0 auto" }}>
              Sign our guestbook! Leave a message for the world to see. 🌍
            </p>
          </div>
        </Window>

        <FancyHR />

        {/* Sign Form */}
        <Window title="✏️ SIGN_GUESTBOOK.exe">
          <div style={{ padding: "24px", backgroundColor: "#ffffcc" }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "24px" }}>
                <div style={{ fontSize: "48px", marginBottom: "8px" }}>✅</div>
                <p style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "12px", color: "#00ff00" }}>
                  THANKS FOR SIGNING!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "8px", color: "#000080", display: "block", marginBottom: "4px" }}>
                    YOUR NAME:
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={50}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="~*YourCoolName*~"
                    style={{
                      width: "100%",
                      padding: "12px",
                      fontFamily: "'VT323', monospace",
                      fontSize: "18px",
                      border: "2px solid #808080",
                      backgroundColor: "#fff",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "8px", color: "#000080", display: "block", marginBottom: "4px" }}>
                    YOUR MESSAGE:
                  </label>
                  <textarea
                    required
                    maxLength={500}
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="This site is so cool! ⭐⭐⭐"
                    style={{
                      width: "100%",
                      padding: "12px",
                      fontFamily: "'VT323', monospace",
                      fontSize: "18px",
                      border: "2px solid #808080",
                      backgroundColor: "#fff",
                      resize: "none",
                    }}
                  />
                </div>
                {error && (
                  <p style={{ color: "#dc2626", fontFamily: "'VT323', monospace", fontSize: "14px", marginBottom: "16px" }}>
                    ❌ {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "linear-gradient(to bottom, #4ade80, #16a34a)",
                    color: "#fff",
                    fontFamily: "'VT323', monospace",
                    fontSize: "20px",
                    border: "3px solid",
                    borderTopColor: "#86efac",
                    borderLeftColor: "#86efac",
                    borderBottomColor: "#166534",
                    borderRightColor: "#166534",
                    cursor: status === "submitting" ? "wait" : "pointer",
                    opacity: status === "submitting" ? 0.5 : 1,
                  }}
                >
                  {status === "submitting" ? "SIGNING..." : "✍️ SIGN GUESTBOOK"}
                </button>
              </form>
            )}
          </div>
        </Window>

        {/* Entries */}
        <Window title="📖 GUESTBOOK_ENTRIES.html">
          <div style={{ padding: "16px", backgroundColor: "#fff", maxHeight: "600px", overflowY: "auto" }}>
            {entries.length === 0 ? (
              <p style={{ textAlign: "center", fontFamily: "'VT323', monospace", color: "#666", padding: "32px" }}>
                Loading entries...
              </p>
            ) : (
              <div>
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    style={{
                      padding: "16px",
                      marginBottom: "16px",
                      background: "linear-gradient(to right, #ffffee, #ffffcc)",
                      border: "2px solid #808080",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                      <span style={{ fontWeight: "bold", color: "#000080", fontSize: "18px" }}>{entry.name}</span>
                      <span style={{ fontFamily: "'VT323', monospace", fontSize: "14px", color: "#666" }}>
                        {formatDate(entry.createdAt)}
                      </span>
                    </div>
                    <p style={{ fontFamily: "'Comic Neue', cursive", fontSize: "18px" }}>{entry.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Window>

        {/* Stats */}
        <Window title="📊 STATS.ini">
          <div style={{ padding: "16px", backgroundColor: "#000", textAlign: "center" }}>
            <p style={{ fontFamily: "'VT323', monospace", color: "#00ff00", fontSize: "18px" }}>
              📝 Total Signatures: <b>{entries.length}</b> | 🌍 Visitors from around the world!
            </p>
            <p style={{ fontFamily: "'VT323', monospace", color: "#666", fontSize: "12px", marginTop: "8px" }}>
              * Sample entries shown for era authenticity
            </p>
          </div>
        </Window>

        {/* Back Link */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <Button href="/">← BACK TO HOME</Button>
        </div>
      </div>
    </main>
  );
}
