/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        ink: '#171916',
        muted: '#747970',
        paper: '#f8f8f5',
        lime: '#c8f169',
        line: '#e6e8e1',
      },
      boxShadow: {
        soft: '0 20px 70px rgba(27, 34, 24, .08)',
      },
    },
  },
  plugins: [],
}
