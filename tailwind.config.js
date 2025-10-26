/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        lg: '2rem'
      },
      screens: {
        '2xl': '1200px',
        xl: '1025px',
        lg: '800px',
        sm: '100%'
      }
    },
    extend: {
      fontSize: {
        '2xl': ['1.375rem', '1.6525rem'],
        '4xl': ['2.5rem', '2.8rem']
      },
      colors: {
        'main-black': '#111',
        'main-gray': '#1b1b1b',
        'badem-brown': '#B78F6F',
        'badem-brown-dark': '#A57C5C',
        'text-muted': '#E3E3E3',
        purple: '#7C51A0',
        white: '#fff'
      },
      fontFamily: {
        prompt: ['var(--font-prompt)']
      },
      borderWidth: {
        1: '0.0625rem'
      },
      height: {
        1: '0.0625rem'
      }
    }
  },
  plugins: []
}
