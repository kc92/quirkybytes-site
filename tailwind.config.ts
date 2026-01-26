import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Windows 95 colors
        win: {
          bg: "#c0c0c0",
          dark: "#808080",
          light: "#ffffff",
          blue: "#000080",
        },
        // Neon accents
        neon: {
          pink: "#ff00ff",
          green: "#00ff00",
          blue: "#00ffff",
          yellow: "#ffff00",
          red: "#ff0000",
        },
        // Background colors
        retro: {
          dark: "#000033",
          darker: "#000022",
          space: "#0a0014",
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "cursive"],
        terminal: ["VT323", "monospace"],
        comic: ['"Comic Neue"', "cursive"],
      },
      animation: {
        blink: "blink 0.5s infinite",
        glow: "glow 1.5s ease-in-out infinite alternate",
        scroll: "scroll 12s linear infinite",
        spin3d: "spin3d 3s linear infinite",
        rainbow: "rainbow 2s linear infinite",
        dance: "dance 0.5s infinite alternate",
        pulse: "pulse 1s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        glow: {
          from: {
            textShadow:
              "3px 3px 0 #ff00ff, 6px 6px 0 rgba(0,0,0,0.5), 0 0 10px #00ffff",
          },
          to: {
            textShadow:
              "3px 3px 0 #ff00ff, 6px 6px 0 rgba(0,0,0,0.5), 0 0 40px #00ffff, 0 0 80px #ff00ff",
          },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spin3d: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(360deg)" },
        },
        rainbow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        dance: {
          from: { transform: "rotate(-5deg)" },
          to: { transform: "rotate(5deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
