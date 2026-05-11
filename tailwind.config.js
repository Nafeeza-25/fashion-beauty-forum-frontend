module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f4',
          100: '#fbe5e9',
          200: '#f7cdd5',
          300: '#f0a8b7',
          400: '#e5778f',
          500: '#d85c7b',
          600: '#c54264',
          700: '#a7304f',
          800: '#8a2a44',
          900: '#75273d',
        },
        background: '#fcfcfc',
        surface: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
