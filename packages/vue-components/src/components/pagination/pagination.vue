<template>
  <div :class="{ hidden: hidden }" class="flex items-start">
    <el-pagination
      :background="background"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :pager-count="5"
      :total="total"
      v-bind="$attrs"
      @size-change="val => $emit('pagination', currentPage, val)"
      @current-change="val => $emit('pagination', val, pageSize)"
    />
    <span>
      ，共 <span>{{ cpPageCount }}</span> 页
    </span>
    <div class="text-right flex-1">
      <span class="mr-sm">当前显示 {{ cpCountStart }}-{{ cpCountEnd }} 条记录</span>
      共 <span>{{ total }}</span> 条记录
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { paginationProps } from './pagination'
const props = defineProps(paginationProps)
const emtis = defineEmits({
  pagination: (page: number, pageSize: number) => true,
})

const cpCountStart = computed(() => Math.min((props.total, (props.currentPage - 1) * props.pageSize + 1)))

const cpCountEnd = computed(() => Math.min(props.total, props.currentPage * props.pageSize))

const cpPageCount = computed(() => Math.ceil(props.total / props.pageSize))
</script>

<style lang="scss" scoped></style>
