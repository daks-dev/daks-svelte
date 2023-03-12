const defaultTheme = require('tailwindcss/defaultTheme');

const fontFamily = ['Roboto', '"Helvetica Neue"']
  .concat(defaultTheme.fontFamily.sans)
  .filter((item, pos, array) => array.indexOf(item) === pos);

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: { sans: ['"Open Sans"', ...fontFamily] }
      // fontFamily: { sans: fontFamily }
    }
  }
};
