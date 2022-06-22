import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import dashboard from '@/views/Dashboard/dashboard.vue'
import { fmtDateTime } from 'lo-utils'
import main from '@/layout/main.vue'
import Appmain from '@/layout/Appmain.vue'
import { Component } from 'vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  // {
  //   path: '/page1',
  //   component: Appmain,
  //   redirect: '/',
  //   children: [
  //     {
  //       path: '',
  //       children: [
  //         {
  //           path: '',
  //           component: () => import('../views/Page1/index.vue'),
  //         },
  //       ],
  //       redirect: '/',
  //     },
  //     {
  //       path: 'subpage2',
  //       component: main,
  //       children: [
  //         {
  //           path: '',
  //           component: () => import('../views/Page1/SubPage2/SubPage2.vue'),
  //         },
  //       ],
  //       redirect: '/',
  //     },
  //   ],
  // },
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
const config = {
  'Todos/index.vue': { meta: {}, params: '/:id' },
  'Page1/index.vue': { meta: { title: 'Page1Index' } },
  'Page1/SubPage2/SubPage2.vue': { meta: {}, params: '/:userSubPage2Id' },
  'Page1/SubPage2/Page2/index.vue': { meta: {}, params: '/:userPage2Id' },
}

function routeAutoLink(routePath, layoutComponentLists, routeConfig) {
  if (!Array.isArray(layoutComponentLists)) throw Error('Should be Array fo LayoutComponents.')
  // 判断是否是index.vue或者 DIR/DIR.vue
  const isIndex = path => {
    if (!path) return false
    const _path = path.replace(/^\.\//, '').split('/')
    if (_path.length == 1) return /\.vue$/.test(path)
    else if (_path.length == 2) {
      const [dir, name] = _path.slice(_path.length - 2)
      return dir.toLowerCase() + '.vue' === name.toLowerCase() || name.toLowerCase() === 'index.vue'
    } else return false
  }
  const getRoutePath = val => {
    const _val = val.split('/')
    if (_val.length > 1) {
      return _val[_val.length - 2].toLowerCase()
    } else return val.replace(/\.vue$/, '').toLowerCase()
  }
  const generatorRoute = (path, fullPath, config) => {
    const route = {
      path: path,
      component: () => import(`../views/${fullPath}`),
      name: fullPath
        .split('/')
        .join('_')
        .replace(/\.vue$/, ''),
      meta: {},
      componentPath: fullPath,
    }
    if (config?.params) route.path = route.path + config.params
    if (config?.meta) route.meta = config.meta
    return route
  }
  const routes: any = []
  routePath = routePath
    .map(i => i.replace(/^\.\//, ''))
    .filter(i =>
      isIndex(
        i
          .split('/')
          .slice(i.split('/').length - 2)
          .join('/'),
      ),
    )
  console.log(routePath)

  routePath.forEach(path => {
    const path_ary = path.split('/')
    let _routes = routes
    const len = path_ary.length
    while (path_ary.length) {
      const _path = path_ary[0]
      const rest_path = path_ary.join('/')
      const foundRoute = _routes.find(({ path }) => path == `${_path.toLowerCase()}${routeConfig[path] || ''}`)
      if (foundRoute) {
        if (Array.isArray(foundRoute.children)) {
          if (isIndex(rest_path)) {
            _routes.push(generatorRoute('', path, routeConfig[path]))
            break
          }
        } else {
          const index_path = foundRoute.name.split('_').join('/') + '.vue' //复原
          foundRoute.children = [generatorRoute('', index_path, routeConfig[index_path])]
          foundRoute.component = layoutComponentLists[len - path_ary.length]
          delete foundRoute.name
          if (isIndex(rest_path)) {
            _routes.push(generatorRoute(getRoutePath(rest_path), path, routeConfig[path]))
            break
          }
        }
        _routes = foundRoute.children
      } else {
        if (isIndex(rest_path)) {
          _routes.push(generatorRoute(getRoutePath(rest_path), path, routeConfig[path]))
          break
        } else {
          _routes.push({ path: `${_path.toLowerCase()}`, component: layoutComponentLists[len - path_ary.length], children: [] })
          _routes = _routes[_routes.length - 1].children
        }
      }
      path_ary.shift()
    }
  })
  console.log(routes)

  return routes.map(i => ({ ...i, path: '/' + i.path }))
}

const routePath = require.context('../views', true, /\.vue$/).keys()

const routesAuto = routeAutoLink(
  [
    'About.vue',
    'CssDisplay/index.vue',
    'Dashboard/dashboard.vue',
    'Home.vue',
    'Page1/SubPage1/SubPage1.vue',
    'Page1/SubPage2/Page2/index.vue',
    'Page1/SubPage2/SubPage2.vue',
    // 'Page1/index.vue',
    // 'Todos/index.vue',
    // 'demo/index.vue',
  ],
  [Appmain, main],
  config,
)

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...routesAuto],
})

export default router
