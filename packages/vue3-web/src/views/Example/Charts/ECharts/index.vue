<template>
  <div ref="root"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts/core'
import type {
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
} from 'echarts/charts'
import { BarChart } from 'echarts/charts'
import type { GridComponentOption, DatasetComponentOption } from 'echarts/components'
import {
  GridComponent,
  // 数据集组件
  DatasetComponent,
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<BarSeriesOption | GridComponentOption | DatasetComponentOption>

// 注册必须的组件
echarts.use([GridComponent, DatasetComponent, BarChart, LabelLayout, UniversalTransition, CanvasRenderer])

echarts.use([BarChart])

const root = ref()
function initChart(el: HTMLElement) {
  const echartsInstance = echarts.init(el)
  const xAixs = new Array(10).fill(0).map((i, idx) => idx.toString())
  const options: ECOption = {
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
