const { DefinePlugin, ProgressPlugin } = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { fmtDateTime } = require('lo-utils')
const path = require('path')
const d = Date.now()
const chalk = require('chalk')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const IconsResolver = require('unplugin-icons/resolver')
const Icons = require('unplugin-icons/webpack')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')

const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const resolve = p => path.resolve(__dirname, p)

const ExamplePath = resolve('./src/views/example')

const glob = require('fast-glob')
const autoImportList = glob
  .sync(ExamplePath + '/**/*.vue', {
    onlyFiles: true,
    absolute: false,
  })
  .map(p => p.replace(ExamplePath, '.'))

const ElementPlus = [
  AutoImport({
    resolvers: [
      ElementPlusResolver(),
      IconsResolver({
        prefix: 'Icon',
      }),
    ],
  }),
  Components({
    resolvers: [
      // Auto register icon components
      // 自动注册图标组件
      IconsResolver({
        enabledCollections: ['ep'],
      }),
      ElementPlusResolver(),
    ],
  }),
  Icons({
    autoInstall: true,
  }),
]

const { VueLoaderPlugin } = require('vue-loader')

const { prodPlugins } = require('@lo/common/webpack-config')

console.warn('NODE_ENV:', process.env.NODE_ENV)
console.info('Start Time:', fmtDateTime(d))

const PROD = process.env.NODE_ENV === 'production'

const externals = {
  echarts: {
    alias: 'echarts',
    url: 'https://cdn.bootcdn.net/ajax/libs/echarts/5.3.3/echarts.min.js',
  },
  '@antv/g6': {
    alias: 'G6',
    url: 'https://gw.alipayobjects.com/os/lib/antv/g6/3.7.1/dist/g6.min.js',
  },
  // vue: {
  //   alias: 'Vue',
  //   url: 'https://unpkg.com/vue@3.2.7/dist/vue.runtime.global.prod.js',
  // },
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
      // 'lo-vue-components$': resolve('../vue-components/src'),
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
  externalsType: 'script',
  externals: PROD
    ? Object.entries(externals).reduce((rs, [key, { url, alias }]) => {
        rs[key] = [url, alias]
        return rs
      }, {})
    : {},
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            arrows: false,
            collapse_vars: false,
            comparisons: false,
            computed_props: false,
            hoist_funs: false,
            hoist_props: false,
            hoist_vars: false,
            inline: false,
            loops: false,
            negate_iife: false,
            properties: false,
            reduce_funcs: false,
            reduce_vars: false,
            switches: false,
            toplevel: false,
            typeofs: false,
            booleans: true,
            if_return: true,
            sequences: true,
            unused: true,
            conditionals: true,
            dead_code: true,
            evaluate: true,
          },
          mangle: {
            safari10: true,
          },
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
        // elementPlus: {
        //   name: 'element-plus',
        //   test: /[\\/]node_modules[\\/]element-plus[\\/]/,
        //   priority: 10,
        //   chunks: 'all',
        // },
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
          PROD ? MiniCssExtractPlugin.loader : 'vue-style-loader',
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
          PROD ? MiniCssExtractPlugin.loader : 'vue-style-loader',
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
        EXAMPLE_LIST: JSON.stringify(autoImportList),
        BASE_URL: '"./"',
      },
    }),
    ...ElementPlus,
    new HTMLWebpackPlugin({
      BASE_URL: process.env.BASE_URL,
      title: title,
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
const FileManagerPlugin = require('filemanager-webpack-plugin')

if (PROD) {
  config.plugins.push(...prodPlugins)
  config.optimization.minimizer.push(new CssMinimizerPlugin())
  // config.plugins.push(
  //   new FileManagerPlugin({
  //     events: {
  //       //初始化 filemanager-webpack-plugin 插件实例
  //       onEnd: {
  //         copy: [
  //           //然后我们选择dist文件夹将之打包成dist.zip并放在根目录
  //           { source: resolve('./dist'), destination: resolve('../../dist') },
  //         ],
  //       },
  //     },
  //   }),
  // )
} else {
  // config.plugins.push(
  //   new ProgressPlugin((percentage, message, ...args) => {
  //     console.info(chalk.green((percentage * 100).toFixed(0) + '%'), message, ...args)
  //     if (percentage === 1) {
  //     }
  //   }),
  // )
}

module.exports = config
