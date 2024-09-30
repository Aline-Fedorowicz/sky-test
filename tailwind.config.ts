import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1900px"
    },
    extend: {
      colors: {
        backgroundLayout: '#fafaff',
        background: '#ffffff',
        foreground: '#171717',
        headerBackground: '#f1f2fa',
        footerBackground: '#f1f2fa',
        headerCircleIconBackground: '#fafaff',
        line: '#50505026',
        navTab: '#fff',
        bgDefault: '#fff',
        primary: '#f35c58fd',
        dark: {
          backgroundLayout: '#323233',
          background: '#0a0a0a',
          foreground: '#ededed',
          headerBackground: '#262628',
          footerBackground: '#262628',
          headerCircleIconBackground: '#323233',
          line: '#202020a8',
          navTab: '#333333',
          bgDefault: '#333333',
        },
      },
      fontSize: {
        xs: '14px',
        sm: '16px',
        base: '18px',
        lg: '20px',
        xl: '24px',
        '2xl': '30px',
        '3xl': '36px',
        '4xl': '40px',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
