/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(auto-fit, minmax(50px, 1fr))'
      },
    },
  },
  plugins: [],
}

