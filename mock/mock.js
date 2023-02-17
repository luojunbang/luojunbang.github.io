const { resolve } = require('path')

const fs = require('fs')

const ROOT_PATH = resolve(__dirname, '..')

const PATH = resolve(ROOT_PATH, 'packages/vue3-web/src/views')

const { isIndex, filePathToNest, routeAutoLink } = require('lo-utils')

console.log(PATH)

function filterIndex(root) {
  const routeList = []
  const fileList = fs.readdirSync(root)
  fileList.forEach(path => {
    if (path.startsWith('.')) return
    const fullPath = resolve(root, path)
    const relativePath = fullPath.replace(PATH + '/', '')
    if (path.indexOf('.') > -1) {
      //   console.log(relativePath.split('/').slice(-2).join('/'))
      isIndex(relativePath.split('/').slice(-2).join('/')) && routeList.push(relativePath)
    } else {
      routeList.push(...filterIndex(fullPath))
    }
  })
  return routeList
}

console.log(filterIndex(PATH))
console.log(JSON.stringify(filePathToNest(filterIndex(PATH))))
