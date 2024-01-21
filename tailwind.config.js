/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "ColorPrimario": "#0B303B",
        "ColorSecundario": "#FEF4EE",
        "ColorMorado": "#5454D2",
        "ColorTitulo": "#0074B6",
        "ColorGreen": "#E2FDC7",
      }
    },
    fontFamily:{
      Sora:["Sora", "sans-serif"],
    }
  },
  plugins: [],
}

