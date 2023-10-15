/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '1200px',
        'w816': '816px',
        'w650' : '650px'
      },
    },
  },
  plugins: [],
}

