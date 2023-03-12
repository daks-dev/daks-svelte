const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addVariant }) {
  addVariant('step', '&[aria-current="step"]');
  addVariant('page', '&[aria-current="page"]');
});
