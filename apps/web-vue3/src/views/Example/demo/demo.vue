<template>
  <LoSwiper ref="LoSwiperRef" direction="horizon" />
  <el-button type="text" />
  <LoTableEnhance :columns="cols" :data="[{}, {}]" />
</template>

<script lang="ts" setup>
import { LoSwiper, LoTableEnhance } from 'lo-vue-components'
import { ref, computed, onMounted } from 'vue'
import { t } from 'lo-utils'
const color = ref('blue')

const LoSwiperRef = ref<InstanceType<typeof LoSwiper> | null>(null)

const cols = [{ label: 'XX1', field: 'xx1' }]

onMounted(() => {
  setTimeout(() => {
    LoSwiperRef.value?.left()
  }, 3000)
})

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
.border {
  border-top-left-radius: 20px;
}
.box {
  height: 40px;
  width: 40px;
}
</style>
