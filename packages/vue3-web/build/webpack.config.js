const { VueLoaderPlugin } = require('vue-loader')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')

const { resolve } = require('path')
console.log(resolve(__dirname, '../src/main.ts'))
const config = {
  entry: { app: [resolve(__dirname, '../src/main.ts')] },
  output: {
    path: resolve(__dirname + '../vue3-dist'),
  },
  resolve: {
    // alias: {
    //   '@': 'src',
    // },
    extensions: ['.ts', '.tsx', '.js', '.vue'],
  },
  devServer: {
    // port: 9988,
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // {
      //   test: /\.vue$/,
      //   resourceQuery:'type=style',
      //   loader: 'vue-loader',
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
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
    new DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        BASE_URL: '""',
      },
    }),
  ],
}

module.exports = config
