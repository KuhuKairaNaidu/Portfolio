/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#E8D5F2',
          blue: '#D5D9F2',
          mint: '#D5F2E8',
          lavender: '#E0D5F2',
          yellow: '#F2EDD5',
          peach: '#F2E5D5'
        },
        primary: {
          50: '#F3F0FF',
          100: '#E9E5FF',
          200: '#D6CCFF',
          300: '#BFB3FF',
          400: '#A699FF',
          500: '#8B7FFF',
          600: '#7366FF',
          700: '#5B4CFF',
          800: '#4733FF',
          900: '#3319E6'
        },
        accent: {
          50: '#FAF0FF',
          100: '#F5E1FF',
          200: '#EBC3FF',
          300: '#DFA4FF',
          400: '#D186FF',
          500: '#C268FF',
          600: '#B34AFF',
          700: '#A32CFF',
          800: '#920EFF',
          900: '#7F00E6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        handwritten: ['Caveat', 'cursive']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};