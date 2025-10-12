/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9e6e8',
          100: '#f2cdd1',
          200: '#e99ba3',
          300: '#e06975',
          400: '#d73747',
          500: '#c82333', // primary red
          600: '#a01c29',
          700: '#78151f',
          800: '#500e15',
          900: '#28070a',
        },
        secondary: {
          50: '#e6f2f1',
          100: '#cce5e2',
          200: '#99cbc5',
          300: '#66b0a8',
          400: '#33968b',
          500: '#2A9D8F', // secondary teal
          600: '#267d72',
          700: '#1d5e56',
          800: '#133e39',
          900: '#0a1f1d',
        },
        accent: {
          50: '#fef2e9',
          100: '#fde5d3',
          200: '#fccba7',
          300: '#fab07b',
          400: '#f7964f',
          500: '#F4A261', // accent orange
          600: '#e27921',
          700: '#aa5c19',
          800: '#713d11',
          900: '#391e08',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'ui-serif', 'Georgia'],
      },
      spacing: {
        '128': '32rem',
      },
      // Add new animations here
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
      },
      // Add new keyframes here
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      // Add animation delay utilities
      animationDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      }
    },
  },
  plugins: [],
};