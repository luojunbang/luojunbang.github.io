const { VueLoaderPlugin } = require('vue-loader')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { fmtDateTime } = require('lo-utils')
const path = require('path')
const { ProgressPlugin } = require('webpack')
const d = Date.now()
const chalk = require('chalk')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const resolve = p => path.resolve(__dirname, p)

console.warn('NODE_ENV:', process.env.NODE_ENV, ':', resolve('../src/main.ts'))
console.info('Start Time:', fmtDateTime(d))

const externals = {
  // echarts: '<script src="https://cdn.bootcdn.net/ajax/libs/echarts/5.3.3/echarts.min.js"></script>',
}

const config = {
  mode: process.env.NODE_ENV,
  entry: { app: [resolve('../src/main.ts')] },
  output: {
    clean: true,
    path: resolve('../dist/'),
    publicPath: process.env.BASE_URL,
    filename: 'js/[name]-[contenthash:8].js',
    chunkFilename: 'js/[name]-[contenthash:8].js',
  },
  resolve: {
    alias: {
      '@': resolve('../src'),
      vue$: 'vue/dist/vue.runtime.esm-bundler.js',
    },
    extensions: ['.ts', '.tsx', '.vue', '.js'],
  },
  devServer: {
    // port: 9988,
    // static: resolve('../dist/'),
    hot: true,
  },
  externals: {
    // echarts: 'ECharts',
    // '@antv/g6': 'G6',
  },
  optimization: {
    splitChunks: {
      minSize: 10,
      cacheGroups: {
        vue: {
          name: 'vue',
          minSize: 10,
          test: /[\\/]node_modules[\\/](@vue[\S]*|vue|vue-router|vuex)[\\/]/,
          priority: 10,
          chunks: 'initial',
        },
        elementUI: {
          name: 'element-plus',
          minSize: 10,
          test: /[\\/]node_modules[\\/]element-plus[\\/]/,
          priority: 10,
          chunks: 'initial',
        },
        echarts: {
          name: 'echarts',
          minSize: 10,
          test: /[\\/]node_modules[\\/]echarts[\\/]/,
          priority: 10,
          chunks: 'initial',
        },
        antv: {
          name: 'antv',
          minSize: 10,
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
    noParse: content => {
      const ans = /^(vue|vue-router|vuex|vuex-router-sync)$/.test(content)
      ans && console.log('---content:', chalk.red.bold(content))
      return ans
    },
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
        use: ['vue-loader'],
      },
      {
        test: /\.vue$/,
        resourceQuery: /type=style/,
        sideEffects: true,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /.tsx?$/,
        // exclude: /node_modules/,
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
        NODE_ENV: '"development"',
        BASE_URL: '"./"',
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new HTMLWebpackPlugin({
      BASE_URL: process.env.BASE_URL,
      externals: Object.values(externals).join('') || ' ',
      template: resolve('../public/index.html'),
    }),
    new ProgressPlugin((percentage, message, ...args) => {
      console.info(chalk.green((percentage * 100).toFixed(0) + '%'), message, ...args)
      if (percentage === 1) {
        console.log('\33[2J')
      }
    }),
    require('unplugin-element-plus/webpack')({
      // options
    }),
   
  ],
}

const isDev = process.env.NODE_ENV === 'development'

// BundleAnalyzerPlugin
!isDev &&
  config.plugins.push(
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
    })
  )

module.exports = config
