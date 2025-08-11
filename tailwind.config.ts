/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF6E5",
        cocoa: "#A47148",
        crust: "#F4D9AE",
        pinkfrost: "#F8D3D3",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
        cherry: ["Cherry Bomb One", "cursive"],
        roboto: ['"Roboto"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
