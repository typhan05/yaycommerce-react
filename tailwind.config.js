/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#1D1E20',
      'black2': '#122940',
      'blue': '#2F70B3',
      'gray': {
        DEFAULT: '#5A6D80',
        light1: '#F2F7FB',
        light2: '#EDF3F9',
        light3: '#ECF2F8',
        light4: '#FAFAFA',
        light5: '#F5F5F5',
      },
      'green': {
        light: '#7FD59C',
        DEFAULT: '#377E62',
      },
      'orange': '#FFAC70'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['SF UI Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
