import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#62b6e7",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        "screen/4": "25vh",
        "screen/2": "50vh",
      },
      maxHeight: {
        "screen/2": "50vh",
      },
      margin: {
        "screen/4": "25vh",
        "screen/2": "50vh",
      },
      animation: {
        "spin-player": "spin 12s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
