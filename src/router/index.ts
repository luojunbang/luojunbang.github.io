import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import main from '@/layout/main.vue'
import sub from '@/layout/sub.vue'
import Appmain from '@/layout/Appmain.vue'
import dashboard from '@/views/Dashboard/dashboard.vue'
import { routeAutoLink } from 'lo-utils'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    component: dashboard,
  },
  {
    path: '/css',
    component: () => import('@/views/CssDisplay/index.vue'),
  },
]

/**
 * 深度遍历
 * @param viewsRootPath
 */
export const config = {
  'Example/Todos/index.vue': { meta: {}, params: ':userId?', props: true },
  'Example/Page1/SubPage2/SubPage2.vue': { meta: { title: '改名字' }, params: ':userId?' },
  'Example/Page1/SubPage2/Page2/index.vue': { meta: {} },
}

const PATH = '../views/Example/'

const routePath = require.context('../views/Example/', true, /\.vue$/).keys()

export const navRoutePath: string[] = [...routePath].filter(route => {
  const routeAry: string[] = route.split('/').slice(-2)
  if (routeAry.length == 1) return true
  return routeAry[1] === 'index.vue' || routeAry[0].toLocaleLowerCase() === routeAry[1].replace(/\.vue$/, '').toLocaleLowerCase()
})

// const routePath = Object.keys(import.meta.globEager('../views/*.vue')).map(i => i.replace(/^\.\.\//g, ''))
console.log(routePath)

const routesAuto = routeAutoLink(routePath, [main, Appmain, sub], config)(path => () => import(/*webpackChunkName:"[request]"*/ `../views/Example/${path.replace(/\.vue$/, '')}.vue`))

console.log(routesAuto)

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: [
    ...routes,
    {
      path: '/Example',
      component: main,
      children: routesAuto,
    },
  ], //
})

export default router
