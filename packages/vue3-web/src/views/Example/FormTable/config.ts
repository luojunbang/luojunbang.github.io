import type { LoFormConfig } from 'lo-vue-components'

export const formConfig: LoFormConfig = [
  { field: 'text', label: 'Text' },
  { field: 'number', label: 'Number', type: 'number' },
  { field: 'daterange', label: 'Daterange', isRange: true, type: 'date' },
  { field: 'time', label: 'Time', type: 'time' },
  { field: 'slide', label: 'Slider', type: 'slider' },
  { field: 'checkboxgroup', label: 'Checkboxgroup', type: 'checkbox-group', options: ['province1', 'province2'] },
  { field: 'radiogroup', label: 'Radiogroup', button: true, type: 'radio-group', options: ['province1', 'province2'] },
  { field: 'switch', label: 'Switch', type: 'switch' },
  { field: 'province', label: 'Province', isRelative: true, type: 'select', options: [] },
  { field: 'city', label: 'City', isRelative: true, type: 'select', options: [] },
  { field: 'country', label: 'Country', isRelative: true, type: 'select', options: [] },
  { field: 'town', label: 'town', isRelative: true, type: 'select', options: [] },
]
