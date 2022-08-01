import type LoForm from './LoForm.vue'

export type LoFormInstance = InstanceType<typeof LoForm>
import type { PropType, Ref } from 'vue'
import { FormItemRule, datePickTypes } from 'element-plus'
export const LoFormProps = {
  list: {
    type: Array as PropType<LoFormConfig>,
    default: (): LoFormConfig => [],
    validator(val) {
      return !val.some(i => {
        ;['select', 'checkbox-group', 'radio-group'].includes(i.type) && !i.options
      })
    },
  },
  inline: {
    type: Boolean,
    default: true,
  },
  rowCount: {
    type: Number,
    default: 4,
  },
  labelWidth: {
    type: String,
    default: '150px',
  },
}

export enum FORM_TYPE {
  INPUT = 'input',
  SELECT = 'select',
  TEXTAREA = 'textarea',
  CHECKBOX_GROUP = 'checkbox-group',
  RADIO_GROUP = 'radio-group',
}

export const FORM_CHANGE_EVENT = 'formChange'
export type IDatePickerType = typeof datePickTypes[number]
export const fromNormalList = ['input', 'select', 'textarea', 'number', 'time', 'checkbox', 'checkbox-group', 'switch', 'radio-group']
export type FromNormalType = typeof fromNormalList[number]
export type formType = FromNormalType | IDatePickerType

type refable<T> = Ref<T> | T

declare interface formBase {
  type?: formType
  label: string
  field: string
  value?: any
  options?: refable<LoFormOption[] | string[]>
  rules?: FormItemRule | FormItemRule[]
  required?: boolean
  isRelative?: boolean
  placeholder?: string
  valueFormat?: string
  isRange?: boolean
  controls?: boolean
  labelSlot?: string
  formSlot?: string
  throttle?: number
}

export function defaultValue(type) {
  const typeConfig = {
    number: 0,
    'checkbox-group': [],
    switch: false,
  }
  return typeConfig[type] ?? ''
}

export type LoFormOption = {
  label: string
  value: number | string
}

export type LoFormItem = formBase

export type LoFormConfig = LoFormItem[]
