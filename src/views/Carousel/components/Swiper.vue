<template>
  <div class="swiper-container">
    <div class="swiper-item text-center pd-t-lg" :style="{ ...cpStyle(index), ...nextStyle(index) }" v-for="(item, index) in swiperList" :key="index">item:{{ index }}-{{ item.id }}</div>
  </div>
  <div class="text-center">
    <button @click="prev">Prev</button>
    <button @click="next">Next</button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { number } from 'echarts/core'
import { r } from 'lo-utils'
import { onMounted, reactive, ref } from 'vue'
const swiperList = reactive(new Array(4).fill(0).map((i, idx) => ({ id: r() })))

const calc = i => (i + swiperList.length) % swiperList.length

const activeIndex = ref(0)
const lastIndex = ref(swiperList.length - 1)
const diretion = ref('')
function next() {
  diretion.value = 'next'
  setTimeout(() => {
    diretion.value = ''
    lastIndex.value = activeIndex.value
    activeIndex.value = calc(activeIndex.value + 1)
  })
}
function prev() {
  diretion.value = 'prev'
  setTimeout(() => {
    diretion.value = ''
    lastIndex.value = activeIndex.value
    activeIndex.value = calc(activeIndex.value - 1)
  })
}

const nextIndex = (curr, direction) => {
  let nextId
  if (direction == 'prev') {
    nextId = calc(curr - 1)
  }
  if (direction == 'next') {
    nextId = calc(curr + 1 + IN_SHOW_COUNT - 1)
  }
  return nextId
}

const nextStyle = computed(() => {
  const dir = diretion.value
  const activeIdx = activeIndex.value
  return index => {
    let tranX
    if (dir == 'prev') {
      tranX = -1
    }
    if (dir == 'next') {
      tranX = IN_SHOW_COUNT
    }
    return index == nextIndex(activeIdx, dir) && tranX !== undefined
      ? {
          transition: 'none',
          transform: `translateX(${100 * tranX}%)`,
        }
      : {}
  }
})

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

// const cpIsAnimating = computed(() => {
//   return index => index === activeIndex.value || index === lastIndex.value
// })
const IN_SHOW_COUNT = 3 // Count

const SAFE_COUNT = 2

function calcList(activeIdx) {
  let list: number[] = []
  while (list.length < IN_SHOW_COUNT && list.length < swiperList.length) {
    list.push(calc(activeIdx + list.length))
  }
  let _safe = 0
  // while (_safe++ < SAFE_COUNT && list.length < swiperList.length) {
  //   list.unshift(calc(activeIdx - _safe))
  //   list.length < swiperList.length && list.push(calc(activeIdx + IN_SHOW_COUNT - 1 + _safe))
  // }
  //
  return { safeCount: _safe - 1, list }
}

const animating = computed(() => {
  const activeIdx = activeIndex.value
  const { list, safeCount } = calcList(activeIdx)
  return index => {
    // if (diretion.value === 'prev') new Array(safeCount).fill(0).forEach((i, idx) => (list[idx] = -1))
    // if (diretion.value === 'next') new Array(safeCount).fill(0).forEach((i, idx) => (list[list.length - 1 - idx] = -1))
    console.log(list)

    return list.indexOf(index) != -1
  }
})

const cpStyle = computed(() => {
  // let _offset = (IN_SHOW_COUNT + 2) >> 1
  const dir = diretion.value
  const activeIdx = activeIndex.value
  const { list, safeCount } = calcList(activeIdx)
  let nextId = nextIndex(activeIdx, dir)
  if (dir == 'next') list.push(nextId)
  if (dir == 'prev') list.unshift(nextId)
  return index => {
    const _idx = list.indexOf(index)
    let tranX = IN_SHOW_COUNT + 3
    if (_idx != -1) {
      tranX = _idx
    }
    return {
      transition: _idx === -1 ? '' : `all ${wait}s linear`,
      transform: `translateX(${100 * tranX}%)`,
      display: _idx === -1 ? 'none' : 'block',
    }
  }
})
</script>

<style lang="scss" scoped>
.swiper-container {
  position: relative;
  width: 100%;
  height: 90%;
}
.swiper-item {
  // width: 300px;
  width: 33.33%;
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
