/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  screen: {
    sm: '375px',
    md: '768px',
    lg: '1024px',
    xl: '1440px'
  },
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      title: '2.75rem',
      paragraph: '1.185rem'
    },
    fontFamily: {
      fraunces: ['Fraunces', 'serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    letterSpacing: {
      xl: '.5rem'
    },
    extend: {
      padding: {
        '13': '3.1rem'
      },
      maxHeight: {
        image: '40rem'
      },
      colors: {
        darkCyan: 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)',
        darkBlue: 'hsl(212, 21%, 14%)',
        grayishBlue: 'hsl(228, 12%, 48%)',
        white: 'hsl(0, 0%, 100%)'
      }
    }
  },
  plugins: []
}
