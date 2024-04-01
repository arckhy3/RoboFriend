/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        grow: {
          '0%, 100%' : { transform: 'scale-105'},
          '50%': { transform : 'scale-0'}
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        grow : 'grow 0,25s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

