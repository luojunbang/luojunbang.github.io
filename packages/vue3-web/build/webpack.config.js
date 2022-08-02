const { VueLoaderPlugin } = require('vue-loader')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { fmtDateTime } = require('lo-utils')
const path = require('path')
const { ProgressPlugin } = require('webpack')
const d = Date.now()
const chalk = require('chalk')

const resolve = p => path.resolve(__dirname, p)

console.warn('NODE_ENV:', process.env.NODE_ENV, ':', resolve(__dirname, '../src/main.ts'))
console.time('Start Time:', fmtDateTime(d))
const config = {
  mode: process.env.NODE_ENV,
  entry: { app: [resolve('../src/main.ts')] },
  output: {
    path: resolve('../dist/'),
  },
  resolve: {
    alias: {
      '@': resolve('../src'),
    },
    extensions: ['.ts', '.tsx', '.vue', '.js'],
  },
  devServer: {
    // port: 9988,
    static: resolve('../dist/'),
    hot: true,
  },
  externals: {
    echarts: 'echarts',
    '@antv/g6': 'G6',
  },
  optimization: {},
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
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
    new HTMLWebpackPlugin({
      BASE_URL: process.env.BASE_URL,
      template: resolve('../public/index.html'),
    }),
    new ProgressPlugin((percentage, message, ...args) => {
      console.info(chalk.green((percentage * 100).toFixed(0) + '%'), message, ...args)
      if (percentage === 1) {
        console.log("\33[2J");
      }
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        BASE_URL: '""',
      },
    }),
  ],
}

module.exports = config
