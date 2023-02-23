<template>
  <div>
    <span v-for="tag in routerStore.cachedRouter" :key="tag.path" class="mr-sm">{{ tag.name }}</span>
  </div>
</template>

<script lang="ts" setup>
import { useRouterStore } from '@/pinia'
import { toRaw, watch, onMounted } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import type { RouteLocationNormalized } from 'vue-router'
// data
const routerStore = useRouterStore()
const router = useRouter()

//methods
const updateTabs = (view: RouteLocationNormalized) => {
  console.log(view)
}
//hooks
onBeforeRouteUpdate(to => {
  updateTabs(to)
})
onMounted(() => {
  updateTabs(router.currentRoute.value)
})
</script>

<style lang="scss"></style>
