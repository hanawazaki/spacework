/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'mainPurple': "#4A58A7",
        'lightPurple': "#5C6BC0",
        'mainBlack': "#282828",
        'darkBlue': "#1C4178",
        'subGray': "#716F6F",
        'subGrayLight': '#9B9B9B',
        'lightGray': '#F3F3F6',
        'quoteGray': '#c4c4c4',
        'cstBlackFoot': '#282828'
      },
      spacing: {
        '1.5': '6px',
        '13': '50px',
        '23': '93px',
        'pHero': '12.5rem',
        'iconSpace': '6.25',
        'sectionGap': '135px',
        '23': '23rem',
        '142': '142px',
        '445': '445px',
        '500': '500px',
        '215': '215px',
      },
      lineHeight: {
        'title': '65.47px',
        'subTitle': '24.55px'
      },
      borderRadius: {
        'lg2': '10px',
        'lg3': '13.33px'
      },
      dropShadow: {
        '3xl': '2px 7px 15px rgba(28, 65, 120, 0.3)'
      },
      height: {
        '70vh': '70vh'
      }
    },
  },
  plugins: [],
}
