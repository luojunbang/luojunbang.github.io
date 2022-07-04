import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import main from '@/layout/main.vue'
import sub from '@/layout/sub.vue'
import Appmain from '@/layout/Appmain.vue'
import dashboard from '@/views/Dashboard/dashboard.vue'
// import { routeAutoLink } from 'lo-utils/src/routerHelper'
import { routeAutoLink } from 'lo-utils'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  // {
  //   path: '/dashboard',
  //   component: dashboard,
  // },
  // {
  //   path: '/css',
  //   component: () => import('@/views/CssDisplay/index.vue'),
  // },
]

/**
 * 深度遍历
 * @param viewsRootPath
 */
const config = {
  'Todos/index.vue': { meta: {}, params: ':id' },
  'Page1/index.vue': { meta: { title: 'Page1Index' }, params: ':userId' },
  'Page1/SubPage2/SubPage2.vue': { meta: {}, params: ':userId' },
  'Page1/SubPage2/Page2/index.vue': { meta: {} },
}

const routePath = require.context('../views', true, /\.vue$/).keys()
// const routePath = Object.keys(import.meta.globEager('../views/*.vue')).map(i => i.replace(/^\.\.\//g, ''))
// console.log(routePath)

const routesAuto = routeAutoLink(routePath, [Appmain, main, sub], config)(path => () => import(/*webpackChunkName:"[request]"*/ `../views/${path.replace(/\.vue$/, '')}.vue`))

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...routesAuto], //
})

export default router
