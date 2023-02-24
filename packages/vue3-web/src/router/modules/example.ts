import { generateRouterFromFilePath } from '../routerImport'

import main from '@/layout/main.vue'
import sub from '@/layout/sub.vue'
import Appmain from '@/layout/Appmain.vue'

const autoImportList = (process.env.EXAMPLE_LIST ?? []) as string[]

const importFn = (path: string) => () => import(/*webpackChunkName:"[request]"*/ `../../views/Example/${path.replace('.vue', '')}.vue`)

export default {
  path: '/example',
  component: main,
  children: generateRouterFromFilePath(autoImportList, [Appmain, sub], route => {
    console.log(route)
    if (route.path === 'FormTable') route.meta = { title: '可视化表格表单' }
  })(importFn),
}
