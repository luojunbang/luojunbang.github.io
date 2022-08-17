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
// console.log('\33[2J')
// const main = { main: '1' }
// const Appmain = { Appmain: '1' }
// const sub = { sub: '1' }
// setTimeout(() => {
//   console.log(
//     JSON.stringify(routeAutoLink(filterIndex(PATH), [main, Appmain, sub])(path => `()=>import(/*webpackChunkName:"${path.split('/').slice(-2, -1)}"*/ "../views/${path.replace(/\.vue$/, '')}.vue")`))
//       .map(i => ({ ...i, path: '/' + i.path }))
//       .replaceAll('{"main":"1"}', 'main')
//       .replaceAll('{"Appmain":"1"}', 'Appmain')
//       .replaceAll('{"sub":"1"}', 'sub')
//   )
// }, 300)
