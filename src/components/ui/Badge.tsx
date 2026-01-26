"use client";

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "notepad" | "netscape" | "bobby" | "html" | "cool" | "y2k";
  className?: string;
}

const variantStyles: Record<string, React.CSSProperties> = {
  notepad: { backgroundColor: "#ffffcc", color: "#000", borderColor: "#999" },
  netscape: { backgroundColor: "#006600", color: "#fff", borderColor: "#00cc00" },
  bobby: { backgroundColor: "#0066cc", color: "#fff", borderColor: "#66ccff" },
  html: { backgroundColor: "#ff6600", color: "#fff", borderColor: "#ffcc00" },
  cool: { 
    background: "linear-gradient(to bottom right, #ff00ff, #00ffff)", 
    color: "#fff", 
    borderColor: "#fff",
  },
  y2k: { backgroundColor: "#000", color: "#00ff00", borderColor: "#00ff00" },
};

export function Badge({
  children,
  variant = "cool",
  className = "",
}: BadgeProps) {
  const style = variantStyles[variant] || variantStyles.cool;
  
  return (
    <div
      className={className}
      style={{
        padding: "10px 14px",
        fontFamily: "'Silkscreen', monospace",
        fontSize: "10px",
        border: "2px solid",
        textAlign: "center",
        lineHeight: 1.6,
        fontWeight: "bold",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
