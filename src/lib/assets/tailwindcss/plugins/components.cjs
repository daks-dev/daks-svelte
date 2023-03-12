//const defaultTheme = require('tailwindcss/defaultTheme');
//const colors = require('tailwindcss/colors');

const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    ['.wrapper, .content']: {
      width: '100%',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'padding-left': '2rem',
      'padding-right': '2rem'
    },
    ['.wrapper']: {
      'max-width': '80rem',
      '@media (min-width: 1344px)': {
        'padding-left': '0px',
        'padding-right': '0px'
      }
    },
    ['.content']: {
      'max-width': '64rem',
      '@media (min-width: 1088px)': {
        'padding-left': '0px',
        'padding-right': '0px'
      }
    },
    ['.button']: {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      'max-width': 'max-content',
      'padding-top': '0.5rem',
      'padding-bottom': '0.5rem',
      'padding-left': '1rem',
      'padding-right': '1rem'
    }
  });
});
