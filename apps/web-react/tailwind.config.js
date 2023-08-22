/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
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
        primary: 'rgba(48, 112, 180,1)',
        danger: 'rgba(212, 65, 45,1.0)',
        success: 'rgba(27, 67, 126,1.0)',
      },
    },
  },
  plugins: [],
}
