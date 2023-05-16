<template>
  <div class="pd-t">
    <div class="carousel">
      <swiper>
        <SwiperItem v-for="(item, index) in list" :key="index">item:{{ index }}</SwiperItem>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Swiper from './components/swiper1.vue'
import SwiperItem from './components/swiper-item.vue'
import { r } from 'lo-utils'
import { computed, reactive, ref, nextTick, watchPostEffect, watchSyncEffect, onMounted } from 'vue'
const list = reactive(new Array(20).fill(0).map((i, idx) => ({ id: r() })))
</script>

<style lang="scss" scoped>
div.rolling {
  float: left;
  margin-left: 100px;
  border: 1px solid #efefef;
  margin-top: 200px;
  height: 600px;
  width: 400px;
}

div.carousel {
  float: left;
  border: 1px solid #efefef;
  padding: 10px;
  width: 600px;
  margin-left: 50px;
  margin-top: 200px;
  height: 500px;
  overflow: visible;
}
.animating {
  transition: all 0.3s linear;
}
.ball-green {
  background-color: green !important;
}
</style>
