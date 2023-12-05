const { nextui } = require('@nextui-org/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // single component styles
    // './node_modules/@nextui-org/theme/dist/components/button.js',
    // or you can use a glob pattern (multiple component styles)
    './node_modules/@nextui-org/theme/dist/components/(button|navbar|link|slider).js'
  ],
  theme: { /* 01253e,9dbdba,f8b042,ec6a52,f3b7ad */
    extend: {
      container: {
        screens: {
          sm: '640px',
          // => @media (min-width: 640px) { ... }

          md: '768px',
          // => @media (min-width: 768px) { ... }

          lg: '1024px'
        }
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
        dosis: ['"Dosis"', 'sans-serif'],
        kumbh: ['"Kumbh Sans"', 'sans-serif']
      },
      colors: {
        myblue: '#01253e',
        mygray: '#f8f8f8',
        mygold: '#f8b042',
        myorange: '#ec6a52',
        mygreen: '#2ddb3f',
        mypink: '#f3b7ad'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
