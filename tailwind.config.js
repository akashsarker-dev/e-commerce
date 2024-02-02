/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      maxWidth: {
        'container': '1240px',
      },
      colors: {
        'primary': '#010F1C',
        'second-primary': '#0989FF',
        'third-primary': '#55585B',
      },
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif', ],
    }
  },
  plugins: [],
}