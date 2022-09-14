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
  { path: '/Carousel', component: main, children: [{ path: '', component: () => import(/*webpackChunkName:"Carousel"*/ '../views/Carousel/index.vue'), name: 'Carousel_index_vue', children: [] }] },
  {
    path: '/CssDisplay',
    component: main,
    children: [{ path: '', component: () => import(/*webpackChunkName:"CssDisplay"*/ '../views/CssDisplay/index.vue'), name: 'CssDisplay_index_vue', children: [] }],
  },
  {
    path: '/Example',
    component: main,
    children: [
      {
        path: 'Charts',
        component: Appmain,
        children: [
          { path: 'ECharts', component: () => import(/*webpackChunkName:"ECharts"*/ '../views/Example/Charts/ECharts/index.vue'), name: 'Example_Charts_ECharts_index_vue', children: [] },
          { path: 'G6', component: () => import(/*webpackChunkName:"G6"*/ '../views/Example/Charts/G6/index.vue'), name: 'Example_Charts_G6_index_vue', children: [] },
        ],
      },
      { path: 'FormTable', component: () => import(/*webpackChunkName:"FormTable"*/ '../views/Example/FormTable/index.vue'), name: 'Example_FormTable_index_vue', children: [] },
      { path: 'Image', component: () => import(/*webpackChunkName:"Image"*/ '../views/Example/Image/index.vue'), name: 'Example_Image_index_vue', children: [] },
      { path: 'Lifecycle', component: () => import(/*webpackChunkName:"Lifecycle"*/ '../views/Example/Lifecycle/index.vue'), name: 'Example_Lifecycle_index_vue', children: [] },
      { path: 'Monitor', component: () => import(/*webpackChunkName:"Monitor"*/ '../views/Example/Monitor/index.vue'), name: 'Example_Monitor_index_vue', children: [] },
      {
        path: 'Page1',
        component: Appmain,
        children: [
          { path: 'SubPage1', component: () => import(/*webpackChunkName:"SubPage1"*/ '../views/Example/Page1/SubPage1/SubPage1.vue'), name: 'Example_Page1_SubPage1_SubPage1_vue', children: [] },
          {
            path: 'SubPage2',
            component: sub,
            children: [
              {
                path: 'GrandPage1',
                component: () => import(/*webpackChunkName:"GrandPage1"*/ '../views/Example/Page1/SubPage2/GrandPage1/GrandPage1.vue'),
                name: 'Example_Page1_SubPage2_GrandPage1_GrandPage1_vue',
                children: [],
              },
              {
                path: 'GrandPage2',
                component: () => import(/*webpackChunkName:"GrandPage2"*/ '../views/Example/Page1/SubPage2/GrandPage2/GrandPage2.vue'),
                name: 'Example_Page1_SubPage2_GrandPage2_GrandPage2_vue',
                children: [],
              },
            ],
          },
        ],
      },
      { path: 'Promise', component: () => import(/*webpackChunkName:"Promise"*/ '../views/Example/Promise/promise.vue'), name: 'Example_Promise_promise_vue', children: [] },
      { path: 'Todos', component: () => import(/*webpackChunkName:"Todos"*/ '../views/Example/Todos/index.vue'), name: 'Example_Todos_index_vue', children: [] },
      { path: 'Vdom', component: () => import(/*webpackChunkName:"Vdom"*/ '../views/Example/Vdom/Vdom.vue'), name: 'Example_Vdom_Vdom_vue', children: [] },
      { path: 'demo', component: () => import(/*webpackChunkName:"demo"*/ '../views/Example/demo/demo.vue'), name: 'Example_demo_demo_vue', children: [] },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: routes, //
})

export default router
