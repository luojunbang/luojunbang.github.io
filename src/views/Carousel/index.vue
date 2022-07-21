<template>
  <div class="pd-t">
    <div class="carousel">
      <swiper>
        <!-- <swiper-item v-for="(item, index) in list" :key="index">item:{{ index }}</swiper-item> -->
      </swiper>
    </div>
    <div>reset:{{ reset }}</div>
    <div class="relative border" style="height: 300px; width: 300px">
      <div ref="ball" class="ball" id="reset" :style="style" :class="{ animating: reset, 'ball-green': !reset }">{{ reset }}</div>
    </div>
    <button @click="start">123</button>
  </div>
</template>

<script lang="ts" setup>
import Swiper from './components/Swiper.vue'
import SwiperItem from './components/SwiperItem.vue'
import { r } from 'lo-utils'
import { computed, reactive, ref, nextTick, watchPostEffect, watchSyncEffect, onMounted } from 'vue'
import { watch } from 'fs'
const list = reactive(new Array(20).fill(0).map((i, idx) => ({ id: r() })))
const reset = ref(false)
const real = ref(false)
const ball = ref()
const style = reactive({ left: '0px', top: '0px' })
console.log(ball)

onMounted(() => {
  ball.value.addEventListener('transitionend', () => {})
})

async function start() {
  style.left = '100px'
  style.top = '0px'
  reset.value = false
  await nextTick()
  reset.value = true
  real.value = true
  style.top = '100px'
}
watchPostEffect(() => {
  console.log('reset watchPostEffect:', reset.value)
})

watchSyncEffect(() => {
  console.log('reset watchSyncEffect:', reset.value)
})
</script>

<style lang="scss" scoped>
div.carousel {
  border: 1px solid #efefef;
  padding: 10px;
  width: 600px;
  margin: 0 auto;
  margin-top: 200px;
  height: 500px;
  overflow: hidden;
}
.animating {
  transition: all 0.3s linear;
}
.ball-green {
  background-color: green !important;
}
.ball {
  width: 10px;
  height: 10px;
  border: 1px solid black;
  background-color: red;
  position: absolute;
}
</style>
