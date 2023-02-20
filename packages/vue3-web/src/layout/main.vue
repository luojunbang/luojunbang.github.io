<template>
  <div class="h-full flex flex-col">
    <div class=""><navbar /></div>
    <div class="pd-md flex-1 overflow-a scroll-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import navbar from './nav/nav.vue'

export default {
  components: { navbar },
}
</script>

<style></style>
