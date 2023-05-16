<template>
  <div class="swiper-item text-center pd-t-lg" :style="itemStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const itemStyle = reactive({})
</script>

<style lang="scss" scoped>
.swiper-item {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
