/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'
export default {
  content: {
    files:[
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    extract
  },
  theme: {
    screens, // Tailwind's default screens, in `rem`
    fontSize,
    extend: {
      fontFamily: {
        dm: ['"DM Sans"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
      fontSize: {
        'custom-36': '36px',
        'custom-28':'28px',
        'custom-18':'18px',
        'custom-btn':'20px',

      },
      fontWeight: {
        boldd: '700',
        mediumm:'500',
        regularr:'400'

      },
      colors: {
        black: '#030303',  
        secondary: '#193960',  
        primary: '#2475A5',  
        white: '#FEFEFE',  
        background: '#EDF2F6',  
        hover: '#3279A5', 
        fade_white: '#FBFBFB',   
      },
    },
  },
  plugins: [fluid],
}