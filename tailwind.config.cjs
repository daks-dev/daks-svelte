/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,html,ts,js}'],

  presets: [
    require('./src/lib/assets/tailwindcss/presets/font-family.cjs'),
    require('./src/lib/assets/tailwindcss/presets/common.cjs')
  ],

  theme: {
    extend: {
      backgroundImage: {
        waiting: 'url($lib/assets/icons/spinners/clock.svg)',
        loading: 'url($lib/assets/icons/spinners/90-ring-bg.svg)',
        'loading-data': 'url($lib/assets/icons/spinners/blocks-scale.svg)'
      }
    }
  }
};
