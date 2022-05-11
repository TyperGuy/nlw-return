module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors : {
        brand: {
          500 : '#9257e6',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
