import { defineStore } from 'pinia'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

export const useRouterStore = defineStore('router', {
  state: () => {
    return {
      cachedRouter: [] as RouteLocationNormalizedLoaded[],
    }
  },
  actions: {},
})
