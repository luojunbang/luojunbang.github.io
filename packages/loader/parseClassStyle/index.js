const chalk = require('chalk')
const loaderUtils = require('loader-utils')
const compiler_sfc_1 = require('vue/compiler-sfc')

const qs = require('querystring')

const cache = {}

function deepPriority(root, fn) {
  if (Array.isArray(root.children) && root.children.length > 0) {
    root.children.forEach((node, idx) => {
      fn(node, idx)
      deepPriority(node, fn)
    })
  }
}

function getCssProperty(key) {
  const config = {
    font: 'font-size',
  }
  return config[key]
}

function parseClass(className, prefix) {
  let style = ''
  try {
    const [attr, value] = className.replace(prefix, '').split('-')
    style = `.${className} { ${getCssProperty(attr)} : ${value}px; }\n`
  } catch (e) {
    console.log(e)
  }
  return style
}

const wrapStyleBlock = block => `\n  <style scoped> ${block}</style> \n`

module.exports = function loader(content) {
  const ctx = this
  const { prefix = '$' } = loaderUtils.getOptions(this)
  const isParseClass = klass => {
    return new RegExp(`\^\\${prefix}[\\w]+\-[\\d]+(px|%|rem|em|vw|vh)?`).test(klass)
  }
  const { mode, target, sourceMap, rootContext, resourcePath, resourceQuery = '' } = ctx
  const incomingQuery = qs.parse(resourceQuery.slice(1))
  if (!(!resourceQuery || incomingQuery.type === 'style')) return content
  if (incomingQuery.id && Reflect.has(cache, incomingQuery.id)) {
    return content + wrapStyleBlock(cache[incomingQuery.id])
  }
  const { descriptor, errors } = compiler_sfc_1.parse(content, {})
  resourcePath.includes('demo')
  const styles = new Set()
  deepPriority(descriptor.template.ast, node => {
    const classProps = node.props?.find(i => i.name === 'class')
    classProps &&
      classProps.value.content.split(' ').forEach(i => {
        isParseClass(i) && styles.add(i)
      })
  })
  const styleBlock = Array.from(styles).reduce((rs, klass) => rs + parseClass(klass, prefix), '')
  cache[incomingQuery.id] = styleBlock
  console.log(cache[incomingQuery.id])
  return content + wrapStyleBlock(cache[incomingQuery.id])
}
