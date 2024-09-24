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
      backgroundColor: {
        primary: '#0D1B2A',
        secondary: '#1B263B',
        tertiary: '#1F2C43',
        quaternary: '#22304A',
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
        'section-lg': '14rem',
      },
      width: {
        main: '1200px',
      },
      maxWidth: {
        main: '95%',
      },
    },
  },
  plugins: [],
};
export default config;
