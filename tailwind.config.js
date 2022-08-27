/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
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
        light6: '#F3F8FC',
        light7: '#DBEAF9',
        light8: '#F2F2F2',
        light9: '#D3DCE5',
        light10: '#F2F7FF',
        light11: '#F2F5F8',
      },
      'green': {
        light: '#7FD59C',
        DEFAULT: '#377E62',
      },
      'orange': '#FFAC70',
      'orange2': '#FFF5F0',
      'orange3': '#FFEDE4',
      'pink': '#FF7979',
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
  plugins: []
}
