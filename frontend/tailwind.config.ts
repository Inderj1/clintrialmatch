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
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: '0.75rem',    // 12px
        sm: '0.875rem',   // 14px
        base: '1rem',     // 16px
        lg: '1.125rem',   // 18px
        xl: '1.25rem',    // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',     // 48px
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
