/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#14D9E6",
      secondary: "#9DFE00",
      info: "#14d9e5",
      transparent: "transparent",
      white: "#fff",
    },

    fontFamily: {
      sans: ["TTTravels", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
