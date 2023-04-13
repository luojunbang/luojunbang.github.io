import { isJSType } from 'lo-utils'
import { defineStore } from 'pinia'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

export const useRouterStore = defineStore('router', {
  state: () => {
    return {
      cachedRouter: [] as RouteLocationNormalizedLoaded[],
    }
  },
  actions: {
    addView(view: RouteLocationNormalizedLoaded) {
      const { name } = view
      console.log('cachedRouter.length', this.cachedRouter.length)
      if (this.cachedRouter.find(i => i.name === (name as string))) return
      name && this.cachedRouter.push(view)
    },
    delView(view: RouteLocationNormalizedLoaded | number) {
      if (typeof view === 'number') {
        this.cachedRouter.splice(view, 1)
      } else {
        const { name } = view
        this.cachedRouter.splice(
          this.cachedRouter.findIndex(i => i.name === name),
          1,
        )
      }
    },
  },
})
