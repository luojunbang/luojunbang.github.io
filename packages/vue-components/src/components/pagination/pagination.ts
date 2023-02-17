import type { PropType } from 'vue'

export const name = 'PAGINATION'

export const paginationProps = {
  total: {
    type: Number,
    default: 0,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 15,
  },
  pageSizes: {
    type: Array as PropType<number[]>,
    default() {
      return [10, 20, 30, 50]
    },
  },
  layout: {
    type: String,
    default: 'prev, pager, next, slot, jumper',
  },
  background: {
    type: Boolean,
    default: false,
  },
  autoScroll: {
    type: Boolean,
    default: true,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
}
