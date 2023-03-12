//const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addBase }) {
  addBase({
    [':root']: {
      '--scrollbar-size': '6px',
      '--progress-height': '4px',
      '--progress-color': colors.slate[600],
      '--progress-bg-color': colors.slate[400]
    },
    ['::selection']: {
      color: 'rgb(229 231 235)',
      'background-color': 'rgb(118 169 250)'
    },
    ['::-webkit-scrollbar-track']: {
      '-webkit-overflow-scrolling': 'touch',
      '-webkit-box-shadow': 'inset 0 0 8px rgba(0, 0, 0, 0.3)',
      'background-color': 'rgb(107 114 128)',
      'border-radius': '0.5rem',
      'box-shadow': 'inset 0 0 8px rgba(0, 0, 0, 0.3)'
    },
    ['::-webkit-scrollbar']: {
      '-webkit-overflow-scrolling': 'touch',
      width: 'var(--scrollbar-size)',
      height: 'var(--scrollbar-size)',
      'background-color': 'rgb(107 114 128)'
    },
    ['::-webkit-scrollbar-thumb']: {
      '-webkit-overflow-scrolling': 'touch',
      '-webkit-box-shadow': 'inset 0 0 8px rgba(0, 0, 0, 0.3)',
      'background-color': 'rgb(31 41 55)',
      'border-radius': '0.5rem',
      'box-shadow': 'inset 0 0 8px rgba(0, 0, 0, 0.3)'
    },

    ['progress']: {
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
      appearance: 'none',
      border: 'none',
      width: '100%',
      height: 'var(--progress-height)',
      color: 'var(--progress-color)',
      'background-color': 'var(--progress-bg-color)'
    },
    ['::-webkit-progress-bar']: {
      'background-color': 'var(--progress-bg-color)'
    },
    ['::-webkit-progress-value']: {
      'background-color': 'var(--progress-color)'
    },
    ['::-moz-progress-bar']: {
      'background-color': 'var(--progress-color)'
    },

    ['html']: {
      width: '100%',
      'min-height': '100%'
      // 'scroll-snap-type': 'y mandatory'
    },
    ['body']: {
      width: '100%',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      'min-height': '100vh',
      'overflow-y': 'scroll',
      'scroll-behavior': 'smooth'
    },
    ['@supports not (-moz-appearance: none)']: {
      [['body.overflow-y-hidden', 'body.overflow-y-hidden .overflow--offset']]: {
        'padding-right': 'var(--scrollbar-size) !important'
      }
    }
  });
});
