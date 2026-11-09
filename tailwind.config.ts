import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1E3A5F",
          "primary-hover": "#2A4E7E",
          "primary-focus": "#152A45",
          "primary-light": "#EAF0F8",
          "primary-subtle": "rgba(30, 58, 95, 0.08)",
          gold: "#D6A95F",
          "gold-hover": "#C49746",
          "gold-subtle": "rgba(214, 169, 95, 0.12)",
          coral: "#E3A5A0",
          "coral-subtle": "rgba(227, 165, 160, 0.12)",
          canvas: "#F6F8FA",
          surface: "#FFFFFF",
          "surface-subtle": "#EEF2F6",
          "surface-muted": "#E5EBF2",
          "dark-canvas": "#161A22",
          "dark-surface": "#1D222B",
          "dark-elevated": "#242A36",
          "dark-card": "#1E242F",
          border: "#DDE2E8",
          "border-subtle": "#CFD5DF",
          "dark-border": "#2C3341",
          "dark-border-subtle": "#3A4456",
          ink: "#111418",
          "ink-secondary": "#475467",
          "ink-tertiary": "#667085",
          "dark-ink": "#F8F9FA",
          "dark-ink-secondary": "#C4CBD4",
          "dark-ink-tertiary": "#8A94A6",
          success: "#2E7D5B",
          warning: "#D97706",
          error: "#C55A57",
          info: "#2563EB",
        },
      },
      fontFamily: {
        title: ["'Bricolage Grotesque'", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        body: ["'Myriad Bengali'", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        accent: ["'Dancing Script'", "cursive"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest: "0.22em",
        pill: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
