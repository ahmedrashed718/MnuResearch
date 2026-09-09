/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-app)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f8f5',
          100: '#dcefe7',
          200: '#b9dfd1',
          400: '#369373',
          500: '#147354',
          600: '#075c42',
          700: '#034b36',
          800: '#033d2e',
          900: '#022f24',
          950: '#011d17',
        },
        gold: {
          50: '#fdf9ed',
          100: '#f8edc9',
          200: '#f1da91',
          400: '#ddb440',
          500: '#c99724',
          600: '#ad761a',
          700: '#8a5518',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -15px rgb(15 23 42 / 0.22)',
        elegant: '0 24px 70px -24px rgb(1 45 33 / 0.3)',
      },
    },
  },
  plugins: [],
};
