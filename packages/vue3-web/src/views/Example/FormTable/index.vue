<template>
  <div class="p-md h-[800px]">
    <div class="w-full h-1/2 p-md border overflow-y-auto">
      <div class="w-full overflow-hidden">
        <LoFormList
          ref="LoFormListRef"
          :rowCount="formSetttingData.rowCount"
          :list="formList"
          :label-width="formSetttingData.labelWidth + '%'"
          :inline="formSetttingData.inline"
          @formChange="onFormChange"
        >
          <template v-slot:templatelabelSlot="{ item }">{{ item.label + '-Label' }}</template>
          <template v-slot:templateSlot="{ item }">{{ item.field + '-Form' }}</template>
        </LoFormList>
      </div>
    </div>
    <div class="flex-row-nowrap h-1/2 mt-md">
      <pre class="flex-1 mr-md pl-md h-full overflow-auto border p-md text-sm" style="word-break: break-word">{{ JSON.stringify(formData, null, 2) }}</pre>
      <div class="flex-1 border h-full p-md">
        <LoFormList ref="formSettingListRef" :list="formSettingList" :inline="false" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { LoFormItem } from 'lo-vue-components'
import { LoFormList } from 'lo-vue-components'
import { computed, onMounted, reactive, ref } from 'vue'
import { r, t } from 'lo-utils'
import { formConfig } from './config'

import { useAddressSelect, addressProps } from './useAddress'

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

const formSetttingData = computed(() => formSettingListRef.value?.form ?? {})

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
