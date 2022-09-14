const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const prodPlugins = [new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash:8].css', chunkFilename: 'css/[name].[contenthash:8].css' })]

// new BundleAnalyzerPlugin()
module.exports = { prodPlugins }
