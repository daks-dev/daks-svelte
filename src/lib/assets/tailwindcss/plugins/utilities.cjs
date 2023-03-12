//const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
  addUtilities({
    [':root']: {
      '--text-shadow-color': colors.black,
      '--text-shadow-val': '1px'
    },
    ['.unset']: {
      all: 'unset'
    },
    ['.revert']: {
      all: 'revert'
    },
    ['.inherit']: {
      'letter-spacing': 'inherit',
      'text-align': 'inherit',
      'text-indent': 'inherit',
      'text-shadow': 'inherit',
      'text-transform': 'inherit',
      'word-spacing': 'inherit'
    },
    [['.disabled', ':disabled', '[disabled]']]: {
      'pointer-events': 'none',
      'touch-action': 'none',
      'user-select': 'none'
    },
    [['.enabled', ':enabled', '[enabled]']]: {
      'pointer-events': 'auto',
      'touch-action': 'auto',
      'user-select': 'auto'
    },
    ['.bg-only']: {
      display: 'inline-block',
      overflow: 'hidden',
      'text-align': 'left',
      'text-indent': '-9999em',
      direction: 'ltr',
      br: {
        display: 'none'
      }
    },
    ['.clear-pseudo']: {
      '&::before': {
        content: '""',
        position: 'absolute',
        'z-index': '-10',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        opacity: '0'
      },
      '&::after': {
        content: '""',
        display: 'table',
        clear: 'both'
      }
    },
    ['.drop-shadow--deep']: {
      'filter': `drop-shadow(0 4px 3px rgb(0 0 0 / 0.4))
                 drop-shadow(0 2px 2px rgb(0 0 0 / 0.2))`
    },
    ['.drop-shadow--hard']: {
      'filter': `drop-shadow(0 4px 3px rgb(0 0 0 / 0.7))
                 drop-shadow(0 2px 2px rgb(0 0 0 / 0.4))`
    },
    ['.text-shadow']: {
      'text-shadow': `var(--text-shadow-val)
                      var(--text-shadow-val)
                      calc(var(--text-shadow-val) * 1.5)
                      var(--text-shadow-color)`
    },
    ['.text-shadow-none']: {
      'text-shadow': 'none'
    },
    ['.readable']: {
      'font-size': '1rem',
      'line-height': '1.625',
      ['p:not(:last-child)']: {
        'margin-bottom': '0.375rem'
      },
      ul: {
        'list-style-position': 'inside',
        'list-style-type': 'disc',
        'text-align': 'left',
        'text-indent': '-1.25rem',
        'padding-left': '1.25rem',
      }
    }
  });
});
