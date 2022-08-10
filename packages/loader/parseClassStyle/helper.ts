const chalk = require('chalk')

module.exports = function loader(content) {
  console.log(this.resourcePath + this.resourceQuery, chalk.yellow('helper'))
  return content
}
