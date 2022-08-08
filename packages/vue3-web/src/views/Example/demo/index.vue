<template>
  <div class="px-4" :style="bgc">word</div>
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
<style lang="scss">
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
