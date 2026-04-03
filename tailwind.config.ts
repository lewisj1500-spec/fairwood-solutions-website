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
        primary: {
          DEFAULT: "#00e676",
          light: "#69f0ae",
          dark: "#00c853",
        },
        heat: {
          DEFAULT: "#ff6500",
          light: "#ff9500",
          dark: "#e65000",
        },
        cyan: {
          DEFAULT: "#00bcd4",
          light: "#4dd0e1",
        },
        epc: {
          a: "#00a550",
          b: "#50b848",
          c: "#b3d334",
          d: "#fff200",
          e: "#ffb300",
          f: "#ff6b00",
          g: "#e53935",
        },
      },
      fontFamily: {
        head: ["var(--font-space)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        "orb-float": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "33%": { transform: "translateY(-28px) scale(1.04)" },
          "66%": { transform: "translateY(18px) scale(0.96)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        "scroll-reveal": {
          "0%": { transform: "scaleY(0)", opacity: "0", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
          "100%": { transform: "scaleY(0)", opacity: "0", transformOrigin: "bottom" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.75)" },
        },
        "energy-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0, 230, 118, 0.4)" },
          "50%": { boxShadow: "0 0 0 20px rgba(0, 230, 118, 0)" },
        },
        "rating-fill": {
          "0%": { width: "0%" },
          "100%": { width: "var(--target-width)" },
        },
        "counter-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "energy-pulse": "energy-pulse 2.5s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
