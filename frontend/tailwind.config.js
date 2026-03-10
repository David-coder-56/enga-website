/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "enga-black": "#050505",
        "enga-white": "#FAFAFA",
        "enga-gold": "#D4AF37",
        "enga-maroon": "#800000",
        "enga-dark": "#0D0D0D",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #E5C76B 50%, #D4AF37 100%)",
      },
    },
  },
  plugins: [],
};
