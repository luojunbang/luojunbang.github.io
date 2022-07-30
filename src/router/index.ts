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
  // {
  //   path: '/dashboard',
  //   component: dashboard,
  // },
  // {
  //   path: '/demo',
  //   component: () => import('@/views/Example/demo/index.vue'),
  // },
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

const routePath = require.context('../views/', true, /\.vue$/).keys()

const routesAuto = routeAutoLink(routePath, [main, Appmain, sub], config)(path => () => import(/*webpackChunkName:"[request]"*/ `../views/${path.replace(/\.vue$/, '')}.vue`))

// console.log(routesAuto)

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: [...routes, ...routesAuto.map(i => ({ ...i, path: '/' + i.path }))], //
})

export default router
