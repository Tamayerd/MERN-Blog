/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#156D8",
        dark: {
          light: '#5A7184',
          hard:"#0D2436",
          soft: "#183B56"
        }
      },
      fontFamily: {
        opensans: ["'Montserrat'"," sans-serif"],
        roboto:["'Noto Sans'", "sans-serif"],
      }
    },
  },
  plugins: [],
};
