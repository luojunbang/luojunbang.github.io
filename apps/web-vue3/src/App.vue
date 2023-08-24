<template>
  <div class="view-container">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'
const router = useRouter()
const route = useRoute()

onMounted(() => {
  window.$wujie?.bus.$on('vue-router-change', (path: string) => {
    console.log('vue-path:', path)
    router.push(path || '/')
  })
})
</script>

<style lang="scss">
html,
body {
  height: 100%;
  position: relative;
}
#app {
  height: 100%;
  @apply font-serif;
}
.view-container {
  height: 100%;
}
</style>
