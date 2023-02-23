<template>
  <div class="h-full flex flex-col">
    <div class=""><navbar /></div>
    <div class="overflow-x-auto h-[40px] bg-gray-50"><tabs /></div>
    <div class="pd-md flex-1 overflow-a scroll-container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import tabs from './tabs/index.vue'
import navbar from './nav/nav.vue'
</script>

<style></style>
