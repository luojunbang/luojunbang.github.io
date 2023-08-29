const path = require('path')
const { getLoader, loaderByName } = require('@craco/craco')
const ArcoWebpackPlugin = require('@arco-plugins/webpack-react')

const packages = ['../api'].map((i) => path.resolve(__dirname, i))

const CracoLessPlugin = require('craco-less')

const config = {
  plugins: [{ plugin: CracoLessPlugin }],
  babel: {
    plugins: [
      [
        'babel-plugin-import',
        {
          libraryName: '@arco-design/web-react',
          libraryDirectory: 'es',
          camel2DashComponentName: false,
          style: true, // 样式按需加载
        },
      ],
      [
        'babel-plugin-import',
        {
          libraryName: '@arco-design/web-react/icon',
          libraryDirectory: 'react-icon',
          camel2DashComponentName: false,
        },
        'babel-plugin-import-icon',
      ],
    ],
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  webpack: {
    alias: {
      '@': 'src',
    },
    plugins: {
      add: [],
    },
    module: {},
    configure: (webapckConfig, { env, paths }) => {
      const { isFound, match } = getLoader(webapckConfig, loaderByName('babel-loader'))
      if (isFound) {
        match.loader.include = [...(Array.isArray(match.loader.include) ? match.loader.include : [match.loader.include]), ...packages]
      }
      webapckConfig.output = {
        ...webapckConfig.output,
      }
      return webapckConfig
    },
  },
}

module.exports = config
