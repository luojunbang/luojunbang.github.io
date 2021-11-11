<template>
  <div class="h-100">
    <div class="fixed"><navbar></navbar></div>
    <div class="h-100">
      <router-view />
    </div>
  </div>
</template>

<script>
import navbar from './nav.vue'

export default {
  components: { navbar }
}
</script>

<style></style>
