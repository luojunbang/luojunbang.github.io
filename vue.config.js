// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path')

console.log(resolve())

module.exports = {
  devServer: {
    proxy: {
      '': {
        target: 'https://192.168.1.160:8443',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '': '',
        },
      },
    },
  },
}
