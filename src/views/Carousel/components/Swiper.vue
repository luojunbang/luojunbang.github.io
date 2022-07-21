<template>
  <div>activeIndex:{{ activeIndex }}</div>
  <div id="nextIndex">nextIndex:{{ nextIndex }}</div>
  <div>lastIndex:{{ lastIndex }}</div>
  <div>diretion:{{ diretion }}</div>
  <div id="ready" style="width: 0; height: 0; display: none">ready:{{ ready }}</div>
  <div ref="root" class="swiper-container">
    <div class="swiper-item text-center pd-t-lg" :style="cpStyle(index)" v-for="(item, index) in swiperList" :key="index" :class="{ animating: ready && activeList.includes(index) }">
      <div>{{ index }}<br />{{ item.id }}<br />{{ ready ? 'T' : 'F' }}</div>
    </div>
  </div>
  <div class="text-center">
    <button @click="prev">Prev</button>
    <button @click="next">Next</button>
  </div>
</template>

<script lang="ts" setup>
import { computed, unref } from '@vue/reactivity'
import { r } from 'lo-utils'
import { CSSProperties, shallowRef, getCurrentInstance, nextTick, onMounted, reactive, ref } from 'vue'
const swiperList = reactive(new Array(11).fill(0).map((i, idx) => ({ id: r(2) })))

const calc = i => (i + swiperList.length) % swiperList.length
const ins = getCurrentInstance()

const root = shallowRef<HTMLDivElement>()

const nextIndex = ref(-1)
const activeIndex = ref(0)
const lastIndex = ref(-1)
const diretion = ref('')

const nextStyle = reactive({
  transform: '',
})

const activeList = computed(() => {
  if (diretion.value == 'prev') {
    return [activeIndex.value, ...new Array(IN_SHOW_COUNT).fill(0).map((i, idx) => lastIndex.value + idx)].map(calc)
  } else return [lastIndex.value, ...new Array(IN_SHOW_COUNT).fill(0).map((i, idx) => activeIndex.value + idx)].map(calc)
})
function next() {
  diretion.value = 'next'
  nextIndex.value = calc(activeIndex.value + IN_SHOW_COUNT)
  ready.value = false
  animating.value = false
  nextStyle.transform = `translateX(${100 * 2}%)`
  setTimeout(() => {
    // console.log('ready:', ready.value, document.getElementById('ready')?.innerText)
    ready.value = true
    lastIndex.value = activeIndex.value
    activeIndex.value = calc(activeIndex.value + 1)
  }, 20)
}
async function prev() {
  diretion.value = 'prev'
  nextIndex.value = calc(activeIndex.value - 1)
  ready.value = false
  nextStyle.transform = `translateX(${100 * -1}%)`
  await nextTick()
  root.value && getComputedStyle(root.value).width // force brower render css quene
  ready.value = true
  lastIndex.value = activeIndex.value
  activeIndex.value = calc(activeIndex.value - 1)
}

const ready = ref(true)
const animating = ref(false)
const cpAnimating = computed(() => {
  return index => {
    return ready.value
  }
})
const cpStyle = computed(() => {
  // console.log('activeIndex:', activeIndex.value)
  // console.log('lastIndex:', lastIndex.value)
  // console.log('diretion:', diretion.value)
  // console.log('diretion:', ready.value)
  return index => {
    if (!ready.value && index == nextIndex.value) {
      // console.log('nextIndex computedindex:', index)
      if (diretion.value == 'prev') return { transform: `translateX(${100 * -1}%)` }
      else if (diretion.value == 'next') return { transform: `translateX(${100 * IN_SHOW_COUNT + 1}%)` }
    }
    const ans: CSSProperties = {}
    let list: number[] = []
    let base = 0
    if (ready.value && diretion.value == 'prev') {
      // base = -1
      // activeIndex.value - 1,
      list = [activeIndex.value, ...new Array(IN_SHOW_COUNT).fill(0).map((i, idx) => lastIndex.value + idx)].map(calc)
    } else if (ready.value && diretion.value == 'next') {
      base = -1
      list = [lastIndex.value, ...new Array(IN_SHOW_COUNT).fill(0).map((i, idx) => activeIndex.value + idx)].map(calc)
    } else list = [...new Array(IN_SHOW_COUNT).fill(0).map((i, idx) => activeIndex.value + idx)].map(calc)
    if (list.indexOf(index) != -1) {
      // console.log('list computedindex:', index)
      ans.transform = `translateX(${100 * (list.indexOf(index) + base)}%)`
    } else {
      ans.transform = `translateX(${100 * IN_SHOW_COUNT + 1}%)`
      ans.display = [lastIndex.value, ...new Array(IN_SHOW_COUNT).fill(0).map((i, idx) => activeIndex.value + idx)].map(calc).includes(index) ? 'block' : 'none'
    }
    return ans
  }
})

const wait = ref(0.1)
const cpWait = computed(() => {
  return wait.value + 's'
})
let timer
const handleMove = () => {
  timer = setInterval(() => {
    prev()
  }, wait.value * 1000)
}

onMounted(() => {
  // handleMove()
})

const IN_SHOW_COUNT = 10 // Count

const SAFE_COUNT = 1
</script>

<style lang="scss" scoped>
.swiper-container {
  position: relative;
  width: 100%;
  height: 300px;
}
.swiper-item {
  // width: 300px;
  width: 10%;
  border: 1px solid black;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  &.animating {
    transition: all v-bind(cpWait) linear;
  }
}
</style>
