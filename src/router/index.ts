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

const routePath = require
  .context('../views', true, /\.vue$/)
  .keys()
  .filter(i => !i.includes('Charts/'))

export const navRoutePath: string[][] = routePath
  .map(route => route.replace(/^\.\//, '').split('/'))
  .filter(route => {
    const routeAry: string[] = route.slice(-2)
    if (routeAry.length == 1) return true
    return routeAry[1] === 'index.vue' || routeAry[0].toLocaleLowerCase() === routeAry[1].replace(/\.vue$/, '').toLocaleLowerCase()
  })

// const routePath = Object.keys(import.meta.globEager('../views/*.vue')).map(i => i.replace(/^\.\.\//g, ''))
// console.log(routePath)

const routesAuto = routeAutoLink(routePath, [main, Appmain, sub], config)(path => () => import(/*webpackChunkName:"[request]"*/ `../views/${path.replace(/\.vue$/, '')}.vue`))

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...routesAuto], //
})

export default router
