<template>
  <div class="swiper-container">
    <div
      class="swiper-item text-center pd-t-lg"
      :style="initing && index == nextIndex ? { ...cpStyle(index), ...nextPositionStyle } : cpStyle(index)"
      v-for="(item, index) in swiperList"
      :key="index"
      :class="{ animating: animating(index) }"
    >
      item:{{ index }}-{{ item.id }}
    </div>
  </div>
  <div class="text-center">
    <button @click="prev">Prev</button>
    <button @click="next">Next</button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { r } from 'lo-utils'
import { onMounted, reactive, ref } from 'vue'
const swiperList = reactive(new Array(2).fill(0).map((i, idx) => ({ id: r() })))

const calc = i => (i + swiperList.length) % swiperList.length

const nextIndex = ref(-1)
const activeIndex = ref(0)
const lastIndex = ref(swiperList.length - 1)
const diretion = ref('')
function next() {
  diretion.value = 'next'
  nextIndex.value = calc(activeIndex.value + 1 + IN_SHOW_COUNT - 1)
  setTimeout(() => {
    lastIndex.value = activeIndex.value
    activeIndex.value = calc(activeIndex.value + 1)
  }, 300)
}
function prev() {
  diretion.value = 'prev'
  nextIndex.value = calc(activeIndex.value - 1)
  setTimeout(() => {
    lastIndex.value = activeIndex.value
    activeIndex.value = calc(activeIndex.value - 1)
  }, 300)
}

const wait = 0.3
let timer
const handleMove = () => {
  timer = setTimeout(() => {
    next()
    handleMove()
  }, wait * 1000)
}

onMounted(() => {
  // handleMove()
})

const IN_SHOW_COUNT = 1 // Count

const SAFE_COUNT = 1
</script>

<style lang="scss" scoped>
.swiper-container {
  position: relative;
  width: 100%;
  height: 90%;
}
.swiper-item {
  // width: 300px;
  width: 100%;
  border: 1px solid black;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  &.animating {
    transition: all 0.3s linear;
  }
}
</style>
