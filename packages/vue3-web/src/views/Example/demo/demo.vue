<template>
  <!-- <div :class="bgc" class="px-4 LborderTopLeftRadius-30px Ltransition-all-2s h-400px Lfont-24px Lbd-1px-solid-red Lpdx-20px">2word1</div>

  <div class="flex items-center">
    <div class="box p-xs bg-black"></div>
    <div class="box p-sm bg-black-80"></div>
    <div class="box p-md bg-black-60"></div>
    <div class="box p-lg bg-black-40"></div>
    <div class="box p-xl bg-black-20"></div>
    <div class="box p-xl bg-black-10"></div>
  </div>
  <div class="flex items-center">
    <div class="box m-xs bg-blue"></div>
    <div class="box m-sm bg-success"></div>
    <div class="box m-md bg-normal"></div>
    <div class="box m-lg bg-warn"></div>
    <div class="box m-xl bg-danger"></div>
  </div> -->
  <LoSwiper direction="horizon" />
  <el-button icon="123">Button</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'
import { LoSwiper } from 'lo-vue-components'
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
.border {
  border-top-left-radius: 20px;
}
.box {
  height: 40px;
  width: 40px;
}
</style>
