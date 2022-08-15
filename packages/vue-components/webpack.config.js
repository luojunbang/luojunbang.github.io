const { VueLoaderPlugin } = require('vue-loader')

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const TerserPlugin = require('terser-webpack-plugin')

const { resolve } = require('path')

const config = {
  mode: 'production',
  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    module: true,
  },
  module: {
    rules: [
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
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
        },
      },
    ],
  },
  optimization: {
    // minimize: false,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            defaults: false,
            unused: true,
            dead_code: true,
            toplevel: true,
            // keep_fnames: true,
          },
          mangle: false,
        },
        parallel: true,
        extractComments: false,
      }),
    ],
  },
  experiments: {
    outputModule: true,
  },
  externals: {
    vue: 'vue',
    'element-plus': 'element-plus',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.vue', '.js'],
  },
  plugins: [
    new VueLoaderPlugin(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}

module.exports = config
