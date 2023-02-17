<template>
  <div class="w-60 mg0auto" style="width: 3000px">
    <div v-for="item in urls" :key="item" class="w-100 mg-tb-lg">
      <img :src="item" alt="" class="" width="20" style="margin-top: 200px; max-height: 500px" />
    </div>
    <div class="w-100 mg-tb-lg">
      <img ref="imgEl" :src="imgSrc" alt="" class="" style="margin-top: 200px; max-height: 500px" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import { onMounted, reactive, ref } from 'vue'
const urls: string[] = reactive([
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png',
])
const imgEl = ref<HTMLElement>()
// console.log(imgEl.value)
const imgSrc: Ref<string> = ref('')
function debounce(fn, wait = 300) {
  let args, result, ctx, timer, lastEmitTime
  const handler = () => {
    const last = Date.now() - lastEmitTime
    if (last > 0 && last < wait) {
      timer = setTimeout(handler, wait - last)
    } else {
      timer = null
      result = fn.apply(ctx, args)
    }
  }
  return () => {
    lastEmitTime = Date.now()
    args = arguments
    if (!timer) timer = setTimeout(handler, wait)
    return result
  }
}

onMounted(() => {
  imgEl.value && isInContainer(imgEl.value)
  document.querySelector('.scroll-container')?.addEventListener(
    'scroll',
    debounce(function (e) {
      if (imgEl.value && isInContainer(imgEl.value, document.querySelector('.scroll-container'))) {
        if (!imgSrc.value) imgSrc.value = 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png'
      }
    }),
  )
})
function isInContainer(el: Element, container?: Element | null): boolean {
  let containerRect
  const elRect = el.getBoundingClientRect()
  if (!container) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0,
    }
  } else {
    containerRect = container.getBoundingClientRect()
  }
  console.log(containerRect, elRect)

  if (elRect.top <= containerRect.bottom && elRect.bottom >= containerRect.top && elRect.left <= containerRect.right && elRect.right >= containerRect.left) {
    return true
  } else {
    return false
  }
}
</script>
