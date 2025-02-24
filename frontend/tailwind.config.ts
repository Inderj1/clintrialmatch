import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        custom: '#98c1d9',
        font: '#293241',
        text: '#293241',
        navbar: '#e2e2e2',
        background: {
          DEFAULT: '#edf2f4',
          light: '#edf2f4'
        },
        header: '#5f5000',
        accent: '#edf2f4',
        primary: {
          DEFAULT: '#98c1d9',
          dark: '#3d5a80',
          light: '#e0fbfc'
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
