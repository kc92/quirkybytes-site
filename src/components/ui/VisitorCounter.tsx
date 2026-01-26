"use client";

import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState("000000");

  useEffect(() => {
    const stored = parseInt(localStorage.getItem("visitorCount") || "420069");
    const newCount = stored + 1;
    localStorage.setItem("visitorCount", newCount.toString());
    setCount(newCount.toString().padStart(6, "0"));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#000" }}>
      <p style={{ color: "#00ffff", marginBottom: "8px" }}>YOU ARE VISITOR NUMBER:</p>
      <div
        style={{
          display: "inline-flex",
          backgroundColor: "#001100",
          padding: "4px",
          border: "3px inset #333",
        }}
      >
        {count.split("").map((digit, i) => (
          <span
            key={i}
            style={{
              backgroundColor: "#001a00",
              color: "#00ff00",
              fontFamily: "'VT323', monospace",
              fontSize: "24px",
              padding: "4px 8px",
              margin: "0 2px",
              border: "1px solid #003300",
              textShadow: "0 0 10px #00ff00",
            }}
          >
            {digit}
          </span>
        ))}
      </div>
      <p style={{ color: "#666", marginTop: "8px", fontSize: "14px" }}>since December 1999*</p>
      <p style={{ color: "#444", marginTop: "4px", fontSize: "10px", fontStyle: "italic" }}>*era simulation</p>
    </div>
  );
}
