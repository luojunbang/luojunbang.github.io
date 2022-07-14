<template>
  <div class="mg0auto mg-t-lg outerbox border-base" ref="outerBox">
    <!-- <div class=""></div> -->
  </div>
  <button class="" @click="handleClick">获取</button>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue'

const text = 'luo'
const outerBox = ref<HTMLElement | null>(null)
const getScrollbarWidth = () => {
  if (!window || !document) throw new Error('Need window env')
  const outerDiv = document.createElement('div')
  outerDiv.style.width = '100px'
  outerDiv.style.position = 'absolute'
  outerDiv.style.visibility = 'hidden'
  outerDiv.style.top = '-9999px'
  document.body.appendChild(outerDiv)

  const outerboxWidth = outerDiv.offsetWidth
  outerDiv.style.overflow = 'scroll'

  const innerDiv = document.createElement('div')
  innerDiv.style.width = '100%'
  outerDiv.appendChild(innerDiv)
  const innerboxWidth = innerDiv.offsetWidth
  console.log(outerboxWidth, innerboxWidth)
  document.body.removeChild(outerDiv)
  return outerboxWidth - innerboxWidth
}
const handleClick = _ => {
  console.log('click')
  console.log(outerBox.value?.offsetWidth, outerBox.value?.clientWidth)
  outerBox.value && (outerBox.value.style.overflow = 'scroll')
  const div = document.createElement('div')
  div.style.width = '100%'
  div.style.background = '#efefef'
  outerBox.value?.appendChild(div)
  console.log(div.offsetWidth, div.clientWidth)
  console.log(getScrollbarWidth())
}
</script>

<style>
::-webkit-scrollbar {
  width: 18px; /*对垂直流动条有效*/
  height: 12px; /*对水平流动条有效*/
}
</style>
<style lang="scss" scoped>
.outerbox {
  width: 500px;
  height: 500px;
  // div {
  //   width: 100%;
  //   height: 800px;
  //   background-color: #efefef;
  // }
}
</style>
