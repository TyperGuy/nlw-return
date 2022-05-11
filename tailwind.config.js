module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors : {
        brand: {
          300 : '#996DFF',
          500 : '#9257e6',
        }
      },
      borderRadius:{
        md:'4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
