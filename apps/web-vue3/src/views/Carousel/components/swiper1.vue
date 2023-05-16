<template>
  <div>activeIndex:{{ activeIndexs.value.join(',') }}</div>
  <br />
  <!-- --- -->
  <div ref="root" class="swiper-container" :style="{ overflow: isPreview ? 'auto' : 'visible' }" @mouseenter.stop="handleMouseEnter" @mouseleave.stop="handleMouseLeave">
    <slot></slot>
  </div>
  <div class="text-center">
    <el-button @click="prev">Prev</el-button>
    <el-button @click="next">Next</el-button>
    <el-button @click="move">Move</el-button>
  </div>
</template>

<script lang="ts" setup>
import { debounce, r, throttle } from 'lo-utils'
import type { CSSProperties } from 'vue'
import { onBeforeMount } from 'vue'
import { computed, unref, isProxy, shallowRef, getCurrentInstance, nextTick, onMounted, reactive, ref } from 'vue'
const swiperList = reactive(new Array(4).fill(0).map((_i, _idx) => ({ id: r(2) })))
const oldIndex = ref(-1)
// 计算
const calc = (i: number) => (i + swiperList.length) % swiperList.length

// 判断是否上一次
const isPrev = (activeIndexs: number[], oldIndex?: number) => oldIndex === calc(activeIndexs[0] - 1)
const wait = ref(3)
const isPreview = ref(false)
const root = shallowRef<HTMLDivElement>()
const IN_SHOW_COUNT = 2 // Count
const initalIndexs = new Array(IN_SHOW_COUNT).fill(0).map((_, i) => i)
const _lastIdx = IN_SHOW_COUNT - 1
const _restCount = swiperList.length - IN_SHOW_COUNT
const timer = ref<ReturnType<typeof setInterval> | null>(null)
const itemWidth = ref(0)
const offset = ref(0)

const translateItem = (activeIndex: number[], oldIndex?: number): Record<string, CSSProperties> => {
  const _itemWidth = unref(itemWidth)
  console.log('activeIndex:', activeIndex)
  console.log('oldIndex:', oldIndex)
  return [...activeIndex, ...new Array(_restCount).fill(0).map((_, i) => calc(i + activeIndex[_lastIdx] + 1))].reduce((rs, idx, i) => {
    ;(rs as any)[idx] = {
      transform: `translateX(${i * _itemWidth + offset.value}px)`,
      transition: (activeIndex.includes(idx) || idx == oldIndex) && oldIndex != -1 ? `all ${wait.value}s linear` : '',
      opacity: 1,
    }
    if (isPrev(activeIndex, oldIndex) && idx == oldIndex) {
      ;(rs as any)[idx].transform = `translateX(${-100 + offset.value}%)`
    }
    return rs
  }, {})
}

// refs
const activeIndexs = reactive<{ value: number[] }>({ value: [] })
const styles = reactive<Record<string, any>>({})

// computed
const cpWait = computed(() => {
  return wait.value + 's'
})
const cpContent = computed(() => {
  return (100 / IN_SHOW_COUNT).toFixed(4) + '%'
})

//methods
const prev = () => {
  oldIndex.value = activeIndexs.value.slice(_lastIdx)[0]
  setActiveItems([calc(activeIndexs.value[0] - 1), ...activeIndexs.value.slice(0, _lastIdx)], oldIndex.value)
}
const next = () => {
  oldIndex.value = activeIndexs.value[0]
  setActiveItems([...activeIndexs.value.slice(1), calc(activeIndexs.value[_lastIdx] + 1)], oldIndex.value)
}

const move = () => {
  offset.value = (offset.value - 1) % itemWidth.value
  if (offset.value == 0) {
    next()
  } else {
    setActiveItems(activeIndexs.value, -1)
  }
}

const setActiveItems = async (_indexs: number[], oldIndex: number) => {
  if (!isPrev(_indexs, oldIndex)) {
    const _itemWidth = unref(itemWidth)
    styles[_indexs[0]] = { transform: `translateX(${-_itemWidth}px)`, transition: `` }
    await nextTick()
    root.value && getComputedStyle(root.value).width // force brower render css quene
  }

  activeIndexs.value = _indexs
  const _styles = translateItem(_indexs, oldIndex)
  swiperList.forEach((_, i) => (styles[i] = _styles[i]))
}

const handleMouseEnter = () => {
  const _itemWidth = unref(itemWidth)
  isPreview.value = true

  offset.value = 0
  setActiveItems(activeIndexs.value, -1)

  pauseTimer()
  if (oldIndex.value == -1) return
  const _d = (oldIndex.value + swiperList.length - activeIndexs.value[_lastIdx] + 1) % swiperList.length
  styles[oldIndex.value].transform = `translateX(${_d * _itemWidth}px)`
  swiperList.forEach((_, i) => (styles[i].transition = ''))
}

const handleMouseLeave = () => {
  isPreview.value = false
  // reset scrollbar
  if (root.value) {
    const _scrollLeft = root.value.scrollLeft,
      _itemWidth = unref(itemWidth.value)
    root.value.scrollLeft = 0
    const _scrollLeftCount = ~~(_scrollLeft / _itemWidth)
    console.log(_scrollLeft, _scrollLeftCount)
    console.log(activeIndexs.value.map(i => calc(i + _scrollLeftCount)))
    offset.value = -_scrollLeft % _itemWidth
    setActiveItems(
      activeIndexs.value.map(i => calc(i + _scrollLeftCount)),
      -1,
    )
  }
  startTimer()
}

const startTimer = () => {
  timer.value = setInterval(() => move(), (wait.value * 1000) / itemWidth.value)
}
const pauseTimer = () => {
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
  }
}

// lifecycle
onMounted(async () => {
  await nextTick()
  itemWidth.value = (root.value?.offsetWidth ?? 0) / IN_SHOW_COUNT
  setActiveItems(initalIndexs, -1)
  startTimer()
})
onBeforeMount(() => {
  console.log(styles)
})
</script>

<style lang="scss" scoped>
.swiper-container {
  position: relative;
  width: 100%;
  height: 300px;
}

.swiper-item {
  // width: 300px;
  width: v-bind(cpContent);
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
