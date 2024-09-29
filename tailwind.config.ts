import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './assets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D1B2A',
        secondary: '#1B263B',
        tertiary: '#1F2C43',
        quaternary: '#22304A',
      },
      backgroundColor: {
        primary: '#0D1B2A',
        secondary: '#1B263B',
        tertiary: '#1F2C43',
        quaternary: '#22304A',
        light: '#fff',

        success: '#2ECC71',
        error: '#E74C3C',
      },
      fill: {
        primary: '#0D1B2A',
        secondary: '#1B263B',
        tertiary: '#1F2C43',
        quaternary: '#22304A',
      },
      textColor: {
        primary: '#E0E1DD',
        secondary: '#888888',
      },
      padding: {
        'section-base': '8rem',
        'section-lg': '16rem',
        'section-sm': '5.25rem',
      },
      width: {
        main: '1200px',
        contact: '550px',
        dropdown: '140px',
      },
      maxWidth: {
        main: '90%',
      },
      animation: {
        'letter-bounce': 'letter-bounce 5s infinite',
      },
      keyframes: {
        'letter-bounce': {
          '0%': {
            transform: 'translateY(0)',
          },
          '7%': {
            transform: 'translateY(-5px)',
          },
          '14%, 100%': {
            transform: 'translateY(0)',
          },
        }
      },
    },
  },
  plugins: [],
};
export default config;
