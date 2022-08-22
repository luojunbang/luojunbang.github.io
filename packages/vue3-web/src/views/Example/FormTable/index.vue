<template>
  <div class="clearfix">
    <div class="w-70 fl">
      <LoFormList ref="LoFormListRef" label-position="right" size="large" :list="list" :inline="true" @formChange="onFormChange">
        <template v-slot:templatelabelSlot="{ item }">{{ item.label + '-labelslot' }}</template>
        <template v-slot:="{ item }">{{ item.field + '-formslot' }}</template>
      </LoFormList>
      <div>
        <pre class="mg-t-lg" style="word-break: break-word; width: 500px">{{ JSON.stringify(form, null, 2) }}</pre>
      </div>
    </div>
    <div class="w-30 fl"></div>
  </div>
</template>

<script lang="ts" setup>
import { LoFormList } from 'lo-vue-components'
import { LoFormInstance } from 'lo-vue-components'
import { computed, onMounted, reactive, ref } from 'vue'
import { t } from 'lo-utils'
import { formConfig } from './config'

import { useAddressSelect, addressProps } from './useAddress'

const list = reactive(formConfig)

const LoFormListRef = ref<LoFormInstance>()
onMounted(() => {
  console.log('LoFormListRef.value:', LoFormListRef.value?.form)
  initOptions()
})

function onFormChange(item: { field: string }, value: string | undefined, oldVal: any) {
  console.log('onFormChange:', item.field, value, oldVal)
  if (addressProps.includes(item.field)) {
    const idx = addressProps.indexOf(item.field) + 1
    const _field = list.find(i => i.field == addressProps[idx])
    if (!_field) return
    const res = useAddressSelect(item.field, value, _field)
    addressProps.slice(idx).forEach(field => LoFormListRef.value?.setFormValue(field, res[field]))
  }
}

async function handleClick() {
  const field = 'select'
  list.splice(list.length - 1, 1)
  await t(2)
  list.push({ label: 'Select', field: field, type: 'select', options: [{ label: '--all', value: 'all' }], isRelative: true })
  setTimeout(() => {
    list[list.length - 1].options = [{ label: 'reveal', value: 'reveal' }]
    if (LoFormListRef.value) LoFormListRef.value.form[field] = 'reveal'
  }, 3000)
}

function initOptions() {
  const idx = addressProps.indexOf('') + 1
  const _field = list.find(i => i.field == addressProps[idx])
  if (!_field) return
  const res = useAddressSelect('', '', _field)
  addressProps.slice(idx).forEach(field => LoFormListRef.value?.setFormValue(field, res[field]))
}

async function handleReset() {
  LoFormListRef.value?.resetFields(['email'])
}

const form = computed(() => {
  return LoFormListRef.value?.form
})

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
