import { useState } from "react";

export default function DeutLichtBadge() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://www.deutlicht.de"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textDecoration: "none" }}
    >
      {/* Tooltip */}
      <div
        className="hidden md:block pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 8,
            fontSize: 11,
            color: "rgba(255,255,255,0.85)",
            padding: "6px 10px",
            whiteSpace: "nowrap",
          }}
        >
          Diese Website wurde von DeutLicht® entwickelt
        </div>
        {/* Arrow */}
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: "5px solid rgba(0,0,0,0.85)",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Badge */}
      <div
        className="flex items-center cursor-pointer"
        style={{
          height: window.innerWidth < 768 ? 24 : 28,
          padding: window.innerWidth < 768 ? "6px 12px" : "6px 14px",
          background: hovered ? "rgba(0,0,0,0.92)" : "rgba(0,0,0,0.75)",
          backdropFilter: "blur(8px)",
          border: hovered ? "1px solid rgba(255,255,255,0.35)" : "1px solid rgba(255,255,255,0.15)",
          borderRadius: 20,
          boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "all 0.25s ease",
          gap: 5,
        }}
      >
        <span style={{ color: "#E30613", fontSize: window.innerWidth < 768 ? 10 : 12, lineHeight: 1 }}>⚡</span>
        <span
          className="font-display"
          style={{
            fontSize: window.innerWidth < 768 ? 10 : 11,
            fontWeight: 600,
            letterSpacing: 0.5,
            color: hovered ? "#ffffff" : "rgba(255,255,255,0.7)",
            transition: "color 0.25s ease",
            lineHeight: 1,
          }}
        >
          by DeutLicht®
        </span>
      </div>
    </a>
  );
}
