/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          deep: '#121212',
          carbon: '#1E1E1E',
        },
        primary: {
          neon: '#00E5FF',
        },
        secondary: {
          alert: '#FF004D',
        },
        text: {
          ghost: '#F0F0F0',
          dim: '#A0A0A0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-carbon': 'linear-gradient(to bottom, #1E1E1E, #121212)',
      },
    },
  },
  plugins: [],
}