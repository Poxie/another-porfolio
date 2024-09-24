import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#0D1B2A',
        secondary: '#1B263B',
        tertiary: '#1F2C43',
        quaternary: '#22304A',
      },
      textColor: {
        primary: '#E0E1DD',
        secondary: '#C5C6C7',
      },
    },
  },
  plugins: [],
};
export default config;
