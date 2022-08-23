import Formlist from './formlist.vue'
// import 'element-plus/dist/index.css'

import type { AppContext, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
  ;(main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component('LoFormList', comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;(main as any)[key] = comp
    }
  }
  return main as SFCWithInstall<T> & E
}

export const LoFormList = withInstall(Formlist)

export default LoFormList

export * from './formlist'

export type LoFormInstance = InstanceType<typeof Formlist>
