<template>
  <div :key="item" class="w-33 fl pd-sm">
    <div class="content-box">
      <slot />
      <div class="content-title">{{ title }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  props: {
    height: {
      type: String,
      default: '200px'
    },
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<style>
.content-box {
  position: relative;
  overflow: hidden;
  height: v-bind(height);
  width: 100%;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
}
.content-title {
  height: 40px;
  line-height: 20px;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0px;
  padding: 10px 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
}
</style>
