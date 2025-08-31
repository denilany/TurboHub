/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        regular: ["Inter-Regular", "sans-serif"],
        medium: ["Inter-Medium", "sans-serif"],
        bold: ["Inter-Bold", "sans-serif"],
      },
      colors: {
        light: {
          background: "#ffffff",
          text: "#111111",
        },
        dark: {
          background: "#111111",
          text: "#ffffff",
        },
      },
    },
  },
  plugins: [],
}
