/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'primary': '#F3F3F3',
      },
    },
    fontFamily: {
      'dm-sans': ['DM Sans', 'sans-serif', ],
    }
  },
  plugins: [],
}