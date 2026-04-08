/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* From screenshot: light TASTEORY design */
        background: "#F8F8F8",
        "text-primary": "#212121",
        "text-body": "#525252",
        "border-light": "#D1D1D1",
        "card-bg": "#FFFFFF",
        "pill-bg": "#F5F5F5",
        accent: "#EA580C",
        "leaves": "#A7E088",
        /* Menu card gradients */
        "card-green-from": "#A3D9AA",
        "card-green-to": "#8EC298",
        "card-orange-from": "#F7A170",
        "card-orange-to": "#EA7E57",
        "card-blue-from": "#9AC7EF",
        "card-blue-to": "#80B0DC",
      },
      fontFamily: {
        sans: ["Inter", "Lato", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      borderRadius: {
        "card": "1rem",
        "card-lg": "1.5rem",
      },
      boxShadow: {
        "card": "0 4px 20px rgba(0,0,0,0.06)",
        "card-hover": "0 12px 40px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
