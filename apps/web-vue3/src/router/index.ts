import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
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
    name: 'setting',
    component: () => import(/*webpackChunkName:"Setting"*/ '@/views/Setting/index.vue'),
  },
  {
    path: '/example',
    component: main,
    children: toCompoennt(importFn, exampleMenu),
  },
]

const adminRoute = {
  path: '/admin',
  component: main,
  redirect: '/admin/',
  children: [
    {
      name: 'admin',
      path: '',
      component: () => import(/*webpackChunkName:"Admin"*/ '@/views/Admin/index.vue'),
    },
    {
      name: 'login',
      path: 'login',
      component: () => import(/*webpackChunkName:"Admin"*/ '@/views/Admin/index.vue'),
    },
  ],
}

console.log(routes)

const router = (basename?: string) =>
  createRouter({
    history: createWebHistory(basename),
    routes: [...routes, adminRoute], //
  })

export default router
