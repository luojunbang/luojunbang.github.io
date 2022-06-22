import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import dashboard from '@/views/Dashboard/dashboard.vue'
import { fmtDateTime } from 'lo-utils'
import main from '@/layout/main.vue'
import Appmain from '@/layout/Appmain.vue'
import { Component } from 'vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard'
  }
]

/**
 * 深度遍历
 * @param viewsRootPathviewsRootPath
 * @param deep 1
 * eg. deep = 2 means
 *    #/page1/subPage1 ./Views/page1/subPage1/index.vue
 *    #/page1/subPage2 ./Views/page1/subPage2/index.vue
 * @param regExp /.vue$/
 * @returns Array<RouteRecordRaw>
 */
function routerImport(requireContext, deep = 1, layouList: Array<Component>): Array<RouteRecordRaw> {
  const ans: Array<RouteRecordRaw> = []
  if (deep === 0) return ans
  const isIndex = (name, dir) => {
    return name === 'index.vue' || name.replace(/^([\S]+).vue$/, '$1').toLowerCase() === dir.toLowerCase()
  }
  requireContext
    .keys()
    .filter(i => {
      const _l = i.split('/')
      return _l.length <= deep + 2 && isIndex(_l[_l.length - 1], _l[_l.length - 2])
    })
    .forEach(componentPath => {
      const _pathList: Array<string> = componentPath.slice(2).split('/') //remove './'
      console.log(_pathList)
      let _temp: Array<RouteRecordRaw> = ans
      _pathList.forEach((p, i) => {
        if (i == _pathList.length - 1) return
        const _route = _temp.find(r => r.path == (i == 0 ? '/' : '') + p)
        if (!_route && /.vue$/.test(_pathList[i + 1])) {
          _temp.push({
            component: () => import(`../views/${componentPath.slice(2)}`),
            name: _pathList.slice(0, i + 1).join(''),
            path: (i == 0 ? '/' : '') + p
          })
        }
        if (!_route && !/.vue$/.test(_pathList[i + 1])) {
          const _newRoute = { component: layouList[i], name: _pathList.slice(0, i + 1).join(''), path: (i == 0 ? '/' : '') + p, children: [] }
          _temp.push(_newRoute)
          _temp = _newRoute.children
        }
        if (_route && !/.vue$/.test(_pathList[i + 1])) {
          if (!Array.isArray(_route.children)) {
            _route.component = layouList[i]
            _route.redirect = '/'
            _route.children = [{ component: _route.component, name: _route.name, path: '' }]
            delete _route.name
          }
          _temp = _route.children
        }
        if (_route && /.vue$/.test(_pathList[i + 1])) {
          if (!Array.isArray(_route.children)) _route.children = []
          _route.redirect = '/'
          const _newRoute = {
            meta: { path: componentPath.slice(2) },
            component: () => import('../views/' + componentPath.slice(2)),
            name: _pathList.slice(0, i + 1).join(''),
            path: isIndex(_pathList[i + 1], p) ? '' : p
          }
          _route.children.push(_newRoute)
          _temp = _route.children
        }
      })
      console.log(ans)
    })
  return ans
}

function routerImport2(requireContext, deep = 1, layouList, config = {}) {
  const ans: any[] = []
  if (deep === 0) return ans
  const isIndex = (name, dir) => {
    if (!name || !dir) return false
    return name === 'index.vue' || name.replace(/^([\S]+)\.vue$/, '$1').toLowerCase() === dir.toLowerCase()
  }
  const isVue = name => /^([\S]+)\.vue$/.test(name)
  const routerList = requireContext
    .keys()
    .filter(i => {
      if (/^\.\/[^/]+\.vue$/.test(i)) {
        const name = i.replace(/^\.\/([^/]+)\.vue$/, '$1')
        ans.push({ path: `/${name}`, name: name, component: () => import(`../views/${i.slice(2)}`) })
      }
      const _l = i.slice(2).split('/')
      return _l.length <= deep + 1 && isIndex(_l[_l.length - 1], _l[_l.length - 2])
    })
    .map(path => path.slice(2).split('/'))
  console.log(routerList)
  let deepIdx = 0
  while (routerList.some(i => i[deepIdx])) {
    console.log('deep:', deepIdx)
    routerList.forEach(route => {
      if (!route[deepIdx] || isVue(route[deepIdx])) return
      let _temp = ans
      const inner = route.slice(0, deepIdx)
      inner.forEach(p => {
        _temp = _temp.find(i => i.path == p || i.path == '/' + p).children
      })
      const _route = _temp.find(i => i.path == '/' + route[deepIdx])
      if (!_route) {
        if (isVue(route[deepIdx + 1])) {
          _temp.push({ path: `/${route[deepIdx]}`, name: route[deepIdx], component: () => import(`../views/${route.join('/')}`) })
        } else {
          _temp.push({ path: `/${route[deepIdx]}`, name: route[deepIdx], component: layouList[deepIdx], children: [] })
        }
      } else if (!_route.children) {
        _route.redirect = '/'
        _route.children = [{ name: _route.name, component: _route.component, path: '' }]
        _route.component = layouList[deepIdx]
        delete _route.name
      }
    })
    deepIdx++
  }
  console.log(ans)

  return ans
}

const config = {
  './Todos/index.vue': { meta: {}, params: '/:id' },
  './Page1/SubPage2/SubPage2.vue': { meta: {}, params: '/:userId' },
  './Page1/SubPage2/SubPage2/Page2.vue': { meta: {}, params: '/:userId' }
}

console.log('fmtDateTime():', fmtDateTime(Date.now()))
// const routeImport = routerImport(require.context('../views', true, /\.\/(?!Todos)[\S]+.vue$/), 3, [main, Appmain])
const routeImport2 = routerImport2(require.context('../views', true, /\.vue$/), 3, [main, Appmain], config)
console.log('fmtDateTime():', fmtDateTime(Date.now()))

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...routeImport2]
})

export default router
