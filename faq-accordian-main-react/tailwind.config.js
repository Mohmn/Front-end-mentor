/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px', // Mobile width
        'lg': '1440px', // Desktop width
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        'light-pink': 'hsl(275, 100%, 97%)',
        'grayish-purple': 'hsl(292, 16%, 49%)',
        'dark-purple': 'hsl(292, 42%, 14%)',
      },
      fontFamily: {
        'sans': ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        'base': '16px', // Font size for paragraphs
      },
      fontWeight: {
        'normal': 400,
        'medium': 600,
        'bold': 700,
      },
    },
  },
  plugins: [],
}

