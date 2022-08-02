const { VueLoaderPlugin } = require('vue-loader')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')

const { resolve } = require('path')
const { ProgressPlugin } = require('webpack')
console.log(process.env.NODE_ENV, ':', resolve(__dirname, '../src/main.ts'))
const config = {
  mode: process.env.NODE_ENV,
  entry: { app: [resolve(__dirname, '../src/main.ts')] },
  output: {
    path: resolve(__dirname + '../dist/'),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
    },
    extensions: ['.ts', '.tsx', '.vue', '.js'],
  },
  devServer: {
    // port: 9988,
    static: resolve(__dirname, '../dist/'),
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
              transpileOnly:true
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
      template: resolve(__dirname, '../public/index.html'),
    }),
    new ProgressPlugin((percentage, message, ...args) => {
      console.info(percentage, message, ...args)
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
