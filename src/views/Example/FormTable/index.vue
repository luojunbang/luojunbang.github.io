<template>
  <div>
    <LoForm ref="LoFormRef" label-position="right" :list="list" :inline="true" @formChange="onFormChange">
      <template v-slot:templatelabelSlot="{ item }">{{ item.label + '-slot' }}</template>
      <template v-slot:templateformSlot="{ item }">{{ item.field + '-slot' }}</template>
    </LoForm>
  </div>
  <div class="mg-t-lg" style="word-break: break-word; width: 500px">{{ JSON.stringify(form) }}</div>
  <button @click="handleClick">Push</button>
  <button @click="handleSubmit">Submit</button>
  <button @click="handleReset">Reset</button>
</template>

<script lang="ts" setup>
import LoForm from '@/components/LoFormVue/LoForm.vue'
import { LoFormInstance, LoFormConfig, LoFormItem, LoFormOption } from '@/components/LoFormVue/LoForm'
import { computed } from '@vue/reactivity'
import { onMounted, reactive, ref, defineExpose } from 'vue'
import { t } from 'lo-utils'
import { datePickTypes } from 'element-plus'

import { useAddressSelect } from './useAddress'
import { isDef } from '@vueuse/shared'
const provinceOptions = ref<LoFormOption[]>([])
const cityOptions = ref<LoFormOption[]>([])
const countryOptions = ref<LoFormOption[]>([])

let list = reactive<LoFormItem[]>([
  { field: 'text', label: 'Text' },
  { field: 'textarea', label: 'Textarea', type: 'textarea' },
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
    options: provinceOptions,
  },
  { field: 'city', label: 'City', isRelative: true, type: 'select', options: cityOptions },
  { field: 'country', label: 'Country', isRelative: true, type: 'select', options: countryOptions },
  // ...datePickTypes.map(i => {
  //   return {
  //     field: i,
  //     type: i,
  //     label: i.toUpperCase(),
  //   }
  // }),
  { field: 'time', label: 'Time', type: 'time' },
  { field: 'timerange', label: 'Timerange', isRange: true, type: 'time' },
  { field: 'labelSlot', label: 'LabelSlot', labelSlot: 'templatelabelSlot', formSlot: 'templateformSlot' },
])

const LoFormRef = ref<LoFormInstance>()
onMounted(() => {
  console.log('LoFormRef.value:', LoFormRef.value?.form)
})

const addressList = ['province', 'city', 'country']

function onFormChange(item: LoFormItem, value, oldVal) {
  console.log('onFormChange:', item.field, value, oldVal)
  const idx = addressList.indexOf(item.field) + 1
  const refConfig = {
    province: provinceOptions,
    city: cityOptions,
    country: countryOptions,
  }
  if (addressList.includes(item.field)) {
    // const res = useAddressSelect(item.field, value, refConfig[addressList[idx]])
    const res = useAddressSelect(item.field, value, list.find(i => i.field == addressList[idx])?.options)
    addressList.slice(idx).forEach(field => LoFormRef.value?.setFormValue(field, res[field]))
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

async function handleReset() {
  // LoFormRef.value?.resetFields(['email'])
  const _fieldItem = list.find(i => i.field == 'province')
  _fieldItem && (_fieldItem.options = provinceOptions.value)
  await t(2)
  provinceOptions.value = [
    { label: 'Please Select', value: '' },
    { label: 'province1', value: 'province1' },
    { label: 'province2', value: 'province2' },
  ]
  LoFormRef.value?.setFormValue('province', '')
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
