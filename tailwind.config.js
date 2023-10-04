/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '1125px',
      },
    },
  },
  plugins: [],
}

