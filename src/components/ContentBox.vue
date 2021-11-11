<template>
  <div :key="item" class="fl content-container">
    <div class="content-box">
      <slot />
      <div class="content-title">{{ title }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  data: () => ({ minwidth: '3601px' }),
  props: {
    width: {
      type: String,
      default: '400px'
    },
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
@media only screen and (max-width: 375px) {
  .content-container {
    width: v-bind(minwidth) !important;
  }
}
.content-container {
  float: left;
  margin: 0 20px 20px 0;
  width: v-bind(width);
}
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
