import webpack from 'webpack'
const { DefinePlugin, ProgressPlugin } = webpack
import CopyPlugin from 'copy-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { fmtDateTime } from 'lo-utils'
import path from 'path'
import chalk from 'chalk'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename)
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/webpack'

import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

import AutoImport from 'unplugin-auto-import/webpack'
import Components from 'unplugin-vue-components/webpack'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import glob from 'fast-glob'

const ExamplePath = 'src/views/example/' // resolve('./src/views/example')

const resolve = p => path.resolve(__dirname, p).replace(/\\/g, '/')
const d = Date.now()

const autoImportList = glob
  .sync(ExamplePath + '/**/index.vue', {
    onlyFiles: true,
    absolute: false,
  })
  .map(p => p.replace(ExamplePath, ''))
console.log(autoImportList)

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

const prodPlugins = [new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash:8].css', chunkFilename: 'css/[name].[contenthash:8].css' })]

console.warn('NODE_ENV:', process.env.NODE_ENV)
console.info('Start Time:', fmtDateTime(d))

const PROD = process.env.NODE_ENV === 'production'

const externals = {
  echarts: {
    alias: 'echarts',
    url: 'https://cdn.bootcdn.net/ajax/libs/echarts/5.3.3/echarts.min.js',
  },
  // '@antv/g6': {
  //   alias: 'G6',
  //   url: 'https://gw.alipayobjects.com/os/lib/antv/g6/3.7.1/dist/g6.min.js',
  // },
  // vue: {
  //   alias: 'Vue',
  //   url: 'https://unpkg.com/vue@3.2.7/dist/vue.runtime.global.prod.js',
  // },
}

const title = 'luojunbang.github.io'
const BASE_URL = process.env.NODE_ENV === 'development' ? '/' : '/vue-page/'
const distPath = resolve('./dist')
const config = {
  mode: process.env.NODE_ENV,
  entry: { app: [resolve('./src/main.ts')] },
  output: {
    clean: process.env.NODE_ENV === 'development' ? false : true,
    libraryTarget: 'umd',
    globalObject: 'window',
    hashFunction: 'xxhash64',
    path: distPath,
    publicPath: BASE_URL,
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
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined,
  devServer: {
    port: 9001,
    // static: resolve('../dist/'),
    headers: {
      // 保证子应用的资源支持跨域，在上线后需要保证子应用的资源在主应用的环境中加载不会存在跨域问题（**也需要限制范围注意安全问题**）
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    hot: true,
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
        use: ['vue-loader'],
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
        EXAMPLE_LIST: JSON.stringify(autoImportList),
        BASE_URL: `'${BASE_URL}'`,
      },
    }),
    ...ElementPlus,
    new HTMLWebpackPlugin({
      title: title,
      template: resolve('./public/index.html'),
      templateParameters: { BASE_URL },
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

if (PROD) {
  config.plugins.push(
    new CopyPlugin({
      patterns: [
        {
          from: resolve('./public'),
          to: distPath,
          toType: 'dir',
          info: {
            minimized: true,
          },
          globOptions: { ignore: ['**/.DS_Store', resolve('./public/index.html')] },
        },
        {
          from: resolve(path.join(distPath, './index.html')),
          to: resolve(path.join(distPath, './404.html')),
        },
      ],
    }),
  )
  config.plugins.push(...prodPlugins)
  config.optimization.minimizer.push(new CssMinimizerPlugin())
} else {
}

// module.exports = config
export default config
