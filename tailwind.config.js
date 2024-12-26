/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '14px',
    },
    extend: {
      colors: {
         ungu: '#CA8A04',
         dark: '#020617',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

