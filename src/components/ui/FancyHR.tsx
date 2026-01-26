"use client";

export function FancyHR() {
  return (
    <div
      style={{
        position: "relative",
        height: "20px",
        margin: "32px 0",
        background: "linear-gradient(to right, transparent, #ff00ff, #00ffff, #00ff00, #ffff00, transparent)",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: "8px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "24px",
          color: "#ffff00",
          animation: "spin 2s linear infinite",
        }}
      >
        ★
      </span>
      <span
        style={{
          position: "absolute",
          right: "8px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "24px",
          color: "#ffff00",
          animation: "spin 2s linear infinite",
        }}
      >
        ★
      </span>
    </div>
  );
}
