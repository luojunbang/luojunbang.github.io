const path = require('path')
const { getLoader, loaderByName } = require('@craco/craco')

const packages = ['../api'].map((i) => path.resolve(__dirname, i))
const config = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  webpack: {
    alias: {
      '@': 'src',
    },
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
