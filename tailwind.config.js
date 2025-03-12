// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que Tailwind pueda procesar los archivos .jsx
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f5e8ff',
          100: '#e2b7ff',
          200: '#d185ff',
          300: '#be54ff',
          400: '#a623ff',
          500: '#8a1aff',
          600: '#7014e6',
          700: '#5b0cbd',
          800: '#440a99',
          900: '#2e0776',
        },
      },
    },
  },
  plugins: [],
}