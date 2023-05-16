<template>
  <div ref="root"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const root = ref()
function initChart(el: HTMLElement) {
  const echartsInstance = echarts.init(el)
  const xAixs = new Array(10).fill(0).map((i, idx) => idx.toString())
  const options = {
    xAxis: { data: xAixs },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: new Array(10).fill(0).map(i => (Math.random() * 100) >> 2),
      },
    ],
  }
  echartsInstance.setOption(options)
}
onMounted(() => {
  initChart(root.value)
})
</script>

<style lang="scss" scoped>
div {
  height: 400px;
  width: 400px;
}
</style>
