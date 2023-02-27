import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import main from '@/layout/main.vue'
import sub from '@/layout/sub.vue'
import Appmain from '@/layout/Appmain.vue'
import dashboard from '@/views/Dashboard/dashboard.vue'
import { toCompoennt, generateRouterFromFilePath } from './routerImport'

const autoImportExampleList = (process.env.EXAMPLE_LIST ?? []) as string[]

export const exampleMenu = generateRouterFromFilePath(autoImportExampleList, [Appmain, sub], route => {
  if (route.path === 'FormTable') route.meta = { title: '可视化表格表单' }
})

const importFn = (path: string) => () => import(/*webpackChunkName:"[request]"*/ `@/views/Example/${path.replace('.vue', '')}.vue`)

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
  {
    path: '/example',
    component: main,
    children: toCompoennt(importFn, exampleMenu),
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
