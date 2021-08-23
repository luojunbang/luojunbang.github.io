import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
import dashboard from '@/view/dashboard'
import component from '@/view/component'
import Layout from '@/layout/index.vue'
const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/component',
    name: 'component',
    component: component
  }
]

const val = _ => {}
export default new VueRouter({ routes })
