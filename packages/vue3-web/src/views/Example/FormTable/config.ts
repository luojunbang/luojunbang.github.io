import { LoFormInstance, LoFormConfig, LoFormItem, LoFormOption } from '@lo/vue-components'

export const formConfig:LoFormConfig = [
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
      field: 'radiogroupbutton',
      label: 'Radiogroup',
      type: 'radio-group',
      button: true,
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
  ]