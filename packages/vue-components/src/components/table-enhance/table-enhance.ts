import type { Prop, PropType } from 'vue'

export type LoTableColumn = Record<string | 'label' | 'fields', any>

export const tableEnhanceProps = {
  height: {
    type: String || Number,
    default: '100%',
  },
  isHideIndexCol: {
    type: Boolean,
    default: false,
  },
  isFixedSelection: {
    type: Boolean,
    default: false,
  },
  canSelect: {
    type: Boolean,
    default: false,
  },
  pageField: { default: 'page' },
  rowsField: { default: 'rows' },
  selectable: {
    type: Function as PropType<(row: any, index: number) => true>,
    default: (row: any, index: number) => true,
  },
  sortable: {
    type: [Boolean, String],
    default: 'custom',
  },
  data: {
    type: Array,
    default: () => [],
  },
  query: {
    type: Object,
    default: () => {},
  },
  columns: {
    type: Array as PropType<LoTableColumn>,
    default: () => [],
  },
}
