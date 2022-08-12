<template>
  <div :class="bgc"  class="px-4 LborderTopLeftRadius-30px Ltransition-all-2s h-400px Lfont-24px Lbd-1px-solid-red Lpdx-20px ">2word1</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
defineComponent({
  name: 'demo',
})
</script>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { t } from 'lo-utils'
const color = ref('blue')

const bgc = computed(() => {
  return {
    background: '#fff',
  }
})

t(2).then(res => {
  console.log(color.value)
})
</script>

<style>
.los {
  color: black;
}
</style>
<style lang="scss" scoped>
.h-400px {
  height: 200px;
}
.border{
  border-top-left-radius: 20px;
}
</style>
