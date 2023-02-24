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
  { path: '/dashboard', name: 'dashboard', component: dashboard },
  {
    path: '/setting',
    component: main,
    redirect: '/setting/',
    children: [
      {
        path: '',
        name: 'setting',
        component: () => import(/*webpackChunkName:"Setting"*/ '@/views/Setting/index.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: main,
    redirect: '/admin/',
    children: [
      {
        name: 'admin',
        path: '',
        component: () => import(/*webpackChunkName:"Admin"*/ '@/views/Admin/index.vue'),
      },
    ],
  },
]

const routeRequire = require.context('./modules', false, /example\.ts$/)
routeRequire.keys().forEach(path => {
  const { default: _default } = routeRequire(path)
  routes.push(_default)
})
console.log(routes)

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: routes, //
})

export default router
