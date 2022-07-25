<template>
  <div>
    <LoForm ref="LoFormRef" label-position="right" :list="list" :inline="true" @formChange="onFormChange" />
  </div>
  <div class="mg-t-lg" style="word-break: break-word; width: 500px">{{ JSON.stringify(form) }}</div>
  <button @click="handleClick">Push</button>
  <button @click="handleSubmit">Submit</button>
</template>

<script lang="ts" setup>
import LoForm from '@/components/LoFormVue/LoForm.vue'
import { LoFormInstance, LoFormConfig, LoFormItem, LoFormOption } from '@/components/LoFormVue/LoForm'
import { computed } from '@vue/reactivity'
import { onMounted, reactive, ref, defineExpose } from 'vue'
import { r } from 'lo-utils'
import { datePickTypes } from 'element-plus'
const provinceOptions = reactive([
  { label: 'Please Select', value: '' },
  { label: 'province1', value: 'province1' },
  { label: 'province2', value: 'province2' },
])

let list = reactive<LoFormItem[]>([
  { field: 'text', label: 'Text' },
  { field: 'textarea', label: 'Textarea', type: 'textarea' },
  { field: 'number', label: 'Number', type: 'number' },
  { field: 'email', label: 'email', isRelative: true },
  {
    field: 'province',
    label: 'Province',
    isRelative: true,
    type: 'select',
    options: provinceOptions,
  },
  { field: 'city', label: 'City', isRelative: true, type: 'select', options: [] },
  { field: 'area', label: 'Area', isRelative: true, type: 'select', options: [] },
  ...datePickTypes.map(i => {
    return {
      field: i,
      type: i,
      label: i.toUpperCase(),
    }
  }),
  { field: 'time', label: 'Time', type: 'time' },
  { field: 'timerange', label: 'Timerange', isRange: true, type: 'time' },
])

const LoFormRef = ref<LoFormInstance>()
onMounted(() => {
  console.log('LoFormRef.value:', LoFormRef.value?.form)
})

function onFormChange(item: LoFormItem, value) {
  console.log('onFormChange:', item.field, value)
  if (['province', 'city', 'area'].includes(item.field)) {
    CitySelect(item.field as CityProps, value)
      ?.then(res => {
        console.log('CitySelect:', res)
        ;['city', 'area'].forEach(field => {
          res[field] !== undefined && LoFormRef.value?.setFormValue(field, res[field])
          const _idx = list.findIndex(i => i.field === field)
          _idx != -1 && res[field + 'Options'] !== undefined && (list[_idx].options = res[field + 'Options'])
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

function handleClick() {
  const field = 'select' + r(2)
  list.push({ label: 'Select', field: field, type: 'select', options: [{ label: '--all', value: 'all' }] })
  setTimeout(() => {
    list[list.length - 1].options = [{ label: 'reveal', value: 'reveal' }]
    if (LoFormRef.value) LoFormRef.value.form[field] = 'reveal'
  }, 3000)
}

const form = computed(() => {
  return LoFormRef.value?.form
})

function handleSubmit() {
  LoFormRef.value
    ?.validate()
    .then(res => {
      console.log()
    })
    .catch(err => {
      console.log(err)
    })
}

type CityProps = 'province' | 'city' | 'area'
const CitySelect = (step: CityProps, val) => {
  const list = ['province', 'city', 'area']
  const ans: {
    province?: string
    city?: string
    area?: string
    cityOptions?: LoFormOption[]
    areaOptions?: LoFormOption[]
  } = {}
  const handler = {
    province: val => {},
    city: province => {
      return new Promise((rs, rj) => {
        ans.city = ''
        if (province == '') {
          rs('')
          ans.cityOptions = []
        } else {
          setTimeout(() => {
            ans.cityOptions = [province + '-city1', province + '-city2'].map(i => ({ label: i, value: i }))
            rs('')
          }, 1000)
        }
      })
    },
    area: city => {
      return new Promise((rs, rj) => {
        ans.area = ''
        if (city == '') {
          rs('')
          ans.areaOptions = []
        } else {
          setTimeout(() => {
            ans.areaOptions = [city + '-area1', city + '-area2'].map(i => ({ label: i, value: i }))
            rs('')
          }, 1000)
        }
      })
    },
  }
  const startIdx = list.indexOf(step)
  if (startIdx == -1) return
  return list
    .slice(startIdx + 1)
    .reduce((rs, item) => {
      return rs.then(res => handler[item](res))
    }, Promise.resolve(val))
    .then(res => ans)
}
</script>
