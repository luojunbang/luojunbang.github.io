<template>
  <div class="h-100 flex-column">
    <div class=""><navbar></navbar></div>
    <div class="pd border flex1 overflow-a scroll-container">
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
