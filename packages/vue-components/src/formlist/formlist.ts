import Formlist from './formlist.vue'

import type { PropType, Ref, ExtractPropTypes } from 'vue'

import type { FormItemRule, datePickTypes } from 'element-plus'

export const loFormProps = {
  list: {
    type: Array as PropType<LoFormConfig>,
    default: (): LoFormConfig => [],
    validator(val: LoFormConfig) {
      return !val.some(i => {
        i.type && ['select', 'checkbox-group', 'radio-group'].includes(i.type) && !i.options
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
export const fromNormalList = ['input', 'select', 'textarea', 'number', 'time', 'checkbox', 'checkbox-group', 'switch', 'radio-group', 'slider']
export type FromNormalType = typeof fromNormalList[number]
export type LoFormType = FromNormalType | IDatePickerType

type refable<T> = Ref<T> | T

export declare interface LoFormBase extends Record<string, any> {
  type?: LoFormType
  label: string
  field: string
  value?: any
  options?: LoFormOption
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

export function defaultValue(type?: LoFormType) {
  if (!type) return ''
  const typeConfig: Record<LoFormType, any> = {
    number: 0,
    'checkbox-group': [],
    switch: false,
  }
  return typeConfig[type] ?? ''
}

export interface LoSelectOption extends Record<string, any> {
  label: string
  value: number | string
}

export type LoFormOption = refable<LoSelectOption[] | string[]>
export type LoFormItem = LoFormBase

export type LoFormConfig = LoFormItem[]

export type LoFormProps = ExtractPropTypes<typeof loFormProps>

export type LoFormContext = LoFormProps & {
  form: Record<string, any>
  setFormValue: (field: string, val: Exclude<any, undefined>) => void
}
