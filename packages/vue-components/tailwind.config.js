/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: require('@lo/common/tailwind-config'),
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
