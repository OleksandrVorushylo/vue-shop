/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // min-width
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      menuMedia: '1200px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1800px',

      // max-width
      'max-xs': { max: '359px' },
      'max-sm': { max: '639px' },
      'max-md': { max: '767px' },
      'max-lg': { max: '1023px' },
      'max-menuMedia': { max: '1199px' },
      'max-xl': { max: '1279px' },
      'max-2xl': { max: '1535px' },
      'max-3xl': { max: '1799px' },
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      },
    },
  },
  plugins: [],
};
