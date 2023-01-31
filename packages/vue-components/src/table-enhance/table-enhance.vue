<template>
  <el-table ref="enhanceTable" class="querytableloading table-text-cut" :highlight-current-row="!canSelect" stripe border :height="height" :data="data">
    <el-table-column v-if="!isHideIndexCol" label="序号" width="70px" fixed="">
      <template v-slot="{ $index }">{{ cpIndex($index) }}</template>
    </el-table-column>
    <el-table-column v-if="canSelect" type="selection" width="40" :fixed="isFixedSelection" :selectable="selectable" />
    <template v-for="item in columns" :key="item.key">
      <el-table-column
        :prop="item.key"
        :label="item.label"
        :fixed="item.isFixed ? item.isFixed : false"
        :min-width="item.width"
        :show-overflow-tooltip="!item.isCustomTooltip"
        :sortable="cpSortable(item.sortable)"
        :formatter="isJSType(item.formatter, 'function') ? (r, c, val) => item.formatter(val) : undefined"
      >
        <template v-if="item.slotHeader" v-slot:header>
          <slot :name="item.slotHeader"></slot>
        </template>
        <template v-if="item.slot" v-slot="{ row, $index }">
          <slot :name="item.slot" :data="{ row, $index }"></slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script lang="ts" setup>
// import { ElTable, ElTableColumn } from 'element-plus'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { ElTable } from 'element-plus'
import { isJSType } from 'lo-utils'
import { onMounted, nextTick, computed, watch, ref } from 'vue'
import { tableEnhanceProps } from './table-enhance'

const props = defineProps(tableEnhanceProps)

const itemFormatter = (r: any, c: any, val: any) => val

const enhanceTableRef = ref<InstanceType<typeof ElTable>>()

const cpIndex = (index: number) => {
  const { query } = props
  return index + 1 + (query.offset - 1) * query.limit
}

const cpSortable = computed(() => {
  return (itemSort: boolean) => {
    const { sortable } = props
    if (sortable) return itemSort === false ? itemSort : sortable
    else return itemSort ? itemSort : sortable
  }
})

const methodFn: Record<string, any> = {}

onMounted(() => {})

watch(props.columns, () => {
  nextTick(() => {
    enhanceTableRef.value?.doLayout()
  })
})

defineExpose({
  ...methodFn,
  setCurrentRow: enhanceTableRef.value?.setCurrentRow,
})
</script>
