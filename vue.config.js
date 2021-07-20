const { resolve } = require('path')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const name = 'luojunbang'

module.exports = {
  publicPath: 'dist',
  outputDir: './dist',
  indexPath: '../index.html',
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  productionSourceMap: false,
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        '@a': resolve('src/assets')
      }
    }
  },
  chainWebpack(cfg) {
    // cfg.plugin('FileManagerPlugin').use('filemanager-webpack-plugin', [
    //   {
    //     events: {
    //       onStart: {
    //         delete: ['./index.html']
    //       },
    //       onEnd: {
    //         move: [{ source: './dist/index.html', destination: './index.html' }]
    //       }
    //     }
    //   }
    // ])
  }
}
