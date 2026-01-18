import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. Add these Keyframes
      keyframes: {
        "hologram-scan": {
          "0%, 100%": {
            transform: "translateY(-10%) translateX(0)",
            opacity: "0.5",
          },
          "50%": { transform: "translateY(10%) translateX(-5%)", opacity: "1" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
      },
      // 2. Add the Animation names
      animation: {
        hologram: "hologram-scan 4s ease-in-out infinite",
        "glow-pulse": "pulse-glow 3s ease-in-out infinite alternate",
      },
      fontFamily: {
        // 1. Standard Text
        sans: ["var(--font-inter)", "sans-serif"],
        // 2. Futuristic Headings
        cyber: ["var(--font-oxanium)", "cursive"],
        // 3. Code / Scramble Text
        mono: ["var(--font-roboto)", "monospace"],
        // 4. Glitch Effect Name
        glitch: ["var(--font-rubik)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
