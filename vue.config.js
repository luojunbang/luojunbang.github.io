// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

console.log(resolve(), isDev)

module.exports = {
  publicPath: isDev ? '/' : './dist',
  assetsDir: 'static',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/common/style/variables.scss";
        `,
      },
    },
  },
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/v2.5': {
        target: 'https://api.caiyunapp.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/v2.5': '/v2.5',
        },
      },
    },
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          css: {
            name: 'autoCss',
            test: /[\\/]src[\\/]views[\\/]CssDisplay/,
            minChunks: 1,
            priority: 1,
            minSize: 100,
            chunks: 'all',
            reuseExistingChunk: true,
          },
        },
      },
    },
  },
  chainWebpack(cfg) {
    // !isDev &&
    //   cfg.set('externals', {
    //     vue: 'Vue',
    //   })
    // env.prod
    !isDev &&
      cfg.plugin('FileManagerPlugin').use('filemanager-webpack-plugin', [
        {
          events: {
            onStart: {
              delete: ['./index.html'],
            },
            onEnd: {
              move: [{ source: './dist/index.html', destination: './index.html' }],
            },
          },
        },
      ])
  },
}
