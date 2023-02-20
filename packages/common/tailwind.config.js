/** @type {import('tailwindcss').Config} */

module.exports = {
  spacing: {
    xs: '5px',
    sm: '10px',
    md: '20px',
    lg: '30px',
    xl: '50px',
  },
  fontFamily: {
    serif: [
      'Avenir',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji',
    ],
    monospace: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
  },
  colors: {
    danger: 'rgba(215,0,15,1.0)',
    warn: 'rgba(255,119,15,1.0)',
    normal: 'rgba(255,231,111,1.0)',
    success: 'rgba(145,184,34,1.0)',
    blue: 'rgba(0,46,166,1.0)',
  },
}
