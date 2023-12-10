/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // To over write the main font that tailwind gives us
      sans: ["Roboto Mono", "sans-serif"],
    },
    extend: {
      // To extend the font families that you could use
      fontFamily: "Roboto Mono, monospace",
      colors: {
        hi: "green",
      },
      screens: {
        tablet: "991px",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
