import { routeAutoLink } from '../routerImport'

import main from '@/layout/main.vue'
import sub from '@/layout/sub.vue'
import Appmain from '@/layout/Appmain.vue'

const autoImportList = (process.env.EXAMPLE_LIST ?? []) as string[]
console.log(autoImportList)

const routerList: string[] = []

export default {
  path: '/Example',
  component: main,
  children: routeAutoLink(autoImportList, [Appmain, sub])(path => () => import(/*webpackChunkName:"[request]"*/ `../../views/Example/${path.replace('.vue', '')}.vue`)),
}
