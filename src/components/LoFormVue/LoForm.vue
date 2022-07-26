<template>
  <el-form ref="FormRef" size="large" class="lo-form" :model="form" v-bind="$attrs" :inline="inline" :label-width="labelWidth">
    <el-form-item v-for="item in list" :key="item.field" :label="item.label + ':'" :prop="item.field" :required="item.required" :rules="item.rules">
      <template v-if="item.labelSlot" v-slot:label>
        <slot :name="item.labelSlot" :item="item" />
      </template>
      <template v-if="item.formSlot">
        <slot :name="item.formSlot" :item="item" />
      </template>
      <el-select v-else-if="item.type === 'select'" v-model="form[item.field]" clearable>
        <el-option v-for="opt in item.options" :value="opt.value" :key="opt.value" :label="opt.label" />
      </el-select>
      <el-date-picker
        v-else-if="datePickTypes.includes(item.type as IDatePickerType)"
        v-model="form[item.field]"
        :type="(item.type as IDatePickerType)"
        :value-format="item.valueFormat ?? 'x'"
        :default-value="item.value"
      />
      <el-time-picker v-else-if="item.type === 'time'" v-model="form[item.field]" :is-range="item.isRange ?? false" :default-value="item.value" format="HH:mm" />
      <el-input-number v-else-if="item.type === 'number'" :type="item.type ?? 'text'" v-model="form[item.field]" :controls="item.controls ?? false" />
      <el-input v-else :type="item.type ?? 'text'" v-model="form[item.field]" v-bind="item" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { ElInput, ElForm, ElFormItem, ElCheckbox, datePickTypes } from 'element-plus'
import { defineProps, defineEmits, toRefs, ref, reactive, defineExpose, watch, unref, onMounted, shallowRef } from 'vue'
import { IDatePickerType, LoFormProps, FORM_CHANGE_EVENT, defaultValue } from './LoForm'
import type { FormInstance } from 'element-plus'
import { Arrayable } from 'element-plus/es/utils'
const props = defineProps(LoFormProps)
const emits = defineEmits([FORM_CHANGE_EVENT])

const FormRef = ref<FormInstance>()

const form = reactive(
  props.list.reduce((rs, i) => {
    rs[i.field] = i.value ?? defaultValue(i.type)
    return rs
  }, {}),
)
onMounted(() => {
  props.list.forEach(i => {
    i.isRelative && bindEmitWatch(i)
  })
})

// console.log(form)
// const rowCount = ref(3)
watch(props.list, () => {
  console.log('watch emit')
  const list = unref(props.list)
  Reflect.ownKeys(form).forEach(i => {
    if (list.findIndex(({ field }) => i == field) == -1) delete form[i]
  })
  list.forEach(i => {
    if (form[i.field] == undefined) {
      form[i.field] = i.value ?? ''
      i.isRelative && bindEmitWatch(i)
    }
  })
})

console.log('formList', props.list)
console.log('form', form)

function bindEmitWatch(item) {
  watch(
    () => form[item.field],
    val => {
      console.log('bindEmitWatch:', item.field, ' Emit')
      emits(FORM_CHANGE_EVENT, item, val)
    },
  )
}

function validate() {
  return new Promise((rs, rj) => {
    FormRef.value?.validate((valid, obj) => {
      if (valid) rs(void 0)
      else rj(obj)
    })
  })
}
function setFormValue(field, val) {
  form[field] = val
}
function resetFields(fields?: Arrayable<string>) {
  FormRef.value?.resetFields(fields)
}

defineExpose({
  form,
  validate,
  setFormValue,
  resetFields,
})
</script>

<style lang="scss">
.lo-form.el-form--inline {
  margin-right: -32px;
  .el-form-item {
    width: calc((100% / v-bind(rowCount)) - 32px);
  }
  .el-form-item__content {
    width: calc(100% - v-bind(labelWidth));
  }
}
</style>
