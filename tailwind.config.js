/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jakom-primary': '#0A1128',
        'jakom-accent': '#C9B072',
        'jakom-success': '#4CAF50',
        'jakom-text-light': '#F8F8F8',
        'jakom-text-secondary': '#CCD2E3',
      },
    },
  },
  plugins: [],
}