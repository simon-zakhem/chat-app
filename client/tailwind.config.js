/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Custom smaller breakpoint
        'xxl': '1440px', // Custom larger breakpoint
      },
      fontFamily: {
        handwriting: ['"Dancing Script"', 'cursive'],
        pacifico: ['"Pacifico"', 'cursive'],
        indie: ['"Indie Flower"', 'cursive'],
        caveat: ['"Caveat"', 'cursive'],
        amatic: ['"Amatic SC"', 'cursive'],
        patrick: ['"Patrick Hand"', 'cursive'],
        shadows: ['"Shadows Into Light"', 'cursive'],
        satisfy: ['"Satisfy"', 'cursive'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

