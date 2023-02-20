/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      background: "url('../public/assets/back-ground.png')",
    },
    colors: {
      gray: "#333333",
      white: "#ffffff",
      yellow: "#F3AA00",
    },
    fontFamily: { poppins: ["Poppins"], nunito: ["Nunito Sans"] },
  },
  plugins: [],
}
