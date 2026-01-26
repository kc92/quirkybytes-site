"use client";

import React from "react";

interface WindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Window({ title, children, className = "" }: WindowProps) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: "#c0c0c0",
        border: "3px solid",
        borderTopColor: "#ffffff",
        borderLeftColor: "#ffffff",
        borderBottomColor: "#808080",
        borderRightColor: "#808080",
        boxShadow: "5px 5px 0 rgba(0,0,0,0.5)",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          background: "linear-gradient(to right, #000080, #1084d0)",
          color: "white",
          padding: "4px 8px",
          fontWeight: "bold",
          fontSize: "14px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{title}</span>
        <div style={{ display: "flex", gap: "3px" }}>
          {["_", "□", "×"].map((btn, i) => (
            <button
              key={i}
              style={{
                width: "16px",
                height: "14px",
                backgroundColor: "#c0c0c0",
                border: "1px solid",
                borderTopColor: "#ffffff",
                borderLeftColor: "#ffffff",
                borderBottomColor: "#808080",
                borderRightColor: "#808080",
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: 0,
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      <div style={{ backgroundColor: "#c0c0c0" }}>{children}</div>
    </div>
  );
}
