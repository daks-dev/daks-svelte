const defaultTheme = require('tailwindcss/defaultTheme');
//const colors = require('tailwindcss/colors');

/*
const sort = (obj) =>
  Object.keys(obj)
    .sort()
    .reduce((res, key) => ((res[key] = obj[key]), res), {});
*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens
    },
    extend: {
      container: {
        center: true
      },
      screens: {
        '-2xl': { max: '1535px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
        '-xs': { max: '479px' }
      },
      fontSize: {
        '3xs': '0.5rem',
        '2xs': '0.625rem',
        '1.5xl': '1.375rem',
        '2.5xl': '1.6875rem',
        '3.5xl': '2rem',
        '4.5xl': '2.5rem'
      },
      listStyleType: {
        circle: 'circle',
        square: 'square'
      },
      backgroundSize: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '1/4': '25%',
        '1/5': '20%',
        '1/10': '10%',
        '1/20': '5%'
      },
      backgroundPosition: {
        'center-top': 'center top'
      },
      backgroundImage: {
        waiting: 'url(daks-svelte/icons/spinners/clock.svg)',
        loading: 'url(daks-svelte/icons/spinners/90-ring-bg.svg)'
      },
      spacing: {
        inherit: 'inherit'
      },
      minWidth: {
        auto: 'auto'
      },
      minHeight: {
        auto: 'auto'
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '4/3': '4 / 3',
        A4: '620 / 877',
        A4l: '877 / 620'
      },
      content: {
        null: '""'
      },
      dropShadow: {
        'deep': [
          '0 4px 3px rgb(0 0 0 / 0.4',
          '0 2px 2px rgb(0 0 0 / 0.2)'
        ],
        'hard': [
          '0 4px 3px rgb(0 0 0 / 0.7',
          '0 2px 2px rgb(0 0 0 / 0.4'
        ]
      }
    }
  },

  plugins: [
    require('../plugins/base.cjs'),
    require('../plugins/components.cjs'),
    require('../plugins/utilities.cjs'),
    require('../plugins/aria.cjs'),
    require('../plugins/onscroll.cjs'),
    require('../plugins/animation-play-state.cjs'),
    require('../plugins/svg/vector-effect.cjs')
  ]
};
