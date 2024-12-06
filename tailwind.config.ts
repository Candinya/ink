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
      margin: {
        "screen/4": "25vh",
        "screen/2": "50vh",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/4": "3 / 4",
      },
    },
  },
  plugins: [],
} satisfies Config;
