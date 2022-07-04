<template>
  <div class="carousel carousel1 relative">
    <div
      class="carousel1-item"
      v-for="(item, idx) in list"
      :class="{ 'carousel1-item__active': currIdx === idx, 'carousel1-item__last': idx === lastIdx, 'carousel1-item__next': nextIdx === idx }"
      :key="item"
      @transitionend="onTransitionend"
    >
      {{ item }}
    </div>
  </div>
  <button @click="handleBackward">Back</button>
  <button @click="handleForward">Forward</button>
  <div class="carousel"></div>
</template>

<script lang="ts" setup>
import { debounce } from 'lo-utils'
import { computed, onMounted, reactive, ReactiveEffect, ref, Ref } from 'vue'
const list: Array<string> = reactive(new Array(100).fill(0).map((_, idx) => idx.toString()))
const currIdx: Ref<number> = ref(0)
let lastIdx: Ref<number> = computed(() => {
  return currIdx.value == 0 ? list.length - 1 : currIdx.value - 1
})
let nextIdx: Ref<number> = computed(() => {
  return (currIdx.value + 1) % list.length
})
const isPending: Ref<boolean> = ref(false)

const handleForward = () => {
  console.log('handleForward', isPending.value)
  if (isPending.value) return
  isPending.value = true
  currIdx.value = nextIdx.value
}
const handleBackward = () => {
  console.log('handleBackward', isPending.value)
  if (isPending.value) return
  isPending.value = true
  currIdx.value = lastIdx.value
}

const onTransitionend = debounce(
  function (e) {
    // console.log(isPending.value)
    isPending.value = false
  },
  300,
  false,
)
let timer: null | number = null,
  INTERVAL = 2 * 1000
onMounted(() => {
  // timer = setInterval(handleForward, INTERVAL)
})
</script>

<style lang="scss" scoped>
div.carousel {
  width: 500px;
  margin: 0 auto;
  height: 300px;
  overflow: hidden;
}
.carousel1 {
  &-item {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(100%, 0);
    width: 100%;
    height: 100%;
    padding: 40px;
    border: 1px solid black;
    background-color: rgba(239, 239, 239, 1);
    transition: all 0.2s linear;
    text-align: center;
    z-index: 8;
    // visibility: hidden;
    &__next {
      transition: all 1s;
      z-index: 10;
      transform: translate(100%, 0);
    }
    &__active {
      transition: all 1s;
      z-index: 10;
      transform: translate(0, 0);
    }
    &__last {
      transition: all 1s;
      transform: translate(-100%, 0);
      z-index: 9;
    }
  }
}
</style>
