"use client";

import { useEffect } from "react";

export function MouseTrail() {
  useEffect(() => {
    const colors = ["#ff00ff", "#00ffff", "#ffff00", "#00ff00", "#ff0000"];

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.85) {
        const sparkle = document.createElement("div");
        sparkle.style.cssText = `
          position: fixed;
          pointer-events: none;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          box-shadow: 0 0 10px currentColor, 0 0 20px #ff00ff;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          z-index: 9999;
          animation: sparkle-fade 0.8s forwards;
        `;
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);
      }
    };

    // Add animation keyframes
    const style = document.createElement("style");
    style.textContent = `
      @keyframes sparkle-fade {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(0); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      style.remove();
    };
  }, []);

  return null;
}
