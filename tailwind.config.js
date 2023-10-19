/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        night: '#1a1e1d',
        midnight: '#2b3130',
        secondary: '#f7f7f7',
        primary: '#ff2985',
      }
    },
  },
  plugins: [],
}

