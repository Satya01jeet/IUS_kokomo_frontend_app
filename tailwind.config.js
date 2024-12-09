/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fbfdfe",
          "200": "#1b2328",
          "300": "rgba(20, 36, 46, 0.4)",
          "400": "rgba(0, 0, 0, 0)",
          "500": "rgba(255, 255, 255, 0.17)",
        },
        darkslateblue: {
          "100": "#273a97",
          "200": "#033d8b",
        },
        white: "#fff",
        slategray: "#797a8c",
        midnightblue: "#2f3292",
        steelblue: "rgba(42, 91, 121, 0.09)",
        royalblue: "#0d6efd",
      },
      spacing: {},
      fontFamily: {
        "dm-sans": "'DM Sans'",
        inter: "Inter",
        montserrat: "Montserrat",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        nunito: "Nunito",
      },
      borderRadius: {
        "11xl": "30px",
      },
    },
    fontSize: {
      smi: "13px",
      sm: "14px",
      "6xl": "25px",
      base: "16px",
      mini: "15px",
      "9xl": "28px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1400px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
