"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "hot";
  className?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "default",
  className = "",
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: "inline-block",
    padding: "12px 24px",
    fontFamily: "'VT323', monospace",
    fontSize: "20px",
    border: "3px solid",
    borderTopColor: "#ffffff",
    borderLeftColor: "#ffffff",
    borderBottomColor: "#808080",
    borderRightColor: "#808080",
    cursor: "pointer",
    textDecoration: "none",
    textAlign: "center",
  };

  const variantStyles: React.CSSProperties =
    variant === "hot"
      ? {
          background: "linear-gradient(to bottom, #f87171, #dc2626)",
          color: "#ffffff",
          textShadow: "1px 1px 0 #000",
        }
      : {
          backgroundColor: "#c0c0c0",
          color: "#000000",
        };

  const combinedStyles = { ...baseStyles, ...variantStyles };

  if (href) {
    return (
      <Link href={href} className={className} style={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className} style={combinedStyles}>
      {children}
    </button>
  );
}
