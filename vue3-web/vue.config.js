// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

console.log(resolve(), isDev)

module.exports = {
  publicPath: isDev ? '/' : '/',
  assetsDir: 'static',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@vue3/common/style/variables.scss";
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
    // cache: {
    //   type: 'filesystem',
    //   profile: true,
    // },
    optimization: {
      // runtimeChunk: 'single',
      // moduleIds: 'deterministic',
      // -
      // providedExports: true,
      splitChunks: {
        cacheGroups: {
          element: {
            name: 'element-plus',
            test: /[\\/]node_modules[\\/]element-plus[\\/]/,
            minChunks: 1,
            priority: 1,
            minSize: 100,
            chunks: 'all',
            reuseExistingChunk: true,
          },
          cssDisplay: {
            name: 'css-display',
            test: /[\\/]src[\\/]views[\\/]CssDisplay[\\/]/,
            minChunks: 1,
            priority: 1,
            minSize: 100,
            chunks: 'all',
            reuseExistingChunk: true,
          },
          Charts: {
            name: 'charts',
            test: /[\\/]src[\\/]views[\\/]Charts[\\/]/,
            minChunks: 1,
            priority: 1,
            minSize: 100,
            chunks: 'all',
            reuseExistingChunk: true,
          },
          echarts: {
            name: 'echarts',
            test: /[\\/]node_modules[\\/]echarts[\\/]/,
            minChunks: 1,
            priority: 1,
            minSize: 100,
            chunks: 'all',
            reuseExistingChunk: true,
          },
          g6: {
            name: 'g6',
            test: /[\\/]node_modules[\\/]@antv[\\/]/,
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
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: tag => /^micro-app/.test(tag),
        }
        return options
      })
    // config.optimization.minimizers.delete('terser')
    // !isDev &&
    //   config.set('externals', {
    //     vue: 'Vue',
    //   })
    // env.prod
    // !isDev &&
    //   config.plugin('FileManagerPlugin').use('filemanager-webpack-plugin', [
    //     {
    //       events: {
    //         onStart: {
    //           delete: ['./index.html'],
    //         },
    //         onEnd: {
    //           move: [{ source: './dist/index.html', destination: './index.html' }],
    //         },
    //       },
    //     },
    //   ])
  },
}
