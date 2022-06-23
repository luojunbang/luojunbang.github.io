<template>
  <div class="h-100">
    <div class="fixed"><navbar></navbar></div>
    <div class="mg h-100 pd border">
      <div>Main</div>
      <router-view />
    </div>
  </div>
</template>

<script>
import navbar from './nav.vue'

export default {
  components: { navbar },
}
</script>

<style></style>
