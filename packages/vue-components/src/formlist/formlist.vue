<template>
  <el-form ref="FormRef" class="lo-form" :model="form" v-bind="$attrs" :inline="inline" :label-width="labelWidth">
    <el-form-item v-for="item in list" :key="item.field" :label="item.label + ':'" :prop="item.field" :required="item.required" :rules="item.rules">
      <!-- label slot -->
      <template v-if="item.labelSlot" v-slot:label>
        <slot :name="item.labelSlot" :item="item"></slot>
      </template>
      <!-- form item slot -->
      <template v-if="item.formSlot">
        <slot :name="item.formSlot" :item="item"></slot>
      </template>
      <!-- progress -->
      <!-- select -->
      <el-select v-else-if="item.type === 'select'" v-model="form[item.field]" v-bind="item">
        <el-option v-for="opt in item.options" :value="optionsFmt(opt, 'value')" :key="optionsFmt(opt, 'value')" :label="optionsFmt(opt)" />
      </el-select>
      <!-- switch -->
      <el-switch v-else-if="item.type === 'switch'" v-model="form[item.field]" />
      <!-- checkbox -->
      <el-checkbox-group v-else-if="item.type === 'checkbox-group'" v-model="form[item.field]" v-bind="item">
        <el-checkbox v-for="opt in item.options" :key="optionsFmt(opt)" :label="optionsFmt(opt)" />
      </el-checkbox-group>
      <!-- radio -->
      <el-radio-group v-else-if="item.type === 'radio-group'" v-model="form[item.field]" v-bind="item">
        <template v-if="item.button">
          <el-radio-button v-for="opt in item.options" :key="optionsFmt(opt)" :label="optionsFmt(opt)" />
        </template>
        <template v-else>
          <el-radio v-for="opt in item.options" :key="optionsFmt(opt)" :label="optionsFmt(opt)" />
        </template>
      </el-radio-group>
      <!-- date -->
      <el-date-picker v-else-if="isValidDatePickType(item.type)" v-model="form[item.field]" :type="item.type" :value-format="item.valueFormat ?? 'x'" :default-value="item.value" />
      <!-- time -->
      <el-time-picker v-else-if="item.type === 'time'" v-model="form[item.field]" :is-range="item.isRange ?? false" :default-value="item.value" format="HH:mm" v-bind="item" />
      <!-- input-number -->
      <el-input-number v-else-if="item.type === 'number'" v-model="form[item.field]" :controls="item.controls ?? false" />
      <!-- input -->
      <el-input v-else :type="item.type ?? 'text'" v-model="form[item.field]" v-bind="item" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
// import { ElInput, ElSwitch, ElRadio, ElRadioButton, ElRadioGroup, ElForm, ElFormItem, ElCheckbox, ElCheckboxGroup, ElSelect, ElOption, ElDatePicker, ElTimePicker, ElInputNumber } from 'element-plus'

import { datePickTypes } from 'element-plus'
import type { WatchStopHandle } from 'vue'
import { ref, reactive, watch, unref, onMounted } from 'vue'

import type { LoFormItem, LoSelectOption, LoFormContext } from './formlist'
import { loFormProps, FORM_CHANGE_EVENT, defaultValue } from './formlist'
import type { FormInstance, DatePickType } from 'element-plus'
import type { Arrayable } from 'element-plus/es/utils'
import { isJSType, throttle } from 'lo-utils'

// props
const props = defineProps(loFormProps)

// emits
const emits = defineEmits({
  [FORM_CHANGE_EVENT]: (item: LoFormItem, val: any, oldVal: any) => true,
})

const isValidDatePickType = (val: string | undefined): val is DatePickType => val !== undefined && ([...datePickTypes] as string[]).includes(val)

// refs
const FormRef = ref<FormInstance>()
const form = reactive<Record<string, any>>({})
const watchList: Record<string, WatchStopHandle> = {}

function optionsFmt(opt: unknown, field: 'label' | 'value' = 'label') {
  if (isJSType(opt, 'object') && Reflect.has(opt as LoSelectOption, field)) return (opt as LoSelectOption)[field]
  else return opt as string
}

// methods
const initFormValue = () => {
  props.list.forEach(i => {
    if (!Reflect.get(form, i.field)) {
      Reflect.set(form, i.field, i.value ?? defaultValue(i.type))
      i.isRelative && bindEmitWatch(i)
    }
  })
}

const bindEmitWatch = (item: LoFormItem) => {
  if (watchList[item.field] && typeof watchList[item.field] === 'function') {
    watchList[item.field]()
  }
  const watchFn = item.throttle
    ? throttle((val, oldVal) => {
        emits(FORM_CHANGE_EVENT, item, val, oldVal)
      }, item.throttle)
    : (val: any, oldVal: any) => {
        emits(FORM_CHANGE_EVENT, item, val, oldVal)
      }
  const stop = watch(() => form[item.field], watchFn)
  watchList[item.field] = stop
}

const validate = () => {
  return new Promise((rs, rj) => {
    FormRef.value?.validate((valid, obj) => {
      if (valid) rs(void 0)
      else rj(obj)
    })
  })
}

const setFormValue: LoFormContext['setFormValue'] = (field: string, val: Exclude<any, undefined>): void => {
  form[field] = val
}

const resetFields = (fields?: Arrayable<string>) => {
  FormRef.value?.resetFields(fields)
}

// watch
watch(props.list, () => {
  const list = unref(props.list)
  Reflect.ownKeys(form).forEach(i => {
    if (list.findIndex(({ field }) => i == field) == -1) Reflect.deleteProperty(form, i)
  })
  initFormValue()
})

// lifecycle
onMounted(() => {
  initFormValue()
})

defineExpose({
  form,
  validate,
  setFormValue,
  resetFields,
})
</script>

<style lang="scss">
.lo-form {
  overflow: hidden;
  &.el-form--inline {
    margin-right: -32px;
    .el-form-item {
      width: calc((100% / v-bind(rowCount)) - 32px);
    }
    .el-form-item__content {
      width: calc(100% - v-bind(labelWidth));
    }
  }
}
</style>
