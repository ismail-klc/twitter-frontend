module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'no-mobile': '500px'
      },
      spacing: {
        'ww': 'calc(90vw - 600px) / 2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
