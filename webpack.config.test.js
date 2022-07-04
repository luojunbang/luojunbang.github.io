const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { resolve } = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/main.ts'],
  },
  output: {
    filename: '[name].js',
    chunkFilename: 'js/[name].js',
    path: resolve('webpack'),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'],
  },
  devServer: {
    port: 6610,
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      {
        test: /\.m?jsx?$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ['vue-loader'],
      },
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true,
                  },
                },
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
            ],
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
            ],
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
            ],
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true,
                  },
                },
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  additionalData: '\n        @import "@/common/style/variables.scss";\n        ',
                },
              },
            ],
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  additionalData: '\n        @import "@/common/style/variables.scss";\n        ',
                },
              },
            ],
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  additionalData: '\n        @import "@/common/style/variables.scss";\n        ',
                },
              },
            ],
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  additionalData: '\n        @import "@/common/style/variables.scss";\n        ',
                },
              },
            ],
          },
        ],
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.ts$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      scriptLoading: 'defer',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial',
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
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: {
            safari10: true,
          },
        },
        parallel: true,
        extractComments: false,
      }),
      new CssMinimizerPlugin({
        parallel: true,
        minimizerOptions: {
          preset: [
            'default',
            {
              mergeLonghand: false,
              cssDeclarationSorter: false,
            },
          ],
        },
      }),
    ],
  },
}
