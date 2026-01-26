"use client";

import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
}

export function Marquee({ children }: MarqueeProps) {
  return (
    <div
      className="animate-rainbow"
      style={{
        background: "linear-gradient(to right, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #a855f7)",
        backgroundSize: "400% 100%",
        padding: "10px",
        overflow: "hidden",
        borderBottom: "3px solid rgba(234, 179, 8, 0.5)",
      }}
    >
      <div className="animate-scroll" style={{ display: "flex", whiteSpace: "nowrap" }}>
        {children}
        {children}
      </div>
    </div>
  );
}

export function MarqueeItem({
  children,
  hot = false,
}: {
  children: React.ReactNode;
  hot?: boolean;
}) {
  return (
    <span
      className={hot ? "animate-blink" : ""}
      style={{
        fontFamily: "'Silkscreen', monospace",
        fontSize: "14px",
        paddingLeft: "40px",
        paddingRight: "40px",
        color: hot ? "#dc2626" : "#000",
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  );
}
