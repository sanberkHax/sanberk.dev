/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideReveal: {
          '0%': { transform: 'translateX(-200px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        upDown: {
          '0%,100%': {
            transform: 'translateY(-50%)',
            opacity: '0',
          },
          '50%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideReveal: 'slideReveal 300ms ease-in-out',
        upDown: 'upDown 2s infinite',
      },
    },
  },
  plugins: [],
};
