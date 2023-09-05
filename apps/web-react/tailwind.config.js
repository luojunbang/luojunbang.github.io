/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const getVar = (str, index) => `var(--lo-${str}-color${index ? '-' + index : ''})`
const getTextColor = (index) => getVar('text', index)
const getFillColor = (index) => getVar('fill', index)

const getLevelClass = (min, max, fn) => {
  return Object.fromEntries(new Array(max - min + 1).fill(0).map((_, i) => [`${min + i}00`, fn(min + i)]))
}

module.exports = {
  corePlugins: {
    preflight: false,
  },
  safelist: [
    {
      pattern: /bg-fill-\d00/,
    },
    {
      pattern: /text-text-\d00/,
    },
  ],
  darkMode: 'class',
  content: ['./src/views/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/**.{js,ts,jsx,tsx,mdx}', './src/layout/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      spacing: {
        nav: '44px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        block: 'rgb(var(--block-background-color))',
      },
      colors: {
        fill: {
          DEFAULT: getFillColor(1),
          ...getLevelClass(1, 5, getFillColor),
        },
        text: {
          DEFAULT: getTextColor(1),
          ...getLevelClass(1, 5, getTextColor),
        },
        primary: 'rgba(48, 112, 180, 1)',
        danger: 'rgba(212, 65, 45, 1.0)',
        success: 'rgba(27, 67, 126, 1.0)',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.flex-center': {
          display: 'flex',
          'flex-flow': 'row nowrap',
          'justify-content': 'center',
          'align-items': 'center',
        },
      })
    }),
  ],
}
