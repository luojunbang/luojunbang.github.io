<template>
  <div>swiper:{{ direction }}</div>
</template>

<script lang="ts" setup>
import type { Direction } from './swiper'
import { swiperProps } from './swiper'
const props = defineProps(swiperProps)
</script>
