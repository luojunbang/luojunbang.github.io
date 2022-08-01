<template>
  <div class="mg0auto mg-t-lg outerbox border-base" :style="bgc">word</div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { t } from 'lo-utils'
const color = ref('blue')

const bgc = computed(() => {
  return {
    background: color.value,
  }
})

t(2).then(res => {
  console.log(color.value)

  color.value = 'black'
})
</script>

<style></style>
<style lang="scss" scoped></style>
