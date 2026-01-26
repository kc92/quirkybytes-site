"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { eras } from "@/lib/content";

export function EraSlider() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine current era from path
  const currentEraSlug = pathname.startsWith("/era/")
    ? pathname.split("/")[2]
    : "geocities"; // default

  const currentEra = eras.find((e) => e.slug === currentEraSlug) || eras[1];
  const currentIndex = eras.findIndex((e) => e.slug === currentEraSlug);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        backgroundColor: "rgba(0,0,0,0.95)",
        borderBottom: "2px solid #333",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Compact View */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px",
          gap: "16px",
        }}
      >
        {/* Left: Era Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Link
            href={currentIndex > 0 ? `/era/${eras[currentIndex - 1].slug}` : "#"}
            style={{
              color: currentIndex > 0 ? "#fff" : "#444",
              textDecoration: "none",
              padding: "4px 8px",
              fontSize: "18px",
              pointerEvents: currentIndex > 0 ? "auto" : "none",
            }}
          >
            ←
          </Link>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              background: "linear-gradient(to bottom, #333, #222)",
              border: "1px solid #444",
              borderRadius: "4px",
              padding: "6px 16px",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
            }}
          >
            <span style={{ color: "#888" }}>{currentEra.years}</span>
            <span style={{ fontWeight: "bold" }}>{currentEra.name}</span>
            <span style={{ fontSize: "10px" }}>{isExpanded ? "▲" : "▼"}</span>
          </button>

          <Link
            href={currentIndex < eras.length - 1 ? `/era/${eras[currentIndex + 1].slug}` : "#"}
            style={{
              color: currentIndex < eras.length - 1 ? "#fff" : "#444",
              textDecoration: "none",
              padding: "4px 8px",
              fontSize: "18px",
              pointerEvents: currentIndex < eras.length - 1 ? "auto" : "none",
            }}
          >
            →
          </Link>
        </div>

        {/* Center: Timeline dots */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {eras.map((era, i) => (
            <Link
              key={era.id}
              href={`/era/${era.slug}`}
              title={`${era.years}: ${era.name}`}
              style={{
                width: i === currentIndex ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: i === currentIndex ? "#00ffff" : "#444",
                transition: "all 0.2s",
              }}
            />
          ))}
        </div>

        {/* Right: Label */}
        <div style={{ color: "#666", fontSize: "12px", whiteSpace: "nowrap" }}>
          Web Design Through Time
        </div>
      </div>

      {/* Expanded View */}
      {isExpanded && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "8px",
            padding: "16px",
            borderTop: "1px solid #333",
            backgroundColor: "#111",
          }}
        >
          {eras.map((era) => (
            <Link
              key={era.id}
              href={`/era/${era.slug}`}
              onClick={() => setIsExpanded(false)}
              style={{
                padding: "12px",
                backgroundColor: era.slug === currentEraSlug ? "#222" : "transparent",
                border: era.slug === currentEraSlug ? "1px solid #00ffff" : "1px solid #333",
                borderRadius: "4px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              <div style={{ color: "#888", fontSize: "11px" }}>{era.years}</div>
              <div style={{ color: "#fff", fontSize: "14px", fontWeight: "bold" }}>
                {era.name}
              </div>
              <div style={{ color: "#666", fontSize: "11px", marginTop: "4px" }}>
                {era.description}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
