/** @type {import('tailwindcss').Config} */
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        block: 'rgb(var(--block-background-color))',
      },
      colors: {
        fill: {
          DEFAULT: getFillColor(),
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
  plugins: [],
}

// cursor: pointer;
// display: inline-block;
// text-align: center;
// white-space: nowrap;
// font-size: 17px;
// line-height: 1.17648;
// font-weight: 400;
// letter-spacing: -.022em;
// font-family: "SF Pro Text","Myriad Set Pro",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","SF Pro Icons","Apple Legacy Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
// min-width: 28px;
// padding-left: 16px;
// padding-right: 16px;
// padding-top: 8px;
// padding-bottom: 8px;
// border-radius: 980px;
// background: #0071e3;
// color: #fff;
// box-sizing: border-box;
// display: block;
// width: 100%;
// border-radius: 8px;
// background: #1d1d1f;
// color: #fff;
// width: auto;
// text-decoration: none;
