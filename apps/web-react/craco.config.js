const path = require('path')
const { getLoader, loaderByName } = require('@craco/craco')

const packages = ['../api'].map((i) => path.resolve(__dirname, i))
const config = {
  webpack: {
    configure: (webapckConfig, arg) => {
      const { isFound, match } = getLoader(webapckConfig, loaderByName('babel-loader'))
      if (isFound) {
        match.loader.include = [
          ...(Array.isArray(match.loader.include) ? match.loader.include : [match.loader.include]),
          ...packages,
        ]
      }
      return webapckConfig
    },
  },
}

module.exports = config
