const { DefinePlugin, ProgressPlugin } = require('webpack')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const { fmtDateTime } = require('lo-utils')
const path = require('path')
const d = Date.now()
const chalk = require('chalk')

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const TerserPlugin = require('terser-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const ElementPlus = [
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
]

const { VueLoaderPlugin } = require('vue-loader')

const { prodPlugins } = require('@lo/common/webpack-config')

const resolve = p => path.resolve(__dirname, p)
console.warn('NODE_ENV:', process.env.NODE_ENV)
console.info('Start Time:', fmtDateTime(d))

const DEV = process.env.NODE_ENV === 'development'

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
      // new TerserPlugin({
      //   terserOptions: {
      //     compress: {
      //       defaults: false,
      //       unused: true,
      //       dead_code: true,
      //       keep_fnames: true,
      //     },
      //     mangle: false,
      //   },
      //   parallel: true,
      //   extractComments: false,
      // }),
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
        test: /\.scss$/,
        use: [
          DEV ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          DEV ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
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
      externals: Object.values(externals).join('') || '',
      template: resolve('./public/index.html'),
    }),
    new ProgressPlugin((percentage, message, ...args) => {
      console.info(chalk.green((percentage * 100).toFixed(0) + '%'), message, ...args)
      if (percentage === 1) {
      }
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        extensions: {
          vue: {
            enabled: true,
            compiler: 'vue/compiler-sfc',
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

if (!DEV) {
  config.plugins.push(...prodPlugins)
  config.optimization.minimizer.push(new CssMinimizerPlugin())
}

module.exports = config
