/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1ABC9C',
        secondary: '#FF6F61',
        accent: '#F39C12',
        gray: {
          DEFAULT: '#34495E',
          dark: '#2C3E50',
          light: '#ECF0F1',
        },
      },
      borderRadius: {
        corner: "4px",
      }
    },
  },
  plugins: [],
}
