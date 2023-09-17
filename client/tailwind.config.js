/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'left': "#120F13",
        'main': "#252329",
        'input': "#3C393F",
      },
      blur: {
        xs: '1px',
      }
    },
  },
  plugins: [],
}
