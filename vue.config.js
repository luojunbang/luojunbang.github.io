// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path')

const isDev = process.env.NODE_ENV === 'development'

console.log(resolve())

module.exports = {
  publicPath: isDev ? '/' : './dist',
  assetsDir: 'static',
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
      '/v2.5': {
        target: 'https://api.caiyunapp.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/v2.5': '/v2.5'
        }
      }
    }
  },
  chainWebpack(cfg) {
    // env.prod
    !isDev &&
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
