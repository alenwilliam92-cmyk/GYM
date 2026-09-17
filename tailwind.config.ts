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
        page: "#FAF7F0",
        surface: "#FFFFFF",
        sand: "#EDE5D8",
        sage: "#DEE6D8",
        main: "#384536",
        secondary: "#62685D",
        accent: "#B9472B",
        "accent-hover": "#983820",
        divider: "#D8D3C8",
        "input-outline": "#7B8174",
        error: "#B42318",
        // Legacy aliases for non-breaking compatibility
        ivory: "#FAF7F0",
        "sand-border": "#D8D3C8",
        "deep-olive": "#384536",
        "muted-olive": "#62685D",
        "burnt-orange": "#B9472B",
        "burnt-orange-hover": "#983820",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        manrope: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1320px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      transitionDuration: {
        180: "180ms",
      },
    },
  },
  plugins: [],
};

export default config;
