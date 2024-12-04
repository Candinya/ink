import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: "#62b6e7",
        background: "#fff",
      },
      height: {
        "screen/4": "25vh",
        "screen/2": "50vh",
      },
      margin: {
        "screen/4": "25vh",
        "screen/2": "50vh",
      },
    },
  },
  plugins: [],
} satisfies Config;
