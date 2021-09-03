// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path')

console.log(resolve())

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/common/style/variables.scss";
        `
      }
    }
  },
  devServer: {
    proxy: {
      '': {
        target: 'https://192.168.1.160:8443',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '': ''
        }
      }
    }
  },
  chainWebpack(cfg) {
    cfg.plugin('FileManagerPlugin').use('filemanager-webpack-plugin', [
      {
        events: {
          onStart: {
            delete: ['./index.html']
          },
          onEnd: {
            move: [{ source: './dist/index.html', destination: './index.html' }]
          }
        }
      }
    ])
  }
}
