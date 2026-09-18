import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12201A",
        field: "#1E6B3C",
        moss: "#DCE9DA",
        chalk: "#F6F7F3",
        stone: "#6B7368",
      },
      fontFamily: { sans: ["Manrope Variable", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
