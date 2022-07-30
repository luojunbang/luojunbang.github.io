const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { resolve } = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const DefinePlugin = require('webpack').DefinePlugin
const CopyPlugin = require('copy-webpack-plugin')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
module.exports = {
  mode: 'development',
  context: '/Users/joe/luojunbang-dev/luojunbang.github.io',
  output: {
    hashFunction: 'xxhash64',
    path: '/Users/joe/luojunbang-dev/luojunbang.github.io/dist',
    filename: 'static/js/[name].js',
    publicPath: '/',
    chunkFilename: 'static/js/[name].js',
  },
  resolve: {
    alias: {
      '@': '/Users/joe/luojunbang-dev/luojunbang.github.io/src',
      vue$: 'vue/dist/vue.runtime.esm-bundler.js',
    },
    extensions: ['.tsx', '.ts', '.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'],
    modules: ['node_modules', '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules', '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/@vue/cli-service/node_modules'],
  },
  resolveLoader: {
    modules: [
      '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/@vue/cli-plugin-typescript/node_modules',
      '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules',
      '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/@vue/cli-service/node_modules',
    ],
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('esm') */
      {
        test: /\.m?jsx?$/,
        resolve: {
          fullySpecified: false,
        },
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-loader/dist/index.js',
            options: {
              cacheDirectory: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/.cache/vue-loader',
              cacheIdentifier: '773189e6',
              babelParserPlugins: ['jsx', 'classProperties', 'decorators-legacy'],
              compilerOptions: {
                isCustomElement: tag => /^micro-app/.test(tag),
              },
            },
          },
        ],
      },
      /* config.module.rule('vue-style') */
      {
        test: /\.vue$/,
        resourceQuery: /type=style/,
        sideEffects: true,
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader',
              },
            ],
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: 'raw-loader',
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader',
              },
            ],
          },
        ],
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/img/[name].[hash:8][ext]',
        },
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'static/img/[name].[hash:8][ext]',
        },
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'static/media/[name].[hash:8][ext]',
        },
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          filename: 'static/fonts/[name].[hash:8][ext]',
        },
      },
      /* config.module.rule('css') */
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
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
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
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
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
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
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
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
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
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
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
      /* config.module.rule('scss') */
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
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
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
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
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
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  additionalData: '\n        @import "@/common/style/variables.scss";\n        ',
                  sassOptions: {
                    indentedSyntax: true,
                  },
                },
              },
            ],
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
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
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  additionalData: '\n        @import "@/common/style/variables.scss";\n        ',
                  sassOptions: {
                    indentedSyntax: true,
                  },
                },
              },
            ],
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
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
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  additionalData: '\n        @import "@/common/style/variables.scss";\n        ',
                  sassOptions: {
                    indentedSyntax: true,
                  },
                },
              },
            ],
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
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
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  additionalData: '\n        @import "@/common/style/variables.scss";\n        ',
                  sassOptions: {
                    indentedSyntax: true,
                  },
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
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
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
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
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
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
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
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
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
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
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
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
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
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
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
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
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
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
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('vue-style-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
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
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () {
            /* omitted long function */
          },
        ],
        use: [
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/babel-loader/lib/index.js',
            options: {
              cacheCompression: false,
              cacheDirectory: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/.cache/babel-loader',
              cacheIdentifier: '9ffd5c4e',
            },
          },
        ],
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/babel-loader/lib/index.js',
          },
          /* config.module.rule('ts').use('ts-loader') */
          {
            loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/ts-loader/index.js',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ['\\.vue$'],
              happyPackMode: false,
            },
          },
        ],
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          /* config.module.rule('tsx').use('babel-loader') */
          {
            loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/babel-loader/lib/index.js',
          },
          /* config.module.rule('tsx').use('ts-loader') */
          {
            loader: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/ts-loader/index.js',
            options: {
              transpileOnly: true,
              happyPackMode: false,
              appendTsxSuffixTo: ['\\.vue$'],
            },
          },
        ],
      },
      {
        test: /src\/views\/Example\/demo\/index.vue/,
        use: ['/Users/joe/luojunbang-dev/luojunbang.github.io/loader/loClassLoader/index.js'],
      },
    ],
  },
  optimization: {
    realContentHash: false,
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
        element: {
          name: 'element-plus',
          test: /[\\/]node_modules[\\/]element-plus[\\/]/,
          minChunks: 1,
          priority: 1,
          minSize: 100,
          chunks: 'all',
          reuseExistingChunk: true,
        },
        cssDisplay: {
          name: 'css-display',
          test: /[\\/]src[\\/]views[\\/]CssDisplay[\\/]/,
          minChunks: 1,
          priority: 1,
          minSize: 100,
          chunks: 'all',
          reuseExistingChunk: true,
        },
        Charts: {
          name: 'charts',
          test: /[\\/]src[\\/]views[\\/]Charts[\\/]/,
          minChunks: 1,
          priority: 1,
          minSize: 100,
          chunks: 'all',
          reuseExistingChunk: true,
        },
        echarts: {
          name: 'echarts',
          test: /[\\/]node_modules[\\/]echarts[\\/]/,
          minChunks: 1,
          priority: 1,
          minSize: 100,
          chunks: 'all',
          reuseExistingChunk: true,
        },
        g6: {
          name: 'g6',
          test: /[\\/]node_modules[\\/]@antv[\\/]/,
          minChunks: 1,
          priority: 1,
          minSize: 100,
          chunks: 'all',
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('feature-flags') */
    new DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
    }),
    /* config.plugin('define') */
    new DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        BASE_URL: '"/"',
      },
    }),
    /* config.plugin('case-sensitive-paths') */
    // new CaseSensitivePathsPlugin(),
    // /* config.plugin('friendly-errors') */
    // new FriendlyErrorsWebpackPlugin({
    //   additionalTransformers: [
    //     function () {
    //       /* omitted long function */
    //     },
    //   ],
    //   additionalFormatters: [
    //     function () {
    //       /* omitted long function */
    //     },
    //   ],
    // }),
    /* config.plugin('html') */
    new HtmlWebpackPlugin({
      title: 'luojunbang.github.io',
      scriptLoading: 'defer',
      templateParameters: function () {
        /* omitted long function */
      },
      template: '/Users/joe/luojunbang-dev/luojunbang.github.io/public/index.html',
    }),
    /* config.plugin('copy') */
    new CopyPlugin({
      patterns: [
        {
          from: '/Users/joe/luojunbang-dev/luojunbang.github.io/public',
          to: '/Users/joe/luojunbang-dev/luojunbang.github.io/dist',
          toType: 'dir',
          noErrorOnMissing: true,
          globOptions: {
            ignore: ['**/.DS_Store', '/Users/joe/luojunbang-dev/luojunbang.github.io/public/index.html'],
          },
          info: {
            minimized: true,
          },
        },
      ],
    }),
    /* config.plugin('eslint') */
    new ESLintWebpackPlugin({
      extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
      cwd: '/Users/joe/luojunbang-dev/luojunbang.github.io',
      cache: true,
      cacheLocation: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/.cache/eslint/1a7f715a.json',
      context: '/Users/joe/luojunbang-dev/luojunbang.github.io',
      failOnWarning: false,
      failOnError: true,
      eslintPath: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/eslint',
      formatter: 'stylish',
    }),
    /* config.plugin('fork-ts-checker') */
    // new ForkTsCheckerWebpackPlugin({
    //   typescript: {
    //     extensions: {
    //       vue: {
    //         enabled: true,
    //         compiler: '/Users/joe/luojunbang-dev/luojunbang.github.io/node_modules/vue/compiler-sfc/index.js',
    //       },
    //     },
    //     diagnosticOptions: {
    //       semantic: true,
    //       syntactic: false,
    //     },
    //   },
    // }),
  ],
  entry: {
    app: ['./src/main.ts'],
  },
}
