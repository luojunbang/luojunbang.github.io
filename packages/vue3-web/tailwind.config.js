/** @type {import('tailwindcss').Config} */

function parseColorOpacity(color, range = 10) {
  return Object.fromEntries(
    new Array(range)
      .fill(0)
      .map((_, idx) => [idx * 10 + 10, `rgba(${color.join(',')},${((idx * 10 + 10) / 100).toFixed(2)})`])
      .concat([['DEFAULT', `rgba(${color.join(',')},1)`]])
  )
}

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        xs: '5px',
        sm: '10px',
        md: '20px',
        lg: '30px',
        xl: '50px',
      },
      fontFamily: {
        serif: ['Avenir', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        monospace: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        white: parseColorOpacity([241, 242, 229]),
        black: parseColorOpacity([0, 0, 16]),
        danger: 'rgba(215,0,15,1.0)',
        warn: 'rgba(255,119,15,1.0)',
        normal: 'rgba(255,231,111,1.0)',
        success: 'rgba(145,184,34,1.0)',
        blue: 'rgba(0,46,166,1.0)',
      },
    },
  },
  plugins: [],
}
