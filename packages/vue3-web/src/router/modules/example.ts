import { routeAutoLink } from '../routerImport'

import main from '@/layout/main.vue'
import sub from '@/layout/sub.vue'
import Appmain from '@/layout/Appmain.vue'

const routerList = require.context('../../views/Example', true, /\.vue$/, 'lazy').keys()

export default {
  path: '/Example',
  component: main,
  children: routeAutoLink(routerList, [Appmain, sub])(path => import(/*webpackChunkName:"[request]"*/ `../../views/Example/${path.replace('.vue', '')}.vue`)),
}
