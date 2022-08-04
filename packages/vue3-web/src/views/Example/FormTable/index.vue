<template>
  <div class="clearfix">
    <div class="w-70 fl">
      <LoForm ref="LoFormRef" label-position="right" size="large" :list="list" :inline="true" @formChange="onFormChange">
        <template v-slot:templatelabelSlot="{ item }">{{ item.label + '-labelslot' }}</template>
        <template v-slot:="{ item }">{{ item.field + '-formslot' }}</template>
      </LoForm>
      <div>
        <pre class="mg-t-lg" style="word-break: break-word; width: 500px">{{ JSON.stringify(form, null, 2) }}</pre>
      </div>
    </div>
    <div class="w-30 fl">
      <LoForm />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoForm from '@/components/LoFormVue/LoForm.vue'
import { LoFormInstance, LoFormConfig, LoFormItem, LoFormOption } from '@/components/LoFormVue/LoForm'
import { computed, onMounted, reactive, ref, defineExpose } from 'vue'
import { t } from 'lo-utils'

import { useAddressSelect, addressProps } from './useAddress'

let list = reactive<LoFormConfig>([
  { field: 'text', label: 'Text' },
  { field: 'textarea', label: 'Textarea', type: 'textarea', rows: 4 },
  { field: 'number', label: 'Number', type: 'number' },
  { field: 'email', label: 'email', isRelative: true, placeholder: 'email input', throttle: 1 },
  { field: 'switch', label: 'Switch', type: 'switch' },
  {
    field: 'checkboxgroup',
    label: 'Checkboxgroup',
    type: 'checkbox-group',
    options: ['province1', 'province2'],
  },
  {
    field: 'radiogroup',
    label: 'Radiogroup',
    type: 'radio-group',
    options: ['province1', 'province2'],
  },
  {
    field: 'province',
    label: 'Province',
    isRelative: true,
    type: 'select',
    options: [],
  },
  { field: 'city', label: 'City', isRelative: true, type: 'select', options: [] },
  { field: 'country', label: 'Country', isRelative: true, type: 'select', options: [] },
  { field: 'town', label: 'town', isRelative: true, type: 'select', options: [] },
  { field: 'street', label: 'street', isRelative: true, type: 'select', options: [] },
  // ...datePickTypes.map(i => {
  //   return {
  //     field: i,
  //     type: i,
  //     label: i.toUpperCase(),
  //   }
  // }),
  { field: 'time', label: 'Time', type: 'time' },
  { field: 'timerange', label: 'Timerange', isRange: true, type: 'time' },
  { field: 'labelSlot', label: 'LabelSlot', labelSlot: 'templatelabelSlot', formSlot: ' ' },
])

const LoFormRef = ref<LoFormInstance>()
onMounted(() => {
  console.log('LoFormRef.value:', LoFormRef.value?.form)
  initOptions()
})

function onFormChange(item: LoFormItem, value, oldVal) {
  console.log('onFormChange:', item.field, value, oldVal)
  if (addressProps.includes(item.field)) {
    const idx = addressProps.indexOf(item.field) + 1
    const res = useAddressSelect(
      item.field,
      value,
      list.find(i => i.field == addressProps[idx])
    )
    addressProps.slice(idx).forEach(field => LoFormRef.value?.setFormValue(field, res[field]))
  }
}

async function handleClick() {
  const field = 'select'
  list.splice(list.length - 1, 1)
  await t(2)
  list.push({ label: 'Select', field: field, type: 'select', options: [{ label: '--all', value: 'all' }], isRelative: true })
  setTimeout(() => {
    list[list.length - 1].options = [{ label: 'reveal', value: 'reveal' }]
    if (LoFormRef.value) LoFormRef.value.form[field] = 'reveal'
  }, 3000)
}

function initOptions() {
  const idx = addressProps.indexOf('') + 1
  const res = useAddressSelect(
    '',
    '',
    list.find(i => i.field == addressProps[idx])
  )
  addressProps.slice(idx).forEach(field => LoFormRef.value?.setFormValue(field, res[field]))
}

async function handleReset() {
  // LoFormRef.value?.resetFields(['email'])
}

const form = computed(() => {
  return LoFormRef.value?.form
})

function handleSubmit() {
  LoFormRef.value
    ?.validate()
    .then(res => {
      console.log('pass')
    })
    .catch(err => {
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
