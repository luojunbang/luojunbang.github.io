const HTMLWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { fmtDateTime } = require('lo-utils')
const path = require('path')
const { ProgressPlugin } = require('webpack')
const d = Date.now()
const chalk = require('chalk')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const { merge } = require('webpack-merge')

const TerserPlugin = require('terser-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const { prod_config, dev_config } = require('@lo/common/webpack/index.js')

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const resolve = p => path.resolve(__dirname, p)
const { VueLoaderPlugin } = require('vue-loader')
console.warn('NODE_ENV:', process.env.NODE_ENV)
console.info('Start Time:', fmtDateTime(d))

const externals = {
  // echarts: '<script src="https://cdn.bootcdn.net/ajax/libs/echarts/5.3.3/echarts.min.js"></script>',
}

const title = 'luojunbang.github.io'

const config = {
  mode: process.env.NODE_ENV,
  entry: { app: [resolve('./src/main.ts')] },
  output: {
    hashFunction: 'xxhash64',
    clean: true,
    path: resolve('./dist'),
    publicPath: process.env.BASE_URL,
    filename: 'js/[name]-[contenthash:8].js',
    chunkFilename: 'js/[name]-[contenthash:8].js',
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
      vue$: 'vue/dist/vue.runtime.esm-bundler.js',
    },
    extensions: ['.ts', '.tsx', '.vue', '.js'],
  },
  devServer: {
    // port: 9988,
    // static: resolve('../dist/'),
    hot: true,
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }

      devServer.app.get('/setup-middleware/some/path', (_, response) => {
        response.send('setup-middlewares option GET')
      })

      // 如果你想在所有其他中间件之前运行一个中间件或者当你从 `onBeforeSetupMiddleware` 配置项迁移时，
      // 可以使用 `unshift` 方法
      middlewares.unshift({
        name: 'fist-in-array',
        // `path` 是可选的
        path: '/foo/path',
        middleware: (req, res) => {
          res.send('Foo!')
        },
      })

      // 如果你想在所有其他中间件之后运行一个中间件或者当你从 `onAfterSetupMiddleware` 配置项迁移时，
      // 可以使用 `push` 方法
      middlewares.push({
        name: 'hello-world-test-one',
        // `path` 是可选的
        path: '/foo/bar',
        middleware: (req, res) => {
          res.send('Foo Bar!')
        },
      })

      middlewares.push((req, res) => {
        res.send('Hello World!')
      })

      return middlewares
    },
  },
  externals: {
    // echarts: 'ECharts',
    // '@antv/g6': 'G6',
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          compress: {
            defaults: false,
            unused: true,
            dead_code: true,
            keep_fnames: true,
          },
          mangle: false,
        },
        parallel: true,
        extractComments: false,
      }),
    ],
    splitChunks: {
      // minSize: 10,
      cacheGroups: {
        // vue: {
        //   name: 'vue',
        //   minSize: 10,
        //   test: /[\\/]node_modules[\\/](@vue[\S]*|vue|vue-router|vuex)[\\/]/,
        //   priority: 10,
        //   chunks: 'initial',
        // },
        // elementUI: {
        //   name: 'element-plus',
        //   test: /[\\/]node_modules[\\/]element-plus[\\/]/,
        //   priority: 10,
        //   chunks: 'initial',
        // },
        echarts: {
          name: 'echarts',
          test: /[\\/]node_modules[\\/]echarts[\\/]/,
          priority: 10,
          chunks: 'initial',
        },
        antv: {
          name: 'antv',
          test: /[\\/]node_modules[\\/]@antv[\\/]/,
          priority: 10,
          chunks: 'initial',
        },
        defaultVendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: -10,
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      {
        //?
        test: /\.m?jsx?$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
          {
            loader: 'loclass-style-loader',
          },
        ],
      },
      {
        test: /\.vue$/,
        resourceQuery: /type=style/,
        sideEffects: true,
      },
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      'process.env': {
        // NODE_ENV: '"development"',
        BASE_URL: '"./"',
      },
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    new HTMLWebpackPlugin({
      BASE_URL: process.env.BASE_URL,
      title: title,
      externals: Object.values(externals).join('') || ' ',
      template: resolve('./public/index.html'),
    }),
    new ProgressPlugin((percentage, message, ...args) => {
      console.log('\33[2J')
      console.info(chalk.green((percentage * 100).toFixed(0) + '%'), message, ...args)
      if (percentage === 1) {
        // console.log('\33[2J')
      }
    }),
    // require('unplugin-element-plus/webpack')({
    //   // options
    // }),

    new ForkTsCheckerWebpackPlugin({
      typescript: {
        extensions: {
          vue: {
            enabled: true,
            compiler: resolve('./node_modules/vue/compiler-sfc'),
          },
        },
        diagnosticOptions: {
          semantic: true,
          syntactic: false,
        },
      },
    }),
  ],
}

const isDev = process.env.NODE_ENV === 'development'

module.exports = merge(config, isDev ? dev_config : prod_config)
