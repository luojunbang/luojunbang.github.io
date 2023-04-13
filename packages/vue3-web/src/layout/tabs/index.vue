<template>
  <el-tag v-for="view in routerStore.cachedRouter" :key="(view.name as RouteRecordName)" class="mx-xs pointer" :type="isActive(view) ? 'success' : undefined" closable @close="handleClose(view)">
    <RouterLink :to="view.path">{{ view.meta?.title ?? view.name }}</RouterLink>
  </el-tag>
</template>

<script lang="ts" setup>
import { useRouterStore } from '@/pinia'
import { toRaw, watch, onMounted, watchEffect } from 'vue'
import { onBeforeRouteUpdate, RouteRecordName, useRoute, useRouter } from 'vue-router'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
// data
const routerStore = useRouterStore()
const router = useRouter()
const route = useRoute()

//methods
const isActive = (view: RouteLocationNormalizedLoaded) => {
  return route.path === view.path
}
const updateTabs = (view: RouteLocationNormalizedLoaded) => {
  routerStore.addView(view)
}
const handleClose = (view: RouteLocationNormalizedLoaded) => {
  const idx = routerStore.cachedRouter.findIndex(i => i.name === view.name)
  routerStore.delView(idx)
  if (isActive(view)) {
    toNextView(idx)
  }
}
const toNextView = (idx: number) => {
  if (routerStore.cachedRouter.length == 0) {
    if (route.path == '/admin') {
      console.log('replace', '/admin')
      // router.replace({ path: '/redirect', query: { path: route.fullPath } })
    }
    router.push('/admin')
  } else {
    const { fullPath } = routerStore.cachedRouter[Math.min(idx, routerStore.cachedRouter.length - 1)]
    router.push(fullPath)
  }
}

// watch
watch(
  () => route.name,
  val => {
    updateTabs({ ...route })
  },
)

//hooks
onMounted(() => {
  updateTabs(router.currentRoute.value)
})
</script>

<style lang="scss"></style>
