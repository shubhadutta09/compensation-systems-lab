import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#161a1d",
        steel: "#2f3e46",
        cloud: "#f8f9fa",
        teal: "#2a9d8f",
        amber: "#f4a261",
        rust: "#e76f51"
      },
      fontFamily: {
        sans: ["'IBM Plex Sans'", "'Segoe UI'", "sans-serif"],
        display: ["'Space Grotesk'", "'Avenir Next'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"]
      },
      boxShadow: {
        panel: "0 10px 35px rgba(22, 26, 29, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
