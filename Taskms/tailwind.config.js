/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollbar: ['rounded']
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar')],
}

