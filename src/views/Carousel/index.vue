<template>
  <div class="pd-t">
    <div class="carousel">
      <swiper>
        <!-- <swiper-item v-for="(item, index) in list" :key="index">item:{{ index }}</swiper-item> -->
      </swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Swiper from './components/Swiper.vue'
import SwiperItem from './components/SwiperItem.vue'
import { r } from 'lo-utils'
import { reactive } from 'vue'
const list = reactive(new Array(20).fill(0).map((i, idx) => ({ id: r() })))
</script>

<style lang="scss" scoped>
div.carousel {
  border: 1px solid #efefef;
  padding: 10px;
  width: 600px;
  margin: 0 auto;
  margin-top: 200px;
  height: 300px;
  overflow: hidden;
}
</style>
