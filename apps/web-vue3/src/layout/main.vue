<template>
  <div class="h-full flex flex-col">
    <div class=""><navbar /></div>
    <div class="overflow-x-auto h-[40px] bg-gray-50 flex-row-nowrap"><tabs /></div>
    <div class="p-md flex-1 overflow-auto">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" :key="Component.key" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import tabs from './tabs/index.vue'
import navbar from './nav/nav.vue'
</script>
<style></style>
