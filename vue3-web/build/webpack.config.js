const { VueLoaderPlugin } = require('vue-loader')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')

const { resolve } = require('path')

const config = {
  entry: resolve('./src/main.ts'),
  output: {
    path: resolve('./dist'),
  },
  resolve: {
    alias: {
      '@vue3': 'vue3-web/src',
    },
    extensions: ['.ts', '.tsx', '.js', '.vue'],
  },
  module: {
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
        loader: 'babel-loader'
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
      template: './public/index.html',
    }),
    new DefinePlugin({
      'process.env': {
        VUE_APP_BASE_API: '"/dsmp"',
        NODE_ENV: '"development"',
        BASE_URL: '""',
      },
    }),
  ],
}

module.exports = config
