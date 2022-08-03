<template>
  <el-form ref="FormRef" class="lo-form" :model="form" v-bind="$attrs" :inline="inline" :label-width="labelWidth">
    <el-form-item v-for="item in list" :key="item.field" :label="item.label + ':'" :prop="item.field" :required="item.required" :rules="item.rules">
      <!-- label slot -->
      <template v-if="item.labelSlot" v-slot:label>
        <slot :name="item.labelSlot" :item="item" />
      </template>
      <!-- form item slot -->
      <template v-if="item.formSlot">
        <slot :name="item.formSlot" :item="item" />
      </template>
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
        <el-radio v-for="opt in item.options" :key="optionsFmt(opt)" :label="optionsFmt(opt)" />
      </el-radio-group>
      <!-- date -->
      <el-date-picker v-else-if="isValidDatePickType(item.type)" v-model="form[item.field]" :type="isValidDatePickType(item.type) ? (item.type as DatePickType): 'date'" :value-format="item.valueFormat ?? 'x'" :default-value="item.value" v-bind="item" />
      <!-- time -->
      <el-time-picker v-else-if="item.type === 'time'" v-model="form[item.field]" :is-range="item.isRange ?? false" :default-value="item.value" format="HH:mm" v-bind="item" />
      <!-- input-number -->
      <el-input-number v-else-if="item.type === 'number'" :type="item.type ?? 'text'" v-model="form[item.field]" :controls="item.controls ?? false" />
      <!-- input -->
      <el-input v-else :type="item.type ?? 'text'" v-model="form[item.field]" v-bind="item" />
    </el-form-item>
  </el-form>
  <button @click="handle">emit</button>
</template>

<script lang="ts" setup>
import { ElInput, ElForm, ElFormItem, ElCheckbox, datePickTypes, ElSelect, ElOption, ElDatePicker, ElTimePicker, ElInputNumber } from 'element-plus'
import { computed, defineProps, defineEmits, toRefs, ref, reactive, defineExpose, watch, unref, onMounted, shallowRef } from 'vue'
import { LoFormProps, FORM_CHANGE_EVENT, defaultValue, fromNormalList } from './LoForm'
import type { LoFormOption } from './LoForm'
import type { FormInstance, DatePickType } from 'element-plus'
import { Arrayable } from 'element-plus/es/utils'
import { throttle } from 'lo-utils'
const props = defineProps(LoFormProps)
const emits = defineEmits([FORM_CHANGE_EVENT])

const isValidDatePickType = (val: string | undefined): val is DatePickType => val !== undefined && ([...datePickTypes] as string[]).includes(val)

const FormRef = ref<FormInstance>()

function optionsFmt(opt, field = 'label') {
  return typeof opt == 'string' ? opt : opt[field]
}

const form = reactive({})
onMounted(() => {
  props.list.forEach(i => {
    i.isRelative && bindEmitWatch(i)
  })
})

const handle = throttle(() => console.log(Date.now() % 10000))

watch(props.list, () => {
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

const watchList = {}

function bindEmitWatch(item) {
  if (watchList[item.field] && typeof watchList[item.field] === 'function') {
    watchList[item.field]()
  }
  const watchFn = item.throttle
    ? throttle((val, oldVal) => {
        emits(FORM_CHANGE_EVENT, item, val, oldVal)
      }, item.throttle)
    : (val, oldVal) => {
        emits(FORM_CHANGE_EVENT, item, val, oldVal)
      }
  const stop = watch(() => form[item.field], watchFn)
  watchList[item.field] = stop
}

function validate() {
  return new Promise((rs, rj) => {
    FormRef.value?.validate((valid, obj) => {
      if (valid) rs(void 0)
      else rj(obj)
    })
  })
}
function setFormValue(field: string, val: Exclude<any, undefined>): void {
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
