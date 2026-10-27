import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        bricolage: ["'Bricolage Grotesque'", "var(--font-bricolage)", "sans-serif"],
        display: ["'Bricolage Grotesque'", "'Proxima Nova'", "var(--font-heading)", "Arial", "sans-serif"],
        heading: ["'Bricolage Grotesque'", "'Proxima Nova'", "var(--font-heading)", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      boxShadow: {
        soft: "0 16px 48px rgba(15, 34, 70, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
