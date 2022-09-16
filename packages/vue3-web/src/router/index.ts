import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import main from '@/layout/main.vue'
import sub from '@/layout/sub.vue'
import Appmain from '@/layout/Appmain.vue'
import dashboard from '@/views/Dashboard/dashboard.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  { path: '/Dashboard', name: 'Dashboard_dashboard_vue', component: dashboard },
  { path: '/setting', name: 'setting', component: () => import(/*webpackChunkName:"Setting"*/ '../views/Setting/index.vue') },
  { path: '/Carousel', component: main, children: [{ path: '', component: () => import(/*webpackChunkName:"Carousel"*/ '../views/Carousel/index.vue'), name: 'Carousel_index_vue', children: [] }] },
  {
    path: '/CssDisplay',
    component: main,
    children: [{ path: '', component: () => import(/*webpackChunkName:"CssDisplay"*/ '../views/CssDisplay/index.vue'), name: 'CssDisplay_index_vue', children: [] }],
  },
]

const routeRequire = require.context('./modules', false, /example\.ts$/)
routeRequire.keys().forEach(path => {
  const { default: _default } = routeRequire(path)
  routes.push(_default)
})

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: routes, //
})

export default router
