import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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

export default config;
