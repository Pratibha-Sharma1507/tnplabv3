import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "var(--color-ink-950)",
          900: "var(--color-ink-900)",
          800: "var(--color-ink-800)",
          700: "var(--color-ink-700)",
          600: "var(--color-ink-600)",
        },
        signal: {
          blue: "var(--color-signal-blue)",
          "blue-dim": "var(--color-signal-blue-dim)",
          lime: "var(--color-signal-lime)",
          "lime-dim": "var(--color-signal-lime-dim)",
        },
        teal: {
          deep: "#0B5A6B",
          mid: "#12889C",
          light: "#1FB4C4",
        },
        mist: "var(--color-mist)",
        theme: {
          page: "var(--theme-page)",
          panel: "var(--theme-panel)",
          strong: "var(--theme-strong)",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)",
      },
      boxShadow: {
        panel: "0 30px 80px -40px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
