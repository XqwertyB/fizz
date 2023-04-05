/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      bgbutton: "#1C71FF",
      orange: "#FF7400",
      dark: "#2C2C2C",
      gray: "#656363",
      footerbg: "F5F5F5",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1110px", 
    },
    fontFamily: {
      manrope: ["Manrope"],
    },
  },
  plugins: [],
}
