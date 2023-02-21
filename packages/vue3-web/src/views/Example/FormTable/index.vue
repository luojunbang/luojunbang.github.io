<template>
  <div class="p-md h-full flex flex-col">
    <div class="w-full overflow-hidden">
      <LoFormList
        ref="LoFormListRef"
        :rowCount="formSetttingData.rowCount"
        :list="formList"
        :label-width="formSetttingData.labelWidth + '%'"
        :inline="formSetttingData.inline"
        @formChange="onFormChange"
      >
        <template v-slot:templatelabelSlot="{ item }">{{ item.label }}</template>
        <template v-slot:templateSlot="{ item }">
          <el-button type="primary" @click="isViewFormConfig = !isViewFormConfig">FormConfig</el-button>
          <el-button type="primary" @click="showTableConfig">TableConfig</el-button>
        </template>
      </LoFormList>
    </div>
    <TableEnhance class="flex-1" :data="tableData.value" :columns="tableColumn" :query="tableData.query" />
    <Pagination v-model:page="tableData.query.page" v-model:rows="tableData.query.rows" :total="tableData.total" />
  </div>
  <el-drawer v-model="isViewFormConfig" direction="ltr" size="40vw">
    <div class="flex flex-col h-full">
      <pre class="flex-1 overflow-auto border p-md text-sm" style="word-break: break-word">{{ JSON.stringify(formData, null, 2) }}</pre>
      <div class="flex-1 border h-full p-md mt-md">
        <LoFormList ref="formSettingListRef" :list="formSettingList" :inline="false" />
      </div>
    </div>
  </el-drawer>
  <el-drawer v-model="isViewTableConfig" direction="rtl" size="40vw" @close="onTableConfigClose">
    <div class="flex flex-col h-full">
      <div class="flex-row-nowrap">
        <i class="flex-1 mr-sm">label</i>
        <i class="flex-1">key</i>
      </div>
      <div v-for="(item, index) in tableColumnConfig" :key="index" class="flex-row-nowrap mt-sm">
        <el-input class="flex-1 mr-sm" v-model="item.label" placeholder="Label" />
        <el-input class="flex-1" v-model="item.key" placeholder="Key" />
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import type { LoFormItem, LoTableColumn } from 'lo-vue-components'
import { LoFormList, LoTableEnhance as TableEnhance, LoPagination as Pagination } from 'lo-vue-components'
import { computed, onMounted, reactive, ref } from 'vue'
import { r, t } from 'lo-utils'
import { formConfig } from './config'

import { useAddressSelect, addressProps } from './useAddress'

//data
const isViewFormConfig = ref(false)
const isViewTableConfig = ref(false)
const tableData = reactive({
  value: [] as any[],
  total: 0,
  query: {
    page: 1,
    rows: 15,
  },
})
const tableColumn = reactive(formConfig.map(i => ({ label: i.label, key: i.field })))

const tableColumnConfig = reactive<LoTableColumn[]>([])

// refs
const formList = reactive<LoFormItem[]>(formConfig)
const LoFormListRef = ref<InstanceType<typeof LoFormList> | null>(null)
const formSettingListRef = ref<InstanceType<typeof LoFormList> | null>(null)

// lifecycle
onMounted(() => {
  initOptions()
})

const formSettingList = reactive<LoFormItem[]>([
  { label: 'RowCount', field: 'rowCount', type: 'number', controls: true, value: 4 },
  { label: 'Inline', field: 'inline', type: 'switch', value: true },
  { label: 'LabelWidth', field: 'labelWidth', type: 'slider', value: 36 },
])

const formSetttingData = computed(
  () =>
    formSettingListRef.value?.form ?? {
      labelWidth: 36,
      RowCount: 4,
    },
)

const showTableConfig = () => {
  tableColumn.forEach(i => {
    tableColumnConfig.push({ label: i.label, key: i.key })
  })
  isViewTableConfig.value = !isViewTableConfig.value
}
const onTableConfigClose = () => {
  tableColumn.splice(0, tableColumn.length)
  tableColumnConfig.forEach(i => {
    tableColumn.push({ label: i.label, key: i.key })
  })
  tableColumnConfig.splice(0, tableColumnConfig.length)
  tableData.value = new Array(15).fill(0).map(i => {
    return Object.fromEntries(tableColumn.map(i => [i.key, r()]))
  })
}

function onFormChange(item: { field: string }, value: string | undefined, oldVal: any) {
  if (addressProps.includes(item.field)) {
    initOptions(item.field, value)
  }
}

function initOptions(field = '', value = '') {
  const idx = addressProps.indexOf(field) + 1
  const _field = formList.find(i => i.field == addressProps[idx])
  if (!_field) return
  useAddressSelect(field, value, _field)
  addressProps.slice(idx).forEach(field => LoFormListRef.value?.setFormValue(field, ''))
}

async function handleReset() {
  LoFormListRef.value?.resetFields(['email'])
}

const formData = computed(() => LoFormListRef.value?.form)

function handleSubmit() {
  LoFormListRef.value
    ?.validate()
    .then((res: any) => {
      console.log('pass')
    })
    .catch((err: any) => {
      console.log(err)
    })
}
</script>

<style lang="scss">
.clearfix::after {
  content: '';
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}
</style>
