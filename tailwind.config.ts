import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 2s ease-in-out",
      },
      colors: {
        yellow: "#F9F25F",
      },
    },
  },
  variants: {},
  plugins: [],
} satisfies Config;
